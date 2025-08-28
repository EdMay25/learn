import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import { GoogleGenerativeAI } from '@google/generative-ai';

interface AnalysisRequestBody {
    age: string;
    gender: string;
    mainComplaint: string;
    additionalSymptoms: string[];
    duration: string;
}

export async function POST(req: NextRequest) {
    try {
        const { age, gender, mainComplaint, additionalSymptoms, duration }: AnalysisRequestBody = await req.json();

        // 1. Вызов RapidAPI "AI Medical Diagnosis API"
        const rapidApiUrl = 'https://ai-medical-diagnosis-api-symptoms-to-results.p.rapidapi.com/api/v1/diagnosis';
        const rapidApiKey = process.env.RAPIDAPI_KEY;
        const rapidApiHost = 'ai-medical-diagnosis-api-symptoms-to-results.p.rapidapi.com';

        if (!rapidApiKey) {
            return NextResponse.json({ error: 'RAPIDAPI_KEY is not set' }, { status: 500 });
        }

        const medicalApiResponse = await axios.post(rapidApiUrl, {
            age: parseInt(age),
            gender: gender,
            symptoms: [mainComplaint, ...additionalSymptoms].join(', '), // Объединяем все симптомы
            duration: duration // Возможно, потребуется преобразование формата для API
        }, {
            headers: {
                'x-rapidapi-key': rapidApiKey,
                'x-rapidapi-host': rapidApiHost,
                'Content-Type': 'application/json'
            }
        });

        const medicalData = medicalApiResponse.data;

        // 2. Формирование промпта для Gemini API
        const geminiPrompt = `
            Ты — медицинский ассистент на базе ИИ. Твоя задача — проанализировать предоставленные медицинские данные и представить их в структурированном, понятном для пользователя виде на русском языке.

            **Входные данные:**
            *   **Информация о пациенте:**
                *   Возраст: ${age}
                *   Пол: ${gender === 'male' ? 'мужской' : 'женский'}
                *   Основная жалоба: ${mainComplaint}
                *   Дополнительные симптомы: ${additionalSymptoms.join(', ')}
                *   Длительность симптомов: ${duration}
            *   **Данные от медицинского API:**
                ${JSON.stringify(medicalData, null, 2)}

            **Твоя задача:**
            На основе этих данных, сгенерируй JSON-объект со следующими ключами: \`preliminaryAssessment\`, \`possibleCauses\`, \`urgencyLevel\`, \`recommendations\`, \`doctorRecommendation\`.

            **Требования к содержанию:**
            1.  **\`preliminaryAssessment\`:** Краткое резюме ситуации на 1-2 предложения.
            2.  **\`possibleCauses\`:** Список наиболее вероятных состояний из ответа медицинского API. Если медицинский API не предоставил конкретных причин, используй общие формулировки.
            3.  **\`urgencyLevel\`:** Оценка срочности (Низкая, Средняя, Высокая) с пояснением.
            4.  **\`recommendations\`:** Общие немедикаментозные рекомендации.
            5.  **\`doctorRecommendation\`:** К какому специалисту обратиться.
            6.  **Важно:** В конце анализа обязательно добавь напоминание: "Этот анализ не является медицинским диагнозом. Для точной диагностики и лечения обратитесь к врачу."

            Твой ответ должен быть только в формате JSON.
        `;

        // 3. Вызов Gemini Flash 2.5 API
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const result = await model.generateContent(geminiPrompt);
        const response = await result.response;
        const text = response.text();

        // Попытка парсинга JSON, так как Gemini может вернуть текст с дополнительными символами
        let geminiAnalysis;
        try {
            geminiAnalysis = JSON.parse(text.replace(/```json\n|```/g, '').trim());
        } catch (parseError) {
            console.error("Failed to parse Gemini response as JSON:", text, parseError);
            return NextResponse.json({ error: 'Failed to parse AI analysis', rawResponse: text }, { status: 500 });
        }

        return NextResponse.json(geminiAnalysis);

    } catch (error: unknown) {
        let errorMessage = 'An unknown error occurred';
        let errorDetails: unknown = {};

        if (axios.isAxiosError(error)) {
            errorMessage = 'Failed to analyze symptoms with external API';
            errorDetails = error.response?.data || error.message;
        } else if (error instanceof Error) {
            errorMessage = 'Failed to analyze symptoms';
            errorDetails = error.message;
        }

        console.error('API Error:', errorDetails);
        return NextResponse.json({ error: errorMessage, details: errorDetails }, { status: 500 });
    }
}

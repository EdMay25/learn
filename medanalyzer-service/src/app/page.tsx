"use client";

import React, { useState } from 'react';

interface AnalysisResult {
    preliminaryAssessment: string;
    possibleCauses: string;
    urgencyLevel: string;
    recommendations: string;
    doctorRecommendation: string;
}

export default function Home() {
    const [patientAge, setPatientAge] = useState('');
    const [patientGender, setPatientGender] = useState('');
    const [mainComplaint, setMainComplaint] = useState('');
    const [additionalSymptoms, setAdditionalSymptoms] = useState<string[]>([]);
    const [duration, setDuration] = useState('');
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState<AnalysisResult | null>(null);

    const medicalKnowledgeBase = {
        symptoms: {
            'fever': { name: 'Повышенная температура', severity: 2 },
            'fatigue': { name: 'Слабость/усталость', severity: 1 },
            'nausea': { name: 'Тошнота', severity: 2 },
            'dizziness': { name: 'Головокружение', severity: 2 },
            'cough': { name: 'Кашель', severity: 1 },
            'soreThroat': { name: 'Боль в горле', severity: 1 },
            'bodyAches': { name: 'Боли в теле', severity: 2 },
            'chills': { name: 'Озноб', severity: 2 }
        },
        conditions: [
            {
                name: 'Острая респираторная вирусная инфекция (ОРВИ)',
                symptoms: ['fever', 'fatigue', 'cough', 'soreThroat', 'bodyAches'],
                urgency: 'low',
                doctor: 'терапевт'
            },
            {
                name: 'Грипп',
                symptoms: ['fever', 'fatigue', 'bodyAches', 'chills', 'cough'],
                urgency: 'medium',
                doctor: 'терапевт'
            },
            {
                name: 'Мигрень',
                symptoms: ['nausea', 'dizziness', 'fatigue'],
                urgency: 'low',
                doctor: 'невролог'
            },
            {
                name: 'Пищевое отравление',
                symptoms: ['nausea', 'dizziness', 'fatigue'],
                urgency: 'medium',
                doctor: 'гастроэнтеролог'
            }
        ]
    };

    const handleSymptomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target;
        setAdditionalSymptoms(prev =>
            checked ? [...prev, value] : prev.filter(s => s !== value)
        );
    };

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!patientAge || !patientGender || !mainComplaint || !duration) {
            alert('Пожалуйста, заполните все обязательные поля');
            return;
        }

        setLoading(true);
        setResults(null); // Сбросить предыдущие результаты

        try {
            // Здесь будет реальный вызов API
            const response = await fetch('/api/analyze', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    age: patientAge,
                    gender: patientGender,
                    mainComplaint,
                    additionalSymptoms,
                    duration,
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            displayResults(data);

        } catch (error) {
            console.error('Error analyzing symptoms:', error);
            alert('Произошла ошибка при анализе симптомов. Попробуйте снова.');
        } finally {
            setLoading(false);
        }
    };

    const displayResults = (analysis: {
        preliminaryAssessment: string;
        possibleCauses: string;
        urgencyLevel: string;
        recommendations: string;
        doctorRecommendation: string;
    } | null) => {
        setResults(analysis);
        // Прокрутка к результатам
        setTimeout(() => {
            document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    const formatText = (text: string) => {
        return text
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\n/g, '<br>')
            .replace(/•/g, '<br>•');
    };

    return (
        <div className="container">
            <div className="header">
                <h1 className="logo">🏥 MedAnalyzer</h1>
                <p className="tagline">Интеллектуальный анализ симптомов с использованием ИИ</p>
            </div>

            <div className="main-card">
                <div className="api-info">
                    <strong>Демо-режим:</strong> В реальной версии используются медицинские API (Infermedica, ApiMedic) и Gemini API для анализа. Здесь показана имитация работы системы.
                </div>

                <form onSubmit={handleFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="patientAge">Возраст пациента:</label>
                        <input
                            type="text"
                            id="patientAge"
                            placeholder="Например: 25 лет"
                            required
                            value={patientAge}
                            onChange={(e) => setPatientAge(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="patientGender">Пол:</label>
                        <select
                            id="patientGender"
                            required
                            value={patientGender}
                            onChange={(e) => setPatientGender(e.target.value)}
                        >
                            <option value="">Выберите пол</option>
                            <option value="male">Мужской</option>
                            <option value="female">Женский</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="mainComplaint">Основная жалоба (подробно опишите симптомы):</label>
                        <textarea
                            id="mainComplaint"
                            placeholder="Например: Головная боль в течение 3 дней, усиливается к вечеру, сопровождается тошнотой..."
                            required
                            value={mainComplaint}
                            onChange={(e) => setMainComplaint(e.target.value)}
                        ></textarea>
                    </div>

                    <div className="form-group">
                        <label>Дополнительные симптомы (отметьте подходящие):</label>
                        <div className="symptoms-grid" id="symptomsGrid">
                            {Object.entries(medicalKnowledgeBase.symptoms).map(([key, symptom]) => (
                                <div
                                    key={key}
                                    className={`symptom-checkbox ${additionalSymptoms.includes(key) ? 'selected' : ''}`}
                                    onClick={() => {
                                        const input = document.getElementById(key) as HTMLInputElement;
                                        if (input) {
                                            input.checked = !input.checked;
                                            handleSymptomChange({ target: input } as React.ChangeEvent<HTMLInputElement>);
                                        }
                                    }}
                                >
                                    <input
                                        type="checkbox"
                                        id={key}
                                        value={key}
                                        checked={additionalSymptoms.includes(key)}
                                        onChange={handleSymptomChange}
                                    />
                                    <label htmlFor={key}>{symptom.name}</label>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="duration">Длительность симптомов:</label>
                        <select
                            id="duration"
                            required
                            value={duration}
                            onChange={(e) => setDuration(e.target.value)}
                        >
                            <option value="">Выберите период</option>
                            <option value="less_than_day">Менее суток</option>
                            <option value="1-3_days">1-3 дня</option>
                            <option value="4-7_days">4-7 дней</option>
                            <option value="1-2_weeks">1-2 недели</option>
                            <option value="more_than_month">Более месяца</option>
                        </select>
                    </div>

                    <button type="submit" className="analyze-btn" id="analyzeBtn" disabled={loading}>
                        Анализировать симптомы
                    </button>
                </form>

                {loading && (
                    <div className="loading show" id="loading">
                        <div className="spinner"></div>
                        <span>Анализируем симптомы с помощью ИИ...</span>
                    </div>
                )}

                {results && (
                    <div className="results show" id="results">
                        <h3>
                            <svg className="results-icon" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                            </svg>
                            Результаты анализа
                        </h3>
                        
                        <div className="analysis-section">
                            <h4>🔍 Предварительная оценка</h4>
                            <div dangerouslySetInnerHTML={{ __html: formatText(results.preliminaryAssessment) }}></div>
                        </div>

                        <div className="analysis-section">
                            <h4>🏥 Возможные причины</h4>
                            <div dangerouslySetInnerHTML={{ __html: formatText(results.possibleCauses) }}></div>
                        </div>

                        <div className="analysis-section">
                            <h4>⚠️ Уровень срочности</h4>
                            <div dangerouslySetInnerHTML={{ __html: formatText(results.urgencyLevel) }}></div>
                        </div>

                        <div className="analysis-section">
                            <h4>💡 Рекомендации</h4>
                            <div dangerouslySetInnerHTML={{ __html: formatText(results.recommendations) }}></div>
                        </div>

                        <div className="analysis-section">
                            <h4>🏥 К какому врачу обратиться</h4>
                            <div dangerouslySetInnerHTML={{ __html: formatText(results.doctorRecommendation) }}></div>
                        </div>
                    </div>
                )}

                <div className="disclaimer">
                    <strong>⚠️ Важное предупреждение:</strong> Данный сервис предназначен только для информационных целей и не заменяет профессиональную медицинскую консультацию, диагностику или лечение. При серьезных симптомах немедленно обратитесь к врачу или вызовите скорую помощь.
                </div>
            </div>
        </div>
    );
}

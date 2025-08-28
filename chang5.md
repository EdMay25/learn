[01:25:04.475] Running build in Washington, D.C., USA (East) – iad1
[01:25:04.475] Build machine configuration: 2 cores, 8 GB
[01:25:04.518] Cloning github.com/EdMay25/learn (Branch: main, Commit: a5c1925)
[01:25:04.531] Skipping build cache, deployment was triggered without cache.
[01:25:04.984] Cloning completed: 466.000ms
[01:25:05.366] Running "vercel build"
[01:25:05.951] Vercel CLI 46.0.5
[01:25:06.539] Installing dependencies...
[01:25:18.586] 
[01:25:18.587] added 342 packages in 12s
[01:25:18.587] 
[01:25:18.588] 141 packages are looking for funding
[01:25:18.588]   run `npm fund` for details
[01:25:18.639] Running "npm run build"
[01:25:18.748] 
[01:25:18.749] > medanalyzer-service@0.1.0 build
[01:25:18.749] > next build --turbopack
[01:25:18.750] 
[01:25:19.541] Attention: Next.js now collects completely anonymous telemetry regarding usage.
[01:25:19.542] This information is used to shape Next.js' roadmap and prioritize features.
[01:25:19.542] You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
[01:25:19.542] https://nextjs.org/telemetry
[01:25:19.542] 
[01:25:19.594]    ▲ Next.js 15.5.2 (Turbopack)
[01:25:19.595] 
[01:25:19.675]    Creating an optimized production build ...
[01:25:26.800]  ✓ Finished writing to disk in 8ms
[01:25:26.823] 
[01:25:26.823] > Build error occurred
[01:25:26.828] Error: Turbopack build failed with 4 errors:
[01:25:26.828] ./src/app/api/analyze/route.ts:3:1
[01:25:26.829] Module not found: Can't resolve '@google/generative-ai'
[01:25:26.829] [0m [90m 1 |[39m [36mimport[39m { [33mNextRequest[39m[33m,[39m [33mNextResponse[39m } [36mfrom[39m [32m'next/server'[39m[33m;[39m
[01:25:26.829]  [90m 2 |[39m [36mimport[39m axios [36mfrom[39m [32m'axios'[39m[33m;[39m
[01:25:26.830] [31m[1m>[22m[39m[90m 3 |[39m [36mimport[39m { [33mGoogleGenerativeAI[39m } [36mfrom[39m [32m'@google/generative-ai'[39m[33m;[39m
[01:25:26.830]  [90m   |[39m [31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m
[01:25:26.830]  [90m 4 |[39m
[01:25:26.830]  [90m 5 |[39m [36minterface[39m [33mAnalysisRequestBody[39m {
[01:25:26.831]  [90m 6 |[39m     age[33m:[39m string[33m;[39m[0m
[01:25:26.831] 
[01:25:26.831] 
[01:25:26.831] 
[01:25:26.831] https://nextjs.org/docs/messages/module-not-found
[01:25:26.831] 
[01:25:26.832] 
[01:25:26.832] ./src/app/api/analyze/route.ts:3:1
[01:25:26.832] Module not found: Can't resolve '@google/generative-ai'
[01:25:26.832] [0m [90m 1 |[39m [36mimport[39m { [33mNextRequest[39m[33m,[39m [33mNextResponse[39m } [36mfrom[39m [32m'next/server'[39m[33m;[39m
[01:25:26.840]  [90m 2 |[39m [36mimport[39m axios [36mfrom[39m [32m'axios'[39m[33m;[39m
[01:25:26.840] [31m[1m>[22m[39m[90m 3 |[39m [36mimport[39m { [33mGoogleGenerativeAI[39m } [36mfrom[39m [32m'@google/generative-ai'[39m[33m;[39m
[01:25:26.841]  [90m   |[39m [31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m
[01:25:26.841]  [90m 4 |[39m
[01:25:26.841]  [90m 5 |[39m [36minterface[39m [33mAnalysisRequestBody[39m {
[01:25:26.842]  [90m 6 |[39m     age[33m:[39m string[33m;[39m[0m
[01:25:26.842] 
[01:25:26.842] 
[01:25:26.842] 
[01:25:26.842] https://nextjs.org/docs/messages/module-not-found
[01:25:26.843] 
[01:25:26.843] 
[01:25:26.843] ./src/app/api/analyze/route.ts:2:1
[01:25:26.843] Module not found: Can't resolve 'axios'
[01:25:26.844] [0m [90m 1 |[39m [36mimport[39m { [33mNextRequest[39m[33m,[39m [33mNextResponse[39m } [36mfrom[39m [32m'next/server'[39m[33m;[39m
[01:25:26.844] [31m[1m>[22m[39m[90m 2 |[39m [36mimport[39m axios [36mfrom[39m [32m'axios'[39m[33m;[39m
[01:25:26.844]  [90m   |[39m [31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m
[01:25:26.846]  [90m 3 |[39m [36mimport[39m { [33mGoogleGenerativeAI[39m } [36mfrom[39m [32m'@google/generative-ai'[39m[33m;[39m
[01:25:26.847]  [90m 4 |[39m
[01:25:26.847]  [90m 5 |[39m [36minterface[39m [33mAnalysisRequestBody[39m {[0m
[01:25:26.847] 
[01:25:26.847] 
[01:25:26.848] 
[01:25:26.848] https://nextjs.org/docs/messages/module-not-found
[01:25:26.848] 
[01:25:26.848] 
[01:25:26.848] ./src/app/api/analyze/route.ts:2:1
[01:25:26.848] Module not found: Can't resolve 'axios'
[01:25:26.849] [0m [90m 1 |[39m [36mimport[39m { [33mNextRequest[39m[33m,[39m [33mNextResponse[39m } [36mfrom[39m [32m'next/server'[39m[33m;[39m
[01:25:26.854] [31m[1m>[22m[39m[90m 2 |[39m [36mimport[39m axios [36mfrom[39m [32m'axios'[39m[33m;[39m
[01:25:26.854]  [90m   |[39m [31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m[31m[1m^[22m[39m
[01:25:26.854]  [90m 3 |[39m [36mimport[39m { [33mGoogleGenerativeAI[39m } [36mfrom[39m [32m'@google/generative-ai'[39m[33m;[39m
[01:25:26.855]  [90m 4 |[39m
[01:25:26.855]  [90m 5 |[39m [36minterface[39m [33mAnalysisRequestBody[39m {[0m
[01:25:26.856] 
[01:25:26.856] 
[01:25:26.856] 
[01:25:26.856] https://nextjs.org/docs/messages/module-not-found
[01:25:26.856] 
[01:25:26.857] 
[01:25:26.857]     at <unknown> (./src/app/api/analyze/route.ts:3:1)
[01:25:26.857]     at <unknown> (https://nextjs.org/docs/messages/module-not-found)
[01:25:26.857]     at <unknown> (./src/app/api/analyze/route.ts:3:1)
[01:25:26.857]     at <unknown> (https://nextjs.org/docs/messages/module-not-found)
[01:25:26.857]     at <unknown> (./src/app/api/analyze/route.ts:2:1)
[01:25:26.858]     at <unknown> (https://nextjs.org/docs/messages/module-not-found)
[01:25:26.858]     at <unknown> (./src/app/api/analyze/route.ts:2:1)
[01:25:26.858]     at <unknown> (https://nextjs.org/docs/messages/module-not-found)
[01:25:26.874] Error: Command "npm run build" exited with 1
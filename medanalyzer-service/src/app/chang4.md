[01:16:49.599] Running build in Washington, D.C., USA (East) – iad1
[01:16:49.599] Build machine configuration: 2 cores, 8 GB
[01:16:49.615] Cloning github.com/EdMay25/learn (Branch: main, Commit: 6cfd08c)
[01:16:49.627] Skipping build cache, deployment was triggered without cache.
[01:16:49.943] Cloning completed: 328.000ms
[01:16:50.333] Running "vercel build"
[01:16:50.738] Vercel CLI 46.0.5
[01:16:51.390] Installing dependencies...
[01:17:03.391] 
[01:17:03.392] added 342 packages in 12s
[01:17:03.393] 
[01:17:03.394] 141 packages are looking for funding
[01:17:03.394]   run `npm fund` for details
[01:17:03.444] Running "npm run build"
[01:17:03.558] 
[01:17:03.559] > medanalyzer-service@0.1.0 build
[01:17:03.559] > next build --turbopack
[01:17:03.559] 
[01:17:04.360]  ⚠ Warning: Next.js inferred your workspace root, but it may not be correct.
[01:17:04.362]  We detected multiple lockfiles and selected the directory of /vercel/path0/package-lock.json as the root directory.
[01:17:04.362]  To silence this warning, set `turbopack.root` in your Next.js config, or consider removing one of the lockfiles if it's not needed.
[01:17:04.363]    See https://nextjs.org/docs/app/api-reference/config/next-config-js/turbopack#root-directory for more information.
[01:17:04.363]  Detected additional lockfiles: 
[01:17:04.363]    * /vercel/path0/medanalyzer-service/package-lock.json
[01:17:04.364] 
[01:17:04.369] Attention: Next.js now collects completely anonymous telemetry regarding usage.
[01:17:04.370] This information is used to shape Next.js' roadmap and prioritize features.
[01:17:04.370] You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
[01:17:04.371] https://nextjs.org/telemetry
[01:17:04.371] 
[01:17:04.424]    ▲ Next.js 15.5.2 (Turbopack)
[01:17:04.424] 
[01:17:04.505]    Creating an optimized production build ...
[01:17:12.496]  ✓ Finished writing to disk in 17ms
[01:17:12.515]  ✓ Compiled successfully in 7.3s
[01:17:12.525]    Linting and checking validity of types ...
[01:17:16.012] 
[01:17:16.014] Failed to compile.
[01:17:16.014] 
[01:17:16.014] ./src/app/api/analyze/route.ts
[01:17:16.014] 80:21  Error: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
[01:17:16.014] 
[01:17:16.014] ./src/app/page.tsx
[01:17:16.014] 3:27  Warning: 'useEffect' is defined but never used.  @typescript-eslint/no-unused-vars
[01:17:16.014] 108:39  Error: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
[01:17:16.014] 
[01:17:16.015] info  - Need to disable some ESLint rules? Learn more here: https://nextjs.org/docs/app/api-reference/config/eslint#disabling-rules
[01:17:16.047] Error: Command "npm run build" exited with 1
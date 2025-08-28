[01:08:08.394] Running build in Washington, D.C., USA (East) – iad1
[01:08:08.395] Build machine configuration: 2 cores, 8 GB
[01:08:08.416] Cloning github.com/EdMay25/learn (Branch: main, Commit: 6cfd08c)
[01:08:08.424] Skipping build cache, deployment was triggered without cache.
[01:08:08.715] Cloning completed: 298.000ms
[01:08:09.064] Running "vercel build"
[01:08:09.452] Vercel CLI 46.0.5
[01:08:10.458] Installing dependencies...
[01:08:22.177] 
[01:08:22.177] added 342 packages in 12s
[01:08:22.178] 
[01:08:22.178] 141 packages are looking for funding
[01:08:22.178]   run `npm fund` for details
[01:08:22.232] Running "npm run build"
[01:08:22.337] 
[01:08:22.337] > medanalyzer-service@0.1.0 build
[01:08:22.338] > next build --turbopack
[01:08:22.338] 
[01:08:23.110]  ⚠ Warning: Next.js inferred your workspace root, but it may not be correct.
[01:08:23.110]  We detected multiple lockfiles and selected the directory of /vercel/path0/package-lock.json as the root directory.
[01:08:23.111]  To silence this warning, set `turbopack.root` in your Next.js config, or consider removing one of the lockfiles if it's not needed.
[01:08:23.111]    See https://nextjs.org/docs/app/api-reference/config/next-config-js/turbopack#root-directory for more information.
[01:08:23.111]  Detected additional lockfiles: 
[01:08:23.111]    * /vercel/path0/medanalyzer-service/package-lock.json
[01:08:23.112] 
[01:08:23.118] Attention: Next.js now collects completely anonymous telemetry regarding usage.
[01:08:23.118] This information is used to shape Next.js' roadmap and prioritize features.
[01:08:23.118] You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
[01:08:23.119] https://nextjs.org/telemetry
[01:08:23.119] 
[01:08:23.168]    ▲ Next.js 15.5.2 (Turbopack)
[01:08:23.169] 
[01:08:23.236]    Creating an optimized production build ...
[01:08:30.272]  ✓ Finished writing to disk in 10ms
[01:08:30.296]  ✓ Compiled successfully in 6.4s
[01:08:30.302]    Linting and checking validity of types ...
[01:08:33.566] 
[01:08:33.566] Failed to compile.
[01:08:33.566] 
[01:08:33.566] ./src/app/api/analyze/route.ts
[01:08:33.566] 80:21  Error: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
[01:08:33.566] 
[01:08:33.566] ./src/app/page.tsx
[01:08:33.566] 3:27  Warning: 'useEffect' is defined but never used.  @typescript-eslint/no-unused-vars
[01:08:33.566] 108:39  Error: Unexpected any. Specify a different type.  @typescript-eslint/no-explicit-any
[01:08:33.566] 
[01:08:33.566] info  - Need to disable some ESLint rules? Learn more here: https://nextjs.org/docs/app/api-reference/config/eslint#disabling-rules
[01:08:33.593] Error: Command "npm run build" exited with 1
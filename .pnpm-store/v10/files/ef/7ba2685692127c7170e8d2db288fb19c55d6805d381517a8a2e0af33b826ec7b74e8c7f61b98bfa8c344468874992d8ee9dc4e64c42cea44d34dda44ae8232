# std-env

[![npm version](https://img.shields.io/npm/v/std-env.svg?style=flat-square)](http://npmjs.com/package/std-env)
[![npm downloads](https://img.shields.io/npm/dm/std-env.svg?style=flat-square)](http://npmjs.com/package/std-env)
[![bundle size](https://img.shields.io/bundlephobia/min/std-env/latest.svg?style=flat-square)](https://bundlephobia.com/result?p=std-env)

Runtime-agnostic JS utils for detecting environments, runtimes, CI providers, and AI coding agents.

## Runtime Detection

Detects the current JavaScript runtime based on global variables, following the [WinterCG Runtime Keys proposal](https://runtime-keys.proposal.wintercg.org/).

```ts
import { runtime, runtimeInfo } from "std-env";

console.log(runtime); // "" | "node" | "deno" | "bun" | "workerd" ...
console.log(runtimeInfo); // { name: "node" }
```

Individual named exports: `isNode`, `isBun`, `isDeno`, `isNetlify`, `isEdgeLight`, `isWorkerd`, `isFastly`

> [!NOTE]
> `isNode` is also `true` in Bun/Deno with Node.js compatibility mode. Use `runtime === "node"` for strict checks.

See [./src/runtimes.ts](./src/runtimes.ts) for the full list.

## Provider Detection

Detects the current CI/CD provider based on environment variables.

```ts
import { isCI, provider, providerInfo } from "std-env";

console.log({ isCI, provider, providerInfo });
// { isCI: true, provider: "github_actions", providerInfo: { name: "github_actions", ci: true } }
```

Use `detectProvider()` to re-run detection. See [./src/providers.ts](./src/providers.ts) for the full list.

## Agent Detection

Detects if the environment is running inside an AI coding agent.

```ts
import { isAgent, agent, agentInfo } from "std-env";

console.log({ isAgent, agent, agentInfo });
// { isAgent: true, agent: "claude", agentInfo: { name: "claude" } }
```

Set the `AI_AGENT` env var to explicitly specify the agent name. Use `detectAgent()` to re-run detection.

Supported agents: `cursor`, `claude`, `devin`, `replit`, `gemini`, `codex`, `auggie`, `opencode`, `kiro`, `goose`, `pi`

## Flags

```js
import { env, isDevelopment, isProduction } from "std-env";
```

| Export             | Description                                                  |
| ------------------ | ------------------------------------------------------------ |
| `hasTTY`           | stdout TTY is available                                      |
| `hasWindow`        | Global `window` is available                                 |
| `isCI`             | Running in CI                                                |
| `isColorSupported` | Terminal color output supported                              |
| `isDebug`          | `DEBUG` env var is set                                       |
| `isDevelopment`    | `NODE_ENV` is `dev`/`development` or `MODE` is `development` |
| `isLinux`          | Linux platform                                               |
| `isMacOS`          | macOS (darwin) platform                                      |
| `isMinimal`        | `MINIMAL` env is set, CI, test, or no TTY                    |
| `isProduction`     | `NODE_ENV` or `MODE` is `production`                         |
| `isTest`           | `NODE_ENV` is `test` or `TEST` env is set                    |
| `isWindows`        | Windows platform                                             |
| `platform`         | Value of `process.platform`                                  |
| `nodeVersion`      | Node.js version string (e.g. `"22.0.0"`)                     |
| `nodeMajorVersion` | Node.js major version number (e.g. `22`)                     |

See [./src/flags.ts](./src/flags.ts) for details.

## Environment

| Export    | Description                                          |
| --------- | ---------------------------------------------------- |
| `env`     | Universal `process.env` (works across all runtimes)  |
| `process` | Universal `process` shim (works across all runtimes) |
| `nodeENV` | Current `NODE_ENV` value (undefined if unset)        |

## License

MIT

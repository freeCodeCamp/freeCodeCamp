//#region src/agents.d.ts
/**
* Represents the name of an AI coding agent.
*/
type AgentName = (string & {}) | "cursor" | "claude" | "devin" | "replit" | "gemini" | "codex" | "auggie" | "opencode" | "kiro" | "goose" | "pi";
/**
* Provides information about an AI coding agent.
*/
type AgentInfo = {
  /**
  * The name of the AI coding agent. See {@link AgentName} for possible values.
  */
  name?: AgentName;
};
/**
* Detects the current AI coding agent from environment variables.
*
* Supported agents: `cursor`, `claude`, `devin`, `replit`, `gemini`, `codex`, `auggie`, `opencode`, `kiro`, `goose`, `pi`
*
* You can also set the `AI_AGENT` environment variable to explicitly specify the agent name.
*/
declare function detectAgent(): AgentInfo;
/**
* The detected agent information for the current execution context.
* This value is evaluated once at module initialisation.
*/
declare const agentInfo: AgentInfo;
/**
* Name of the detected agent.
*/
declare const agent: AgentName | undefined;
/**
* A boolean flag indicating whether the current environment is running inside an AI coding agent.
*/
declare const isAgent: boolean;
//#endregion
//#region src/env.d.ts
/**
* Runtime-agnostic reference to environment variables.
*
* Resolves to `globalThis.process.env` when available, otherwise an empty object.
*/
declare const env: Record<string, string | undefined>;
/**
* Runtime-agnostic reference to the `process` global.
*
* Resolves to `globalThis.process` when available, otherwise a minimal shim containing only `env`.
*/
declare const process: Partial<typeof globalThis.process>;
/**
* Current value of the `NODE_ENV` environment variable (or static value if replaced during build).
*
* If `NODE_ENV` is not set, this will be undefined.
*/
declare const nodeENV: string | undefined;
//#endregion
//#region src/flags.d.ts
/** Value of process.platform */
declare const platform: string;
/** Detect if `CI` environment variable is set or a provider CI detected */
declare const isCI: boolean;
/** Detect if stdout.TTY is available */
declare const hasTTY: boolean;
/** Detect if global `window` object is available */
declare const hasWindow: boolean;
/** Detect if `DEBUG` environment variable is set */
declare const isDebug: boolean;
/** Detect if `NODE_ENV` environment variable is `test` or `TEST` environment variable is set */
declare const isTest: boolean;
/** Detect if `NODE_ENV` or `MODE` environment variable is `production` */
declare const isProduction: boolean;
/** Detect if `NODE_ENV` environment variable is `dev` or `development`, or if `MODE` environment variable is `development` */
declare const isDevelopment: boolean;
/** Detect if MINIMAL environment variable is set, running in CI or test or TTY is unavailable */
declare const isMinimal: boolean;
/** Detect if process.platform is Windows */
declare const isWindows: boolean;
/** Detect if process.platform is Linux */
declare const isLinux: boolean;
/** Detect if process.platform is macOS (darwin kernel) */
declare const isMacOS: boolean;
/** Detect if terminal color output is supported based on `NO_COLOR`, `FORCE_COLOR`, TTY, and CI environment */
declare const isColorSupported: boolean;
/** Node.js version string (e.g. `"20.11.0"`), or `null` if not running in Node.js */
declare const nodeVersion: string | null;
/** Node.js major version number (e.g. `20`), or `null` if not running in Node.js */
declare const nodeMajorVersion: number | null;
//#endregion
//#region src/providers.d.ts
/**
* Represents the name of a CI/CD or Deployment provider.
*/
type ProviderName = (string & {}) | "appveyor" | "aws_amplify" | "azure_pipelines" | "azure_static" | "appcircle" | "bamboo" | "bitbucket" | "bitrise" | "buddy" | "buildkite" | "circle" | "cirrus" | "cloudflare_pages" | "cloudflare_workers" | "google_cloudrun" | "google_cloudrun_job" | "codebuild" | "codefresh" | "drone" | "drone" | "dsari" | "github_actions" | "gitlab" | "gocd" | "layerci" | "hudson" | "jenkins" | "magnum" | "netlify" | "nevercode" | "render" | "sail" | "semaphore" | "screwdriver" | "shippable" | "solano" | "strider" | "teamcity" | "travis" | "vercel" | "appcenter" | "codesandbox" | "stackblitz" | "stormkit" | "cleavr" | "zeabur" | "codesphere" | "railway" | "deno-deploy" | "firebase_app_hosting" | "edgeone_pages";
/**
* Provides information about a CI/CD or Deployment provider, including its name and possibly other metadata.
*/
type ProviderInfo = {
  /**
  * The name of the CI/CD or Deployment provider. See {@link ProviderName} for possible values.
  */
  name: ProviderName;
  /**
  * If is set to `true`, the environment is recognised as a CI/CD provider.
  */
  ci?: boolean;
  /**
  * Arbitrary metadata associated with the provider.
  */
  [meta: string]: any;
};
/**
* Detects the current CI/CD or Deployment provider from environment variables.
*/
declare function detectProvider(): ProviderInfo;
/**
* The detected provider information for the current execution context.
* This value is evaluated once at module initialisation.
*/
declare const providerInfo: ProviderInfo;
/**
* Name of the detected provider, defaults to an empty string if no provider is detected.
*/
declare const provider: ProviderName;
//#endregion
//#region src/runtimes.d.ts
/**
* Represents the name of a JavaScript runtime.
*
* @see https://runtime-keys.proposal.wintercg.org/
*/
type RuntimeName = (string & {}) | "workerd" | "deno" | "netlify" | "node" | "bun" | "edge-light" | "fastly";
type RuntimeInfo = {
  /**
  * The name of the detected runtime.
  */
  name: RuntimeName;
};
/**
* Indicates if running in Node.js or a Node.js compatible runtime.
*
* **Note:** When running code in Bun and Deno with Node.js compatibility mode, `isNode` flag will be also `true`, indicating running in a Node.js compatible runtime.
*
* Use `runtime === "node"` if you need strict check for Node.js runtime.
*/
declare const isNode: boolean;
/**
* Indicates if running in Bun runtime.
*/
declare const isBun: boolean;
/**
* Indicates if running in Deno runtime.
*/
declare const isDeno: boolean;
/**
* Indicates if running in Fastly runtime.
*/
declare const isFastly: boolean;
/**
* Indicates if running in Netlify runtime.
*/
declare const isNetlify: boolean;
/**
* Indicates if running in EdgeLight (Vercel Edge) runtime.
*/
declare const isEdgeLight: boolean;
/**
* Indicates if running in Cloudflare Workers runtime.
*
* https://developers.cloudflare.com/workers/runtime-apis/web-standards/#navigatoruseragent
*/
declare const isWorkerd: boolean;
/**
* Contains information about the detected runtime, if any.
*/
declare const runtimeInfo: RuntimeInfo | undefined;
/**
* A convenience constant that returns the name of the detected runtime,
* defaults to an empty string if no runtime is detected.
*/
declare const runtime: RuntimeName;
//#endregion
export { type AgentInfo, type AgentName, type ProviderInfo, type ProviderName, type RuntimeInfo, type RuntimeName, agent, agentInfo, detectAgent, detectProvider, env, hasTTY, hasWindow, isAgent, isBun, isCI, isColorSupported, isDebug, isDeno, isDevelopment, isEdgeLight, isFastly, isLinux, isMacOS, isMinimal, isNetlify, isNode, isProduction, isTest, isWindows, isWorkerd, nodeENV, nodeMajorVersion, nodeVersion, platform, process, provider, providerInfo, runtime, runtimeInfo };
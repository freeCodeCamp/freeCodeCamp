type EnvObject = Record<string, string | undefined>;
declare const env: EnvObject;
declare const nodeENV: string;

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
/** Detect if `NODE_ENV` environment variable is `test` */
declare const isTest: boolean;
/** Detect if `NODE_ENV` environment variable is `production` */
declare const isProduction: boolean;
/** Detect if `NODE_ENV` environment variable is `dev` or `development` */
declare const isDevelopment: boolean;
/** Detect if MINIMAL environment variable is set, running in CI or test or TTY is unavailable */
declare const isMinimal: boolean;
/** Detect if process.platform is Windows */
declare const isWindows: boolean;
/** Detect if process.platform is Linux */
declare const isLinux: boolean;
/** Detect if process.platform is macOS (darwin kernel) */
declare const isMacOS: boolean;
/** Color Support */
declare const isColorSupported: boolean;
/** Node.js versions */
declare const nodeVersion: string | null;
declare const nodeMajorVersion: number | null;

interface Process extends Partial<Omit<typeof globalThis.process, "versions">> {
    env: EnvObject;
    versions: Record<string, string>;
}
declare const process: Process;

type ProviderName = "" | "appveyor" | "aws_amplify" | "azure_pipelines" | "azure_static" | "appcircle" | "bamboo" | "bitbucket" | "bitrise" | "buddy" | "buildkite" | "circle" | "cirrus" | "cloudflare_pages" | "cloudflare_workers" | "codebuild" | "codefresh" | "drone" | "drone" | "dsari" | "github_actions" | "gitlab" | "gocd" | "layerci" | "hudson" | "jenkins" | "magnum" | "netlify" | "nevercode" | "render" | "sail" | "semaphore" | "screwdriver" | "shippable" | "solano" | "strider" | "teamcity" | "travis" | "vercel" | "appcenter" | "codesandbox" | "stackblitz" | "stormkit" | "cleavr" | "zeabur" | "codesphere" | "railway" | "deno-deploy" | "firebase_app_hosting";
type ProviderInfo = {
    name: ProviderName;
    ci?: boolean;
    [meta: string]: any;
};
/** Current provider info */
declare const providerInfo: ProviderInfo;
declare const provider: ProviderName;

type RuntimeName = "workerd" | "deno" | "netlify" | "node" | "bun" | "edge-light" | "fastly" | "";
type RuntimeInfo = {
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
 *
 * Indicates if running in EdgeLight (Vercel Edge) runtime.
 */
declare const isEdgeLight: boolean;
/**
 * Indicates if running in Cloudflare Workers runtime.
 */
declare const isWorkerd: boolean;
declare const runtimeInfo: RuntimeInfo | undefined;
declare const runtime: RuntimeName;

export { env, hasTTY, hasWindow, isBun, isCI, isColorSupported, isDebug, isDeno, isDevelopment, isEdgeLight, isFastly, isLinux, isMacOS, isMinimal, isNetlify, isNode, isProduction, isTest, isWindows, isWorkerd, nodeENV, nodeMajorVersion, nodeVersion, platform, process, provider, providerInfo, runtime, runtimeInfo };
export type { EnvObject, Process, ProviderInfo, ProviderName, RuntimeInfo, RuntimeName };

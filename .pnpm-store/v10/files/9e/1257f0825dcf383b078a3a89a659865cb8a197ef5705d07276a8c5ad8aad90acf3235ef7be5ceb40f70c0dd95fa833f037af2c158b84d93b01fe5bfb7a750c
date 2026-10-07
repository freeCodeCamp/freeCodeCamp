import type { ShellCommandOptions } from "@codesandbox/nodebox/build/modules/shell";
import type { SandpackBundlerFiles } from "../..";
export declare function generateRandomId(): string;
export declare const writeBuffer: (content: string | Uint8Array) => Uint8Array;
export declare const readBuffer: (content: string | Uint8Array) => string;
export declare const fromBundlerFilesToFS: (files: SandpackBundlerFiles) => Record<string, Uint8Array>;
/**
 * Figure out which script it must run to start a server
 */
export declare const findStartScriptPackageJson: (packageJson: string) => [string, string[], ShellCommandOptions];
export declare const getMessageFromError: (error: Error | string) => string;

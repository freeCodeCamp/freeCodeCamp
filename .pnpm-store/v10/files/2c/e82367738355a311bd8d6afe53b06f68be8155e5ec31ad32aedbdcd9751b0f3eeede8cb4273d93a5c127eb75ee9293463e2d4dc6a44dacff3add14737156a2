import type { SandpackBundlerFile, SandpackBundlerFiles } from "@codesandbox/sandpack-client";
import type { SandpackProviderProps, SandpackFiles, SandboxEnvironment } from "../types";
export interface SandpackContextInfo {
    activeFile: string;
    visibleFiles: string[];
    files: Record<string, SandpackBundlerFile>;
    environment: SandboxEnvironment;
    shouldUpdatePreview: true;
}
/**
 * Creates a standard sandpack state given the setup,
 * options, and files props. Using this function is
 * the reliable way to ensure a consistent and predictable
 * sandpack-content throughout application
 */
export declare const getSandpackStateFromProps: (props: SandpackProviderProps) => SandpackContextInfo;
/**
 * Given a file tree and a file, it uses a couple of rules
 * to tweak the filename to match with one of the inside of file tree
 *
 * - Adds the leading slash;
 * - Tries to find the same filename with different extensions (js only);
 * - Returns `null` if it doesn't satisfy any rule
 */
export declare const resolveFile: (path: string, files: SandpackFiles) => string | null;
/**
 * Transform an regular object, which contain files to
 * an object that sandpack-client can understand
 *
 * From: Record<string, string>
 * To: Record<string, { code: string }>
 */
export declare const convertedFilesToBundlerFiles: (files?: SandpackFiles) => SandpackBundlerFiles;

export interface ProcessInterface {
    execArgv: string[];
    argv: string[];
    cwd: () => string;
}
export interface ProcessArgs {
    appPath: string;
    importPaths: string[];
    requirePaths: string[];
}
/**
 * Parses the process arguments to determine the app path, import paths, and require paths.
 */
export declare function parseProcessPaths(proc: ProcessInterface): ProcessArgs;
/**
 * Gets the current entry point type.
 *
 * `app` means this function was most likely called via the app entry point.
 * `import` means this function was most likely called from an --import cli arg.
 * `require` means this function was most likely called from a --require cli arg.
 * `unknown` means we couldn't determine for sure.
 */
export declare function getEntryPointType(proc?: ProcessInterface): 'import' | 'require' | 'app' | 'unknown';
//# sourceMappingURL=entry-point.d.ts.map

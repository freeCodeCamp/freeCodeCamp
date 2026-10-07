/**
 * On Windows, the file protocol is required for the path to be resolved correctly.
 * On other platforms, the file protocol is not required, but supported, so we want to just always use it.
 * Except jest doesn't work with that and in that environment we never add the file protocol.
 */
export declare const maybeAddFileProtocol: (module: string) => string;
/**
 * Figure out if the file path is .js or .mjs without relying on the fs module, and return the file path if it exists.
 */
export declare function resolveJSFilepath({ rootDir, filePath, warn, }: {
    rootDir: string;
    filePath: string;
    warn?: boolean;
}): Promise<string>;

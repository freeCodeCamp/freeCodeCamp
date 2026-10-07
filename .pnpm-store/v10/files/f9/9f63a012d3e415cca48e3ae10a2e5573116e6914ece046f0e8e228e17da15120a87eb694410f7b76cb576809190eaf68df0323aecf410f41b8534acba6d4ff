export declare type ImportDeclaration<T = string> = {
    outputPath: string;
    importSource: ImportSource<T>;
    baseOutputDir: string;
    baseDir: string;
    typesImport: boolean;
    emitLegacyCommonJSImports: boolean;
};
export declare type ImportSource<T = string> = {
    /**
     * Source path, relative to the `baseOutputDir`
     */
    path: string;
    /**
     * Namespace to import source as
     */
    namespace?: string;
    /**
     * Entity names to import
     */
    identifiers?: T[];
};
export declare type FragmentImport = {
    name: string;
    kind: 'type' | 'document';
};
export declare function generateFragmentImportStatement(statement: ImportDeclaration<FragmentImport>, kind: 'type' | 'document' | 'both'): string;
export declare function generateImportStatement(statement: ImportDeclaration): string;
export declare function resolveRelativeImport(from: string, to: string): string;
export declare function resolveImportSource<T>(source: string | ImportSource<T>): ImportSource<T>;
export declare function clearExtension(path: string): string;
export declare function fixLocalFilePath(path: string): string;

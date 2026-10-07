import { type NapiResolveOptions, ResolverFactory } from 'unrs-resolver';
export declare const defaultConditionNames: string[];
export declare const defaultExtensions: string[];
export declare const defaultExtensionAlias: {
    '.js': string[];
    '.jsx': string[];
    '.cjs': string[];
    '.mjs': string[];
};
export declare const defaultMainFields: string[];
export declare const interfaceVersion = 2;
export interface TsResolverOptions extends NapiResolveOptions {
    alwaysTryTypes?: boolean;
    project?: string[] | string;
}
export declare function resolve(source: string, file: string, options?: TsResolverOptions | null, resolver?: ResolverFactory | null): {
    found: boolean;
    path?: string | null;
};
export declare function createTypeScriptImportResolver(options?: TsResolverOptions | null): {
    interfaceVersion: number;
    name: string;
    resolve(source: string, file: string): {
        found: boolean;
        path?: string | null;
    };
};

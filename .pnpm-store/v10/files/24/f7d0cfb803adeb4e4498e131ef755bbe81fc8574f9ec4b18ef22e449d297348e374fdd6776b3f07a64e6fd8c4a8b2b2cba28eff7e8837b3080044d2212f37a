import type { Compiler } from 'webpack';
declare const ALL = "all";
declare const STATIC = "static";
declare const DYNAMIC = "dynamic";
declare type AvailableModules = typeof ALL | typeof STATIC | typeof DYNAMIC;
declare class VirtualModulesPlugin {
    private _staticModules;
    private _compiler;
    private _watcher;
    constructor(modules?: Record<string, string>);
    getModuleList(filter?: AvailableModules): {};
    writeModule(filePath: string, contents: string): void;
    apply(compiler: Compiler): void;
}
export = VirtualModulesPlugin;

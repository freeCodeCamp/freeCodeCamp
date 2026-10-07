import { Module } from "module";
import { TransformOptions, JITIOptions, JITIImportOptions } from "./types";
export type { JITIOptions, TransformOptions } from "./types";
type Require = typeof require;
type Module = typeof module;
type ModuleCache = Record<string, Module>;
export type EvalModuleOptions = Partial<{
    id: string;
    filename: string;
    ext: string;
    cache: ModuleCache;
}>;
export interface JITI extends Require {
    transform: (opts: TransformOptions) => string;
    register: () => () => void;
    evalModule: (source: string, options?: EvalModuleOptions) => unknown;
    /** @experimental Behavior of `jiti.import` might change in the future. */
    import: (id: string, importOptions: JITIImportOptions) => Promise<unknown>;
}
export default function createJITI(_filename: string, opts?: JITIOptions, parentModule?: Module, parentCache?: ModuleCache): JITI;

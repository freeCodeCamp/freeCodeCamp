import { ModuleResolver } from "../utils/module-resolver";
interface IResolveModuleExportsOptions {
    mode?: `analysis` | `import`;
    resolver?: ModuleResolver;
    rootDir?: string;
}
/**
 * Given a path to a module, return an array of the module's exports.
 *
 * It can run in two modes:
 * 1. `analysis` mode gets exports via static analysis by traversing the file's AST with babel
 * 2. `import` mode gets exports by directly importing the module and accessing its properties
 *
 * At the time of writing, analysis mode is used for files that can be jsx (e.g. gatsby-browser, gatsby-ssr)
 * and import mode is used for files that can be js or mjs.
 *
 * Returns [] for invalid paths and modules without exports.
 */
export declare function resolveModuleExports(modulePath: string, { mode, resolver, rootDir, }?: IResolveModuleExportsOptions): Promise<Array<string>>;
export {};

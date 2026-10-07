import webpack, { Compilation, Compiler } from "webpack";
import type Reporter from "gatsby-cli/lib/reporter";
interface IModuleExport {
    id: string;
    chunks: Array<string>;
    name: string;
}
export declare const PARTIAL_HYDRATION_CHUNK_REASON = "PartialHydration client module";
/**
 * inspiration and code mostly comes from https://github.com/facebook/react/blob/3f70e68cea8d2ed0f53d35420105ae20e22ce428/packages/react-server-dom-webpack/src/ReactFlightWebpackPlugin.js
 */
export declare class PartialHydrationPlugin {
    name: string;
    _manifestPath: string;
    _reporter: typeof Reporter;
    _collectedCssModules: Set<webpack.Module>;
    _previousManifest: {};
    constructor(manifestPath: string, reporter: typeof Reporter);
    _generateManifest(compilation: Compilation, rootContext: string): Record<string, Record<string, IModuleExport>>;
    addClientModuleEntries(compiler: Compiler, compilation: Compilation): Promise<void>;
    addEntry(compilation: Compilation, context: string, entry: any, options: {
        name: string;
    }): Promise<any>;
    apply(compiler: webpack.Compiler): void;
}
export {};

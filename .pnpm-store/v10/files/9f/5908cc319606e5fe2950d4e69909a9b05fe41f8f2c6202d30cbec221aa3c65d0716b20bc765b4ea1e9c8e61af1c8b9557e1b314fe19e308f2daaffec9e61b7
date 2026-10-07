import { Compiler } from "webpack";
import { CLIPluginOptions } from "../types";
export declare class CLIPlugin {
    logger: ReturnType<Compiler["getInfrastructureLogger"]>;
    options: CLIPluginOptions;
    constructor(options: CLIPluginOptions);
    setupHotPlugin(compiler: Compiler): void;
    setupPrefetchPlugin(compiler: Compiler): void;
    setupBundleAnalyzerPlugin(compiler: Compiler): Promise<void>;
    setupProgressPlugin(compiler: Compiler): void;
    setupHelpfulOutput(compiler: Compiler): void;
    apply(compiler: Compiler): void;
}

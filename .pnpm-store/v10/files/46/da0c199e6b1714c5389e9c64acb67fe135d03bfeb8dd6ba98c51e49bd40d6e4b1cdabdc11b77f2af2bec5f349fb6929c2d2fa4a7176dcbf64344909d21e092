import type reporter from "gatsby-cli/lib/reporter";
import type { Compiler } from "webpack";
type Reporter = typeof reporter;
export declare class WebpackLoggingPlugin {
    private PLUGIN_NAME;
    private rootDir;
    private reporter;
    private isVerbose;
    constructor(rootDir: string, reporter: Reporter, isVerbose?: boolean);
    apply(compiler: Compiler): void;
}
export {};

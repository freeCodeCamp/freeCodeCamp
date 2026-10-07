import webpack from "webpack";
import reporter from "gatsby-cli/lib/reporter";
import { IGatsbyState } from "../../redux/types";
type Reporter = typeof reporter;
export declare function copyStaticQueriesToEngine({ engineTemplatePaths, components, staticQueriesByTemplate, }: {
    engineTemplatePaths: Set<string>;
    components: IGatsbyState["components"];
    staticQueriesByTemplate: IGatsbyState["staticQueriesByTemplate"];
}): Promise<void>;
export declare function createPageSSRBundle({ rootDir, components, staticQueriesByTemplate, webpackCompilationHash, reporter, isVerbose, }: {
    rootDir: string;
    components: IGatsbyState["components"];
    staticQueriesByTemplate: IGatsbyState["staticQueriesByTemplate"];
    webpackCompilationHash: IGatsbyState["webpackCompilationHash"];
    reporter: Reporter;
    isVerbose?: boolean;
}): Promise<webpack.Compilation | undefined>;
export {};

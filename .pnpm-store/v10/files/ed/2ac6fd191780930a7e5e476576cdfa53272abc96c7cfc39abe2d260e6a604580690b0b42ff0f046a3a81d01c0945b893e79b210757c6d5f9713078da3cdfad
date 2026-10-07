import { PackageJson, Reporter } from "gatsby";
import { Store, AnyAction } from "redux";
import { IGatsbyState } from "../redux/types";
export interface ICert {
    key: string;
    cert: string;
}
export interface IDebugInfo {
    port: number;
    break: boolean;
}
export interface IProgram {
    _: `develop` | `build` | `clean` | `feedback` | `repl` | `serve`;
    status?: string;
    useYarn: boolean;
    open: boolean;
    openTracingConfigFile: string;
    port: number;
    proxyPort: number;
    host: string;
    report: Reporter;
    [`cert-file`]?: string;
    [`key-file`]?: string;
    directory: string;
    https?: boolean;
    sitePackageJson: PackageJson;
    ssl?: ICert;
    inspect?: number;
    inspectBrk?: number;
    graphqlTracing?: boolean;
    verbose?: boolean;
    prefixPaths?: boolean;
    functionsPlatform?: string;
    functionsArch?: string;
    setStore?: (store: Store<IGatsbyState, AnyAction>) => void;
    disablePlugins?: Array<{
        name: string;
        reasons: Array<string>;
    }>;
}
/**
 * @deprecated
 * Use `Stage` instead
 */
export declare enum BuildHTMLStage {
    DevelopHTML = "develop-html",
    BuildHTML = "build-html"
}
export declare enum Stage {
    Develop = "develop",
    DevelopHTML = "develop-html",
    BuildJavascript = "build-javascript",
    BuildHTML = "build-html"
}

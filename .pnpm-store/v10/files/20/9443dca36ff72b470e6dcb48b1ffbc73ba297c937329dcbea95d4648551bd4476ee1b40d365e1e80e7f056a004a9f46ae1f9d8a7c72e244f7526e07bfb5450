import { IGatsbyConfigInput, PluginEntry } from "../../utils/merge-gatsby-config";
interface IThemeObj {
    themeName: string;
    themeConfig: IGatsbyConfigInput;
    themeDir: string;
    themeSpec: PluginEntry;
    parentDir: string;
    configFilePath?: string;
}
export declare function loadThemes(config: IGatsbyConfigInput, { configFilePath, rootDir }: {
    configFilePath: string;
    rootDir: string;
}): Promise<{
    config: IGatsbyConfigInput;
    themes: Array<IThemeObj>;
}>;
export {};

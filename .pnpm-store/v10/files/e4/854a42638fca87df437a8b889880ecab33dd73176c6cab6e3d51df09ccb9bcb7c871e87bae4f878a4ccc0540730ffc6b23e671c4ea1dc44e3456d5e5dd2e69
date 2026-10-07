import { PackageJson } from "../../../";
import { IPluginInfo, IFlattenedPlugin, ISiteConfig } from "./types";
interface IApi {
    version?: string;
}
export interface IEntry {
    exportName: string;
    pluginName: string;
    pluginVersion: string;
    api?: IApi;
}
export type ExportType = "node" | "browser" | "ssr";
type IEntryMap = {
    [exportType in ExportType]: Array<IEntry>;
};
export type ICurrentAPIs = {
    [exportType in ExportType]: Array<string>;
};
export declare function handleBadExports({ currentAPIs, badExports, }: {
    currentAPIs: ICurrentAPIs;
    badExports: {
        [api in ExportType]: Array<IEntry>;
    };
}): Promise<void>;
export declare function validateConfigPluginsOptions(config: ISiteConfig | undefined, rootDir: string): Promise<void>;
/**
 * Identify which APIs each plugin exports
 */
export declare function collatePluginAPIs({ currentAPIs, flattenedPlugins, rootDir, }: {
    currentAPIs: ICurrentAPIs;
    flattenedPlugins: Array<IPluginInfo & Partial<IFlattenedPlugin>>;
    rootDir: string;
}): Promise<{
    flattenedPlugins: Array<IFlattenedPlugin>;
    badExports: IEntryMap;
}>;
export declare const handleMultipleReplaceRenderers: ({ flattenedPlugins, }: {
    flattenedPlugins: Array<IFlattenedPlugin>;
}) => Array<IFlattenedPlugin>;
export declare function warnOnIncompatiblePeerDependency(name: string, packageJSON: PackageJson): void;
export {};

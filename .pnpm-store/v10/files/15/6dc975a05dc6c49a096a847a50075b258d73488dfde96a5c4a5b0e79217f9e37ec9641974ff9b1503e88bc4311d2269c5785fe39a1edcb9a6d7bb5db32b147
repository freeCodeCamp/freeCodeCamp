/**
 * ⚠️ DO NOT EDIT ⚠️
 * These types are duplicated from packages/gatsby/src/bootstrap/load-plugins/types.ts
 * If you edit this file, make sure to edit that file too!!!
 * They are duplicate to avoid a circular dependency between gatsby-plugin-utils <=> gatsby <=> gatsby-plugin-utils
 * See gatsbyjs/gatsby#27578
 */
export interface IRawSiteConfig {
    plugins?: Array<PluginRef>;
}
export interface ISiteConfig extends IRawSiteConfig {
    plugins?: Array<IPluginRefObject>;
}
export interface IPluginInfo {
    /** Unique ID describing a plugin */
    id: string;
    /** The absolute path to the plugin */
    resolve: string;
    /** The plugin name */
    name: string;
    /** The plugin version (can be content hash) */
    version: string;
    /** Options passed to the plugin */
    pluginOptions?: IPluginInfoOptions;
    module?: any;
    modulePath?: string;
}
export interface IPluginInfoOptions {
    plugins?: Array<IPluginInfo>;
    path?: string;
    [option: string]: unknown;
}
export interface IFlattenedPlugin extends IPluginInfo {
    skipSSR?: boolean;
    ssrAPIs: Array<string>;
    nodeAPIs: Array<string>;
    browserAPIs: Array<string>;
}
export interface IPluginRefObject {
    resolve: string;
    options?: IPluginRefOptions;
    parentDir?: string;
    subPluginPaths?: Array<string>;
    module?: any;
    modulePath?: string;
}
export type PluginRef = string | IPluginRefObject;
export interface IPluginRefOptions {
    plugins?: Array<PluginRef>;
    path?: string;
    [option: string]: unknown;
}

import { IGatsbyState, ActionsUnion } from "../types";
export declare const flattenedPluginsReducer: (state: {
    resolve: string;
    id: string;
    name: string;
    version: string;
    pluginOptions: {
        [key: string]: unknown;
        plugins: [];
    };
    nodeAPIs: import("../types").GatsbyNodeAPI[];
    browserAPIs: ("onRouteUpdate" | "registerServiceWorker" | "onServiceWorkerActive" | "onPostPrefetchPathname")[];
    ssrAPIs: ("onRenderBody" | "onPreRenderHTML")[];
    pluginFilepath: string;
    subPluginPaths?: string[] | undefined;
    modulePath?: string | undefined;
}[] | undefined, action: ActionsUnion) => IGatsbyState["flattenedPlugins"];

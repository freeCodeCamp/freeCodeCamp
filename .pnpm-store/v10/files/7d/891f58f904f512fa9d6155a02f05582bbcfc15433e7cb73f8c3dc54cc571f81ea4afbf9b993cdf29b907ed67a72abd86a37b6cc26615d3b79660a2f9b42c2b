import { Express } from "express";
import type { TrailingSlash } from "gatsby-page-utils";
export interface IPluginEntryWithParentDir {
    resolve: string;
    options?: Record<string, unknown>;
    parentDir: string;
}
export type PluginEntry = string | IPluginEntryWithParentDir;
export interface IGatsbyConfigInput {
    siteMetadata?: Record<string, unknown>;
    plugins?: Array<PluginEntry>;
    pathPrefix?: string;
    assetPrefix?: string;
    polyfill?: boolean;
    mapping?: Record<string, string>;
    proxy?: {
        prefix: string;
        url: string;
    };
    developMiddleware?(app: Express): void;
    jsxRuntime?: "classic" | "automatic";
    jsxImportSource?: string;
    trailingSlash?: TrailingSlash;
}
/**
 * Defines how a theme object is merged with the user's config
 */
export declare const mergeGatsbyConfig: (a: IGatsbyConfigInput, b: IGatsbyConfigInput) => IGatsbyConfigInput;

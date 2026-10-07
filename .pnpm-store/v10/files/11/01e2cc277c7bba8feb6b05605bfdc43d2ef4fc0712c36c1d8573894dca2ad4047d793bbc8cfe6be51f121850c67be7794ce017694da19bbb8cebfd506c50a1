import type { IRenderHtmlResult } from "../../../commands/build-html";
import { IGatsbySlice } from "../../../internal";
type IUnsafeBuiltinUsage = Array<string> | undefined;
declare global {
    namespace NodeJS {
        interface Global {
            unsafeBuiltinUsage: IUnsafeBuiltinUsage;
        }
    }
}
export declare const renderHTMLProd: ({ htmlComponentRendererPath, paths, envVars, sessionId, webpackCompilationHash, }: {
    htmlComponentRendererPath: string;
    paths: Array<string>;
    envVars: Array<[string, string | undefined]>;
    sessionId: number;
    webpackCompilationHash: string;
}) => Promise<IRenderHtmlResult>;
export declare const renderHTMLDev: ({ htmlComponentRendererPath, paths, envVars, sessionId, }: {
    htmlComponentRendererPath: string;
    paths: Array<string>;
    envVars: Array<[string, string | undefined]>;
    sessionId: number;
}) => Promise<Array<unknown>>;
export declare function renderPartialHydrationProd({ paths, envVars, sessionId, pathPrefix, }: {
    paths: Array<string>;
    envVars: Array<[string, string | undefined]>;
    sessionId: number;
    pathPrefix: any;
}): Promise<void>;
export interface IRenderSliceResult {
    chunks: 2 | 1;
}
export interface IRenderSlicesResults {
    [sliceName: string]: IRenderSliceResult;
}
export interface ISlicePropsEntry {
    sliceId: string;
    sliceName: string;
    props: Record<string, unknown>;
    hasChildren: boolean;
}
export declare function renderSlices({ slices, htmlComponentRendererPath, publicDir, slicesProps, staticQueriesBySliceTemplate, }: {
    publicDir: string;
    slices: Array<[string, IGatsbySlice]>;
    slicesProps: Array<ISlicePropsEntry>;
    htmlComponentRendererPath: string;
    staticQueriesBySliceTemplate: Record<string, Array<string>>;
}): Promise<void>;
export {};

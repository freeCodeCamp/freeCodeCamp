import { watch } from "../utils/webpack/bundle";
import webpack from "webpack";
import { Span } from "opentracing";
import { IProgram, Stage } from "./types";
import { PackageJson } from "../..";
import type { GatsbyWorkerPool } from "../utils/worker/pool";
type IActivity = any;
export interface IBuildArgs extends IProgram {
    directory: string;
    sitePackageJson: PackageJson;
    prefixPaths: boolean;
    noUglify: boolean;
    logPages: boolean;
    writeToFile: boolean;
    profile: boolean;
    graphqlTracing: boolean;
    openTracingConfigFile: string;
    functionsPlatform?: string;
    functionsArch?: string;
    keepPageRenderer: boolean;
}
interface IBuildRendererResult {
    rendererPath: string;
    stats: webpack.Stats;
    close: ReturnType<typeof watch>["close"];
}
export declare function devSSRWillInvalidate(): void;
export declare const getDevSSRWebpack: () => {
    recompileAndResumeWatching: (allowTimedFallback: boolean) => Promise<() => void>;
    needToRecompileSSRBundle: boolean;
};
export declare const buildRenderer: (program: IProgram, stage: Stage, parentSpan?: IActivity) => Promise<IBuildRendererResult>;
export declare const buildPartialHydrationRenderer: (program: IProgram, stage: Stage, parentSpan?: IActivity) => Promise<IBuildRendererResult>;
export declare const deleteRenderer: (rendererPath: string) => Promise<void>;
export interface IRenderHtmlResult {
    unsafeBuiltinsUsageByPagePath: Record<string, Array<string>>;
    previewErrors: Record<string, any>;
    slicesPropsPerPage: Record<string, Record<string, {
        props: Record<string, unknown>;
        sliceName: string;
        hasChildren: boolean;
    }>>;
}
export declare const doBuildPages: (rendererPath: string, pagePaths: Array<string>, activity: IActivity, workerPool: GatsbyWorkerPool, stage: Stage) => Promise<void>;
export declare const buildHTML: ({ program, stage, pagePaths, activity, workerPool, }: {
    program: IProgram;
    stage: Stage;
    pagePaths: Array<string>;
    activity: IActivity;
    workerPool: GatsbyWorkerPool;
}) => Promise<void>;
export declare function buildHTMLPagesAndDeleteStaleArtifacts({ workerPool, parentSpan, program, }: {
    workerPool: GatsbyWorkerPool;
    parentSpan?: Span;
    program: IBuildArgs;
}): Promise<{
    toRegenerate: Array<string>;
    toDelete: Array<string>;
}>;
export declare function buildSlices({ program, workerPool, parentSpan, }: {
    workerPool: GatsbyWorkerPool;
    parentSpan?: Span;
    program: IBuildArgs;
}): Promise<void>;
export declare function stitchSlicesIntoPagesHTML({ publicDir, parentSpan, }: {
    publicDir: string;
    parentSpan?: Span;
}): Promise<void>;
export {};

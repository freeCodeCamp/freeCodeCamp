import { ActionsUnion, IGatsbyState, IHtmlFileState, IStaticQueryResultState } from "../types";
export declare function htmlReducer(state: {
    trackedHtmlFiles: Map<string, IHtmlFileState>;
    browserCompilationHash: string;
    ssrCompilationHash: string;
    trackedStaticQueryResults: Map<string, IStaticQueryResultState>;
    unsafeBuiltinWasUsedInSSR: boolean;
    templateCompilationHashes: Record<string, string>;
    slicesProps: {
        bySliceId: Map<string, {
            pages: Set<string>;
            props: Record<string, unknown>;
            sliceName: string;
            hasChildren: boolean;
            dirty: number;
        }>;
        byPagePath: Map<string, Set<string>>;
        bySliceName: Map<string, {
            sliceDataHash: string;
            dirty: number;
            props: Set<string>;
        }>;
    };
    pagesThatNeedToStitchSlices: Set<string>;
} | undefined, action: ActionsUnion): IGatsbyState["html"];

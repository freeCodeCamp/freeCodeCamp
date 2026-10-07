import { ICachedReduxState, IGatsbyNode, IGatsbyPage, GatsbyStateKeys } from "./types";
import { DeepPartial } from "redux";
export declare function readFromCache(slices?: Array<GatsbyStateKeys>, optionalPrefix?: string): DeepPartial<ICachedReduxState>;
export declare function guessSafeChunkSize(values: Array<[string, IGatsbyNode]> | Array<[string, IGatsbyPage]>, showMaxSizeWarning?: boolean): number;
export declare function writeToCache(contents: DeepPartial<ICachedReduxState>, slices?: Array<GatsbyStateKeys>, optionalPrefix?: string): void;

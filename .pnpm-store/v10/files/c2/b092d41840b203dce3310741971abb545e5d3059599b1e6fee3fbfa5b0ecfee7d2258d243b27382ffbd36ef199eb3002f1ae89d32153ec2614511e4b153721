import { IGatsbyState } from "../redux/types";
export declare const removePageFiles: (publicDir: string, pageKeys: Array<string>) => Promise<void>;
export declare function calcDirtyHtmlFiles(state: IGatsbyState): {
    toRegenerate: Array<string>;
    toDelete: Array<string>;
    toCleanupFromTrackedState: Set<string>;
};
export declare function markHtmlDirtyIfResultOfUsedStaticQueryChanged(): void;

import { Patch, PatchListener, Immer } from "../internal";
/** Each scope represents a `produce` call. */
export interface ImmerScope {
    patches_?: Patch[];
    inversePatches_?: Patch[];
    canAutoFreeze_: boolean;
    drafts_: any[];
    parent_?: ImmerScope;
    patchListener_?: PatchListener;
    immer_: Immer;
    unfinalizedDrafts_: number;
}
export declare function getCurrentScope(): ImmerScope;
export declare function usePatchesInScope(scope: ImmerScope, patchListener?: PatchListener): void;
export declare function revokeScope(scope: ImmerScope): void;
export declare function leaveScope(scope: ImmerScope): void;
export declare function enterScope(immer: Immer): ImmerScope;
//# sourceMappingURL=scope.d.ts.map
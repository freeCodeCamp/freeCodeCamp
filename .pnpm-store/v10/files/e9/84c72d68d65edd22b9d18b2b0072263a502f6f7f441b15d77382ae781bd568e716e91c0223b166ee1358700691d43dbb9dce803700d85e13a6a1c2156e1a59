import { AbortHandler, AbortSignal as IAbortSignal } from "@smithy/types";
export { AbortHandler, IAbortSignal };
/**
 * @public
 */
export declare class AbortSignal implements IAbortSignal {
    onabort: AbortHandler | null;
    private _aborted;
    constructor();
    /*
    * Whether the associated operation has already been cancelled.
    */
    readonly aborted: boolean;
    /**
     * @internal
     */
    abort(): void;
}

import type { Int64 as IInt64, MessageHeaders } from "@smithy/types";
/**
 * @internal
 * TODO: duplicated from @smithy/eventstream-codec to break large dependency.
 * TODO: This should be moved to its own deduped submodule in @smithy/core when submodules are implemented.
 */
export declare class HeaderFormatter {
    format(headers: MessageHeaders): Uint8Array;
    private formatHeaderValue;
}
/**
 * TODO: duplicated from @smithy/eventstream-codec to break large dependency.
 * TODO: This should be moved to its own deduped submodule in @smithy/core when submodules are implemented.
 */
export declare class Int64 implements IInt64 {
    readonly bytes: Uint8Array;
    constructor(bytes: Uint8Array);
    static fromNumber(number: number): Int64;
    /**
     * Called implicitly by infix arithmetic operators.
     */
    valueOf(): number;
    toString(): string;
}

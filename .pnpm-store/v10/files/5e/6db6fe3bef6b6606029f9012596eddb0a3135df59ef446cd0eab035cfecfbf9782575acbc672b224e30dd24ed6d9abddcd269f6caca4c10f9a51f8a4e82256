import type { SourceLocation } from "./source-location";
import type { Range } from "./range";
import type { BaseToken } from "./token";
export interface TokenAdapter {
    finalizeRange(token: Omit<BaseToken, "loc">): Range;
    finalizeLocation(token: Omit<BaseToken, "range">): SourceLocation;
}

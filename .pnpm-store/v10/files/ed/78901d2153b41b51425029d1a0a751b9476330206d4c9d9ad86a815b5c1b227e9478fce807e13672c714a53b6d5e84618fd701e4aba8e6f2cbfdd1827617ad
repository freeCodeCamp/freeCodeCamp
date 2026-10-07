import * as ts from 'typescript';
/**
 * Gets all of the type flags in a type, iterating through unions automatically.
 */
export declare function getTypeFlags(type: ts.Type): ts.TypeFlags;
/**
 * @param flagsToCheck The composition of one or more `ts.TypeFlags`.
 * @param isReceiver Whether the type is a receiving type (e.g. the type of a
 * called function's parameter).
 * @remarks
 * Note that if the type is a union, this function will decompose it into the
 * parts and get the flags of every union constituent. If this is not desired,
 * use the `isTypeFlag` function from tsutils.
 */
export declare function isTypeFlagSet(type: ts.Type, flagsToCheck: ts.TypeFlags, isReceiver?: boolean): boolean;
//# sourceMappingURL=typeFlagUtils.d.ts.map
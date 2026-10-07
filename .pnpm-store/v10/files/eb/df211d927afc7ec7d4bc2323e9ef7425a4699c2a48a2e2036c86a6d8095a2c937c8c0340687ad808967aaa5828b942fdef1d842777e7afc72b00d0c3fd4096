import type * as ts from 'typescript';
export declare enum AnyType {
    Any = 0,
    PromiseAny = 1,
    AnyArray = 2,
    Safe = 3
}
/**
 * @returns `AnyType.Any` if the type is `any`, `AnyType.AnyArray` if the type is `any[]` or `readonly any[]`, `AnyType.PromiseAny` if the type is `Promise<any>`,
 *          otherwise it returns `AnyType.Safe`.
 */
export declare function discriminateAnyType(type: ts.Type, checker: ts.TypeChecker, program: ts.Program, tsNode: ts.Node): AnyType;

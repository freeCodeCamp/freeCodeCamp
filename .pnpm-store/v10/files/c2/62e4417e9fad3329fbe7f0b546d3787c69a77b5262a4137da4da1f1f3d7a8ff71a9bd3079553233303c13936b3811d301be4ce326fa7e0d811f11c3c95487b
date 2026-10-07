import type * as ts from 'typescript';
export interface ConstraintTypeInfoUnconstrained {
    constraintType: undefined;
    isTypeParameter: true;
}
export interface ConstraintTypeInfoConstrained {
    constraintType: ts.Type;
    isTypeParameter: true;
}
export interface ConstraintTypeInfoNonGeneric {
    constraintType: ts.Type;
    isTypeParameter: false;
}
export type ConstraintTypeInfo = ConstraintTypeInfoConstrained | ConstraintTypeInfoNonGeneric | ConstraintTypeInfoUnconstrained;
/**
 * Returns whether the type is a generic and what its constraint is.
 *
 * If the type is not a generic, `isTypeParameter` will be `false`, and
 * `constraintType` will be the same as the input type.
 *
 * If the type is a generic, and it is constrained, `isTypeParameter` will be
 * `true`, and `constraintType` will be the constraint type.
 *
 * If the type is a generic, but it is not constrained, `constraintType` will be
 * `undefined` (rather than an `unknown` type), due to https://github.com/microsoft/TypeScript/issues/60475
 *
 * Successor to {@link getConstrainedTypeAtLocation} due to https://github.com/typescript-eslint/typescript-eslint/issues/10438
 *
 * This is considered internal since it is unstable for now and may have breaking changes at any time.
 * Use at your own risk.
 *
 * @internal
 *
 */
export declare function getConstraintInfo(checker: ts.TypeChecker, type: ts.Type): ConstraintTypeInfo;

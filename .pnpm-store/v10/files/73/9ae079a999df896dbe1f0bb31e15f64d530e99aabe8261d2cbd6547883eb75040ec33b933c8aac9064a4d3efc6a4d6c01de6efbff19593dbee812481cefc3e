import * as ts from 'typescript';
/**
 * Checks if the given type is (or accepts) nullable
 */
export declare function isNullableType(type: ts.Type): boolean;
/**
 * Checks if the given type is either an array type,
 * or a union made up solely of array types.
 */
export declare function isTypeArrayTypeOrUnionOfArrayTypes(type: ts.Type, checker: ts.TypeChecker): boolean;
/**
 * @returns true if the type is `never`
 */
export declare function isTypeNeverType(type: ts.Type): boolean;
/**
 * @returns true if the type is `unknown`
 */
export declare function isTypeUnknownType(type: ts.Type): boolean;
export declare function isTypeReferenceType(type: ts.Type): type is ts.TypeReference;
/**
 * @returns true if the type is `any`
 */
export declare function isTypeAnyType(type: ts.Type): boolean;
/**
 * @returns true if the type is `any[]`
 */
export declare function isTypeAnyArrayType(type: ts.Type, checker: ts.TypeChecker): boolean;
/**
 * @returns true if the type is `unknown[]`
 */
export declare function isTypeUnknownArrayType(type: ts.Type, checker: ts.TypeChecker): boolean;
/**
 * @returns Whether a type is an instance of the parent type, including for the parent's base types.
 */
export declare function typeIsOrHasBaseType(type: ts.Type, parentType: ts.Type): boolean;
export declare function isTypeBigIntLiteralType(type: ts.Type): type is ts.BigIntLiteralType;
export declare function isTypeTemplateLiteralType(type: ts.Type): type is ts.TemplateLiteralType;

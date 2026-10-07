import * as ts from 'typescript';
import { PropertyName } from './util';
export declare function isEmptyObjectType(type: ts.Type): type is ts.ObjectType;
export declare function removeOptionalityFromType(checker: ts.TypeChecker, type: ts.Type): ts.Type;
export declare function removeOptionalChainingUndefinedMarkerType(checker: ts.TypeChecker, type: ts.Type): ts.Type;
export declare function isOptionalChainingUndefinedMarkerType(checker: ts.TypeChecker, t: ts.Type): boolean;
export declare function isTypeAssignableToNumber(checker: ts.TypeChecker, type: ts.Type): boolean;
export declare function isTypeAssignableToString(checker: ts.TypeChecker, type: ts.Type): boolean;
export declare function getCallSignaturesOfType(type: ts.Type): ReadonlyArray<ts.Signature>;
/** Returns all types of a union type or an array containing `type` itself if it's no union type. */
export declare function unionTypeParts(type: ts.Type): ts.Type[];
/** Returns all types of a intersection type or an array containing `type` itself if it's no intersection type. */
export declare function intersectionTypeParts(type: ts.Type): ts.Type[];
export declare function someTypePart(type: ts.Type, predicate: (t: ts.Type) => t is ts.UnionOrIntersectionType, cb: (t: ts.Type) => boolean): boolean;
/** Determines if a type thenable and can be used with `await`. */
export declare function isThenableType(checker: ts.TypeChecker, node: ts.Node, type: ts.Type): boolean;
/** Determines if a type thenable and can be used with `await`. */
export declare function isThenableType(checker: ts.TypeChecker, node: ts.Expression, type?: ts.Type): boolean;
/** Determine if a type is definitely falsy. This function doesn't unwrap union types. */
export declare function isFalsyType(type: ts.Type): boolean;
/** Determines whether the given type is a boolean literal type and matches the given boolean literal (true or false). */
export declare function isBooleanLiteralType(type: ts.Type, literal: boolean): boolean;
export declare function getPropertyOfType(type: ts.Type, name: ts.__String): ts.Symbol | undefined;
export declare function getWellKnownSymbolPropertyOfType(type: ts.Type, wellKnownSymbolName: string, checker: ts.TypeChecker): ts.Symbol | undefined;
/** Determines if writing to a certain property of a given type is allowed. */
export declare function isPropertyReadonlyInType(type: ts.Type, name: ts.__String, checker: ts.TypeChecker): boolean;
export declare function symbolHasReadonlyDeclaration(symbol: ts.Symbol, checker: ts.TypeChecker): boolean;
/** Returns the the literal name or unique symbol name from a given type. Doesn't unwrap union types. */
export declare function getPropertyNameFromType(type: ts.Type): PropertyName | undefined;
export declare function getSymbolOfClassLikeDeclaration(node: ts.ClassLikeDeclaration, checker: ts.TypeChecker): ts.Symbol;
export declare function getConstructorTypeOfClassLikeDeclaration(node: ts.ClassLikeDeclaration, checker: ts.TypeChecker): ts.Type;
export declare function getInstanceTypeOfClassLikeDeclaration(node: ts.ClassLikeDeclaration, checker: ts.TypeChecker): ts.Type;
export declare function getIteratorYieldResultFromIteratorResult(type: ts.Type, node: ts.Node, checker: ts.TypeChecker): ts.Type;
/** Lookup the declaration of a class member in the super class. */
export declare function getBaseClassMemberOfClassElement(node: ts.PropertyDeclaration | ts.MethodDeclaration | ts.AccessorDeclaration, checker: ts.TypeChecker): ts.Symbol | undefined;

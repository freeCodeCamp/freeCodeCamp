import { TypeNode, NamedTypeNode, ListTypeNode, NonNullTypeNode, Source } from 'graphql';
export declare function isStringTypes(types: any): types is string;
export declare function isSourceTypes(types: any): types is Source;
export declare function extractType(type: TypeNode): NamedTypeNode;
export declare function isWrappingTypeNode(type: TypeNode): type is ListTypeNode | NonNullTypeNode;
export declare function isListTypeNode(type: TypeNode): type is ListTypeNode;
export declare function isNonNullTypeNode(type: TypeNode): type is NonNullTypeNode;
export declare function printTypeNode(type: TypeNode): string;
export declare enum CompareVal {
    A_SMALLER_THAN_B = -1,
    A_EQUALS_B = 0,
    A_GREATER_THAN_B = 1
}
export type CompareFn<T> = (a: T | undefined, b: T | undefined) => -1 | 0 | 1;
export declare function defaultStringComparator(a: string | undefined, b: string | undefined): CompareVal;

import * as ts from 'typescript';
/**
 * @example
 * ```ts
 * class DerivedClass extends Promise<number> {}
 * DerivedClass.reject
 * // ^ PromiseLike
 * ```
 */
export declare function isPromiseLike(program: ts.Program, type: ts.Type): boolean;
/**
 * @example
 * ```ts
 * const value = Promise
 * value.reject
 * // ^ PromiseConstructorLike
 * ```
 */
export declare function isPromiseConstructorLike(program: ts.Program, type: ts.Type): boolean;
/**
 * @example
 * ```ts
 * class Foo extends Error {}
 * new Foo()
 * //   ^ ErrorLike
 * ```
 */
export declare function isErrorLike(program: ts.Program, type: ts.Type): boolean;
/**
 * @example
 * ```ts
 * type T = Readonly<Error>
 * //   ^ ReadonlyErrorLike
 * ```
 */
export declare function isReadonlyErrorLike(program: ts.Program, type: ts.Type): boolean;
/**
 * @example
 * ```ts
 * type T = Readonly<{ foo: 'bar' }>
 * //   ^ ReadonlyTypeLike
 * ```
 */
export declare function isReadonlyTypeLike(program: ts.Program, type: ts.Type, predicate?: (subType: {
    aliasSymbol: ts.Symbol;
    aliasTypeArguments: readonly ts.Type[];
} & ts.Type) => boolean): boolean;
export declare function isBuiltinTypeAliasLike(program: ts.Program, type: ts.Type, predicate: (subType: {
    aliasSymbol: ts.Symbol;
    aliasTypeArguments: readonly ts.Type[];
} & ts.Type) => boolean): boolean;
export declare function isBuiltinSymbolLike(program: ts.Program, type: ts.Type, symbolName: string | string[]): boolean;
export declare function isBuiltinSymbolLikeRecurser(program: ts.Program, type: ts.Type, predicate: (subType: ts.Type) => boolean | null): boolean;

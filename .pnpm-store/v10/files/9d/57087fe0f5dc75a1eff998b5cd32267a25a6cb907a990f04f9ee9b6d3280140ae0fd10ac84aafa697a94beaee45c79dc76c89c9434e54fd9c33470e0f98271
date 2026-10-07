/**
 * @fileoverview Really small utility functions that didn't deserve their own files
 */
import type { TSESLint, TSESTree } from '@typescript-eslint/utils';
import type { RuleContext } from '@typescript-eslint/utils/ts-eslint';
import * as ts from 'typescript';
/**
 * Check if the context file name is *.d.ts or *.d.tsx
 */
export declare function isDefinitionFile(fileName: string): boolean;
/**
 * Upper cases the first character or the string
 */
export declare function upperCaseFirst(str: string): string;
export declare function arrayGroupByToMap<T, Key extends number | string>(array: T[], getKey: (item: T) => Key): Map<Key, T[]>;
/** Return true if both parameters are equal. */
export type Equal<T> = (a: T, b: T) => boolean;
export declare function arraysAreEqual<T>(a: T[] | undefined, b: T[] | undefined, eq: (a: T, b: T) => boolean): boolean;
/** Returns the first non-`undefined` result. */
export declare function findFirstResult<T, U>(inputs: T[], getResult: (t: T) => U | undefined): U | undefined;
/**
 * Gets a string representation of the name of the index signature.
 */
export declare function getNameFromIndexSignature(node: TSESTree.TSIndexSignature): string;
export declare enum MemberNameType {
    Private = 1,
    Quoted = 2,
    Normal = 3,
    Expression = 4
}
/**
 * Gets a string name representation of the name of the given MethodDefinition
 * or PropertyDefinition node, with handling for computed property names.
 */
export declare function getNameFromMember(member: TSESTree.AccessorProperty | TSESTree.MethodDefinition | TSESTree.Property | TSESTree.PropertyDefinition | TSESTree.TSAbstractAccessorProperty | TSESTree.TSAbstractMethodDefinition | TSESTree.TSAbstractPropertyDefinition | TSESTree.TSMethodSignature | TSESTree.TSPropertySignature, sourceCode: TSESLint.SourceCode): {
    name: string;
    type: MemberNameType;
};
export type ExcludeKeys<Obj extends Record<string, unknown>, Keys extends keyof Obj> = {
    [k in Exclude<keyof Obj, Keys>]: Obj[k];
};
export type RequireKeys<Obj extends Record<string, unknown>, Keys extends keyof Obj> = {
    [k in Keys]-?: Exclude<Obj[k], undefined>;
} & ExcludeKeys<Obj, Keys>;
export declare function getEnumNames<T extends string>(myEnum: Record<T, unknown>): T[];
/**
 * Given an array of words, returns an English-friendly concatenation, separated with commas, with
 * the `and` clause inserted before the last item.
 *
 * Example: ['foo', 'bar', 'baz' ] returns the string "foo, bar, and baz".
 */
export declare function formatWordList(words: string[]): string;
/**
 * Iterates the array in reverse and returns the index of the first element it
 * finds which passes the predicate function.
 *
 * @returns Returns the index of the element if it finds it or -1 otherwise.
 */
export declare function findLastIndex<T>(members: T[], predicate: (member: T) => boolean | null | undefined): number;
export declare function typeNodeRequiresParentheses(node: TSESTree.TypeNode, text: string): boolean;
export declare function isRestParameterDeclaration(decl: ts.Declaration): boolean;
export declare function isParenlessArrowFunction(node: TSESTree.ArrowFunctionExpression, sourceCode: TSESLint.SourceCode): boolean;
export type NodeWithKey = TSESTree.AccessorProperty | TSESTree.MemberExpression | TSESTree.MethodDefinition | TSESTree.Property | TSESTree.PropertyDefinition | TSESTree.TSAbstractMethodDefinition | TSESTree.TSAbstractPropertyDefinition;
/**
 * Gets a member being accessed or declared if its value can be determined statically, and
 * resolves it to the string or symbol value that will be used as the actual member
 * access key at runtime. Otherwise, returns `undefined`.
 *
 * ```ts
 * x.member // returns 'member'
 * ^^^^^^^^
 *
 * x?.member // returns 'member' (optional chaining is treated the same)
 * ^^^^^^^^^
 *
 * x['value'] // returns 'value'
 * ^^^^^^^^^^
 *
 * x[Math.random()] // returns undefined (not a static value)
 * ^^^^^^^^^^^^^^^^
 *
 * arr[0] // returns '0' (NOT 0)
 * ^^^^^^
 *
 * arr[0n] // returns '0' (NOT 0n)
 * ^^^^^^^
 *
 * const s = Symbol.for('symbolName')
 * x[s] // returns `Symbol.for('symbolName')` (since it's a static/global symbol)
 * ^^^^
 *
 * const us = Symbol('symbolName')
 * x[us] // returns undefined (since it's a unique symbol, so not statically analyzable)
 * ^^^^^
 *
 * var object = {
 *     1234: '4567', // returns '1234' (NOT 1234)
 *     ^^^^^^^^^^^^
 *     method() { } // returns 'method'
 *     ^^^^^^^^^^^^
 * }
 *
 * class WithMembers {
 *     foo: string // returns 'foo'
 *     ^^^^^^^^^^^
 * }
 * ```
 */
export declare function getStaticMemberAccessValue(node: NodeWithKey, { sourceCode }: RuleContext<string, unknown[]>): string | symbol | undefined;
/**
 * Answers whether the member expression looks like
 * `x.value`, `x['value']`,
 * or even `const v = 'value'; x[v]` (or optional variants thereof).
 */
export declare const isStaticMemberAccessOfValue: (memberExpression: NodeWithKey, context: RuleContext<string, unknown[]>, ...values: (string | symbol)[]) => boolean;

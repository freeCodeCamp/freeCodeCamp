// Type definitions for prop-types 15.7
// Project: https://github.com/reactjs/prop-types, https://facebook.github.io/react
// Definitions by: DovydasNavickas <https://github.com/DovydasNavickas>
//                 Ferdy Budhidharma <https://github.com/ferdaber>
//                 Sebastian Silbermann <https://github.com/eps1lon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

export type ReactComponentLike =
    | string
    | ((props: any, context?: any) => any)
    | (new(props: any, context?: any) => any);

export interface ReactElementLike {
    type: ReactComponentLike;
    props: any;
    key: string | null;
}

export interface ReactNodeArray extends Iterable<ReactNodeLike> {}

export type ReactNodeLike =
    | ReactElementLike
    | ReactNodeArray
    | string
    | number
    | boolean
    | null
    | undefined;

export const nominalTypeHack: unique symbol;

export type IsOptional<T> = undefined extends T ? true : false;

export type RequiredKeys<V> = {
    [K in keyof V]-?: Exclude<V[K], undefined> extends Validator<infer T> ? IsOptional<T> extends true ? never : K
        : never;
}[keyof V];
export type OptionalKeys<V> = Exclude<keyof V, RequiredKeys<V>>;
export type InferPropsInner<V> = { [K in keyof V]-?: InferType<V[K]> };

export interface Validator<T> {
    (
        props: { [key: string]: any },
        propName: string,
        componentName: string,
        location: string,
        propFullName: string,
    ): Error | null;
    [nominalTypeHack]?: {
        type: T;
    } | undefined;
}

export interface Requireable<T> extends Validator<T | undefined | null> {
    isRequired: Validator<NonNullable<T>>;
}

export type ValidationMap<T> = { [K in keyof T]?: Validator<T[K]> };

export type InferType<V> = V extends Validator<infer T> ? T : any;
export type InferProps<V> =
    & InferPropsInner<Pick<V, RequiredKeys<V>>>
    & Partial<InferPropsInner<Pick<V, OptionalKeys<V>>>>;

export const any: Requireable<any>;
export const array: Requireable<any[]>;
export const bool: Requireable<boolean>;
export const func: Requireable<(...args: any[]) => any>;
export const number: Requireable<number>;
export const object: Requireable<object>;
export const string: Requireable<string>;
export const node: Requireable<ReactNodeLike>;
export const element: Requireable<ReactElementLike>;
export const symbol: Requireable<symbol>;
export const elementType: Requireable<ReactComponentLike>;
export function instanceOf<T>(expectedClass: new(...args: any[]) => T): Requireable<T>;
export function oneOf<T>(types: ReadonlyArray<T>): Requireable<T>;
export function oneOfType<T extends Validator<any>>(types: T[]): Requireable<NonNullable<InferType<T>>>;
export function arrayOf<T>(type: Validator<T>): Requireable<T[]>;
export function objectOf<T>(type: Validator<T>): Requireable<{ [K in keyof any]: T }>;
export function shape<P extends ValidationMap<any>>(type: P): Requireable<InferProps<P>>;
export function exact<P extends ValidationMap<any>>(type: P): Requireable<Required<InferProps<P>>>;

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param typeSpecs Map of name to a ReactPropType
 * @param values Runtime values that need to be type-checked
 * @param location e.g. "prop", "context", "child context"
 * @param componentName Name of the component for error messages
 * @param getStack Returns the component stack
 */
export function checkPropTypes(
    typeSpecs: any,
    values: any,
    location: string,
    componentName: string,
    getStack?: () => any,
): void;

/**
 * Only available if NODE_ENV=production
 */
export function resetWarningCache(): void;

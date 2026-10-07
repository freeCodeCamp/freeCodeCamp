type Intrinsic = typeof globalThis;

type IntrinsicName = keyof Intrinsic | `%${keyof Intrinsic}%`;

type IntrinsicPath = IntrinsicName | `${StripPercents<IntrinsicName>}.${string}` | `%${StripPercents<IntrinsicName>}.${string}%`;

type AllowMissing = boolean;

type StripPercents<T extends string> = T extends `%${infer U}%` ? U : T;

type BindMethodPrecise<F> =
  F extends (this: infer This, ...args: infer Args) => infer R
  ? (obj: This, ...args: Args) => R
  : F extends {
    (this: infer This1, ...args: infer Args1): infer R1;
    (this: infer This2, ...args: infer Args2): infer R2
  }
  ? {
    (obj: This1, ...args: Args1): R1;
    (obj: This2, ...args: Args2): R2
  }
  : never

// Extract method type from a prototype
type GetPrototypeMethod<T extends keyof typeof globalThis, M extends string> =
  (typeof globalThis)[T] extends { prototype: any }
  ? M extends keyof (typeof globalThis)[T]['prototype']
  ? (typeof globalThis)[T]['prototype'][M]
  : never
  : never

// Get static property/method
type GetStaticMember<T extends keyof typeof globalThis, P extends string> =
  P extends keyof (typeof globalThis)[T] ? (typeof globalThis)[T][P] : never

// Type that maps string path to actual bound function or value with better precision
type BoundIntrinsic<S extends string> =
  S extends `${infer Obj}.prototype.${infer Method}`
  ? Obj extends keyof typeof globalThis
  ? BindMethodPrecise<GetPrototypeMethod<Obj, Method & string>>
  : unknown
  : S extends `${infer Obj}.${infer Prop}`
  ? Obj extends keyof typeof globalThis
  ? GetStaticMember<Obj, Prop & string>
  : unknown
  : unknown

declare function arraySlice<T>(array: readonly T[], start?: number, end?: number): T[];
declare function arraySlice<T>(array: ArrayLike<T>, start?: number, end?: number): T[];
declare function arraySlice<T>(array: IArguments, start?: number, end?: number): T[];

// Special cases for methods that need explicit typing
interface SpecialCases {
  '%Object.prototype.isPrototypeOf%': (thisArg: {}, obj: unknown) => boolean;
  '%String.prototype.replace%': {
    (str: string, searchValue: string | RegExp, replaceValue: string): string;
    (str: string, searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string
  };
  '%Object.prototype.toString%': (obj: {}) => string;
  '%Object.prototype.hasOwnProperty%': (obj: {}, v: PropertyKey) => boolean;
  '%Array.prototype.slice%': typeof arraySlice;
  '%Array.prototype.map%': <T, U>(array: readonly T[], callbackfn: (value: T, index: number, array: readonly T[]) => U, thisArg?: any) => U[];
  '%Array.prototype.filter%': <T>(array: readonly T[], predicate: (value: T, index: number, array: readonly T[]) => unknown, thisArg?: any) => T[];
  '%Array.prototype.indexOf%': <T>(array: readonly T[], searchElement: T, fromIndex?: number) => number;
  '%Function.prototype.apply%': <T, A extends any[], R>(fn: (...args: A) => R, thisArg: any, args: A) => R;
  '%Function.prototype.call%': <T, A extends any[], R>(fn: (...args: A) => R, thisArg: any, ...args: A) => R;
  '%Function.prototype.bind%': <T, A extends any[], R>(fn: (...args: A) => R, thisArg: any, ...args: A) => (...remainingArgs: A) => R;
  '%Promise.prototype.then%': {
    <T, R>(promise: Promise<T>, onfulfilled: (value: T) => R | PromiseLike<R>): Promise<R>;
    <T, R>(promise: Promise<T>, onfulfilled: ((value: T) => R | PromiseLike<R>) | undefined | null, onrejected: (reason: any) => R | PromiseLike<R>): Promise<R>;
  };
  '%RegExp.prototype.test%': (regexp: RegExp, str: string) => boolean;
  '%RegExp.prototype.exec%': (regexp: RegExp, str: string) => RegExpExecArray | null;
  '%Error.prototype.toString%': (error: Error) => string;
  '%TypeError.prototype.toString%': (error: TypeError) => string;
  '%String.prototype.split%': (
        obj: unknown,
        splitter: string | RegExp | {
            [Symbol.split](string: string, limit?: number): string[];
        },
        limit?: number | undefined
    ) => string[];
}

/**
 * Returns a bound function for a prototype method, or a value for a static property.
 *
 * @param name - The name of the intrinsic (e.g. 'Array.prototype.slice')
 * @param {AllowMissing} [allowMissing] - Whether to allow missing intrinsics (default: false)
 */
declare function callBound<K extends keyof SpecialCases | StripPercents<keyof SpecialCases>, S extends IntrinsicPath>(name: K, allowMissing?: AllowMissing): SpecialCases[`%${StripPercents<K>}%`];
declare function callBound<K extends keyof SpecialCases | StripPercents<keyof SpecialCases>, S extends IntrinsicPath>(name: S, allowMissing?: AllowMissing): BoundIntrinsic<S>;

export = callBound;

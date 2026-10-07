import type * as errors from "./errors.cjs";
import type * as schemas from "./schemas.cjs";
import type { Class } from "./util.cjs";
type ZodTrait = {
    _zod: {
        def: any;
        [k: string]: any;
    };
};
export interface $constructor<T extends ZodTrait, D = T["_zod"]["def"]> {
    new (def: D): T;
    init(inst: T, def: D): asserts inst is T;
}
/** A special constant with type `never` */
export declare const NEVER: never;
export declare function $constructor<T extends ZodTrait, D = T["_zod"]["def"]>(name: string, initializer: (inst: T, def: D) => void, params?: {
    Parent?: typeof Class;
}): $constructor<T, D>;
export declare const $brand: unique symbol;
export type $brand<T extends string | number | symbol = string | number | symbol> = {
    [$brand]: {
        [k in T]: true;
    };
};
export type $ZodBranded<T extends schemas.SomeType, Brand extends string | number | symbol> = T & Record<"_zod", Record<"output", output<T> & $brand<Brand>>>;
export declare class $ZodAsyncError extends Error {
    constructor();
}
export type input<T> = T extends {
    _zod: {
        input: any;
    };
} ? Required<T["_zod"]>["input"] : unknown;
export type output<T> = T extends {
    _zod: {
        output: any;
    };
} ? Required<T["_zod"]>["output"] : unknown;
export type { output as infer };
export interface $ZodConfig {
    /** Custom error map. Overrides `config().localeError`. */
    customError?: errors.$ZodErrorMap | undefined;
    /** Localized error map. Lowest priority. */
    localeError?: errors.$ZodErrorMap | undefined;
    /** Disable JIT schema compilation. Useful in environments that disallow `eval`. */
    jitless?: boolean | undefined;
}
export declare const globalConfig: $ZodConfig;
export declare function config(newConfig?: Partial<$ZodConfig>): $ZodConfig;

import type * as errors from "./errors.js";
import type * as schemas from "./schemas.js";
import type { Class } from "./util.js";
//////////////////////////////   CONSTRUCTORS   ///////////////////////////////////////

type ZodTrait = { _zod: { def: any; [k: string]: any } };
export interface $constructor<T extends ZodTrait, D = T["_zod"]["def"]> {
  new (def: D): T;
  init(inst: T, def: D): asserts inst is T;
}

/** A special constant with type `never` */
export const NEVER: never = Object.freeze({
  status: "aborted",
}) as never;

export /*@__NO_SIDE_EFFECTS__*/ function $constructor<T extends ZodTrait, D = T["_zod"]["def"]>(
  name: string,
  initializer: (inst: T, def: D) => void,
  params?: { Parent?: typeof Class }
): $constructor<T, D> {
  function init(inst: T, def: D) {
    Object.defineProperty(inst, "_zod", {
      value: inst._zod ?? {},
      enumerable: false,
    });

    inst._zod.traits ??= new Set();

    inst._zod.traits.add(name);
    initializer(inst, def);
    // support prototype modifications
    for (const k in _.prototype) {
      if (!(k in inst)) Object.defineProperty(inst, k, { value: _.prototype[k].bind(inst) });
    }
    inst._zod.constr = _;
    inst._zod.def = def;
  }

  // doesn't work if Parent has a constructor with arguments
  const Parent = params?.Parent ?? Object;
  class Definition extends Parent {}
  Object.defineProperty(Definition, "name", { value: name });

  function _(this: any, def: D) {
    const inst = params?.Parent ? new Definition() : this;
    init(inst, def);
    inst._zod.deferred ??= [];
    for (const fn of inst._zod.deferred) {
      fn();
    }
    return inst;
  }

  Object.defineProperty(_, "init", { value: init });
  Object.defineProperty(_, Symbol.hasInstance, {
    value: (inst: any) => {
      if (params?.Parent && inst instanceof params.Parent) return true;
      return inst?._zod?.traits?.has(name);
    },
  });
  Object.defineProperty(_, "name", { value: name });
  return _ as any;
}

//////////////////////////////   UTILITIES   ///////////////////////////////////////
export const $brand: unique symbol = Symbol("zod_brand");
export type $brand<T extends string | number | symbol = string | number | symbol> = {
  [$brand]: { [k in T]: true };
};

export type $ZodBranded<T extends schemas.SomeType, Brand extends string | number | symbol> = T &
  Record<"_zod", Record<"output", output<T> & $brand<Brand>>>;

export class $ZodAsyncError extends Error {
  constructor() {
    super(`Encountered Promise during synchronous parse. Use .parseAsync() instead.`);
  }
}

////////////////////////////  TYPE HELPERS  ///////////////////////////////////

// export type input<T extends schemas.$ZodType> = T["_zod"]["input"];
// export type output<T extends schemas.$ZodType> = T["_zod"]["output"];
// export type input<T extends schemas.$ZodType> = T["_zod"]["input"];
// export type output<T extends schemas.$ZodType> = T["_zod"]["output"];
export type input<T> = T extends { _zod: { input: any } } ? Required<T["_zod"]>["input"] : unknown;
export type output<T> = T extends { _zod: { output: any } } ? Required<T["_zod"]>["output"] : unknown;

// Mk2
// export type input<T> = T extends { _zod: { "~input": any } }
//   ? T["_zod"]["~input"]
//   : T extends { _zod: { input: any } }
//     ? T["_zod"]["input"]
//     : never;
// export type output<T> = T extends { _zod: { "~output": any } }
//   ? T["_zod"]["~output"]
//   : T extends { _zod: { output: any } }
//     ? T["_zod"]["output"]
//     : never;
// Mk 3
// export type input<T extends schemas.$ZodType> = T["_zod"]["input"];
// export type output<T extends schemas.$ZodType> = T["_zod"]["output"];
// Mk 4
// export type input<T extends schemas.$ZodType> = T[] extends { _zod: { "~input": any } }
//   ? T["_zod"]["~input"]
//   : T extends { _zod: { input: any } }
//     ? T["_zod"]["input"]
//     : never;
// export type output<T extends schemas.$ZodType> = T extends { _zod: { "~output": any } }
//   ? T["_zod"]["~output"]
//   : T extends { _zod: { output: any } }
//     ? T["_zod"]["output"]
//     : never;

export type { output as infer };

//////////////////////////////   CONFIG   ///////////////////////////////////////

export interface $ZodConfig {
  /** Custom error map. Overrides `config().localeError`. */
  customError?: errors.$ZodErrorMap | undefined;
  /** Localized error map. Lowest priority. */
  localeError?: errors.$ZodErrorMap | undefined;
  /** Disable JIT schema compilation. Useful in environments that disallow `eval`. */
  jitless?: boolean | undefined;
}

export const globalConfig: $ZodConfig = {};

export function config(newConfig?: Partial<$ZodConfig>): $ZodConfig {
  if (newConfig) Object.assign(globalConfig, newConfig);
  return globalConfig;
}

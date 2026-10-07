import type * as checks from "./checks.js";
import type { $ZodConfig } from "./core.js";
import type * as errors from "./errors.js";
import type * as schemas from "./schemas.js";

// json
export type JSONType = string | number | boolean | null | JSONType[] | { [key: string]: JSONType };
export type JWTAlgorithm =
  | "HS256"
  | "HS384"
  | "HS512"
  | "RS256"
  | "RS384"
  | "RS512"
  | "ES256"
  | "ES384"
  | "ES512"
  | "PS256"
  | "PS384"
  | "PS512"
  | "EdDSA"
  | (string & {});
export type IPVersion = "v4" | "v6";
export type MimeTypes =
  | "application/json"
  | "application/xml"
  | "application/x-www-form-urlencoded"
  | "application/javascript"
  | "application/pdf"
  | "application/zip"
  | "application/vnd.ms-excel"
  | "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  | "application/msword"
  | "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  | "application/vnd.ms-powerpoint"
  | "application/vnd.openxmlformats-officedocument.presentationml.presentation"
  | "application/octet-stream"
  | "application/graphql"
  | "text/html"
  | "text/plain"
  | "text/css"
  | "text/javascript"
  | "text/csv"
  | "image/png"
  | "image/jpeg"
  | "image/gif"
  | "image/svg+xml"
  | "image/webp"
  | "audio/mpeg"
  | "audio/ogg"
  | "audio/wav"
  | "audio/webm"
  | "video/mp4"
  | "video/webm"
  | "video/ogg"
  | "font/woff"
  | "font/woff2"
  | "font/ttf"
  | "font/otf"
  | "multipart/form-data"
  | (string & {});
export type ParsedTypes =
  | "string"
  | "number"
  | "bigint"
  | "boolean"
  | "symbol"
  | "undefined"
  | "object"
  | "function"
  | "file"
  | "date"
  | "array"
  | "map"
  | "set"
  | "nan"
  | "null"
  | "promise";

// utils
export type AssertEqual<T, U> = (<V>() => V extends T ? 1 : 2) extends <V>() => V extends U ? 1 : 2 ? true : false;
export type AssertNotEqual<T, U> = (<V>() => V extends T ? 1 : 2) extends <V>() => V extends U ? 1 : 2 ? false : true;
export type AssertExtends<T, U> = T extends U ? T : never;
export type IsAny<T> = 0 extends 1 & T ? true : false;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type OmitKeys<T, K extends string> = Pick<T, Exclude<keyof T, K>>;
export type MakePartial<T, K extends keyof T> = Omit<T, K> & InexactPartial<Pick<T, K>>;
export type MakeRequired<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;

export type Exactly<T, X> = T & Record<Exclude<keyof X, keyof T>, never>;
export type NoUndefined<T> = T extends undefined ? never : T;
export type Whatever = {} | undefined | null;
export type LoosePartial<T extends object> = InexactPartial<T> & {
  [k: string]: unknown;
};
export type Mask<Keys extends PropertyKey> = { [K in Keys]?: true };
export type Writeable<T> = { -readonly [P in keyof T]: T[P] } & {};
export type InexactPartial<T> = {
  [P in keyof T]?: T[P] | undefined;
};
export type EmptyObject = Record<string, never>;
export type BuiltIn =
  | (((...args: any[]) => any) | (new (...args: any[]) => any))
  | { readonly [Symbol.toStringTag]: string }
  | Date
  | Error
  | Generator
  | Promise<unknown>
  | RegExp;
export type MakeReadonly<T> = T extends Map<infer K, infer V>
  ? ReadonlyMap<K, V>
  : T extends Set<infer V>
    ? ReadonlySet<V>
    : T extends [infer Head, ...infer Tail]
      ? readonly [Head, ...Tail]
      : T extends Array<infer V>
        ? ReadonlyArray<V>
        : T extends BuiltIn
          ? T
          : Readonly<T>;
export type SomeObject = Record<PropertyKey, any>;
export type Identity<T> = T;
export type Flatten<T> = Identity<{ [k in keyof T]: T[k] }>;
export type Mapped<T> = { [k in keyof T]: T[k] };
export type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

export type NoNeverKeys<T> = {
  [k in keyof T]: [T[k]] extends [never] ? never : k;
}[keyof T];
export type NoNever<T> = Identity<{
  [k in NoNeverKeys<T>]: k extends keyof T ? T[k] : never;
}>;
export type Extend<A extends SomeObject, B extends SomeObject> = Flatten<
  // fast path when there is no keys overlap
  keyof A & keyof B extends never
    ? A & B
    : {
        [K in keyof A as K extends keyof B ? never : K]: A[K];
      } & {
        [K in keyof B]: B[K];
      }
>;

export type TupleItems = ReadonlyArray<schemas.SomeType>;
export type AnyFunc = (...args: any[]) => any;
export type IsProp<T, K extends keyof T> = T[K] extends AnyFunc ? never : K;
export type MaybeAsync<T> = T | Promise<T>;
export type KeyOf<T> = keyof OmitIndexSignature<T>;
export type OmitIndexSignature<T> = {
  [K in keyof T as string extends K ? never : K extends string ? K : never]: T[K];
};
export type ExtractIndexSignature<T> = {
  [K in keyof T as string extends K ? K : K extends string ? never : K]: T[K];
};
export type Keys<T extends object> = keyof OmitIndexSignature<T>;

export type SchemaClass<T extends schemas.SomeType> = {
  new (def: T["_zod"]["def"]): T;
};
export type EnumValue = string | number; // | bigint | boolean | symbol;
export type EnumLike = Readonly<Record<string, EnumValue>>;
export type ToEnum<T extends EnumValue> = Flatten<{ [k in T]: k }>;
export type KeysEnum<T extends object> = ToEnum<Exclude<keyof T, symbol>>;
export type KeysArray<T extends object> = Flatten<(keyof T & string)[]>;
export type Literal = string | number | bigint | boolean | null | undefined;
export type LiteralArray = Array<Literal>;
export type Primitive = string | number | symbol | bigint | boolean | null | undefined;
export type PrimitiveArray = Array<Primitive>;
export type HasSize = { size: number };
export type HasLength = { length: number }; // string | Array<unknown> | Set<unknown> | File;
export type Numeric = number | bigint | Date;
export type SafeParseResult<T> = SafeParseSuccess<T> | SafeParseError<T>;
export type SafeParseSuccess<T> = { success: true; data: T; error?: never };
export type SafeParseError<T> = {
  success: false;
  data?: never;
  error: errors.$ZodError<T>;
};

export type PropValues = Record<string, Set<Primitive>>;
export type PrimitiveSet = Set<Primitive>;

// functions
export function assertEqual<A, B>(val: AssertEqual<A, B>): AssertEqual<A, B> {
  return val;
}

export function assertNotEqual<A, B>(val: AssertNotEqual<A, B>): AssertNotEqual<A, B> {
  return val;
}

export function assertIs<T>(_arg: T): void {}

export function assertNever(_x: never): never {
  throw new Error();
}
export function assert<T>(_: any): asserts _ is T {}

export function getEnumValues(entries: EnumLike): EnumValue[] {
  const numericValues = Object.values(entries).filter((v) => typeof v === "number");
  const values = Object.entries(entries)
    .filter(([k, _]) => numericValues.indexOf(+k) === -1)
    .map(([_, v]) => v);
  return values;
}

export function joinValues<T extends Primitive[]>(array: T, separator = "|"): string {
  return array.map((val) => stringifyPrimitive(val)).join(separator);
}

export function jsonStringifyReplacer(_: string, value: any): any {
  if (typeof value === "bigint") return value.toString();
  return value;
}

export function cached<T>(getter: () => T): { value: T } {
  const set = false;
  return {
    get value() {
      if (!set) {
        const value = getter();
        Object.defineProperty(this, "value", { value });
        return value;
      }
      throw new Error("cached value already set");
    },
  };
}

export function nullish(input: any): boolean {
  return input === null || input === undefined;
}

export function cleanRegex(source: string): string {
  const start = source.startsWith("^") ? 1 : 0;
  const end = source.endsWith("$") ? source.length - 1 : source.length;
  return source.slice(start, end);
}

export function floatSafeRemainder(val: number, step: number): number {
  const valDecCount = (val.toString().split(".")[1] || "").length;
  const stepDecCount = (step.toString().split(".")[1] || "").length;
  const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
  const valInt = Number.parseInt(val.toFixed(decCount).replace(".", ""));
  const stepInt = Number.parseInt(step.toFixed(decCount).replace(".", ""));
  return (valInt % stepInt) / 10 ** decCount;
}

export function defineLazy<T, K extends keyof T>(object: T, key: K, getter: () => T[K]): void {
  const set = false;
  Object.defineProperty(object, key, {
    get() {
      if (!set) {
        const value = getter();
        object[key] = value;
        return value;
      }
      throw new Error("cached value already set");
    },
    set(v) {
      Object.defineProperty(object, key, {
        value: v,
        // configurable: true,
      });
      // object[key] = v;
    },
    configurable: true,
  });
}

export function assignProp<T extends object, K extends PropertyKey>(
  target: T,
  prop: K,
  value: K extends keyof T ? T[K] : any
): void {
  Object.defineProperty(target, prop, {
    value,
    writable: true,
    enumerable: true,
    configurable: true,
  });
}

export function getElementAtPath(obj: any, path: (string | number)[] | null | undefined): any {
  if (!path) return obj;
  return path.reduce((acc, key) => acc?.[key], obj);
}

export function promiseAllObject<T extends object>(promisesObj: T): Promise<{ [k in keyof T]: Awaited<T[k]> }> {
  const keys = Object.keys(promisesObj);
  const promises = keys.map((key) => (promisesObj as any)[key]);

  return Promise.all(promises).then((results) => {
    const resolvedObj: any = {};
    for (let i = 0; i < keys.length; i++) {
      resolvedObj[keys[i]!] = results[i];
    }
    return resolvedObj;
  });
}

export function randomString(length = 10): string {
  const chars = "abcdefghijklmnopqrstuvwxyz";
  let str = "";
  for (let i = 0; i < length; i++) {
    str += chars[Math.floor(Math.random() * chars.length)];
  }
  return str;
}

export function esc(str: string): string {
  return JSON.stringify(str);
}

export const captureStackTrace: (targetObject: object, constructorOpt?: Function) => void = Error.captureStackTrace
  ? Error.captureStackTrace
  : (..._args) => {};

export function isObject(data: any): data is Record<PropertyKey, unknown> {
  return typeof data === "object" && data !== null && !Array.isArray(data);
}

export const allowsEval: { value: boolean } = cached(() => {
  if (typeof navigator !== "undefined" && navigator?.userAgent?.includes("Cloudflare")) {
    return false;
  }

  try {
    const F = Function;
    new F("");
    return true;
  } catch (_) {
    return false;
  }
});

export function isPlainObject(o: any): o is Record<PropertyKey, unknown> {
  if (isObject(o) === false) return false;

  // modified constructor
  const ctor = o.constructor;
  if (ctor === undefined) return true;

  // modified prototype
  const prot = ctor.prototype;
  if (isObject(prot) === false) return false;

  // ctor doesn't have static `isPrototypeOf`
  if (Object.prototype.hasOwnProperty.call(prot, "isPrototypeOf") === false) {
    return false;
  }

  return true;
}

export function numKeys(data: any): number {
  let keyCount = 0;
  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      keyCount++;
    }
  }
  return keyCount;
}

export const getParsedType = (data: any): ParsedTypes => {
  const t = typeof data;

  switch (t) {
    case "undefined":
      return "undefined";

    case "string":
      return "string";

    case "number":
      return Number.isNaN(data) ? "nan" : "number";

    case "boolean":
      return "boolean";

    case "function":
      return "function";

    case "bigint":
      return "bigint";

    case "symbol":
      return "symbol";

    case "object":
      if (Array.isArray(data)) {
        return "array";
      }
      if (data === null) {
        return "null";
      }
      if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
        return "promise";
      }
      if (typeof Map !== "undefined" && data instanceof Map) {
        return "map";
      }
      if (typeof Set !== "undefined" && data instanceof Set) {
        return "set";
      }
      if (typeof Date !== "undefined" && data instanceof Date) {
        return "date";
      }
      if (typeof File !== "undefined" && data instanceof File) {
        return "file";
      }
      return "object";

    default:
      throw new Error(`Unknown data type: ${t}`);
  }
};

export const propertyKeyTypes: Set<string> = new Set(["string", "number", "symbol"]);
export const primitiveTypes: Set<string> = new Set(["string", "number", "bigint", "boolean", "symbol", "undefined"]);
export function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// zod-specific utils
export function clone<T extends schemas.$ZodType>(inst: T, def?: T["_zod"]["def"], params?: { parent: boolean }): T {
  const cl = new inst._zod.constr(def ?? inst._zod.def);
  if (!def || params?.parent) cl._zod.parent = inst;
  return cl as any;
}

export type EmptyToNever<T> = keyof T extends never ? never : T;

export type Normalize<T> = T extends undefined
  ? never
  : T extends Record<any, any>
    ? Flatten<
        {
          [k in keyof Omit<T, "error" | "message">]: T[k];
        } & ("error" extends keyof T
          ? {
              error?: Exclude<T["error"], string>;
              // path?: PropertyKey[] | undefined;
              // message?: string | undefined;
            }
          : unknown)
      >
    : never;

export function normalizeParams<T>(_params: T): Normalize<T> {
  const params: any = _params;

  if (!params) return {} as any;
  if (typeof params === "string") return { error: () => params } as any;
  if (params?.message !== undefined) {
    if (params?.error !== undefined) throw new Error("Cannot specify both `message` and `error` params");
    params.error = params.message;
  }
  delete params.message;
  if (typeof params.error === "string") return { ...params, error: () => params.error } as any;
  return params;
}

export function createTransparentProxy<T extends object>(getter: () => T): T {
  let target: T;
  return new Proxy(
    {},
    {
      get(_, prop, receiver) {
        target ??= getter();
        return Reflect.get(target, prop, receiver);
      },
      set(_, prop, value, receiver) {
        target ??= getter();
        return Reflect.set(target, prop, value, receiver);
      },
      has(_, prop) {
        target ??= getter();
        return Reflect.has(target, prop);
      },
      deleteProperty(_, prop) {
        target ??= getter();
        return Reflect.deleteProperty(target, prop);
      },
      ownKeys(_) {
        target ??= getter();
        return Reflect.ownKeys(target);
      },
      getOwnPropertyDescriptor(_, prop) {
        target ??= getter();
        return Reflect.getOwnPropertyDescriptor(target, prop);
      },
      defineProperty(_, prop, descriptor) {
        target ??= getter();
        return Reflect.defineProperty(target, prop, descriptor);
      },
    }
  ) as T;
}

export function stringifyPrimitive(value: any): string {
  if (typeof value === "bigint") return value.toString() + "n";
  if (typeof value === "string") return `"${value}"`;
  return `${value}`;
}

export function optionalKeys(shape: schemas.$ZodShape): string[] {
  return Object.keys(shape).filter((k) => {
    return shape[k]!._zod.optin === "optional" && shape[k]!._zod.optout === "optional";
  });
}

export type CleanKey<T extends PropertyKey> = T extends `?${infer K}` ? K : T extends `${infer K}?` ? K : T;
export type ToCleanMap<T extends schemas.$ZodLooseShape> = {
  [k in keyof T]: k extends `?${infer K}` ? K : k extends `${infer K}?` ? K : k;
};
export type FromCleanMap<T extends schemas.$ZodLooseShape> = {
  [k in keyof T as k extends `?${infer K}` ? K : k extends `${infer K}?` ? K : k]: k;
};

export const NUMBER_FORMAT_RANGES: Record<checks.$ZodNumberFormats, [number, number]> = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-3.4028234663852886e38, 3.4028234663852886e38],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE],
};

export const BIGINT_FORMAT_RANGES: Record<checks.$ZodBigIntFormats, [bigint, bigint]> = {
  int64: [/* @__PURE__*/ BigInt("-9223372036854775808"), /* @__PURE__*/ BigInt("9223372036854775807")],
  uint64: [/* @__PURE__*/ BigInt(0), /* @__PURE__*/ BigInt("18446744073709551615")],
};

export function pick(schema: schemas.$ZodObject, mask: Record<string, unknown>): any {
  const newShape: Writeable<schemas.$ZodShape> = {};
  const currDef = schema._zod.def; //.shape;

  for (const key in mask) {
    if (!(key in currDef.shape)) {
      throw new Error(`Unrecognized key: "${key}"`);
    }
    if (!mask[key]) continue;

    // pick key
    newShape[key] = currDef.shape[key]!;
  }

  return clone(schema, {
    ...schema._zod.def,
    shape: newShape,
    checks: [],
  }) as any;
}

export function omit(schema: schemas.$ZodObject, mask: object): any {
  const newShape: Writeable<schemas.$ZodShape> = { ...schema._zod.def.shape };
  const currDef = schema._zod.def; //.shape;
  for (const key in mask) {
    if (!(key in currDef.shape)) {
      throw new Error(`Unrecognized key: "${key}"`);
    }
    if (!(mask as any)[key]) continue;

    delete newShape[key];
  }
  return clone(schema, {
    ...schema._zod.def,
    shape: newShape,
    checks: [],
  });
}

export function extend(schema: schemas.$ZodObject, shape: schemas.$ZodShape): any {
  if (!isPlainObject(shape)) {
    throw new Error("Invalid input to extend: expected a plain object");
  }
  const def = {
    ...schema._zod.def,
    get shape() {
      const _shape = { ...schema._zod.def.shape, ...shape };
      assignProp(this, "shape", _shape); // self-caching
      return _shape;
    },
    checks: [], // delete existing checks
  } as any;
  return clone(schema, def) as any;
}

export function merge(a: schemas.$ZodObject, b: schemas.$ZodObject): any {
  return clone(a, {
    ...a._zod.def,
    get shape() {
      const _shape = { ...a._zod.def.shape, ...b._zod.def.shape };
      assignProp(this, "shape", _shape); // self-caching
      return _shape;
    },
    catchall: b._zod.def.catchall,
    checks: [], // delete existing checks
  }) as any;
}

export function partial(
  Class: SchemaClass<schemas.$ZodOptional> | null,
  schema: schemas.$ZodObject,
  mask: object | undefined
): any {
  const oldShape = schema._zod.def.shape;
  const shape: Writeable<schemas.$ZodShape> = { ...oldShape };

  if (mask) {
    for (const key in mask) {
      if (!(key in oldShape)) {
        throw new Error(`Unrecognized key: "${key}"`);
      }
      if (!(mask as any)[key]) continue;
      // if (oldShape[key]!._zod.optin === "optional") continue;
      shape[key] = Class
        ? new Class({
            type: "optional",
            innerType: oldShape[key]!,
          })
        : oldShape[key]!;
    }
  } else {
    for (const key in oldShape) {
      // if (oldShape[key]!._zod.optin === "optional") continue;
      shape[key] = Class
        ? new Class({
            type: "optional",
            innerType: oldShape[key]!,
          })
        : oldShape[key]!;
    }
  }

  return clone(schema, {
    ...schema._zod.def,
    shape,
    checks: [],
  }) as any;
}

export function required(
  Class: SchemaClass<schemas.$ZodNonOptional>,
  schema: schemas.$ZodObject,
  mask: object | undefined
): any {
  const oldShape = schema._zod.def.shape;
  const shape: Writeable<schemas.$ZodShape> = { ...oldShape };

  if (mask) {
    for (const key in mask) {
      if (!(key in shape)) {
        throw new Error(`Unrecognized key: "${key}"`);
      }
      if (!(mask as any)[key]) continue;
      // overwrite with non-optional
      shape[key] = new Class({
        type: "nonoptional",
        innerType: oldShape[key]!,
      });
    }
  } else {
    for (const key in oldShape) {
      // overwrite with non-optional
      shape[key] = new Class({
        type: "nonoptional",
        innerType: oldShape[key]!,
      });
    }
  }

  return clone(schema, {
    ...schema._zod.def,
    shape,
    // optional: [],
    checks: [],
  }) as any;
}

export type Constructor<T, Def extends any[] = any[]> = new (...args: Def) => T;

export function aborted(x: schemas.ParsePayload, startIndex = 0): boolean {
  for (let i = startIndex; i < x.issues.length; i++) {
    if (x.issues[i]?.continue !== true) return true;
  }
  return false;
}

export function prefixIssues(path: PropertyKey, issues: errors.$ZodRawIssue[]): errors.$ZodRawIssue[] {
  return issues.map((iss) => {
    (iss as any).path ??= [];
    (iss as any).path.unshift(path);
    return iss;
  });
}

export function unwrapMessage(message: string | { message: string } | undefined | null): string | undefined {
  return typeof message === "string" ? message : message?.message;
}

export function finalizeIssue(
  iss: errors.$ZodRawIssue,
  ctx: schemas.ParseContextInternal | undefined,
  config: $ZodConfig
): errors.$ZodIssue {
  const full = { ...iss, path: iss.path ?? [] } as errors.$ZodIssue;

  // for backwards compatibility
  if (!iss.message) {
    const message =
      unwrapMessage(iss.inst?._zod.def?.error?.(iss as never)) ??
      unwrapMessage(ctx?.error?.(iss as never)) ??
      unwrapMessage(config.customError?.(iss)) ??
      unwrapMessage(config.localeError?.(iss)) ??
      "Invalid input";
    (full as any).message = message;
  }

  // delete (full as any).def;
  delete (full as any).inst;
  delete (full as any).continue;
  if (!ctx?.reportInput) {
    delete (full as any).input;
  }

  return full;
}

export function getSizableOrigin(input: any): "set" | "map" | "file" | "unknown" {
  if (input instanceof Set) return "set";
  if (input instanceof Map) return "map";
  if (input instanceof File) return "file";
  return "unknown";
}

export function getLengthableOrigin(input: any): "array" | "string" | "unknown" {
  if (Array.isArray(input)) return "array";
  if (typeof input === "string") return "string";
  return "unknown";
}

//////////    REFINES     //////////
export function issue(_iss: string, input: any, inst: any): errors.$ZodRawIssue;
export function issue(_iss: errors.$ZodRawIssue): errors.$ZodRawIssue;
export function issue(...args: [string | errors.$ZodRawIssue, any?, any?]): errors.$ZodRawIssue {
  const [iss, input, inst] = args;
  if (typeof iss === "string") {
    return {
      message: iss,
      code: "custom",
      input,
      inst,
    };
  }

  return { ...iss };
}

export function cleanEnum(obj: Record<string, EnumValue>): EnumValue[] {
  return Object.entries(obj)
    .filter(([k, _]) => {
      // return true if NaN, meaning it's not a number, thus a string key
      return Number.isNaN(Number.parseInt(k, 10));
    })
    .map((el) => el[1]);
}

// instanceof
export abstract class Class {
  constructor(..._args: any[]) {}
}

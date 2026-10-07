import {
  type IssueData,
  type StringValidation,
  type ZodCustomIssue,
  ZodError,
  type ZodErrorMap,
  type ZodIssue,
  ZodIssueCode,
} from "./ZodError.js";
import { defaultErrorMap, getErrorMap } from "./errors.js";
import type { enumUtil } from "./helpers/enumUtil.js";
import { errorUtil } from "./helpers/errorUtil.js";
import {
  type AsyncParseReturnType,
  DIRTY,
  INVALID,
  OK,
  type ParseContext,
  type ParseInput,
  type ParseParams,
  type ParsePath,
  type ParseReturnType,
  ParseStatus,
  type SyncParseReturnType,
  addIssueToContext,
  isAborted,
  isAsync,
  isDirty,
  isValid,
  makeIssue,
} from "./helpers/parseUtil.js";
import type { partialUtil } from "./helpers/partialUtil.js";
import type { Primitive } from "./helpers/typeAliases.js";
import { util, ZodParsedType, getParsedType, type objectUtil } from "./helpers/util.js";
import type { StandardSchemaV1 } from "./standard-schema.js";

///////////////////////////////////////
///////////////////////////////////////
//////////                   //////////
//////////      ZodType      //////////
//////////                   //////////
///////////////////////////////////////
///////////////////////////////////////

export interface RefinementCtx {
  addIssue: (arg: IssueData) => void;
  path: (string | number)[];
}
export type ZodRawShape = { [k: string]: ZodTypeAny };
export type ZodTypeAny = ZodType<any, any, any>;
export type TypeOf<T extends ZodType<any, any, any>> = T["_output"];
export type input<T extends ZodType<any, any, any>> = T["_input"];
export type output<T extends ZodType<any, any, any>> = T["_output"];
export type { TypeOf as infer };

export type CustomErrorParams = Partial<util.Omit<ZodCustomIssue, "code">>;
export interface ZodTypeDef {
  errorMap?: ZodErrorMap | undefined;
  description?: string | undefined;
}

class ParseInputLazyPath implements ParseInput {
  parent: ParseContext;
  data: any;
  _path: ParsePath;
  _key: string | number | (string | number)[];
  _cachedPath: ParsePath = [];
  constructor(parent: ParseContext, value: any, path: ParsePath, key: string | number | (string | number)[]) {
    this.parent = parent;
    this.data = value;
    this._path = path;
    this._key = key;
  }
  get path() {
    if (!this._cachedPath.length) {
      if (Array.isArray(this._key)) {
        this._cachedPath.push(...this._path, ...this._key);
      } else {
        this._cachedPath.push(...this._path, this._key);
      }
    }

    return this._cachedPath;
  }
}

const handleResult = <Input, Output>(
  ctx: ParseContext,
  result: SyncParseReturnType<Output>
): { success: true; data: Output } | { success: false; error: ZodError<Input> } => {
  if (isValid(result)) {
    return { success: true, data: result.value };
  } else {
    if (!ctx.common.issues.length) {
      throw new Error("Validation failed but no issues detected.");
    }

    return {
      success: false,
      get error() {
        if ((this as any)._error) return (this as any)._error as Error;
        const error = new ZodError(ctx.common.issues);
        (this as any)._error = error;
        return (this as any)._error;
      },
    };
  }
};

export type RawCreateParams =
  | {
      errorMap?: ZodErrorMap | undefined;
      invalid_type_error?: string | undefined;
      required_error?: string | undefined;
      message?: string | undefined;
      description?: string | undefined;
    }
  | undefined;
export type ProcessedCreateParams = {
  errorMap?: ZodErrorMap | undefined;
  description?: string | undefined;
};
function processCreateParams(params: RawCreateParams): ProcessedCreateParams {
  if (!params) return {};
  const { errorMap, invalid_type_error, required_error, description } = params;
  if (errorMap && (invalid_type_error || required_error)) {
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  }
  if (errorMap) return { errorMap: errorMap, description };
  const customMap: ZodErrorMap = (iss, ctx) => {
    const { message } = params;

    if (iss.code === "invalid_enum_value") {
      return { message: message ?? ctx.defaultError };
    }
    if (typeof ctx.data === "undefined") {
      return { message: message ?? required_error ?? ctx.defaultError };
    }
    if (iss.code !== "invalid_type") return { message: ctx.defaultError };
    return { message: message ?? invalid_type_error ?? ctx.defaultError };
  };
  return { errorMap: customMap, description };
}

export type SafeParseSuccess<Output> = {
  success: true;
  data: Output;
  error?: never;
};
export type SafeParseError<Input> = {
  success: false;
  error: ZodError<Input>;
  data?: never;
};

export type SafeParseReturnType<Input, Output> = SafeParseSuccess<Output> | SafeParseError<Input>;

export abstract class ZodType<Output = any, Def extends ZodTypeDef = ZodTypeDef, Input = Output> {
  readonly _type!: Output;
  readonly _output!: Output;
  readonly _input!: Input;
  readonly _def!: Def;

  get description(): string | undefined {
    return this._def.description;
  }

  "~standard": StandardSchemaV1.Props<Input, Output>;

  abstract _parse(input: ParseInput): ParseReturnType<Output>;

  _getType(input: ParseInput): string {
    return getParsedType(input.data);
  }

  _getOrReturnCtx(input: ParseInput, ctx?: ParseContext | undefined): ParseContext {
    return (
      ctx || {
        common: input.parent.common,
        data: input.data,

        parsedType: getParsedType(input.data),

        schemaErrorMap: this._def.errorMap,
        path: input.path,
        parent: input.parent,
      }
    );
  }

  _processInputParams(input: ParseInput): {
    status: ParseStatus;
    ctx: ParseContext;
  } {
    return {
      status: new ParseStatus(),
      ctx: {
        common: input.parent.common,
        data: input.data,

        parsedType: getParsedType(input.data),

        schemaErrorMap: this._def.errorMap,
        path: input.path,
        parent: input.parent,
      },
    };
  }

  _parseSync(input: ParseInput): SyncParseReturnType<Output> {
    const result = this._parse(input);
    if (isAsync(result)) {
      throw new Error("Synchronous parse encountered promise.");
    }
    return result;
  }

  _parseAsync(input: ParseInput): AsyncParseReturnType<Output> {
    const result = this._parse(input);
    return Promise.resolve(result);
  }

  parse(data: unknown, params?: util.InexactPartial<ParseParams>): Output {
    const result = this.safeParse(data, params);
    if (result.success) return result.data;
    throw result.error;
  }

  safeParse(data: unknown, params?: util.InexactPartial<ParseParams>): SafeParseReturnType<Input, Output> {
    const ctx: ParseContext = {
      common: {
        issues: [],
        async: params?.async ?? false,
        contextualErrorMap: params?.errorMap,
      },
      path: params?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data),
    };
    const result = this._parseSync({ data, path: ctx.path, parent: ctx });

    return handleResult(ctx, result);
  }

  "~validate"(data: unknown): StandardSchemaV1.Result<Output> | Promise<StandardSchemaV1.Result<Output>> {
    const ctx: ParseContext = {
      common: {
        issues: [],
        async: !!(this["~standard"] as any).async,
      },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data),
    };

    if (!(this["~standard"] as any).async) {
      try {
        const result = this._parseSync({ data, path: [], parent: ctx });
        return isValid(result)
          ? {
              value: result.value,
            }
          : {
              issues: ctx.common.issues,
            };
      } catch (err: any) {
        if ((err as Error)?.message?.toLowerCase()?.includes("encountered")) {
          (this["~standard"] as any).async = true;
        }
        (ctx as any).common = {
          issues: [],
          async: true,
        };
      }
    }

    return this._parseAsync({ data, path: [], parent: ctx }).then((result) =>
      isValid(result)
        ? {
            value: result.value,
          }
        : {
            issues: ctx.common.issues,
          }
    );
  }

  async parseAsync(data: unknown, params?: util.InexactPartial<ParseParams>): Promise<Output> {
    const result = await this.safeParseAsync(data, params);
    if (result.success) return result.data;
    throw result.error;
  }

  async safeParseAsync(
    data: unknown,
    params?: util.InexactPartial<ParseParams>
  ): Promise<SafeParseReturnType<Input, Output>> {
    const ctx: ParseContext = {
      common: {
        issues: [],
        contextualErrorMap: params?.errorMap,
        async: true,
      },
      path: params?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data),
    };

    const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
    const result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
    return handleResult(ctx, result);
  }

  /** Alias of safeParseAsync */
  spa = this.safeParseAsync;

  refine<RefinedOutput extends Output>(
    check: (arg: Output) => arg is RefinedOutput,
    message?: string | CustomErrorParams | ((arg: Output) => CustomErrorParams)
  ): ZodEffects<this, RefinedOutput, Input>;
  refine(
    check: (arg: Output) => unknown | Promise<unknown>,
    message?: string | CustomErrorParams | ((arg: Output) => CustomErrorParams)
  ): ZodEffects<this, Output, Input>;
  refine(
    check: (arg: Output) => unknown,
    message?: string | CustomErrorParams | ((arg: Output) => CustomErrorParams)
  ): ZodEffects<this, Output, Input> {
    const getIssueProperties = (val: Output) => {
      if (typeof message === "string" || typeof message === "undefined") {
        return { message };
      } else if (typeof message === "function") {
        return message(val);
      } else {
        return message;
      }
    };
    return this._refinement((val, ctx) => {
      const result = check(val);
      const setError = () =>
        ctx.addIssue({
          code: ZodIssueCode.custom,
          ...getIssueProperties(val),
        });
      if (typeof Promise !== "undefined" && result instanceof Promise) {
        return result.then((data) => {
          if (!data) {
            setError();
            return false;
          } else {
            return true;
          }
        });
      }
      if (!result) {
        setError();
        return false;
      } else {
        return true;
      }
    });
  }

  refinement<RefinedOutput extends Output>(
    check: (arg: Output) => arg is RefinedOutput,
    refinementData: IssueData | ((arg: Output, ctx: RefinementCtx) => IssueData)
  ): ZodEffects<this, RefinedOutput, Input>;
  refinement(
    check: (arg: Output) => boolean,
    refinementData: IssueData | ((arg: Output, ctx: RefinementCtx) => IssueData)
  ): ZodEffects<this, Output, Input>;
  refinement(
    check: (arg: Output) => unknown,
    refinementData: IssueData | ((arg: Output, ctx: RefinementCtx) => IssueData)
  ): ZodEffects<this, Output, Input> {
    return this._refinement((val, ctx) => {
      if (!check(val)) {
        ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
        return false;
      } else {
        return true;
      }
    });
  }

  _refinement(refinement: RefinementEffect<Output>["refinement"]): ZodEffects<this, Output, Input> {
    return new ZodEffects({
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "refinement", refinement },
    });
  }

  superRefine<RefinedOutput extends Output>(
    refinement: (arg: Output, ctx: RefinementCtx) => arg is RefinedOutput
  ): ZodEffects<this, RefinedOutput, Input>;
  superRefine(refinement: (arg: Output, ctx: RefinementCtx) => void): ZodEffects<this, Output, Input>;
  superRefine(refinement: (arg: Output, ctx: RefinementCtx) => Promise<void>): ZodEffects<this, Output, Input>;
  superRefine(
    refinement: (arg: Output, ctx: RefinementCtx) => unknown | Promise<unknown>
  ): ZodEffects<this, Output, Input> {
    return this._refinement(refinement);
  }

  constructor(def: Def) {
    this._def = def;
    this.parse = this.parse.bind(this);
    this.safeParse = this.safeParse.bind(this);
    this.parseAsync = this.parseAsync.bind(this);
    this.safeParseAsync = this.safeParseAsync.bind(this);
    this.spa = this.spa.bind(this);
    this.refine = this.refine.bind(this);
    this.refinement = this.refinement.bind(this);
    this.superRefine = this.superRefine.bind(this);
    this.optional = this.optional.bind(this);
    this.nullable = this.nullable.bind(this);
    this.nullish = this.nullish.bind(this);
    this.array = this.array.bind(this);
    this.promise = this.promise.bind(this);
    this.or = this.or.bind(this);
    this.and = this.and.bind(this);
    this.transform = this.transform.bind(this);
    this.brand = this.brand.bind(this);
    this.default = this.default.bind(this);
    this.catch = this.catch.bind(this);
    this.describe = this.describe.bind(this);
    this.pipe = this.pipe.bind(this);
    this.readonly = this.readonly.bind(this);
    this.isNullable = this.isNullable.bind(this);
    this.isOptional = this.isOptional.bind(this);
    this["~standard"] = {
      version: 1,
      vendor: "zod",
      validate: (data) => this["~validate"](data),
    };
  }

  optional(): ZodOptional<this> {
    return ZodOptional.create(this, this._def) as any;
  }
  nullable(): ZodNullable<this> {
    return ZodNullable.create(this, this._def) as any;
  }
  nullish(): ZodOptional<ZodNullable<this>> {
    return this.nullable().optional();
  }
  array(): ZodArray<this> {
    return ZodArray.create(this);
  }
  promise(): ZodPromise<this> {
    return ZodPromise.create(this, this._def);
  }

  or<T extends ZodTypeAny>(option: T): ZodUnion<[this, T]> {
    return ZodUnion.create([this, option], this._def) as any;
  }

  and<T extends ZodTypeAny>(incoming: T): ZodIntersection<this, T> {
    return ZodIntersection.create(this, incoming, this._def);
  }

  transform<NewOut>(
    transform: (arg: Output, ctx: RefinementCtx) => NewOut | Promise<NewOut>
  ): ZodEffects<this, NewOut> {
    return new ZodEffects({
      ...processCreateParams(this._def),
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "transform", transform },
    }) as any;
  }

  default(def: util.noUndefined<Input>): ZodDefault<this>;
  default(def: () => util.noUndefined<Input>): ZodDefault<this>;
  default(def: any) {
    const defaultValueFunc = typeof def === "function" ? def : () => def;

    return new ZodDefault({
      ...processCreateParams(this._def),
      innerType: this,
      defaultValue: defaultValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodDefault,
    }) as any;
  }

  brand<B extends string | number | symbol>(brand?: B): ZodBranded<this, B>;
  brand<B extends string | number | symbol>(): ZodBranded<this, B> {
    return new ZodBranded({
      typeName: ZodFirstPartyTypeKind.ZodBranded,
      type: this,
      ...processCreateParams(this._def),
    });
  }

  catch(def: Output): ZodCatch<this>;
  catch(def: (ctx: { error: ZodError; input: Input }) => Output): ZodCatch<this>;
  catch(def: any) {
    const catchValueFunc = typeof def === "function" ? def : () => def;

    return new ZodCatch({
      ...processCreateParams(this._def),
      innerType: this,
      catchValue: catchValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodCatch,
    }) as any;
  }

  describe(description: string): this {
    const This = (this as any).constructor;
    return new This({
      ...this._def,
      description,
    });
  }

  pipe<T extends ZodTypeAny>(target: T): ZodPipeline<this, T> {
    return ZodPipeline.create(this, target);
  }
  readonly(): ZodReadonly<this> {
    return ZodReadonly.create(this);
  }

  isOptional(): boolean {
    return this.safeParse(undefined).success;
  }
  isNullable(): boolean {
    return this.safeParse(null).success;
  }
}

/////////////////////////////////////////
/////////////////////////////////////////
//////////                     //////////
//////////      ZodString      //////////
//////////                     //////////
/////////////////////////////////////////
/////////////////////////////////////////
export type IpVersion = "v4" | "v6";
export type ZodStringCheck =
  | { kind: "min"; value: number; message?: string | undefined }
  | { kind: "max"; value: number; message?: string | undefined }
  | { kind: "length"; value: number; message?: string | undefined }
  | { kind: "email"; message?: string | undefined }
  | { kind: "url"; message?: string | undefined }
  | { kind: "emoji"; message?: string | undefined }
  | { kind: "uuid"; message?: string | undefined }
  | { kind: "nanoid"; message?: string | undefined }
  | { kind: "cuid"; message?: string | undefined }
  | { kind: "includes"; value: string; position?: number | undefined; message?: string | undefined }
  | { kind: "cuid2"; message?: string | undefined }
  | { kind: "ulid"; message?: string | undefined }
  | { kind: "startsWith"; value: string; message?: string | undefined }
  | { kind: "endsWith"; value: string; message?: string | undefined }
  | { kind: "regex"; regex: RegExp; message?: string | undefined }
  | { kind: "trim"; message?: string | undefined }
  | { kind: "toLowerCase"; message?: string | undefined }
  | { kind: "toUpperCase"; message?: string | undefined }
  | { kind: "jwt"; alg?: string; message?: string | undefined }
  | {
      kind: "datetime";
      offset: boolean;
      local: boolean;
      precision: number | null;
      message?: string | undefined;
    }
  | {
      kind: "date";
      // withDate: true;
      message?: string | undefined;
    }
  | {
      kind: "time";
      precision: number | null;
      message?: string | undefined;
    }
  | { kind: "duration"; message?: string | undefined }
  | { kind: "ip"; version?: IpVersion | undefined; message?: string | undefined }
  | { kind: "cidr"; version?: IpVersion | undefined; message?: string | undefined }
  | { kind: "base64"; message?: string | undefined }
  | { kind: "base64url"; message?: string | undefined };

export interface ZodStringDef extends ZodTypeDef {
  checks: ZodStringCheck[];
  typeName: ZodFirstPartyTypeKind.ZodString;
  coerce: boolean;
}

const cuidRegex = /^c[^\s-]{8,}$/i;
const cuid2Regex = /^[0-9a-z]+$/;
const ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
// const uuidRegex =
//   /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i;
const uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
const nanoidRegex = /^[a-z0-9_-]{21}$/i;
const jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
const durationRegex =
  /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;

// from https://stackoverflow.com/a/46181/1550155
// old version: too slow, didn't support unicode
// const emailRegex = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
//old email regex
// const emailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@((?!-)([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{1,})[^-<>()[\].,;:\s@"]$/i;
// eslint-disable-next-line
// const emailRegex =
//   /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\])|(\[IPv6:(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))\])|([A-Za-z0-9]([A-Za-z0-9-]*[A-Za-z0-9])*(\.[A-Za-z]{2,})+))$/;
// const emailRegex =
//   /^[a-zA-Z0-9\.\!\#\$\%\&\'\*\+\/\=\?\^\_\`\{\|\}\~\-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
// const emailRegex =
//   /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;
const emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
// const emailRegex =
//   /^[a-z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9\-]+)*$/i;

// from https://thekevinscott.com/emojis-in-javascript/#writing-a-regular-expression
const _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
let emojiRegex: RegExp;

// faster, simpler, safer
const ipv4Regex =
  /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
const ipv4CidrRegex =
  /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;

// const ipv6Regex =
// /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
const ipv6Regex =
  /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
const ipv6CidrRegex =
  /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;

// https://stackoverflow.com/questions/7860392/determine-if-string-is-in-base64-using-javascript
const base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;

// https://base64.guru/standards/base64url
const base64urlRegex = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;

// simple
// const dateRegexSource = `\\d{4}-\\d{2}-\\d{2}`;
// no leap year validation
// const dateRegexSource = `\\d{4}-((0[13578]|10|12)-31|(0[13-9]|1[0-2])-30|(0[1-9]|1[0-2])-(0[1-9]|1\\d|2\\d))`;
// with leap year validation
const dateRegexSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
const dateRegex = new RegExp(`^${dateRegexSource}$`);

function timeRegexSource(args: { precision?: number | null }) {
  let secondsRegexSource = `[0-5]\\d`;
  if (args.precision) {
    secondsRegexSource = `${secondsRegexSource}\\.\\d{${args.precision}}`;
  } else if (args.precision == null) {
    secondsRegexSource = `${secondsRegexSource}(\\.\\d+)?`;
  }

  const secondsQuantifier = args.precision ? "+" : "?"; // require seconds if precision is nonzero
  return `([01]\\d|2[0-3]):[0-5]\\d(:${secondsRegexSource})${secondsQuantifier}`;
}

function timeRegex(args: {
  offset?: boolean;
  local?: boolean;
  precision?: number | null;
}) {
  return new RegExp(`^${timeRegexSource(args)}$`);
}

// Adapted from https://stackoverflow.com/a/3143231
export function datetimeRegex(args: {
  precision?: number | null;
  offset?: boolean;
  local?: boolean;
}) {
  let regex = `${dateRegexSource}T${timeRegexSource(args)}`;

  const opts: string[] = [];
  opts.push(args.local ? `Z?` : `Z`);
  if (args.offset) opts.push(`([+-]\\d{2}:?\\d{2})`);
  regex = `${regex}(${opts.join("|")})`;
  return new RegExp(`^${regex}$`);
}

function isValidIP(ip: string, version?: IpVersion) {
  if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
    return true;
  }

  return false;
}

function isValidJWT(jwt: string, alg?: string): boolean {
  if (!jwtRegex.test(jwt)) return false;
  try {
    const [header] = jwt.split(".");
    if (!header) return false;
    // Convert base64url to base64
    const base64 = header
      .replace(/-/g, "+")
      .replace(/_/g, "/")
      .padEnd(header.length + ((4 - (header.length % 4)) % 4), "=");
    const decoded = JSON.parse(atob(base64));
    if (typeof decoded !== "object" || decoded === null) return false;
    if ("typ" in decoded && decoded?.typ !== "JWT") return false;
    if (!decoded.alg) return false;
    if (alg && decoded.alg !== alg) return false;
    return true;
  } catch {
    return false;
  }
}

function isValidCidr(ip: string, version?: IpVersion) {
  if ((version === "v4" || !version) && ipv4CidrRegex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6CidrRegex.test(ip)) {
    return true;
  }

  return false;
}

export class ZodString extends ZodType<string, ZodStringDef, string> {
  _parse(input: ParseInput): ParseReturnType<string> {
    if (this._def.coerce) {
      input.data = String(input.data);
    }
    const parsedType = this._getType(input);

    if (parsedType !== ZodParsedType.string) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.string,
        received: ctx.parsedType,
      });
      return INVALID;
    }

    const status = new ParseStatus();
    let ctx: undefined | ParseContext = undefined;

    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.length < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message,
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.length > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message,
          });
          status.dirty();
        }
      } else if (check.kind === "length") {
        const tooBig = input.data.length > check.value;
        const tooSmall = input.data.length < check.value;
        if (tooBig || tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          if (tooBig) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message,
            });
          } else if (tooSmall) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message,
            });
          }
          status.dirty();
        }
      } else if (check.kind === "email") {
        if (!emailRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "email",
            code: ZodIssueCode.invalid_string,
            message: check.message,
          });
          status.dirty();
        }
      } else if (check.kind === "emoji") {
        if (!emojiRegex) {
          emojiRegex = new RegExp(_emojiRegex, "u");
        }
        if (!emojiRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "emoji",
            code: ZodIssueCode.invalid_string,
            message: check.message,
          });
          status.dirty();
        }
      } else if (check.kind === "uuid") {
        if (!uuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "uuid",
            code: ZodIssueCode.invalid_string,
            message: check.message,
          });
          status.dirty();
        }
      } else if (check.kind === "nanoid") {
        if (!nanoidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "nanoid",
            code: ZodIssueCode.invalid_string,
            message: check.message,
          });
          status.dirty();
        }
      } else if (check.kind === "cuid") {
        if (!cuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid",
            code: ZodIssueCode.invalid_string,
            message: check.message,
          });
          status.dirty();
        }
      } else if (check.kind === "cuid2") {
        if (!cuid2Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid2",
            code: ZodIssueCode.invalid_string,
            message: check.message,
          });
          status.dirty();
        }
      } else if (check.kind === "ulid") {
        if (!ulidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ulid",
            code: ZodIssueCode.invalid_string,
            message: check.message,
          });
          status.dirty();
        }
      } else if (check.kind === "url") {
        try {
          new URL(input.data);
        } catch {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "url",
            code: ZodIssueCode.invalid_string,
            message: check.message,
          });
          status.dirty();
        }
      } else if (check.kind === "regex") {
        check.regex.lastIndex = 0;
        const testResult = check.regex.test(input.data);
        if (!testResult) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "regex",
            code: ZodIssueCode.invalid_string,
            message: check.message,
          });
          status.dirty();
        }
      } else if (check.kind === "trim") {
        input.data = input.data.trim();
      } else if (check.kind === "includes") {
        if (!(input.data as string).includes(check.value, check.position)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { includes: check.value, position: check.position },
            message: check.message,
          });
          status.dirty();
        }
      } else if (check.kind === "toLowerCase") {
        input.data = input.data.toLowerCase();
      } else if (check.kind === "toUpperCase") {
        input.data = input.data.toUpperCase();
      } else if (check.kind === "startsWith") {
        if (!(input.data as string).startsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { startsWith: check.value },
            message: check.message,
          });
          status.dirty();
        }
      } else if (check.kind === "endsWith") {
        if (!(input.data as string).endsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { endsWith: check.value },
            message: check.message,
          });
          status.dirty();
        }
      } else if (check.kind === "datetime") {
        const regex = datetimeRegex(check);

        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "datetime",
            message: check.message,
          });
          status.dirty();
        }
      } else if (check.kind === "date") {
        const regex = dateRegex;

        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "date",
            message: check.message,
          });
          status.dirty();
        }
      } else if (check.kind === "time") {
        const regex = timeRegex(check);

        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "time",
            message: check.message,
          });
          status.dirty();
        }
      } else if (check.kind === "duration") {
        if (!durationRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "duration",
            code: ZodIssueCode.invalid_string,
            message: check.message,
          });
          status.dirty();
        }
      } else if (check.kind === "ip") {
        if (!isValidIP(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ip",
            code: ZodIssueCode.invalid_string,
            message: check.message,
          });
          status.dirty();
        }
      } else if (check.kind === "jwt") {
        if (!isValidJWT(input.data, check.alg)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "jwt",
            code: ZodIssueCode.invalid_string,
            message: check.message,
          });
          status.dirty();
        }
      } else if (check.kind === "cidr") {
        if (!isValidCidr(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cidr",
            code: ZodIssueCode.invalid_string,
            message: check.message,
          });
          status.dirty();
        }
      } else if (check.kind === "base64") {
        if (!base64Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "base64",
            code: ZodIssueCode.invalid_string,
            message: check.message,
          });
          status.dirty();
        }
      } else if (check.kind === "base64url") {
        if (!base64urlRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "base64url",
            code: ZodIssueCode.invalid_string,
            message: check.message,
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }

    return { status: status.value, value: input.data };
  }

  protected _regex(regex: RegExp, validation: StringValidation, message?: errorUtil.ErrMessage) {
    return this.refinement((data) => regex.test(data), {
      validation,
      code: ZodIssueCode.invalid_string,
      ...errorUtil.errToObj(message),
    });
  }

  _addCheck(check: ZodStringCheck) {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, check],
    });
  }

  email(message?: errorUtil.ErrMessage) {
    return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
  }

  url(message?: errorUtil.ErrMessage) {
    return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
  }

  emoji(message?: errorUtil.ErrMessage) {
    return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
  }

  uuid(message?: errorUtil.ErrMessage) {
    return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
  }
  nanoid(message?: errorUtil.ErrMessage) {
    return this._addCheck({ kind: "nanoid", ...errorUtil.errToObj(message) });
  }
  cuid(message?: errorUtil.ErrMessage) {
    return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
  }

  cuid2(message?: errorUtil.ErrMessage) {
    return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
  }
  ulid(message?: errorUtil.ErrMessage) {
    return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
  }
  base64(message?: errorUtil.ErrMessage) {
    return this._addCheck({ kind: "base64", ...errorUtil.errToObj(message) });
  }
  base64url(message?: errorUtil.ErrMessage) {
    // base64url encoding is a modification of base64 that can safely be used in URLs and filenames
    return this._addCheck({
      kind: "base64url",
      ...errorUtil.errToObj(message),
    });
  }

  jwt(options?: { alg?: string; message?: string | undefined }) {
    return this._addCheck({ kind: "jwt", ...errorUtil.errToObj(options) });
  }

  ip(options?: string | { version?: IpVersion; message?: string | undefined }) {
    return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
  }

  cidr(options?: string | { version?: IpVersion; message?: string | undefined }) {
    return this._addCheck({ kind: "cidr", ...errorUtil.errToObj(options) });
  }

  datetime(
    options?:
      | string
      | {
          message?: string | undefined;
          precision?: number | null;
          offset?: boolean;
          local?: boolean;
        }
  ) {
    if (typeof options === "string") {
      return this._addCheck({
        kind: "datetime",
        precision: null,
        offset: false,
        local: false,
        message: options,
      });
    }
    return this._addCheck({
      kind: "datetime",

      precision: typeof options?.precision === "undefined" ? null : options?.precision,
      offset: options?.offset ?? false,
      local: options?.local ?? false,
      ...errorUtil.errToObj(options?.message),
    });
  }

  date(message?: string) {
    return this._addCheck({ kind: "date", message });
  }

  time(
    options?:
      | string
      | {
          message?: string | undefined;
          precision?: number | null;
        }
  ) {
    if (typeof options === "string") {
      return this._addCheck({
        kind: "time",
        precision: null,
        message: options,
      });
    }
    return this._addCheck({
      kind: "time",
      precision: typeof options?.precision === "undefined" ? null : options?.precision,
      ...errorUtil.errToObj(options?.message),
    });
  }

  duration(message?: errorUtil.ErrMessage) {
    return this._addCheck({ kind: "duration", ...errorUtil.errToObj(message) });
  }

  regex(regex: RegExp, message?: errorUtil.ErrMessage) {
    return this._addCheck({
      kind: "regex",
      regex: regex,
      ...errorUtil.errToObj(message),
    });
  }

  includes(value: string, options?: { message?: string; position?: number }) {
    return this._addCheck({
      kind: "includes",
      value: value,
      position: options?.position,
      ...errorUtil.errToObj(options?.message),
    });
  }

  startsWith(value: string, message?: errorUtil.ErrMessage) {
    return this._addCheck({
      kind: "startsWith",
      value: value,
      ...errorUtil.errToObj(message),
    });
  }

  endsWith(value: string, message?: errorUtil.ErrMessage) {
    return this._addCheck({
      kind: "endsWith",
      value: value,
      ...errorUtil.errToObj(message),
    });
  }

  min(minLength: number, message?: errorUtil.ErrMessage) {
    return this._addCheck({
      kind: "min",
      value: minLength,
      ...errorUtil.errToObj(message),
    });
  }

  max(maxLength: number, message?: errorUtil.ErrMessage) {
    return this._addCheck({
      kind: "max",
      value: maxLength,
      ...errorUtil.errToObj(message),
    });
  }

  length(len: number, message?: errorUtil.ErrMessage) {
    return this._addCheck({
      kind: "length",
      value: len,
      ...errorUtil.errToObj(message),
    });
  }

  /**
   * Equivalent to `.min(1)`
   */
  nonempty(message?: errorUtil.ErrMessage) {
    return this.min(1, errorUtil.errToObj(message));
  }

  trim() {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }],
    });
  }

  toLowerCase() {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }],
    });
  }

  toUpperCase() {
    return new ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }],
    });
  }

  get isDatetime() {
    return !!this._def.checks.find((ch) => ch.kind === "datetime");
  }

  get isDate() {
    return !!this._def.checks.find((ch) => ch.kind === "date");
  }

  get isTime() {
    return !!this._def.checks.find((ch) => ch.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((ch) => ch.kind === "duration");
  }

  get isEmail() {
    return !!this._def.checks.find((ch) => ch.kind === "email");
  }

  get isURL() {
    return !!this._def.checks.find((ch) => ch.kind === "url");
  }

  get isEmoji() {
    return !!this._def.checks.find((ch) => ch.kind === "emoji");
  }

  get isUUID() {
    return !!this._def.checks.find((ch) => ch.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((ch) => ch.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid");
  }

  get isCUID2() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((ch) => ch.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((ch) => ch.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((ch) => ch.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((ch) => ch.kind === "base64");
  }
  get isBase64url() {
    // base64url encoding is a modification of base64 that can safely be used in URLs and filenames
    return !!this._def.checks.find((ch) => ch.kind === "base64url");
  }

  get minLength() {
    let min: number | null = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min) min = ch.value;
      }
    }
    return min;
  }

  get maxLength() {
    let max: number | null = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max) max = ch.value;
      }
    }
    return max;
  }

  static create = (params?: RawCreateParams & { coerce?: true }): ZodString => {
    return new ZodString({
      checks: [],
      typeName: ZodFirstPartyTypeKind.ZodString,
      coerce: params?.coerce ?? false,
      ...processCreateParams(params),
    });
  };
}

/////////////////////////////////////////
/////////////////////////////////////////
//////////                     //////////
//////////      ZodNumber      //////////
//////////                     //////////
/////////////////////////////////////////
/////////////////////////////////////////
export type ZodNumberCheck =
  | { kind: "min"; value: number; inclusive: boolean; message?: string | undefined }
  | { kind: "max"; value: number; inclusive: boolean; message?: string | undefined }
  | { kind: "int"; message?: string | undefined }
  | { kind: "multipleOf"; value: number; message?: string | undefined }
  | { kind: "finite"; message?: string | undefined };

// https://stackoverflow.com/questions/3966484/why-does-modulus-operator-return-fractional-number-in-javascript/31711034#31711034
function floatSafeRemainder(val: number, step: number) {
  const valDecCount = (val.toString().split(".")[1] || "").length;
  const stepDecCount = (step.toString().split(".")[1] || "").length;
  const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
  const valInt = Number.parseInt(val.toFixed(decCount).replace(".", ""));
  const stepInt = Number.parseInt(step.toFixed(decCount).replace(".", ""));
  return (valInt % stepInt) / 10 ** decCount;
}

export interface ZodNumberDef extends ZodTypeDef {
  checks: ZodNumberCheck[];
  typeName: ZodFirstPartyTypeKind.ZodNumber;
  coerce: boolean;
}

export class ZodNumber extends ZodType<number, ZodNumberDef, number> {
  _parse(input: ParseInput): ParseReturnType<number> {
    if (this._def.coerce) {
      input.data = Number(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.number) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.number,
        received: ctx.parsedType,
      });
      return INVALID;
    }

    let ctx: undefined | ParseContext = undefined;
    const status = new ParseStatus();

    for (const check of this._def.checks) {
      if (check.kind === "int") {
        if (!util.isInteger(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: "integer",
            received: "float",
            message: check.message,
          });
          status.dirty();
        }
      } else if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message,
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message,
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (floatSafeRemainder(input.data, check.value) !== 0) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message,
          });
          status.dirty();
        }
      } else if (check.kind === "finite") {
        if (!Number.isFinite(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_finite,
            message: check.message,
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }

    return { status: status.value, value: input.data };
  }

  static create = (params?: RawCreateParams & { coerce?: boolean }): ZodNumber => {
    return new ZodNumber({
      checks: [],
      typeName: ZodFirstPartyTypeKind.ZodNumber,
      coerce: params?.coerce || false,
      ...processCreateParams(params),
    });
  };

  gte(value: number, message?: errorUtil.ErrMessage) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  min = this.gte;

  gt(value: number, message?: errorUtil.ErrMessage) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }

  lte(value: number, message?: errorUtil.ErrMessage) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  max = this.lte;

  lt(value: number, message?: errorUtil.ErrMessage) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }

  protected setLimit(kind: "min" | "max", value: number, inclusive: boolean, message?: string) {
    return new ZodNumber({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message),
        },
      ],
    });
  }

  _addCheck(check: ZodNumberCheck) {
    return new ZodNumber({
      ...this._def,
      checks: [...this._def.checks, check],
    });
  }

  int(message?: errorUtil.ErrMessage) {
    return this._addCheck({
      kind: "int",
      message: errorUtil.toString(message),
    });
  }

  positive(message?: errorUtil.ErrMessage) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message),
    });
  }

  negative(message?: errorUtil.ErrMessage) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message),
    });
  }

  nonpositive(message?: errorUtil.ErrMessage) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message),
    });
  }

  nonnegative(message?: errorUtil.ErrMessage) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message),
    });
  }

  multipleOf(value: number, message?: errorUtil.ErrMessage) {
    return this._addCheck({
      kind: "multipleOf",
      value: value,
      message: errorUtil.toString(message),
    });
  }
  step = this.multipleOf;

  finite(message?: errorUtil.ErrMessage) {
    return this._addCheck({
      kind: "finite",
      message: errorUtil.toString(message),
    });
  }

  safe(message?: errorUtil.ErrMessage) {
    return this._addCheck({
      kind: "min",
      inclusive: true,
      value: Number.MIN_SAFE_INTEGER,
      message: errorUtil.toString(message),
    })._addCheck({
      kind: "max",
      inclusive: true,
      value: Number.MAX_SAFE_INTEGER,
      message: errorUtil.toString(message),
    });
  }

  get minValue() {
    let min: number | null = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min) min = ch.value;
      }
    }
    return min;
  }

  get maxValue() {
    let max: number | null = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max) max = ch.value;
      }
    }
    return max;
  }

  get isInt() {
    return !!this._def.checks.find((ch) => ch.kind === "int" || (ch.kind === "multipleOf" && util.isInteger(ch.value)));
  }

  get isFinite() {
    let max: number | null = null;
    let min: number | null = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
        return true;
      } else if (ch.kind === "min") {
        if (min === null || ch.value > min) min = ch.value;
      } else if (ch.kind === "max") {
        if (max === null || ch.value < max) max = ch.value;
      }
    }
    return Number.isFinite(min) && Number.isFinite(max);
  }
}

/////////////////////////////////////////
/////////////////////////////////////////
//////////                     //////////
//////////      ZodBigInt      //////////
//////////                     //////////
/////////////////////////////////////////
/////////////////////////////////////////
export type ZodBigIntCheck =
  | { kind: "min"; value: bigint; inclusive: boolean; message?: string | undefined }
  | { kind: "max"; value: bigint; inclusive: boolean; message?: string | undefined }
  | { kind: "multipleOf"; value: bigint; message?: string | undefined };

export interface ZodBigIntDef extends ZodTypeDef {
  checks: ZodBigIntCheck[];
  typeName: ZodFirstPartyTypeKind.ZodBigInt;
  coerce: boolean;
}

export class ZodBigInt extends ZodType<bigint, ZodBigIntDef, bigint> {
  _parse(input: ParseInput): ParseReturnType<bigint> {
    if (this._def.coerce) {
      try {
        input.data = BigInt(input.data);
      } catch {
        return this._getInvalidInput(input);
      }
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.bigint) {
      return this._getInvalidInput(input);
    }

    let ctx: undefined | ParseContext = undefined;
    const status = new ParseStatus();

    for (const check of this._def.checks) {
      if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            type: "bigint",
            minimum: check.value,
            inclusive: check.inclusive,
            message: check.message,
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            type: "bigint",
            maximum: check.value,
            inclusive: check.inclusive,
            message: check.message,
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (input.data % check.value !== BigInt(0)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message,
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }

    return { status: status.value, value: input.data };
  }

  _getInvalidInput(input: ParseInput) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.bigint,
      received: ctx.parsedType,
    });
    return INVALID;
  }

  static create = (params?: RawCreateParams & { coerce?: boolean }): ZodBigInt => {
    return new ZodBigInt({
      checks: [],
      typeName: ZodFirstPartyTypeKind.ZodBigInt,
      coerce: params?.coerce ?? false,
      ...processCreateParams(params),
    });
  };

  gte(value: bigint, message?: errorUtil.ErrMessage) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  min = this.gte;

  gt(value: bigint, message?: errorUtil.ErrMessage) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }

  lte(value: bigint, message?: errorUtil.ErrMessage) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  max = this.lte;

  lt(value: bigint, message?: errorUtil.ErrMessage) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }

  protected setLimit(kind: "min" | "max", value: bigint, inclusive: boolean, message?: string) {
    return new ZodBigInt({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message),
        },
      ],
    });
  }

  _addCheck(check: ZodBigIntCheck) {
    return new ZodBigInt({
      ...this._def,
      checks: [...this._def.checks, check],
    });
  }

  positive(message?: errorUtil.ErrMessage) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message),
    });
  }

  negative(message?: errorUtil.ErrMessage) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message),
    });
  }

  nonpositive(message?: errorUtil.ErrMessage) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message),
    });
  }

  nonnegative(message?: errorUtil.ErrMessage) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message),
    });
  }

  multipleOf(value: bigint, message?: errorUtil.ErrMessage) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message),
    });
  }

  get minValue() {
    let min: bigint | null = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min) min = ch.value;
      }
    }
    return min;
  }

  get maxValue() {
    let max: bigint | null = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max) max = ch.value;
      }
    }
    return max;
  }
}

//////////////////////////////////////////
//////////////////////////////////////////
//////////                     ///////////
//////////      ZodBoolean      //////////
//////////                     ///////////
//////////////////////////////////////////
//////////////////////////////////////////
export interface ZodBooleanDef extends ZodTypeDef {
  typeName: ZodFirstPartyTypeKind.ZodBoolean;
  coerce: boolean;
}

export class ZodBoolean extends ZodType<boolean, ZodBooleanDef, boolean> {
  _parse(input: ParseInput): ParseReturnType<boolean> {
    if (this._def.coerce) {
      input.data = Boolean(input.data);
    }
    const parsedType = this._getType(input);

    if (parsedType !== ZodParsedType.boolean) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.boolean,
        received: ctx.parsedType,
      });
      return INVALID;
    }
    return OK(input.data);
  }

  static create = (params?: RawCreateParams & { coerce?: boolean }): ZodBoolean => {
    return new ZodBoolean({
      typeName: ZodFirstPartyTypeKind.ZodBoolean,
      coerce: params?.coerce || false,
      ...processCreateParams(params),
    });
  };
}

///////////////////////////////////////
///////////////////////////////////////
//////////                     ////////
//////////      ZodDate        ////////
//////////                     ////////
///////////////////////////////////////
///////////////////////////////////////
export type ZodDateCheck =
  | { kind: "min"; value: number; message?: string | undefined }
  | { kind: "max"; value: number; message?: string | undefined };
export interface ZodDateDef extends ZodTypeDef {
  checks: ZodDateCheck[];
  coerce: boolean;
  typeName: ZodFirstPartyTypeKind.ZodDate;
}

export class ZodDate extends ZodType<Date, ZodDateDef, Date> {
  _parse(input: ParseInput): ParseReturnType<this["_output"]> {
    if (this._def.coerce) {
      input.data = new Date(input.data);
    }
    const parsedType = this._getType(input);

    if (parsedType !== ZodParsedType.date) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.date,
        received: ctx.parsedType,
      });
      return INVALID;
    }

    if (Number.isNaN(input.data.getTime())) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_date,
      });
      return INVALID;
    }

    const status = new ParseStatus();
    let ctx: undefined | ParseContext = undefined;

    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.getTime() < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            message: check.message,
            inclusive: true,
            exact: false,
            minimum: check.value,
            type: "date",
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.getTime() > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            message: check.message,
            inclusive: true,
            exact: false,
            maximum: check.value,
            type: "date",
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }

    return {
      status: status.value,
      value: new Date((input.data as Date).getTime()),
    };
  }

  _addCheck(check: ZodDateCheck) {
    return new ZodDate({
      ...this._def,
      checks: [...this._def.checks, check],
    });
  }

  min(minDate: Date, message?: errorUtil.ErrMessage) {
    return this._addCheck({
      kind: "min",
      value: minDate.getTime(),
      message: errorUtil.toString(message),
    });
  }

  max(maxDate: Date, message?: errorUtil.ErrMessage) {
    return this._addCheck({
      kind: "max",
      value: maxDate.getTime(),
      message: errorUtil.toString(message),
    });
  }

  get minDate() {
    let min: number | null = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min) min = ch.value;
      }
    }

    return min != null ? new Date(min) : null;
  }

  get maxDate() {
    let max: number | null = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max) max = ch.value;
      }
    }

    return max != null ? new Date(max) : null;
  }

  static create = (params?: RawCreateParams & { coerce?: boolean }): ZodDate => {
    return new ZodDate({
      checks: [],
      coerce: params?.coerce || false,
      typeName: ZodFirstPartyTypeKind.ZodDate,
      ...processCreateParams(params),
    });
  };
}

////////////////////////////////////////////
////////////////////////////////////////////
//////////                        //////////
//////////       ZodSymbol        //////////
//////////                        //////////
////////////////////////////////////////////
////////////////////////////////////////////
export interface ZodSymbolDef extends ZodTypeDef {
  typeName: ZodFirstPartyTypeKind.ZodSymbol;
}

export class ZodSymbol extends ZodType<symbol, ZodSymbolDef, symbol> {
  _parse(input: ParseInput): ParseReturnType<this["_output"]> {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.symbol) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.symbol,
        received: ctx.parsedType,
      });
      return INVALID;
    }

    return OK(input.data);
  }

  static create = (params?: RawCreateParams): ZodSymbol => {
    return new ZodSymbol({
      typeName: ZodFirstPartyTypeKind.ZodSymbol,
      ...processCreateParams(params),
    });
  };
}

////////////////////////////////////////////
////////////////////////////////////////////
//////////                        //////////
//////////      ZodUndefined      //////////
//////////                        //////////
////////////////////////////////////////////
////////////////////////////////////////////
export interface ZodUndefinedDef extends ZodTypeDef {
  typeName: ZodFirstPartyTypeKind.ZodUndefined;
}

export class ZodUndefined extends ZodType<undefined, ZodUndefinedDef, undefined> {
  _parse(input: ParseInput): ParseReturnType<this["_output"]> {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.undefined,
        received: ctx.parsedType,
      });
      return INVALID;
    }
    return OK(input.data);
  }
  params?: RawCreateParams;

  static create = (params?: RawCreateParams): ZodUndefined => {
    return new ZodUndefined({
      typeName: ZodFirstPartyTypeKind.ZodUndefined,
      ...processCreateParams(params),
    });
  };
}

///////////////////////////////////////
///////////////////////////////////////
//////////                   //////////
//////////      ZodNull      //////////
//////////                   //////////
///////////////////////////////////////
///////////////////////////////////////
export interface ZodNullDef extends ZodTypeDef {
  typeName: ZodFirstPartyTypeKind.ZodNull;
}

export class ZodNull extends ZodType<null, ZodNullDef, null> {
  _parse(input: ParseInput): ParseReturnType<this["_output"]> {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.null) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.null,
        received: ctx.parsedType,
      });
      return INVALID;
    }
    return OK(input.data);
  }
  static create = (params?: RawCreateParams): ZodNull => {
    return new ZodNull({
      typeName: ZodFirstPartyTypeKind.ZodNull,
      ...processCreateParams(params),
    });
  };
}

//////////////////////////////////////
//////////////////////////////////////
//////////                  //////////
//////////      ZodAny      //////////
//////////                  //////////
//////////////////////////////////////
//////////////////////////////////////
export interface ZodAnyDef extends ZodTypeDef {
  typeName: ZodFirstPartyTypeKind.ZodAny;
}

export class ZodAny extends ZodType<any, ZodAnyDef, any> {
  // to prevent instances of other classes from extending ZodAny. this causes issues with catchall in ZodObject.
  _any = true as const;
  _parse(input: ParseInput): ParseReturnType<this["_output"]> {
    return OK(input.data);
  }
  static create = (params?: RawCreateParams): ZodAny => {
    return new ZodAny({
      typeName: ZodFirstPartyTypeKind.ZodAny,
      ...processCreateParams(params),
    });
  };
}

//////////////////////////////////////////
//////////////////////////////////////////
//////////                      //////////
//////////      ZodUnknown      //////////
//////////                      //////////
//////////////////////////////////////////
//////////////////////////////////////////
export interface ZodUnknownDef extends ZodTypeDef {
  typeName: ZodFirstPartyTypeKind.ZodUnknown;
}

export class ZodUnknown extends ZodType<unknown, ZodUnknownDef, unknown> {
  // required
  _unknown = true as const;
  _parse(input: ParseInput): ParseReturnType<this["_output"]> {
    return OK(input.data);
  }

  static create = (params?: RawCreateParams): ZodUnknown => {
    return new ZodUnknown({
      typeName: ZodFirstPartyTypeKind.ZodUnknown,
      ...processCreateParams(params),
    });
  };
}

////////////////////////////////////////
////////////////////////////////////////
//////////                    //////////
//////////      ZodNever      //////////
//////////                    //////////
////////////////////////////////////////
////////////////////////////////////////
export interface ZodNeverDef extends ZodTypeDef {
  typeName: ZodFirstPartyTypeKind.ZodNever;
}

export class ZodNever extends ZodType<never, ZodNeverDef, never> {
  _parse(input: ParseInput): ParseReturnType<this["_output"]> {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.never,
      received: ctx.parsedType,
    });
    return INVALID;
  }
  static create = (params?: RawCreateParams): ZodNever => {
    return new ZodNever({
      typeName: ZodFirstPartyTypeKind.ZodNever,
      ...processCreateParams(params),
    });
  };
}

///////////////////////////////////////
///////////////////////////////////////
//////////                   //////////
//////////      ZodVoid      //////////
//////////                   //////////
///////////////////////////////////////
///////////////////////////////////////
export interface ZodVoidDef extends ZodTypeDef {
  typeName: ZodFirstPartyTypeKind.ZodVoid;
}

export class ZodVoid extends ZodType<void, ZodVoidDef, void> {
  _parse(input: ParseInput): ParseReturnType<this["_output"]> {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.void,
        received: ctx.parsedType,
      });
      return INVALID;
    }
    return OK(input.data);
  }

  static create = (params?: RawCreateParams): ZodVoid => {
    return new ZodVoid({
      typeName: ZodFirstPartyTypeKind.ZodVoid,
      ...processCreateParams(params),
    });
  };
}

////////////////////////////////////////
////////////////////////////////////////
//////////                    //////////
//////////      ZodArray      //////////
//////////                    //////////
////////////////////////////////////////
////////////////////////////////////////
export interface ZodArrayDef<T extends ZodTypeAny = ZodTypeAny> extends ZodTypeDef {
  type: T;
  typeName: ZodFirstPartyTypeKind.ZodArray;
  exactLength: { value: number; message?: string | undefined } | null;
  minLength: { value: number; message?: string | undefined } | null;
  maxLength: { value: number; message?: string | undefined } | null;
}

export type ArrayCardinality = "many" | "atleastone";
export type arrayOutputType<
  T extends ZodTypeAny,
  Cardinality extends ArrayCardinality = "many",
> = Cardinality extends "atleastone" ? [T["_output"], ...T["_output"][]] : T["_output"][];

export class ZodArray<T extends ZodTypeAny, Cardinality extends ArrayCardinality = "many"> extends ZodType<
  arrayOutputType<T, Cardinality>,
  ZodArrayDef<T>,
  Cardinality extends "atleastone" ? [T["_input"], ...T["_input"][]] : T["_input"][]
> {
  _parse(input: ParseInput): ParseReturnType<this["_output"]> {
    const { ctx, status } = this._processInputParams(input);

    const def = this._def;

    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType,
      });
      return INVALID;
    }

    if (def.exactLength !== null) {
      const tooBig = ctx.data.length > def.exactLength.value;
      const tooSmall = ctx.data.length < def.exactLength.value;
      if (tooBig || tooSmall) {
        addIssueToContext(ctx, {
          code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
          minimum: (tooSmall ? def.exactLength.value : undefined) as number,
          maximum: (tooBig ? def.exactLength.value : undefined) as number,
          type: "array",
          inclusive: true,
          exact: true,
          message: def.exactLength.message,
        });
        status.dirty();
      }
    }

    if (def.minLength !== null) {
      if (ctx.data.length < def.minLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.minLength.message,
        });
        status.dirty();
      }
    }

    if (def.maxLength !== null) {
      if (ctx.data.length > def.maxLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.maxLength.message,
        });
        status.dirty();
      }
    }

    if (ctx.common.async) {
      return Promise.all(
        ([...ctx.data] as any[]).map((item, i) => {
          return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
        })
      ).then((result) => {
        return ParseStatus.mergeArray(status, result);
      });
    }

    const result = ([...ctx.data] as any[]).map((item, i) => {
      return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
    });

    return ParseStatus.mergeArray(status, result);
  }

  get element() {
    return this._def.type;
  }

  min(minLength: number, message?: errorUtil.ErrMessage): this {
    return new ZodArray({
      ...this._def,
      minLength: { value: minLength, message: errorUtil.toString(message) },
    }) as any;
  }

  max(maxLength: number, message?: errorUtil.ErrMessage): this {
    return new ZodArray({
      ...this._def,
      maxLength: { value: maxLength, message: errorUtil.toString(message) },
    }) as any;
  }

  length(len: number, message?: errorUtil.ErrMessage): this {
    return new ZodArray({
      ...this._def,
      exactLength: { value: len, message: errorUtil.toString(message) },
    }) as any;
  }

  nonempty(message?: errorUtil.ErrMessage): ZodArray<T, "atleastone"> {
    return this.min(1, message) as any;
  }

  static create = <El extends ZodTypeAny>(schema: El, params?: RawCreateParams): ZodArray<El> => {
    return new ZodArray({
      type: schema,
      minLength: null,
      maxLength: null,
      exactLength: null,
      typeName: ZodFirstPartyTypeKind.ZodArray,
      ...processCreateParams(params),
    });
  };
}

export type ZodNonEmptyArray<T extends ZodTypeAny> = ZodArray<T, "atleastone">;

/////////////////////////////////////////
/////////////////////////////////////////
//////////                     //////////
//////////      ZodObject      //////////
//////////                     //////////
/////////////////////////////////////////
/////////////////////////////////////////

export type UnknownKeysParam = "passthrough" | "strict" | "strip";

export interface ZodObjectDef<
  T extends ZodRawShape = ZodRawShape,
  UnknownKeys extends UnknownKeysParam = UnknownKeysParam,
  Catchall extends ZodTypeAny = ZodTypeAny,
> extends ZodTypeDef {
  typeName: ZodFirstPartyTypeKind.ZodObject;
  shape: () => T;
  catchall: Catchall;
  unknownKeys: UnknownKeys;
}

export type mergeTypes<A, B> = {
  [k in keyof A | keyof B]: k extends keyof B ? B[k] : k extends keyof A ? A[k] : never;
};

export type objectOutputType<
  Shape extends ZodRawShape,
  Catchall extends ZodTypeAny,
  UnknownKeys extends UnknownKeysParam = UnknownKeysParam,
> = objectUtil.flatten<objectUtil.addQuestionMarks<baseObjectOutputType<Shape>>> &
  CatchallOutput<Catchall> &
  PassthroughType<UnknownKeys>;

export type baseObjectOutputType<Shape extends ZodRawShape> = {
  [k in keyof Shape]: Shape[k]["_output"];
};

export type objectInputType<
  Shape extends ZodRawShape,
  Catchall extends ZodTypeAny,
  UnknownKeys extends UnknownKeysParam = UnknownKeysParam,
> = objectUtil.flatten<baseObjectInputType<Shape>> & CatchallInput<Catchall> & PassthroughType<UnknownKeys>;
export type baseObjectInputType<Shape extends ZodRawShape> = objectUtil.addQuestionMarks<{
  [k in keyof Shape]: Shape[k]["_input"];
}>;

export type CatchallOutput<T extends ZodType> = ZodType extends T ? unknown : { [k: string]: T["_output"] };

export type CatchallInput<T extends ZodType> = ZodType extends T ? unknown : { [k: string]: T["_input"] };

export type PassthroughType<T extends UnknownKeysParam> = T extends "passthrough" ? { [k: string]: unknown } : unknown;

export type deoptional<T extends ZodTypeAny> = T extends ZodOptional<infer U>
  ? deoptional<U>
  : T extends ZodNullable<infer U>
    ? ZodNullable<deoptional<U>>
    : T;

export type SomeZodObject = ZodObject<ZodRawShape, UnknownKeysParam, ZodTypeAny>;

export type noUnrecognized<Obj extends object, Shape extends object> = {
  [k in keyof Obj]: k extends keyof Shape ? Obj[k] : never;
};

function deepPartialify(schema: ZodTypeAny): any {
  if (schema instanceof ZodObject) {
    const newShape: any = {};

    for (const key in schema.shape) {
      const fieldSchema = schema.shape[key];
      newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
    }
    return new ZodObject({
      ...schema._def,
      shape: () => newShape,
    }) as any;
  } else if (schema instanceof ZodArray) {
    return new ZodArray({
      ...schema._def,
      type: deepPartialify(schema.element),
    });
  } else if (schema instanceof ZodOptional) {
    return ZodOptional.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodNullable) {
    return ZodNullable.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodTuple) {
    return ZodTuple.create(schema.items.map((item: any) => deepPartialify(item)));
  } else {
    return schema;
  }
}

export class ZodObject<
  T extends ZodRawShape,
  UnknownKeys extends UnknownKeysParam = UnknownKeysParam,
  Catchall extends ZodTypeAny = ZodTypeAny,
  Output = objectOutputType<T, Catchall, UnknownKeys>,
  Input = objectInputType<T, Catchall, UnknownKeys>,
> extends ZodType<Output, ZodObjectDef<T, UnknownKeys, Catchall>, Input> {
  private _cached: { shape: T; keys: string[] } | null = null;

  _getCached(): { shape: T; keys: string[] } {
    if (this._cached !== null) return this._cached;
    const shape = this._def.shape();
    const keys = util.objectKeys(shape);
    this._cached = { shape, keys };
    return this._cached;
  }

  _parse(input: ParseInput): ParseReturnType<this["_output"]> {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.object) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType,
      });
      return INVALID;
    }

    const { status, ctx } = this._processInputParams(input);

    const { shape, keys: shapeKeys } = this._getCached();
    const extraKeys: string[] = [];

    if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
      for (const key in ctx.data) {
        if (!shapeKeys.includes(key)) {
          extraKeys.push(key);
        }
      }
    }

    const pairs: {
      key: ParseReturnType<any>;
      value: ParseReturnType<any>;
      alwaysSet?: boolean;
    }[] = [];
    for (const key of shapeKeys) {
      const keyValidator = shape[key]!;
      const value = ctx.data[key];
      pairs.push({
        key: { status: "valid", value: key },
        value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
        alwaysSet: key in ctx.data,
      });
    }

    if (this._def.catchall instanceof ZodNever) {
      const unknownKeys = this._def.unknownKeys;

      if (unknownKeys === "passthrough") {
        for (const key of extraKeys) {
          pairs.push({
            key: { status: "valid", value: key },
            value: { status: "valid", value: ctx.data[key] },
          });
        }
      } else if (unknownKeys === "strict") {
        if (extraKeys.length > 0) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.unrecognized_keys,
            keys: extraKeys,
          });
          status.dirty();
        }
      } else if (unknownKeys === "strip") {
      } else {
        throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
      }
    } else {
      // run catchall validation
      const catchall = this._def.catchall;

      for (const key of extraKeys) {
        const value = ctx.data[key];
        pairs.push({
          key: { status: "valid", value: key },
          value: catchall._parse(
            new ParseInputLazyPath(ctx, value, ctx.path, key) //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: key in ctx.data,
        });
      }
    }

    if (ctx.common.async) {
      return Promise.resolve()
        .then(async () => {
          const syncPairs: any[] = [];
          for (const pair of pairs) {
            const key = await pair.key;
            const value = await pair.value;
            syncPairs.push({
              key,
              value,
              alwaysSet: pair.alwaysSet,
            });
          }
          return syncPairs;
        })
        .then((syncPairs) => {
          return ParseStatus.mergeObjectSync(status, syncPairs);
        });
    } else {
      return ParseStatus.mergeObjectSync(status, pairs as any);
    }
  }

  get shape() {
    return this._def.shape();
  }

  strict(message?: errorUtil.ErrMessage): ZodObject<T, "strict", Catchall> {
    errorUtil.errToObj;
    return new ZodObject({
      ...this._def,
      unknownKeys: "strict",
      ...(message !== undefined
        ? {
            errorMap: (issue, ctx) => {
              const defaultError = this._def.errorMap?.(issue, ctx).message ?? ctx.defaultError;
              if (issue.code === "unrecognized_keys")
                return {
                  message: errorUtil.errToObj(message).message ?? defaultError,
                };
              return {
                message: defaultError,
              };
            },
          }
        : {}),
    }) as any;
  }

  strip(): ZodObject<T, "strip", Catchall> {
    return new ZodObject({
      ...this._def,
      unknownKeys: "strip",
    }) as any;
  }

  passthrough(): ZodObject<T, "passthrough", Catchall> {
    return new ZodObject({
      ...this._def,
      unknownKeys: "passthrough",
    }) as any;
  }

  /**
   * @deprecated In most cases, this is no longer needed - unknown properties are now silently stripped.
   * If you want to pass through unknown properties, use `.passthrough()` instead.
   */
  nonstrict = this.passthrough;

  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend<Augmentation extends ZodRawShape>(
    augmentation: Augmentation
  ): ZodObject<objectUtil.extendShape<T, Augmentation>, UnknownKeys, Catchall> {
    return new ZodObject({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...augmentation,
      }),
    }) as any;
  }
  // extend<
  //   Augmentation extends ZodRawShape,
  //   NewOutput extends util.flatten<{
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   }>,
  //   NewInput extends util.flatten<{
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }>
  // >(
  //   augmentation: Augmentation
  // ): ZodObject<
  //   extendShape<T, Augmentation>,
  //   UnknownKeys,
  //   Catchall,
  //   NewOutput,
  //   NewInput
  // > {
  //   return new ZodObject({
  //     ...this._def,
  //     shape: () => ({
  //       ...this._def.shape(),
  //       ...augmentation,
  //     }),
  //   }) as any;
  // }
  /**
   * @deprecated Use `.extend` instead
   *  */
  augment = this.extend;

  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge<Incoming extends AnyZodObject, Augmentation extends Incoming["shape"]>(
    merging: Incoming
  ): ZodObject<objectUtil.extendShape<T, Augmentation>, Incoming["_def"]["unknownKeys"], Incoming["_def"]["catchall"]> {
    const merged: any = new ZodObject({
      unknownKeys: merging._def.unknownKeys,
      catchall: merging._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...merging._def.shape(),
      }),
      typeName: ZodFirstPartyTypeKind.ZodObject,
    }) as any;
    return merged;
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }

  setKey<Key extends string, Schema extends ZodTypeAny>(
    key: Key,
    schema: Schema
  ): ZodObject<T & { [k in Key]: Schema }, UnknownKeys, Catchall> {
    return this.augment({ [key]: schema }) as any;
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }

  catchall<Index extends ZodTypeAny>(index: Index): ZodObject<T, UnknownKeys, Index> {
    return new ZodObject({
      ...this._def,
      catchall: index,
    }) as any;
  }

  pick<Mask extends util.Exactly<{ [k in keyof T]?: true }, Mask>>(
    mask: Mask
  ): ZodObject<Pick<T, Extract<keyof T, keyof Mask>>, UnknownKeys, Catchall> {
    const shape: any = {};

    for (const key of util.objectKeys(mask)) {
      if (mask[key] && this.shape[key]) {
        shape[key] = this.shape[key];
      }
    }

    return new ZodObject({
      ...this._def,
      shape: () => shape,
    }) as any;
  }

  omit<Mask extends util.Exactly<{ [k in keyof T]?: true }, Mask>>(
    mask: Mask
  ): ZodObject<Omit<T, keyof Mask>, UnknownKeys, Catchall> {
    const shape: any = {};

    for (const key of util.objectKeys(this.shape)) {
      if (!mask[key]) {
        shape[key] = this.shape[key];
      }
    }

    return new ZodObject({
      ...this._def,
      shape: () => shape,
    }) as any;
  }

  /**
   * @deprecated
   */
  deepPartial(): partialUtil.DeepPartial<this> {
    return deepPartialify(this);
  }

  partial(): ZodObject<{ [k in keyof T]: ZodOptional<T[k]> }, UnknownKeys, Catchall>;
  partial<Mask extends util.Exactly<{ [k in keyof T]?: true }, Mask>>(
    mask: Mask
  ): ZodObject<
    objectUtil.noNever<{
      [k in keyof T]: k extends keyof Mask ? ZodOptional<T[k]> : T[k];
    }>,
    UnknownKeys,
    Catchall
  >;
  partial(mask?: any) {
    const newShape: any = {};

    for (const key of util.objectKeys(this.shape)) {
      const fieldSchema = this.shape[key]!;

      if (mask && !mask[key]) {
        newShape[key] = fieldSchema;
      } else {
        newShape[key] = fieldSchema.optional();
      }
    }

    return new ZodObject({
      ...this._def,
      shape: () => newShape,
    }) as any;
  }

  required(): ZodObject<{ [k in keyof T]: deoptional<T[k]> }, UnknownKeys, Catchall>;
  required<Mask extends util.Exactly<{ [k in keyof T]?: true }, Mask>>(
    mask: Mask
  ): ZodObject<
    objectUtil.noNever<{
      [k in keyof T]: k extends keyof Mask ? deoptional<T[k]> : T[k];
    }>,
    UnknownKeys,
    Catchall
  >;
  required(mask?: any) {
    const newShape: any = {};

    for (const key of util.objectKeys(this.shape)) {
      if (mask && !mask[key]) {
        newShape[key] = this.shape[key];
      } else {
        const fieldSchema = this.shape[key];
        let newField = fieldSchema;

        while (newField instanceof ZodOptional) {
          newField = (newField as ZodOptional<any>)._def.innerType;
        }

        newShape[key] = newField;
      }
    }

    return new ZodObject({
      ...this._def,
      shape: () => newShape,
    }) as any;
  }

  keyof(): ZodEnum<enumUtil.UnionToTupleString<keyof T>> {
    return createZodEnum(util.objectKeys(this.shape) as [string, ...string[]]) as any;
  }

  static create = <Shape extends ZodRawShape>(
    shape: Shape,
    params?: RawCreateParams
  ): ZodObject<
    Shape,
    "strip",
    ZodTypeAny,
    objectOutputType<Shape, ZodTypeAny, "strip">,
    objectInputType<Shape, ZodTypeAny, "strip">
  > => {
    return new ZodObject({
      shape: () => shape,
      unknownKeys: "strip",
      catchall: ZodNever.create(),
      typeName: ZodFirstPartyTypeKind.ZodObject,
      ...processCreateParams(params),
    }) as any;
  };

  static strictCreate = <Shape extends ZodRawShape>(
    shape: Shape,
    params?: RawCreateParams
  ): ZodObject<Shape, "strict"> => {
    return new ZodObject({
      shape: () => shape,
      unknownKeys: "strict",
      catchall: ZodNever.create(),
      typeName: ZodFirstPartyTypeKind.ZodObject,
      ...processCreateParams(params),
    }) as any;
  };

  static lazycreate = <Shape extends ZodRawShape>(
    shape: () => Shape,
    params?: RawCreateParams
  ): ZodObject<Shape, "strip"> => {
    return new ZodObject({
      shape,
      unknownKeys: "strip",
      catchall: ZodNever.create(),
      typeName: ZodFirstPartyTypeKind.ZodObject,
      ...processCreateParams(params),
    }) as any;
  };
}

export type AnyZodObject = ZodObject<any, any, any>;

////////////////////////////////////////
////////////////////////////////////////
//////////                    //////////
//////////      ZodUnion      //////////
//////////                    //////////
////////////////////////////////////////
////////////////////////////////////////
export type ZodUnionOptions = Readonly<[ZodTypeAny, ...ZodTypeAny[]]>;
export interface ZodUnionDef<T extends ZodUnionOptions = Readonly<[ZodTypeAny, ZodTypeAny, ...ZodTypeAny[]]>>
  extends ZodTypeDef {
  options: T;
  typeName: ZodFirstPartyTypeKind.ZodUnion;
}

export class ZodUnion<T extends ZodUnionOptions> extends ZodType<
  T[number]["_output"],
  ZodUnionDef<T>,
  T[number]["_input"]
> {
  _parse(input: ParseInput): ParseReturnType<this["_output"]> {
    const { ctx } = this._processInputParams(input);
    const options = this._def.options;

    function handleResults(results: { ctx: ParseContext; result: SyncParseReturnType<any> }[]) {
      // return first issue-free validation if it exists
      for (const result of results) {
        if (result.result.status === "valid") {
          return result.result;
        }
      }

      for (const result of results) {
        if (result.result.status === "dirty") {
          // add issues from dirty option

          ctx.common.issues.push(...result.ctx.common.issues);
          return result.result;
        }
      }

      // return invalid
      const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));

      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors,
      });
      return INVALID;
    }

    if (ctx.common.async) {
      return Promise.all(
        options.map(async (option) => {
          const childCtx: ParseContext = {
            ...ctx,
            common: {
              ...ctx.common,
              issues: [],
            },
            parent: null,
          };
          return {
            result: await option._parseAsync({
              data: ctx.data,
              path: ctx.path,
              parent: childCtx,
            }),
            ctx: childCtx,
          };
        })
      ).then(handleResults);
    } else {
      let dirty: undefined | { result: DIRTY<any>; ctx: ParseContext } = undefined;
      const issues: ZodIssue[][] = [];
      for (const option of options) {
        const childCtx: ParseContext = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: [],
          },
          parent: null,
        };
        const result = option._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: childCtx,
        });

        if (result.status === "valid") {
          return result;
        } else if (result.status === "dirty" && !dirty) {
          dirty = { result, ctx: childCtx };
        }

        if (childCtx.common.issues.length) {
          issues.push(childCtx.common.issues);
        }
      }

      if (dirty) {
        ctx.common.issues.push(...dirty.ctx.common.issues);
        return dirty.result;
      }

      const unionErrors = issues.map((issues) => new ZodError(issues));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors,
      });

      return INVALID;
    }
  }

  get options() {
    return this._def.options;
  }

  static create = <Options extends Readonly<[ZodTypeAny, ZodTypeAny, ...ZodTypeAny[]]>>(
    types: Options,
    params?: RawCreateParams
  ): ZodUnion<Options> => {
    return new ZodUnion({
      options: types,
      typeName: ZodFirstPartyTypeKind.ZodUnion,
      ...processCreateParams(params),
    });
  };
}

/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
//////////                                 //////////
//////////      ZodDiscriminatedUnion      //////////
//////////                                 //////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////

const getDiscriminator = <T extends ZodTypeAny>(type: T): Primitive[] => {
  if (type instanceof ZodLazy) {
    return getDiscriminator(type.schema);
  } else if (type instanceof ZodEffects) {
    return getDiscriminator(type.innerType());
  } else if (type instanceof ZodLiteral) {
    return [type.value];
  } else if (type instanceof ZodEnum) {
    return type.options;
  } else if (type instanceof ZodNativeEnum) {
    // eslint-disable-next-line ban/ban
    return util.objectValues(type.enum);
  } else if (type instanceof ZodDefault) {
    return getDiscriminator(type._def.innerType);
  } else if (type instanceof ZodUndefined) {
    return [undefined];
  } else if (type instanceof ZodNull) {
    return [null];
  } else if (type instanceof ZodOptional) {
    return [undefined, ...getDiscriminator(type.unwrap())];
  } else if (type instanceof ZodNullable) {
    return [null, ...getDiscriminator(type.unwrap())];
  } else if (type instanceof ZodBranded) {
    return getDiscriminator(type.unwrap());
  } else if (type instanceof ZodReadonly) {
    return getDiscriminator(type.unwrap());
  } else if (type instanceof ZodCatch) {
    return getDiscriminator(type._def.innerType);
  } else {
    return [];
  }
};

export type ZodDiscriminatedUnionOption<Discriminator extends string> = ZodObject<
  { [key in Discriminator]: ZodTypeAny } & ZodRawShape,
  UnknownKeysParam,
  ZodTypeAny
>;

export interface ZodDiscriminatedUnionDef<
  Discriminator extends string,
  Options extends readonly ZodDiscriminatedUnionOption<string>[] = ZodDiscriminatedUnionOption<string>[],
> extends ZodTypeDef {
  discriminator: Discriminator;
  options: Options;
  optionsMap: Map<Primitive, ZodDiscriminatedUnionOption<any>>;
  typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion;
}

export class ZodDiscriminatedUnion<
  Discriminator extends string,
  Options extends readonly ZodDiscriminatedUnionOption<Discriminator>[],
> extends ZodType<output<Options[number]>, ZodDiscriminatedUnionDef<Discriminator, Options>, input<Options[number]>> {
  _parse(input: ParseInput): ParseReturnType<this["_output"]> {
    const { ctx } = this._processInputParams(input);

    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType,
      });
      return INVALID;
    }

    const discriminator = this.discriminator;

    const discriminatorValue: string = ctx.data[discriminator];

    const option = this.optionsMap.get(discriminatorValue);

    if (!option) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union_discriminator,
        options: Array.from(this.optionsMap.keys()),
        path: [discriminator],
      });
      return INVALID;
    }

    if (ctx.common.async) {
      return option._parseAsync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx,
      }) as any;
    } else {
      return option._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx,
      }) as any;
    }
  }

  get discriminator() {
    return this._def.discriminator;
  }

  get options() {
    return this._def.options;
  }

  get optionsMap() {
    return this._def.optionsMap;
  }

  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create<
    Discriminator extends string,
    Types extends readonly [
      ZodDiscriminatedUnionOption<Discriminator>,
      ...ZodDiscriminatedUnionOption<Discriminator>[],
    ],
  >(
    discriminator: Discriminator,
    options: Types,
    params?: RawCreateParams
  ): ZodDiscriminatedUnion<Discriminator, Types> {
    // Get all the valid discriminator values
    const optionsMap: Map<Primitive, Types[number]> = new Map();

    // try {
    for (const type of options) {
      const discriminatorValues = getDiscriminator(type.shape[discriminator]);
      if (!discriminatorValues.length) {
        throw new Error(
          `A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`
        );
      }
      for (const value of discriminatorValues) {
        if (optionsMap.has(value)) {
          throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
        }

        optionsMap.set(value, type);
      }
    }

    return new ZodDiscriminatedUnion<
      Discriminator,
      // DiscriminatorValue,
      Types
    >({
      typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
      discriminator,
      options,
      optionsMap,
      ...processCreateParams(params),
    });
  }
}

///////////////////////////////////////////////
///////////////////////////////////////////////
//////////                           //////////
//////////      ZodIntersection      //////////
//////////                           //////////
///////////////////////////////////////////////
///////////////////////////////////////////////
export interface ZodIntersectionDef<T extends ZodTypeAny = ZodTypeAny, U extends ZodTypeAny = ZodTypeAny>
  extends ZodTypeDef {
  left: T;
  right: U;
  typeName: ZodFirstPartyTypeKind.ZodIntersection;
}

function mergeValues(a: any, b: any): { valid: true; data: any } | { valid: false } {
  const aType = getParsedType(a);
  const bType = getParsedType(b);

  if (a === b) {
    return { valid: true, data: a };
  } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
    const bKeys = util.objectKeys(b);
    const sharedKeys = util.objectKeys(a).filter((key) => bKeys.indexOf(key) !== -1);

    const newObj: any = { ...a, ...b };
    for (const key of sharedKeys) {
      const sharedValue = mergeValues(a[key], b[key]);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newObj[key] = sharedValue.data;
    }

    return { valid: true, data: newObj };
  } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
    if (a.length !== b.length) {
      return { valid: false };
    }

    const newArray: unknown[] = [];
    for (let index = 0; index < a.length; index++) {
      const itemA = a[index];
      const itemB = b[index];
      const sharedValue = mergeValues(itemA, itemB);

      if (!sharedValue.valid) {
        return { valid: false };
      }

      newArray.push(sharedValue.data);
    }

    return { valid: true, data: newArray };
  } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a === +b) {
    return { valid: true, data: a };
  } else {
    return { valid: false };
  }
}

export class ZodIntersection<T extends ZodTypeAny, U extends ZodTypeAny> extends ZodType<
  T["_output"] & U["_output"],
  ZodIntersectionDef<T, U>,
  T["_input"] & U["_input"]
> {
  _parse(input: ParseInput): ParseReturnType<this["_output"]> {
    const { status, ctx } = this._processInputParams(input);
    const handleParsed = (
      parsedLeft: SyncParseReturnType,
      parsedRight: SyncParseReturnType
    ): SyncParseReturnType<T & U> => {
      if (isAborted(parsedLeft) || isAborted(parsedRight)) {
        return INVALID;
      }

      const merged = mergeValues(parsedLeft.value, parsedRight.value);

      if (!merged.valid) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_intersection_types,
        });
        return INVALID;
      }

      if (isDirty(parsedLeft) || isDirty(parsedRight)) {
        status.dirty();
      }

      return { status: status.value, value: merged.data };
    };

    if (ctx.common.async) {
      return Promise.all([
        this._def.left._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx,
        }),
        this._def.right._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx,
        }),
      ]).then(([left, right]: any) => handleParsed(left, right));
    } else {
      return handleParsed(
        this._def.left._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx,
        }),
        this._def.right._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx,
        })
      );
    }
  }

  static create = <TSchema extends ZodTypeAny, USchema extends ZodTypeAny>(
    left: TSchema,
    right: USchema,
    params?: RawCreateParams
  ): ZodIntersection<TSchema, USchema> => {
    return new ZodIntersection({
      left: left,
      right: right,
      typeName: ZodFirstPartyTypeKind.ZodIntersection,
      ...processCreateParams(params),
    });
  };
}

////////////////////////////////////////
////////////////////////////////////////
//////////                    //////////
//////////      ZodTuple      //////////
//////////                    //////////
////////////////////////////////////////
////////////////////////////////////////
export type ZodTupleItems = [ZodTypeAny, ...ZodTypeAny[]];
export type AssertArray<T> = T extends any[] ? T : never;
export type OutputTypeOfTuple<T extends ZodTupleItems | []> = AssertArray<{
  [k in keyof T]: T[k] extends ZodType<any, any, any> ? T[k]["_output"] : never;
}>;
export type OutputTypeOfTupleWithRest<
  T extends ZodTupleItems | [],
  Rest extends ZodTypeAny | null = null,
> = Rest extends ZodTypeAny ? [...OutputTypeOfTuple<T>, ...Rest["_output"][]] : OutputTypeOfTuple<T>;

export type InputTypeOfTuple<T extends ZodTupleItems | []> = AssertArray<{
  [k in keyof T]: T[k] extends ZodType<any, any, any> ? T[k]["_input"] : never;
}>;
export type InputTypeOfTupleWithRest<
  T extends ZodTupleItems | [],
  Rest extends ZodTypeAny | null = null,
> = Rest extends ZodTypeAny ? [...InputTypeOfTuple<T>, ...Rest["_input"][]] : InputTypeOfTuple<T>;

export interface ZodTupleDef<T extends ZodTupleItems | [] = ZodTupleItems, Rest extends ZodTypeAny | null = null>
  extends ZodTypeDef {
  items: T;
  rest: Rest;
  typeName: ZodFirstPartyTypeKind.ZodTuple;
}

export type AnyZodTuple = ZodTuple<[ZodTypeAny, ...ZodTypeAny[]] | [], ZodTypeAny | null>;
// type ZodTupleItems = [ZodTypeAny, ...ZodTypeAny[]];
export class ZodTuple<
  T extends ZodTupleItems | [] = ZodTupleItems,
  Rest extends ZodTypeAny | null = null,
> extends ZodType<OutputTypeOfTupleWithRest<T, Rest>, ZodTupleDef<T, Rest>, InputTypeOfTupleWithRest<T, Rest>> {
  _parse(input: ParseInput): ParseReturnType<this["_output"]> {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType,
      });
      return INVALID;
    }

    if (ctx.data.length < this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        minimum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array",
      });

      return INVALID;
    }

    const rest = this._def.rest;

    if (!rest && ctx.data.length > this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_big,
        maximum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array",
      });
      status.dirty();
    }

    const items = ([...ctx.data] as any[])
      .map((item, itemIndex) => {
        const schema = this._def.items[itemIndex] || this._def.rest;
        if (!schema) return null as any as SyncParseReturnType<any>;
        return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
      })
      .filter((x) => !!x); // filter nulls

    if (ctx.common.async) {
      return Promise.all(items).then((results) => {
        return ParseStatus.mergeArray(status, results);
      });
    } else {
      return ParseStatus.mergeArray(status, items as SyncParseReturnType[]);
    }
  }

  get items() {
    return this._def.items;
  }

  rest<RestSchema extends ZodTypeAny>(rest: RestSchema): ZodTuple<T, RestSchema> {
    return new ZodTuple({
      ...this._def,
      rest,
    });
  }

  static create = <Items extends [ZodTypeAny, ...ZodTypeAny[]] | []>(
    schemas: Items,
    params?: RawCreateParams
  ): ZodTuple<Items, null> => {
    if (!Array.isArray(schemas)) {
      throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
    }
    return new ZodTuple({
      items: schemas,
      typeName: ZodFirstPartyTypeKind.ZodTuple,
      rest: null,
      ...processCreateParams(params),
    });
  };
}

/////////////////////////////////////////
/////////////////////////////////////////
//////////                     //////////
//////////      ZodRecord      //////////
//////////                     //////////
/////////////////////////////////////////
/////////////////////////////////////////
export interface ZodRecordDef<Key extends KeySchema = ZodString, Value extends ZodTypeAny = ZodTypeAny>
  extends ZodTypeDef {
  valueType: Value;
  keyType: Key;
  typeName: ZodFirstPartyTypeKind.ZodRecord;
}

export type KeySchema = ZodType<string | number | symbol, any, any>;
export type RecordType<K extends string | number | symbol, V> = [string] extends [K]
  ? Record<K, V>
  : [number] extends [K]
    ? Record<K, V>
    : [symbol] extends [K]
      ? Record<K, V>
      : [BRAND<string | number | symbol>] extends [K]
        ? Record<K, V>
        : Partial<Record<K, V>>;
export class ZodRecord<Key extends KeySchema = ZodString, Value extends ZodTypeAny = ZodTypeAny> extends ZodType<
  RecordType<Key["_output"], Value["_output"]>,
  ZodRecordDef<Key, Value>,
  RecordType<Key["_input"], Value["_input"]>
> {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input: ParseInput): ParseReturnType<this["_output"]> {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType,
      });
      return INVALID;
    }

    const pairs: {
      key: ParseReturnType<any>;
      value: ParseReturnType<any>;
      alwaysSet: boolean;
    }[] = [];

    const keyType = this._def.keyType;
    const valueType = this._def.valueType;

    for (const key in ctx.data) {
      pairs.push({
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
        value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
        alwaysSet: key in ctx.data,
      });
    }

    if (ctx.common.async) {
      return ParseStatus.mergeObjectAsync(status, pairs);
    } else {
      return ParseStatus.mergeObjectSync(status, pairs as any);
    }
  }

  get element() {
    return this._def.valueType;
  }

  static create<Value extends ZodTypeAny>(valueType: Value, params?: RawCreateParams): ZodRecord<ZodString, Value>;
  static create<Keys extends KeySchema, Value extends ZodTypeAny>(
    keySchema: Keys,
    valueType: Value,
    params?: RawCreateParams
  ): ZodRecord<Keys, Value>;
  static create(first: any, second?: any, third?: any): ZodRecord<any, any> {
    if (second instanceof ZodType) {
      return new ZodRecord({
        keyType: first,
        valueType: second,
        typeName: ZodFirstPartyTypeKind.ZodRecord,
        ...processCreateParams(third),
      });
    }

    return new ZodRecord({
      keyType: ZodString.create(),
      valueType: first,
      typeName: ZodFirstPartyTypeKind.ZodRecord,
      ...processCreateParams(second),
    });
  }
}

//////////////////////////////////////
//////////////////////////////////////
//////////                  //////////
//////////      ZodMap      //////////
//////////                  //////////
//////////////////////////////////////
//////////////////////////////////////
export interface ZodMapDef<Key extends ZodTypeAny = ZodTypeAny, Value extends ZodTypeAny = ZodTypeAny>
  extends ZodTypeDef {
  valueType: Value;
  keyType: Key;
  typeName: ZodFirstPartyTypeKind.ZodMap;
}

export class ZodMap<Key extends ZodTypeAny = ZodTypeAny, Value extends ZodTypeAny = ZodTypeAny> extends ZodType<
  Map<Key["_output"], Value["_output"]>,
  ZodMapDef<Key, Value>,
  Map<Key["_input"], Value["_input"]>
> {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input: ParseInput): ParseReturnType<this["_output"]> {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.map) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.map,
        received: ctx.parsedType,
      });
      return INVALID;
    }

    const keyType = this._def.keyType;
    const valueType = this._def.valueType;

    const pairs = [...(ctx.data as Map<unknown, unknown>).entries()].map(([key, value], index) => {
      return {
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
        value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"])),
      };
    });

    if (ctx.common.async) {
      const finalMap = new Map();
      return Promise.resolve().then(async () => {
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          if (key.status === "aborted" || value.status === "aborted") {
            return INVALID;
          }
          if (key.status === "dirty" || value.status === "dirty") {
            status.dirty();
          }

          finalMap.set(key.value, value.value);
        }
        return { status: status.value, value: finalMap };
      });
    } else {
      const finalMap = new Map();
      for (const pair of pairs) {
        const key = pair.key as SyncParseReturnType;
        const value = pair.value as SyncParseReturnType;
        if (key.status === "aborted" || value.status === "aborted") {
          return INVALID;
        }
        if (key.status === "dirty" || value.status === "dirty") {
          status.dirty();
        }

        finalMap.set(key.value, value.value);
      }
      return { status: status.value, value: finalMap };
    }
  }
  static create = <KeySchema extends ZodTypeAny = ZodTypeAny, ValueSchema extends ZodTypeAny = ZodTypeAny>(
    keyType: KeySchema,
    valueType: ValueSchema,
    params?: RawCreateParams
  ): ZodMap<KeySchema, ValueSchema> => {
    return new ZodMap({
      valueType,
      keyType,
      typeName: ZodFirstPartyTypeKind.ZodMap,
      ...processCreateParams(params),
    });
  };
}

//////////////////////////////////////
//////////////////////////////////////
//////////                  //////////
//////////      ZodSet      //////////
//////////                  //////////
//////////////////////////////////////
//////////////////////////////////////
export interface ZodSetDef<Value extends ZodTypeAny = ZodTypeAny> extends ZodTypeDef {
  valueType: Value;
  typeName: ZodFirstPartyTypeKind.ZodSet;
  minSize: { value: number; message?: string | undefined } | null;
  maxSize: { value: number; message?: string | undefined } | null;
}

export class ZodSet<Value extends ZodTypeAny = ZodTypeAny> extends ZodType<
  Set<Value["_output"]>,
  ZodSetDef<Value>,
  Set<Value["_input"]>
> {
  _parse(input: ParseInput): ParseReturnType<this["_output"]> {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.set) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.set,
        received: ctx.parsedType,
      });
      return INVALID;
    }

    const def = this._def;

    if (def.minSize !== null) {
      if (ctx.data.size < def.minSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.minSize.message,
        });
        status.dirty();
      }
    }

    if (def.maxSize !== null) {
      if (ctx.data.size > def.maxSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.maxSize.message,
        });
        status.dirty();
      }
    }

    const valueType = this._def.valueType;

    function finalizeSet(elements: SyncParseReturnType<any>[]) {
      const parsedSet = new Set();
      for (const element of elements) {
        if (element.status === "aborted") return INVALID;
        if (element.status === "dirty") status.dirty();
        parsedSet.add(element.value);
      }
      return { status: status.value, value: parsedSet };
    }

    const elements = [...(ctx.data as Set<unknown>).values()].map((item, i) =>
      valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i))
    );

    if (ctx.common.async) {
      return Promise.all(elements).then((elements) => finalizeSet(elements));
    } else {
      return finalizeSet(elements as SyncParseReturnType[]);
    }
  }

  min(minSize: number, message?: errorUtil.ErrMessage): this {
    return new ZodSet({
      ...this._def,
      minSize: { value: minSize, message: errorUtil.toString(message) },
    }) as any;
  }

  max(maxSize: number, message?: errorUtil.ErrMessage): this {
    return new ZodSet({
      ...this._def,
      maxSize: { value: maxSize, message: errorUtil.toString(message) },
    }) as any;
  }

  size(size: number, message?: errorUtil.ErrMessage): this {
    return this.min(size, message).max(size, message) as any;
  }

  nonempty(message?: errorUtil.ErrMessage): ZodSet<Value> {
    return this.min(1, message) as any;
  }

  static create = <ValueSchema extends ZodTypeAny = ZodTypeAny>(
    valueType: ValueSchema,
    params?: RawCreateParams
  ): ZodSet<ValueSchema> => {
    return new ZodSet({
      valueType,
      minSize: null,
      maxSize: null,
      typeName: ZodFirstPartyTypeKind.ZodSet,
      ...processCreateParams(params),
    });
  };
}

///////////////////////////////////////////
///////////////////////////////////////////
//////////                       //////////
//////////      ZodFunction      //////////
//////////                       //////////
///////////////////////////////////////////
///////////////////////////////////////////
export interface ZodFunctionDef<
  Args extends ZodTuple<any, any> = ZodTuple<any, any>,
  Returns extends ZodTypeAny = ZodTypeAny,
> extends ZodTypeDef {
  args: Args;
  returns: Returns;
  typeName: ZodFirstPartyTypeKind.ZodFunction;
}

export type OuterTypeOfFunction<
  Args extends ZodTuple<any, any>,
  Returns extends ZodTypeAny,
> = Args["_input"] extends Array<any> ? (...args: Args["_input"]) => Returns["_output"] : never;

export type InnerTypeOfFunction<
  Args extends ZodTuple<any, any>,
  Returns extends ZodTypeAny,
> = Args["_output"] extends Array<any> ? (...args: Args["_output"]) => Returns["_input"] : never;

export class ZodFunction<Args extends ZodTuple<any, any>, Returns extends ZodTypeAny> extends ZodType<
  OuterTypeOfFunction<Args, Returns>,
  ZodFunctionDef<Args, Returns>,
  InnerTypeOfFunction<Args, Returns>
> {
  _parse(input: ParseInput): ParseReturnType<any> {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.function) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.function,
        received: ctx.parsedType,
      });
      return INVALID;
    }

    function makeArgsIssue(args: any, error: ZodError): ZodIssue {
      return makeIssue({
        data: args,
        path: ctx.path,
        errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), defaultErrorMap].filter(
          (x) => !!x
        ),
        issueData: {
          code: ZodIssueCode.invalid_arguments,
          argumentsError: error,
        },
      });
    }

    function makeReturnsIssue(returns: any, error: ZodError): ZodIssue {
      return makeIssue({
        data: returns,
        path: ctx.path,
        errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), defaultErrorMap].filter(
          (x) => !!x
        ),
        issueData: {
          code: ZodIssueCode.invalid_return_type,
          returnTypeError: error,
        },
      });
    }

    const params = { errorMap: ctx.common.contextualErrorMap };
    const fn = ctx.data;

    if (this._def.returns instanceof ZodPromise) {
      // Would love a way to avoid disabling this rule, but we need
      // an alias (using an arrow function was what caused 2651).
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const me = this;
      return OK(async function (this: any, ...args: any[]) {
        const error = new ZodError([]);
        const parsedArgs = await me._def.args.parseAsync(args, params).catch((e) => {
          error.addIssue(makeArgsIssue(args, e));
          throw error;
        });
        const result = await Reflect.apply(fn, this, parsedArgs as any);
        const parsedReturns = await (me._def.returns as unknown as ZodPromise<ZodTypeAny>)._def.type
          .parseAsync(result, params)
          .catch((e) => {
            error.addIssue(makeReturnsIssue(result, e));
            throw error;
          });
        return parsedReturns;
      });
    } else {
      // Would love a way to avoid disabling this rule, but we need
      // an alias (using an arrow function was what caused 2651).
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const me = this;
      return OK(function (this: any, ...args: any[]) {
        const parsedArgs = me._def.args.safeParse(args, params);
        if (!parsedArgs.success) {
          throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
        }
        const result = Reflect.apply(fn, this, parsedArgs.data);
        const parsedReturns = me._def.returns.safeParse(result, params);
        if (!parsedReturns.success) {
          throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
        }
        return parsedReturns.data;
      }) as any;
    }
  }

  parameters() {
    return this._def.args;
  }

  returnType() {
    return this._def.returns;
  }

  args<Items extends Parameters<(typeof ZodTuple)["create"]>[0]>(
    ...items: Items
  ): ZodFunction<ZodTuple<Items, ZodUnknown>, Returns> {
    return new ZodFunction({
      ...this._def,
      args: ZodTuple.create(items).rest(ZodUnknown.create()) as any,
    });
  }

  returns<NewReturnType extends ZodType<any, any, any>>(returnType: NewReturnType): ZodFunction<Args, NewReturnType> {
    return new ZodFunction({
      ...this._def,
      returns: returnType,
    });
  }

  implement<F extends InnerTypeOfFunction<Args, Returns>>(
    func: F
  ): ReturnType<F> extends Returns["_output"]
    ? (...args: Args["_input"]) => ReturnType<F>
    : OuterTypeOfFunction<Args, Returns> {
    const validatedFunc = this.parse(func);
    return validatedFunc as any;
  }

  strictImplement(func: InnerTypeOfFunction<Args, Returns>): InnerTypeOfFunction<Args, Returns> {
    const validatedFunc = this.parse(func);
    return validatedFunc as any;
  }

  validate = this.implement;

  static create(): ZodFunction<ZodTuple<[], ZodUnknown>, ZodUnknown>;
  static create<T extends AnyZodTuple = ZodTuple<[], ZodUnknown>>(args: T): ZodFunction<T, ZodUnknown>;
  static create<T extends AnyZodTuple, U extends ZodTypeAny>(args: T, returns: U): ZodFunction<T, U>;
  static create<T extends AnyZodTuple = ZodTuple<[], ZodUnknown>, U extends ZodTypeAny = ZodUnknown>(
    args: T,
    returns: U,
    params?: RawCreateParams
  ): ZodFunction<T, U>;
  static create(args?: AnyZodTuple, returns?: ZodTypeAny, params?: RawCreateParams) {
    return new ZodFunction({
      args: (args ? args : ZodTuple.create([]).rest(ZodUnknown.create())) as any,
      returns: returns || ZodUnknown.create(),
      typeName: ZodFirstPartyTypeKind.ZodFunction,
      ...processCreateParams(params),
    }) as any;
  }
}

///////////////////////////////////////
///////////////////////////////////////
//////////                   //////////
//////////      ZodLazy      //////////
//////////                   //////////
///////////////////////////////////////
///////////////////////////////////////
export interface ZodLazyDef<T extends ZodTypeAny = ZodTypeAny> extends ZodTypeDef {
  getter: () => T;
  typeName: ZodFirstPartyTypeKind.ZodLazy;
}

export class ZodLazy<T extends ZodTypeAny> extends ZodType<output<T>, ZodLazyDef<T>, input<T>> {
  get schema(): T {
    return this._def.getter();
  }

  _parse(input: ParseInput): ParseReturnType<this["_output"]> {
    const { ctx } = this._processInputParams(input);
    const lazySchema = this._def.getter();
    return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
  }

  static create = <Inner extends ZodTypeAny>(getter: () => Inner, params?: RawCreateParams): ZodLazy<Inner> => {
    return new ZodLazy({
      getter: getter,
      typeName: ZodFirstPartyTypeKind.ZodLazy,
      ...processCreateParams(params),
    });
  };
}

//////////////////////////////////////////
//////////////////////////////////////////
//////////                      //////////
//////////      ZodLiteral      //////////
//////////                      //////////
//////////////////////////////////////////
//////////////////////////////////////////
export interface ZodLiteralDef<T = any> extends ZodTypeDef {
  value: T;
  typeName: ZodFirstPartyTypeKind.ZodLiteral;
}

export class ZodLiteral<T> extends ZodType<T, ZodLiteralDef<T>, T> {
  _parse(input: ParseInput): ParseReturnType<this["_output"]> {
    if (input.data !== this._def.value) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_literal,
        expected: this._def.value,
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }

  get value() {
    return this._def.value;
  }

  static create = <Value extends Primitive>(value: Value, params?: RawCreateParams): ZodLiteral<Value> => {
    return new ZodLiteral({
      value: value,
      typeName: ZodFirstPartyTypeKind.ZodLiteral,
      ...processCreateParams(params),
    });
  };
}

///////////////////////////////////////
///////////////////////////////////////
//////////                   //////////
//////////      ZodEnum      //////////
//////////                   //////////
///////////////////////////////////////
///////////////////////////////////////
export type ArrayKeys = keyof any[];
export type Indices<T> = Exclude<keyof T, ArrayKeys>;

export type EnumValues<T extends string = string> = readonly [T, ...T[]];

export type Values<T extends EnumValues> = {
  [k in T[number]]: k;
};

export interface ZodEnumDef<T extends EnumValues = EnumValues> extends ZodTypeDef {
  values: T;
  typeName: ZodFirstPartyTypeKind.ZodEnum;
}

export type Writeable<T> = { -readonly [P in keyof T]: T[P] };

export type FilterEnum<Values, ToExclude> = Values extends []
  ? []
  : Values extends [infer Head, ...infer Rest]
    ? Head extends ToExclude
      ? FilterEnum<Rest, ToExclude>
      : [Head, ...FilterEnum<Rest, ToExclude>]
    : never;

export type typecast<A, T> = A extends T ? A : never;

function createZodEnum<U extends string, T extends Readonly<[U, ...U[]]>>(
  values: T,
  params?: RawCreateParams
): ZodEnum<Writeable<T>>;
function createZodEnum<U extends string, T extends [U, ...U[]]>(values: T, params?: RawCreateParams): ZodEnum<T>;
function createZodEnum(values: [string, ...string[]], params?: RawCreateParams) {
  return new ZodEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodEnum,
    ...processCreateParams(params),
  });
}

export class ZodEnum<T extends [string, ...string[]]> extends ZodType<T[number], ZodEnumDef<T>, T[number]> {
  _cache: Set<T[number]> | undefined;

  _parse(input: ParseInput): ParseReturnType<this["_output"]> {
    if (typeof input.data !== "string") {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues) as "string",
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type,
      });
      return INVALID;
    }

    if (!this._cache) {
      this._cache = new Set(this._def.values);
    }

    if (!this._cache.has(input.data)) {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;

      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues,
      });
      return INVALID;
    }
    return OK(input.data);
  }

  get options() {
    return this._def.values;
  }

  get enum(): Values<T> {
    const enumValues: any = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }

  get Values(): Values<T> {
    const enumValues: any = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }

  get Enum(): Values<T> {
    const enumValues: any = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }

  extract<ToExtract extends readonly [T[number], ...T[number][]]>(
    values: ToExtract,
    newDef: RawCreateParams = this._def
  ): ZodEnum<Writeable<ToExtract>> {
    return ZodEnum.create(values, {
      ...this._def,
      ...newDef,
    }) as any;
  }

  exclude<ToExclude extends readonly [T[number], ...T[number][]]>(
    values: ToExclude,
    newDef: RawCreateParams = this._def
  ): ZodEnum<typecast<Writeable<FilterEnum<T, ToExclude[number]>>, [string, ...string[]]>> {
    return ZodEnum.create(this.options.filter((opt) => !values.includes(opt)) as FilterEnum<T, ToExclude[number]>, {
      ...this._def,
      ...newDef,
    }) as any;
  }

  static create = createZodEnum;
}

/////////////////////////////////////////////
/////////////////////////////////////////////
//////////                         //////////
//////////      ZodNativeEnum      //////////
//////////                         //////////
/////////////////////////////////////////////
/////////////////////////////////////////////
export interface ZodNativeEnumDef<T extends EnumLike = EnumLike> extends ZodTypeDef {
  values: T;
  typeName: ZodFirstPartyTypeKind.ZodNativeEnum;
}

export type EnumLike = { [k: string]: string | number; [nu: number]: string };

export class ZodNativeEnum<T extends EnumLike> extends ZodType<T[keyof T], ZodNativeEnumDef<T>, T[keyof T]> {
  _cache: Set<T[keyof T]> | undefined;
  _parse(input: ParseInput): ParseReturnType<T[keyof T]> {
    const nativeEnumValues = util.getValidEnumValues(this._def.values);

    const ctx = this._getOrReturnCtx(input);
    if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues) as "string",
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type,
      });
      return INVALID;
    }

    if (!this._cache) {
      this._cache = new Set(util.getValidEnumValues(this._def.values));
    }

    if (!this._cache.has(input.data)) {
      const expectedValues = util.objectValues(nativeEnumValues);

      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues,
      });
      return INVALID;
    }
    return OK(input.data);
  }

  get enum() {
    return this._def.values;
  }

  static create = <Elements extends EnumLike>(values: Elements, params?: RawCreateParams): ZodNativeEnum<Elements> => {
    return new ZodNativeEnum({
      values: values,
      typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
      ...processCreateParams(params),
    });
  };
}

//////////////////////////////////////////
//////////////////////////////////////////
//////////                      //////////
//////////      ZodPromise      //////////
//////////                      //////////
//////////////////////////////////////////
//////////////////////////////////////////
export interface ZodPromiseDef<T extends ZodTypeAny = ZodTypeAny> extends ZodTypeDef {
  type: T;
  typeName: ZodFirstPartyTypeKind.ZodPromise;
}

export class ZodPromise<T extends ZodTypeAny> extends ZodType<
  Promise<T["_output"]>,
  ZodPromiseDef<T>,
  Promise<T["_input"]>
> {
  unwrap() {
    return this._def.type;
  }

  _parse(input: ParseInput): ParseReturnType<this["_output"]> {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.promise,
        received: ctx.parsedType,
      });
      return INVALID;
    }

    const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);

    return OK(
      promisified.then((data: any) => {
        return this._def.type.parseAsync(data, {
          path: ctx.path,
          errorMap: ctx.common.contextualErrorMap,
        });
      })
    );
  }

  static create = <Inner extends ZodTypeAny>(schema: Inner, params?: RawCreateParams): ZodPromise<Inner> => {
    return new ZodPromise({
      type: schema,
      typeName: ZodFirstPartyTypeKind.ZodPromise,
      ...processCreateParams(params),
    });
  };
}

//////////////////////////////////////////////
//////////////////////////////////////////////
//////////                          //////////
//////////        ZodEffects        //////////
//////////                          //////////
//////////////////////////////////////////////
//////////////////////////////////////////////

export type Refinement<T> = (arg: T, ctx: RefinementCtx) => any;
export type SuperRefinement<T> = (arg: T, ctx: RefinementCtx) => void | Promise<void>;

export type RefinementEffect<T> = {
  type: "refinement";
  refinement: (arg: T, ctx: RefinementCtx) => any;
};
export type TransformEffect<T> = {
  type: "transform";
  transform: (arg: T, ctx: RefinementCtx) => any;
};
export type PreprocessEffect<T> = {
  type: "preprocess";
  transform: (arg: T, ctx: RefinementCtx) => any;
};
export type Effect<T> = RefinementEffect<T> | TransformEffect<T> | PreprocessEffect<T>;

export interface ZodEffectsDef<T extends ZodTypeAny = ZodTypeAny> extends ZodTypeDef {
  schema: T;
  typeName: ZodFirstPartyTypeKind.ZodEffects;
  effect: Effect<any>;
}

export class ZodEffects<T extends ZodTypeAny, Output = output<T>, Input = input<T>> extends ZodType<
  Output,
  ZodEffectsDef<T>,
  Input
> {
  innerType() {
    return this._def.schema;
  }

  sourceType(): T {
    return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects
      ? (this._def.schema as unknown as ZodEffects<T>).sourceType()
      : (this._def.schema as T);
  }

  _parse(input: ParseInput): ParseReturnType<this["_output"]> {
    const { status, ctx } = this._processInputParams(input);

    const effect = this._def.effect || null;

    const checkCtx: RefinementCtx = {
      addIssue: (arg: IssueData) => {
        addIssueToContext(ctx, arg);
        if (arg.fatal) {
          status.abort();
        } else {
          status.dirty();
        }
      },
      get path() {
        return ctx.path;
      },
    };

    checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);

    if (effect.type === "preprocess") {
      const processed = effect.transform(ctx.data, checkCtx);

      if (ctx.common.async) {
        return Promise.resolve(processed).then(async (processed) => {
          if (status.value === "aborted") return INVALID;

          const result = await this._def.schema._parseAsync({
            data: processed,
            path: ctx.path,
            parent: ctx,
          });
          if (result.status === "aborted") return INVALID;
          if (result.status === "dirty") return DIRTY(result.value);
          if (status.value === "dirty") return DIRTY(result.value);
          return result;
        });
      } else {
        if (status.value === "aborted") return INVALID;
        const result = this._def.schema._parseSync({
          data: processed,
          path: ctx.path,
          parent: ctx,
        });
        if (result.status === "aborted") return INVALID;
        if (result.status === "dirty") return DIRTY(result.value);
        if (status.value === "dirty") return DIRTY(result.value);
        return result;
      }
    }
    if (effect.type === "refinement") {
      const executeRefinement = (acc: unknown): any => {
        const result = effect.refinement(acc, checkCtx);
        if (ctx.common.async) {
          return Promise.resolve(result);
        }
        if (result instanceof Promise) {
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        }
        return acc;
      };

      if (ctx.common.async === false) {
        const inner = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx,
        });
        if (inner.status === "aborted") return INVALID;
        if (inner.status === "dirty") status.dirty();

        // return value is ignored
        executeRefinement(inner.value);
        return { status: status.value, value: inner.value };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
          if (inner.status === "aborted") return INVALID;
          if (inner.status === "dirty") status.dirty();

          return executeRefinement(inner.value).then(() => {
            return { status: status.value, value: inner.value };
          });
        });
      }
    }

    if (effect.type === "transform") {
      if (ctx.common.async === false) {
        const base = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx,
        });

        if (!isValid(base)) return INVALID;

        const result = effect.transform(base.value, checkCtx);
        if (result instanceof Promise) {
          throw new Error(
            `Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`
          );
        }

        return { status: status.value, value: result };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => {
          if (!isValid(base)) return INVALID;

          return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({
            status: status.value,
            value: result,
          }));
        });
      }
    }

    util.assertNever(effect);
  }

  static create = <I extends ZodTypeAny>(
    schema: I,
    effect: Effect<I["_output"]>,
    params?: RawCreateParams
  ): ZodEffects<I, I["_output"]> => {
    return new ZodEffects({
      schema,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect,
      ...processCreateParams(params),
    });
  };

  static createWithPreprocess = <I extends ZodTypeAny>(
    preprocess: (arg: unknown, ctx: RefinementCtx) => unknown,
    schema: I,
    params?: RawCreateParams
  ): ZodEffects<I, I["_output"], unknown> => {
    return new ZodEffects({
      schema,
      effect: { type: "preprocess", transform: preprocess },
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      ...processCreateParams(params),
    });
  };
}

export { ZodEffects as ZodTransformer };

///////////////////////////////////////////
///////////////////////////////////////////
//////////                       //////////
//////////      ZodOptional      //////////
//////////                       //////////
///////////////////////////////////////////
///////////////////////////////////////////
export interface ZodOptionalDef<T extends ZodTypeAny = ZodTypeAny> extends ZodTypeDef {
  innerType: T;
  typeName: ZodFirstPartyTypeKind.ZodOptional;
}

export type ZodOptionalType<T extends ZodTypeAny> = ZodOptional<T>;

export class ZodOptional<T extends ZodTypeAny> extends ZodType<
  T["_output"] | undefined,
  ZodOptionalDef<T>,
  T["_input"] | undefined
> {
  _parse(input: ParseInput): ParseReturnType<this["_output"]> {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.undefined) {
      return OK(undefined);
    }
    return this._def.innerType._parse(input);
  }

  unwrap() {
    return this._def.innerType;
  }

  static create = <Inner extends ZodTypeAny>(type: Inner, params?: RawCreateParams): ZodOptional<Inner> => {
    return new ZodOptional({
      innerType: type,
      typeName: ZodFirstPartyTypeKind.ZodOptional,
      ...processCreateParams(params),
    }) as any;
  };
}

///////////////////////////////////////////
///////////////////////////////////////////
//////////                       //////////
//////////      ZodNullable      //////////
//////////                       //////////
///////////////////////////////////////////
///////////////////////////////////////////
export interface ZodNullableDef<T extends ZodTypeAny = ZodTypeAny> extends ZodTypeDef {
  innerType: T;
  typeName: ZodFirstPartyTypeKind.ZodNullable;
}

export type ZodNullableType<T extends ZodTypeAny> = ZodNullable<T>;

export class ZodNullable<T extends ZodTypeAny> extends ZodType<
  T["_output"] | null,
  ZodNullableDef<T>,
  T["_input"] | null
> {
  _parse(input: ParseInput): ParseReturnType<this["_output"]> {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.null) {
      return OK(null);
    }
    return this._def.innerType._parse(input);
  }

  unwrap() {
    return this._def.innerType;
  }

  static create = <Inner extends ZodTypeAny>(type: Inner, params?: RawCreateParams): ZodNullable<Inner> => {
    return new ZodNullable({
      innerType: type,
      typeName: ZodFirstPartyTypeKind.ZodNullable,
      ...processCreateParams(params),
    }) as any;
  };
}

////////////////////////////////////////////
////////////////////////////////////////////
//////////                        //////////
//////////       ZodDefault       //////////
//////////                        //////////
////////////////////////////////////////////
////////////////////////////////////////////
export interface ZodDefaultDef<T extends ZodTypeAny = ZodTypeAny> extends ZodTypeDef {
  innerType: T;
  defaultValue: () => util.noUndefined<T["_input"]>;
  typeName: ZodFirstPartyTypeKind.ZodDefault;
}

export class ZodDefault<T extends ZodTypeAny> extends ZodType<
  util.noUndefined<T["_output"]>,
  ZodDefaultDef<T>,
  T["_input"] | undefined
> {
  _parse(input: ParseInput): ParseReturnType<this["_output"]> {
    const { ctx } = this._processInputParams(input);
    let data = ctx.data;
    if (ctx.parsedType === ZodParsedType.undefined) {
      data = this._def.defaultValue();
    }
    return this._def.innerType._parse({
      data,
      path: ctx.path,
      parent: ctx,
    });
  }

  removeDefault() {
    return this._def.innerType;
  }

  static create = <Inner extends ZodTypeAny>(
    type: Inner,
    params: RawCreateParams & {
      default: Inner["_input"] | (() => util.noUndefined<Inner["_input"]>);
    }
  ): ZodDefault<Inner> => {
    return new ZodDefault({
      innerType: type,
      typeName: ZodFirstPartyTypeKind.ZodDefault,
      defaultValue: typeof params.default === "function" ? params.default : () => params.default as any,
      ...processCreateParams(params),
    }) as any;
  };
}

//////////////////////////////////////////
//////////////////////////////////////////
//////////                      //////////
//////////       ZodCatch       //////////
//////////                      //////////
//////////////////////////////////////////
//////////////////////////////////////////
export interface ZodCatchDef<T extends ZodTypeAny = ZodTypeAny> extends ZodTypeDef {
  innerType: T;
  catchValue: (ctx: { error: ZodError; input: unknown }) => T["_input"];
  typeName: ZodFirstPartyTypeKind.ZodCatch;
}

export class ZodCatch<T extends ZodTypeAny> extends ZodType<
  T["_output"],
  ZodCatchDef<T>,
  unknown // any input will pass validation // T["_input"]
> {
  _parse(input: ParseInput): ParseReturnType<this["_output"]> {
    const { ctx } = this._processInputParams(input);

    // newCtx is used to not collect issues from inner types in ctx
    const newCtx: ParseContext = {
      ...ctx,
      common: {
        ...ctx.common,
        issues: [],
      },
    };

    const result = this._def.innerType._parse({
      data: newCtx.data,
      path: newCtx.path,
      parent: {
        ...newCtx,
      },
    });

    if (isAsync(result)) {
      return result.then((result) => {
        return {
          status: "valid",
          value:
            result.status === "valid"
              ? result.value
              : this._def.catchValue({
                  get error() {
                    return new ZodError(newCtx.common.issues);
                  },
                  input: newCtx.data,
                }),
        };
      });
    } else {
      return {
        status: "valid",
        value:
          result.status === "valid"
            ? result.value
            : this._def.catchValue({
                get error() {
                  return new ZodError(newCtx.common.issues);
                },
                input: newCtx.data,
              }),
      };
    }
  }

  removeCatch() {
    return this._def.innerType;
  }

  static create = <Inner extends ZodTypeAny>(
    type: Inner,
    params: RawCreateParams & {
      catch: Inner["_output"] | (() => Inner["_output"]);
    }
  ): ZodCatch<Inner> => {
    return new ZodCatch({
      innerType: type,
      typeName: ZodFirstPartyTypeKind.ZodCatch,
      catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
      ...processCreateParams(params),
    });
  };
}

/////////////////////////////////////////
/////////////////////////////////////////
//////////                     //////////
//////////      ZodNaN         //////////
//////////                     //////////
/////////////////////////////////////////
/////////////////////////////////////////

export interface ZodNaNDef extends ZodTypeDef {
  typeName: ZodFirstPartyTypeKind.ZodNaN;
}

export class ZodNaN extends ZodType<number, ZodNaNDef, number> {
  _parse(input: ParseInput): ParseReturnType<any> {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.nan) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.nan,
        received: ctx.parsedType,
      });
      return INVALID;
    }

    return { status: "valid", value: input.data };
  }

  static create = (params?: RawCreateParams): ZodNaN => {
    return new ZodNaN({
      typeName: ZodFirstPartyTypeKind.ZodNaN,
      ...processCreateParams(params),
    });
  };
}

//////////////////////////////////////////
//////////////////////////////////////////
//////////                      //////////
//////////      ZodBranded      //////////
//////////                      //////////
//////////////////////////////////////////
//////////////////////////////////////////

export interface ZodBrandedDef<T extends ZodTypeAny> extends ZodTypeDef {
  type: T;
  typeName: ZodFirstPartyTypeKind.ZodBranded;
}

export const BRAND: unique symbol = Symbol("zod_brand");
export type BRAND<T extends string | number | symbol> = {
  [BRAND]: { [k in T]: true };
};

export class ZodBranded<T extends ZodTypeAny, B extends string | number | symbol> extends ZodType<
  T["_output"] & BRAND<B>,
  ZodBrandedDef<T>,
  T["_input"]
> {
  _parse(input: ParseInput): ParseReturnType<any> {
    const { ctx } = this._processInputParams(input);
    const data = ctx.data;
    return this._def.type._parse({
      data,
      path: ctx.path,
      parent: ctx,
    });
  }

  unwrap() {
    return this._def.type;
  }
}

////////////////////////////////////////////
////////////////////////////////////////////
//////////                        //////////
//////////      ZodPipeline       //////////
//////////                        //////////
////////////////////////////////////////////
////////////////////////////////////////////

export interface ZodPipelineDef<A extends ZodTypeAny, B extends ZodTypeAny> extends ZodTypeDef {
  in: A;
  out: B;
  typeName: ZodFirstPartyTypeKind.ZodPipeline;
}

export class ZodPipeline<A extends ZodTypeAny, B extends ZodTypeAny> extends ZodType<
  B["_output"],
  ZodPipelineDef<A, B>,
  A["_input"]
> {
  _parse(input: ParseInput): ParseReturnType<any> {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.common.async) {
      const handleAsync = async () => {
        const inResult = await this._def.in._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx,
        });
        if (inResult.status === "aborted") return INVALID;
        if (inResult.status === "dirty") {
          status.dirty();
          return DIRTY(inResult.value);
        } else {
          return this._def.out._parseAsync({
            data: inResult.value,
            path: ctx.path,
            parent: ctx,
          });
        }
      };
      return handleAsync();
    } else {
      const inResult = this._def.in._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx,
      });
      if (inResult.status === "aborted") return INVALID;
      if (inResult.status === "dirty") {
        status.dirty();
        return {
          status: "dirty",
          value: inResult.value,
        };
      } else {
        return this._def.out._parseSync({
          data: inResult.value,
          path: ctx.path,
          parent: ctx,
        });
      }
    }
  }

  static create<ASchema extends ZodTypeAny, BSchema extends ZodTypeAny>(
    a: ASchema,
    b: BSchema
  ): ZodPipeline<ASchema, BSchema> {
    return new ZodPipeline({
      in: a,
      out: b,
      typeName: ZodFirstPartyTypeKind.ZodPipeline,
    });
  }
}

///////////////////////////////////////////
///////////////////////////////////////////
//////////                       //////////
//////////      ZodReadonly      //////////
//////////                       //////////
///////////////////////////////////////////
///////////////////////////////////////////
type BuiltIn =
  | (((...args: any[]) => any) | (new (...args: any[]) => any))
  | { readonly [Symbol.toStringTag]: string }
  | Date
  | Error
  | Generator
  | Promise<unknown>
  | RegExp;

type MakeReadonly<T> = T extends Map<infer K, infer V>
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

export interface ZodReadonlyDef<T extends ZodTypeAny = ZodTypeAny> extends ZodTypeDef {
  innerType: T;
  typeName: ZodFirstPartyTypeKind.ZodReadonly;
}

export class ZodReadonly<T extends ZodTypeAny> extends ZodType<
  MakeReadonly<T["_output"]>,
  ZodReadonlyDef<T>,
  MakeReadonly<T["_input"]>
> {
  _parse(input: ParseInput): ParseReturnType<this["_output"]> {
    const result = this._def.innerType._parse(input);
    const freeze = (data: ParseReturnType<this["_output"]>) => {
      if (isValid(data)) {
        data.value = Object.freeze(data.value);
      }
      return data;
    };
    return isAsync(result) ? result.then((data) => freeze(data)) : freeze(result);
  }

  static create = <Inner extends ZodTypeAny>(type: Inner, params?: RawCreateParams): ZodReadonly<Inner> => {
    return new ZodReadonly({
      innerType: type,
      typeName: ZodFirstPartyTypeKind.ZodReadonly,
      ...processCreateParams(params),
    }) as any;
  };

  unwrap() {
    return this._def.innerType;
  }
}

////////////////////////////////////////
////////////////////////////////////////
//////////                    //////////
//////////      z.custom      //////////
//////////                    //////////
////////////////////////////////////////
////////////////////////////////////////
function cleanParams(params: unknown, data: unknown) {
  const p = typeof params === "function" ? params(data) : typeof params === "string" ? { message: params } : params;

  const p2 = typeof p === "string" ? { message: p } : p;
  return p2;
}
type CustomParams = CustomErrorParams & { fatal?: boolean };
export function custom<T>(
  check?: (data: any) => any,
  _params: string | CustomParams | ((input: any) => CustomParams) = {},
  /**
   * @deprecated
   *
   * Pass `fatal` into the params object instead:
   *
   * ```ts
   * z.string().custom((val) => val.length > 5, { fatal: false })
   * ```
   *
   */
  fatal?: boolean
): ZodType<T, ZodTypeDef, T> {
  if (check)
    return ZodAny.create().superRefine((data, ctx) => {
      const r = check(data);
      if (r instanceof Promise) {
        return r.then((r) => {
          if (!r) {
            const params = cleanParams(_params, data);
            const _fatal = params.fatal ?? fatal ?? true;
            ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
          }
        });
      }
      if (!r) {
        const params = cleanParams(_params, data);
        const _fatal = params.fatal ?? fatal ?? true;
        ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
      }
      return;
    });
  return ZodAny.create();
}

export { ZodType as Schema, ZodType as ZodSchema };

export const late = {
  object: ZodObject.lazycreate,
};

export enum ZodFirstPartyTypeKind {
  ZodString = "ZodString",
  ZodNumber = "ZodNumber",
  ZodNaN = "ZodNaN",
  ZodBigInt = "ZodBigInt",
  ZodBoolean = "ZodBoolean",
  ZodDate = "ZodDate",
  ZodSymbol = "ZodSymbol",
  ZodUndefined = "ZodUndefined",
  ZodNull = "ZodNull",
  ZodAny = "ZodAny",
  ZodUnknown = "ZodUnknown",
  ZodNever = "ZodNever",
  ZodVoid = "ZodVoid",
  ZodArray = "ZodArray",
  ZodObject = "ZodObject",
  ZodUnion = "ZodUnion",
  ZodDiscriminatedUnion = "ZodDiscriminatedUnion",
  ZodIntersection = "ZodIntersection",
  ZodTuple = "ZodTuple",
  ZodRecord = "ZodRecord",
  ZodMap = "ZodMap",
  ZodSet = "ZodSet",
  ZodFunction = "ZodFunction",
  ZodLazy = "ZodLazy",
  ZodLiteral = "ZodLiteral",
  ZodEnum = "ZodEnum",
  ZodEffects = "ZodEffects",
  ZodNativeEnum = "ZodNativeEnum",
  ZodOptional = "ZodOptional",
  ZodNullable = "ZodNullable",
  ZodDefault = "ZodDefault",
  ZodCatch = "ZodCatch",
  ZodPromise = "ZodPromise",
  ZodBranded = "ZodBranded",
  ZodPipeline = "ZodPipeline",
  ZodReadonly = "ZodReadonly",
}
export type ZodFirstPartySchemaTypes =
  | ZodString
  | ZodNumber
  | ZodNaN
  | ZodBigInt
  | ZodBoolean
  | ZodDate
  | ZodUndefined
  | ZodNull
  | ZodAny
  | ZodUnknown
  | ZodNever
  | ZodVoid
  | ZodArray<any, any>
  | ZodObject<any, any, any>
  | ZodUnion<any>
  | ZodDiscriminatedUnion<any, any>
  | ZodIntersection<any, any>
  | ZodTuple<any, any>
  | ZodRecord<any, any>
  | ZodMap<any>
  | ZodSet<any>
  | ZodFunction<any, any>
  | ZodLazy<any>
  | ZodLiteral<any>
  | ZodEnum<any>
  | ZodEffects<any, any, any>
  | ZodNativeEnum<any>
  | ZodOptional<any>
  | ZodNullable<any>
  | ZodDefault<any>
  | ZodCatch<any>
  | ZodPromise<any>
  | ZodBranded<any, any>
  | ZodPipeline<any, any>
  | ZodReadonly<any>
  | ZodSymbol;

// requires TS 4.4+
abstract class Class {
  constructor(..._: any[]) {}
}
const instanceOfType = <T extends typeof Class>(
  // const instanceOfType = <T extends new (...args: any[]) => any>(
  cls: T,
  params: CustomParams = {
    message: `Input not instance of ${cls.name}`,
  }
) => custom<InstanceType<T>>((data) => data instanceof cls, params);

const stringType = ZodString.create;
const numberType = ZodNumber.create;
const nanType = ZodNaN.create;
const bigIntType = ZodBigInt.create;
const booleanType = ZodBoolean.create;
const dateType = ZodDate.create;
const symbolType = ZodSymbol.create;
const undefinedType = ZodUndefined.create;
const nullType = ZodNull.create;
const anyType = ZodAny.create;
const unknownType = ZodUnknown.create;
const neverType = ZodNever.create;
const voidType = ZodVoid.create;
const arrayType = ZodArray.create;
const objectType = ZodObject.create;
const strictObjectType = ZodObject.strictCreate;
const unionType = ZodUnion.create;
const discriminatedUnionType = ZodDiscriminatedUnion.create;
const intersectionType = ZodIntersection.create;
const tupleType = ZodTuple.create;
const recordType = ZodRecord.create;
const mapType = ZodMap.create;
const setType = ZodSet.create;
const functionType = ZodFunction.create;
const lazyType = ZodLazy.create;
const literalType = ZodLiteral.create;
const enumType = ZodEnum.create;
const nativeEnumType = ZodNativeEnum.create;
const promiseType = ZodPromise.create;
const effectsType = ZodEffects.create;
const optionalType = ZodOptional.create;
const nullableType = ZodNullable.create;
const preprocessType = ZodEffects.createWithPreprocess;
const pipelineType = ZodPipeline.create;
const ostring = () => stringType().optional();
const onumber = () => numberType().optional();
const oboolean = () => booleanType().optional();

export const coerce = {
  string: ((arg) => ZodString.create({ ...arg, coerce: true })) as (typeof ZodString)["create"],
  number: ((arg) => ZodNumber.create({ ...arg, coerce: true })) as (typeof ZodNumber)["create"],
  boolean: ((arg) =>
    ZodBoolean.create({
      ...arg,
      coerce: true,
    })) as (typeof ZodBoolean)["create"],
  bigint: ((arg) => ZodBigInt.create({ ...arg, coerce: true })) as (typeof ZodBigInt)["create"],
  date: ((arg) => ZodDate.create({ ...arg, coerce: true })) as (typeof ZodDate)["create"],
};

export {
  anyType as any,
  arrayType as array,
  bigIntType as bigint,
  booleanType as boolean,
  dateType as date,
  discriminatedUnionType as discriminatedUnion,
  effectsType as effect,
  enumType as enum,
  functionType as function,
  instanceOfType as instanceof,
  intersectionType as intersection,
  lazyType as lazy,
  literalType as literal,
  mapType as map,
  nanType as nan,
  nativeEnumType as nativeEnum,
  neverType as never,
  nullType as null,
  nullableType as nullable,
  numberType as number,
  objectType as object,
  oboolean,
  onumber,
  optionalType as optional,
  ostring,
  pipelineType as pipeline,
  preprocessType as preprocess,
  promiseType as promise,
  recordType as record,
  setType as set,
  strictObjectType as strictObject,
  stringType as string,
  symbolType as symbol,
  effectsType as transformer,
  tupleType as tuple,
  undefinedType as undefined,
  unionType as union,
  unknownType as unknown,
  voidType as void,
};

export const NEVER = INVALID as never;

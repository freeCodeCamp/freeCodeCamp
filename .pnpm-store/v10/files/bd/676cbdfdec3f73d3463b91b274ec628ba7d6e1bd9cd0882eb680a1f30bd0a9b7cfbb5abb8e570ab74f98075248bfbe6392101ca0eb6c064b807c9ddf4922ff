import type { Primitive } from "./helpers/typeAliases.js";
import { util, type ZodParsedType } from "./helpers/util.js";
import type { TypeOf, ZodType } from "./index.js";

type allKeys<T> = T extends any ? keyof T : never;

export type inferFlattenedErrors<T extends ZodType<any, any, any>, U = string> = typeToFlattenedError<TypeOf<T>, U>;
export type typeToFlattenedError<T, U = string> = {
  formErrors: U[];
  fieldErrors: {
    [P in allKeys<T>]?: U[];
  };
};

export const ZodIssueCode = util.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite",
]);

export type ZodIssueCode = keyof typeof ZodIssueCode;

export type ZodIssueBase = {
  path: (string | number)[];
  message?: string | undefined;
};

export interface ZodInvalidTypeIssue extends ZodIssueBase {
  code: typeof ZodIssueCode.invalid_type;
  expected: ZodParsedType;
  received: ZodParsedType;
}

export interface ZodInvalidLiteralIssue extends ZodIssueBase {
  code: typeof ZodIssueCode.invalid_literal;
  expected: unknown;
  received: unknown;
}

export interface ZodUnrecognizedKeysIssue extends ZodIssueBase {
  code: typeof ZodIssueCode.unrecognized_keys;
  keys: string[];
}

export interface ZodInvalidUnionIssue extends ZodIssueBase {
  code: typeof ZodIssueCode.invalid_union;
  unionErrors: ZodError[];
}

export interface ZodInvalidUnionDiscriminatorIssue extends ZodIssueBase {
  code: typeof ZodIssueCode.invalid_union_discriminator;
  options: Primitive[];
}

export interface ZodInvalidEnumValueIssue extends ZodIssueBase {
  received: string | number;
  code: typeof ZodIssueCode.invalid_enum_value;
  options: (string | number)[];
}

export interface ZodInvalidArgumentsIssue extends ZodIssueBase {
  code: typeof ZodIssueCode.invalid_arguments;
  argumentsError: ZodError;
}

export interface ZodInvalidReturnTypeIssue extends ZodIssueBase {
  code: typeof ZodIssueCode.invalid_return_type;
  returnTypeError: ZodError;
}

export interface ZodInvalidDateIssue extends ZodIssueBase {
  code: typeof ZodIssueCode.invalid_date;
}

export type StringValidation =
  | "email"
  | "url"
  | "emoji"
  | "uuid"
  | "nanoid"
  | "regex"
  | "cuid"
  | "cuid2"
  | "ulid"
  | "datetime"
  | "date"
  | "time"
  | "duration"
  | "ip"
  | "cidr"
  | "base64"
  | "jwt"
  | "base64url"
  | { includes: string; position?: number | undefined }
  | { startsWith: string }
  | { endsWith: string };

export interface ZodInvalidStringIssue extends ZodIssueBase {
  code: typeof ZodIssueCode.invalid_string;
  validation: StringValidation;
}

export interface ZodTooSmallIssue extends ZodIssueBase {
  code: typeof ZodIssueCode.too_small;
  minimum: number | bigint;
  inclusive: boolean;
  exact?: boolean;
  type: "array" | "string" | "number" | "set" | "date" | "bigint";
}

export interface ZodTooBigIssue extends ZodIssueBase {
  code: typeof ZodIssueCode.too_big;
  maximum: number | bigint;
  inclusive: boolean;
  exact?: boolean;
  type: "array" | "string" | "number" | "set" | "date" | "bigint";
}

export interface ZodInvalidIntersectionTypesIssue extends ZodIssueBase {
  code: typeof ZodIssueCode.invalid_intersection_types;
}

export interface ZodNotMultipleOfIssue extends ZodIssueBase {
  code: typeof ZodIssueCode.not_multiple_of;
  multipleOf: number | bigint;
}

export interface ZodNotFiniteIssue extends ZodIssueBase {
  code: typeof ZodIssueCode.not_finite;
}

export interface ZodCustomIssue extends ZodIssueBase {
  code: typeof ZodIssueCode.custom;
  params?: { [k: string]: any };
}

export type DenormalizedError = { [k: string]: DenormalizedError | string[] };

export type ZodIssueOptionalMessage =
  | ZodInvalidTypeIssue
  | ZodInvalidLiteralIssue
  | ZodUnrecognizedKeysIssue
  | ZodInvalidUnionIssue
  | ZodInvalidUnionDiscriminatorIssue
  | ZodInvalidEnumValueIssue
  | ZodInvalidArgumentsIssue
  | ZodInvalidReturnTypeIssue
  | ZodInvalidDateIssue
  | ZodInvalidStringIssue
  | ZodTooSmallIssue
  | ZodTooBigIssue
  | ZodInvalidIntersectionTypesIssue
  | ZodNotMultipleOfIssue
  | ZodNotFiniteIssue
  | ZodCustomIssue;

export type ZodIssue = ZodIssueOptionalMessage & {
  fatal?: boolean | undefined;
  message: string;
};

export const quotelessJson = (obj: any) => {
  const json = JSON.stringify(obj, null, 2);
  return json.replace(/"([^"]+)":/g, "$1:");
};

type recursiveZodFormattedError<T> = T extends [any, ...any[]]
  ? { [K in keyof T]?: ZodFormattedError<T[K]> }
  : T extends any[]
    ? { [k: number]: ZodFormattedError<T[number]> }
    : T extends object
      ? { [K in keyof T]?: ZodFormattedError<T[K]> }
      : unknown;

export type ZodFormattedError<T, U = string> = {
  _errors: U[];
} & recursiveZodFormattedError<NonNullable<T>>;

export type inferFormattedError<T extends ZodType<any, any, any>, U = string> = ZodFormattedError<TypeOf<T>, U>;

export class ZodError<T = any> extends Error {
  issues: ZodIssue[] = [];

  get errors() {
    return this.issues;
  }

  constructor(issues: ZodIssue[]) {
    super();

    const actualProto = new.target.prototype;
    if (Object.setPrototypeOf) {
      // eslint-disable-next-line ban/ban
      Object.setPrototypeOf(this, actualProto);
    } else {
      (this as any).__proto__ = actualProto;
    }
    this.name = "ZodError";
    this.issues = issues;
  }

  format(): ZodFormattedError<T>;
  format<U>(mapper: (issue: ZodIssue) => U): ZodFormattedError<T, U>;
  format(_mapper?: any) {
    const mapper: (issue: ZodIssue) => any =
      _mapper ||
      function (issue: ZodIssue) {
        return issue.message;
      };
    const fieldErrors: ZodFormattedError<T> = { _errors: [] } as any;
    const processError = (error: ZodError) => {
      for (const issue of error.issues) {
        if (issue.code === "invalid_union") {
          issue.unionErrors.map(processError);
        } else if (issue.code === "invalid_return_type") {
          processError(issue.returnTypeError);
        } else if (issue.code === "invalid_arguments") {
          processError(issue.argumentsError);
        } else if (issue.path.length === 0) {
          (fieldErrors as any)._errors.push(mapper(issue));
        } else {
          let curr: any = fieldErrors;
          let i = 0;
          while (i < issue.path.length) {
            const el = issue.path[i]!;
            const terminal = i === issue.path.length - 1;

            if (!terminal) {
              curr[el] = curr[el] || { _errors: [] };
              // if (typeof el === "string") {
              //   curr[el] = curr[el] || { _errors: [] };
              // } else if (typeof el === "number") {
              //   const errorArray: any = [];
              //   errorArray._errors = [];
              //   curr[el] = curr[el] || errorArray;
              // }
            } else {
              curr[el] = curr[el] || { _errors: [] };
              curr[el]._errors.push(mapper(issue));
            }

            curr = curr[el];
            i++;
          }
        }
      }
    };

    processError(this);
    return fieldErrors;
  }

  static create = (issues: ZodIssue[]) => {
    const error = new ZodError(issues);
    return error;
  };

  static assert(value: unknown): asserts value is ZodError {
    if (!(value instanceof ZodError)) {
      throw new Error(`Not a ZodError: ${value}`);
    }
  }

  override toString() {
    return this.message;
  }
  override get message() {
    return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
  }

  get isEmpty(): boolean {
    return this.issues.length === 0;
  }

  addIssue = (sub: ZodIssue) => {
    this.issues = [...this.issues, sub];
  };

  addIssues = (subs: ZodIssue[] = []) => {
    this.issues = [...this.issues, ...subs];
  };

  flatten(): typeToFlattenedError<T>;
  flatten<U>(mapper?: (issue: ZodIssue) => U): typeToFlattenedError<T, U>;
  flatten<U = string>(mapper: (issue: ZodIssue) => U = (issue: ZodIssue) => issue.message as any): any {
    const fieldErrors: any = {};
    const formErrors: U[] = [];
    for (const sub of this.issues) {
      if (sub.path.length > 0) {
        const firstEl = sub.path[0]!;
        fieldErrors[firstEl] = fieldErrors[firstEl] || [];
        fieldErrors[firstEl].push(mapper(sub));
      } else {
        formErrors.push(mapper(sub));
      }
    }
    return { formErrors, fieldErrors };
  }

  get formErrors() {
    return this.flatten();
  }
}

type stripPath<T extends object> = T extends any ? util.OmitKeys<T, "path"> : never;

export type IssueData = stripPath<ZodIssueOptionalMessage> & {
  path?: (string | number)[];
  fatal?: boolean | undefined;
};

export type ErrorMapCtx = {
  defaultError: string;
  data: any;
};

export type ZodErrorMap = (issue: ZodIssueOptionalMessage, _ctx: ErrorMapCtx) => { message: string };

// import { $ZodType } from "./schemas.js";

import * as core from "./core.js";
import type * as errors from "./errors.js";
import * as regexes from "./regexes.js";
import type * as schemas from "./schemas.js";
import * as util from "./util.js";

//////////////////////////////   CHECKS   ///////////////////////////////////////

export interface $ZodCheckDef {
  check: string;
  error?: errors.$ZodErrorMap<never> | undefined;
  /** If true, no later checks will be executed if this check fails. Default `false`. */
  abort?: boolean | undefined;
  /** If provided, this check will only be executed if the function returns `true`. Defaults to `payload => z.util.isAborted(payload)`. */
  when?: ((payload: schemas.ParsePayload) => boolean) | undefined;
}

export interface $ZodCheckInternals<T> {
  def: $ZodCheckDef;
  /** The set of issues this check might throw. */
  issc?: errors.$ZodIssueBase;
  check(payload: schemas.ParsePayload<T>): util.MaybeAsync<void>;
  onattach: ((schema: schemas.$ZodType) => void)[];
}

export interface $ZodCheck<in T = never> {
  _zod: $ZodCheckInternals<T>;
}

export const $ZodCheck: core.$constructor<$ZodCheck<any>> = /*@__PURE__*/ core.$constructor(
  "$ZodCheck",
  (inst, def) => {
    inst._zod ??= {} as any;
    inst._zod.def = def;
    inst._zod.onattach ??= [];
  }
);

///////////////////////////////////////
/////      $ZodCheckLessThan      /////
///////////////////////////////////////
export interface $ZodCheckLessThanDef extends $ZodCheckDef {
  check: "less_than";
  value: util.Numeric;
  inclusive: boolean;
}

export interface $ZodCheckLessThanInternals<T extends util.Numeric = util.Numeric> extends $ZodCheckInternals<T> {
  def: $ZodCheckLessThanDef;
  issc: errors.$ZodIssueTooBig<T>;
}

const numericOriginMap = {
  number: "number",
  bigint: "bigint",
  object: "date",
} as const;
export interface $ZodCheckLessThan<T extends util.Numeric = util.Numeric> extends $ZodCheck<T> {
  _zod: $ZodCheckLessThanInternals<T>;
}

export const $ZodCheckLessThan: core.$constructor<$ZodCheckLessThan> = /*@__PURE__*/ core.$constructor(
  "$ZodCheckLessThan",
  (inst, def) => {
    $ZodCheck.init(inst, def);
    const origin = numericOriginMap[typeof def.value as "number" | "bigint" | "object"];

    inst._zod.onattach.push((inst) => {
      const bag = inst._zod.bag;
      const curr = (def.inclusive ? bag.maximum : bag.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
      if (def.value < curr) {
        if (def.inclusive) bag.maximum = def.value;
        else bag.exclusiveMaximum = def.value;
      }
    });

    inst._zod.check = (payload) => {
      if (def.inclusive ? payload.value <= def.value : payload.value < def.value) {
        return;
      }

      payload.issues.push({
        origin,
        code: "too_big",
        maximum: def.value as number,
        input: payload.value,
        inclusive: def.inclusive,
        inst,
        continue: !def.abort,
      });
    };
  }
);

/////////////////////////////////////
/////    $ZodCheckGreaterThan    /////
/////////////////////////////////////
export interface $ZodCheckGreaterThanDef extends $ZodCheckDef {
  check: "greater_than";
  value: util.Numeric;
  inclusive: boolean;
}

export interface $ZodCheckGreaterThanInternals<T extends util.Numeric = util.Numeric> extends $ZodCheckInternals<T> {
  def: $ZodCheckGreaterThanDef;
  issc: errors.$ZodIssueTooSmall<T>;
}

export interface $ZodCheckGreaterThan<T extends util.Numeric = util.Numeric> extends $ZodCheck<T> {
  _zod: $ZodCheckGreaterThanInternals<T>;
}

export const $ZodCheckGreaterThan: core.$constructor<$ZodCheckGreaterThan> = /*@__PURE__*/ core.$constructor(
  "$ZodCheckGreaterThan",
  (inst, def) => {
    $ZodCheck.init(inst, def);
    const origin = numericOriginMap[typeof def.value as "number" | "bigint" | "object"];

    inst._zod.onattach.push((inst) => {
      const bag = inst._zod.bag;
      const curr = (def.inclusive ? bag.minimum : bag.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
      if (def.value > curr) {
        if (def.inclusive) bag.minimum = def.value;
        else bag.exclusiveMinimum = def.value;
      }
    });

    inst._zod.check = (payload) => {
      if (def.inclusive ? payload.value >= def.value : payload.value > def.value) {
        return;
      }

      payload.issues.push({
        origin,
        code: "too_small",
        minimum: def.value as number,
        input: payload.value,
        inclusive: def.inclusive,
        inst,
        continue: !def.abort,
      });
    };
  }
);

/////////////////////////////////////
/////    $ZodCheckMultipleOf    /////
/////////////////////////////////////
// https://stackoverflow.com/questions/3966484/why-does-modulus-operator-return-fractional-number-in-javascript/31711034#31711034

export interface $ZodCheckMultipleOfDef<T extends number | bigint = number | bigint> extends $ZodCheckDef {
  check: "multiple_of";
  value: T;
}

export interface $ZodCheckMultipleOfInternals<T extends number | bigint = number | bigint>
  extends $ZodCheckInternals<T> {
  def: $ZodCheckMultipleOfDef<T>;
  issc: errors.$ZodIssueNotMultipleOf;
}

export interface $ZodCheckMultipleOf<T extends number | bigint = number | bigint> extends $ZodCheck<T> {
  _zod: $ZodCheckMultipleOfInternals<T>;
}

export const $ZodCheckMultipleOf: core.$constructor<$ZodCheckMultipleOf<number | bigint>> =
  /*@__PURE__*/ core.$constructor("$ZodCheckMultipleOf", (inst, def) => {
    $ZodCheck.init(inst, def);

    inst._zod.onattach.push((inst) => {
      inst._zod.bag.multipleOf ??= def.value;
    });

    inst._zod.check = (payload) => {
      if (typeof payload.value !== typeof def.value)
        throw new Error("Cannot mix number and bigint in multiple_of check.");
      const isMultiple =
        typeof payload.value === "bigint"
          ? payload.value % (def.value as bigint) === BigInt(0)
          : util.floatSafeRemainder(payload.value, def.value as number) === 0;

      if (isMultiple) return;
      payload.issues.push({
        origin: typeof payload.value as "number",
        code: "not_multiple_of",
        divisor: def.value as number,
        input: payload.value,
        inst,
        continue: !def.abort,
      });
    };
  });

/////////////////////////////////////
/////    $ZodCheckFinite    /////
/////////////////////////////////////
// interface $ZodCheckFiniteDef extends $ZodCheckDef {
//   check: "finite";
// }

// export interface $ZodCheckFinite extends $ZodCheckInternals<number> {
//   _def: $ZodCheckFiniteDef;
//   _issc:
//     | errors.$ZodIssueTooBig<"number", number>
//     | errors.$ZodIssueTooSmall<"number", number>;
// }

// export const $ZodCheckFinite: core.$constructor<$ZodCheckFinite> =
//   core.$constructor("$ZodCheckFinite", (inst, def) => {
//     $ZodCheck.init(inst, def);

//     inst._zod.onattach = (inst) => {
//       inst["_bag"].finite = true;
//     };

//     inst._zod.check = (payload) => {
//       if (Number.isFinite(payload.value)) return;
//       payload.issues.push({
//         origin: "number",
//         ...(payload.value === Number.POSITIVE_INFINITY
//           ? {
//               code: "too_big",
//               maximum: Number.POSITIVE_INFINITY,
//             }
//           : {
//               code: "too_small",
//               minimum: Number.NEGATIVE_INFINITY,
//             }),
//         // code: payload.value === Number.POSITIVE_INFINITY ? "too_big" : "too_big",
//         // maximum: Number.POSITIVE_INFINITY,
//         inclusive: false,
//         input: payload.value,
//         inst,
//       });
//     };
//   });

///////////////////////////////////////
/////    $ZodCheckNumberFormat    /////
///////////////////////////////////////

export type $ZodNumberFormats = "int32" | "uint32" | "float32" | "float64" | "safeint";

export interface $ZodCheckNumberFormatDef extends $ZodCheckDef {
  check: "number_format";
  format: $ZodNumberFormats;
  // abort?: boolean;
}

export interface $ZodCheckNumberFormatInternals extends $ZodCheckInternals<number> {
  def: $ZodCheckNumberFormatDef;
  issc: errors.$ZodIssueInvalidType | errors.$ZodIssueTooBig<"number"> | errors.$ZodIssueTooSmall<"number">;
  // bag: util.LoosePartial<{
  //   minimum?: number | undefined;
  // }>;
}

export interface $ZodCheckNumberFormat extends $ZodCheck<number> {
  _zod: $ZodCheckNumberFormatInternals;
}

export const $ZodCheckNumberFormat: core.$constructor<$ZodCheckNumberFormat> = /*@__PURE__*/ core.$constructor(
  "$ZodCheckNumberFormat",
  (inst, def) => {
    $ZodCheck.init(inst, def); // no format checks
    def.format = def.format || "float64";

    const isInt = def.format?.includes("int");
    const origin = isInt ? "int" : "number";
    const [minimum, maximum] = util.NUMBER_FORMAT_RANGES[def.format];

    inst._zod.onattach.push((inst) => {
      const bag = inst._zod.bag;
      bag.format = def.format;
      bag.minimum = minimum;
      bag.maximum = maximum;
      if (isInt) bag.pattern = regexes.integer;
    });

    inst._zod.check = (payload) => {
      const input = payload.value;

      if (isInt) {
        if (!Number.isInteger(input)) {
          // invalid_format issue
          // payload.issues.push({
          //   expected: def.format,
          //   format: def.format,
          //   code: "invalid_format",
          //   input,
          //   inst,
          // });
          // invalid_type issue
          payload.issues.push({
            expected: origin,
            format: def.format,
            code: "invalid_type",
            input,
            inst,
          });

          return;

          // not_multiple_of issue
          // payload.issues.push({
          //   code: "not_multiple_of",
          //   origin: "number",
          //   input,
          //   inst,
          //   divisor: 1,
          // });
        }
        if (!Number.isSafeInteger(input)) {
          if (input > 0) {
            // too_big
            payload.issues.push({
              input,
              code: "too_big",
              maximum: Number.MAX_SAFE_INTEGER,
              note: "Integers must be within the safe integer range.",
              inst,
              origin,
              continue: !def.abort,
            });
          } else {
            // too_small
            payload.issues.push({
              input,
              code: "too_small",
              minimum: Number.MIN_SAFE_INTEGER,
              note: "Integers must be within the safe integer range.",
              inst,
              origin,
              continue: !def.abort,
            });
          }

          return;
        }
      }

      if (input < minimum) {
        payload.issues.push({
          origin: "number",
          input,
          code: "too_small",
          minimum,
          inclusive: true,
          inst,
          continue: !def.abort,
        });
      }

      if (input > maximum) {
        payload.issues.push({
          origin: "number",
          input,
          code: "too_big",
          maximum,
          inst,
        } as any);
      }
    };
  }
);

/////////////////////////////////////
/////    $ZodCheckBigIntFormat    /////
/////////////////////////////////////

export type $ZodBigIntFormats = "int64" | "uint64";

export interface $ZodCheckBigIntFormatDef extends $ZodCheckDef {
  check: "bigint_format";
  format: $ZodBigIntFormats | undefined;
}

export interface $ZodCheckBigIntFormatInternals extends $ZodCheckInternals<bigint> {
  def: $ZodCheckBigIntFormatDef;
  issc: errors.$ZodIssueTooBig<"bigint"> | errors.$ZodIssueTooSmall<"bigint">;
}

export interface $ZodCheckBigIntFormat extends $ZodCheck<bigint> {
  _zod: $ZodCheckBigIntFormatInternals;
}

export const $ZodCheckBigIntFormat: core.$constructor<$ZodCheckBigIntFormat> = /*@__PURE__*/ core.$constructor(
  "$ZodCheckBigIntFormat",
  (inst, def) => {
    $ZodCheck.init(inst, def); // no format checks

    const [minimum, maximum] = util.BIGINT_FORMAT_RANGES[def.format!];

    inst._zod.onattach.push((inst) => {
      const bag = inst._zod.bag;
      bag.format = def.format;
      bag.minimum = minimum;
      bag.maximum = maximum;
    });

    inst._zod.check = (payload) => {
      const input = payload.value;

      if (input < minimum) {
        payload.issues.push({
          origin: "bigint",
          input,
          code: "too_small",
          minimum: minimum as any,
          inclusive: true,
          inst,
          continue: !def.abort,
        });
      }

      if (input > maximum) {
        payload.issues.push({
          origin: "bigint",
          input,
          code: "too_big",
          maximum,
          inst,
        } as any);
      }
    };
  }
);

//////////////////////////////////
/////    $ZodCheckMaxSize    /////
//////////////////////////////////
export interface $ZodCheckMaxSizeDef extends $ZodCheckDef {
  check: "max_size";
  maximum: number;
}

export interface $ZodCheckMaxSizeInternals<T extends util.HasSize = util.HasSize> extends $ZodCheckInternals<T> {
  def: $ZodCheckMaxSizeDef;
  issc: errors.$ZodIssueTooBig<T>;
}

export interface $ZodCheckMaxSize<T extends util.HasSize = util.HasSize> extends $ZodCheck<T> {
  _zod: $ZodCheckMaxSizeInternals<T>;
}

export const $ZodCheckMaxSize: core.$constructor<$ZodCheckMaxSize> = /*@__PURE__*/ core.$constructor(
  "$ZodCheckMaxSize",
  (inst, def) => {
    $ZodCheck.init(inst, def);

    inst._zod.def.when ??= (payload) => {
      const val = payload.value;
      return !util.nullish(val) && (val as any).size !== undefined;
    };

    inst._zod.onattach.push((inst) => {
      const curr = (inst._zod.bag.maximum ?? Number.POSITIVE_INFINITY) as number;
      if (def.maximum < curr) inst._zod.bag.maximum = def.maximum;
    });

    inst._zod.check = (payload) => {
      const input = payload.value;
      const size = input.size;

      if (size <= def.maximum) return;
      payload.issues.push({
        origin: util.getSizableOrigin(input),
        code: "too_big",
        maximum: def.maximum,
        input,
        inst,
        continue: !def.abort,
      });
    };
  }
);

//////////////////////////////////
/////    $ZodCheckMinSize    /////
//////////////////////////////////
export interface $ZodCheckMinSizeDef extends $ZodCheckDef {
  check: "min_size";
  minimum: number;
}

export interface $ZodCheckMinSizeInternals<T extends util.HasSize = util.HasSize> extends $ZodCheckInternals<T> {
  def: $ZodCheckMinSizeDef;
  issc: errors.$ZodIssueTooSmall<T>;
}

export interface $ZodCheckMinSize<T extends util.HasSize = util.HasSize> extends $ZodCheck<T> {
  _zod: $ZodCheckMinSizeInternals<T>;
}

export const $ZodCheckMinSize: core.$constructor<$ZodCheckMinSize> = /*@__PURE__*/ core.$constructor(
  "$ZodCheckMinSize",
  (inst, def) => {
    $ZodCheck.init(inst, def);

    inst._zod.def.when ??= (payload) => {
      const val = payload.value;
      return !util.nullish(val) && (val as any).size !== undefined;
    };

    inst._zod.onattach.push((inst) => {
      const curr = (inst._zod.bag.minimum ?? Number.NEGATIVE_INFINITY) as number;
      if (def.minimum > curr) inst._zod.bag.minimum = def.minimum;
    });

    inst._zod.check = (payload) => {
      const input = payload.value;
      const size = input.size;

      if (size >= def.minimum) return;
      payload.issues.push({
        origin: util.getSizableOrigin(input),
        code: "too_small",
        minimum: def.minimum,
        input,
        inst,
        continue: !def.abort,
      });
    };
  }
);

/////////////////////////////////////
/////    $ZodCheckSizeEquals    /////
/////////////////////////////////////
export interface $ZodCheckSizeEqualsDef extends $ZodCheckDef {
  check: "size_equals";
  size: number;
}

export interface $ZodCheckSizeEqualsInternals<T extends util.HasSize = util.HasSize> extends $ZodCheckInternals<T> {
  def: $ZodCheckSizeEqualsDef;
  issc: errors.$ZodIssueTooBig<T> | errors.$ZodIssueTooSmall<T>;
}

export interface $ZodCheckSizeEquals<T extends util.HasSize = util.HasSize> extends $ZodCheck<T> {
  _zod: $ZodCheckSizeEqualsInternals<T>;
}

export const $ZodCheckSizeEquals: core.$constructor<$ZodCheckSizeEquals> = /*@__PURE__*/ core.$constructor(
  "$ZodCheckSizeEquals",
  (inst, def) => {
    $ZodCheck.init(inst, def);

    inst._zod.def.when ??= (payload) => {
      const val = payload.value;
      return !util.nullish(val) && (val as any).size !== undefined;
    };

    inst._zod.onattach.push((inst) => {
      const bag = inst._zod.bag;
      bag.minimum = def.size;
      bag.maximum = def.size;
      bag.size = def.size;
    });

    inst._zod.check = (payload) => {
      const input = payload.value;
      const size = input.size;
      if (size === def.size) return;

      const tooBig = size > def.size;
      payload.issues.push({
        origin: util.getSizableOrigin(input),
        ...(tooBig ? { code: "too_big", maximum: def.size } : { code: "too_small", minimum: def.size }),
        inclusive: true,
        exact: true,
        input: payload.value,
        inst,
        continue: !def.abort,
      });
    };
  }
);

//////////////////////////////////
/////    $ZodCheckMaxLength    /////
//////////////////////////////////

export interface $ZodCheckMaxLengthDef extends $ZodCheckDef {
  check: "max_length";
  maximum: number;
}

export interface $ZodCheckMaxLengthInternals<T extends util.HasLength = util.HasLength> extends $ZodCheckInternals<T> {
  def: $ZodCheckMaxLengthDef;
  issc: errors.$ZodIssueTooBig<T>;
}

export interface $ZodCheckMaxLength<T extends util.HasLength = util.HasLength> extends $ZodCheck<T> {
  _zod: $ZodCheckMaxLengthInternals<T>;
}

export const $ZodCheckMaxLength: core.$constructor<$ZodCheckMaxLength> = /*@__PURE__*/ core.$constructor(
  "$ZodCheckMaxLength",
  (inst, def) => {
    $ZodCheck.init(inst, def);

    inst._zod.def.when ??= (payload) => {
      const val = payload.value;
      return !util.nullish(val) && (val as any).length !== undefined;
    };

    inst._zod.onattach.push((inst) => {
      const curr = (inst._zod.bag.maximum ?? Number.POSITIVE_INFINITY) as number;
      if (def.maximum < curr) inst._zod.bag.maximum = def.maximum;
    });

    inst._zod.check = (payload) => {
      const input = payload.value;
      const length = input.length;

      if (length <= def.maximum) return;
      const origin = util.getLengthableOrigin(input);
      payload.issues.push({
        origin,
        code: "too_big",
        maximum: def.maximum,
        inclusive: true,
        input,
        inst,
        continue: !def.abort,
      });
    };
  }
);

//////////////////////////////////
/////    $ZodCheckMinLength    /////
//////////////////////////////////
export interface $ZodCheckMinLengthDef extends $ZodCheckDef {
  check: "min_length";
  minimum: number;
}

export interface $ZodCheckMinLengthInternals<T extends util.HasLength = util.HasLength> extends $ZodCheckInternals<T> {
  def: $ZodCheckMinLengthDef;
  issc: errors.$ZodIssueTooSmall<T>;
}

export interface $ZodCheckMinLength<T extends util.HasLength = util.HasLength> extends $ZodCheck<T> {
  _zod: $ZodCheckMinLengthInternals<T>;
}

export const $ZodCheckMinLength: core.$constructor<$ZodCheckMinLength> = /*@__PURE__*/ core.$constructor(
  "$ZodCheckMinLength",
  (inst, def) => {
    $ZodCheck.init(inst, def);

    inst._zod.def.when ??= (payload) => {
      const val = payload.value;
      return !util.nullish(val) && (val as any).length !== undefined;
    };

    inst._zod.onattach.push((inst) => {
      const curr = (inst._zod.bag.minimum ?? Number.NEGATIVE_INFINITY) as number;
      if (def.minimum > curr) inst._zod.bag.minimum = def.minimum;
    });

    inst._zod.check = (payload) => {
      const input = payload.value;
      const length = input.length;

      if (length >= def.minimum) return;
      const origin = util.getLengthableOrigin(input);
      payload.issues.push({
        origin,
        code: "too_small",
        minimum: def.minimum,
        inclusive: true,
        input,
        inst,
        continue: !def.abort,
      });
    };
  }
);

/////////////////////////////////////
/////    $ZodCheckLengthEquals    /////
/////////////////////////////////////
export interface $ZodCheckLengthEqualsDef extends $ZodCheckDef {
  check: "length_equals";
  length: number;
}

export interface $ZodCheckLengthEqualsInternals<T extends util.HasLength = util.HasLength>
  extends $ZodCheckInternals<T> {
  def: $ZodCheckLengthEqualsDef;
  issc: errors.$ZodIssueTooBig<T> | errors.$ZodIssueTooSmall<T>;
}

export interface $ZodCheckLengthEquals<T extends util.HasLength = util.HasLength> extends $ZodCheck<T> {
  _zod: $ZodCheckLengthEqualsInternals<T>;
}

export const $ZodCheckLengthEquals: core.$constructor<$ZodCheckLengthEquals> = /*@__PURE__*/ core.$constructor(
  "$ZodCheckLengthEquals",
  (inst, def) => {
    $ZodCheck.init(inst, def);

    inst._zod.def.when ??= (payload) => {
      const val = payload.value;
      return !util.nullish(val) && (val as any).length !== undefined;
    };

    inst._zod.onattach.push((inst) => {
      const bag = inst._zod.bag;
      bag.minimum = def.length;
      bag.maximum = def.length;
      bag.length = def.length;
    });

    inst._zod.check = (payload) => {
      const input = payload.value;
      const length = input.length;
      if (length === def.length) return;
      const origin = util.getLengthableOrigin(input);
      const tooBig = length > def.length;
      payload.issues.push({
        origin,
        ...(tooBig ? { code: "too_big", maximum: def.length } : { code: "too_small", minimum: def.length }),
        inclusive: true,
        exact: true,
        input: payload.value,
        inst,
        continue: !def.abort,
      });
    };
  }
);

/////////////////////////////////////////////
/////    $ZodCheckStringFormatRegex    /////
/////////////////////////////////////////////
export type $ZodStringFormats =
  | "email"
  | "url"
  | "emoji"
  | "uuid"
  | "guid"
  | "nanoid"
  | "cuid"
  | "cuid2"
  | "ulid"
  | "xid"
  | "ksuid"
  | "datetime"
  | "date"
  | "time"
  | "duration"
  | "ipv4"
  | "ipv6"
  | "cidrv4"
  | "cidrv6"
  | "base64"
  | "base64url"
  | "json_string"
  | "e164"
  | "lowercase"
  | "uppercase"
  | "regex"
  | "jwt"
  | "starts_with"
  | "ends_with"
  | "includes";
export interface $ZodCheckStringFormatDef<Format extends string = string> extends $ZodCheckDef {
  check: "string_format";
  format: Format;
  pattern?: RegExp | undefined;
}

export interface $ZodCheckStringFormatInternals extends $ZodCheckInternals<string> {
  def: $ZodCheckStringFormatDef;
  issc: errors.$ZodIssueInvalidStringFormat;
}

export interface $ZodCheckStringFormat extends $ZodCheck<string> {
  _zod: $ZodCheckStringFormatInternals;
}

export const $ZodCheckStringFormat: core.$constructor<$ZodCheckStringFormat> = /*@__PURE__*/ core.$constructor(
  "$ZodCheckStringFormat",
  (inst, def) => {
    $ZodCheck.init(inst, def);

    inst._zod.onattach.push((inst) => {
      const bag = inst._zod.bag as schemas.$ZodStringInternals<unknown>["bag"];
      bag.format = def.format;
      if (def.pattern) {
        bag.patterns ??= new Set();
        bag.patterns.add(def.pattern);
      }
    });

    if (def.pattern)
      inst._zod.check ??= (payload) => {
        def.pattern!.lastIndex = 0;
        if (def.pattern!.test(payload.value)) return;
        payload.issues.push({
          origin: "string",
          code: "invalid_format",
          format: def.format,
          input: payload.value,
          ...(def.pattern ? { pattern: def.pattern.toString() } : {}),
          inst,
          continue: !def.abort,
        });
      };
    else inst._zod.check ??= () => {};
  }
);

////////////////////////////////
/////    $ZodCheckRegex    /////
////////////////////////////////
export interface $ZodCheckRegexDef extends $ZodCheckStringFormatDef {
  format: "regex";
  pattern: RegExp;
}

export interface $ZodCheckRegexInternals extends $ZodCheckInternals<string> {
  def: $ZodCheckRegexDef;
  issc: errors.$ZodIssueInvalidStringFormat;
}

export interface $ZodCheckRegex extends $ZodCheck<string> {
  _zod: $ZodCheckRegexInternals;
}

export const $ZodCheckRegex: core.$constructor<$ZodCheckRegex> = /*@__PURE__*/ core.$constructor(
  "$ZodCheckRegex",
  (inst, def) => {
    $ZodCheckStringFormat.init(inst, def);

    inst._zod.check = (payload) => {
      def.pattern.lastIndex = 0;
      if (def.pattern.test(payload.value)) return;
      payload.issues.push({
        origin: "string",
        code: "invalid_format",
        format: "regex",
        input: payload.value,
        pattern: def.pattern.toString(),
        inst,
        continue: !def.abort,
      });
    };
  }
);

///////////////////////////////////
/////    $ZodCheckJSONString    /////
///////////////////////////////////
// interface $ZodCheckJSONStringDef extends $ZodCheckStringFormatDef<"json_string"> {
//   // check: "string_format";
//   // format: "json_string";
//   // error?: errors.$ZodErrorMap<errors.$ZodIssueInvalidStringFormat> | undefined;
// }

// export interface $ZodCheckJSONString extends $ZodCheckStringFormat {
//   _def: $ZodCheckJSONStringDef;
// }

// export const $ZodCheckJSONString: core.$constructor<$ZodCheckJSONString> = /*@__PURE__*/ core.$constructor(
//   "$ZodCheckJSONString",
//   (inst, def) => {
//     $ZodCheck.init(inst, def);

//     inst._zod.check = (payload) => {
//       try {
//         JSON.parse(payload.value);
//         return;
//       } catch (_) {
//         payload.issues.push({
//           origin: "string",
//           code: "invalid_format",
//           format: def.format,
//           input: payload.value,
//           inst,
//           continue: !def.abort,
//         });
//       }
//     };
//   }
// );

//////////////////////////////////////
/////    $ZodCheckLowerCase    /////
//////////////////////////////////////
export interface $ZodCheckLowerCaseDef extends $ZodCheckStringFormatDef<"lowercase"> {}

export interface $ZodCheckLowerCaseInternals extends $ZodCheckInternals<string> {
  def: $ZodCheckLowerCaseDef;
  issc: errors.$ZodIssueInvalidStringFormat;
}

export interface $ZodCheckLowerCase extends $ZodCheck<string> {
  _zod: $ZodCheckLowerCaseInternals;
}

export const $ZodCheckLowerCase: core.$constructor<$ZodCheckLowerCase> = /*@__PURE__*/ core.$constructor(
  "$ZodCheckLowerCase",
  (inst, def) => {
    def.pattern ??= regexes.lowercase;
    $ZodCheckStringFormat.init(inst, def);
  }
);

//////////////////////////////////////
/////    $ZodCheckUpperCase    /////
//////////////////////////////////////
export interface $ZodCheckUpperCaseDef extends $ZodCheckStringFormatDef<"uppercase"> {}

export interface $ZodCheckUpperCaseInternals extends $ZodCheckInternals<string> {
  def: $ZodCheckUpperCaseDef;
  issc: errors.$ZodIssueInvalidStringFormat;
}

export interface $ZodCheckUpperCase extends $ZodCheck<string> {
  _zod: $ZodCheckUpperCaseInternals;
}

export const $ZodCheckUpperCase: core.$constructor<$ZodCheckUpperCase> = /*@__PURE__*/ core.$constructor(
  "$ZodCheckUpperCase",
  (inst, def) => {
    def.pattern ??= regexes.uppercase;
    $ZodCheckStringFormat.init(inst, def);
  }
);

///////////////////////////////////
/////    $ZodCheckIncludes    /////
///////////////////////////////////
export interface $ZodCheckIncludesDef extends $ZodCheckStringFormatDef<"includes"> {
  includes: string;
  position?: number | undefined;
}

export interface $ZodCheckIncludesInternals extends $ZodCheckInternals<string> {
  def: $ZodCheckIncludesDef;
  issc: errors.$ZodIssueInvalidStringFormat;
}

export interface $ZodCheckIncludes extends $ZodCheck<string> {
  _zod: $ZodCheckIncludesInternals;
}

export const $ZodCheckIncludes: core.$constructor<$ZodCheckIncludes> = /*@__PURE__*/ core.$constructor(
  "$ZodCheckIncludes",
  (inst, def) => {
    $ZodCheck.init(inst, def);

    const escapedRegex = util.escapeRegex(def.includes);
    const pattern = new RegExp(typeof def.position === "number" ? `^.{${def.position}}${escapedRegex}` : escapedRegex);
    def.pattern = pattern;
    inst._zod.onattach.push((inst) => {
      const bag = inst._zod.bag as schemas.$ZodStringInternals<unknown>["bag"];
      bag.patterns ??= new Set();
      bag.patterns.add(pattern);
    });

    inst._zod.check = (payload) => {
      if (payload.value.includes(def.includes, def.position)) return;
      payload.issues.push({
        origin: "string",
        code: "invalid_format",
        format: "includes",
        includes: def.includes,
        input: payload.value,
        inst,
        continue: !def.abort,
      });
    };
  }
);

/////////////////////////////////////
/////    $ZodCheckStartsWith    /////
/////////////////////////////////////
export interface $ZodCheckStartsWithDef extends $ZodCheckStringFormatDef<"starts_with"> {
  prefix: string;
}

export interface $ZodCheckStartsWithInternals extends $ZodCheckInternals<string> {
  def: $ZodCheckStartsWithDef;
  issc: errors.$ZodIssueInvalidStringFormat;
}

export interface $ZodCheckStartsWith extends $ZodCheck<string> {
  _zod: $ZodCheckStartsWithInternals;
}

export const $ZodCheckStartsWith: core.$constructor<$ZodCheckStartsWith> = /*@__PURE__*/ core.$constructor(
  "$ZodCheckStartsWith",
  (inst, def) => {
    $ZodCheck.init(inst, def);

    const pattern = new RegExp(`^${util.escapeRegex(def.prefix)}.*`);
    def.pattern ??= pattern;
    inst._zod.onattach.push((inst) => {
      const bag = inst._zod.bag as schemas.$ZodStringInternals<unknown>["bag"];
      bag.patterns ??= new Set();
      bag.patterns.add(pattern);
    });

    inst._zod.check = (payload) => {
      if (payload.value.startsWith(def.prefix)) return;
      payload.issues.push({
        origin: "string",
        code: "invalid_format",
        format: "starts_with",
        prefix: def.prefix,
        input: payload.value,
        inst,
        continue: !def.abort,
      });
    };
  }
);

//////////////////////////////////
/////   $ZodCheckEndsWith    /////
//////////////////////////////////
export interface $ZodCheckEndsWithDef extends $ZodCheckStringFormatDef<"ends_with"> {
  suffix: string;
}

export interface $ZodCheckEndsWithInternals extends $ZodCheckInternals<string> {
  def: $ZodCheckEndsWithDef;
  issc: errors.$ZodIssueInvalidStringFormat;
}

export interface $ZodCheckEndsWith extends $ZodCheckInternals<string> {
  _zod: $ZodCheckEndsWithInternals;
}

export const $ZodCheckEndsWith: core.$constructor<$ZodCheckEndsWith> = /*@__PURE__*/ core.$constructor(
  "$ZodCheckEndsWith",
  (inst, def) => {
    $ZodCheck.init(inst, def);

    const pattern = new RegExp(`.*${util.escapeRegex(def.suffix)}$`);
    def.pattern ??= pattern;
    inst._zod.onattach.push((inst) => {
      const bag = inst._zod.bag as schemas.$ZodStringInternals<unknown>["bag"];
      bag.patterns ??= new Set();
      bag.patterns.add(pattern);
    });

    inst._zod.check = (payload) => {
      if (payload.value.endsWith(def.suffix)) return;
      payload.issues.push({
        origin: "string",
        code: "invalid_format",
        format: "ends_with",
        suffix: def.suffix,
        input: payload.value,
        inst,
        continue: !def.abort,
      });
    };
  }
);

///////////////////////////////////
/////    $ZodCheckProperty    /////
///////////////////////////////////
function handleCheckPropertyResult(
  result: schemas.ParsePayload<unknown>,
  payload: schemas.ParsePayload<unknown>,
  property: string
) {
  if (result.issues.length) {
    payload.issues.push(...util.prefixIssues(property, result.issues));
  }
}
export interface $ZodCheckPropertyDef extends $ZodCheckDef {
  check: "property";
  property: string;
  schema: schemas.$ZodType;
}

export interface $ZodCheckPropertyInternals<T extends object = object> extends $ZodCheckInternals<T> {
  def: $ZodCheckPropertyDef;
  issc: errors.$ZodIssue;
}

export interface $ZodCheckProperty<T extends object = object> extends $ZodCheck<T> {
  _zod: $ZodCheckPropertyInternals<T>;
}

export const $ZodCheckProperty: core.$constructor<$ZodCheckProperty> = /*@__PURE__*/ core.$constructor(
  "$ZodCheckProperty",
  (inst, def) => {
    $ZodCheck.init(inst, def);

    inst._zod.check = (payload) => {
      const result = def.schema._zod.run(
        {
          value: (payload.value as any)[def.property],
          issues: [],
        },
        {}
      );

      if (result instanceof Promise) {
        return result.then((result) => handleCheckPropertyResult(result, payload, def.property));
      }

      handleCheckPropertyResult(result, payload, def.property);
      return;
    };
  }
);

///////////////////////////////////
/////    $ZodCheckMimeType    /////
///////////////////////////////////
export interface $ZodCheckMimeTypeDef extends $ZodCheckDef {
  check: "mime_type";
  mime: util.MimeTypes[];
}

export interface $ZodCheckMimeTypeInternals<T extends File = File> extends $ZodCheckInternals<T> {
  def: $ZodCheckMimeTypeDef;
  issc: errors.$ZodIssueInvalidValue;
}

export interface $ZodCheckMimeType<T extends File = File> extends $ZodCheck<T> {
  _zod: $ZodCheckMimeTypeInternals<T>;
}

export const $ZodCheckMimeType: core.$constructor<$ZodCheckMimeType> = /*@__PURE__*/ core.$constructor(
  "$ZodCheckMimeType",
  (inst, def) => {
    $ZodCheck.init(inst, def);
    const mimeSet = new Set(def.mime);
    inst._zod.onattach.push((inst) => {
      inst._zod.bag.mime = def.mime;
    });
    inst._zod.check = (payload) => {
      if (mimeSet.has(payload.value.type)) return;
      payload.issues.push({
        code: "invalid_value",
        values: def.mime,
        input: payload.value.type,
        inst,
      });
    };
  }
);

///////////////////////////////////
/////    $ZodCheckFileName    /////
///////////////////////////////////
// interface $ZodCheckFileNameDef extends $ZodCheckDef {
//   check: "file_name";
//   fileName: string;
//   error?: errors.$ZodErrorMap<errors.$ZodIssueInvalidType> | undefined;
// }
// export interface $ZodCheckFileName<T extends File = File>
//   extends $ZodCheckInternals<T> {
//   _def: $ZodCheckFileNameDef;
// }

// export const $ZodCheckFileName: core.$constructor<$ZodCheckFileName> =
//   core.$constructor("$ZodCheckFileName", (inst, def) => {
//     $ZodCheck.init(inst, def);

//     inst._zod.check = (payload) => {
//       if (def.fileName === payload.value.name) return;
//       payload.issues.push({
//         origin: "file",
//         code: "invalid_value",
//         options: [def.fileName],
//         input: payload.value,
//         path: ["name"],
//         inst,
//       });
//     };
//   });

///////////////////////////////////
/////    $ZodCheckOverwrite    /////
///////////////////////////////////
export interface $ZodCheckOverwriteDef<T = unknown> extends $ZodCheckDef {
  check: "overwrite";
  tx(value: T): T;
}

export interface $ZodCheckOverwriteInternals<T = unknown> extends $ZodCheckInternals<T> {
  def: $ZodCheckOverwriteDef<T>;
  issc: never;
}

export interface $ZodCheckOverwrite<T = unknown> extends $ZodCheck<T> {
  _zod: $ZodCheckOverwriteInternals<T>;
}

export const $ZodCheckOverwrite: core.$constructor<$ZodCheckOverwrite> = /*@__PURE__*/ core.$constructor(
  "$ZodCheckOverwrite",
  (inst, def) => {
    $ZodCheck.init(inst, def);

    inst._zod.check = (payload) => {
      payload.value = def.tx(payload.value);
    };
  }
);

// ///////////////////////////////
// /////    $ZodCheckTrim    /////
// ///////////////////////////////
// export interface $ZodCheckTrimDef extends $ZodCheckDef {
//   check: "trim";
//   error?: errors.$ZodErrorMap<never> | undefined;
// }
// export interface $ZodCheckTrim extends $ZodCheckInternals<string> {
//   _def: $ZodCheckTrimDef;
// }

// export const $ZodCheckTrim: core.$constructor<$ZodCheckTrim> =
//   core.$constructor("$ZodCheckTrim", (inst, def) => {
//     $ZodCheck.init(inst, def);

//     inst._zod.check = (payload) => {
//       payload.value = payload.value.trim();
//     };
//   });

// //////////////////////////////////////
// /////    $ZodCheckNormalize    /////
// //////////////////////////////////////
// interface $ZodCheckNormalizeDef extends $ZodCheckDef {
//   check: "normalize";
//   error?: errors.$ZodErrorMap<never> | undefined;
// }

// export interface $ZodCheckNormalize extends $ZodCheckInternals<string> {
//   _def: $ZodCheckNormalizeDef;
// }

// export const $ZodCheckNormalize: core.$constructor<$ZodCheckNormalize> =
//   core.$constructor("$ZodCheckNormalize", (inst, def) => {
//     $ZodCheck.init(inst, def);

//     inst._zod.check = (payload) => {
//       payload.value = payload.value.normalize();
//     };
//   });

export type $ZodChecks =
  | $ZodCheckLessThan
  | $ZodCheckGreaterThan
  | $ZodCheckMultipleOf
  | $ZodCheckNumberFormat
  | $ZodCheckBigIntFormat
  | $ZodCheckMaxSize
  | $ZodCheckMinSize
  | $ZodCheckSizeEquals
  | $ZodCheckMaxLength
  | $ZodCheckMinLength
  | $ZodCheckLengthEquals
  | $ZodCheckStringFormat
  | $ZodCheckProperty
  | $ZodCheckMimeType
  | $ZodCheckOverwrite;

export type $ZodStringFormatChecks =
  | $ZodCheckRegex
  | $ZodCheckLowerCase
  | $ZodCheckUpperCase
  | $ZodCheckIncludes
  | $ZodCheckStartsWith
  | $ZodCheckEndsWith
  | schemas.$ZodStringFormatTypes; // union of string format schema types

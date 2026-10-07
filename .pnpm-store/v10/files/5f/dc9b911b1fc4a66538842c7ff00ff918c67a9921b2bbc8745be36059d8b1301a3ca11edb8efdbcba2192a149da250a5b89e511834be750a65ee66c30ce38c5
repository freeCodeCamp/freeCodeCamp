import * as core from "../core/index.js";
import * as schemas from "./schemas.js";

export function string<T = unknown>(params?: string | core.$ZodStringParams): schemas.ZodMiniString<T> {
  return core._coercedString(schemas.ZodMiniString, params) as schemas.ZodMiniString<T>;
}

export function number<T = unknown>(params?: string | core.$ZodNumberParams): schemas.ZodMiniNumber<T> {
  return core._coercedNumber(schemas.ZodMiniNumber, params) as schemas.ZodMiniNumber<T>;
}

export function boolean<T = unknown>(params?: string | core.$ZodBooleanParams): schemas.ZodMiniBoolean<T> {
  return core._coercedBoolean(schemas.ZodMiniBoolean, params) as schemas.ZodMiniBoolean<T>;
}

export function bigint<T = unknown>(params?: string | core.$ZodBigIntParams): schemas.ZodMiniBigInt<T> {
  return core._coercedBigint(schemas.ZodMiniBigInt, params) as schemas.ZodMiniBigInt<T>;
}

export function date<T = unknown>(params?: string | core.$ZodDateParams): schemas.ZodMiniDate<T> {
  return core._coercedDate(schemas.ZodMiniDate, params) as schemas.ZodMiniDate<T>;
}

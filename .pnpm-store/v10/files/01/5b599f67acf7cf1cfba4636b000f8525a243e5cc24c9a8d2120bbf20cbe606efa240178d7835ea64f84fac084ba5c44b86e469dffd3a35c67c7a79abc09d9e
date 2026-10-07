import * as core from "../core/index.js";
import * as schemas from "./schemas.js";

export interface ZodCoercedString<T = unknown> extends schemas._ZodString<core.$ZodStringInternals<T>> {}
export function string<T = unknown>(params?: string | core.$ZodStringParams): ZodCoercedString<T> {
  return core._coercedString(schemas.ZodString, params) as any;
}

export interface ZodCoercedNumber<T = unknown> extends schemas._ZodNumber<core.$ZodNumberInternals<T>> {}
export function number<T = unknown>(params?: string | core.$ZodNumberParams): ZodCoercedNumber<T> {
  return core._coercedNumber(schemas.ZodNumber, params) as ZodCoercedNumber<T>;
}

export interface ZodCoercedBoolean<T = unknown> extends schemas._ZodBoolean<core.$ZodBooleanInternals<T>> {}
export function boolean<T = unknown>(params?: string | core.$ZodBooleanParams): ZodCoercedBoolean<T> {
  return core._coercedBoolean(schemas.ZodBoolean, params) as ZodCoercedBoolean<T>;
}

export interface ZodCoercedBigInt<T = unknown> extends schemas._ZodBigInt<core.$ZodBigIntInternals<T>> {}
export function bigint<T = unknown>(params?: string | core.$ZodBigIntParams): ZodCoercedBigInt<T> {
  return core._coercedBigint(schemas.ZodBigInt, params) as ZodCoercedBigInt<T>;
}

export interface ZodCoercedDate<T = unknown> extends schemas._ZodDate<core.$ZodDateInternals<T>> {}
export function date<T = unknown>(params?: string | core.$ZodDateParams): ZodCoercedDate<T> {
  return core._coercedDate(schemas.ZodDate, params) as ZodCoercedDate<T>;
}

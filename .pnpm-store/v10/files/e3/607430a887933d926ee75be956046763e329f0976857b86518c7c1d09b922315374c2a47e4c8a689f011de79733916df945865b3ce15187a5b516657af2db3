export * as core from "../core/index.js";
export * from "./schemas.js";
export * from "./checks.js";
export * from "./errors.js";
export * from "./parse.js";
export * from "./compat.js";

// zod-specified
import { config } from "../core/index.js";
import en from "../locales/en.js";
config(en());

export type { infer, output, input } from "../core/index.js";
export {
  globalRegistry,
  type GlobalMeta,
  registry,
  config,
  function,
  $output,
  $input,
  $brand,
  clone,
  regexes,
  treeifyError,
  prettifyError,
  formatError,
  flattenError,
  toJSONSchema,
  TimePrecision,
  NEVER,
} from "../core/index.js";

export * as locales from "../locales/index.js";

// iso
// must be exported from top-level
// https://github.com/colinhacks/zod/issues/4491
export { ZodISODateTime, ZodISODate, ZodISOTime, ZodISODuration } from "./iso.js";
export * as iso from "./iso.js";

// coerce
export type {
  ZodCoercedString,
  ZodCoercedNumber,
  ZodCoercedBigInt,
  ZodCoercedBoolean,
  ZodCoercedDate,
} from "./coerce.js";
export * as coerce from "./coerce.js";

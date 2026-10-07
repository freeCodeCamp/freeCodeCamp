import * as core from "../core/index.js";
import { $ZodError } from "../core/index.js";

/** @deprecated Use `z.core.$ZodIssue` from `@zod/core` instead, especially if you are building a library on top of Zod. */
export type ZodIssue = core.$ZodIssue;

/** An Error-like class used to store Zod validation issues.  */
export interface ZodError<T = unknown> extends $ZodError<T> {
  /** @deprecated Use the `z.treeifyError(err)` function instead. */
  format(): core.$ZodFormattedError<T>;
  format<U>(mapper: (issue: core.$ZodIssue) => U): core.$ZodFormattedError<T, U>;
  /** @deprecated Use the `z.treeifyError(err)` function instead. */
  flatten(): core.$ZodFlattenedError<T>;
  flatten<U>(mapper: (issue: core.$ZodIssue) => U): core.$ZodFlattenedError<T, U>;
  /** @deprecated Push directly to `.issues` instead. */
  addIssue(issue: core.$ZodIssue): void;
  /** @deprecated Push directly to `.issues` instead. */
  addIssues(issues: core.$ZodIssue[]): void;

  /** @deprecated Check `err.issues.length === 0` instead. */
  isEmpty: boolean;
}

const initializer = (inst: ZodError, issues: core.$ZodIssue[]) => {
  $ZodError.init(inst, issues);
  inst.name = "ZodError";
  Object.defineProperties(inst, {
    format: {
      value: (mapper: any) => core.formatError(inst, mapper),
      // enumerable: false,
    },
    flatten: {
      value: (mapper: any) => core.flattenError(inst, mapper),
      // enumerable: false,
    },
    addIssue: {
      value: (issue: any) => inst.issues.push(issue),
      // enumerable: false,
    },
    addIssues: {
      value: (issues: any) => inst.issues.push(...issues),
      // enumerable: false,
    },
    isEmpty: {
      get() {
        return inst.issues.length === 0;
      },
      // enumerable: false,
    },
  });
  // Object.defineProperty(inst, "isEmpty", {
  //   get() {
  //     return inst.issues.length === 0;
  //   },
  // });
};
export const ZodError: core.$constructor<ZodError> = core.$constructor("ZodError", initializer);
export const ZodRealError: core.$constructor<ZodError> = core.$constructor("ZodError", initializer, {
  Parent: Error,
});

export type {
  /** @deprecated Use `z.core.$ZodFlattenedError` instead. */
  $ZodFlattenedError as ZodFlattenedError,
  /** @deprecated Use `z.core.$ZodFormattedError` instead. */
  $ZodFormattedError as ZodFormattedError,
  /** @deprecated Use `z.core.$ZodErrorMap` instead. */
  $ZodErrorMap as ZodErrorMap,
} from "../core/index.js";

/** @deprecated Use `z.core.$ZodRawIssue` instead. */
export type IssueData = core.$ZodRawIssue;

// /** @deprecated Use `z.core.$ZodErrorMapCtx` instead. */
// export type ErrorMapCtx = core.$ZodErrorMapCtx;

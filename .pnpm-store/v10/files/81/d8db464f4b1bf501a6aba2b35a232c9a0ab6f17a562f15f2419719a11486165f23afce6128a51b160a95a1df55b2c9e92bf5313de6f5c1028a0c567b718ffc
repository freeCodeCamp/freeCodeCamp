import type { FPArity, FPFn, FPFnInput } from "../types.js";
/**
 * Converts a function to a curried function that accepts arguments in reverse
 * order.
 *
 * @param fn - The function to convert to FP
 * @param arity - The arity of the function
 * @param curriedArgs - The curried arguments
 *
 * @returns FP version of the function
 *
 * @private
 */
export declare function convertToFP<
  Fn extends FPFnInput,
  Arity extends FPArity,
>(fn: Fn, arity: Arity, curriedArgs?: unknown[]): FPFn<Fn, Arity>;

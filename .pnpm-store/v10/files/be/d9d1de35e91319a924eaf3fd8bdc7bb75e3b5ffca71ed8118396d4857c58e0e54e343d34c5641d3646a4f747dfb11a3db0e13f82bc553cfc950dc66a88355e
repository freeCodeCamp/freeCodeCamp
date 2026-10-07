import type { MatchFn, MatchValueCallback } from "../types.js";
export interface BuildMatchPatternFnArgs<Result> {
  matchPattern: RegExp;
  parsePattern: RegExp;
  valueCallback?: MatchValueCallback<string, Result>;
}
export declare function buildMatchPatternFn<Result>(
  args: BuildMatchPatternFnArgs<Result>,
): MatchFn<Result>;

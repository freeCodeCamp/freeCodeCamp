import type AlgoliaAnalytics from "./insights";
import { isFunction } from "./utils";

export function getVersion(
  this: AlgoliaAnalytics,
  callback?: (version: string) => void
): string {
  if (isFunction(callback)) {
    callback(this.version);
  }
  return this.version;
}

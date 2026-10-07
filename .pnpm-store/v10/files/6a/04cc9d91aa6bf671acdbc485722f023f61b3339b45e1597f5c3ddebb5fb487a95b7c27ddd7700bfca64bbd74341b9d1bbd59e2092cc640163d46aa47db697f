import type AlgoliaAnalytics from "./insights";
import type { InsightsClient } from "./types";
import { isFunction } from "./utils";

export function getFunctionalInterface(
  instance: AlgoliaAnalytics
): InsightsClient {
  return (functionName, ...functionArguments) => {
    if (functionName && isFunction(instance[functionName])) {
      // @ts-expect-error
      return instance[functionName](...functionArguments);
    }
    // eslint-disable-next-line no-console
    console.warn(`The method \`${functionName}\` doesn't exist.`);
    return undefined;
  };
}

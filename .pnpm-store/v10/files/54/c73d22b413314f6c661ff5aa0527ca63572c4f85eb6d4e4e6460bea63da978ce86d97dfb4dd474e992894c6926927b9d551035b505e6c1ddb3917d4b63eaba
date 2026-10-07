import { version } from "../package.json";

import { processQueue } from "./_processQueue";
import AlgoliaAnalytics from "./insights";
import { getRequesterForBrowser } from "./utils/getRequesterForBrowser";
import type { RequestFnType } from "./utils/request";

export function createInsightsClient(
  requestFn: RequestFnType
): AlgoliaAnalytics {
  const instance = new AlgoliaAnalytics({ requestFn });
  if (typeof window === "object") {
    // Process queue upon script execution
    processQueue.call(instance, window);
  }

  instance.version = version;
  return instance;
}

export default createInsightsClient(getRequesterForBrowser());

import { version } from "../package.json";

import { getFunctionalInterface } from "./_getFunctionalInterface";
import AlgoliaAnalytics from "./insights";
import type { InsightsClient } from "./types";
import type { RequestFnType } from "./utils/request";
import { createUUID } from "./utils/uuid";

export function createInsightsClient(requestFn: RequestFnType): InsightsClient {
  const aa = getFunctionalInterface(new AlgoliaAnalytics({ requestFn }));

  if (typeof window === "object") {
    if (!window.AlgoliaAnalyticsObject) {
      let pointer: string;
      do {
        pointer = createUUID();
      } while (window[pointer as any] !== undefined);
      window.AlgoliaAnalyticsObject = pointer;
      (window as any)[window.AlgoliaAnalyticsObject] = aa;
    }
  }

  aa.version = version;

  return aa;
}

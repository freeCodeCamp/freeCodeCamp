import { createInsightsClient } from "./_createInsightsClient";
import { getFunctionalInterface } from "./_getFunctionalInterface";
import { processQueue } from "./_processQueue";
import AlgoliaAnalytics from "./insights";
import { getRequesterForBrowser } from "./utils/getRequesterForBrowser";
import { LocalStorage } from "./utils/localStorage";

export {
  createInsightsClient,
  getRequesterForBrowser,
  AlgoliaAnalytics,
  LocalStorage,
  getFunctionalInterface,
  processQueue
};
export * from "./types";

export default createInsightsClient(getRequesterForBrowser());

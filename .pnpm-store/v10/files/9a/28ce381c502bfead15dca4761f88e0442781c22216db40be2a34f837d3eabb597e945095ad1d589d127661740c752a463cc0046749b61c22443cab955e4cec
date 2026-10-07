import { createInsightsClient } from "./_createInsightsClient";
import { getFunctionalInterface } from "./_getFunctionalInterface";
import { processQueue } from "./_processQueue";
import AlgoliaAnalytics from "./insights";
import { getRequesterForNode } from "./utils/getRequesterForNode";
import { LocalStorage } from "./utils/localStorage";

export {
  createInsightsClient,
  getRequesterForNode,
  AlgoliaAnalytics,
  LocalStorage,
  getFunctionalInterface,
  processQueue
};
export * from "./types";

export default createInsightsClient(getRequesterForNode());

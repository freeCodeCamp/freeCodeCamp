import type { InsightsEvent } from "./types";
import { getQueryForObject } from "./utils";

export function addQueryId(events: InsightsEvent[]): InsightsEvent[] {
  return events.map((event) => {
    if (!isValidEventForQueryIdLookup(event)) {
      return event;
    }
    const objectIDsWithInferredQueryID: string[] = [];
    const updatedObjectData = event.objectIDs?.map((objectID, i) => {
      const objectData = event.objectData?.[i];
      if (objectData?.queryID) {
        return objectData;
      }

      const [queryID] = getQueryForObject(event.index, objectID) ?? [];
      if (queryID) {
        objectIDsWithInferredQueryID.push(objectID);
      }
      return {
        ...objectData,
        queryID
      };
    });
    if (objectIDsWithInferredQueryID.length === 0) {
      return event;
    }
    return {
      ...event,
      objectData: updatedObjectData,
      objectIDsWithInferredQueryID
    };
  });
}

function isValidEventForQueryIdLookup(event: InsightsEvent): boolean {
  return !event.queryID && event.eventType === "conversion";
}

import type {
  InsightsEvent,
  InsightsEventConversionSubType,
  InsightsEventType
} from "./types";

export function addEventType(
  eventType: InsightsEventType,
  params: Array<Omit<InsightsEvent, "eventType">>
): InsightsEvent[] {
  return params.map((event) => ({
    eventType,
    ...event
  }));
}

export function addEventTypeAndSubtype(
  eventType: InsightsEventType,
  eventSubtype: InsightsEventConversionSubType,
  params: Array<Omit<InsightsEvent, "eventSubtype" | "eventType">>
): InsightsEvent[] {
  return params.map((event) => ({
    eventType,
    eventSubtype,
    ...event
  }));
}

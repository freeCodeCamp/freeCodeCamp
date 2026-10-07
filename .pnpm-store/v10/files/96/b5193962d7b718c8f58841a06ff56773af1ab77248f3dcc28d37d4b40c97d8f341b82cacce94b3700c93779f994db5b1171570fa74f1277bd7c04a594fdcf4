import type { InsightsAdditionalEventParams } from "../types";

export type WithAdditionalParams<TEventType> =
  | InsightsAdditionalEventParams
  | TEventType;

export function extractAdditionalParams<TEventType extends { index: string }>(
  params: Array<InsightsAdditionalEventParams | TEventType>
): { events: TEventType[]; additionalParams?: InsightsAdditionalEventParams } {
  return params.reduce(
    ({ events, additionalParams }, param) => {
      // Real events all have `index` as a mandatory parameter, which we
      // can rely on to distinguish them from additional parameters
      if ("index" in param) {
        return { additionalParams, events: [...events, param] };
      }

      return { events, additionalParams: param };
    },
    {
      events: [] as TEventType[],
      additionalParams: undefined as InsightsAdditionalEventParams | undefined
    }
  );
}

import type { InsightsAdditionalEventParams } from "../types";
export type WithAdditionalParams<TEventType> = InsightsAdditionalEventParams | TEventType;
export declare function extractAdditionalParams<TEventType extends {
    index: string;
}>(params: Array<InsightsAdditionalEventParams | TEventType>): {
    events: TEventType[];
    additionalParams?: InsightsAdditionalEventParams;
};

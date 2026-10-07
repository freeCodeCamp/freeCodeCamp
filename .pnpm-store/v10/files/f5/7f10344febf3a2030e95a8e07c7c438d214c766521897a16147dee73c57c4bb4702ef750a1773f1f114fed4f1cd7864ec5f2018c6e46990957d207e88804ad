import type { Attributes, EventProperties } from "../types/growthbook";
import type { GrowthBook } from "../GrowthBook";
import type { GrowthBookClient, UserScopedGrowthBook } from "../GrowthBookClient";
type GlobalTrackedEvent = {
    eventName: string;
    properties: Record<string, unknown>;
};
declare global {
    interface Window {
        gbEvents?: (GlobalTrackedEvent | string)[] | {
            push: (event: GlobalTrackedEvent | string) => void;
        };
    }
}
type EventData = {
    eventName: string;
    properties: EventProperties;
    attributes: Attributes;
    url: string;
};
export declare function growthbookTrackingPlugin({ queueFlushInterval, ingestorHost, enable, debug, dedupeCacheSize, dedupeKeyAttributes, eventFilter, }?: {
    queueFlushInterval?: number;
    ingestorHost?: string;
    enable?: boolean;
    debug?: boolean;
    dedupeCacheSize?: number;
    dedupeKeyAttributes?: string[];
    eventFilter?: (event: EventData) => boolean;
}): (gb: GrowthBook | UserScopedGrowthBook | GrowthBookClient) => void;
export {};
//# sourceMappingURL=growthbook-tracking.d.ts.map
import { CacheSettings, Options as Context, FeatureApiResponse, TrackingCallback } from "./types/growthbook";
import { GrowthBook } from "./GrowthBook";
type WindowContext = Context & {
    uuidCookieName?: string;
    uuidKey?: string;
    uuid?: string;
    persistUuidOnLoad?: boolean;
    noStreaming?: boolean;
    useStickyBucketService?: "cookie" | "localStorage";
    stickyBucketPrefix?: string;
    payload?: FeatureApiResponse;
    cacheSettings?: CacheSettings;
    antiFlicker?: boolean;
    antiFlickerTimeout?: number;
    additionalTrackingCallback?: TrackingCallback;
};
declare global {
    interface Window {
        _growthbook?: GrowthBook;
        growthbook_queue?: Array<(gb: GrowthBook) => void> | {
            push: (cb: (gb: GrowthBook) => void) => void;
        };
        growthbook_config?: WindowContext;
        dataLayer?: unknown[];
        analytics?: {
            track?: (name: string, props?: Record<string, unknown>) => void;
        };
        gtag?: (...args: unknown[]) => void;
    }
}
declare const gb: GrowthBook<Record<string, any>>;
export default gb;
//# sourceMappingURL=auto-wrapper.d.ts.map
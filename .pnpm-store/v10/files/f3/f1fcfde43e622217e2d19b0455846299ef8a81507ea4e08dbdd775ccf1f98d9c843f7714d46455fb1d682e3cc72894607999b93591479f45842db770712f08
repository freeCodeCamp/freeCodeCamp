import { DataCategory } from './datacategory';
export type EventDropReason = 'before_send' | 'event_processor' | 'network_error' | 'queue_overflow' | 'ratelimit_backoff' | 'sample_rate' | 'send_error' | 'internal_sdk_error' | 'buffer_overflow' | 'ignored' | 'invalid' | 'no_parent_span';
export type Outcome = {
    reason: EventDropReason;
    category: DataCategory;
    quantity: number;
};
export type ClientReport = {
    timestamp: number;
    discarded_events: Outcome[];
};
//# sourceMappingURL=clientreport.d.ts.map

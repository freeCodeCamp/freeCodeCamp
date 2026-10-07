import type { InsightsEvent } from '../../middlewares/createInsightsMiddleware';
import type { InstantSearch, Hit } from '../../types';
import type { AlgoliaSearchHelper } from 'algoliasearch-helper';
type BuiltInSendEventForHits = (eventType: string, hits: Hit | Hit[], eventName?: string, additionalData?: Record<string, any>) => void;
type CustomSendEventForHits = (customPayload: any) => void;
export type SendEventForHits = BuiltInSendEventForHits & CustomSendEventForHits;
export type BuiltInBindEventForHits = (eventType: string, hits: Hit | Hit[], eventName?: string, additionalData?: Record<string, any>) => string;
export type CustomBindEventForHits = (customPayload: any) => string;
export type BindEventForHits = BuiltInBindEventForHits & CustomBindEventForHits;
export declare function _buildEventPayloadsForHits({ helper, widgetType, methodName, args, instantSearchInstance, }: {
    widgetType: string;
    helper: AlgoliaSearchHelper;
    methodName: 'sendEvent' | 'bindEvent';
    args: any[];
    instantSearchInstance: InstantSearch;
}): InsightsEvent[];
export declare function createSendEventForHits({ instantSearchInstance, helper, widgetType, }: {
    instantSearchInstance: InstantSearch;
    helper: AlgoliaSearchHelper;
    widgetType: string;
}): SendEventForHits;
export declare function createBindEventForHits({ helper, widgetType, instantSearchInstance, }: {
    helper: AlgoliaSearchHelper;
    widgetType: string;
    instantSearchInstance: InstantSearch;
}): BindEventForHits;
export {};

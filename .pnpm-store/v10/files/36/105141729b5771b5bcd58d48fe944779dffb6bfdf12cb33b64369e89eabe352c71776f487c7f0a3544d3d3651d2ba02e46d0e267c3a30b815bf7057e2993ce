import type { InstantSearch } from '../../types';
import type { AlgoliaSearchHelper } from 'algoliasearch-helper';
type BuiltInSendEventForFacet = (eventType: string, facetValue: string, eventName?: string, additionalData?: Record<string, any>) => void;
type CustomSendEventForFacet = (customPayload: any) => void;
export type SendEventForFacet = BuiltInSendEventForFacet & CustomSendEventForFacet;
type CreateSendEventForFacetOptions = {
    instantSearchInstance: InstantSearch;
    helper: AlgoliaSearchHelper;
    attribute: string | ((facetValue: string) => string);
    widgetType: string;
};
export declare function createSendEventForFacet({ instantSearchInstance, helper, attribute: attr, widgetType, }: CreateSendEventForFacetOptions): SendEventForFacet;
export {};

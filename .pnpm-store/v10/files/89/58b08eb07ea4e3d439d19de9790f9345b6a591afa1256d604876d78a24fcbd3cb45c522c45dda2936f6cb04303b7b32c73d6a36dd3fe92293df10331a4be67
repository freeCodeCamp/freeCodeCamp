import type { AlgoliaHit, Connector } from '../../types';
import type { ConfigureWidgetDescription } from '../configure/connectConfigure';
import type { SearchParameters, PlainSearchParameters } from 'algoliasearch-helper';
export type MatchingPatterns = {
    [attribute: string]: {
        /**
         * The score of the optional filter.
         *
         * @see https://www.algolia.com/doc/guides/managing-results/rules/merchandising-and-promoting/in-depth/optional-filters/
         */
        score: number;
    };
};
export type TransformSearchParameters = (searchParameters: SearchParameters) => PlainSearchParameters;
export type ConfigureRelatedItemsConnectorParams = {
    /**
     * The reference hit to extract the filters from.
     */
    hit: AlgoliaHit;
    /**
     * The schema to create the optional filters.
     * Each key represents an attribute from the hit.
     */
    matchingPatterns: MatchingPatterns;
    /**
     * Function to transform the generated search parameters.
     */
    transformSearchParameters?: TransformSearchParameters;
};
export type ConfigureRelatedItemsWidgetDescription = {
    $$type: 'ais.configureRelatedItems';
} & Omit<ConfigureWidgetDescription, '$$type'>;
export type ConfigureRelatedItemsConnector = Connector<ConfigureRelatedItemsWidgetDescription, ConfigureRelatedItemsConnectorParams>;
declare const connectConfigureRelatedItems: ConfigureRelatedItemsConnector;
/** @deprecated use connectRelatedItems instead */
export default connectConfigureRelatedItems;

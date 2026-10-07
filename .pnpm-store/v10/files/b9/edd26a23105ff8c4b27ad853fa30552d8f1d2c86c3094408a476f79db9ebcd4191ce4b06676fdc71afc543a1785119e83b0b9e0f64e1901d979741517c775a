import type { Connector, Hit, FindAnswersOptions, WidgetRenderState } from '../../types';
export type AnswersRenderState = {
    /**
     * The matched hits from Algolia API.
     */
    hits: Hit[];
    /**
     * Whether it's still loading the results from the Answers API.
     */
    isLoading: boolean;
};
export type AnswersConnectorParams = {
    /**
     * Attributes to use for predictions.
     * If empty, we use all `searchableAttributes` to find answers.
     * All your `attributesForPrediction` must be part of your `searchableAttributes`.
     */
    attributesForPrediction?: string[];
    /**
     * The languages in the query. Currently only supports `en`.
     */
    queryLanguages: ['en'];
    /**
     * Maximum number of answers to retrieve from the Answers Engine.
     * Cannot be greater than 1000.
     * @default 1
     */
    nbHits?: number;
    /**
     * Debounce time in milliseconds to debounce render
     * @default 100
     */
    renderDebounceTime?: number;
    /**
     * Debounce time in milliseconds to debounce search
     * @default 100
     */
    searchDebounceTime?: number;
    /**
     * Whether to escape HTML tags from hits string values.
     *
     * @default true
     */
    escapeHTML?: boolean;
    /**
     * Extra parameters to pass to findAnswers method.
     * @default {}
     */
    extraParameters?: FindAnswersOptions;
};
export type AnswersWidgetDescription = {
    $$type: 'ais.answers';
    renderState: AnswersRenderState;
    indexRenderState: {
        answers: WidgetRenderState<AnswersRenderState, AnswersConnectorParams>;
    };
};
export type AnswersConnector = Connector<AnswersWidgetDescription, AnswersConnectorParams>;
/**
 * @deprecated the answers service is no longer offered, and this widget will be removed in InstantSearch.js v5
 */
declare const connectAnswers: AnswersConnector;
export default connectAnswers;

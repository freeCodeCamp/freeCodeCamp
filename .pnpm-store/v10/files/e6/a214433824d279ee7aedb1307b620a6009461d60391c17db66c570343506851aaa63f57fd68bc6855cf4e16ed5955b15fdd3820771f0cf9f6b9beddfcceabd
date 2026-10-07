import type { Connector, TransformItems, WidgetRenderState } from '../../types';
export type Suggestion = {
    /**
     * The facet attribute name.
     */
    attribute: string;
    /**
     * The facet value to filter by.
     */
    value: string;
    /**
     * Human-readable display label.
     */
    label: string;
    /**
     * Number of records matching this filter.
     */
    count: number;
};
export type FilterSuggestionsTransport = {
    /**
     * The custom API endpoint URL.
     */
    api: string;
    /**
     * Custom headers to send with the request.
     */
    headers?: Record<string, string>;
    /**
     * Function to prepare the request body before sending.
     * Receives the default body and returns the modified request options.
     */
    prepareSendMessagesRequest?: (body: Record<string, unknown>) => {
        body: Record<string, unknown>;
    };
};
export type FilterSuggestionsRenderState = {
    /**
     * The list of suggested filters.
     */
    suggestions: Suggestion[];
    /**
     * Whether suggestions are currently being fetched.
     */
    isLoading: boolean;
    /**
     * Applies a filter for the given attribute and value.
     */
    refine: (attribute: string, value: string) => void;
};
export type FilterSuggestionsConnectorParams = {
    /**
     * The ID of the agent configured in the Algolia dashboard.
     * Required unless a custom `transport` is provided.
     */
    agentId?: string;
    /**
     * Limit to specific facet attributes.
     */
    attributes?: string[];
    /**
     * Maximum number of suggestions to return.
     * @default 3
     */
    maxSuggestions?: number;
    /**
     * Debounce delay in milliseconds before fetching suggestions.
     * @default 300
     */
    debounceMs?: number;
    /**
     * Number of hits to send for context.
     * @default 5
     */
    hitsToSample?: number;
    /**
     * Function to transform the items passed to the templates.
     */
    transformItems?: TransformItems<Suggestion>;
    /**
     * Custom transport configuration for the API requests.
     * When provided, allows using a custom endpoint, headers, and request body.
     */
    transport?: FilterSuggestionsTransport;
};
export type FilterSuggestionsWidgetDescription = {
    $$type: 'ais.filterSuggestions';
    renderState: FilterSuggestionsRenderState;
    indexRenderState: {
        filterSuggestions: WidgetRenderState<FilterSuggestionsRenderState, FilterSuggestionsConnectorParams>;
    };
};
export type FilterSuggestionsConnector = Connector<FilterSuggestionsWidgetDescription, FilterSuggestionsConnectorParams>;
declare const connectFilterSuggestions: FilterSuggestionsConnector;
export default connectFilterSuggestions;

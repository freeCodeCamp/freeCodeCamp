import type { Connector, TransformItems, CreateURL, WidgetRenderState } from '../../types';
export type HitsPerPageRenderStateItem = {
    /**
     * Label to display in the option.
     */
    label: string;
    /**
     * Number of hits to display per page.
     */
    value: number;
    /**
     * Indicates if it's the current refined value.
     */
    isRefined: boolean;
};
export type HitsPerPageConnectorParamsItem = {
    /**
     * Label to display in the option.
     */
    label: string;
    /**
     * Number of hits to display per page.
     */
    value: number;
    /**
     * The default hits per page on first search.
     *
     * @default false
     */
    default?: boolean;
};
export type HitsPerPageConnectorParams = {
    /**
     * Array of objects defining the different values and labels.
     */
    items: HitsPerPageConnectorParamsItem[];
    /**
     * Function to transform the items passed to the templates.
     */
    transformItems?: TransformItems<HitsPerPageRenderStateItem>;
};
export type HitsPerPageRenderState = {
    /**
     * Array of objects defining the different values and labels.
     */
    items: HitsPerPageRenderStateItem[];
    /**
     * Creates the URL for a single item name in the list.
     */
    createURL: CreateURL<HitsPerPageConnectorParamsItem['value']>;
    /**
     * Sets the number of hits per page and triggers a search.
     */
    refine: (value: number) => void;
    /**
     * Indicates whether or not the search has results.
     * @deprecated Use `canRefine` instead.
     */
    hasNoResults: boolean;
    /**
     * Indicates if search state can be refined.
     */
    canRefine: boolean;
};
export type HitsPerPageWidgetDescription = {
    $$type: 'ais.hitsPerPage';
    renderState: HitsPerPageRenderState;
    indexRenderState: {
        hitsPerPage: WidgetRenderState<HitsPerPageRenderState, HitsPerPageConnectorParams>;
    };
    indexUiState: {
        hitsPerPage: number;
    };
};
export type HitsPerPageConnector = Connector<HitsPerPageWidgetDescription, HitsPerPageConnectorParams>;
declare const connectHitsPerPage: HitsPerPageConnector;
export default connectHitsPerPage;

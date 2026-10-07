import type { Connector, TransformItems, CreateURL, WidgetRenderState } from '../../types';
export type CurrentRefinementsConnectorParamsRefinement = {
    /**
     * The attribute on which the refinement is applied.
     */
    attribute: string;
    /**
     * The type of the refinement.
     */
    type: 'facet' | 'exclude' | 'disjunctive' | 'hierarchical' | 'numeric' | 'query' | 'tag';
    /**
     * The raw value of the refinement.
     */
    value: string | number;
    /**
     * The label of the refinement to display.
     */
    label: string;
    /**
     * The value of the operator (only if applicable).
     */
    operator?: string;
    /**
     * The number of found items (only if applicable).
     */
    count?: number;
    /**
     * Whether the count is exhaustive (only if applicable).
     */
    exhaustive?: boolean;
};
export type CurrentRefinementsConnectorParamsItem = {
    /**
     * The index name.
     */
    indexName: string;
    /**
     * The index id as provided to the index widget.
     */
    indexId: string;
    /**
     * The attribute on which the refinement is applied.
     */
    attribute: string;
    /**
     * The textual representation of this attribute.
     */
    label: string;
    /**
     * Currently applied refinements.
     */
    refinements: CurrentRefinementsConnectorParamsRefinement[];
    /**
     * Removes the given refinement and triggers a new search.
     */
    refine: (refinement: CurrentRefinementsConnectorParamsRefinement) => void;
};
export type CurrentRefinementsConnectorParams = {
    /**
     * The attributes to include in the widget (all by default).
     * Cannot be used with `excludedAttributes`.
     *
     * @default `[]`
     */
    includedAttributes?: string[];
    /**
     * The attributes to exclude from the widget.
     * Cannot be used with `includedAttributes`.
     *
     * @default `['query']`
     */
    excludedAttributes?: string[];
    /**
     * Function to transform the items passed to the templates.
     */
    transformItems?: TransformItems<CurrentRefinementsConnectorParamsItem>;
};
export type CurrentRefinementsRenderState = {
    /**
     * All the currently refined items, grouped by attribute.
     */
    items: CurrentRefinementsConnectorParamsItem[];
    /**
     * Indicates if search state can be refined.
     */
    canRefine: boolean;
    /**
     * Removes the given refinement and triggers a new search.
     */
    refine: (refinement: CurrentRefinementsConnectorParamsRefinement) => void;
    /**
     * Generates a URL for the next state.
     */
    createURL: CreateURL<CurrentRefinementsConnectorParamsRefinement>;
};
export type CurrentRefinementsWidgetDescription = {
    $$type: 'ais.currentRefinements';
    renderState: CurrentRefinementsRenderState;
    indexRenderState: {
        currentRefinements: WidgetRenderState<CurrentRefinementsRenderState, CurrentRefinementsConnectorParams>;
    };
};
export type CurrentRefinementsConnector = Connector<CurrentRefinementsWidgetDescription, CurrentRefinementsConnectorParams>;
declare const connectCurrentRefinements: CurrentRefinementsConnector;
export default connectCurrentRefinements;

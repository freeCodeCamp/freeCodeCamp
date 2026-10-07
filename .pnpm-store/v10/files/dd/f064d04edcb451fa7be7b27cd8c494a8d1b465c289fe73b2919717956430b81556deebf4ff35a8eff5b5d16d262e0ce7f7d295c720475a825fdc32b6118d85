import type { TransformItems, CreateURL, Connector, WidgetRenderState } from '../../types';
export type ClearRefinementsConnectorParams = {
    /**
     * The attributes to include in the refinements to clear (all by default). Cannot be used with `excludedAttributes`.
     */
    includedAttributes?: string[];
    /**
     * The attributes to exclude from the refinements to clear. Cannot be used with `includedAttributes`.
     */
    excludedAttributes?: string[];
    /**
     * Function to transform the items passed to the templates.
     */
    transformItems?: TransformItems<string>;
};
export type ClearRefinementsRenderState = {
    /**
     * Triggers the clear of all the currently refined values.
     */
    refine: () => void;
    /**
     * Indicates if search state is refined.
     * @deprecated prefer reading canRefine
     */
    hasRefinements: boolean;
    /**
     * Indicates if search state can be refined.
     */
    canRefine: boolean;
    /**
     * Creates a url for the next state when refinements are cleared.
     */
    createURL: CreateURL<void>;
};
export type ClearRefinementsWidgetDescription = {
    $$type: 'ais.clearRefinements';
    renderState: ClearRefinementsRenderState;
    indexRenderState: {
        clearRefinements: WidgetRenderState<ClearRefinementsRenderState, ClearRefinementsConnectorParams>;
    };
};
export type ClearRefinementsConnector = Connector<ClearRefinementsWidgetDescription, ClearRefinementsConnectorParams>;
declare const connectClearRefinements: ClearRefinementsConnector;
export default connectClearRefinements;

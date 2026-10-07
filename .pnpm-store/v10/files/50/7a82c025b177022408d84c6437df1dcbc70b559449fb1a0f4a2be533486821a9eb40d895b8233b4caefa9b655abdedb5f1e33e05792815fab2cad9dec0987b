import type { InstantSearch, UiState, IndexUiState, Widget, ScopedResult, RecommendResponse } from '../../types';
import type { AlgoliaSearchHelper as Helper, SearchParameters, SearchResults } from 'algoliasearch-helper';
export type IndexWidgetParams = {
    /**
     * The index or composition id to target.
     */
    indexName: string;
    /**
     * Id to use for the index if there are multiple indices with the same name.
     * This will be used to create the URL and the render state.
     */
    indexId?: string;
    /**
     * If `true`, the index will not be merged with the main helper's state.
     * This means that the index will not be part of the main search request.
     *
     * @default false
     */
    EXPERIMENTAL_isolated?: false;
} | {
    /**
     * If `true`, the index will not be merged with the main helper's state.
     * This means that the index will not be part of the main search request.
     *
     * This option is EXPERIMENTAL, and implementation details may change in the future.
     * Things that could change are:
     * - which widgets get rendered when a change happens
     * - whether the index searches automatically
     * - whether the index is included in the URL / UiState
     * - whether the index is included in server-side rendering
     *
     * @default false
     */
    EXPERIMENTAL_isolated: true;
    /**
     * The index or composition id to target.
     */
    indexName?: string;
    /**
     * Id to use for the index if there are multiple indices with the same name.
     * This will be used to create the URL and the render state.
     */
    indexId?: string;
};
export type IndexInitOptions = {
    instantSearchInstance: InstantSearch;
    parent: IndexWidget | null;
    uiState: UiState;
};
export type IndexRenderOptions = {
    instantSearchInstance: InstantSearch;
};
export type IndexWidgetDescription = {
    $$type: 'ais.index';
    $$widgetType: 'ais.index';
};
export type IndexWidget<TUiState extends UiState = UiState> = Omit<Widget<IndexWidgetDescription & {
    widgetParams: IndexWidgetParams;
}>, 'getWidgetUiState' | 'getWidgetState'> & {
    getIndexName: () => string;
    getIndexId: () => string;
    getHelper: () => Helper | null;
    getResults: () => SearchResults | null;
    getResultsForWidget: (widget: IndexWidget | Widget) => SearchResults | RecommendResponse<any> | null;
    getPreviousState: () => SearchParameters | null;
    getScopedResults: () => ScopedResult[];
    getParent: () => IndexWidget | null;
    getWidgets: () => Array<Widget | IndexWidget>;
    createURL: (nextState: SearchParameters | ((state: IndexUiState) => IndexUiState)) => string;
    addWidgets: (widgets: Array<Widget | IndexWidget | Array<IndexWidget | Widget>>) => IndexWidget;
    removeWidgets: (widgets: Array<Widget | IndexWidget | Widget[]>) => IndexWidget;
    init: (options: IndexInitOptions) => void;
    render: (options: IndexRenderOptions) => void;
    dispose: () => void;
    /**
     * @deprecated
     */
    getWidgetState: (uiState: UiState) => UiState;
    getWidgetUiState: <TSpecificUiState extends UiState = TUiState>(uiState: TSpecificUiState) => TSpecificUiState;
    getWidgetSearchParameters: (searchParameters: SearchParameters, searchParametersOptions: {
        uiState: IndexUiState;
    }) => SearchParameters;
    /**
     * Set this index' UI state back to the state defined by the widgets.
     * Can only be called after `init`.
     */
    refreshUiState: () => void;
    /**
     * Set this index' UI state and search. This is the equivalent of calling
     * a spread `setUiState` on the InstantSearch instance.
     * Can only be called after `init`.
     */
    setIndexUiState: (indexUiState: TUiState[string] | ((previousIndexUiState: TUiState[string]) => TUiState[string])) => void;
    /**
     * This index is isolated, meaning it will not be merged with the main
     * helper's state.
     * @private
     */
    _isolated: boolean;
    /**
     * Schedules a search for this index only.
     * @private
     */
    scheduleLocalSearch: () => void;
};
declare const index: (widgetParams: IndexWidgetParams) => IndexWidget;
export default index;

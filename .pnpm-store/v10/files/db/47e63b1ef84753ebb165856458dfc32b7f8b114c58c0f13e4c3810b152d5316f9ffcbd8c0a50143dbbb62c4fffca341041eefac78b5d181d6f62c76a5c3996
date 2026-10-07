import type { InstantSearch, UiState, Widget, IndexWidget } from '../../types';
export declare function createInitArgs(instantSearchInstance: InstantSearch, parent: IndexWidget, uiState: UiState): {
    uiState: UiState;
    helper: import("algoliasearch-helper").AlgoliaSearchHelper;
    parent: IndexWidget;
    instantSearchInstance: InstantSearch<UiState, UiState>;
    state: import("algoliasearch-helper").SearchParameters;
    renderState: import("../../types").RenderState;
    templatesConfig: Record<string, unknown>;
    createURL: (nextState: import("algoliasearch-helper").SearchParameters | ((state: import("../../types").IndexUiState) => import("../../types").IndexUiState)) => string;
    scopedResults: never[];
    searchMetadata: {
        isSearchStalled: boolean;
    };
    status: import("../InstantSearch").InstantSearchStatus;
    error: Error | undefined;
};
export declare function createRenderArgs(instantSearchInstance: InstantSearch, parent: IndexWidget, widget: IndexWidget | Widget): {
    helper: import("algoliasearch-helper").AlgoliaSearchHelper;
    parent: IndexWidget;
    instantSearchInstance: InstantSearch<UiState, UiState>;
    results: import("algoliasearch").RecommendationsResults | import("algoliasearch-helper").SearchResults<any> | null;
    scopedResults: import("../../types").ScopedResult[];
    state: any;
    renderState: import("../../types").RenderState;
    templatesConfig: Record<string, unknown>;
    createURL: (nextState: import("algoliasearch-helper").SearchParameters | ((state: import("../../types").IndexUiState) => import("../../types").IndexUiState)) => string;
    searchMetadata: {
        isSearchStalled: boolean;
    };
    status: import("../InstantSearch").InstantSearchStatus;
    error: Error | undefined;
};

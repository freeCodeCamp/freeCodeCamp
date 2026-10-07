import type { InstantSearch, UiState, IndexWidget } from 'instantsearch.js';
export type SearchStateApi<TUiState extends UiState> = {
    uiState: TUiState;
    setUiState: InstantSearch<TUiState>['setUiState'];
    indexUiState: TUiState[string];
    setIndexUiState: IndexWidget<TUiState>['setIndexUiState'];
    renderState: InstantSearch<TUiState>['renderState'];
    indexRenderState: InstantSearch<TUiState>['renderState'][string];
};
export declare function useSearchState<TUiState extends UiState>(): SearchStateApi<TUiState>;

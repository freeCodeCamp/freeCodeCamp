import type { SearchResultsApi } from '../lib/useSearchResults';
import type { SearchStateApi } from '../lib/useSearchState';
import type { InstantSearch, Middleware, UiState } from 'instantsearch.js';
export type InstantSearchApi<TUiState extends UiState = UiState> = SearchStateApi<TUiState> & SearchResultsApi & {
    /**
     * Adds middlewares to InstantSearch. It returns its own cleanup function.
     */
    addMiddlewares: (...middlewares: Middleware[]) => () => void;
    /**
     * Clears the search client’s cache and performs a new search.
     *
     * This is useful to update the results once an indexing operation has finished.
     */
    refresh: InstantSearch['refresh'];
    /**
     * The status of the search happening.
     */
    status: InstantSearch['status'];
    /**
     * The error that occurred during the search.
     *
     * This is only valid when status is 'error'.
     */
    error: InstantSearch['error'];
};
export type UseInstantSearchProps = {
    /**
     * catch any error happening in the search lifecycle and handle it with this hook.
     */
    catchError?: boolean;
};
export declare function useInstantSearch<TUiState extends UiState = UiState>({ catchError, }?: UseInstantSearchProps): InstantSearchApi<TUiState>;

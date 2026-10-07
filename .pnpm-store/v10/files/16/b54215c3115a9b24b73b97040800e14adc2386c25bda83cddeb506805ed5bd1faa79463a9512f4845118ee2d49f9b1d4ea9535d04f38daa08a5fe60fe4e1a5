import type { InstantSearch, UiState } from 'instantsearch.js';
export type InstantSearchServerContextApi<TUiState extends UiState, TRouteState = TUiState> = {
    /**
     * Fowards search internals to the server execution context to access them
     * in `getServerState()`.
     */
    notifyServer: (params: {
        search: InstantSearch<TUiState, TRouteState>;
    }) => void;
};
export declare const InstantSearchServerContext: import("react").Context<InstantSearchServerContextApi<UiState, UiState> | null>;

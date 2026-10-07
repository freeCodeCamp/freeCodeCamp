import InstantSearch from 'instantsearch.js/es/lib/InstantSearch';
import type { InstantSearchOptions, UiState } from 'instantsearch.js';
export type UseInstantSearchApiProps<TUiState extends UiState, TRouteState> = InstantSearchOptions<TUiState, TRouteState>;
export type InternalInstantSearch<TUiState extends UiState, TRouteState = TUiState> = InstantSearch<TUiState, TRouteState> & {
    /**
     * Schedule a function to be called on the next timer tick
     * @private
     */
    _schedule: {
        (cb: () => void): void;
        queue: Array<() => void>;
        timer: ReturnType<typeof setTimeout> | undefined;
    };
    /**
     * Used inside useWidget, which ensures that removeWidgets is not called.
     * This prevents a search from being triggered when InstantSearch is also unmounted.
     * @private
     */
    _preventWidgetCleanup?: boolean;
};
export declare function useInstantSearchApi<TUiState extends UiState, TRouteState>(props: UseInstantSearchApiProps<TUiState, TRouteState>): InstantSearch<TUiState, TRouteState>;

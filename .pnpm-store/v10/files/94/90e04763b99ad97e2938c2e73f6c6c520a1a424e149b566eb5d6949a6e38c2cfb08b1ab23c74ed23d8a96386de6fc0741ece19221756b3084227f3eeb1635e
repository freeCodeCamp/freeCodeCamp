import React from 'react';
import type { InitialResults, UiState } from 'instantsearch.js';
import type { ReactNode } from 'react';
export type InstantSearchServerState = {
    initialResults: InitialResults;
};
export type InstantSearchSSRProviderProps = Partial<InstantSearchServerState> & {
    children?: ReactNode;
};
/**
 * Provider to pass the server state retrieved from `getServerState()` to
 * <InstantSearch>.
 */
export declare function InstantSearchSSRProvider<TUiState extends UiState, TRouteState = TUiState>({ children, ...props }: InstantSearchSSRProviderProps): React.JSX.Element;

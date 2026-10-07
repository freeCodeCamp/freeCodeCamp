import type { InstantSearchServerState } from '../components/InstantSearchSSRProvider';
import type { InternalInstantSearch } from './useInstantSearchApi';
import type { UiState } from 'instantsearch.js';
import type { MutableRefObject } from 'react';
export type InstantSearchSSRContextApi<TUiState extends UiState, TRouteState = TUiState> = InstantSearchServerState & {
    ssrSearchRef: MutableRefObject<InternalInstantSearch<TUiState, TRouteState> | null>;
    recommendIdx: MutableRefObject<number>;
};
export declare const InstantSearchSSRContext: import("react").Context<Partial<InstantSearchSSRContextApi<UiState, UiState>> | null>;

import type { Router, StateMapping, UiState, InternalMiddleware } from '../types';
export type RouterProps<TUiState extends UiState = UiState, TRouteState = TUiState> = {
    router?: Router<TRouteState>;
    stateMapping?: StateMapping<TUiState, TRouteState>;
};
export declare const createRouterMiddleware: <TUiState extends UiState = UiState, TRouteState = TUiState>(props?: RouterProps<TUiState, TRouteState>) => InternalMiddleware<TUiState>;

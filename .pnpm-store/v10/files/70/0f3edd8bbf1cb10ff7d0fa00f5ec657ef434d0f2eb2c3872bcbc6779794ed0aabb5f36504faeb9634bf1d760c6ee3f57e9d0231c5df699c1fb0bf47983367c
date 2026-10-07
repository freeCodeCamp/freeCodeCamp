import * as React from 'react';
import type { Action, AnyAction, Store } from 'redux';
import type { Subscription } from '../utils/Subscription';
import type { CheckFrequency } from '../hooks/useSelector';
export interface ReactReduxContextValue<SS = any, A extends Action = AnyAction> {
    store: Store<SS, A>;
    subscription: Subscription;
    getServerState?: () => SS;
    stabilityCheck: CheckFrequency;
    noopCheck: CheckFrequency;
}
export declare const ReactReduxContext: React.Context<ReactReduxContextValue<any, AnyAction>>;
export declare type ReactReduxContextInstance = typeof ReactReduxContext;
export default ReactReduxContext;

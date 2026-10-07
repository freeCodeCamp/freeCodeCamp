import type { Context, ReactNode } from 'react';
import type { ReactReduxContextValue } from './Context';
import type { Action, AnyAction, Store } from 'redux';
import type { CheckFrequency } from '../hooks/useSelector';
export interface ProviderProps<A extends Action = AnyAction, S = unknown> {
    /**
     * The single Redux store in your application.
     */
    store: Store<S, A>;
    /**
     * An optional server state snapshot. Will be used during initial hydration render if available, to ensure that the UI output is consistent with the HTML generated on the server.
     */
    serverState?: S;
    /**
     * Optional context to be used internally in react-redux. Use React.createContext() to create a context to be used.
     * If this is used, you'll need to customize `connect` by supplying the same context provided to the Provider.
     * Initial value doesn't matter, as it is overwritten with the internal state of Provider.
     */
    context?: Context<ReactReduxContextValue<S, A>>;
    /** Global configuration for the `useSelector` stability check */
    stabilityCheck?: CheckFrequency;
    /** Global configuration for the `useSelector` no-op check */
    noopCheck?: CheckFrequency;
    children: ReactNode;
}
declare function Provider<A extends Action = AnyAction, S = unknown>({ store, context, children, serverState, stabilityCheck, noopCheck, }: ProviderProps<A, S>): JSX.Element;
export default Provider;

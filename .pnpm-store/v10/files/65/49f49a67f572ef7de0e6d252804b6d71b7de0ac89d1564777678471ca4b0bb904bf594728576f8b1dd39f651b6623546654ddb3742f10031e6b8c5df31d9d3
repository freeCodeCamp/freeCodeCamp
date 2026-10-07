import { Reducer, StateUpdater } from '.';

export { PreactContext };

export interface Options extends globalThis.Options {
	/** Attach a hook that is invoked before a vnode is diffed. */
	_diff?(vnode: VNode): void;
	diffed?(vnode: VNode): void;
	/** Attach a hook that is invoked before a vnode has rendered. */
	_render?(vnode: VNode): void;
	/** Attach a hook that is invoked after a tree was mounted or was updated. */
	_commit?(vnode: VNode, commitQueue: Component[]): void;
	_unmount?(vnode: VNode): void;
	/** Attach a hook that is invoked before a hook's state is queried. */
	_hook?(component: Component, index: number, type: HookType): void;
}

// Hook tracking

export interface ComponentHooks {
	/** The list of hooks a component uses */
	_list: HookState[];
	/** List of Effects to be invoked after the next frame is rendered */
	_pendingEffects: EffectHookState[];
}

export interface Component extends globalThis.Component<any, any> {
	__hooks?: ComponentHooks;
	// Extend to include HookStates
	_renderCallbacks?: Array<HookState | (() => void)>;
	_hasScuFromHooks?: boolean;
}

export interface VNode extends globalThis.VNode {
	_mask?: [number, number];
	_component?: Component; // Override with our specific Component type
}

export type HookState =
	| EffectHookState
	| MemoHookState
	| ReducerHookState
	| ContextHookState
	| ErrorBoundaryHookState
	| IdHookState;

interface BaseHookState {
	_value?: unknown;
	_nextValue?: undefined;
	_pendingValue?: undefined;
	_args?: undefined;
	_pendingArgs?: undefined;
	_component?: undefined;
	_cleanup?: undefined;
}

export type Effect = () => void | Cleanup;
export type Cleanup = () => void;

export interface EffectHookState extends BaseHookState {
	_value?: Effect;
	_args?: unknown[];
	_pendingArgs?: unknown[];
	_cleanup?: Cleanup | void;
}

export interface MemoHookState<T = unknown> extends BaseHookState {
	_value?: T;
	_pendingValue?: T;
	_args?: unknown[];
	_pendingArgs?: unknown[];
	_factory?: () => T;
}

export interface ReducerHookState<S = unknown, A = unknown>
	extends BaseHookState {
	_nextValue?: [S, StateUpdater<S>];
	_value?: [S, StateUpdater<S>];
	_component?: Component;
	_reducer?: Reducer<S, A>;
}

export interface ContextHookState extends BaseHookState {
	/** Whether this hooks as subscribed to updates yet */
	_value?: boolean;
	_context?: PreactContext;
}

export interface ErrorBoundaryHookState extends BaseHookState {
	_value?: (error: unknown, errorInfo: ErrorInfo) => void;
}

export interface IdHookState extends BaseHookState {
	_value?: string;
}

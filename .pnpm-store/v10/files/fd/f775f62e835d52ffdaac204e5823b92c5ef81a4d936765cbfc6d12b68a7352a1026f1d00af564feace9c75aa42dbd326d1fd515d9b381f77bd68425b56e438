export as namespace ReduxActions;

// FSA-compliant action.
// See: https://github.com/acdlite/flux-standard-action
export interface BaseAction {
    type: string;
}

export interface Action<Payload> extends BaseAction {
    payload: Payload;
    error?: boolean | undefined;
}

export interface ActionMeta<Payload, Meta> extends Action<Payload> {
    meta: Meta;
}

// https://github.com/redux-utilities/redux-actions/blob/v2.3.0/src/combineActions.js#L27
export interface CombinedActionType {
    _dummy: undefined;
}

export type ReducerMapValue<State, Payload> =
    | Reducer<State, Payload>
    | ReducerNextThrow<State, Payload>
    | ReducerMap<State, Payload>;

export interface ReducerMap<State, Payload> {
    [actionType: string]: ReducerMapValue<State, Payload>;
}

export interface ReducerMapMeta<State, Payload, Meta> {
    [actionType: string]:
        | ReducerMeta<State, Payload, Meta>
        | ReducerNextThrowMeta<State, Payload, Meta>
        | ReducerMapMeta<State, Payload, Meta>;
}

export interface ReducerNextThrow<State, Payload> {
    next?(state: State, action: Action<Payload>): State;
    throw?(state: State, action: Action<Payload>): State;
}

export interface ReducerNextThrowMeta<State, Payload, Meta> {
    next?(state: State, action: ActionMeta<Payload, Meta>): State;
    throw?(state: State, action: ActionMeta<Payload, Meta>): State;
}

export type BaseActionFunctions<TAction> =
    | ActionFunction0<TAction>
    | ActionFunction1<any, TAction>
    | ActionFunction2<any, any, TAction>
    | ActionFunction3<any, any, any, TAction>
    | ActionFunction4<any, any, any, any, TAction>
    | ActionFunctionAny<TAction>;

export type ActionFunctions<Payload> = BaseActionFunctions<Action<Payload>>;

export type ActionWithMetaFunctions<Payload, Meta> = BaseActionFunctions<ActionMeta<Payload, Meta>>;

export type Reducer<State, Payload> = (state: State, action: Action<Payload>) => State;

export type ReducerMeta<State, Payload, Meta> = (state: State, action: ActionMeta<Payload, Meta>) => State;

export type ReduxCompatibleReducer<State, Payload> = (state: State | undefined, action: Action<Payload>) => State;

export type ReduxCompatibleReducerMeta<State, Payload, Meta> = (
    state: State | undefined,
    action: ActionMeta<Payload, Meta>,
) => State;

/** argument inferring borrowed from lodash definitions */
export type ActionFunction0<R> = () => R;
export type ActionFunction1<T1, R> = (t1: T1) => R;
export type ActionFunction2<T1, T2, R> = (t1: T1, t2: T2) => R;
export type ActionFunction3<T1, T2, T3, R> = (t1: T1, t2: T2, t3: T3) => R;
export type ActionFunction4<T1, T2, T3, T4, R> = (t1: T1, t2: T2, t3: T3, t4: T4) => R;
export type ActionFunctionAny<R> = (...args: any[]) => R;

// https://github.com/redux-utilities/redux-actions/blob/v2.3.0/src/createAction.js#L6
export function createAction(
    actionType: string,
): ActionFunctionAny<Action<any>>;

export function createAction<Payload>(
    actionType: string,
    payloadCreator: ActionFunction0<Payload>,
): ActionFunction0<Action<Payload>>;

export function createAction<Payload, Arg1>(
    actionType: string,
    payloadCreator: ActionFunction1<Arg1, Payload>,
): ActionFunction1<Arg1, Action<Payload>>;

export function createAction<Payload, Arg1, Arg2>(
    actionType: string,
    payloadCreator: ActionFunction2<Arg1, Arg2, Payload>,
): ActionFunction2<Arg1, Arg2, Action<Payload>>;

export function createAction<Payload, Arg1, Arg2, Arg3>(
    actionType: string,
    payloadCreator: ActionFunction3<Arg1, Arg2, Arg3, Payload>,
): ActionFunction3<Arg1, Arg2, Arg3, Action<Payload>>;

export function createAction<Payload, Arg1, Arg2, Arg3, Arg4>(
    actionType: string,
    payloadCreator: ActionFunction4<Arg1, Arg2, Arg3, Arg4, Payload>,
): ActionFunction4<Arg1, Arg2, Arg3, Arg4, Action<Payload>>;

export function createAction<Payload>(
    actionType: string,
): ActionFunction1<Payload, Action<Payload>>;

export function createAction<Meta>(
    actionType: string,
    payloadCreator: null | undefined,
    metaCreator: ActionFunctionAny<Meta>,
): ActionFunctionAny<ActionMeta<any, Meta>>;

export function createAction<Payload, Meta>(
    actionType: string,
    payloadCreator: ActionFunctionAny<Payload>,
    metaCreator: ActionFunctionAny<Meta>,
): ActionFunctionAny<ActionMeta<Payload, Meta>>;

export function createAction<Payload, Meta, Arg1>(
    actionType: string,
    payloadCreator: ActionFunction1<Arg1, Payload>,
    metaCreator: ActionFunction1<Arg1, Meta>,
): ActionFunction1<Arg1, ActionMeta<Payload, Meta>>;

export function createAction<Payload, Meta, Arg1, Arg2>(
    actionType: string,
    payloadCreator: ActionFunction2<Arg1, Arg2, Payload>,
    metaCreator: ActionFunction2<Arg1, Arg2, Meta>,
): ActionFunction2<Arg1, Arg2, ActionMeta<Payload, Meta>>;

export function createAction<Payload, Meta, Arg1, Arg2, Arg3>(
    actionType: string,
    payloadCreator: ActionFunction3<Arg1, Arg2, Arg3, Payload>,
    metaCreator: ActionFunction3<Arg1, Arg2, Arg3, Meta>,
): ActionFunction3<Arg1, Arg2, Arg3, ActionMeta<Payload, Meta>>;

export function createAction<Payload, Meta, Arg1, Arg2, Arg3, Arg4>(
    actionType: string,
    payloadCreator: ActionFunction4<Arg1, Arg2, Arg3, Arg4, Payload>,
    metaCreator: ActionFunction4<Arg1, Arg2, Arg3, Arg4, Meta>,
): ActionFunction4<Arg1, Arg2, Arg3, Arg4, ActionMeta<Payload, Meta>>;

export function handleAction<State, Payload>(
    actionType: string | ActionFunctions<Payload> | CombinedActionType,
    reducer: Reducer<State, Payload> | ReducerNextThrow<State, Payload>,
    initialState: State,
): ReduxCompatibleReducer<State, Payload>;

export function handleAction<State, Payload, Meta>(
    actionType: string | ActionWithMetaFunctions<Payload, Meta> | CombinedActionType,
    reducer: ReducerMeta<State, Payload, Meta> | ReducerNextThrowMeta<State, Payload, Meta>,
    initialState: State,
): ReduxCompatibleReducerMeta<State, Payload, Meta>;

export interface Options {
    prefix?: string | undefined;
    namespace?: string | undefined;
}

export function handleActions<StateAndPayload>(
    reducerMap: ReducerMap<StateAndPayload, StateAndPayload>,
    initialState: StateAndPayload,
    options?: Options,
): ReduxCompatibleReducer<StateAndPayload, StateAndPayload>;

export function handleActions<State, Payload>(
    reducerMap: ReducerMap<State, Payload>,
    initialState: State,
    options?: Options,
): ReduxCompatibleReducer<State, Payload>;

export function handleActions<State, Payload, Meta>(
    reducerMap: ReducerMapMeta<State, Payload, Meta>,
    initialState: State,
    options?: Options,
): ReduxCompatibleReducerMeta<State, Payload, Meta>;

// https://github.com/redux-utilities/redux-actions/blob/v2.3.0/src/combineActions.js#L21
export function combineActions(...actionTypes: Array<ActionFunctions<any> | string | symbol>): CombinedActionType;

export interface ActionMap<Payload, Meta> {
    [actionType: string]:
        | ActionMap<Payload, Meta>
        | ActionFunctionAny<Payload>
        | [ActionFunctionAny<Payload>, ActionFunctionAny<Meta>]
        | undefined;
}

export function createActions<Payload>(
    actionMapOrIdentityAction: ActionMap<Payload, any> | string,
    ...identityActions: Array<string | Options>
): {
    [actionName: string]: ActionFunctionAny<Action<Payload>>;
};

export function createActions(
    actionMapOrIdentityAction: ActionMap<any, any> | string,
    ...identityActions: Array<string | Options>
): {
    [actionName: string]: ActionFunctionAny<Action<any>>;
};

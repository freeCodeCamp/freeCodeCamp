import * as React from 'react';

type ChangeHandler$1<T> = (state: T) => void;
type SetStateFn<T> = React.Dispatch<React.SetStateAction<T>>;
interface UseControllableStateParams$1<T> {
    prop?: T | undefined;
    defaultProp: T;
    onChange?: ChangeHandler$1<T>;
    caller?: string;
}
declare function useControllableState<T>({ prop, defaultProp, onChange, caller, }: UseControllableStateParams$1<T>): [T, SetStateFn<T>];

type ChangeHandler<T> = (state: T) => void;
interface UseControllableStateParams<T> {
    prop: T | undefined;
    defaultProp: T;
    onChange: ChangeHandler<T> | undefined;
    caller: string;
}
interface AnyAction {
    type: string;
}
declare function useControllableStateReducer<T, S extends {}, A extends AnyAction>(reducer: (prevState: S & {
    state: T;
}, action: A) => S & {
    state: T;
}, userArgs: UseControllableStateParams<T>, initialState: S): [S & {
    state: T;
}, React.Dispatch<A>];
declare function useControllableStateReducer<T, S extends {}, I, A extends AnyAction>(reducer: (prevState: S & {
    state: T;
}, action: A) => S & {
    state: T;
}, userArgs: UseControllableStateParams<T>, initialArg: I, init: (i: I & {
    state: T;
}) => S): [S & {
    state: T;
}, React.Dispatch<A>];

export { useControllableState, useControllableStateReducer };

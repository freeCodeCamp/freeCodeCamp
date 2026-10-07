import type { Dispatch, Action } from 'redux';
import type { ComponentType } from 'react';
import type { EqualityFn, ExtendedEqualityFn } from '../types';
export declare type SelectorFactory<S, TProps, TOwnProps, TFactoryOptions> = (dispatch: Dispatch<Action<unknown>>, factoryOptions: TFactoryOptions) => Selector<S, TProps, TOwnProps>;
export declare type Selector<S, TProps, TOwnProps = null> = TOwnProps extends null | undefined ? (state: S) => TProps : (state: S, ownProps: TOwnProps) => TProps;
export declare type MapStateToProps<TStateProps, TOwnProps, State> = (state: State, ownProps: TOwnProps) => TStateProps;
export declare type MapStateToPropsFactory<TStateProps, TOwnProps, State> = (initialState: State, ownProps: TOwnProps) => MapStateToProps<TStateProps, TOwnProps, State>;
export declare type MapStateToPropsParam<TStateProps, TOwnProps, State> = MapStateToPropsFactory<TStateProps, TOwnProps, State> | MapStateToProps<TStateProps, TOwnProps, State> | null | undefined;
export declare type MapDispatchToPropsFunction<TDispatchProps, TOwnProps> = (dispatch: Dispatch<Action<unknown>>, ownProps: TOwnProps) => TDispatchProps;
export declare type MapDispatchToProps<TDispatchProps, TOwnProps> = MapDispatchToPropsFunction<TDispatchProps, TOwnProps> | TDispatchProps;
export declare type MapDispatchToPropsFactory<TDispatchProps, TOwnProps> = (dispatch: Dispatch<Action<unknown>>, ownProps: TOwnProps) => MapDispatchToPropsFunction<TDispatchProps, TOwnProps>;
export declare type MapDispatchToPropsParam<TDispatchProps, TOwnProps> = MapDispatchToPropsFactory<TDispatchProps, TOwnProps> | MapDispatchToProps<TDispatchProps, TOwnProps>;
export declare type MapDispatchToPropsNonObject<TDispatchProps, TOwnProps> = MapDispatchToPropsFactory<TDispatchProps, TOwnProps> | MapDispatchToPropsFunction<TDispatchProps, TOwnProps>;
export declare type MergeProps<TStateProps, TDispatchProps, TOwnProps, TMergedProps> = (stateProps: TStateProps, dispatchProps: TDispatchProps, ownProps: TOwnProps) => TMergedProps;
interface PureSelectorFactoryComparisonOptions<TStateProps, TOwnProps, State> {
    readonly areStatesEqual: ExtendedEqualityFn<State, TOwnProps>;
    readonly areStatePropsEqual: EqualityFn<TStateProps>;
    readonly areOwnPropsEqual: EqualityFn<TOwnProps>;
}
export declare function pureFinalPropsSelectorFactory<TStateProps, TOwnProps, TDispatchProps, TMergedProps, State>(mapStateToProps: WrappedMapStateToProps<TStateProps, TOwnProps, State>, mapDispatchToProps: WrappedMapDispatchToProps<TDispatchProps, TOwnProps>, mergeProps: MergeProps<TStateProps, TDispatchProps, TOwnProps, TMergedProps>, dispatch: Dispatch<Action<unknown>>, { areStatesEqual, areOwnPropsEqual, areStatePropsEqual, }: PureSelectorFactoryComparisonOptions<TStateProps, TOwnProps, State>): (nextState: State, nextOwnProps: TOwnProps) => TMergedProps;
interface WrappedMapStateToProps<TStateProps, TOwnProps, State> {
    (state: State, ownProps: TOwnProps): TStateProps;
    readonly dependsOnOwnProps: boolean;
}
interface WrappedMapDispatchToProps<TDispatchProps, TOwnProps> {
    (dispatch: Dispatch<Action<unknown>>, ownProps: TOwnProps): TDispatchProps;
    readonly dependsOnOwnProps: boolean;
}
export interface InitOptions<TStateProps, TOwnProps, TMergedProps, State> extends PureSelectorFactoryComparisonOptions<TStateProps, TOwnProps, State> {
    readonly shouldHandleStateChanges: boolean;
    readonly displayName: string;
    readonly wrappedComponentName: string;
    readonly WrappedComponent: ComponentType<TOwnProps>;
    readonly areMergedPropsEqual: EqualityFn<TMergedProps>;
}
export interface SelectorFactoryOptions<TStateProps, TOwnProps, TDispatchProps, TMergedProps, State> extends InitOptions<TStateProps, TOwnProps, TMergedProps, State> {
    readonly initMapStateToProps: (dispatch: Dispatch<Action<unknown>>, options: InitOptions<TStateProps, TOwnProps, TMergedProps, State>) => WrappedMapStateToProps<TStateProps, TOwnProps, State>;
    readonly initMapDispatchToProps: (dispatch: Dispatch<Action<unknown>>, options: InitOptions<TStateProps, TOwnProps, TMergedProps, State>) => WrappedMapDispatchToProps<TDispatchProps, TOwnProps>;
    readonly initMergeProps: (dispatch: Dispatch<Action<unknown>>, options: InitOptions<TStateProps, TOwnProps, TMergedProps, State>) => MergeProps<TStateProps, TDispatchProps, TOwnProps, TMergedProps>;
}
export default function finalPropsSelectorFactory<TStateProps, TOwnProps, TDispatchProps, TMergedProps, State>(dispatch: Dispatch<Action<unknown>>, { initMapStateToProps, initMapDispatchToProps, initMergeProps, ...options }: SelectorFactoryOptions<TStateProps, TOwnProps, TDispatchProps, TMergedProps, State>): (nextState: State, nextOwnProps: TOwnProps) => TMergedProps;
export {};

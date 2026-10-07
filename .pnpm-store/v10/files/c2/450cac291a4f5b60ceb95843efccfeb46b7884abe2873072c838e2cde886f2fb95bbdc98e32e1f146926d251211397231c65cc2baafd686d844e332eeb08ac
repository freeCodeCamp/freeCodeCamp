import type { Action, Dispatch } from 'redux';
import type { MergeProps } from './selectorFactory';
import type { EqualityFn } from '../types';
export declare function defaultMergeProps<TStateProps, TDispatchProps, TOwnProps, TMergedProps>(stateProps: TStateProps, dispatchProps: TDispatchProps, ownProps: TOwnProps): TMergedProps;
export declare function wrapMergePropsFunc<TStateProps, TDispatchProps, TOwnProps, TMergedProps>(mergeProps: MergeProps<TStateProps, TDispatchProps, TOwnProps, TMergedProps>): (dispatch: Dispatch<Action<unknown>>, options: {
    readonly displayName: string;
    readonly areMergedPropsEqual: EqualityFn<TMergedProps>;
}) => MergeProps<TStateProps, TDispatchProps, TOwnProps, TMergedProps>;
export declare function mergePropsFactory<TStateProps, TDispatchProps, TOwnProps, TMergedProps>(mergeProps?: MergeProps<TStateProps, TDispatchProps, TOwnProps, TMergedProps>): ((dispatch: Dispatch<Action<unknown>>, options: {
    readonly wrappedComponentName: string;
}) => never) | ((dispatch: Dispatch<Action<unknown>>, options: {
    readonly displayName: string;
    readonly areMergedPropsEqual: EqualityFn<TMergedProps>;
}) => MergeProps<TStateProps, TDispatchProps, TOwnProps, TMergedProps>);

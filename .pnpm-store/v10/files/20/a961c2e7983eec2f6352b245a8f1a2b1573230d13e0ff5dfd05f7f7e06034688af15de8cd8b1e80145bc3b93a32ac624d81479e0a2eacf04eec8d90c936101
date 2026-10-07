import type { Store } from 'redux';
import type { InferableComponentEnhancer, InferableComponentEnhancerWithProps, ResolveThunks, DispatchProp } from '../types';
import type { MapStateToPropsParam, MapDispatchToPropsParam, MergeProps, MapDispatchToPropsNonObject } from '../connect/selectorFactory';
import type { ReactReduxContextInstance } from './Context';
import { ReactReduxContext } from './Context';
import type { uSES } from '../utils/useSyncExternalStore';
export declare const initializeConnect: (fn: uSES) => void;
export interface ConnectProps {
    /** A custom Context instance that the component can use to access the store from an alternate Provider using that same Context instance */
    context?: ReactReduxContextInstance;
    /** A Redux store instance to be used for subscriptions instead of the store from a Provider */
    store?: Store;
}
/**
 * Infers the type of props that a connector will inject into a component.
 */
export declare type ConnectedProps<TConnector> = TConnector extends InferableComponentEnhancerWithProps<infer TInjectedProps, any> ? unknown extends TInjectedProps ? TConnector extends InferableComponentEnhancer<infer TInjectedProps> ? TInjectedProps : never : TInjectedProps : never;
export interface ConnectOptions<State = unknown, TStateProps = {}, TOwnProps = {}, TMergedProps = {}> {
    forwardRef?: boolean;
    context?: typeof ReactReduxContext;
    areStatesEqual?: (nextState: State, prevState: State, nextOwnProps: TOwnProps, prevOwnProps: TOwnProps) => boolean;
    areOwnPropsEqual?: (nextOwnProps: TOwnProps, prevOwnProps: TOwnProps) => boolean;
    areStatePropsEqual?: (nextStateProps: TStateProps, prevStateProps: TStateProps) => boolean;
    areMergedPropsEqual?: (nextMergedProps: TMergedProps, prevMergedProps: TMergedProps) => boolean;
}
/**
 * Connects a React component to a Redux store.
 *
 * - Without arguments, just wraps the component, without changing the behavior / props
 *
 * - If 2 params are passed (3rd param, mergeProps, is skipped), default behavior
 * is to override ownProps (as stated in the docs), so what remains is everything that's
 * not a state or dispatch prop
 *
 * - When 3rd param is passed, we don't know if ownProps propagate and whether they
 * should be valid component props, because it depends on mergeProps implementation.
 * As such, it is the user's responsibility to extend ownProps interface from state or
 * dispatch props or both when applicable
 *
 * @param mapStateToProps
 * @param mapDispatchToProps
 * @param mergeProps
 * @param options
 */
export interface Connect<DefaultState = unknown> {
    (): InferableComponentEnhancer<DispatchProp>;
    /** mapState only */
    <TStateProps = {}, no_dispatch = {}, TOwnProps = {}, State = DefaultState>(mapStateToProps: MapStateToPropsParam<TStateProps, TOwnProps, State>): InferableComponentEnhancerWithProps<TStateProps & DispatchProp, TOwnProps>;
    /** mapDispatch only (as a function) */
    <no_state = {}, TDispatchProps = {}, TOwnProps = {}>(mapStateToProps: null | undefined, mapDispatchToProps: MapDispatchToPropsNonObject<TDispatchProps, TOwnProps>): InferableComponentEnhancerWithProps<TDispatchProps, TOwnProps>;
    /** mapDispatch only (as an object) */
    <no_state = {}, TDispatchProps = {}, TOwnProps = {}>(mapStateToProps: null | undefined, mapDispatchToProps: MapDispatchToPropsParam<TDispatchProps, TOwnProps>): InferableComponentEnhancerWithProps<ResolveThunks<TDispatchProps>, TOwnProps>;
    /** mapState and mapDispatch (as a function)*/
    <TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState>(mapStateToProps: MapStateToPropsParam<TStateProps, TOwnProps, State>, mapDispatchToProps: MapDispatchToPropsNonObject<TDispatchProps, TOwnProps>): InferableComponentEnhancerWithProps<TStateProps & TDispatchProps, TOwnProps>;
    /** mapState and mapDispatch (nullish) */
    <TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState>(mapStateToProps: MapStateToPropsParam<TStateProps, TOwnProps, State>, mapDispatchToProps: null | undefined): InferableComponentEnhancerWithProps<TStateProps, TOwnProps>;
    /** mapState and mapDispatch (as an object) */
    <TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState>(mapStateToProps: MapStateToPropsParam<TStateProps, TOwnProps, State>, mapDispatchToProps: MapDispatchToPropsParam<TDispatchProps, TOwnProps>): InferableComponentEnhancerWithProps<TStateProps & ResolveThunks<TDispatchProps>, TOwnProps>;
    /** mergeProps only */
    <no_state = {}, no_dispatch = {}, TOwnProps = {}, TMergedProps = {}>(mapStateToProps: null | undefined, mapDispatchToProps: null | undefined, mergeProps: MergeProps<undefined, DispatchProp, TOwnProps, TMergedProps>): InferableComponentEnhancerWithProps<TMergedProps, TOwnProps>;
    /** mapState and mergeProps */
    <TStateProps = {}, no_dispatch = {}, TOwnProps = {}, TMergedProps = {}, State = DefaultState>(mapStateToProps: MapStateToPropsParam<TStateProps, TOwnProps, State>, mapDispatchToProps: null | undefined, mergeProps: MergeProps<TStateProps, DispatchProp, TOwnProps, TMergedProps>): InferableComponentEnhancerWithProps<TMergedProps, TOwnProps>;
    /** mapDispatch (as a object) and mergeProps */
    <no_state = {}, TDispatchProps = {}, TOwnProps = {}, TMergedProps = {}>(mapStateToProps: null | undefined, mapDispatchToProps: MapDispatchToPropsParam<TDispatchProps, TOwnProps>, mergeProps: MergeProps<undefined, TDispatchProps, TOwnProps, TMergedProps>): InferableComponentEnhancerWithProps<TMergedProps, TOwnProps>;
    /** mapState and options */
    <TStateProps = {}, no_dispatch = {}, TOwnProps = {}, State = DefaultState>(mapStateToProps: MapStateToPropsParam<TStateProps, TOwnProps, State>, mapDispatchToProps: null | undefined, mergeProps: null | undefined, options: ConnectOptions<State, TStateProps, TOwnProps>): InferableComponentEnhancerWithProps<DispatchProp & TStateProps, TOwnProps>;
    /** mapDispatch (as a function) and options */
    <TStateProps = {}, TDispatchProps = {}, TOwnProps = {}>(mapStateToProps: null | undefined, mapDispatchToProps: MapDispatchToPropsNonObject<TDispatchProps, TOwnProps>, mergeProps: null | undefined, options: ConnectOptions<{}, TStateProps, TOwnProps>): InferableComponentEnhancerWithProps<TDispatchProps, TOwnProps>;
    /** mapDispatch (as an object) and options*/
    <TStateProps = {}, TDispatchProps = {}, TOwnProps = {}>(mapStateToProps: null | undefined, mapDispatchToProps: MapDispatchToPropsParam<TDispatchProps, TOwnProps>, mergeProps: null | undefined, options: ConnectOptions<{}, TStateProps, TOwnProps>): InferableComponentEnhancerWithProps<ResolveThunks<TDispatchProps>, TOwnProps>;
    /** mapState,  mapDispatch (as a function), and options */
    <TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState>(mapStateToProps: MapStateToPropsParam<TStateProps, TOwnProps, State>, mapDispatchToProps: MapDispatchToPropsNonObject<TDispatchProps, TOwnProps>, mergeProps: null | undefined, options: ConnectOptions<State, TStateProps, TOwnProps>): InferableComponentEnhancerWithProps<TStateProps & TDispatchProps, TOwnProps>;
    /** mapState,  mapDispatch (as an object), and options */
    <TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState>(mapStateToProps: MapStateToPropsParam<TStateProps, TOwnProps, State>, mapDispatchToProps: MapDispatchToPropsParam<TDispatchProps, TOwnProps>, mergeProps: null | undefined, options: ConnectOptions<State, TStateProps, TOwnProps>): InferableComponentEnhancerWithProps<TStateProps & ResolveThunks<TDispatchProps>, TOwnProps>;
    /** mapState, mapDispatch, mergeProps, and options */
    <TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, TMergedProps = {}, State = DefaultState>(mapStateToProps: MapStateToPropsParam<TStateProps, TOwnProps, State>, mapDispatchToProps: MapDispatchToPropsParam<TDispatchProps, TOwnProps>, mergeProps: MergeProps<TStateProps, TDispatchProps, TOwnProps, TMergedProps>, options?: ConnectOptions<State, TStateProps, TOwnProps, TMergedProps>): InferableComponentEnhancerWithProps<TMergedProps, TOwnProps>;
}
declare const _default: Connect<unknown>;
export default _default;

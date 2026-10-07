import {
    ClassAttributes,
    Component,
    ComponentClass,
    Context,
    JSX,
    JSXElementConstructor,
    NamedExoticComponent,
    ReactNode,
} from "react";

import { Action, AnyAction, Dispatch, Store } from "redux";

import hoistNonReactStatics = require("hoist-non-react-statics");

/**
 * This interface can be augmented by users to add default types for the root state when
 * using `react-redux`.
 * Use module augmentation to append your own type definition in a your_custom_type.d.ts file.
 * https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface DefaultRootState {}

export type AnyIfEmpty<T extends object> = keyof T extends never ? any : T;
export type RootStateOrAny = AnyIfEmpty<DefaultRootState>;

// Omit taken from https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type DistributiveOmit<T, K extends keyof T> = T extends unknown ? Omit<T, K> : never;

export interface DispatchProp<A extends Action = AnyAction> {
    dispatch: Dispatch<A>;
}

export type AdvancedComponentDecorator<TProps, TOwnProps> = (
    component: JSXElementConstructor<TProps>,
) => NamedExoticComponent<TOwnProps>;

/**
 * A property P will be present if:
 * - it is present in DecorationTargetProps
 *
 * Its value will be dependent on the following conditions
 * - if property P is present in InjectedProps and its definition extends the definition
 *   in DecorationTargetProps, then its definition will be that of DecorationTargetProps[P]
 * - if property P is not present in InjectedProps then its definition will be that of
 *   DecorationTargetProps[P]
 * - if property P is present in InjectedProps but does not extend the
 *   DecorationTargetProps[P] definition, its definition will be that of InjectedProps[P]
 */
export type Matching<InjectedProps, DecorationTargetProps> = {
    [P in keyof DecorationTargetProps]: P extends keyof InjectedProps
        ? InjectedProps[P] extends DecorationTargetProps[P] ? DecorationTargetProps[P]
        : InjectedProps[P]
        : DecorationTargetProps[P];
};

/**
 * a property P will be present if :
 * - it is present in both DecorationTargetProps and InjectedProps
 * - InjectedProps[P] can satisfy DecorationTargetProps[P]
 * ie: decorated component can accept more types than decorator is injecting
 *
 * For decoration, inject props or ownProps are all optionally
 * required by the decorated (right hand side) component.
 * But any property required by the decorated component must be satisfied by the injected property.
 */
export type Shared<
    InjectedProps,
    DecorationTargetProps,
> = {
    [P in Extract<keyof InjectedProps, keyof DecorationTargetProps>]?: InjectedProps[P] extends DecorationTargetProps[P]
        ? DecorationTargetProps[P]
        : never;
};

// Infers prop type from component C
export type GetProps<C> = C extends JSXElementConstructor<infer P>
    ? C extends ComponentClass<P> ? ClassAttributes<InstanceType<C>> & P : P
    : never;

// Applies LibraryManagedAttributes (proper handling of defaultProps
// and propTypes).
export type GetLibraryManagedProps<C> = JSX.LibraryManagedAttributes<C, GetProps<C>>;

// Defines WrappedComponent and derives non-react statics.
export type ConnectedComponent<
    C extends JSXElementConstructor<any>,
    P,
> = NamedExoticComponent<P> & hoistNonReactStatics.NonReactStatics<C> & {
    WrappedComponent: C;
};

// Injects props and removes them from the prop requirements.
// Will not pass through the injected props if they are passed in during
// render. Also adds new prop requirements from TNeedsProps.
// Uses distributive omit to preserve discriminated unions part of original prop type
export type InferableComponentEnhancerWithProps<TInjectedProps, TNeedsProps> = <
    C extends JSXElementConstructor<Matching<TInjectedProps, GetProps<C>>>,
>(
    component: C,
) => ConnectedComponent<
    C,
    DistributiveOmit<GetLibraryManagedProps<C>, keyof Shared<TInjectedProps, GetLibraryManagedProps<C>>> & TNeedsProps
>;

// Injects props and removes them from the prop requirements.
// Will not pass through the injected props if they are passed in during
// render.
export type InferableComponentEnhancer<TInjectedProps> = InferableComponentEnhancerWithProps<TInjectedProps, {}>;

export type InferThunkActionCreatorType<TActionCreator extends (...args: any[]) => any> = TActionCreator extends
    (...args: infer TParams) => (...args: any[]) => infer TReturn ? (...args: TParams) => TReturn
    : TActionCreator;

export type HandleThunkActionCreator<TActionCreator> = TActionCreator extends (...args: any[]) => any
    ? InferThunkActionCreatorType<TActionCreator>
    : TActionCreator;

// redux-thunk middleware returns thunk's return value from dispatch call
// https://github.com/reduxjs/redux-thunk#composition
export type ResolveThunks<TDispatchProps> = TDispatchProps extends { [key: string]: any } ? {
        [C in keyof TDispatchProps]: HandleThunkActionCreator<TDispatchProps[C]>;
    }
    : TDispatchProps;

// the conditional type is to support TypeScript 3.0, which does not support mapping over tuples and arrays;
// once the typings are updated to at least TypeScript 3.1, a simple mapped type can replace this mess
export type ResolveArrayThunks<TDispatchProps extends readonly any[]> = TDispatchProps extends
    [infer A1, infer A2, infer A3, infer A4, infer A5, infer A6, infer A7, infer A8, infer A9] ? [
        HandleThunkActionCreator<A1>,
        HandleThunkActionCreator<A2>,
        HandleThunkActionCreator<A3>,
        HandleThunkActionCreator<A4>,
        HandleThunkActionCreator<A5>,
        HandleThunkActionCreator<A6>,
        HandleThunkActionCreator<A7>,
        HandleThunkActionCreator<A8>,
        HandleThunkActionCreator<A9>,
    ]
    : TDispatchProps extends [infer A1, infer A2, infer A3, infer A4, infer A5, infer A6, infer A7, infer A8] ? [
            HandleThunkActionCreator<A1>,
            HandleThunkActionCreator<A2>,
            HandleThunkActionCreator<A3>,
            HandleThunkActionCreator<A4>,
            HandleThunkActionCreator<A5>,
            HandleThunkActionCreator<A6>,
            HandleThunkActionCreator<A7>,
            HandleThunkActionCreator<A8>,
        ]
    : TDispatchProps extends [infer A1, infer A2, infer A3, infer A4, infer A5, infer A6, infer A7] ? [
            HandleThunkActionCreator<A1>,
            HandleThunkActionCreator<A2>,
            HandleThunkActionCreator<A3>,
            HandleThunkActionCreator<A4>,
            HandleThunkActionCreator<A5>,
            HandleThunkActionCreator<A6>,
            HandleThunkActionCreator<A7>,
        ]
    : TDispatchProps extends [infer A1, infer A2, infer A3, infer A4, infer A5, infer A6] ? [
            HandleThunkActionCreator<A1>,
            HandleThunkActionCreator<A2>,
            HandleThunkActionCreator<A3>,
            HandleThunkActionCreator<A4>,
            HandleThunkActionCreator<A5>,
            HandleThunkActionCreator<A6>,
        ]
    : TDispatchProps extends [infer A1, infer A2, infer A3, infer A4, infer A5] ? [
            HandleThunkActionCreator<A1>,
            HandleThunkActionCreator<A2>,
            HandleThunkActionCreator<A3>,
            HandleThunkActionCreator<A4>,
            HandleThunkActionCreator<A5>,
        ]
    : TDispatchProps extends [infer A1, infer A2, infer A3, infer A4] ? [
            HandleThunkActionCreator<A1>,
            HandleThunkActionCreator<A2>,
            HandleThunkActionCreator<A3>,
            HandleThunkActionCreator<A4>,
        ]
    : TDispatchProps extends [infer A1, infer A2, infer A3]
        ? [HandleThunkActionCreator<A1>, HandleThunkActionCreator<A2>, HandleThunkActionCreator<A3>]
    : TDispatchProps extends [infer A1, infer A2] ? [HandleThunkActionCreator<A1>, HandleThunkActionCreator<A2>]
    : TDispatchProps extends [infer A1] ? [HandleThunkActionCreator<A1>]
    : TDispatchProps extends Array<infer A> ? Array<HandleThunkActionCreator<A>>
    : TDispatchProps extends ReadonlyArray<infer A> ? ReadonlyArray<HandleThunkActionCreator<A>>
    : never;

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
export interface Connect<DefaultState = DefaultRootState> {
    /* eslint-disable @definitelytyped/no-unnecessary-generics */
    (): InferableComponentEnhancer<DispatchProp>;

    <TStateProps = {}, no_dispatch = {}, TOwnProps = {}, State = DefaultState>(
        mapStateToProps: MapStateToPropsParam<TStateProps, TOwnProps, State>,
    ): InferableComponentEnhancerWithProps<TStateProps & DispatchProp, TOwnProps>;

    <no_state = {}, TDispatchProps = {}, TOwnProps = {}>(
        mapStateToProps: null | undefined,
        mapDispatchToProps: MapDispatchToPropsNonObject<TDispatchProps, TOwnProps>,
    ): InferableComponentEnhancerWithProps<TDispatchProps, TOwnProps>;

    <no_state = {}, TDispatchProps = {}, TOwnProps = {}>(
        mapStateToProps: null | undefined,
        mapDispatchToProps: MapDispatchToPropsParam<TDispatchProps, TOwnProps>,
    ): InferableComponentEnhancerWithProps<
        ResolveThunks<TDispatchProps>,
        TOwnProps
    >;

    <TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState>(
        mapStateToProps: MapStateToPropsParam<TStateProps, TOwnProps, State>,
        mapDispatchToProps: MapDispatchToPropsNonObject<TDispatchProps, TOwnProps>,
    ): InferableComponentEnhancerWithProps<TStateProps & TDispatchProps, TOwnProps>;

    <TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState>(
        mapStateToProps: MapStateToPropsParam<TStateProps, TOwnProps, State>,
        mapDispatchToProps: MapDispatchToPropsParam<TDispatchProps, TOwnProps>,
    ): InferableComponentEnhancerWithProps<
        TStateProps & ResolveThunks<TDispatchProps>,
        TOwnProps
    >;

    <no_state = {}, no_dispatch = {}, TOwnProps = {}, TMergedProps = {}>(
        mapStateToProps: null | undefined,
        mapDispatchToProps: null | undefined,
        mergeProps: MergeProps<undefined, DispatchProp, TOwnProps, TMergedProps>,
    ): InferableComponentEnhancerWithProps<TMergedProps, TOwnProps>;

    <TStateProps = {}, no_dispatch = {}, TOwnProps = {}, TMergedProps = {}, State = DefaultState>(
        mapStateToProps: MapStateToPropsParam<TStateProps, TOwnProps, State>,
        mapDispatchToProps: null | undefined,
        mergeProps: MergeProps<TStateProps, DispatchProp, TOwnProps, TMergedProps>,
    ): InferableComponentEnhancerWithProps<TMergedProps, TOwnProps>;

    <no_state = {}, TDispatchProps = {}, TOwnProps = {}, TMergedProps = {}>(
        mapStateToProps: null | undefined,
        mapDispatchToProps: MapDispatchToPropsParam<TDispatchProps, TOwnProps>,
        mergeProps: MergeProps<undefined, TDispatchProps, TOwnProps, TMergedProps>,
    ): InferableComponentEnhancerWithProps<TMergedProps, TOwnProps>;

    <TStateProps = {}, no_dispatch = {}, TOwnProps = {}, State = DefaultState>(
        mapStateToProps: MapStateToPropsParam<TStateProps, TOwnProps, State>,
        mapDispatchToProps: null | undefined,
        mergeProps: null | undefined,
        options: Options<State, TStateProps, TOwnProps>,
    ): InferableComponentEnhancerWithProps<DispatchProp & TStateProps, TOwnProps>;

    <TStateProps = {}, TDispatchProps = {}, TOwnProps = {}>(
        mapStateToProps: null | undefined,
        mapDispatchToProps: MapDispatchToPropsNonObject<TDispatchProps, TOwnProps>,
        mergeProps: null | undefined,
        options: Options<{}, TStateProps, TOwnProps>,
    ): InferableComponentEnhancerWithProps<TDispatchProps, TOwnProps>;

    <TStateProps = {}, TDispatchProps = {}, TOwnProps = {}>(
        mapStateToProps: null | undefined,
        mapDispatchToProps: MapDispatchToPropsParam<TDispatchProps, TOwnProps>,
        mergeProps: null | undefined,
        options: Options<{}, TStateProps, TOwnProps>,
    ): InferableComponentEnhancerWithProps<
        ResolveThunks<TDispatchProps>,
        TOwnProps
    >;

    <TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState>(
        mapStateToProps: MapStateToPropsParam<TStateProps, TOwnProps, State>,
        mapDispatchToProps: MapDispatchToPropsNonObject<TDispatchProps, TOwnProps>,
        mergeProps: null | undefined,
        options: Options<State, TStateProps, TOwnProps>,
    ): InferableComponentEnhancerWithProps<TStateProps & TDispatchProps, TOwnProps>;

    <TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultState>(
        mapStateToProps: MapStateToPropsParam<TStateProps, TOwnProps, State>,
        mapDispatchToProps: MapDispatchToPropsParam<TDispatchProps, TOwnProps>,
        mergeProps: null | undefined,
        options: Options<State, TStateProps, TOwnProps>,
    ): InferableComponentEnhancerWithProps<
        TStateProps & ResolveThunks<TDispatchProps>,
        TOwnProps
    >;

    <TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, TMergedProps = {}, State = DefaultState>(
        mapStateToProps: MapStateToPropsParam<TStateProps, TOwnProps, State>,
        mapDispatchToProps: MapDispatchToPropsParam<TDispatchProps, TOwnProps>,
        mergeProps: MergeProps<TStateProps, TDispatchProps, TOwnProps, TMergedProps>,
        options?: Options<State, TStateProps, TOwnProps, TMergedProps>,
    ): InferableComponentEnhancerWithProps<TMergedProps, TOwnProps>;
    /* eslint-enable @definitelytyped/no-unnecessary-generics */
}

/**
 * Infers the type of props that a connector will inject into a component.
 */
export type ConnectedProps<TConnector> = TConnector extends
    InferableComponentEnhancerWithProps<infer TInjectedProps, any>
    ? unknown extends TInjectedProps
        ? TConnector extends InferableComponentEnhancer<infer TInjectedProps> ? TInjectedProps
        : never
    : TInjectedProps
    : never;

/**
 * The connect function. See {@type Connect} for details.
 */
export const connect: Connect;

export type MapStateToProps<TStateProps, TOwnProps, State = DefaultRootState> = (
    state: State,
    ownProps: TOwnProps,
) => TStateProps;

export type MapStateToPropsFactory<TStateProps, TOwnProps, State = DefaultRootState> = (
    initialState: State,
    ownProps: TOwnProps,
) => MapStateToProps<TStateProps, TOwnProps, State>;

export type MapStateToPropsParam<TStateProps, TOwnProps, State = DefaultRootState> =
    | MapStateToPropsFactory<TStateProps, TOwnProps, State>
    | MapStateToProps<TStateProps, TOwnProps, State>
    | null
    | undefined;

export type MapDispatchToPropsFunction<TDispatchProps, TOwnProps> = (
    dispatch: Dispatch<Action>,
    ownProps: TOwnProps,
) => TDispatchProps;

export type MapDispatchToProps<TDispatchProps, TOwnProps> =
    | MapDispatchToPropsFunction<TDispatchProps, TOwnProps>
    | TDispatchProps;

export type MapDispatchToPropsFactory<TDispatchProps, TOwnProps> = (
    dispatch: Dispatch<Action>,
    ownProps: TOwnProps,
) => MapDispatchToPropsFunction<TDispatchProps, TOwnProps>;

export type MapDispatchToPropsParam<TDispatchProps, TOwnProps> =
    | MapDispatchToPropsFactory<TDispatchProps, TOwnProps>
    | MapDispatchToProps<TDispatchProps, TOwnProps>;

export type MapDispatchToPropsNonObject<TDispatchProps, TOwnProps> =
    | MapDispatchToPropsFactory<TDispatchProps, TOwnProps>
    | MapDispatchToPropsFunction<TDispatchProps, TOwnProps>;

export type MergeProps<TStateProps, TDispatchProps, TOwnProps, TMergedProps> = (
    stateProps: TStateProps,
    dispatchProps: TDispatchProps,
    ownProps: TOwnProps,
) => TMergedProps;

export interface Options<State = DefaultRootState, TStateProps = {}, TOwnProps = {}, TMergedProps = {}>
    extends ConnectOptions
{
    /**
     * If true, implements shouldComponentUpdate and shallowly compares the result of mergeProps,
     * preventing unnecessary updates, assuming that the component is a “pure” component
     * and does not rely on any input or state other than its props and the selected Redux store’s state.
     * Defaults to true.
     * @default true
     */
    pure?: boolean | undefined;

    /**
     * When pure, compares incoming store state to its previous value.
     * @default strictEqual
     */
    areStatesEqual?: ((nextState: State, prevState: State) => boolean) | undefined;

    /**
     * When pure, compares incoming props to its previous value.
     * @default shallowEqual
     */
    areOwnPropsEqual?: ((nextOwnProps: TOwnProps, prevOwnProps: TOwnProps) => boolean) | undefined;

    /**
     * When pure, compares the result of mapStateToProps to its previous value.
     * @default shallowEqual
     */
    areStatePropsEqual?: ((nextStateProps: TStateProps, prevStateProps: TStateProps) => boolean) | undefined;

    /**
     * When pure, compares the result of mergeProps to its previous value.
     * @default shallowEqual
     */
    areMergedPropsEqual?: ((nextMergedProps: TMergedProps, prevMergedProps: TMergedProps) => boolean) | undefined;

    /**
     * If true, use React's forwardRef to expose a ref of the wrapped component
     *
     * @default false
     */
    forwardRef?: boolean | undefined;
}

/**
 * Connects a React component to a Redux store. It is the base for {@link connect} but is less opinionated about
 * how to combine <code>state</code>, <code>props</code>, and <code>dispatch</code> into your final props. It makes no
 * assumptions about defaults or memoization of results, leaving those responsibilities to the caller.It does not
 * modify the component class passed to it; instead, it returns a new, connected component for you to use.
 *
 * @param selectorFactory The selector factory. See SelectorFactory type for details.
 * @param connectOptions If specified, further customizes the behavior of the connector. Additionally, any extra
 *     options will be passed through to your <code>selectorFactory</code> in the <code>factoryOptions</code> argument.
 */
// eslint-disable-next-line @definitelytyped/no-unnecessary-generics
export function connectAdvanced<S, TProps, TOwnProps, TFactoryOptions = {}>(
    selectorFactory: SelectorFactory<S, TProps, TOwnProps, TFactoryOptions>,
    connectOptions?: ConnectOptions & TFactoryOptions,
): AdvancedComponentDecorator<TProps, TOwnProps>;

/**
 * Initializes a selector function (during each instance's constructor). That selector function is called any time the
 * connector component needs to compute new props, as a result of a store state change or receiving new props. The
 * result of <code>selector</code> is expected to be a plain object, which is passed as the props to the wrapped
 * component. If a consecutive call to <code>selector</code> returns the same object (<code>===</code>) as its previous
 * call, the component will not be re-rendered. It's the responsibility of <code>selector</code> to return that
 * previous object when appropriate.
 */
export type SelectorFactory<S, TProps, TOwnProps, TFactoryOptions> = (
    dispatch: Dispatch<Action>,
    factoryOptions: TFactoryOptions,
) => Selector<S, TProps, TOwnProps>;

export type Selector<S, TProps, TOwnProps = null> = TOwnProps extends null | undefined ? (state: S) => TProps
    : (state: S, ownProps: TOwnProps) => TProps;

export interface ConnectOptions {
    /**
     * Computes the connector component's displayName property relative to that of the wrapped component. Usually
     * overridden by wrapper functions.
     *
     * @default name => 'ConnectAdvanced('+name+')'
     * @param componentName
     */
    getDisplayName?: ((componentName: string) => string) | undefined;
    /**
     * Shown in error messages. Usually overridden by wrapper functions.
     *
     * @default 'connectAdvanced'
     */
    methodName?: string | undefined;
    /**
     * If defined, a property named this value will be added to the props passed to the wrapped component. Its value
     * will be the number of times the component has been rendered, which can be useful for tracking down unnecessary
     * re-renders.
     *
     * @default undefined
     */
    renderCountProp?: string | undefined;
    /**
     * Controls whether the connector component subscribes to redux store state changes. If set to false, it will only
     * re-render on <code>componentWillReceiveProps</code>.
     *
     * @default true
     */
    shouldHandleStateChanges?: boolean | undefined;
    /**
     * The key of props/context to get the store. You probably only need this if you are in the inadvisable position of
     * having multiple stores.
     *
     * @default 'store'
     */
    storeKey?: string | undefined;
    /**
     * @deprecated Use forwardRef
     *
     * @default false
     */
    withRef?: boolean | undefined;
    /**
     * The react context to get the store from.
     *
     * @default ReactReduxContext
     */
    context?: Context<ReactReduxContextValue> | undefined;
}

export interface ReactReduxContextValue<SS = any, A extends Action = AnyAction> {
    store: Store<SS, A>;
    storeState: SS;
}

export interface ProviderProps<A extends Action = AnyAction> {
    /**
     * The single Redux store in your application.
     */
    store: Store<any, A>;
    /**
     * Optional context to be used internally in react-redux. Use React.createContext() to create a context to be used.
     * If this is used, generate own connect HOC by using connectAdvanced, supplying the same context provided to the
     * Provider. Initial value doesn't matter, as it is overwritten with the internal state of Provider.
     */
    context?: Context<ReactReduxContextValue> | undefined;
    children?: ReactNode;
}

/**
 * Makes the Redux store available to the connect() calls in the component hierarchy below.
 */
export class Provider<A extends Action = AnyAction> extends Component<ProviderProps<A>> {}

/**
 * Exposes the internal context used in react-redux. It is generally advised to use the connect HOC to connect to the
 * redux store instead of this approach.
 */
export const ReactReduxContext: Context<ReactReduxContextValue>;

/**
 * Wraps ReactDOM or React Native's internal unstable_batchedUpdate function. You can use it to ensure that
 * multiple actions dispatched outside of React only result in a single render update.
 */
export function batch(cb: () => void): void;

/* eslint-disable @definitelytyped/no-unnecessary-generics */

/**
 * Compares two arbitrary values for shallow equality. Object values are compared based on their keys, i.e. they must
 * have the same keys and for each key the value must be equal according to the `Object.is()` algorithm. Non-object
 * values are also compared with the same algorithm as `Object.is()`.
 */
export function shallowEqual<T>(left: T, right: any): boolean;

/**
 * A hook to access the redux `dispatch` function.
 *
 * Note for `redux-thunk` users: the return type of the returned `dispatch` functions for thunks is incorrect.
 * However, it is possible to get a correctly typed `dispatch` function by creating your own custom hook typed
 * from the store's dispatch function like this: `const useThunkDispatch = () => useDispatch<typeof store.dispatch>();`
 *
 * @returns redux store's `dispatch` function
 *
 * @example
 *
 * import React from 'react'
 * import { useDispatch } from 'react-redux'
 *
 * export const CounterComponent = ({ value }) => {
 *   const dispatch = useDispatch()
 *   return (
 *     <div>
 *       <span>{value}</span>
 *       <button onClick={() => dispatch({ type: 'increase-counter' })}>
 *         Increase counter
 *       </button>
 *     </div>
 *   )
 * }
 */
// NOTE: the first overload below and note above can be removed if redux-thunk typings add an overload for
// the Dispatch function (see also this PR: https://github.com/reduxjs/redux-thunk/pull/247)
export function useDispatch<TDispatch = Dispatch<any>>(): TDispatch;
export function useDispatch<A extends Action = AnyAction>(): Dispatch<A>;

/**
 * A hook to access the redux store's state. This hook takes a selector function
 * as an argument. The selector is called with the store state.
 *
 * This hook takes an optional equality comparison function as the second parameter
 * that allows you to customize the way the selected state is compared to determine
 * whether the component needs to be re-rendered.
 *
 * If you do not want to have to specify the root state type for whenever you use
 * this hook with an inline selector you can use the `TypedUseSelectorHook` interface
 * to create a version of this hook that is properly typed for your root state.
 *
 * @param selector the selector function
 * @param equalityFn the function that will be used to determine equality
 *
 * @returns the selected state
 *
 * @example
 *
 * import React from 'react'
 * import { useSelector } from 'react-redux'
 * import { RootState } from './store'
 *
 * export const CounterComponent = () => {
 *   const counter = useSelector((state: RootState) => state.counter)
 *   return <div>{counter}</div>
 * }
 */
export function useSelector<TState = DefaultRootState, TSelected = unknown>(
    selector: (state: TState) => TSelected,
    equalityFn?: (left: TSelected, right: TSelected) => boolean,
): TSelected;

/**
 * This interface allows you to easily create a hook that is properly typed for your
 * store's root state.
 *
 * @example
 *
 * interface RootState {
 *   property: string;
 * }
 *
 * const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
 */
export interface TypedUseSelectorHook<TState> {
    <TSelected>(
        selector: (state: TState) => TSelected,
        equalityFn?: (left: TSelected, right: TSelected) => boolean,
    ): TSelected;
}

/**
 * A hook to access the redux store.
 *
 * @returns the redux store
 *
 * @example
 *
 * import React from 'react'
 * import { useStore } from 'react-redux'
 *
 * export const ExampleComponent = () => {
 *   const store = useStore()
 *   return <div>{store.getState()}</div>
 * }
 */
export function useStore<S = RootStateOrAny, A extends Action = AnyAction>(): Store<S, A>;

/**
 * Hook factory, which creates a `useSelector` hook bound to a given context.
 *
 * @param Context passed to your `<Provider>`.
 * @returns A `useSelector` hook bound to the specified context.
 */
export function createSelectorHook<S = RootStateOrAny, A extends Action = AnyAction>(
    context?: Context<ReactReduxContextValue<S, A>>,
): <Selected extends unknown>(
    selector: (state: S) => Selected,
    equalityFn?: (previous: Selected, next: Selected) => boolean,
) => Selected;

/**
 * Hook factory, which creates a `useStore` hook bound to a given context.
 *
 * @param Context passed to your `<Provider>`.
 * @returns A `useStore` hook bound to the specified context.
 */
export function createStoreHook<S = RootStateOrAny, A extends Action = AnyAction>(
    context?: Context<ReactReduxContextValue<S, A>>,
): () => Store<S, A>;

/**
 * Hook factory, which creates a `useDispatch` hook bound to a given context.
 *
 * @param Context passed to your `<Provider>`.
 * @returns A `useDispatch` hook bound to the specified context.
 */
export function createDispatchHook<S = RootStateOrAny, A extends Action = AnyAction>(
    context?: Context<ReactReduxContextValue<S, A>>,
): () => Dispatch<A>;

/* eslint-enable @definitelytyped/no-unnecessary-generics */

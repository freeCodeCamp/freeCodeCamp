import type {
  ClassAttributes,
  ComponentClass,
  ComponentType,
  FunctionComponent,
} from 'react'

import type { Action, AnyAction, Dispatch } from 'redux'

import type { NonReactStatics } from 'hoist-non-react-statics'

import type { ConnectProps } from './components/connect'

import type { UseSelectorOptions } from './hooks/useSelector'

export type FixTypeLater = any

export type EqualityFn<T> = (a: T, b: T) => boolean

export type ExtendedEqualityFn<T, P> = (a: T, b: T, c: P, d: P) => boolean

export type AnyIfEmpty<T extends object> = keyof T extends never ? any : T

export type DistributiveOmit<T, K extends keyof T> = T extends unknown
  ? Omit<T, K>
  : never

export interface DispatchProp<A extends Action = AnyAction> {
  dispatch: Dispatch<A>
}

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
    ? InjectedProps[P] extends DecorationTargetProps[P]
      ? DecorationTargetProps[P]
      : InjectedProps[P]
    : DecorationTargetProps[P]
}

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
export type Shared<InjectedProps, DecorationTargetProps> = {
  [P in Extract<
    keyof InjectedProps,
    keyof DecorationTargetProps
  >]?: InjectedProps[P] extends DecorationTargetProps[P]
    ? DecorationTargetProps[P]
    : never
}

// Infers prop type from component C
export type GetProps<C> = C extends ComponentType<infer P>
  ? C extends ComponentClass<P>
    ? ClassAttributes<InstanceType<C>> & P
    : P
  : never

// Applies LibraryManagedAttributes (proper handling of defaultProps
// and propTypes).
export type GetLibraryManagedProps<C> = JSX.LibraryManagedAttributes<
  C,
  GetProps<C>
>

// Applies LibraryManagedAttributes (proper handling of defaultProps
// and propTypes), as well as defines WrappedComponent.
export type ConnectedComponent<
  C extends ComponentType<any>,
  P
> = FunctionComponent<P> &
  NonReactStatics<C> & {
    WrappedComponent: C
  }

export type ConnectPropsMaybeWithoutContext<TActualOwnProps> =
  TActualOwnProps extends { context: any }
    ? Omit<ConnectProps, 'context'>
    : ConnectProps

type Identity<T> = T
export type Mapped<T> = Identity<{ [k in keyof T]: T[k] }>

// Injects props and removes them from the prop requirements.
// Will not pass through the injected props if they are passed in during
// render. Also adds new prop requirements from TNeedsProps.
// Uses distributive omit to preserve discriminated unions part of original prop type.
// Note> Most of the time TNeedsProps is empty, because the overloads in `Connect`
// just pass in `{}`.  The real props we need come from the component.
export type InferableComponentEnhancerWithProps<TInjectedProps, TNeedsProps> = <
  C extends ComponentType<Matching<TInjectedProps, GetProps<C>>>
>(
  component: C
) => ConnectedComponent<
  C,
  Mapped<
    DistributiveOmit<
      GetLibraryManagedProps<C>,
      keyof Shared<TInjectedProps, GetLibraryManagedProps<C>>
    > &
      TNeedsProps &
      ConnectPropsMaybeWithoutContext<TNeedsProps & GetProps<C>>
  >
>

// Injects props and removes them from the prop requirements.
// Will not pass through the injected props if they are passed in during
// render.
export type InferableComponentEnhancer<TInjectedProps> =
  InferableComponentEnhancerWithProps<TInjectedProps, {}>

export type InferThunkActionCreatorType<
  TActionCreator extends (...args: any[]) => any
> = TActionCreator extends (
  ...args: infer TParams
) => (...args: any[]) => infer TReturn
  ? (...args: TParams) => TReturn
  : TActionCreator

export type HandleThunkActionCreator<TActionCreator> = TActionCreator extends (
  ...args: any[]
) => any
  ? InferThunkActionCreatorType<TActionCreator>
  : TActionCreator

// redux-thunk middleware returns thunk's return value from dispatch call
// https://github.com/reduxjs/redux-thunk#composition
export type ResolveThunks<TDispatchProps> = TDispatchProps extends {
  [key: string]: any
}
  ? {
      [C in keyof TDispatchProps]: HandleThunkActionCreator<TDispatchProps[C]>
    }
  : TDispatchProps

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
    equalityFn?: EqualityFn<NoInfer<TSelected>>
  ): TSelected
  <Selected = unknown>(
    selector: (state: TState) => Selected,
    options?: UseSelectorOptions<Selected>
  ): Selected
}

export type NoInfer<T> = [T][T extends any ? 0 : never]

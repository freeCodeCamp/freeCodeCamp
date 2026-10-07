import type { Dispatch, Action } from 'redux'
import type { ComponentType } from 'react'
import verifySubselectors from './verifySubselectors'
import type { EqualityFn, ExtendedEqualityFn } from '../types'

export type SelectorFactory<S, TProps, TOwnProps, TFactoryOptions> = (
  dispatch: Dispatch<Action<unknown>>,
  factoryOptions: TFactoryOptions
) => Selector<S, TProps, TOwnProps>

export type Selector<S, TProps, TOwnProps = null> = TOwnProps extends
  | null
  | undefined
  ? (state: S) => TProps
  : (state: S, ownProps: TOwnProps) => TProps

export type MapStateToProps<TStateProps, TOwnProps, State> = (
  state: State,
  ownProps: TOwnProps
) => TStateProps

export type MapStateToPropsFactory<TStateProps, TOwnProps, State> = (
  initialState: State,
  ownProps: TOwnProps
) => MapStateToProps<TStateProps, TOwnProps, State>

export type MapStateToPropsParam<TStateProps, TOwnProps, State> =
  | MapStateToPropsFactory<TStateProps, TOwnProps, State>
  | MapStateToProps<TStateProps, TOwnProps, State>
  | null
  | undefined

export type MapDispatchToPropsFunction<TDispatchProps, TOwnProps> = (
  dispatch: Dispatch<Action<unknown>>,
  ownProps: TOwnProps
) => TDispatchProps

export type MapDispatchToProps<TDispatchProps, TOwnProps> =
  | MapDispatchToPropsFunction<TDispatchProps, TOwnProps>
  | TDispatchProps

export type MapDispatchToPropsFactory<TDispatchProps, TOwnProps> = (
  dispatch: Dispatch<Action<unknown>>,
  ownProps: TOwnProps
) => MapDispatchToPropsFunction<TDispatchProps, TOwnProps>

export type MapDispatchToPropsParam<TDispatchProps, TOwnProps> =
  | MapDispatchToPropsFactory<TDispatchProps, TOwnProps>
  | MapDispatchToProps<TDispatchProps, TOwnProps>

export type MapDispatchToPropsNonObject<TDispatchProps, TOwnProps> =
  | MapDispatchToPropsFactory<TDispatchProps, TOwnProps>
  | MapDispatchToPropsFunction<TDispatchProps, TOwnProps>

export type MergeProps<TStateProps, TDispatchProps, TOwnProps, TMergedProps> = (
  stateProps: TStateProps,
  dispatchProps: TDispatchProps,
  ownProps: TOwnProps
) => TMergedProps

interface PureSelectorFactoryComparisonOptions<TStateProps, TOwnProps, State> {
  readonly areStatesEqual: ExtendedEqualityFn<State, TOwnProps>
  readonly areStatePropsEqual: EqualityFn<TStateProps>
  readonly areOwnPropsEqual: EqualityFn<TOwnProps>
}

export function pureFinalPropsSelectorFactory<
  TStateProps,
  TOwnProps,
  TDispatchProps,
  TMergedProps,
  State
>(
  mapStateToProps: WrappedMapStateToProps<TStateProps, TOwnProps, State>,
  mapDispatchToProps: WrappedMapDispatchToProps<TDispatchProps, TOwnProps>,
  mergeProps: MergeProps<TStateProps, TDispatchProps, TOwnProps, TMergedProps>,
  dispatch: Dispatch<Action<unknown>>,
  {
    areStatesEqual,
    areOwnPropsEqual,
    areStatePropsEqual,
  }: PureSelectorFactoryComparisonOptions<TStateProps, TOwnProps, State>
) {
  let hasRunAtLeastOnce = false
  let state: State
  let ownProps: TOwnProps
  let stateProps: TStateProps
  let dispatchProps: TDispatchProps
  let mergedProps: TMergedProps

  function handleFirstCall(firstState: State, firstOwnProps: TOwnProps) {
    state = firstState
    ownProps = firstOwnProps
    stateProps = mapStateToProps(state, ownProps)
    dispatchProps = mapDispatchToProps(dispatch, ownProps)
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps)
    hasRunAtLeastOnce = true
    return mergedProps
  }

  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps)

    if (mapDispatchToProps.dependsOnOwnProps)
      dispatchProps = mapDispatchToProps(dispatch, ownProps)

    mergedProps = mergeProps(stateProps, dispatchProps, ownProps)
    return mergedProps
  }

  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps)
      stateProps = mapStateToProps(state, ownProps)

    if (mapDispatchToProps.dependsOnOwnProps)
      dispatchProps = mapDispatchToProps(dispatch, ownProps)

    mergedProps = mergeProps(stateProps, dispatchProps, ownProps)
    return mergedProps
  }

  function handleNewState() {
    const nextStateProps = mapStateToProps(state, ownProps)
    const statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps)
    stateProps = nextStateProps

    if (statePropsChanged)
      mergedProps = mergeProps(stateProps, dispatchProps, ownProps)

    return mergedProps
  }

  function handleSubsequentCalls(nextState: State, nextOwnProps: TOwnProps) {
    const propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps)
    const stateChanged = !areStatesEqual(
      nextState,
      state,
      nextOwnProps,
      ownProps
    )
    state = nextState
    ownProps = nextOwnProps

    if (propsChanged && stateChanged) return handleNewPropsAndNewState()
    if (propsChanged) return handleNewProps()
    if (stateChanged) return handleNewState()
    return mergedProps
  }

  return function pureFinalPropsSelector(
    nextState: State,
    nextOwnProps: TOwnProps
  ) {
    return hasRunAtLeastOnce
      ? handleSubsequentCalls(nextState, nextOwnProps)
      : handleFirstCall(nextState, nextOwnProps)
  }
}

interface WrappedMapStateToProps<TStateProps, TOwnProps, State> {
  (state: State, ownProps: TOwnProps): TStateProps
  readonly dependsOnOwnProps: boolean
}

interface WrappedMapDispatchToProps<TDispatchProps, TOwnProps> {
  (dispatch: Dispatch<Action<unknown>>, ownProps: TOwnProps): TDispatchProps
  readonly dependsOnOwnProps: boolean
}

export interface InitOptions<TStateProps, TOwnProps, TMergedProps, State>
  extends PureSelectorFactoryComparisonOptions<TStateProps, TOwnProps, State> {
  readonly shouldHandleStateChanges: boolean
  readonly displayName: string
  readonly wrappedComponentName: string
  readonly WrappedComponent: ComponentType<TOwnProps>
  readonly areMergedPropsEqual: EqualityFn<TMergedProps>
}

export interface SelectorFactoryOptions<
  TStateProps,
  TOwnProps,
  TDispatchProps,
  TMergedProps,
  State
> extends InitOptions<TStateProps, TOwnProps, TMergedProps, State> {
  readonly initMapStateToProps: (
    dispatch: Dispatch<Action<unknown>>,
    options: InitOptions<TStateProps, TOwnProps, TMergedProps, State>
  ) => WrappedMapStateToProps<TStateProps, TOwnProps, State>
  readonly initMapDispatchToProps: (
    dispatch: Dispatch<Action<unknown>>,
    options: InitOptions<TStateProps, TOwnProps, TMergedProps, State>
  ) => WrappedMapDispatchToProps<TDispatchProps, TOwnProps>
  readonly initMergeProps: (
    dispatch: Dispatch<Action<unknown>>,
    options: InitOptions<TStateProps, TOwnProps, TMergedProps, State>
  ) => MergeProps<TStateProps, TDispatchProps, TOwnProps, TMergedProps>
}

// TODO: Add more comments

// The selector returned by selectorFactory will memoize its results,
// allowing connect's shouldComponentUpdate to return false if final
// props have not changed.

export default function finalPropsSelectorFactory<
  TStateProps,
  TOwnProps,
  TDispatchProps,
  TMergedProps,
  State
>(
  dispatch: Dispatch<Action<unknown>>,
  {
    initMapStateToProps,
    initMapDispatchToProps,
    initMergeProps,
    ...options
  }: SelectorFactoryOptions<
    TStateProps,
    TOwnProps,
    TDispatchProps,
    TMergedProps,
    State
  >
) {
  const mapStateToProps = initMapStateToProps(dispatch, options)
  const mapDispatchToProps = initMapDispatchToProps(dispatch, options)
  const mergeProps = initMergeProps(dispatch, options)

  if (process.env.NODE_ENV !== 'production') {
    verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps)
  }

  return pureFinalPropsSelectorFactory<
    TStateProps,
    TOwnProps,
    TDispatchProps,
    TMergedProps,
    State
  >(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options)
}

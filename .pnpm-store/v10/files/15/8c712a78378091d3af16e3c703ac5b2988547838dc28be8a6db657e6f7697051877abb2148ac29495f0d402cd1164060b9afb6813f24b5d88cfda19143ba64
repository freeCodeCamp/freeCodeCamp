import type { Action, Dispatch } from 'redux'
import verifyPlainObject from '../utils/verifyPlainObject'
import { createInvalidArgFactory } from './invalidArgFactory'
import type { MergeProps } from './selectorFactory'
import type { EqualityFn } from '../types'

export function defaultMergeProps<
  TStateProps,
  TDispatchProps,
  TOwnProps,
  TMergedProps
>(
  stateProps: TStateProps,
  dispatchProps: TDispatchProps,
  ownProps: TOwnProps
): TMergedProps {
  // @ts-ignore
  return { ...ownProps, ...stateProps, ...dispatchProps }
}

export function wrapMergePropsFunc<
  TStateProps,
  TDispatchProps,
  TOwnProps,
  TMergedProps
>(
  mergeProps: MergeProps<TStateProps, TDispatchProps, TOwnProps, TMergedProps>
): (
  dispatch: Dispatch<Action<unknown>>,
  options: {
    readonly displayName: string
    readonly areMergedPropsEqual: EqualityFn<TMergedProps>
  }
) => MergeProps<TStateProps, TDispatchProps, TOwnProps, TMergedProps> {
  return function initMergePropsProxy(
    dispatch,
    { displayName, areMergedPropsEqual }
  ) {
    let hasRunOnce = false
    let mergedProps: TMergedProps

    return function mergePropsProxy(
      stateProps: TStateProps,
      dispatchProps: TDispatchProps,
      ownProps: TOwnProps
    ) {
      const nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps)

      if (hasRunOnce) {
        if (!areMergedPropsEqual(nextMergedProps, mergedProps))
          mergedProps = nextMergedProps
      } else {
        hasRunOnce = true
        mergedProps = nextMergedProps

        if (process.env.NODE_ENV !== 'production')
          verifyPlainObject(mergedProps, displayName, 'mergeProps')
      }

      return mergedProps
    }
  }
}

export function mergePropsFactory<
  TStateProps,
  TDispatchProps,
  TOwnProps,
  TMergedProps
>(
  mergeProps?: MergeProps<TStateProps, TDispatchProps, TOwnProps, TMergedProps>
) {
  return !mergeProps
    ? () => defaultMergeProps
    : typeof mergeProps === 'function'
    ? wrapMergePropsFunc(mergeProps)
    : createInvalidArgFactory(mergeProps, 'mergeProps')
}

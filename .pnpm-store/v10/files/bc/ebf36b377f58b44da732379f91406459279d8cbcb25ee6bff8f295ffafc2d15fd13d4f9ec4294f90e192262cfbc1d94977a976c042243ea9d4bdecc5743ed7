import type { Middleware } from 'redux'
import { isActionCreator as isRTKAction } from './createAction'

export interface ActionCreatorInvariantMiddlewareOptions {
  /**
   * The function to identify whether a value is an action creator.
   * The default checks for a function with a static type property and match method.
   */
  isActionCreator?: (action: unknown) => action is Function & { type?: unknown }
}

export function getMessage(type?: unknown) {
  const splitType = type ? `${type}`.split('/') : []
  const actionName = splitType[splitType.length - 1] || 'actionCreator'
  return `Detected an action creator with type "${
    type || 'unknown'
  }" being dispatched. 
Make sure you're calling the action creator before dispatching, i.e. \`dispatch(${actionName}())\` instead of \`dispatch(${actionName})\`. This is necessary even if the action has no payload.`
}

export function createActionCreatorInvariantMiddleware(
  options: ActionCreatorInvariantMiddlewareOptions = {},
): Middleware {
  if (process.env.NODE_ENV === 'production') {
    return () => (next) => (action) => next(action)
  }
  const { isActionCreator = isRTKAction } = options
  return () => (next) => (action) => {
    if (isActionCreator(action)) {
      console.warn(getMessage(action.type))
    }
    return next(action)
  }
}

import { Action, AnyAction, Middleware } from 'redux'

/**
 * The dispatch method as modified by React-Thunk; overloaded so that you can
 * dispatch:
 *   - standard (object) actions: `dispatch()` returns the action itself
 *   - thunk actions: `dispatch()` returns the thunk's return value
 *
 * @template State The redux state
 * @template ExtraThunkArg The extra argument passed to the inner function of
 * thunks (if specified when setting up the Thunk middleware)
 * @template BasicAction The (non-thunk) actions that can be dispatched.
 */
export interface ThunkDispatch<
  State,
  ExtraThunkArg,
  BasicAction extends Action
> {
  // When the thunk middleware is added, `store.dispatch` now has three overloads (NOTE: the order here matters for correct behavior and is very fragile - do not reorder these!):

  // 1) The specific thunk function overload
  /** Accepts a thunk function, runs it, and returns whatever the thunk itself returns */
  <ReturnType>(
    thunkAction: ThunkAction<ReturnType, State, ExtraThunkArg, BasicAction>
  ): ReturnType

  // 2) The base overload.
  /** Accepts a standard action object, and returns that action object */
  <Action extends BasicAction>(action: Action): Action

  // 3) A union of the other two overloads. This overload exists to work around a problem
  //   with TS inference ( see https://github.com/microsoft/TypeScript/issues/14107 )
  /** A union of the other two overloads for TS inference purposes */
  <ReturnType, Action extends BasicAction>(
    action: Action | ThunkAction<ReturnType, State, ExtraThunkArg, BasicAction>
  ): Action | ReturnType
}

/**
 * A "thunk" action (a callback function that can be dispatched to the Redux
 * store.)
 *
 * Also known as the "thunk inner function", when used with the typical pattern
 * of an action creator function that returns a thunk action.
 *
 * @template ReturnType The return type of the thunk's inner function
 * @template State The redux state
 * @template ExtraThunkArg Optional extra argument passed to the inner function
 * (if specified when setting up the Thunk middleware)
 * @template BasicAction The (non-thunk) actions that can be dispatched.
 */
export type ThunkAction<
  ReturnType,
  State,
  ExtraThunkArg,
  BasicAction extends Action
> = (
  dispatch: ThunkDispatch<State, ExtraThunkArg, BasicAction>,
  getState: () => State,
  extraArgument: ExtraThunkArg
) => ReturnType

/**
 * A generic type that takes a thunk action creator and returns a function
 * signature which matches how it would appear after being processed using
 * bindActionCreators(): a function that takes the arguments of the outer
 * function, and returns the return type of the inner "thunk" function.
 *
 * @template ActionCreator Thunk action creator to be wrapped
 */
export type ThunkActionDispatch<
  ActionCreator extends (...args: any[]) => ThunkAction<any, any, any, any>
> = (
  ...args: Parameters<ActionCreator>
) => ReturnType<ReturnType<ActionCreator>>

/**
 * @template State The redux state
 * @template BasicAction The (non-thunk) actions that can be dispatched
 * @template ExtraThunkArg An optional extra argument to pass to a thunk's
 * inner function. (Only used if you call `thunk.withExtraArgument()`)
 */
export type ThunkMiddleware<
  State = any,
  BasicAction extends Action = AnyAction,
  ExtraThunkArg = undefined
> = Middleware<
  ThunkDispatch<State, ExtraThunkArg, BasicAction>,
  State,
  ThunkDispatch<State, ExtraThunkArg, BasicAction>
>

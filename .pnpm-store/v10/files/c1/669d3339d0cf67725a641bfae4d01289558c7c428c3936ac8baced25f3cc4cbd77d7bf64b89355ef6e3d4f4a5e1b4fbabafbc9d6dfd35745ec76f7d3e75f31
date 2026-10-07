import { Action, UnknownAction } from './actions'

/* reducers */

/**
 * A *reducer* is a function that accepts
 * an accumulation and a value and returns a new accumulation. They are used
 * to reduce a collection of values down to a single value
 *
 * Reducers are not unique to Redux—they are a fundamental concept in
 * functional programming.  Even most non-functional languages, like
 * JavaScript, have a built-in API for reducing. In JavaScript, it's
 * `Array.prototype.reduce()`.
 *
 * In Redux, the accumulated value is the state object, and the values being
 * accumulated are actions. Reducers calculate a new state given the previous
 * state and an action. They must be *pure functions*—functions that return
 * the exact same output for given inputs. They should also be free of
 * side-effects. This is what enables exciting features like hot reloading and
 * time travel.
 *
 * Reducers are the most important concept in Redux.
 *
 * *Do not put API calls into reducers.*
 *
 * @template S The type of state consumed and produced by this reducer.
 * @template A The type of actions the reducer can potentially respond to.
 * @template PreloadedState The type of state consumed by this reducer the first time it's called.
 */
export type Reducer<
  S = any,
  A extends Action = UnknownAction,
  PreloadedState = S
> = (state: S | PreloadedState | undefined, action: A) => S

/**
 * Object whose values correspond to different reducer functions.
 *
 * @template S The combined state of the reducers.
 * @template A The type of actions the reducers can potentially respond to.
 * @template PreloadedState The combined preloaded state of the reducers.
 */
export type ReducersMapObject<
  S = any,
  A extends Action = UnknownAction,
  PreloadedState = S
> = keyof PreloadedState extends keyof S
  ? {
      [K in keyof S]: Reducer<
        S[K],
        A,
        K extends keyof PreloadedState ? PreloadedState[K] : never
      >
    }
  : never

/**
 * Infer a combined state shape from a `ReducersMapObject`.
 *
 * @template M Object map of reducers as provided to `combineReducers(map: M)`.
 */
export type StateFromReducersMapObject<M> = M[keyof M] extends
  | Reducer<any, any, any>
  | undefined
  ? {
      [P in keyof M]: M[P] extends Reducer<infer S, any, any> ? S : never
    }
  : never

/**
 * Infer reducer union type from a `ReducersMapObject`.
 *
 * @template M Object map of reducers as provided to `combineReducers(map: M)`.
 */
export type ReducerFromReducersMapObject<M> = M[keyof M] extends
  | Reducer<any, any, any>
  | undefined
  ? M[keyof M]
  : never

/**
 * Infer action type from a reducer function.
 *
 * @template R Type of reducer.
 */
export type ActionFromReducer<R> = R extends Reducer<any, infer A, any>
  ? A
  : never

/**
 * Infer action union type from a `ReducersMapObject`.
 *
 * @template M Object map of reducers as provided to `combineReducers(map: M)`.
 */
export type ActionFromReducersMapObject<M> = ActionFromReducer<
  ReducerFromReducersMapObject<M>
>

/**
 * Infer a combined preloaded state shape from a `ReducersMapObject`.
 *
 * @template M Object map of reducers as provided to `combineReducers(map: M)`.
 */
export type PreloadedStateShapeFromReducersMapObject<M> = M[keyof M] extends
  | Reducer<any, any, any>
  | undefined
  ? {
      [P in keyof M]: M[P] extends (
        inputState: infer InputState,
        action: UnknownAction
      ) => any
        ? InputState
        : never
    }
  : never

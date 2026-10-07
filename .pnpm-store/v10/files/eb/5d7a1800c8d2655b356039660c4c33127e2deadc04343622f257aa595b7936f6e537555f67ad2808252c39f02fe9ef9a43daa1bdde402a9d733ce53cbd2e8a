import { isAction } from './reduxImports'
import type {
  IsUnknownOrNonInferrable,
  IfMaybeUndefined,
  IfVoid,
  IsAny,
} from './tsHelpers'
import { hasMatchFunction } from './tsHelpers'

/**
 * An action with a string type and an associated payload. This is the
 * type of action returned by `createAction()` action creators.
 *
 * @template P The type of the action's payload.
 * @template T the type used for the action type.
 * @template M The type of the action's meta (optional)
 * @template E The type of the action's error (optional)
 *
 * @public
 */
export type PayloadAction<
  P = void,
  T extends string = string,
  M = never,
  E = never,
> = {
  payload: P
  type: T
} & ([M] extends [never]
  ? {}
  : {
      meta: M
    }) &
  ([E] extends [never]
    ? {}
    : {
        error: E
      })

/**
 * A "prepare" method to be used as the second parameter of `createAction`.
 * Takes any number of arguments and returns a Flux Standard Action without
 * type (will be added later) that *must* contain a payload (might be undefined).
 *
 * @public
 */
export type PrepareAction<P> =
  | ((...args: any[]) => { payload: P })
  | ((...args: any[]) => { payload: P; meta: any })
  | ((...args: any[]) => { payload: P; error: any })
  | ((...args: any[]) => { payload: P; meta: any; error: any })

/**
 * Internal version of `ActionCreatorWithPreparedPayload`. Not to be used externally.
 *
 * @internal
 */
export type _ActionCreatorWithPreparedPayload<
  PA extends PrepareAction<any> | void,
  T extends string = string,
> =
  PA extends PrepareAction<infer P>
    ? ActionCreatorWithPreparedPayload<
        Parameters<PA>,
        P,
        T,
        ReturnType<PA> extends {
          error: infer E
        }
          ? E
          : never,
        ReturnType<PA> extends {
          meta: infer M
        }
          ? M
          : never
      >
    : void

/**
 * Basic type for all action creators.
 *
 * @inheritdoc {redux#ActionCreator}
 */
export type BaseActionCreator<P, T extends string, M = never, E = never> = {
  type: T
  match: (action: unknown) => action is PayloadAction<P, T, M, E>
}

/**
 * An action creator that takes multiple arguments that are passed
 * to a `PrepareAction` method to create the final Action.
 * @typeParam Args arguments for the action creator function
 * @typeParam P `payload` type
 * @typeParam T `type` name
 * @typeParam E optional `error` type
 * @typeParam M optional `meta` type
 *
 * @inheritdoc {redux#ActionCreator}
 *
 * @public
 */
export interface ActionCreatorWithPreparedPayload<
  Args extends unknown[],
  P,
  T extends string = string,
  E = never,
  M = never,
> extends BaseActionCreator<P, T, M, E> {
  /**
   * Calling this {@link redux#ActionCreator} with `Args` will return
   * an Action with a payload of type `P` and (depending on the `PrepareAction`
   * method used) a `meta`- and `error` property of types `M` and `E` respectively.
   */
  (...args: Args): PayloadAction<P, T, M, E>
}

/**
 * An action creator of type `T` that takes an optional payload of type `P`.
 *
 * @inheritdoc {redux#ActionCreator}
 *
 * @public
 */
export interface ActionCreatorWithOptionalPayload<P, T extends string = string>
  extends BaseActionCreator<P, T> {
  /**
   * Calling this {@link redux#ActionCreator} with an argument will
   * return a {@link PayloadAction} of type `T` with a payload of `P`.
   * Calling it without an argument will return a PayloadAction with a payload of `undefined`.
   */
  (payload?: P): PayloadAction<P, T>
}

/**
 * An action creator of type `T` that takes no payload.
 *
 * @inheritdoc {redux#ActionCreator}
 *
 * @public
 */
export interface ActionCreatorWithoutPayload<T extends string = string>
  extends BaseActionCreator<undefined, T> {
  /**
   * Calling this {@link redux#ActionCreator} will
   * return a {@link PayloadAction} of type `T` with a payload of `undefined`
   */
  (noArgument: void): PayloadAction<undefined, T>
}

/**
 * An action creator of type `T` that requires a payload of type P.
 *
 * @inheritdoc {redux#ActionCreator}
 *
 * @public
 */
export interface ActionCreatorWithPayload<P, T extends string = string>
  extends BaseActionCreator<P, T> {
  /**
   * Calling this {@link redux#ActionCreator} with an argument will
   * return a {@link PayloadAction} of type `T` with a payload of `P`
   */
  (payload: P): PayloadAction<P, T>
}

/**
 * An action creator of type `T` whose `payload` type could not be inferred. Accepts everything as `payload`.
 *
 * @inheritdoc {redux#ActionCreator}
 *
 * @public
 */
export interface ActionCreatorWithNonInferrablePayload<
  T extends string = string,
> extends BaseActionCreator<unknown, T> {
  /**
   * Calling this {@link redux#ActionCreator} with an argument will
   * return a {@link PayloadAction} of type `T` with a payload
   * of exactly the type of the argument.
   */
  <PT extends unknown>(payload: PT): PayloadAction<PT, T>
}

/**
 * An action creator that produces actions with a `payload` attribute.
 *
 * @typeParam P the `payload` type
 * @typeParam T the `type` of the resulting action
 * @typeParam PA if the resulting action is preprocessed by a `prepare` method, the signature of said method.
 *
 * @public
 */
export type PayloadActionCreator<
  P = void,
  T extends string = string,
  PA extends PrepareAction<P> | void = void,
> = IfPrepareActionMethodProvided<
  PA,
  _ActionCreatorWithPreparedPayload<PA, T>,
  // else
  IsAny<
    P,
    ActionCreatorWithPayload<any, T>,
    IsUnknownOrNonInferrable<
      P,
      ActionCreatorWithNonInferrablePayload<T>,
      // else
      IfVoid<
        P,
        ActionCreatorWithoutPayload<T>,
        // else
        IfMaybeUndefined<
          P,
          ActionCreatorWithOptionalPayload<P, T>,
          // else
          ActionCreatorWithPayload<P, T>
        >
      >
    >
  >
>

/**
 * A utility function to create an action creator for the given action type
 * string. The action creator accepts a single argument, which will be included
 * in the action object as a field called payload. The action creator function
 * will also have its toString() overridden so that it returns the action type.
 *
 * @param type The action type to use for created actions.
 * @param prepare (optional) a method that takes any number of arguments and returns { payload } or { payload, meta }.
 *                If this is given, the resulting action creator will pass its arguments to this method to calculate payload & meta.
 *
 * @public
 */
export function createAction<P = void, T extends string = string>(
  type: T,
): PayloadActionCreator<P, T>

/**
 * A utility function to create an action creator for the given action type
 * string. The action creator accepts a single argument, which will be included
 * in the action object as a field called payload. The action creator function
 * will also have its toString() overridden so that it returns the action type.
 *
 * @param type The action type to use for created actions.
 * @param prepare (optional) a method that takes any number of arguments and returns { payload } or { payload, meta }.
 *                If this is given, the resulting action creator will pass its arguments to this method to calculate payload & meta.
 *
 * @public
 */
export function createAction<
  PA extends PrepareAction<any>,
  T extends string = string,
>(
  type: T,
  prepareAction: PA,
): PayloadActionCreator<ReturnType<PA>['payload'], T, PA>

export function createAction(type: string, prepareAction?: Function): any {
  function actionCreator(...args: any[]) {
    if (prepareAction) {
      let prepared = prepareAction(...args)
      if (!prepared) {
        throw new Error('prepareAction did not return an object')
      }

      return {
        type,
        payload: prepared.payload,
        ...('meta' in prepared && { meta: prepared.meta }),
        ...('error' in prepared && { error: prepared.error }),
      }
    }
    return { type, payload: args[0] }
  }

  actionCreator.toString = () => `${type}`

  actionCreator.type = type

  actionCreator.match = (action: unknown): action is PayloadAction =>
    isAction(action) && action.type === type

  return actionCreator
}

/**
 * Returns true if value is an RTK-like action creator, with a static type property and match method.
 */
export function isActionCreator(
  action: unknown,
): action is BaseActionCreator<unknown, string> & Function {
  return (
    typeof action === 'function' &&
    'type' in action &&
    // hasMatchFunction only wants Matchers but I don't see the point in rewriting it
    hasMatchFunction(action as any)
  )
}

/**
 * Returns true if value is an action with a string type and valid Flux Standard Action keys.
 */
export function isFSA(action: unknown): action is {
  type: string
  payload?: unknown
  error?: unknown
  meta?: unknown
} {
  return isAction(action) && Object.keys(action).every(isValidKey)
}

function isValidKey(key: string) {
  return ['type', 'payload', 'error', 'meta'].indexOf(key) > -1
}

// helper types for more readable typings

type IfPrepareActionMethodProvided<
  PA extends PrepareAction<any> | void,
  True,
  False,
> = PA extends (...args: any[]) => any ? True : False

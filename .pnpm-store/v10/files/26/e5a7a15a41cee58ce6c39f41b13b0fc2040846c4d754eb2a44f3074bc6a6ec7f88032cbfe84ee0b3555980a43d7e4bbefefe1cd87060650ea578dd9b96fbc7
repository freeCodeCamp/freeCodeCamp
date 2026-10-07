import type { Dispatch, UnknownAction } from 'redux'
import type { ThunkDispatch } from 'redux-thunk'
import type { ActionCreatorWithPreparedPayload } from './createAction'
import { createAction } from './createAction'
import { isAnyOf } from './matchers'
import { nanoid } from './nanoid'
import type {
  FallbackIfUnknown,
  Id,
  IsAny,
  IsUnknown,
  SafePromise,
} from './tsHelpers'

export type BaseThunkAPI<
  S,
  E,
  D extends Dispatch = Dispatch,
  RejectedValue = unknown,
  RejectedMeta = unknown,
  FulfilledMeta = unknown,
> = {
  dispatch: D
  getState: () => S
  extra: E
  requestId: string
  signal: AbortSignal
  abort: (reason?: string) => void
  rejectWithValue: IsUnknown<
    RejectedMeta,
    (value: RejectedValue) => RejectWithValue<RejectedValue, RejectedMeta>,
    (
      value: RejectedValue,
      meta: RejectedMeta,
    ) => RejectWithValue<RejectedValue, RejectedMeta>
  >
  fulfillWithValue: IsUnknown<
    FulfilledMeta,
    <FulfilledValue>(value: FulfilledValue) => FulfilledValue,
    <FulfilledValue>(
      value: FulfilledValue,
      meta: FulfilledMeta,
    ) => FulfillWithMeta<FulfilledValue, FulfilledMeta>
  >
}

/**
 * @public
 */
export interface SerializedError {
  name?: string
  message?: string
  stack?: string
  code?: string
}

const commonProperties: Array<keyof SerializedError> = [
  'name',
  'message',
  'stack',
  'code',
]

class RejectWithValue<Payload, RejectedMeta> {
  /*
  type-only property to distinguish between RejectWithValue and FulfillWithMeta
  does not exist at runtime
  */
  private readonly _type!: 'RejectWithValue'
  constructor(
    public readonly payload: Payload,
    public readonly meta: RejectedMeta,
  ) {}
}

class FulfillWithMeta<Payload, FulfilledMeta> {
  /*
  type-only property to distinguish between RejectWithValue and FulfillWithMeta
  does not exist at runtime
  */
  private readonly _type!: 'FulfillWithMeta'
  constructor(
    public readonly payload: Payload,
    public readonly meta: FulfilledMeta,
  ) {}
}

/**
 * Serializes an error into a plain object.
 * Reworked from https://github.com/sindresorhus/serialize-error
 *
 * @public
 */
export const miniSerializeError = (value: any): SerializedError => {
  if (typeof value === 'object' && value !== null) {
    const simpleError: SerializedError = {}
    for (const property of commonProperties) {
      if (typeof value[property] === 'string') {
        simpleError[property] = value[property]
      }
    }

    return simpleError
  }

  return { message: String(value) }
}

export type AsyncThunkConfig = {
  state?: unknown
  dispatch?: ThunkDispatch<unknown, unknown, UnknownAction>
  extra?: unknown
  rejectValue?: unknown
  serializedErrorType?: unknown
  pendingMeta?: unknown
  fulfilledMeta?: unknown
  rejectedMeta?: unknown
}

export type GetState<ThunkApiConfig> = ThunkApiConfig extends {
  state: infer State
}
  ? State
  : unknown

type GetExtra<ThunkApiConfig> = ThunkApiConfig extends { extra: infer Extra }
  ? Extra
  : unknown
type GetDispatch<ThunkApiConfig> = ThunkApiConfig extends {
  dispatch: infer Dispatch
}
  ? FallbackIfUnknown<
      Dispatch,
      ThunkDispatch<
        GetState<ThunkApiConfig>,
        GetExtra<ThunkApiConfig>,
        UnknownAction
      >
    >
  : ThunkDispatch<
      GetState<ThunkApiConfig>,
      GetExtra<ThunkApiConfig>,
      UnknownAction
    >

export type GetThunkAPI<ThunkApiConfig> = BaseThunkAPI<
  GetState<ThunkApiConfig>,
  GetExtra<ThunkApiConfig>,
  GetDispatch<ThunkApiConfig>,
  GetRejectValue<ThunkApiConfig>,
  GetRejectedMeta<ThunkApiConfig>,
  GetFulfilledMeta<ThunkApiConfig>
>

type GetRejectValue<ThunkApiConfig> = ThunkApiConfig extends {
  rejectValue: infer RejectValue
}
  ? RejectValue
  : unknown

type GetPendingMeta<ThunkApiConfig> = ThunkApiConfig extends {
  pendingMeta: infer PendingMeta
}
  ? PendingMeta
  : unknown

type GetFulfilledMeta<ThunkApiConfig> = ThunkApiConfig extends {
  fulfilledMeta: infer FulfilledMeta
}
  ? FulfilledMeta
  : unknown

type GetRejectedMeta<ThunkApiConfig> = ThunkApiConfig extends {
  rejectedMeta: infer RejectedMeta
}
  ? RejectedMeta
  : unknown

type GetSerializedErrorType<ThunkApiConfig> = ThunkApiConfig extends {
  serializedErrorType: infer GetSerializedErrorType
}
  ? GetSerializedErrorType
  : SerializedError

type MaybePromise<T> = T | Promise<T> | (T extends any ? Promise<T> : never)

/**
 * A type describing the return value of the `payloadCreator` argument to `createAsyncThunk`.
 * Might be useful for wrapping `createAsyncThunk` in custom abstractions.
 *
 * @public
 */
export type AsyncThunkPayloadCreatorReturnValue<
  Returned,
  ThunkApiConfig extends AsyncThunkConfig,
> = MaybePromise<
  | IsUnknown<
      GetFulfilledMeta<ThunkApiConfig>,
      Returned,
      FulfillWithMeta<Returned, GetFulfilledMeta<ThunkApiConfig>>
    >
  | RejectWithValue<
      GetRejectValue<ThunkApiConfig>,
      GetRejectedMeta<ThunkApiConfig>
    >
>
/**
 * A type describing the `payloadCreator` argument to `createAsyncThunk`.
 * Might be useful for wrapping `createAsyncThunk` in custom abstractions.
 *
 * @public
 */
export type AsyncThunkPayloadCreator<
  Returned,
  ThunkArg = void,
  ThunkApiConfig extends AsyncThunkConfig = {},
> = (
  arg: ThunkArg,
  thunkAPI: GetThunkAPI<ThunkApiConfig>,
) => AsyncThunkPayloadCreatorReturnValue<Returned, ThunkApiConfig>

/**
 * A ThunkAction created by `createAsyncThunk`.
 * Dispatching it returns a Promise for either a
 * fulfilled or rejected action.
 * Also, the returned value contains an `abort()` method
 * that allows the asyncAction to be cancelled from the outside.
 *
 * @public
 */
export type AsyncThunkAction<
  Returned,
  ThunkArg,
  ThunkApiConfig extends AsyncThunkConfig,
> = (
  dispatch: NonNullable<GetDispatch<ThunkApiConfig>>,
  getState: () => GetState<ThunkApiConfig>,
  extra: GetExtra<ThunkApiConfig>,
) => SafePromise<
  | ReturnType<AsyncThunkFulfilledActionCreator<Returned, ThunkArg>>
  | ReturnType<AsyncThunkRejectedActionCreator<ThunkArg, ThunkApiConfig>>
> & {
  abort: (reason?: string) => void
  requestId: string
  arg: ThunkArg
  unwrap: () => Promise<Returned>
}

/**
 * Config provided when calling the async thunk action creator.
 */
export interface AsyncThunkDispatchConfig {
  /**
   * An external `AbortSignal` that will be tracked by the internal `AbortSignal`.
   */
  signal?: AbortSignal
}

type AsyncThunkActionCreator<
  Returned,
  ThunkArg,
  ThunkApiConfig extends AsyncThunkConfig,
> = IsAny<
  ThunkArg,
  // any handling
  (
    arg: ThunkArg,
    config?: AsyncThunkDispatchConfig,
  ) => AsyncThunkAction<Returned, ThunkArg, ThunkApiConfig>,
  // unknown handling
  unknown extends ThunkArg
    ? (
        arg: ThunkArg,
        config?: AsyncThunkDispatchConfig,
      ) => AsyncThunkAction<Returned, ThunkArg, ThunkApiConfig> // argument not specified or specified as void or undefined
    : [ThunkArg] extends [void] | [undefined]
      ? (
          arg?: undefined,
          config?: AsyncThunkDispatchConfig,
        ) => AsyncThunkAction<Returned, ThunkArg, ThunkApiConfig> // argument contains void
      : [void] extends [ThunkArg] // make optional
        ? (
            arg?: ThunkArg,
            config?: AsyncThunkDispatchConfig,
          ) => AsyncThunkAction<Returned, ThunkArg, ThunkApiConfig> // argument contains undefined
        : [undefined] extends [ThunkArg]
          ? WithStrictNullChecks<
              // with strict nullChecks: make optional
              (
                arg?: ThunkArg,
                config?: AsyncThunkDispatchConfig,
              ) => AsyncThunkAction<Returned, ThunkArg, ThunkApiConfig>,
              // without strict null checks this will match everything, so don't make it optional
              (
                arg: ThunkArg,
                config?: AsyncThunkDispatchConfig,
              ) => AsyncThunkAction<Returned, ThunkArg, ThunkApiConfig>
            > // default case: normal argument
          : (
              arg: ThunkArg,
              config?: AsyncThunkDispatchConfig,
            ) => AsyncThunkAction<Returned, ThunkArg, ThunkApiConfig>
>

/**
 * Options object for `createAsyncThunk`.
 *
 * @public
 */
export type AsyncThunkOptions<
  ThunkArg = void,
  ThunkApiConfig extends AsyncThunkConfig = {},
> = {
  /**
   * A method to control whether the asyncThunk should be executed. Has access to the
   * `arg`, `api.getState()` and `api.extra` arguments.
   *
   * @returns `false` if it should be skipped
   */
  condition?(
    arg: ThunkArg,
    api: Pick<GetThunkAPI<ThunkApiConfig>, 'getState' | 'extra'>,
  ): MaybePromise<boolean | undefined>
  /**
   * If `condition` returns `false`, the asyncThunk will be skipped.
   * This option allows you to control whether a `rejected` action with `meta.condition == false`
   * will be dispatched or not.
   *
   * @default `false`
   */
  dispatchConditionRejection?: boolean

  serializeError?: (x: unknown) => GetSerializedErrorType<ThunkApiConfig>

  /**
   * A function to use when generating the `requestId` for the request sequence.
   *
   * @default `nanoid`
   */
  idGenerator?: (arg: ThunkArg) => string
} & IsUnknown<
  GetPendingMeta<ThunkApiConfig>,
  {
    /**
     * A method to generate additional properties to be added to `meta` of the pending action.
     *
     * Using this optional overload will not modify the types correctly, this overload is only in place to support JavaScript users.
     * Please use the `ThunkApiConfig` parameter `pendingMeta` to get access to a correctly typed overload
     */
    getPendingMeta?(
      base: {
        arg: ThunkArg
        requestId: string
      },
      api: Pick<GetThunkAPI<ThunkApiConfig>, 'getState' | 'extra'>,
    ): GetPendingMeta<ThunkApiConfig>
  },
  {
    /**
     * A method to generate additional properties to be added to `meta` of the pending action.
     */
    getPendingMeta(
      base: {
        arg: ThunkArg
        requestId: string
      },
      api: Pick<GetThunkAPI<ThunkApiConfig>, 'getState' | 'extra'>,
    ): GetPendingMeta<ThunkApiConfig>
  }
>

export type AsyncThunkPendingActionCreator<
  ThunkArg,
  ThunkApiConfig = {},
> = ActionCreatorWithPreparedPayload<
  [string, ThunkArg, GetPendingMeta<ThunkApiConfig>?],
  undefined,
  string,
  never,
  {
    arg: ThunkArg
    requestId: string
    requestStatus: 'pending'
  } & GetPendingMeta<ThunkApiConfig>
>

export type AsyncThunkRejectedActionCreator<
  ThunkArg,
  ThunkApiConfig = {},
> = ActionCreatorWithPreparedPayload<
  [
    Error | null,
    string,
    ThunkArg,
    GetRejectValue<ThunkApiConfig>?,
    GetRejectedMeta<ThunkApiConfig>?,
  ],
  GetRejectValue<ThunkApiConfig> | undefined,
  string,
  GetSerializedErrorType<ThunkApiConfig>,
  {
    arg: ThunkArg
    requestId: string
    requestStatus: 'rejected'
    aborted: boolean
    condition: boolean
  } & (
    | ({ rejectedWithValue: false } & {
        [K in keyof GetRejectedMeta<ThunkApiConfig>]?: undefined
      })
    | ({ rejectedWithValue: true } & GetRejectedMeta<ThunkApiConfig>)
  )
>

export type AsyncThunkFulfilledActionCreator<
  Returned,
  ThunkArg,
  ThunkApiConfig = {},
> = ActionCreatorWithPreparedPayload<
  [Returned, string, ThunkArg, GetFulfilledMeta<ThunkApiConfig>?],
  Returned,
  string,
  never,
  {
    arg: ThunkArg
    requestId: string
    requestStatus: 'fulfilled'
  } & GetFulfilledMeta<ThunkApiConfig>
>

/**
 * A type describing the return value of `createAsyncThunk`.
 * Might be useful for wrapping `createAsyncThunk` in custom abstractions.
 *
 * @public
 */
export type AsyncThunk<
  Returned,
  ThunkArg,
  ThunkApiConfig extends AsyncThunkConfig,
> = AsyncThunkActionCreator<Returned, ThunkArg, ThunkApiConfig> & {
  pending: AsyncThunkPendingActionCreator<ThunkArg, ThunkApiConfig>
  rejected: AsyncThunkRejectedActionCreator<ThunkArg, ThunkApiConfig>
  fulfilled: AsyncThunkFulfilledActionCreator<
    Returned,
    ThunkArg,
    ThunkApiConfig
  >
  // matchSettled?
  settled: (
    action: any,
  ) => action is ReturnType<
    | AsyncThunkRejectedActionCreator<ThunkArg, ThunkApiConfig>
    | AsyncThunkFulfilledActionCreator<Returned, ThunkArg, ThunkApiConfig>
  >
  typePrefix: string
}

export type OverrideThunkApiConfigs<OldConfig, NewConfig> = Id<
  NewConfig & Omit<OldConfig, keyof NewConfig>
>

export type CreateAsyncThunkFunction<
  CurriedThunkApiConfig extends AsyncThunkConfig,
> = {
  /**
   *
   * @param typePrefix
   * @param payloadCreator
   * @param options
   *
   * @public
   */
  // separate signature without `AsyncThunkConfig` for better inference
  <Returned, ThunkArg = void>(
    typePrefix: string,
    payloadCreator: AsyncThunkPayloadCreator<
      Returned,
      ThunkArg,
      CurriedThunkApiConfig
    >,
    options?: AsyncThunkOptions<ThunkArg, CurriedThunkApiConfig>,
  ): AsyncThunk<Returned, ThunkArg, CurriedThunkApiConfig>

  /**
   *
   * @param typePrefix
   * @param payloadCreator
   * @param options
   *
   * @public
   */
  <Returned, ThunkArg, ThunkApiConfig extends AsyncThunkConfig>(
    typePrefix: string,
    payloadCreator: AsyncThunkPayloadCreator<
      Returned,
      ThunkArg,
      OverrideThunkApiConfigs<CurriedThunkApiConfig, ThunkApiConfig>
    >,
    options?: AsyncThunkOptions<
      ThunkArg,
      OverrideThunkApiConfigs<CurriedThunkApiConfig, ThunkApiConfig>
    >,
  ): AsyncThunk<
    Returned,
    ThunkArg,
    OverrideThunkApiConfigs<CurriedThunkApiConfig, ThunkApiConfig>
  >
}

type CreateAsyncThunk<CurriedThunkApiConfig extends AsyncThunkConfig> =
  CreateAsyncThunkFunction<CurriedThunkApiConfig> & {
    withTypes<ThunkApiConfig extends AsyncThunkConfig>(): CreateAsyncThunk<
      OverrideThunkApiConfigs<CurriedThunkApiConfig, ThunkApiConfig>
    >
  }

const externalAbortMessage = 'External signal was aborted'

export const createAsyncThunk = /* @__PURE__ */ (() => {
  function createAsyncThunk<
    Returned,
    ThunkArg,
    ThunkApiConfig extends AsyncThunkConfig,
  >(
    typePrefix: string,
    payloadCreator: AsyncThunkPayloadCreator<
      Returned,
      ThunkArg,
      ThunkApiConfig
    >,
    options?: AsyncThunkOptions<ThunkArg, ThunkApiConfig>,
  ): AsyncThunk<Returned, ThunkArg, ThunkApiConfig> {
    type RejectedValue = GetRejectValue<ThunkApiConfig>
    type PendingMeta = GetPendingMeta<ThunkApiConfig>
    type FulfilledMeta = GetFulfilledMeta<ThunkApiConfig>
    type RejectedMeta = GetRejectedMeta<ThunkApiConfig>

    const fulfilled: AsyncThunkFulfilledActionCreator<
      Returned,
      ThunkArg,
      ThunkApiConfig
    > = createAction(
      typePrefix + '/fulfilled',
      (
        payload: Returned,
        requestId: string,
        arg: ThunkArg,
        meta?: FulfilledMeta,
      ) => ({
        payload,
        meta: {
          ...((meta as any) || {}),
          arg,
          requestId,
          requestStatus: 'fulfilled' as const,
        },
      }),
    )

    const pending: AsyncThunkPendingActionCreator<ThunkArg, ThunkApiConfig> =
      createAction(
        typePrefix + '/pending',
        (requestId: string, arg: ThunkArg, meta?: PendingMeta) => ({
          payload: undefined,
          meta: {
            ...((meta as any) || {}),
            arg,
            requestId,
            requestStatus: 'pending' as const,
          },
        }),
      )

    const rejected: AsyncThunkRejectedActionCreator<ThunkArg, ThunkApiConfig> =
      createAction(
        typePrefix + '/rejected',
        (
          error: Error | null,
          requestId: string,
          arg: ThunkArg,
          payload?: RejectedValue,
          meta?: RejectedMeta,
        ) => ({
          payload,
          error: ((options && options.serializeError) || miniSerializeError)(
            error || 'Rejected',
          ) as GetSerializedErrorType<ThunkApiConfig>,
          meta: {
            ...((meta as any) || {}),
            arg,
            requestId,
            rejectedWithValue: !!payload,
            requestStatus: 'rejected' as const,
            aborted: error?.name === 'AbortError',
            condition: error?.name === 'ConditionError',
          },
        }),
      )

    function actionCreator(
      arg: ThunkArg,
      { signal }: AsyncThunkDispatchConfig = {},
    ): AsyncThunkAction<Returned, ThunkArg, Required<ThunkApiConfig>> {
      return (dispatch, getState, extra) => {
        const requestId = options?.idGenerator
          ? options.idGenerator(arg)
          : nanoid()

        const abortController = new AbortController()
        let abortHandler: (() => void) | undefined
        let abortReason: string | undefined

        function abort(reason?: string) {
          abortReason = reason
          abortController.abort()
        }

        if (signal) {
          if (signal.aborted) {
            abort(externalAbortMessage)
          } else {
            signal.addEventListener(
              'abort',
              () => abort(externalAbortMessage),
              { once: true },
            )
          }
        }

        const promise = (async function () {
          let finalAction: ReturnType<typeof fulfilled | typeof rejected>
          try {
            let conditionResult = options?.condition?.(arg, { getState, extra })
            if (isThenable(conditionResult)) {
              conditionResult = await conditionResult
            }

            if (conditionResult === false || abortController.signal.aborted) {
              // eslint-disable-next-line no-throw-literal
              throw {
                name: 'ConditionError',
                message: 'Aborted due to condition callback returning false.',
              }
            }

            const abortedPromise = new Promise<never>((_, reject) => {
              abortHandler = () => {
                reject({
                  name: 'AbortError',
                  message: abortReason || 'Aborted',
                })
              }
              abortController.signal.addEventListener('abort', abortHandler, {
                once: true,
              })
            })
            dispatch(
              pending(
                requestId,
                arg,
                options?.getPendingMeta?.(
                  { requestId, arg },
                  { getState, extra },
                ),
              ) as any,
            )
            finalAction = await Promise.race([
              abortedPromise,
              Promise.resolve(
                payloadCreator(arg, {
                  dispatch,
                  getState,
                  extra,
                  requestId,
                  signal: abortController.signal,
                  abort,
                  rejectWithValue: ((
                    value: RejectedValue,
                    meta?: RejectedMeta,
                  ) => {
                    return new RejectWithValue(value, meta)
                  }) as any,
                  fulfillWithValue: ((value: unknown, meta?: FulfilledMeta) => {
                    return new FulfillWithMeta(value, meta)
                  }) as any,
                }),
              ).then((result) => {
                if (result instanceof RejectWithValue) {
                  throw result
                }
                if (result instanceof FulfillWithMeta) {
                  return fulfilled(result.payload, requestId, arg, result.meta)
                }
                return fulfilled(result as any, requestId, arg)
              }),
            ])
          } catch (err) {
            finalAction =
              err instanceof RejectWithValue
                ? rejected(null, requestId, arg, err.payload, err.meta)
                : rejected(err as any, requestId, arg)
          } finally {
            if (abortHandler) {
              abortController.signal.removeEventListener('abort', abortHandler)
            }
          }
          // We dispatch the result action _after_ the catch, to avoid having any errors
          // here get swallowed by the try/catch block,
          // per https://twitter.com/dan_abramov/status/770914221638942720
          // and https://github.com/reduxjs/redux-toolkit/blob/e85eb17b39a2118d859f7b7746e0f3fee523e089/docs/tutorials/advanced-tutorial.md#async-error-handling-logic-in-thunks

          const skipDispatch =
            options &&
            !options.dispatchConditionRejection &&
            rejected.match(finalAction) &&
            (finalAction as any).meta.condition

          if (!skipDispatch) {
            dispatch(finalAction as any)
          }
          return finalAction
        })()
        return Object.assign(promise as SafePromise<any>, {
          abort,
          requestId,
          arg,
          unwrap() {
            return promise.then<any>(unwrapResult)
          },
        })
      }
    }

    return Object.assign(
      actionCreator as AsyncThunkActionCreator<
        Returned,
        ThunkArg,
        ThunkApiConfig
      >,
      {
        pending,
        rejected,
        fulfilled,
        settled: isAnyOf(rejected, fulfilled),
        typePrefix,
      },
    )
  }
  createAsyncThunk.withTypes = () => createAsyncThunk

  return createAsyncThunk as CreateAsyncThunk<AsyncThunkConfig>
})()

interface UnwrappableAction {
  payload: any
  meta?: any
  error?: any
}

type UnwrappedActionPayload<T extends UnwrappableAction> = Exclude<
  T,
  { error: any }
>['payload']

/**
 * @public
 */
export function unwrapResult<R extends UnwrappableAction>(
  action: R,
): UnwrappedActionPayload<R> {
  if (action.meta && action.meta.rejectedWithValue) {
    throw action.payload
  }
  if (action.error) {
    throw action.error
  }
  return action.payload
}

type WithStrictNullChecks<True, False> = undefined extends boolean
  ? False
  : True

function isThenable(value: any): value is PromiseLike<any> {
  return (
    value !== null &&
    typeof value === 'object' &&
    typeof value.then === 'function'
  )
}

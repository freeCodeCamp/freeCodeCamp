import type {
  Action,
  AsyncThunkAction,
  Dispatch,
  Middleware,
  MiddlewareAPI,
  ThunkAction,
  ThunkDispatch,
  UnknownAction,
} from '@reduxjs/toolkit'
import type { Api, ApiContext } from '../../apiTypes'
import type {
  AssertTagTypes,
  EndpointDefinitions,
} from '../../endpointDefinitions'
import type {
  QueryStatus,
  QuerySubState,
  RootState,
  SubscriptionInternalState,
  SubscriptionState,
} from '../apiState'
import type {
  InfiniteQueryThunk,
  MutationThunk,
  QueryThunk,
  QueryThunkArg,
  ThunkResult,
} from '../buildThunks'
import type {
  InfiniteQueryActionCreatorResult,
  MutationActionCreatorResult,
  QueryActionCreatorResult,
} from '../buildInitiate'
import type { AllSelectors } from '../buildSelectors'

export type QueryStateMeta<T> = Record<string, undefined | T>
export type TimeoutId = ReturnType<typeof setTimeout>

type QueryPollState = {
  nextPollTimestamp: number
  timeout?: TimeoutId
  pollingInterval: number
}

export interface InternalMiddlewareState {
  currentSubscriptions: SubscriptionInternalState
  currentPolls: Map<string, QueryPollState>
  runningQueries: Map<
    string,
    | QueryActionCreatorResult<any>
    | InfiniteQueryActionCreatorResult<any>
    | undefined
  >
  runningMutations: Map<string, MutationActionCreatorResult<any> | undefined>
}

export interface SubscriptionSelectors {
  getSubscriptions: () => SubscriptionInternalState
  getSubscriptionCount: (queryCacheKey: string) => number
  isRequestSubscribed: (queryCacheKey: string, requestId: string) => boolean
}

export interface BuildMiddlewareInput<
  Definitions extends EndpointDefinitions,
  ReducerPath extends string,
  TagTypes extends string,
> {
  reducerPath: ReducerPath
  context: ApiContext<Definitions>
  queryThunk: QueryThunk
  mutationThunk: MutationThunk
  infiniteQueryThunk: InfiniteQueryThunk<any>
  api: Api<any, Definitions, ReducerPath, TagTypes>
  assertTagType: AssertTagTypes
  selectors: AllSelectors
  getRunningQueryThunk: (
    endpointName: string,
    queryArgs: any,
  ) => (dispatch: Dispatch) => QueryActionCreatorResult<any> | undefined
  getInternalState: (dispatch: Dispatch) => InternalMiddlewareState
}

export type SubMiddlewareApi = MiddlewareAPI<
  ThunkDispatch<any, any, UnknownAction>,
  RootState<EndpointDefinitions, string, string>
>

export interface BuildSubMiddlewareInput
  extends BuildMiddlewareInput<EndpointDefinitions, string, string> {
  internalState: InternalMiddlewareState
  refetchQuery(
    querySubState: Exclude<
      QuerySubState<any>,
      { status: QueryStatus.uninitialized }
    >,
  ): ThunkAction<QueryActionCreatorResult<any>, any, any, UnknownAction>
  isThisApiSliceAction: (action: Action) => boolean
  selectors: AllSelectors
  mwApi: MiddlewareAPI<
    ThunkDispatch<any, any, UnknownAction>,
    RootState<EndpointDefinitions, string, string>
  >
}

export type SubMiddlewareBuilder = (
  input: BuildSubMiddlewareInput,
) => Middleware<
  {},
  RootState<EndpointDefinitions, string, string>,
  ThunkDispatch<any, any, UnknownAction>
>

type MwNext = Parameters<ReturnType<Middleware>>[0]

export type ApiMiddlewareInternalHandler<Return = void> = (
  action: Action,
  mwApi: SubMiddlewareApi & { next: MwNext },
  prevState: RootState<EndpointDefinitions, string, string>,
) => Return

export type InternalHandlerBuilder<ReturnType = void> = (
  input: BuildSubMiddlewareInput,
) => ApiMiddlewareInternalHandler<ReturnType>

export interface PromiseConstructorWithKnownReason {
  /**
   * Creates a new Promise with a known rejection reason.
   * @param executor A callback used to initialize the promise. This callback is passed two arguments:
   * a resolve callback used to resolve the promise with a value or the result of another promise,
   * and a reject callback used to reject the promise with a provided reason or error.
   */
  new <T, R>(
    executor: (
      resolve: (value: T | PromiseLike<T>) => void,
      reject: (reason?: R) => void,
    ) => void,
  ): PromiseWithKnownReason<T, R>
}

export type PromiseWithKnownReason<T, R> = Omit<
  Promise<T>,
  'then' | 'catch'
> & {
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(
    onfulfilled?:
      | ((value: T) => TResult1 | PromiseLike<TResult1>)
      | undefined
      | null,
    onrejected?:
      | ((reason: R) => TResult2 | PromiseLike<TResult2>)
      | undefined
      | null,
  ): Promise<TResult1 | TResult2>

  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch<TResult = never>(
    onrejected?:
      | ((reason: R) => TResult | PromiseLike<TResult>)
      | undefined
      | null,
  ): Promise<T | TResult>
}

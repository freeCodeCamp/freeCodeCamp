import type {
  ActionFromMatcher,
  Matcher,
  UnionToIntersection,
} from './tsHelpers'
import { hasMatchFunction } from './tsHelpers'
import type {
  AsyncThunk,
  AsyncThunkFulfilledActionCreator,
  AsyncThunkPendingActionCreator,
  AsyncThunkRejectedActionCreator,
} from './createAsyncThunk'

/** @public */
export type ActionMatchingAnyOf<Matchers extends Matcher<any>[]> =
  ActionFromMatcher<Matchers[number]>

/** @public */
export type ActionMatchingAllOf<Matchers extends Matcher<any>[]> =
  UnionToIntersection<ActionMatchingAnyOf<Matchers>>

const matches = (matcher: Matcher<any>, action: any) => {
  if (hasMatchFunction(matcher)) {
    return matcher.match(action)
  } else {
    return matcher(action)
  }
}

/**
 * A higher-order function that returns a function that may be used to check
 * whether an action matches any one of the supplied type guards or action
 * creators.
 *
 * @param matchers The type guards or action creators to match against.
 *
 * @public
 */
export function isAnyOf<Matchers extends Matcher<any>[]>(
  ...matchers: Matchers
) {
  return (action: any): action is ActionMatchingAnyOf<Matchers> => {
    return matchers.some((matcher) => matches(matcher, action))
  }
}

/**
 * A higher-order function that returns a function that may be used to check
 * whether an action matches all of the supplied type guards or action
 * creators.
 *
 * @param matchers The type guards or action creators to match against.
 *
 * @public
 */
export function isAllOf<Matchers extends Matcher<any>[]>(
  ...matchers: Matchers
) {
  return (action: any): action is ActionMatchingAllOf<Matchers> => {
    return matchers.every((matcher) => matches(matcher, action))
  }
}

/**
 * @param action A redux action
 * @param validStatus An array of valid meta.requestStatus values
 *
 * @internal
 */
export function hasExpectedRequestMetadata(
  action: any,
  validStatus: readonly string[],
) {
  if (!action || !action.meta) return false

  const hasValidRequestId = typeof action.meta.requestId === 'string'
  const hasValidRequestStatus =
    validStatus.indexOf(action.meta.requestStatus) > -1

  return hasValidRequestId && hasValidRequestStatus
}

function isAsyncThunkArray(a: [any] | AnyAsyncThunk[]): a is AnyAsyncThunk[] {
  return (
    typeof a[0] === 'function' &&
    'pending' in a[0] &&
    'fulfilled' in a[0] &&
    'rejected' in a[0]
  )
}

export type UnknownAsyncThunkPendingAction = ReturnType<
  AsyncThunkPendingActionCreator<unknown>
>

export type PendingActionFromAsyncThunk<T extends AnyAsyncThunk> =
  ActionFromMatcher<T['pending']>

/**
 * A higher-order function that returns a function that may be used to check
 * whether an action was created by an async thunk action creator, and that
 * the action is pending.
 *
 * @public
 */
export function isPending(): (
  action: any,
) => action is UnknownAsyncThunkPendingAction
/**
 * A higher-order function that returns a function that may be used to check
 * whether an action belongs to one of the provided async thunk action creators,
 * and that the action is pending.
 *
 * @param asyncThunks (optional) The async thunk action creators to match against.
 *
 * @public
 */
export function isPending<
  AsyncThunks extends [AnyAsyncThunk, ...AnyAsyncThunk[]],
>(
  ...asyncThunks: AsyncThunks
): (action: any) => action is PendingActionFromAsyncThunk<AsyncThunks[number]>
/**
 * Tests if `action` is a pending thunk action
 * @public
 */
export function isPending(action: any): action is UnknownAsyncThunkPendingAction
export function isPending<
  AsyncThunks extends [AnyAsyncThunk, ...AnyAsyncThunk[]],
>(...asyncThunks: AsyncThunks | [any]) {
  if (asyncThunks.length === 0) {
    return (action: any) => hasExpectedRequestMetadata(action, ['pending'])
  }

  if (!isAsyncThunkArray(asyncThunks)) {
    return isPending()(asyncThunks[0])
  }

  return isAnyOf(...asyncThunks.map((asyncThunk) => asyncThunk.pending))
}

export type UnknownAsyncThunkRejectedAction = ReturnType<
  AsyncThunkRejectedActionCreator<unknown, unknown>
>

export type RejectedActionFromAsyncThunk<T extends AnyAsyncThunk> =
  ActionFromMatcher<T['rejected']>

/**
 * A higher-order function that returns a function that may be used to check
 * whether an action was created by an async thunk action creator, and that
 * the action is rejected.
 *
 * @public
 */
export function isRejected(): (
  action: any,
) => action is UnknownAsyncThunkRejectedAction
/**
 * A higher-order function that returns a function that may be used to check
 * whether an action belongs to one of the provided async thunk action creators,
 * and that the action is rejected.
 *
 * @param asyncThunks (optional) The async thunk action creators to match against.
 *
 * @public
 */
export function isRejected<
  AsyncThunks extends [AnyAsyncThunk, ...AnyAsyncThunk[]],
>(
  ...asyncThunks: AsyncThunks
): (action: any) => action is RejectedActionFromAsyncThunk<AsyncThunks[number]>
/**
 * Tests if `action` is a rejected thunk action
 * @public
 */
export function isRejected(
  action: any,
): action is UnknownAsyncThunkRejectedAction
export function isRejected<
  AsyncThunks extends [AnyAsyncThunk, ...AnyAsyncThunk[]],
>(...asyncThunks: AsyncThunks | [any]) {
  if (asyncThunks.length === 0) {
    return (action: any) => hasExpectedRequestMetadata(action, ['rejected'])
  }

  if (!isAsyncThunkArray(asyncThunks)) {
    return isRejected()(asyncThunks[0])
  }

  return isAnyOf(...asyncThunks.map((asyncThunk) => asyncThunk.rejected))
}

export type UnknownAsyncThunkRejectedWithValueAction = ReturnType<
  AsyncThunkRejectedActionCreator<unknown, unknown>
>

export type RejectedWithValueActionFromAsyncThunk<T extends AnyAsyncThunk> =
  ActionFromMatcher<T['rejected']> &
    (T extends AsyncThunk<any, any, { rejectValue: infer RejectedValue }>
      ? { payload: RejectedValue }
      : unknown)

/**
 * A higher-order function that returns a function that may be used to check
 * whether an action was created by an async thunk action creator, and that
 * the action is rejected with value.
 *
 * @public
 */
export function isRejectedWithValue(): (
  action: any,
) => action is UnknownAsyncThunkRejectedAction
/**
 * A higher-order function that returns a function that may be used to check
 * whether an action belongs to one of the provided async thunk action creators,
 * and that the action is rejected with value.
 *
 * @param asyncThunks (optional) The async thunk action creators to match against.
 *
 * @public
 */
export function isRejectedWithValue<
  AsyncThunks extends [AnyAsyncThunk, ...AnyAsyncThunk[]],
>(
  ...asyncThunks: AsyncThunks
): (
  action: any,
) => action is RejectedWithValueActionFromAsyncThunk<AsyncThunks[number]>
/**
 * Tests if `action` is a rejected thunk action with value
 * @public
 */
export function isRejectedWithValue(
  action: any,
): action is UnknownAsyncThunkRejectedAction
export function isRejectedWithValue<
  AsyncThunks extends [AnyAsyncThunk, ...AnyAsyncThunk[]],
>(...asyncThunks: AsyncThunks | [any]) {
  const hasFlag = (action: any): action is any => {
    return action && action.meta && action.meta.rejectedWithValue
  }

  if (asyncThunks.length === 0) {
    return isAllOf(isRejected(...asyncThunks), hasFlag)
  }

  if (!isAsyncThunkArray(asyncThunks)) {
    return isRejectedWithValue()(asyncThunks[0])
  }

  return isAllOf(isRejected(...asyncThunks), hasFlag)
}

export type UnknownAsyncThunkFulfilledAction = ReturnType<
  AsyncThunkFulfilledActionCreator<unknown, unknown>
>

export type FulfilledActionFromAsyncThunk<T extends AnyAsyncThunk> =
  ActionFromMatcher<T['fulfilled']>

/**
 * A higher-order function that returns a function that may be used to check
 * whether an action was created by an async thunk action creator, and that
 * the action is fulfilled.
 *
 * @public
 */
export function isFulfilled(): (
  action: any,
) => action is UnknownAsyncThunkFulfilledAction
/**
 * A higher-order function that returns a function that may be used to check
 * whether an action belongs to one of the provided async thunk action creators,
 * and that the action is fulfilled.
 *
 * @param asyncThunks (optional) The async thunk action creators to match against.
 *
 * @public
 */
export function isFulfilled<
  AsyncThunks extends [AnyAsyncThunk, ...AnyAsyncThunk[]],
>(
  ...asyncThunks: AsyncThunks
): (action: any) => action is FulfilledActionFromAsyncThunk<AsyncThunks[number]>
/**
 * Tests if `action` is a fulfilled thunk action
 * @public
 */
export function isFulfilled(
  action: any,
): action is UnknownAsyncThunkFulfilledAction
export function isFulfilled<
  AsyncThunks extends [AnyAsyncThunk, ...AnyAsyncThunk[]],
>(...asyncThunks: AsyncThunks | [any]) {
  if (asyncThunks.length === 0) {
    return (action: any) => hasExpectedRequestMetadata(action, ['fulfilled'])
  }

  if (!isAsyncThunkArray(asyncThunks)) {
    return isFulfilled()(asyncThunks[0])
  }

  return isAnyOf(...asyncThunks.map((asyncThunk) => asyncThunk.fulfilled))
}

export type UnknownAsyncThunkAction =
  | UnknownAsyncThunkPendingAction
  | UnknownAsyncThunkRejectedAction
  | UnknownAsyncThunkFulfilledAction

export type AnyAsyncThunk = {
  pending: { match: (action: any) => action is any }
  fulfilled: { match: (action: any) => action is any }
  rejected: { match: (action: any) => action is any }
}

export type ActionsFromAsyncThunk<T extends AnyAsyncThunk> =
  | ActionFromMatcher<T['pending']>
  | ActionFromMatcher<T['fulfilled']>
  | ActionFromMatcher<T['rejected']>

/**
 * A higher-order function that returns a function that may be used to check
 * whether an action was created by an async thunk action creator.
 *
 * @public
 */
export function isAsyncThunkAction(): (
  action: any,
) => action is UnknownAsyncThunkAction
/**
 * A higher-order function that returns a function that may be used to check
 * whether an action belongs to one of the provided async thunk action creators.
 *
 * @param asyncThunks (optional) The async thunk action creators to match against.
 *
 * @public
 */
export function isAsyncThunkAction<
  AsyncThunks extends [AnyAsyncThunk, ...AnyAsyncThunk[]],
>(
  ...asyncThunks: AsyncThunks
): (action: any) => action is ActionsFromAsyncThunk<AsyncThunks[number]>
/**
 * Tests if `action` is a thunk action
 * @public
 */
export function isAsyncThunkAction(
  action: any,
): action is UnknownAsyncThunkAction
export function isAsyncThunkAction<
  AsyncThunks extends [AnyAsyncThunk, ...AnyAsyncThunk[]],
>(...asyncThunks: AsyncThunks | [any]) {
  if (asyncThunks.length === 0) {
    return (action: any) =>
      hasExpectedRequestMetadata(action, ['pending', 'fulfilled', 'rejected'])
  }

  if (!isAsyncThunkArray(asyncThunks)) {
    return isAsyncThunkAction()(asyncThunks[0])
  }

  return isAnyOf(...asyncThunks.flatMap(asyncThunk => [asyncThunk.pending, asyncThunk.rejected, asyncThunk.fulfilled]))
}

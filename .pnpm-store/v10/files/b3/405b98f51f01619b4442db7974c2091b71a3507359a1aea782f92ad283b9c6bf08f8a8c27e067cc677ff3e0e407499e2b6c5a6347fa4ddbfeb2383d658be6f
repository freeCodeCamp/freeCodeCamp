import { createNextState, isDraft } from '../immerImports'
import type { Draft } from 'immer'
import type { EntityId, DraftableEntityState, PreventAny } from './models'
import type { PayloadAction } from '../createAction'
import { isFSA } from '../createAction'

export const isDraftTyped = isDraft as <T>(
  value: T | Draft<T>,
) => value is Draft<T>

export function createSingleArgumentStateOperator<T, Id extends EntityId>(
  mutator: (state: DraftableEntityState<T, Id>) => void,
) {
  const operator = createStateOperator(
    (_: undefined, state: DraftableEntityState<T, Id>) => mutator(state),
  )

  return function operation<S extends DraftableEntityState<T, Id>>(
    state: PreventAny<S, T, Id>,
  ): S {
    return operator(state as S, undefined)
  }
}

export function createStateOperator<T, Id extends EntityId, R>(
  mutator: (arg: R, state: DraftableEntityState<T, Id>) => void,
) {
  return function operation<S extends DraftableEntityState<T, Id>>(
    state: S,
    arg: R | PayloadAction<R>,
  ): S {
    function isPayloadActionArgument(
      arg: R | PayloadAction<R>,
    ): arg is PayloadAction<R> {
      return isFSA(arg)
    }

    const runMutator = (draft: DraftableEntityState<T, Id>) => {
      if (isPayloadActionArgument(arg)) {
        mutator(arg.payload, draft)
      } else {
        mutator(arg, draft)
      }
    }

    if (isDraftTyped<DraftableEntityState<T, Id>>(state)) {
      // we must already be inside a `createNextState` call, likely because
      // this is being wrapped in `createReducer` or `createSlice`.
      // It's safe to just pass the draft to the mutator.
      runMutator(state)

      // since it's a draft, we'll just return it
      return state
    }

    return createNextState(state, runMutator)
  }
}

import type { UnknownAction } from 'redux'
import type { SerializedError } from '../../src'
import {
  createAction,
  createAsyncThunk,
  isAllOf,
  isAnyOf,
  isAsyncThunkAction,
  isFulfilled,
  isPending,
  isRejected,
  isRejectedWithValue,
} from '../../src'

const action: UnknownAction = { type: 'foo' }

describe('type tests', () => {
  describe('isAnyOf', () => {
    test('isAnyOf correctly narrows types when used with action creators', () => {
      const actionA = createAction('a', () => {
        return {
          payload: {
            prop1: 1,
            prop3: 2,
          },
        }
      })

      const actionB = createAction('b', () => {
        return {
          payload: {
            prop1: 1,
            prop2: 2,
          },
        }
      })

      if (isAnyOf(actionA, actionB)(action)) {
        expectTypeOf(action.payload).toHaveProperty('prop1')

        expectTypeOf(action.payload).not.toHaveProperty('prop2')

        expectTypeOf(action.payload).not.toHaveProperty('prop3')
      }
    })

    test('isAnyOf correctly narrows types when used with async thunks', () => {
      const asyncThunk1 = createAsyncThunk<{ prop1: number; prop3: number }>(
        'asyncThunk1',

        async () => {
          return {
            prop1: 1,
            prop3: 3,
          }
        },
      )

      const asyncThunk2 = createAsyncThunk<{ prop1: number; prop2: number }>(
        'asyncThunk2',

        async () => {
          return {
            prop1: 1,
            prop2: 2,
          }
        },
      )

      if (isAnyOf(asyncThunk1.fulfilled, asyncThunk2.fulfilled)(action)) {
        expectTypeOf(action.payload).toHaveProperty('prop1')

        expectTypeOf(action.payload).not.toHaveProperty('prop2')

        expectTypeOf(action.payload).not.toHaveProperty('prop3')
      }
    })

    test('isAnyOf correctly narrows types when used with type guards', () => {
      interface ActionA {
        type: 'a'
        payload: {
          prop1: 1
          prop3: 2
        }
      }

      interface ActionB {
        type: 'b'
        payload: {
          prop1: 1
          prop2: 2
        }
      }

      const guardA = (v: any): v is ActionA => {
        return v.type === 'a'
      }

      const guardB = (v: any): v is ActionB => {
        return v.type === 'b'
      }

      if (isAnyOf(guardA, guardB)(action)) {
        expectTypeOf(action.payload).toHaveProperty('prop1')

        expectTypeOf(action.payload).not.toHaveProperty('prop2')

        expectTypeOf(action.payload).not.toHaveProperty('prop3')
      }
    })
  })

  describe('isAllOf', () => {
    interface SpecialAction {
      payload: {
        special: boolean
      }
    }

    const isSpecialAction = (v: any): v is SpecialAction => {
      return v.meta.isSpecial
    }

    test('isAllOf correctly narrows types when used with action creators and type guards', () => {
      const actionA = createAction('a', () => {
        return {
          payload: {
            prop1: 1,
            prop3: 2,
          },
        }
      })

      if (isAllOf(actionA, isSpecialAction)(action)) {
        expectTypeOf(action.payload).toHaveProperty('prop1')

        expectTypeOf(action.payload).not.toHaveProperty('prop2')

        expectTypeOf(action.payload).toHaveProperty('prop3')

        expectTypeOf(action.payload).toHaveProperty('special')
      }
    })

    test('isAllOf correctly narrows types when used with async thunks and type guards', () => {
      const asyncThunk1 = createAsyncThunk<{ prop1: number; prop3: number }>(
        'asyncThunk1',

        async () => {
          return {
            prop1: 1,
            prop3: 3,
          }
        },
      )

      if (isAllOf(asyncThunk1.fulfilled, isSpecialAction)(action)) {
        expectTypeOf(action.payload).toHaveProperty('prop1')

        expectTypeOf(action.payload).not.toHaveProperty('prop2')

        expectTypeOf(action.payload).toHaveProperty('prop3')

        expectTypeOf(action.payload).toHaveProperty('special')
      }
    })

    test('isAnyOf correctly narrows types when used with type guards', () => {
      interface ActionA {
        type: 'a'
        payload: {
          prop1: 1
          prop3: 2
        }
      }

      const guardA = (v: any): v is ActionA => {
        return v.type === 'a'
      }

      if (isAllOf(guardA, isSpecialAction)(action)) {
        expectTypeOf(action.payload).toHaveProperty('prop1')

        expectTypeOf(action.payload).not.toHaveProperty('prop2')

        expectTypeOf(action.payload).toHaveProperty('prop3')

        expectTypeOf(action.payload).toHaveProperty('special')
      }
    })

    test('isPending correctly narrows types', () => {
      if (isPending(action)) {
        expectTypeOf(action.payload).toBeUndefined()

        expectTypeOf(action).not.toHaveProperty('error')
      }

      const thunk = createAsyncThunk<string>('a', () => 'result')

      if (isPending(thunk)(action)) {
        expectTypeOf(action.payload).toBeUndefined()

        expectTypeOf(action).not.toHaveProperty('error')
      }
    })

    test('isRejected correctly narrows types', () => {
      if (isRejected(action)) {
        // might be there if rejected with payload
        expectTypeOf(action.payload).toBeUnknown()

        expectTypeOf(action.error).toEqualTypeOf<SerializedError>()
      }

      const thunk = createAsyncThunk<string>('a', () => 'result')

      if (isRejected(thunk)(action)) {
        // might be there if rejected with payload
        expectTypeOf(action.payload).toBeUnknown()

        expectTypeOf(action.error).toEqualTypeOf<SerializedError>()
      }
    })

    test('isFulfilled correctly narrows types', () => {
      if (isFulfilled(action)) {
        expectTypeOf(action.payload).toBeUnknown()

        expectTypeOf(action).not.toHaveProperty('error')
      }

      const thunk = createAsyncThunk<string>('a', () => 'result')
      if (isFulfilled(thunk)(action)) {
        expectTypeOf(action.payload).toBeString()

        expectTypeOf(action).not.toHaveProperty('error')
      }
    })

    test('isAsyncThunkAction correctly narrows types', () => {
      if (isAsyncThunkAction(action)) {
        expectTypeOf(action.payload).toBeUnknown()

        // do not expect an error property because pending/fulfilled lack it
        expectTypeOf(action).not.toHaveProperty('error')
      }

      const thunk = createAsyncThunk<string>('a', () => 'result')
      if (isAsyncThunkAction(thunk)(action)) {
        // we should expect the payload to be available, but of unknown type because the action may be pending/rejected
        expectTypeOf(action.payload).toBeUnknown()

        // do not expect an error property because pending/fulfilled lack it
        expectTypeOf(action).not.toHaveProperty('error')
      }
    })

    test('isRejectedWithValue correctly narrows types', () => {
      if (isRejectedWithValue(action)) {
        expectTypeOf(action.payload).toBeUnknown()

        expectTypeOf(action.error).toEqualTypeOf<SerializedError>()
      }

      const thunk = createAsyncThunk<
        string,
        void,
        { rejectValue: { message: string } }
      >('a', () => 'result')
      if (isRejectedWithValue(thunk)(action)) {
        expectTypeOf(action.payload).toEqualTypeOf({ message: '' as string })

        expectTypeOf(action.error).toEqualTypeOf<SerializedError>()
      }
    })
  })

  test('matchersAcceptSpreadArguments', () => {
    const thunk1 = createAsyncThunk('a', () => 'a')
    const thunk2 = createAsyncThunk('b', () => 'b')
    const interestingThunks = [thunk1, thunk2]
    const interestingPendingThunks = interestingThunks.map(
      (thunk) => thunk.pending,
    )
    const interestingFulfilledThunks = interestingThunks.map(
      (thunk) => thunk.fulfilled,
    )

    const isLoading = isAnyOf(...interestingPendingThunks)
    const isNotLoading = isAnyOf(...interestingFulfilledThunks)

    const isAllLoading = isAllOf(...interestingPendingThunks)
  })
})

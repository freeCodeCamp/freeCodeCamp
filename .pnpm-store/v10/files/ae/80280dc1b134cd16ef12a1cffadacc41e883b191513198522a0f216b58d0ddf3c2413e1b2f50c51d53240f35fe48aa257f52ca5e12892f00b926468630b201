import type { SerializedError } from '@internal/createAsyncThunk'
import { createAsyncThunk } from '@internal/createAsyncThunk'
import { executeReducerBuilderCallback } from '@internal/mapBuilders'
import type { UnknownAction } from '@reduxjs/toolkit'
import { createAction } from '@reduxjs/toolkit'

describe('type tests', () => {
  test('builder callback for actionMap', () => {
    const increment = createAction<number, 'increment'>('increment')

    const decrement = createAction<number, 'decrement'>('decrement')

    executeReducerBuilderCallback<number>((builder) => {
      builder.addCase(increment, (state, action) => {
        expectTypeOf(state).toBeNumber()

        expectTypeOf(action).toEqualTypeOf<{
          type: 'increment'
          payload: number
        }>()

        expectTypeOf(state).not.toBeString()

        expectTypeOf(action).not.toMatchTypeOf<{
          type: 'increment'
          payload: string
        }>()

        expectTypeOf(action).not.toMatchTypeOf<{
          type: 'decrement'
          payload: number
        }>()
      })

      builder.addCase('increment', (state, action) => {
        expectTypeOf(state).toBeNumber()

        expectTypeOf(action).toEqualTypeOf<{ type: 'increment' }>()

        expectTypeOf(state).not.toBeString()

        expectTypeOf(action).not.toMatchTypeOf<{ type: 'decrement' }>()

        // this cannot be inferred and has to be manually specified
        expectTypeOf(action).not.toMatchTypeOf<{
          type: 'increment'
          payload: number
        }>()
      })

      builder.addCase(
        increment,
        (state, action: ReturnType<typeof increment>) => state,
      )

      // @ts-expect-error
      builder.addCase(
        increment,
        (state, action: ReturnType<typeof decrement>) => state,
      )

      builder.addCase(
        'increment',
        (state, action: ReturnType<typeof increment>) => state,
      )

      // @ts-expect-error
      builder.addCase(
        'decrement',
        (state, action: ReturnType<typeof increment>) => state,
      )

      // action type is inferred
      builder.addMatcher(increment.match, (state, action) => {
        expectTypeOf(action).toEqualTypeOf<ReturnType<typeof increment>>()
      })

      test('action type is inferred when type predicate lacks `type` property', () => {
        type PredicateWithoutTypeProperty = {
          payload: number
        }

        builder.addMatcher(
          (action): action is PredicateWithoutTypeProperty => true,
          (state, action) => {
            expectTypeOf(action).toMatchTypeOf<PredicateWithoutTypeProperty>()

            expectTypeOf(action).toMatchTypeOf<UnknownAction>()
          },
        )
      })

      // action type defaults to UnknownAction if no type predicate matcher is passed
      builder.addMatcher(
        () => true,
        (state, action) => {
          expectTypeOf(action).toMatchTypeOf<UnknownAction>()
        },
      )

      // with a boolean checker, action can also be typed by type argument
      builder.addMatcher<{ foo: boolean }>(
        () => true,
        (state, action) => {
          expectTypeOf(action).toMatchTypeOf<{ foo: boolean }>()

          expectTypeOf(action).toMatchTypeOf<UnknownAction>()
        },
      )

      // addCase().addMatcher() is possible, action type inferred correctly
      builder
        .addCase(
          'increment',
          (state, action: ReturnType<typeof increment>) => state,
        )
        .addMatcher(decrement.match, (state, action) => {
          expectTypeOf(action).toEqualTypeOf<ReturnType<typeof decrement>>()
        })

      // addCase().addDefaultCase() is possible, action type is UnknownAction
      builder
        .addCase(
          'increment',
          (state, action: ReturnType<typeof increment>) => state,
        )
        .addDefaultCase((state, action) => {
          expectTypeOf(action).toMatchTypeOf<UnknownAction>()
        })

      test('addAsyncThunk() should prevent further calls to addCase() ', () => {
        const asyncThunk = createAsyncThunk('test', () => {})
        const b = builder.addAsyncThunk(asyncThunk, {
          pending: () => {},
          rejected: () => {},
          fulfilled: () => {},
          settled: () => {},
        })

        expectTypeOf(b).not.toHaveProperty('addCase')

        expectTypeOf(b.addAsyncThunk).toBeFunction()

        expectTypeOf(b.addMatcher).toBeCallableWith(increment.match, () => {})

        expectTypeOf(b.addDefaultCase).toBeCallableWith(() => {})
      })

      test('addMatcher() should prevent further calls to addCase() and addAsyncThunk()', () => {
        const b = builder.addMatcher(increment.match, () => {})

        expectTypeOf(b).not.toHaveProperty('addCase')
        expectTypeOf(b).not.toHaveProperty('addAsyncThunk')

        expectTypeOf(b.addMatcher).toBeCallableWith(increment.match, () => {})

        expectTypeOf(b.addDefaultCase).toBeCallableWith(() => {})
      })

      test('addDefaultCase() should prevent further calls to addCase(), addAsyncThunk(), addMatcher() and addDefaultCase', () => {
        const b = builder.addDefaultCase(() => {})

        expectTypeOf(b).not.toHaveProperty('addCase')

        expectTypeOf(b).not.toHaveProperty('addAsyncThunk')

        expectTypeOf(b).not.toHaveProperty('addMatcher')

        expectTypeOf(b).not.toHaveProperty('addDefaultCase')
      })

      describe('`createAsyncThunk` actions work with `mapBuilder`', () => {
        test('case 1: normal `createAsyncThunk`', () => {
          const thunk = createAsyncThunk('test', () => {
            return 'ret' as const
          })
          builder.addCase(thunk.pending, (_, action) => {
            expectTypeOf(action).toMatchTypeOf<{
              payload: undefined
              meta: {
                arg: void
                requestId: string
                requestStatus: 'pending'
              }
            }>()
          })

          builder.addCase(thunk.rejected, (_, action) => {
            expectTypeOf(action).toMatchTypeOf<{
              payload: unknown
              error: SerializedError
              meta: {
                arg: void
                requestId: string
                requestStatus: 'rejected'
                aborted: boolean
                condition: boolean
                rejectedWithValue: boolean
              }
            }>()
          })
          builder.addCase(thunk.fulfilled, (_, action) => {
            expectTypeOf(action).toMatchTypeOf<{
              payload: 'ret'
              meta: {
                arg: void
                requestId: string
                requestStatus: 'fulfilled'
              }
            }>()
          })

          builder.addAsyncThunk(thunk, {
            pending(_, action) {
              expectTypeOf(action).toMatchTypeOf<{
                payload: undefined
                meta: {
                  arg: void
                  requestId: string
                  requestStatus: 'pending'
                }
              }>()
            },
            rejected(_, action) {
              expectTypeOf(action).toMatchTypeOf<{
                payload: unknown
                error: SerializedError
                meta: {
                  arg: void
                  requestId: string
                  requestStatus: 'rejected'
                  aborted: boolean
                  condition: boolean
                  rejectedWithValue: boolean
                }
              }>()
            },
            fulfilled(_, action) {
              expectTypeOf(action).toMatchTypeOf<{
                payload: 'ret'
                meta: {
                  arg: void
                  requestId: string
                  requestStatus: 'fulfilled'
                }
              }>()
            },
            settled(_, action) {
              expectTypeOf(action).toMatchTypeOf<
                | {
                    payload: 'ret'
                    meta: {
                      arg: void
                      requestId: string
                      requestStatus: 'fulfilled'
                    }
                  }
                | {
                    payload: unknown
                    error: SerializedError
                    meta: {
                      arg: void
                      requestId: string
                      requestStatus: 'rejected'
                      aborted: boolean
                      condition: boolean
                      rejectedWithValue: boolean
                    }
                  }
              >()
            },
          })
        })

        test('case 2: `createAsyncThunk` with `meta`', () => {
          const thunk = createAsyncThunk<
            'ret',
            void,
            {
              pendingMeta: { startedTimeStamp: number }
              fulfilledMeta: {
                fulfilledTimeStamp: number
                baseQueryMeta: 'meta!'
              }
              rejectedMeta: {
                baseQueryMeta: 'meta!'
              }
            }
          >(
            'test',
            (_, api) => {
              return api.fulfillWithValue('ret' as const, {
                fulfilledTimeStamp: 5,
                baseQueryMeta: 'meta!',
              })
            },
            {
              getPendingMeta() {
                return { startedTimeStamp: 0 }
              },
            },
          )

          builder.addCase(thunk.pending, (_, action) => {
            expectTypeOf(action).toMatchTypeOf<{
              payload: undefined
              meta: {
                arg: void
                requestId: string
                requestStatus: 'pending'
                startedTimeStamp: number
              }
            }>()
          })

          builder.addCase(thunk.rejected, (_, action) => {
            expectTypeOf(action).toMatchTypeOf<{
              payload: unknown
              error: SerializedError
              meta: {
                arg: void
                requestId: string
                requestStatus: 'rejected'
                aborted: boolean
                condition: boolean
                rejectedWithValue: boolean
                baseQueryMeta?: 'meta!'
              }
            }>()

            if (action.meta.rejectedWithValue) {
              expectTypeOf(action.meta.baseQueryMeta).toEqualTypeOf<'meta!'>()
            }
          })
          builder.addCase(thunk.fulfilled, (_, action) => {
            expectTypeOf(action).toMatchTypeOf<{
              payload: 'ret'
              meta: {
                arg: void
                requestId: string
                requestStatus: 'fulfilled'
                baseQueryMeta: 'meta!'
              }
            }>()
          })

          builder.addAsyncThunk(thunk, {
            pending(_, action) {
              expectTypeOf(action).toMatchTypeOf<{
                payload: undefined
                meta: {
                  arg: void
                  requestId: string
                  requestStatus: 'pending'
                  startedTimeStamp: number
                }
              }>()
            },
            rejected(_, action) {
              expectTypeOf(action).toMatchTypeOf<{
                payload: unknown
                error: SerializedError
                meta: {
                  arg: void
                  requestId: string
                  requestStatus: 'rejected'
                  aborted: boolean
                  condition: boolean
                  rejectedWithValue: boolean
                  baseQueryMeta?: 'meta!'
                }
              }>()
            },
            fulfilled(_, action) {
              expectTypeOf(action).toMatchTypeOf<{
                payload: 'ret'
                meta: {
                  arg: void
                  requestId: string
                  requestStatus: 'fulfilled'
                  baseQueryMeta: 'meta!'
                }
              }>()
            },
            settled(_, action) {
              expectTypeOf(action).toMatchTypeOf<
                | {
                    payload: 'ret'
                    meta: {
                      arg: void
                      requestId: string
                      requestStatus: 'fulfilled'
                      baseQueryMeta: 'meta!'
                    }
                  }
                | {
                    payload: unknown
                    error: SerializedError
                    meta: {
                      arg: void
                      requestId: string
                      requestStatus: 'rejected'
                      aborted: boolean
                      condition: boolean
                      rejectedWithValue: boolean
                      baseQueryMeta?: 'meta!'
                    }
                  }
              >()
            },
          })
        })
      })
    })
  })
})

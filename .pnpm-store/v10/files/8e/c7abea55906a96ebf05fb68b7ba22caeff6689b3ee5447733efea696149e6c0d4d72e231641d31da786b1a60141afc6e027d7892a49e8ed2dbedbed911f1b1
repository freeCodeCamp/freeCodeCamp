import type { Context } from 'react'
import type { ReactReduxContextValue } from 'react-redux'
import type { Action, Middleware, UnknownAction } from 'redux'
import type { ThunkDispatch } from 'redux-thunk'
import { createDynamicMiddleware } from '../react'

interface AppDispatch extends ThunkDispatch<number, undefined, UnknownAction> {
  (n: 1): 1
}

const untypedInstance = createDynamicMiddleware()

const typedInstance = createDynamicMiddleware<number, AppDispatch>()

declare const compatibleMiddleware: Middleware<{}, number, AppDispatch>
declare const incompatibleMiddleware: Middleware<{}, string, AppDispatch>

declare const customContext: Context<ReactReduxContextValue | null>

declare const addedMiddleware: Middleware<(n: 2) => 2>

describe('type tests', () => {
  test('instance typed at creation enforces correct middleware type', () => {
    const useDispatch = typedInstance.createDispatchWithMiddlewareHook(
      compatibleMiddleware,
      // @ts-expect-error
      incompatibleMiddleware,
    )

    const createDispatchWithMiddlewareHook =
      typedInstance.createDispatchWithMiddlewareHookFactory(customContext)
    const useDispatchWithContext = createDispatchWithMiddlewareHook(
      compatibleMiddleware,
      // @ts-expect-error
      incompatibleMiddleware,
    )
  })

  test('withTypes() enforces correct middleware type', () => {
    const createDispatchWithMiddlewareHook =
      untypedInstance.createDispatchWithMiddlewareHook.withTypes<{
        state: number
        dispatch: AppDispatch
      }>()
    const useDispatch = createDispatchWithMiddlewareHook(
      compatibleMiddleware,
      // @ts-expect-error
      incompatibleMiddleware,
    )

    const createCustomDispatchWithMiddlewareHook = untypedInstance
      .createDispatchWithMiddlewareHookFactory(customContext)
      .withTypes<{
        state: number
        dispatch: AppDispatch
      }>()
    const useCustomDispatch = createCustomDispatchWithMiddlewareHook(
      compatibleMiddleware,
      // @ts-expect-error
      incompatibleMiddleware,
    )
  })

  test('useDispatchWithMW returns typed dispatch, with any applicable extensions', () => {
    const useDispatchWithMW =
      typedInstance.createDispatchWithMiddlewareHook(addedMiddleware)
    const dispatch = useDispatchWithMW()

    // standard
    expectTypeOf(dispatch({ type: 'foo' })).toEqualTypeOf<Action<string>>()

    // thunk
    expectTypeOf(dispatch(() => 'foo')).toBeString()

    // static
    expectTypeOf(dispatch(1)).toEqualTypeOf<1>()

    // added
    expectTypeOf(dispatch(2)).toEqualTypeOf<2>()
  })
})

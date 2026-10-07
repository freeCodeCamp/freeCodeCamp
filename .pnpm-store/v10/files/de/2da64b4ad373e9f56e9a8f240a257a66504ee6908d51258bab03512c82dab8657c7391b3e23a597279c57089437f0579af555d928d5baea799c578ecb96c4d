import type { Action, Middleware, UnknownAction } from 'redux'
import type { ThunkDispatch } from 'redux-thunk'
import { configureStore } from '../../configureStore'
import { createDynamicMiddleware } from '../index'

const untypedInstance = createDynamicMiddleware()

interface AppDispatch extends ThunkDispatch<number, undefined, UnknownAction> {
  (n: 1): 1
}

const typedInstance = createDynamicMiddleware<number, AppDispatch>()

declare const staticMiddleware: Middleware<(n: 1) => 1>

const store = configureStore({
  reducer: () => 0,
  middleware: (gDM) =>
    gDM().prepend(typedInstance.middleware).concat(staticMiddleware),
})

declare const compatibleMiddleware: Middleware<{}, number, AppDispatch>
declare const incompatibleMiddleware: Middleware<{}, string, AppDispatch>

declare const addedMiddleware: Middleware<(n: 2) => 2>

describe('type tests', () => {
  test('instance typed at creation ensures middleware compatibility with store', () => {
    const store = configureStore({
      reducer: () => '',
      // @ts-expect-error
      middleware: (gDM) => gDM().prepend(typedInstance.middleware),
    })
  })

  test('instance typed at creation enforces correct middleware type', () => {
    typedInstance.addMiddleware(
      compatibleMiddleware,
      // @ts-expect-error
      incompatibleMiddleware,
    )

    const dispatch = store.dispatch(
      typedInstance.withMiddleware(
        compatibleMiddleware,
        // @ts-expect-error
        incompatibleMiddleware,
      ),
    )
  })

  test('withTypes() enforces correct middleware type', () => {
    const addMiddleware = untypedInstance.addMiddleware.withTypes<{
      state: number
      dispatch: AppDispatch
    }>()

    addMiddleware(
      compatibleMiddleware,
      // @ts-expect-error
      incompatibleMiddleware,
    )

    const withMiddleware = untypedInstance.withMiddleware.withTypes<{
      state: number
      dispatch: AppDispatch
    }>()

    const dispatch = store.dispatch(
      withMiddleware(
        compatibleMiddleware,
        // @ts-expect-error
        incompatibleMiddleware,
      ),
    )
  })

  test('withMiddleware returns typed dispatch, with any applicable extensions', () => {
    const dispatch = store.dispatch(
      typedInstance.withMiddleware(addedMiddleware),
    )

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

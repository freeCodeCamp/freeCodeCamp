import type { Middleware } from 'redux'
import { createDynamicMiddleware } from '../index'
import { configureStore } from '../../configureStore'
import type { BaseActionCreator, PayloadAction } from '../../createAction'
import { createAction } from '../../createAction'
import { isAllOf } from '../../matchers'

const probeType = 'probeableMW/probe'

export interface ProbeMiddleware
  extends BaseActionCreator<number, typeof probeType> {
  <Id extends number>(id: Id): PayloadAction<Id, typeof probeType>
}

export const probeMiddleware = createAction(probeType) as ProbeMiddleware

const matchId =
  <Id extends number>(id: Id) =>
  (action: any): action is PayloadAction<Id> =>
    action.payload === id

export const makeProbeableMiddleware = <Id extends number>(
  id: Id,
): Middleware<{
  (action: PayloadAction<Id, typeof probeType>): Id
}> => {
  const isMiddlewareAction = isAllOf(probeMiddleware, matchId(id))
  return (api) => (next) => (action) => {
    if (isMiddlewareAction(action)) {
      return id
    }
    return next(action)
  }
}

const staticMiddleware = makeProbeableMiddleware(1)

describe('createDynamicMiddleware', () => {
  it('allows injecting middleware after store instantiation', () => {
    const dynamicInstance = createDynamicMiddleware()
    const store = configureStore({
      reducer: () => 0,
      middleware: (gDM) =>
        gDM().prepend(dynamicInstance.middleware).concat(staticMiddleware),
    })
    // normal, pre-inject
    expect(store.dispatch(probeMiddleware(2))).toEqual(probeMiddleware(2))
    // static
    expect(store.dispatch(probeMiddleware(1))).toBe(1)

    // inject
    dynamicInstance.addMiddleware(makeProbeableMiddleware(2))

    // injected
    expect(store.dispatch(probeMiddleware(2))).toBe(2)
  })
  it('returns dispatch when withMiddleware is dispatched', () => {
    const dynamicInstance = createDynamicMiddleware()
    const store = configureStore({
      reducer: () => 0,
      middleware: (gDM) => gDM().prepend(dynamicInstance.middleware),
    })

    // normal, pre-inject
    expect(store.dispatch(probeMiddleware(2))).toEqual(probeMiddleware(2))

    const dispatch = store.dispatch(
      dynamicInstance.withMiddleware(makeProbeableMiddleware(2)),
    )
    expect(dispatch).toEqual(expect.any(Function))

    expect(dispatch(probeMiddleware(2))).toBe(2)
  })
})

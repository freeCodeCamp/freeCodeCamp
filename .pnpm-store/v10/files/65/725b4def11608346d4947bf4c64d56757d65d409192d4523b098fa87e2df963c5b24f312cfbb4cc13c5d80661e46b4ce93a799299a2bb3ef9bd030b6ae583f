import type { ActionCreatorInvariantMiddlewareOptions } from '@internal/actionCreatorInvariantMiddleware'
import { getMessage } from '@internal/actionCreatorInvariantMiddleware'
import { createActionCreatorInvariantMiddleware } from '@internal/actionCreatorInvariantMiddleware'
import type { MiddlewareAPI } from '@reduxjs/toolkit'
import { createAction } from '@reduxjs/toolkit'

describe('createActionCreatorInvariantMiddleware', () => {
  const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})

  afterEach(() => {
    consoleSpy.mockClear()
  })
  afterAll(() => {
    consoleSpy.mockRestore()
  })

  const dummyAction = createAction('aSlice/anAction')

  it('sends the action through the middleware chain', () => {
    const next = vi.fn()
    const dispatch = createActionCreatorInvariantMiddleware()(
      {} as MiddlewareAPI,
    )(next)
    dispatch({ type: 'SOME_ACTION' })

    expect(next).toHaveBeenCalledWith({
      type: 'SOME_ACTION',
    })
  })

  const makeActionTester = (
    options?: ActionCreatorInvariantMiddlewareOptions,
  ) =>
    createActionCreatorInvariantMiddleware(options)({} as MiddlewareAPI)(
      (action) => action,
    )

  it('logs a warning to console if an action creator is mistakenly dispatched', () => {
    const testAction = makeActionTester()

    testAction(dummyAction())

    expect(consoleSpy).not.toHaveBeenCalled()

    testAction(dummyAction)

    expect(consoleSpy).toHaveBeenLastCalledWith(getMessage(dummyAction.type))
  })

  it('allows passing a custom predicate', () => {
    let predicateCalled = false
    const testAction = makeActionTester({
      isActionCreator(action): action is Function {
        predicateCalled = true
        return false
      },
    })
    testAction(dummyAction())
    expect(predicateCalled).toBe(true)
  })
})

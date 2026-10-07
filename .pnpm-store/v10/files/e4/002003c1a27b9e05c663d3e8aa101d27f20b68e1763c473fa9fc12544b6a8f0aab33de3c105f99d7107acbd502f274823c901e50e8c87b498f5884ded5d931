import { noop } from '@internal/listenerMiddleware/utils'
import { delay, promiseWithResolvers } from '@internal/utils'
import type { CreateAsyncThunkFunction, UnknownAction } from '@reduxjs/toolkit'
import {
  configureStore,
  createAsyncThunk,
  createReducer,
  miniSerializeError,
  unwrapResult,
} from '@reduxjs/toolkit'

declare global {
  interface Window {
    AbortController: AbortController
  }
}

describe('createAsyncThunk', () => {
  it('creates the action types', () => {
    const thunkActionCreator = createAsyncThunk('testType', async () => 42)

    expect(thunkActionCreator.fulfilled.type).toBe('testType/fulfilled')
    expect(thunkActionCreator.pending.type).toBe('testType/pending')
    expect(thunkActionCreator.rejected.type).toBe('testType/rejected')
  })

  it('exposes the typePrefix it was created with', () => {
    const thunkActionCreator = createAsyncThunk('testType', async () => 42)

    expect(thunkActionCreator.typePrefix).toBe('testType')
  })

  it('includes a settled matcher', () => {
    const thunkActionCreator = createAsyncThunk('testType', async () => 42)
    expect(thunkActionCreator.settled).toEqual(expect.any(Function))
    expect(thunkActionCreator.settled(thunkActionCreator.pending(''))).toBe(
      false,
    )
    expect(
      thunkActionCreator.settled(thunkActionCreator.rejected(null, '')),
    ).toBe(true)
    expect(
      thunkActionCreator.settled(thunkActionCreator.fulfilled(42, '')),
    ).toBe(true)
  })

  it('works without passing arguments to the payload creator', async () => {
    const thunkActionCreator = createAsyncThunk('testType', async () => 42)

    let timesReducerCalled = 0

    const reducer = () => {
      timesReducerCalled++
    }

    const store = configureStore({
      reducer,
    })

    // reset from however many times the store called it
    timesReducerCalled = 0

    await store.dispatch(thunkActionCreator())

    expect(timesReducerCalled).toBe(2)
  })

  it('accepts arguments and dispatches the actions on resolve', async () => {
    const dispatch = vi.fn()

    let passedArg: any

    const result = 42
    const args = 123
    let generatedRequestId = ''

    const thunkActionCreator = createAsyncThunk(
      'testType',
      async (arg: number, { requestId }) => {
        passedArg = arg
        generatedRequestId = requestId
        return result
      },
    )

    const thunkFunction = thunkActionCreator(args)

    const thunkPromise = thunkFunction(dispatch, () => {}, undefined)

    expect(thunkPromise.requestId).toBe(generatedRequestId)
    expect(thunkPromise.arg).toBe(args)

    await thunkPromise

    expect(passedArg).toBe(args)

    expect(dispatch).toHaveBeenNthCalledWith(
      1,
      thunkActionCreator.pending(generatedRequestId, args),
    )

    expect(dispatch).toHaveBeenNthCalledWith(
      2,
      thunkActionCreator.fulfilled(result, generatedRequestId, args),
    )
  })

  it('accepts arguments and dispatches the actions on reject', async () => {
    const dispatch = vi.fn()

    const args = 123
    let generatedRequestId = ''

    const error = new Error('Panic!')

    const thunkActionCreator = createAsyncThunk(
      'testType',
      async (args: number, { requestId }) => {
        generatedRequestId = requestId
        throw error
      },
    )

    const thunkFunction = thunkActionCreator(args)

    try {
      await thunkFunction(dispatch, () => {}, undefined)
    } catch (e) {}

    expect(dispatch).toHaveBeenNthCalledWith(
      1,
      thunkActionCreator.pending(generatedRequestId, args),
    )

    expect(dispatch).toHaveBeenCalledTimes(2)

    // Have to check the bits of the action separately since the error was processed
    const errorAction = dispatch.mock.calls[1][0]
    expect(errorAction.error).toEqual(miniSerializeError(error))
    expect(errorAction.meta.requestId).toBe(generatedRequestId)
    expect(errorAction.meta.arg).toBe(args)
  })

  it('dispatches an empty error when throwing a random object without serializedError properties', async () => {
    const dispatch = vi.fn()

    const args = 123
    let generatedRequestId = ''

    const errorObject = { wny: 'dothis' }

    const thunkActionCreator = createAsyncThunk(
      'testType',
      async (args: number, { requestId }) => {
        generatedRequestId = requestId
        throw errorObject
      },
    )

    const thunkFunction = thunkActionCreator(args)

    try {
      await thunkFunction(dispatch, () => {}, undefined)
    } catch (e) {}

    expect(dispatch).toHaveBeenNthCalledWith(
      1,
      thunkActionCreator.pending(generatedRequestId, args),
    )

    expect(dispatch).toHaveBeenCalledTimes(2)

    const errorAction = dispatch.mock.calls[1][0]
    expect(errorAction.error).toEqual({})
    expect(errorAction.meta.requestId).toBe(generatedRequestId)
    expect(errorAction.meta.arg).toBe(args)
  })

  it('dispatches an action with a formatted error when throwing an object with known error keys', async () => {
    const dispatch = vi.fn()

    const args = 123
    let generatedRequestId = ''

    const errorObject = {
      name: 'Custom thrown error',
      message: 'This is not necessary',
      code: '400',
    }

    const thunkActionCreator = createAsyncThunk(
      'testType',
      async (args: number, { requestId }) => {
        generatedRequestId = requestId
        throw errorObject
      },
    )

    const thunkFunction = thunkActionCreator(args)

    try {
      await thunkFunction(dispatch, () => {}, undefined)
    } catch (e) {}

    expect(dispatch).toHaveBeenNthCalledWith(
      1,
      thunkActionCreator.pending(generatedRequestId, args),
    )

    expect(dispatch).toHaveBeenCalledTimes(2)

    // Have to check the bits of the action separately since the error was processed
    const errorAction = dispatch.mock.calls[1][0]
    expect(errorAction.error).toEqual(miniSerializeError(errorObject))
    expect(Object.keys(errorAction.error)).not.toContain('stack')
    expect(errorAction.meta.requestId).toBe(generatedRequestId)
    expect(errorAction.meta.arg).toBe(args)
  })

  it('dispatches a rejected action with a customized payload when a user returns rejectWithValue()', async () => {
    const dispatch = vi.fn()

    const args = 123
    let generatedRequestId = ''

    const errorPayload = {
      errorMessage:
        'I am a fake server-provided 400 payload with validation details',
      errors: [
        { field_one: 'Must be a string' },
        { field_two: 'Must be a number' },
      ],
    }

    const thunkActionCreator = createAsyncThunk(
      'testType',
      async (args: number, { requestId, rejectWithValue }) => {
        generatedRequestId = requestId

        return rejectWithValue(errorPayload)
      },
    )

    const thunkFunction = thunkActionCreator(args)

    try {
      await thunkFunction(dispatch, () => {}, undefined)
    } catch (e) {}

    expect(dispatch).toHaveBeenNthCalledWith(
      1,
      thunkActionCreator.pending(generatedRequestId, args),
    )

    expect(dispatch).toHaveBeenCalledTimes(2)

    // Have to check the bits of the action separately since the error was processed
    const errorAction = dispatch.mock.calls[1][0]

    expect(errorAction.error.message).toEqual('Rejected')
    expect(errorAction.payload).toBe(errorPayload)
    expect(errorAction.meta.arg).toBe(args)
  })

  it('dispatches a rejected action with a customized payload when a user throws rejectWithValue()', async () => {
    const dispatch = vi.fn()

    const args = 123
    let generatedRequestId = ''

    const errorPayload = {
      errorMessage:
        'I am a fake server-provided 400 payload with validation details',
      errors: [
        { field_one: 'Must be a string' },
        { field_two: 'Must be a number' },
      ],
    }

    const thunkActionCreator = createAsyncThunk(
      'testType',
      async (args: number, { requestId, rejectWithValue }) => {
        generatedRequestId = requestId

        throw rejectWithValue(errorPayload)
      },
    )

    const thunkFunction = thunkActionCreator(args)

    try {
      await thunkFunction(dispatch, () => {}, undefined)
    } catch (e) {}

    expect(dispatch).toHaveBeenNthCalledWith(
      1,
      thunkActionCreator.pending(generatedRequestId, args),
    )

    expect(dispatch).toHaveBeenCalledTimes(2)

    // Have to check the bits of the action separately since the error was processed
    const errorAction = dispatch.mock.calls[1][0]

    expect(errorAction.error.message).toEqual('Rejected')
    expect(errorAction.payload).toBe(errorPayload)
    expect(errorAction.meta.arg).toBe(args)
  })

  it('dispatches a rejected action with a miniSerializeError when rejectWithValue conditions are not satisfied', async () => {
    const dispatch = vi.fn()

    const args = 123
    let generatedRequestId = ''

    const error = new Error('Panic!')

    const errorPayload = {
      errorMessage:
        'I am a fake server-provided 400 payload with validation details',
      errors: [
        { field_one: 'Must be a string' },
        { field_two: 'Must be a number' },
      ],
    }

    const thunkActionCreator = createAsyncThunk(
      'testType',
      async (args: number, { requestId, rejectWithValue }) => {
        generatedRequestId = requestId

        try {
          throw error
        } catch (err) {
          if (!(err as any).response) {
            throw err
          }
          return rejectWithValue(errorPayload)
        }
      },
    )

    const thunkFunction = thunkActionCreator(args)

    try {
      await thunkFunction(dispatch, () => {}, undefined)
    } catch (e) {}

    expect(dispatch).toHaveBeenNthCalledWith(
      1,
      thunkActionCreator.pending(generatedRequestId, args),
    )

    expect(dispatch).toHaveBeenCalledTimes(2)

    // Have to check the bits of the action separately since the error was processed
    const errorAction = dispatch.mock.calls[1][0]
    expect(errorAction.error).toEqual(miniSerializeError(error))
    expect(errorAction.payload).toEqual(undefined)
    expect(errorAction.meta.requestId).toBe(generatedRequestId)
    expect(errorAction.meta.arg).toBe(args)
  })
})

describe('createAsyncThunk with abortController', () => {
  const asyncThunk = createAsyncThunk(
    'test',
    function abortablePayloadCreator(_: any, { signal }) {
      return new Promise((resolve, reject) => {
        if (signal.aborted) {
          reject(
            new DOMException(
              'This should never be reached as it should already be handled.',
              'AbortError',
            ),
          )
        }
        signal.addEventListener('abort', () => {
          reject(new DOMException('Was aborted while running', 'AbortError'))
        })
        setTimeout(resolve, 100)
      })
    },
  )

  let store = configureStore({
    reducer(store: UnknownAction[] = []) {
      return store
    },
  })

  beforeEach(() => {
    store = configureStore({
      reducer(store: UnknownAction[] = [], action) {
        return [...store, action]
      },
    })
  })

  test('normal usage', async () => {
    await store.dispatch(asyncThunk({}))
    expect(store.getState()).toEqual([
      expect.any(Object),
      expect.objectContaining({ type: 'test/pending' }),
      expect.objectContaining({ type: 'test/fulfilled' }),
    ])
  })

  test('abort after dispatch', async () => {
    const promise = store.dispatch(asyncThunk({}))
    promise.abort('AbortReason')
    const result = await promise
    const expectedAbortedAction = {
      type: 'test/rejected',
      error: {
        message: 'AbortReason',
        name: 'AbortError',
      },
      meta: { aborted: true, requestId: promise.requestId },
    }

    // abortedAction with reason is dispatched after test/pending is dispatched
    expect(store.getState()).toMatchObject([
      {},
      { type: 'test/pending' },
      expectedAbortedAction,
    ])

    // same abortedAction is returned, but with the AbortError from the abortablePayloadCreator
    expect(result).toMatchObject(expectedAbortedAction)

    // calling unwrapResult on the returned object re-throws the error from the abortablePayloadCreator
    expect(() => unwrapResult(result)).toThrowError(
      expect.objectContaining(expectedAbortedAction.error),
    )
  })

  test('even when the payloadCreator does not directly support the signal, no further actions are dispatched', async () => {
    const unawareAsyncThunk = createAsyncThunk('unaware', async () => {
      await new Promise((resolve) => setTimeout(resolve, 100))
      return 'finished'
    })

    const promise = store.dispatch(unawareAsyncThunk())
    promise.abort('AbortReason')
    const result = await promise

    const expectedAbortedAction = {
      type: 'unaware/rejected',
      error: {
        message: 'AbortReason',
        name: 'AbortError',
      },
    }

    // abortedAction with reason is dispatched after test/pending is dispatched
    expect(store.getState()).toEqual([
      expect.any(Object),
      expect.objectContaining({ type: 'unaware/pending' }),
      expect.objectContaining(expectedAbortedAction),
    ])

    // same abortedAction is returned, but with the AbortError from the abortablePayloadCreator
    expect(result).toMatchObject(expectedAbortedAction)

    // calling unwrapResult on the returned object re-throws the error from the abortablePayloadCreator
    expect(() => unwrapResult(result)).toThrowError(
      expect.objectContaining(expectedAbortedAction.error),
    )
  })

  test('dispatch(asyncThunk) returns on abort and does not wait for the promiseProvider to finish', async () => {
    let running = false
    const longRunningAsyncThunk = createAsyncThunk('longRunning', async () => {
      running = true
      await new Promise((resolve) => setTimeout(resolve, 30000))
      running = false
    })

    const promise = store.dispatch(longRunningAsyncThunk())
    expect(running).toBeTruthy()
    promise.abort()
    const result = await promise
    expect(running).toBeTruthy()
    expect(result).toMatchObject({
      type: 'longRunning/rejected',
      error: { message: 'Aborted', name: 'AbortError' },
      meta: { aborted: true },
    })
  })

  describe('behavior with missing AbortController', () => {
    let keepAbortController: (typeof window)['AbortController']
    let freshlyLoadedModule: typeof import('../createAsyncThunk')

    beforeEach(async () => {
      keepAbortController = window.AbortController
      delete (window as any).AbortController
      vi.resetModules()
      freshlyLoadedModule = await import('../createAsyncThunk')
      vi.stubEnv('NODE_ENV', 'development')
    })

    afterEach(() => {
      vi.unstubAllEnvs()
      vi.clearAllMocks()
      vi.stubGlobal('AbortController', keepAbortController)
      vi.resetModules()
    })

    test('calling a thunk made with createAsyncThunk should fail if no global abortController is not available', async () => {
      const longRunningAsyncThunk = freshlyLoadedModule.createAsyncThunk(
        'longRunning',
        async () => {
          await new Promise((resolve) => setTimeout(resolve, 30000))
        },
      )

      expect(longRunningAsyncThunk()).toThrow('AbortController is not defined')
    })
  })
})

test('non-serializable arguments are ignored by serializableStateInvariantMiddleware', async () => {
  const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(noop)
  const nonSerializableValue = new Map()
  const asyncThunk = createAsyncThunk('test', (arg: Map<any, any>) => {})

  configureStore({
    reducer: () => 0,
  }).dispatch(asyncThunk(nonSerializableValue))

  expect(consoleErrorSpy).not.toHaveBeenCalled()

  consoleErrorSpy.mockRestore()
})

describe('conditional skipping of asyncThunks', () => {
  const arg = {}
  const getState = vi.fn(() => ({}))
  const dispatch = vi.fn((x: any) => x)
  const payloadCreator = vi.fn((x: typeof arg) => 10)
  const condition = vi.fn(() => false)
  const extra = {}

  beforeEach(() => {
    getState.mockClear()
    dispatch.mockClear()
    payloadCreator.mockClear()
    condition.mockClear()
  })

  test('returning false from condition skips payloadCreator and returns a rejected action', async () => {
    const asyncThunk = createAsyncThunk('test', payloadCreator, { condition })
    const result = await asyncThunk(arg)(dispatch, getState, extra)

    expect(condition).toHaveBeenCalled()
    expect(payloadCreator).not.toHaveBeenCalled()
    expect(asyncThunk.rejected.match(result)).toBe(true)
    expect((result as any).meta.condition).toBe(true)
  })

  test('return falsy from condition does not skip payload creator', async () => {
    // Override TS's expectation that this is a boolean
    condition.mockReturnValueOnce(undefined as unknown as boolean)
    const asyncThunk = createAsyncThunk('test', payloadCreator, { condition })
    const result = await asyncThunk(arg)(dispatch, getState, extra)

    expect(condition).toHaveBeenCalled()
    expect(payloadCreator).toHaveBeenCalled()
    expect(asyncThunk.fulfilled.match(result)).toBe(true)
    expect(result.payload).toBe(10)
  })

  test('returning true from condition executes payloadCreator', async () => {
    condition.mockReturnValueOnce(true)
    const asyncThunk = createAsyncThunk('test', payloadCreator, { condition })
    const result = await asyncThunk(arg)(dispatch, getState, extra)

    expect(condition).toHaveBeenCalled()
    expect(payloadCreator).toHaveBeenCalled()
    expect(asyncThunk.fulfilled.match(result)).toBe(true)
    expect(result.payload).toBe(10)
  })

  test('condition is called with arg, getState and extra', async () => {
    const asyncThunk = createAsyncThunk('test', payloadCreator, { condition })
    await asyncThunk(arg)(dispatch, getState, extra)

    expect(condition).toHaveBeenCalledOnce()
    expect(condition).toHaveBeenLastCalledWith(
      arg,
      expect.objectContaining({ getState, extra }),
    )
  })

  test('pending is dispatched synchronously if condition is synchronous', async () => {
    const condition = () => true
    const asyncThunk = createAsyncThunk('test', payloadCreator, { condition })
    const thunkCallPromise = asyncThunk(arg)(dispatch, getState, extra)
    expect(dispatch).toHaveBeenCalledOnce()
    await thunkCallPromise
    expect(dispatch).toHaveBeenCalledTimes(2)
  })

  test('async condition', async () => {
    const condition = () => Promise.resolve(false)
    const asyncThunk = createAsyncThunk('test', payloadCreator, { condition })
    await asyncThunk(arg)(dispatch, getState, extra)
    expect(dispatch).not.toHaveBeenCalled()
  })

  test('async condition with rejected promise', async () => {
    const condition = () => Promise.reject()
    const asyncThunk = createAsyncThunk('test', payloadCreator, { condition })
    await asyncThunk(arg)(dispatch, getState, extra)
    expect(dispatch).toHaveBeenCalledOnce()
    expect(dispatch).toHaveBeenLastCalledWith(
      expect.objectContaining({ type: 'test/rejected' }),
    )
  })

  test('async condition with AbortController signal first', async () => {
    const condition = async () => {
      await delay(25)
      return true
    }
    const asyncThunk = createAsyncThunk('test', payloadCreator, { condition })

    try {
      const thunkPromise = asyncThunk(arg)(dispatch, getState, extra)
      thunkPromise.abort()
      await thunkPromise
    } catch (err) {}
    expect(dispatch).not.toHaveBeenCalled()
  })

  test('rejected action is not dispatched by default', async () => {
    const asyncThunk = createAsyncThunk('test', payloadCreator, { condition })
    await asyncThunk(arg)(dispatch, getState, extra)

    expect(dispatch).not.toHaveBeenCalled()
  })

  test('does not fail when attempting to abort a canceled promise', async () => {
    const asyncPayloadCreator = vi.fn(async (x: typeof arg) => {
      await delay(200)
      return 10
    })

    const asyncThunk = createAsyncThunk('test', asyncPayloadCreator, {
      condition,
    })
    const promise = asyncThunk(arg)(dispatch, getState, extra)
    promise.abort(
      `If the promise was 1. somehow canceled, 2. in a 'started' state and 3. we attempted to abort, this would crash the tests`,
    )
  })

  test('rejected action can be dispatched via option', async () => {
    const asyncThunk = createAsyncThunk('test', payloadCreator, {
      condition,
      dispatchConditionRejection: true,
    })
    await asyncThunk(arg)(dispatch, getState, extra)

    expect(dispatch).toHaveBeenCalledOnce()
    expect(dispatch).toHaveBeenLastCalledWith(
      expect.objectContaining({
        error: {
          message: 'Aborted due to condition callback returning false.',
          name: 'ConditionError',
        },
        meta: {
          aborted: false,
          arg,
          rejectedWithValue: false,
          condition: true,
          requestId: expect.stringContaining(''),
          requestStatus: 'rejected',
        },
        payload: undefined,
        type: 'test/rejected',
      }),
    )
  })
})

test('serializeError implementation', async () => {
  function serializeError() {
    return 'serialized!'
  }
  const errorObject = 'something else!'

  const store = configureStore({
    reducer: (state = [], action) => [...state, action],
  })

  const asyncThunk = createAsyncThunk<
    unknown,
    void,
    { serializedErrorType: string }
  >('test', () => Promise.reject(errorObject), { serializeError })
  const rejected = await store.dispatch(asyncThunk())
  if (!asyncThunk.rejected.match(rejected)) {
    throw new Error()
  }

  const expectation = {
    type: 'test/rejected',
    payload: undefined,
    error: 'serialized!',
    meta: expect.any(Object),
  }
  expect(rejected).toEqual(expectation)
  expect(store.getState()[2]).toEqual(expectation)
  expect(rejected.error).not.toEqual(miniSerializeError(errorObject))
})

describe('unwrapResult', () => {
  const getState = vi.fn(() => ({}))
  const dispatch = vi.fn((x: any) => x)
  const extra = {}
  test('fulfilled case', async () => {
    const asyncThunk = createAsyncThunk('test', () => {
      return 'fulfilled!' as const
    })

    const unwrapPromise = asyncThunk()(dispatch, getState, extra).then(
      unwrapResult,
    )

    await expect(unwrapPromise).resolves.toBe('fulfilled!')

    const unwrapPromise2 = asyncThunk()(dispatch, getState, extra)
    const res = await unwrapPromise2.unwrap()
    expect(res).toBe('fulfilled!')
  })
  test('error case', async () => {
    const error = new Error('Panic!')
    const asyncThunk = createAsyncThunk('test', () => {
      throw error
    })

    const unwrapPromise = asyncThunk()(dispatch, getState, extra).then(
      unwrapResult,
    )

    await expect(unwrapPromise).rejects.toEqual(miniSerializeError(error))

    const unwrapPromise2 = asyncThunk()(dispatch, getState, extra)
    await expect(unwrapPromise2.unwrap()).rejects.toEqual(
      miniSerializeError(error),
    )
  })
  test('rejectWithValue case', async () => {
    const asyncThunk = createAsyncThunk('test', (_, { rejectWithValue }) => {
      return rejectWithValue('rejectWithValue!')
    })

    const unwrapPromise = asyncThunk()(dispatch, getState, extra).then(
      unwrapResult,
    )

    await expect(unwrapPromise).rejects.toBe('rejectWithValue!')

    const unwrapPromise2 = asyncThunk()(dispatch, getState, extra)
    await expect(unwrapPromise2.unwrap()).rejects.toBe('rejectWithValue!')
  })
})

describe('idGenerator option', () => {
  const getState = () => ({})
  const dispatch = (x: any) => x
  const extra = {}

  test('idGenerator implementation - can customizes how request IDs are generated', async () => {
    function makeFakeIdGenerator() {
      let id = 0
      return vi.fn(() => {
        id++
        return `fake-random-id-${id}`
      })
    }

    let generatedRequestId = ''

    const idGenerator = makeFakeIdGenerator()
    const asyncThunk = createAsyncThunk(
      'test',
      async (args: void, { requestId }) => {
        generatedRequestId = requestId
      },
      { idGenerator },
    )

    // dispatching the thunks should be using the custom id generator
    const promise0 = asyncThunk()(dispatch, getState, extra)
    expect(generatedRequestId).toEqual('fake-random-id-1')
    expect(promise0.requestId).toEqual('fake-random-id-1')
    expect((await promise0).meta.requestId).toEqual('fake-random-id-1')

    const promise1 = asyncThunk()(dispatch, getState, extra)
    expect(generatedRequestId).toEqual('fake-random-id-2')
    expect(promise1.requestId).toEqual('fake-random-id-2')
    expect((await promise1).meta.requestId).toEqual('fake-random-id-2')

    const promise2 = asyncThunk()(dispatch, getState, extra)
    expect(generatedRequestId).toEqual('fake-random-id-3')
    expect(promise2.requestId).toEqual('fake-random-id-3')
    expect((await promise2).meta.requestId).toEqual('fake-random-id-3')

    generatedRequestId = ''
    const defaultAsyncThunk = createAsyncThunk(
      'test',
      async (args: void, { requestId }) => {
        generatedRequestId = requestId
      },
    )
    // dispatching the default options thunk should still generate an id,
    // but not using the custom id generator
    const promise3 = defaultAsyncThunk()(dispatch, getState, extra)
    expect(generatedRequestId).toEqual(promise3.requestId)
    expect(promise3.requestId).not.toEqual('')
    expect(promise3.requestId).not.toEqual(
      expect.stringContaining('fake-random-id'),
    )
    expect((await promise3).meta.requestId).not.toEqual(
      expect.stringContaining('fake-fandom-id'),
    )
  })

  test('idGenerator should be called with thunkArg', async () => {
    const customIdGenerator = vi.fn((seed) => `fake-unique-random-id-${seed}`)
    let generatedRequestId = ''
    const asyncThunk = createAsyncThunk(
      'test',
      async (args: any, { requestId }) => {
        generatedRequestId = requestId
      },
      { idGenerator: customIdGenerator },
    )

    const thunkArg = 1
    const expected = 'fake-unique-random-id-1'
    const asyncThunkPromise = asyncThunk(thunkArg)(dispatch, getState, extra)

    expect(customIdGenerator).toHaveBeenCalledWith(thunkArg)
    expect(asyncThunkPromise.requestId).toEqual(expected)
    expect((await asyncThunkPromise).meta.requestId).toEqual(expected)
  })
})

test('`condition` will see state changes from a synchronously invoked asyncThunk', () => {
  type State = ReturnType<typeof store.getState>
  const onStart = vi.fn()
  const asyncThunk = createAsyncThunk<
    void,
    { force?: boolean },
    { state: State }
  >('test', onStart, {
    condition({ force }, { getState }) {
      return force || !getState().started
    },
  })
  const store = configureStore({
    reducer: createReducer({ started: false }, (builder) => {
      builder.addCase(asyncThunk.pending, (state) => {
        state.started = true
      })
    }),
  })

  store.dispatch(asyncThunk({ force: false }))
  expect(onStart).toHaveBeenCalledOnce()
  store.dispatch(asyncThunk({ force: false }))
  expect(onStart).toHaveBeenCalledOnce()
  store.dispatch(asyncThunk({ force: true }))
  expect(onStart).toHaveBeenCalledTimes(2)
})

const getNewStore = () =>
  configureStore({
    reducer(actions: UnknownAction[] = [], action) {
      return [...actions, action]
    },
  })

describe('meta', () => {
  let store = getNewStore()

  beforeEach(() => {
    store = getNewStore()
  })

  test('pendingMeta', () => {
    const pendingThunk = createAsyncThunk('test', (arg: string) => {}, {
      getPendingMeta({ arg, requestId }) {
        expect(arg).toBe('testArg')
        expect(requestId).toEqual(expect.any(String))
        return { extraProp: 'foo' }
      },
    })
    const ret = store.dispatch(pendingThunk('testArg'))
    expect(store.getState()[1]).toEqual({
      meta: {
        arg: 'testArg',
        extraProp: 'foo',
        requestId: ret.requestId,
        requestStatus: 'pending',
      },
      payload: undefined,
      type: 'test/pending',
    })
  })

  test('fulfilledMeta', async () => {
    const fulfilledThunk = createAsyncThunk<
      string,
      string,
      { fulfilledMeta: { extraProp: string } }
    >('test', (arg: string, { fulfillWithValue }) => {
      return fulfillWithValue('hooray!', { extraProp: 'bar' })
    })
    const ret = store.dispatch(fulfilledThunk('testArg'))
    expect(await ret).toEqual({
      meta: {
        arg: 'testArg',
        extraProp: 'bar',
        requestId: ret.requestId,
        requestStatus: 'fulfilled',
      },
      payload: 'hooray!',
      type: 'test/fulfilled',
    })
  })

  test('rejectedMeta', async () => {
    const fulfilledThunk = createAsyncThunk<
      string,
      string,
      { rejectedMeta: { extraProp: string } }
    >('test', (arg: string, { rejectWithValue }) => {
      return rejectWithValue('damn!', { extraProp: 'baz' })
    })
    const promise = store.dispatch(fulfilledThunk('testArg'))
    const ret = await promise
    expect(ret).toEqual({
      meta: {
        arg: 'testArg',
        extraProp: 'baz',
        requestId: promise.requestId,
        requestStatus: 'rejected',
        rejectedWithValue: true,
        aborted: false,
        condition: false,
      },
      error: { message: 'Rejected' },
      payload: 'damn!',
      type: 'test/rejected',
    })

    if (ret.meta.requestStatus === 'rejected' && ret.meta.rejectedWithValue) {
    } else {
      // could be caused by a `throw`, `abort()` or `condition` - no `rejectedMeta` in that case
      // @ts-expect-error
      ret.meta.extraProp
    }
  })

  test('typed createAsyncThunk.withTypes', () => {
    const typedCAT = createAsyncThunk.withTypes<{
      state: { s: string }
      rejectValue: string
      extra: { s: string; n: number }
    }>()
    const thunk = typedCAT('a', () => 'b')
    const expectFunction = expect.any(Function)
    expect(thunk.fulfilled).toEqual(expectFunction)
    expect(thunk.pending).toEqual(expectFunction)
    expect(thunk.rejected).toEqual(expectFunction)
    expect(thunk.settled).toEqual(expectFunction)
    expect(thunk.fulfilled.type).toBe('a/fulfilled')
  })
  test('createAsyncThunkWrapper using CreateAsyncThunkFunction', async () => {
    const customSerializeError = () => 'serialized!'
    const createAppAsyncThunk: CreateAsyncThunkFunction<{
      serializedErrorType: ReturnType<typeof customSerializeError>
    }> = (prefix: string, payloadCreator: any, options: any) =>
      createAsyncThunk(prefix, payloadCreator, {
        ...options,
        serializeError: customSerializeError,
      }) as any

    const asyncThunk = createAppAsyncThunk('test', async () => {
      throw new Error('Panic!')
    })

    const promise = store.dispatch(asyncThunk())
    const result = await promise
    if (!asyncThunk.rejected.match(result)) {
      throw new Error('should have thrown')
    }
    expect(result.error).toEqual('serialized!')
  })
})

describe('dispatch config', () => {
  let store = getNewStore()

  beforeEach(() => {
    store = getNewStore()
  })
  test('accepts external signal', async () => {
    const asyncThunk = createAsyncThunk('test', async (_: void, { signal }) => {
      signal.throwIfAborted()
      const { promise, reject } = promiseWithResolvers<never>()
      signal.addEventListener('abort', () => reject(signal.reason))
      return promise
    })

    const abortController = new AbortController()
    const promise = store.dispatch(
      asyncThunk(undefined, { signal: abortController.signal }),
    )
    abortController.abort()
    await expect(promise.unwrap()).rejects.toThrow(
      'External signal was aborted',
    )
  })
  test('handles already aborted external signal', async () => {
    const asyncThunk = createAsyncThunk('test', async (_: void, { signal }) => {
      signal.throwIfAborted()
      const { promise, reject } = promiseWithResolvers<never>()
      signal.addEventListener('abort', () => reject(signal.reason))
      return promise
    })

    const signal = AbortSignal.abort()
    const promise = store.dispatch(asyncThunk(undefined, { signal }))
    await expect(promise.unwrap()).rejects.toThrow(
      'Aborted due to condition callback returning false.',
    )
  })
})

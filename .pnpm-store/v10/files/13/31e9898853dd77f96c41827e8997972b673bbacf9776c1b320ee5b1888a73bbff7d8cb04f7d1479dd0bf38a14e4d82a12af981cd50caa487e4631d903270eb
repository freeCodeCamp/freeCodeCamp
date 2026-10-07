import type {
  AsyncThunk,
  SerializedError,
  ThunkDispatch,
  UnknownAction,
} from '@reduxjs/toolkit'
import {
  configureStore,
  createAsyncThunk,
  createReducer,
  createSlice,
  unwrapResult,
} from '@reduxjs/toolkit'

import type { TSVersion } from '@phryneas/ts-version'
import type { AxiosError } from 'axios'
import apiRequest from 'axios'
import type { AsyncThunkDispatchConfig } from '@internal/createAsyncThunk'

const defaultDispatch = (() => {}) as ThunkDispatch<{}, any, UnknownAction>
const unknownAction = { type: 'foo' } as UnknownAction

describe('type tests', () => {
  test('basic usage', async () => {
    const asyncThunk = createAsyncThunk('test', (id: number) =>
      Promise.resolve(id * 2),
    )

    const reducer = createReducer({}, (builder) =>
      builder
        .addCase(asyncThunk.pending, (_, action) => {
          expectTypeOf(action).toEqualTypeOf<
            ReturnType<(typeof asyncThunk)['pending']>
          >()
        })

        .addCase(asyncThunk.fulfilled, (_, action) => {
          expectTypeOf(action).toEqualTypeOf<
            ReturnType<(typeof asyncThunk)['fulfilled']>
          >()

          expectTypeOf(action.payload).toBeNumber()
        })

        .addCase(asyncThunk.rejected, (_, action) => {
          expectTypeOf(action).toEqualTypeOf<
            ReturnType<(typeof asyncThunk)['rejected']>
          >()

          expectTypeOf(action.error).toMatchTypeOf<Partial<Error> | undefined>()
        }),
    )

    const promise = defaultDispatch(asyncThunk(3))

    expectTypeOf(promise.requestId).toBeString()

    expectTypeOf(promise.arg).toBeNumber()

    expectTypeOf(promise.abort).toEqualTypeOf<(reason?: string) => void>()

    const result = await promise

    if (asyncThunk.fulfilled.match(result)) {
      expectTypeOf(result).toEqualTypeOf<
        ReturnType<(typeof asyncThunk)['fulfilled']>
      >()
    } else {
      expectTypeOf(result).toEqualTypeOf<
        ReturnType<(typeof asyncThunk)['rejected']>
      >()
    }

    promise
      .then(unwrapResult)
      .then((result) => {
        expectTypeOf(result).toBeNumber()

        expectTypeOf(result).not.toMatchTypeOf<Error>()
      })
      .catch((error) => {
        // catch is always any-typed, nothing we can do here
        expectTypeOf(error).toBeAny()
      })
  })

  test('More complex usage of thunk args', () => {
    interface BookModel {
      id: string
      title: string
    }

    type BooksState = BookModel[]

    const fakeBooks: BookModel[] = [
      { id: 'b', title: 'Second' },
      { id: 'a', title: 'First' },
    ]

    const correctDispatch = (() => {}) as ThunkDispatch<
      BookModel[],
      { userAPI: Function },
      UnknownAction
    >

    // Verify that the the first type args to createAsyncThunk line up right
    const fetchBooksTAC = createAsyncThunk<
      BookModel[],
      number,
      {
        state: BooksState
        extra: { userAPI: Function }
      }
    >(
      'books/fetch',
      async (arg, { getState, dispatch, extra, requestId, signal }) => {
        const state = getState()

        expectTypeOf(arg).toBeNumber()

        expectTypeOf(state).toEqualTypeOf<BookModel[]>()

        expectTypeOf(extra).toEqualTypeOf<{ userAPI: Function }>()

        return fakeBooks
      },
    )

    correctDispatch(fetchBooksTAC(1))
    // @ts-expect-error
    defaultDispatch(fetchBooksTAC(1))
  })

  test('returning a rejected action from the promise creator is possible', async () => {
    type ReturnValue = { data: 'success' }
    type RejectValue = { data: 'error' }

    const fetchBooksTAC = createAsyncThunk<
      ReturnValue,
      number,
      {
        rejectValue: RejectValue
      }
    >('books/fetch', async (arg, { rejectWithValue }) => {
      return rejectWithValue({ data: 'error' })
    })

    const returned = await defaultDispatch(fetchBooksTAC(1))
    if (fetchBooksTAC.rejected.match(returned)) {
      expectTypeOf(returned.payload).toEqualTypeOf<undefined | RejectValue>()

      expectTypeOf(returned.payload).toBeNullable()
    } else {
      expectTypeOf(returned.payload).toEqualTypeOf<ReturnValue>()
    }

    expectTypeOf(unwrapResult(returned)).toEqualTypeOf<ReturnValue>()

    expectTypeOf(unwrapResult(returned)).not.toMatchTypeOf<RejectValue>()
  })

  test('regression #1156: union return values fall back to allowing only single member', () => {
    const fn = createAsyncThunk('session/isAdmin', async () => {
      const response: boolean = false
      return response
    })
  })

  test('Should handle reject with value within a try catch block. Note: this is a sample code taken from #1605', () => {
    type ResultType = {
      text: string
    }
    const demoPromise = async (): Promise<ResultType> =>
      new Promise((resolve, _) => resolve({ text: '' }))
    const thunk = createAsyncThunk('thunk', async (args, thunkAPI) => {
      try {
        const result = await demoPromise()
        return result
      } catch (error) {
        return thunkAPI.rejectWithValue(error)
      }
    })
    createReducer({}, (builder) =>
      builder.addCase(thunk.fulfilled, (s, action) => {
        expectTypeOf(action.payload).toEqualTypeOf<ResultType>()
      }),
    )
  })

  test('reject with value', () => {
    interface Item {
      name: string
    }

    interface ErrorFromServer {
      error: string
    }

    interface CallsResponse {
      data: Item[]
    }

    const fetchLiveCallsError = createAsyncThunk<
      Item[],
      string,
      {
        rejectValue: ErrorFromServer
      }
    >('calls/fetchLiveCalls', async (organizationId, { rejectWithValue }) => {
      try {
        const result = await apiRequest.get<CallsResponse>(
          `organizations/${organizationId}/calls/live/iwill404`,
        )
        return result.data.data
      } catch (err) {
        const error: AxiosError<ErrorFromServer> = err as any // cast for access to AxiosError properties
        if (!error.response) {
          // let it be handled as any other unknown error
          throw err
        }
        return rejectWithValue(error.response && error.response.data)
      }
    })

    defaultDispatch(fetchLiveCallsError('asd')).then((result) => {
      if (fetchLiveCallsError.fulfilled.match(result)) {
        //success
        expectTypeOf(result).toEqualTypeOf<
          ReturnType<(typeof fetchLiveCallsError)['fulfilled']>
        >()

        expectTypeOf(result.payload).toEqualTypeOf<Item[]>()
      } else {
        expectTypeOf(result).toEqualTypeOf<
          ReturnType<(typeof fetchLiveCallsError)['rejected']>
        >()

        if (result.payload) {
          // rejected with value
          expectTypeOf(result.payload).toEqualTypeOf<ErrorFromServer>()
        } else {
          // rejected by throw
          expectTypeOf(result.payload).toBeUndefined()

          expectTypeOf(result.error).toEqualTypeOf<SerializedError>()

          expectTypeOf(result.error).not.toBeAny()
        }
      }
      defaultDispatch(fetchLiveCallsError('asd'))
        .then((result) => {
          expectTypeOf(result.payload).toEqualTypeOf<
            Item[] | ErrorFromServer | undefined
          >()

          return result
        })
        .then(unwrapResult)
        .then((unwrapped) => {
          expectTypeOf(unwrapped).toEqualTypeOf<Item[]>()

          expectTypeOf(unwrapResult).parameter(0).not.toMatchTypeOf(unwrapped)
        })
    })
  })

  describe('payloadCreator first argument type has impact on asyncThunk argument', () => {
    test('asyncThunk has no argument', () => {
      const asyncThunk = createAsyncThunk('test', () => 0)

      expectTypeOf(asyncThunk).toMatchTypeOf<() => any>()

      expectTypeOf(asyncThunk).parameters.toEqualTypeOf<
        [undefined?, AsyncThunkDispatchConfig?]
      >()

      expectTypeOf(asyncThunk).returns.toBeFunction()
    })

    test('one argument, specified as undefined: asyncThunk has no argument', () => {
      const asyncThunk = createAsyncThunk('test', (arg: undefined) => 0)

      expectTypeOf(asyncThunk).toMatchTypeOf<() => any>()

      expectTypeOf(asyncThunk).parameters.toEqualTypeOf<
        [undefined?, AsyncThunkDispatchConfig?]
      >()
    })

    test('one argument, specified as void: asyncThunk has no argument', () => {
      const asyncThunk = createAsyncThunk('test', (arg: void) => 0)

      expectTypeOf(asyncThunk).toMatchTypeOf<() => any>()
    })

    test('one argument, specified as optional number: asyncThunk has optional number argument', () => {
      // this test will fail with strictNullChecks: false, that is to be expected
      // in that case, we have to forbid this behavior or it will make arguments optional everywhere
      const asyncThunk = createAsyncThunk('test', (arg?: number) => 0)

      // Per https://github.com/reduxjs/redux-toolkit/issues/3758#issuecomment-1742152774 , this is a bug in
      // TS 5.1 and 5.2, that is fixed in 5.3. Conditionally run the TS assertion here.
      type IsTS51Or52 = TSVersion.Major extends 5
        ? TSVersion.Minor extends 1 | 2
          ? true
          : false
        : false

      type expectedType = IsTS51Or52 extends true
        ? (arg: number) => any
        : (arg?: number) => any

      expectTypeOf(asyncThunk).toMatchTypeOf<expectedType>()

      // We _should_ be able to call this with no arguments, but we run into that error in 5.1 and 5.2.
      // Disabling this for now.
      // asyncThunk()
      expectTypeOf(asyncThunk).toBeCallableWith(5)

      expectTypeOf(asyncThunk).parameters.not.toMatchTypeOf<[string]>()
    })

    test('one argument, specified as number|undefined: asyncThunk has optional number argument', () => {
      // this test will fail with strictNullChecks: false, that is to be expected
      // in that case, we have to forbid this behavior or it will make arguments optional everywhere
      const asyncThunk = createAsyncThunk(
        'test',
        (arg: number | undefined) => 0,
      )

      expectTypeOf(asyncThunk).toMatchTypeOf<(arg?: number) => any>()

      expectTypeOf(asyncThunk).toBeCallableWith()

      expectTypeOf(asyncThunk).toBeCallableWith(undefined)

      expectTypeOf(asyncThunk).toBeCallableWith(5)

      expectTypeOf(asyncThunk).parameters.not.toMatchTypeOf<[string]>()
    })

    test('one argument, specified as number|void: asyncThunk has optional number argument', () => {
      const asyncThunk = createAsyncThunk('test', (arg: number | void) => 0)

      expectTypeOf(asyncThunk).toMatchTypeOf<(arg?: number) => any>()

      expectTypeOf(asyncThunk).toBeCallableWith()

      expectTypeOf(asyncThunk).toBeCallableWith(undefined)

      expectTypeOf(asyncThunk).toBeCallableWith(5)

      expectTypeOf(asyncThunk).parameters.not.toMatchTypeOf<[string]>()
    })

    test('one argument, specified as any: asyncThunk has required any argument', () => {
      const asyncThunk = createAsyncThunk('test', (arg: any) => 0)

      expectTypeOf(asyncThunk).parameter(0).toBeAny()

      expectTypeOf(asyncThunk).toBeCallableWith(5)

      expectTypeOf(asyncThunk).parameters.not.toMatchTypeOf<[]>()
    })

    test('one argument, specified as unknown: asyncThunk has required unknown argument', () => {
      const asyncThunk = createAsyncThunk('test', (arg: unknown) => 0)

      expectTypeOf(asyncThunk).parameter(0).toBeUnknown()

      expectTypeOf(asyncThunk).toBeCallableWith(5)

      expectTypeOf(asyncThunk).parameters.not.toMatchTypeOf<[]>()
    })

    test('one argument, specified as number: asyncThunk has required number argument', () => {
      const asyncThunk = createAsyncThunk('test', (arg: number) => 0)

      expectTypeOf(asyncThunk).toMatchTypeOf<(arg: number) => any>()

      expectTypeOf(asyncThunk).toBeCallableWith(5)

      expectTypeOf(asyncThunk).parameters.not.toMatchTypeOf<[]>()
    })

    test('two arguments, first specified as undefined: asyncThunk has no argument', () => {
      const asyncThunk = createAsyncThunk(
        'test',
        (arg: undefined, thunkApi) => 0,
      )

      expectTypeOf(asyncThunk).toMatchTypeOf<() => any>()

      expectTypeOf(asyncThunk).toBeCallableWith()

      expectTypeOf(asyncThunk).toBeCallableWith(undefined)

      // cannot be called with an argument
      expectTypeOf(asyncThunk).parameter(0).not.toBeAny()

      expectTypeOf(asyncThunk).parameters.toEqualTypeOf<
        [undefined?, AsyncThunkDispatchConfig?]
      >()
    })

    test('two arguments, first specified as void: asyncThunk has no argument', () => {
      const asyncThunk = createAsyncThunk('test', (arg: void, thunkApi) => 0)

      expectTypeOf(asyncThunk).toMatchTypeOf<() => any>()

      expectTypeOf(asyncThunk).toBeCallableWith()

      expectTypeOf(asyncThunk).parameter(0).toBeVoid()

      // cannot be called with an argument
      expectTypeOf(asyncThunk).parameter(0).not.toBeAny()

      expectTypeOf(asyncThunk).parameters.toEqualTypeOf<
        [undefined?, AsyncThunkDispatchConfig?]
      >()
    })

    test('two arguments, first specified as number|undefined: asyncThunk has optional number argument', () => {
      // this test will fail with strictNullChecks: false, that is to be expected
      // in that case, we have to forbid this behavior or it will make arguments optional everywhere
      const asyncThunk = createAsyncThunk(
        'test',
        (arg: number | undefined, thunkApi) => 0,
      )

      expectTypeOf(asyncThunk).toMatchTypeOf<(arg?: number) => any>()

      expectTypeOf(asyncThunk).toBeCallableWith()

      expectTypeOf(asyncThunk).toBeCallableWith(undefined)

      expectTypeOf(asyncThunk).toBeCallableWith(5)

      expectTypeOf(asyncThunk).parameter(0).not.toBeString()
    })

    test('two arguments, first specified as number|void: asyncThunk has optional number argument', () => {
      const asyncThunk = createAsyncThunk(
        'test',
        (arg: number | void, thunkApi) => 0,
      )

      expectTypeOf(asyncThunk).toMatchTypeOf<(arg?: number) => any>()

      expectTypeOf(asyncThunk).toBeCallableWith()

      expectTypeOf(asyncThunk).toBeCallableWith(undefined)

      expectTypeOf(asyncThunk).toBeCallableWith(5)

      expectTypeOf(asyncThunk).parameter(0).not.toBeString()
    })

    test('two arguments, first specified as any: asyncThunk has required any argument', () => {
      const asyncThunk = createAsyncThunk('test', (arg: any, thunkApi) => 0)

      expectTypeOf(asyncThunk).parameter(0).toBeAny()

      expectTypeOf(asyncThunk).toBeCallableWith(5)

      expectTypeOf(asyncThunk).parameters.not.toMatchTypeOf<[]>()
    })

    test('two arguments, first specified as unknown: asyncThunk has required unknown argument', () => {
      const asyncThunk = createAsyncThunk('test', (arg: unknown, thunkApi) => 0)

      expectTypeOf(asyncThunk).parameter(0).toBeUnknown()

      expectTypeOf(asyncThunk).toBeCallableWith(5)

      expectTypeOf(asyncThunk).parameters.not.toMatchTypeOf<[]>()
    })

    test('two arguments, first specified as number: asyncThunk has required number argument', () => {
      const asyncThunk = createAsyncThunk('test', (arg: number, thunkApi) => 0)

      expectTypeOf(asyncThunk).toMatchTypeOf<(arg: number) => any>()

      expectTypeOf(asyncThunk).parameter(0).toBeNumber()

      expectTypeOf(asyncThunk).toBeCallableWith(5)

      expectTypeOf(asyncThunk).parameters.not.toMatchTypeOf<[]>()
    })
  })

  test('createAsyncThunk without generics', () => {
    const thunk = createAsyncThunk('test', () => {
      return 'ret' as const
    })

    expectTypeOf(thunk).toEqualTypeOf<AsyncThunk<'ret', void, {}>>()
  })

  test('createAsyncThunk without generics, accessing `api` does not break return type', () => {
    const thunk = createAsyncThunk('test', (_: void, api) => {
      return 'ret' as const
    })

    expectTypeOf(thunk).toEqualTypeOf<AsyncThunk<'ret', void, {}>>()
  })

  test('createAsyncThunk rejectWithValue without generics: Expect correct return type', () => {
    const asyncThunk = createAsyncThunk(
      'test',
      (_: void, { rejectWithValue }) => {
        try {
          return Promise.resolve(true)
        } catch (e) {
          return rejectWithValue(e)
        }
      },
    )

    defaultDispatch(asyncThunk())
      .then((result) => {
        if (asyncThunk.fulfilled.match(result)) {
          expectTypeOf(result).toEqualTypeOf<
            ReturnType<(typeof asyncThunk)['fulfilled']>
          >()

          expectTypeOf(result.payload).toBeBoolean()

          expectTypeOf(result).not.toHaveProperty('error')
        } else {
          expectTypeOf(result).toEqualTypeOf<
            ReturnType<(typeof asyncThunk)['rejected']>
          >()

          expectTypeOf(result.error).toEqualTypeOf<SerializedError>()

          expectTypeOf(result.payload).toBeUnknown()
        }

        return result
      })
      .then(unwrapResult)
      .then((unwrapped) => {
        expectTypeOf(unwrapped).toBeBoolean()
      })
  })

  test('createAsyncThunk with generics', () => {
    type Funky = { somethingElse: 'Funky!' }
    function funkySerializeError(err: any): Funky {
      return { somethingElse: 'Funky!' }
    }

    // has to stay on one line or type tests fail in older TS versions
    // prettier-ignore
    // @ts-expect-error
    const shouldFail = createAsyncThunk('without generics', () => {}, { serializeError: funkySerializeError })

    const shouldWork = createAsyncThunk<
      any,
      void,
      { serializedErrorType: Funky }
    >('with generics', () => {}, {
      serializeError: funkySerializeError,
    })

    if (shouldWork.rejected.match(unknownAction)) {
      expectTypeOf(unknownAction.error).toEqualTypeOf<Funky>()
    }
  })

  test('`idGenerator` option takes no arguments, and returns a string', () => {
    const returnsNumWithArgs = (foo: any) => 100
    // has to stay on one line or type tests fail in older TS versions
    // prettier-ignore
    // @ts-expect-error
    const shouldFailNumWithArgs = createAsyncThunk('foo', () => {}, { idGenerator: returnsNumWithArgs })

    const returnsNumWithoutArgs = () => 100
    // prettier-ignore
    // @ts-expect-error
    const shouldFailNumWithoutArgs = createAsyncThunk('foo', () => {}, { idGenerator: returnsNumWithoutArgs })

    const returnsStrWithNumberArg = (foo: number) => 'foo'
    // prettier-ignore
    // @ts-expect-error
    const shouldFailWrongArgs = createAsyncThunk('foo', (arg: string) => {}, { idGenerator: returnsStrWithNumberArg })

    const returnsStrWithStringArg = (foo: string) => 'foo'
    const shoulducceedCorrectArgs = createAsyncThunk(
      'foo',
      (arg: string) => {},
      {
        idGenerator: returnsStrWithStringArg,
      },
    )

    const returnsStrWithoutArgs = () => 'foo'
    const shouldSucceed = createAsyncThunk('foo', () => {}, {
      idGenerator: returnsStrWithoutArgs,
    })
  })

  test('fulfillWithValue should infer return value', () => {
    // https://github.com/reduxjs/redux-toolkit/issues/2886

    const initialState = {
      loading: false,
      obj: { magic: '' },
    }

    const getObj = createAsyncThunk(
      'slice/getObj',
      async (_: any, { fulfillWithValue, rejectWithValue }) => {
        try {
          return fulfillWithValue({ magic: 'object' })
        } catch (rejected: any) {
          return rejectWithValue(rejected?.response?.error || rejected)
        }
      },
    )

    createSlice({
      name: 'slice',
      initialState,
      reducers: {},
      extraReducers: (builder) => {
        builder.addCase(getObj.fulfilled, (state, action) => {
          expectTypeOf(action.payload).toEqualTypeOf<{ magic: string }>()
        })
      },
    })
  })

  test('meta return values', () => {
    // return values
    createAsyncThunk<'ret', void, {}>('test', (_, api) => 'ret' as const)
    createAsyncThunk<'ret', void, {}>('test', async (_, api) => 'ret' as const)
    createAsyncThunk<'ret', void, { fulfilledMeta: string }>('test', (_, api) =>
      api.fulfillWithValue('ret' as const, ''),
    )
    createAsyncThunk<'ret', void, { fulfilledMeta: string }>(
      'test',
      async (_, api) => api.fulfillWithValue('ret' as const, ''),
    )
    createAsyncThunk<'ret', void, { fulfilledMeta: string }>(
      'test',
      // @ts-expect-error has to be a fulfilledWithValue call
      (_, api) => 'ret' as const,
    )
    createAsyncThunk<'ret', void, { fulfilledMeta: string }>(
      'test',
      // @ts-expect-error has to be a fulfilledWithValue call
      async (_, api) => 'ret' as const,
    )
    createAsyncThunk<'ret', void, { fulfilledMeta: string }>(
      'test', // @ts-expect-error should only allow returning with 'test'
      (_, api) => api.fulfillWithValue(5, ''),
    )
    createAsyncThunk<'ret', void, { fulfilledMeta: string }>(
      'test', // @ts-expect-error should only allow returning with 'test'
      async (_, api) => api.fulfillWithValue(5, ''),
    )

    // reject values
    createAsyncThunk<'ret', void, { rejectValue: string }>('test', (_, api) =>
      api.rejectWithValue('ret'),
    )
    createAsyncThunk<'ret', void, { rejectValue: string }>(
      'test',
      async (_, api) => api.rejectWithValue('ret'),
    )
    createAsyncThunk<
      'ret',
      void,
      { rejectValue: string; rejectedMeta: number }
    >('test', (_, api) => api.rejectWithValue('ret', 5))
    createAsyncThunk<
      'ret',
      void,
      { rejectValue: string; rejectedMeta: number }
    >('test', async (_, api) => api.rejectWithValue('ret', 5))
    createAsyncThunk<
      'ret',
      void,
      { rejectValue: string; rejectedMeta: number }
    >('test', (_, api) => api.rejectWithValue('ret', 5))
    createAsyncThunk<
      'ret',
      void,
      { rejectValue: string; rejectedMeta: number }
    >(
      'test',
      // @ts-expect-error wrong rejectedMeta type
      (_, api) => api.rejectWithValue('ret', ''),
    )
    createAsyncThunk<
      'ret',
      void,
      { rejectValue: string; rejectedMeta: number }
    >(
      'test',
      // @ts-expect-error wrong rejectedMeta type
      async (_, api) => api.rejectWithValue('ret', ''),
    )
    createAsyncThunk<
      'ret',
      void,
      { rejectValue: string; rejectedMeta: number }
    >(
      'test',
      // @ts-expect-error wrong rejectValue type
      (_, api) => api.rejectWithValue(5, ''),
    )
    createAsyncThunk<
      'ret',
      void,
      { rejectValue: string; rejectedMeta: number }
    >(
      'test',
      // @ts-expect-error wrong rejectValue type
      async (_, api) => api.rejectWithValue(5, ''),
    )
  })

  test('usage with config override generic', () => {
    const typedCAT = createAsyncThunk.withTypes<{
      state: RootState
      dispatch: AppDispatch
      rejectValue: string
      extra: { s: string; n: number }
    }>()

    // inferred usage
    const thunk = typedCAT('foo', (arg: number, api) => {
      // correct getState Type
      const test1: number = api.getState().foo.value
      // correct dispatch type
      const test2: number = api.dispatch((dispatch, getState) => {
        expectTypeOf(dispatch).toEqualTypeOf<
          ThunkDispatch<{ foo: { value: number } }, undefined, UnknownAction>
        >()

        expectTypeOf(getState).toEqualTypeOf<() => { foo: { value: number } }>()

        return getState().foo.value
      })

      // correct extra type
      const { s, n } = api.extra

      expectTypeOf(s).toBeString()

      expectTypeOf(n).toBeNumber()

      if (1 < 2)
        // @ts-expect-error
        return api.rejectWithValue(5)
      if (1 < 2) return api.rejectWithValue('test')
      return test1 + test2
    })

    // usage with two generics
    const thunk2 = typedCAT<number, string>('foo', (arg, api) => {
      expectTypeOf(arg).toBeString()

      // correct getState Type
      const test1: number = api.getState().foo.value
      // correct dispatch type
      const test2: number = api.dispatch((dispatch, getState) => {
        expectTypeOf(dispatch).toEqualTypeOf<
          ThunkDispatch<{ foo: { value: number } }, undefined, UnknownAction>
        >()

        expectTypeOf(getState).toEqualTypeOf<() => { foo: { value: number } }>()

        return getState().foo.value
      })
      // correct extra type
      const { s, n } = api.extra

      expectTypeOf(s).toBeString()

      expectTypeOf(n).toBeNumber()

      if (1 < 2) expectTypeOf(api.rejectWithValue).toBeCallableWith('test')

      expectTypeOf(api.rejectWithValue).parameter(0).not.toBeNumber()

      expectTypeOf(api.rejectWithValue).parameters.toEqualTypeOf<[string]>()

      return api.rejectWithValue('test')
    })

    // usage with config override generic
    const thunk3 = typedCAT<number, string, { rejectValue: number }>(
      'foo',
      (arg, api) => {
        expectTypeOf(arg).toBeString()

        // correct getState Type
        const test1: number = api.getState().foo.value
        // correct dispatch type
        const test2: number = api.dispatch((dispatch, getState) => {
          expectTypeOf(dispatch).toEqualTypeOf<
            ThunkDispatch<{ foo: { value: number } }, undefined, UnknownAction>
          >()

          expectTypeOf(getState).toEqualTypeOf<
            () => { foo: { value: number } }
          >()

          return getState().foo.value
        })
        // correct extra type
        const { s, n } = api.extra

        expectTypeOf(s).toBeString()

        expectTypeOf(n).toBeNumber()

        if (1 < 2) return api.rejectWithValue(5)
        if (1 < 2) expectTypeOf(api.rejectWithValue).toBeCallableWith(5)

        expectTypeOf(api.rejectWithValue).parameter(0).not.toBeString()

        expectTypeOf(api.rejectWithValue).parameters.toEqualTypeOf<[number]>()

        return api.rejectWithValue(5)
      },
    )

    const slice = createSlice({
      name: 'foo',
      initialState: { value: 0 },
      reducers: {},
      extraReducers(builder) {
        builder
          .addCase(thunk.fulfilled, (state, action) => {
            state.value += action.payload
          })
          .addCase(thunk.rejected, (state, action) => {
            expectTypeOf(action.payload).toEqualTypeOf<string | undefined>()
          })
          .addCase(thunk2.fulfilled, (state, action) => {
            state.value += action.payload
          })
          .addCase(thunk2.rejected, (state, action) => {
            expectTypeOf(action.payload).toEqualTypeOf<string | undefined>()
          })
          .addCase(thunk3.fulfilled, (state, action) => {
            state.value += action.payload
          })
          .addCase(thunk3.rejected, (state, action) => {
            expectTypeOf(action.payload).toEqualTypeOf<number | undefined>()
          })
      },
    })

    const store = configureStore({
      reducer: {
        foo: slice.reducer,
      },
    })

    type RootState = ReturnType<typeof store.getState>
    type AppDispatch = typeof store.dispatch
  })

  test('rejectedMeta', async () => {
    const getNewStore = () =>
      configureStore({
        reducer(actions = [], action) {
          return [...actions, action]
        },
      })

    const store = getNewStore()

    const fulfilledThunk = createAsyncThunk<
      string,
      string,
      { rejectedMeta: { extraProp: string } }
    >('test', (arg: string, { rejectWithValue }) => {
      return rejectWithValue('damn!', { extraProp: 'baz' })
    })

    const promise = store.dispatch(fulfilledThunk('testArg'))

    const ret = await promise

    if (ret.meta.requestStatus === 'rejected' && ret.meta.rejectedWithValue) {
      expectTypeOf(ret.meta.extraProp).toBeString()
    } else {
      // could be caused by a `throw`, `abort()` or `condition` - no `rejectedMeta` in that case
      expectTypeOf(ret.meta).not.toHaveProperty('extraProp')
    }
  })
})

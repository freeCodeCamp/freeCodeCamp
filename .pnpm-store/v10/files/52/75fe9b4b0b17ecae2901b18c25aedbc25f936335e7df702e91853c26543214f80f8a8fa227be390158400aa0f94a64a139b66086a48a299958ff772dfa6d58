import type { ThunkDispatch, UnknownAction } from '@reduxjs/toolkit'
import type { BaseQueryFn, BaseQueryApi } from '@reduxjs/toolkit/query/react'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {
  act,
  fireEvent,
  render,
  renderHook,
  screen,
  waitFor,
} from '@testing-library/react'
import type { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import axios from 'axios'
import { HttpResponse, http } from 'msw'
import * as React from 'react'
import { useDispatch } from 'react-redux'
import { hookWaitFor, setupApiStore } from '@internal/tests/utils/helpers'
import { server } from '@internal/query/tests/mocks/server'

const baseQuery = fetchBaseQuery({ baseUrl: 'https://example.com' })

const api = createApi({
  baseQuery,
  endpoints(build) {
    return {
      query: build.query({ query: () => '/query' }),
      mutation: build.mutation({
        query: () => ({ url: '/mutation', method: 'POST' }),
      }),
    }
  },
})

const storeRef = setupApiStore(api)

const failQueryOnce = http.get(
  '/query',
  () => HttpResponse.json({ value: 'failed' }, { status: 500 }),
  { once: true },
)

describe('fetchBaseQuery', () => {
  let commonBaseQueryApiArgs: BaseQueryApi = {} as any
  beforeEach(() => {
    const abortController = new AbortController()
    commonBaseQueryApiArgs = {
      signal: abortController.signal,
      abort: (reason) =>
        //@ts-ignore
        abortController.abort(reason),
      dispatch: storeRef.store.dispatch,
      getState: storeRef.store.getState,
      extra: undefined,
      type: 'query',
      endpoint: 'doesntmatterhere',
    }
  })
  test('success', async () => {
    await expect(
      baseQuery('/success', commonBaseQueryApiArgs, {}),
    ).resolves.toEqual({
      data: { value: 'success' },
      meta: {
        request: expect.any(Object),
        response: expect.any(Object),
      },
    })
  })
  test('error', async () => {
    server.use(failQueryOnce)
    await expect(
      baseQuery('/error', commonBaseQueryApiArgs, {}),
    ).resolves.toEqual({
      error: {
        data: { value: 'error' },
        status: 500,
      },
      meta: {
        request: expect.any(Object),
        response: expect.any(Object),
      },
    })
  })
})

describe('query error handling', () => {
  test('success', async () => {
    server.use(
      http.get('https://example.com/query', () =>
        HttpResponse.json({ value: 'success' }),
      ),
    )
    const { result } = renderHook(() => api.endpoints.query.useQuery({}), {
      wrapper: storeRef.wrapper,
    })

    await hookWaitFor(() => expect(result.current.isFetching).toBeFalsy())
    expect(result.current).toEqual(
      expect.objectContaining({
        isLoading: false,
        isError: false,
        isSuccess: true,
        data: { value: 'success' },
      }),
    )
  })

  test('error', async () => {
    server.use(
      http.get('https://example.com/query', () =>
        HttpResponse.json({ value: 'error' }, { status: 500 }),
      ),
    )
    const { result } = renderHook(() => api.endpoints.query.useQuery({}), {
      wrapper: storeRef.wrapper,
    })

    await hookWaitFor(() => expect(result.current.isFetching).toBeFalsy())
    expect(result.current).toEqual(
      expect.objectContaining({
        isLoading: false,
        isError: true,
        isSuccess: false,
        error: {
          status: 500,
          data: { value: 'error' },
        },
      }),
    )
  })

  test('success -> error', async () => {
    server.use(
      http.get('https://example.com/query', () =>
        HttpResponse.json({ value: 'success' }),
      ),
    )
    const { result } = renderHook(() => api.endpoints.query.useQuery({}), {
      wrapper: storeRef.wrapper,
    })

    await hookWaitFor(() => expect(result.current.isFetching).toBeFalsy())
    expect(result.current).toEqual(
      expect.objectContaining({
        isLoading: false,
        isError: false,
        isSuccess: true,
        data: { value: 'success' },
      }),
    )

    server.use(
      http.get(
        'https://example.com/query',
        () => HttpResponse.json({ value: 'error' }, { status: 500 }),
        { once: true },
      ),
    )

    act(() => void result.current.refetch())

    await hookWaitFor(() => expect(result.current.isFetching).toBeFalsy())
    expect(result.current).toEqual(
      expect.objectContaining({
        isLoading: false,
        isError: true,
        isSuccess: false,
        error: {
          status: 500,
          data: { value: 'error' },
        },
        // last data will stay available
        data: { value: 'success' },
      }),
    )
  })

  test('error -> success', async () => {
    server.use(
      http.get('https://example.com/query', () =>
        HttpResponse.json({ value: 'success' }),
      ),
    )
    server.use(
      http.get(
        'https://example.com/query',
        () => HttpResponse.json({ value: 'error' }, { status: 500 }),
        { once: true },
      ),
    )
    const { result } = renderHook(() => api.endpoints.query.useQuery({}), {
      wrapper: storeRef.wrapper,
    })

    await hookWaitFor(() => expect(result.current.isFetching).toBeFalsy())
    expect(result.current).toEqual(
      expect.objectContaining({
        isLoading: false,
        isError: true,
        isSuccess: false,
        error: {
          status: 500,
          data: { value: 'error' },
        },
      }),
    )

    act(() => void result.current.refetch())

    await hookWaitFor(() => expect(result.current.isFetching).toBeFalsy())
    expect(result.current).toEqual(
      expect.objectContaining({
        isLoading: false,
        isError: false,
        isSuccess: true,
        data: { value: 'success' },
      }),
    )
  })
})

describe('mutation error handling', () => {
  test('success', async () => {
    server.use(
      http.post('https://example.com/mutation', () =>
        HttpResponse.json({ value: 'success' }),
      ),
    )
    const { result } = renderHook(() => api.endpoints.mutation.useMutation(), {
      wrapper: storeRef.wrapper,
    })

    const [trigger] = result.current

    act(() => void trigger({}))

    await hookWaitFor(() => expect(result.current[1].isLoading).toBeFalsy())
    expect(result.current[1]).toEqual(
      expect.objectContaining({
        isLoading: false,
        isError: false,
        isSuccess: true,
        data: { value: 'success' },
      }),
    )
  })

  test('error', async () => {
    server.use(
      http.post('https://example.com/mutation', () =>
        HttpResponse.json({ value: 'error' }, { status: 500 }),
      ),
    )
    const { result } = renderHook(() => api.endpoints.mutation.useMutation(), {
      wrapper: storeRef.wrapper,
    })

    const [trigger] = result.current

    act(() => void trigger({}))

    await hookWaitFor(() => expect(result.current[1].isLoading).toBeFalsy())
    expect(result.current[1]).toEqual(
      expect.objectContaining({
        isLoading: false,
        isError: true,
        isSuccess: false,
        error: {
          status: 500,
          data: { value: 'error' },
        },
      }),
    )
  })

  test('success -> error', async () => {
    server.use(
      http.post('https://example.com/mutation', () =>
        HttpResponse.json({ value: 'success' }),
      ),
    )
    const { result } = renderHook(() => api.endpoints.mutation.useMutation(), {
      wrapper: storeRef.wrapper,
    })

    {
      const [trigger] = result.current

      act(() => void trigger({}))

      await hookWaitFor(() => expect(result.current[1].isLoading).toBeFalsy())
      expect(result.current[1]).toEqual(
        expect.objectContaining({
          isLoading: false,
          isError: false,
          isSuccess: true,
          data: { value: 'success' },
        }),
      )
    }

    server.use(
      http.post(
        'https://example.com/mutation',
        () => HttpResponse.json({ value: 'error' }, { status: 500 }),
        { once: true },
      ),
    )

    {
      const [trigger] = result.current

      act(() => void trigger({}))

      await hookWaitFor(() => expect(result.current[1].isLoading).toBeFalsy())
      expect(result.current[1]).toEqual(
        expect.objectContaining({
          isLoading: false,
          isError: true,
          isSuccess: false,
          error: {
            status: 500,
            data: { value: 'error' },
          },
        }),
      )
      expect(result.current[1].data).toBeUndefined()
    }
  })

  test('error -> success', async () => {
    server.use(
      http.post('https://example.com/mutation', () =>
        HttpResponse.json({ value: 'success' }),
      ),
    )
    server.use(
      http.post(
        'https://example.com/mutation',
        () => HttpResponse.json({ value: 'error' }, { status: 500 }),
        { once: true },
      ),
    )

    const { result } = renderHook(() => api.endpoints.mutation.useMutation(), {
      wrapper: storeRef.wrapper,
    })

    {
      const [trigger] = result.current

      act(() => void trigger({}))

      await hookWaitFor(() => expect(result.current[1].isLoading).toBeFalsy())
      expect(result.current[1]).toEqual(
        expect.objectContaining({
          isLoading: false,
          isError: true,
          isSuccess: false,
          error: {
            status: 500,
            data: { value: 'error' },
          },
        }),
      )
    }

    {
      const [trigger] = result.current

      act(() => void trigger({}))

      await hookWaitFor(() => expect(result.current[1].isLoading).toBeFalsy())
      expect(result.current[1]).toEqual(
        expect.objectContaining({
          isLoading: false,
          isError: false,
          isSuccess: true,
        }),
      )
      expect(result.current[1].error).toBeUndefined()
    }
  })
})

describe('custom axios baseQuery', () => {
  const axiosBaseQuery =
    (
      { baseUrl }: { baseUrl: string } = { baseUrl: '' },
    ): BaseQueryFn<
      {
        url: string
        method?: AxiosRequestConfig['method']
        data?: AxiosRequestConfig['data']
      },
      unknown,
      unknown,
      unknown,
      { response: AxiosResponse; request: AxiosRequestConfig }
    > =>
    async ({ url, method, data }) => {
      const config = { url: baseUrl + url, method, data }
      try {
        const result = await axios(config)
        return {
          data: result.data,
          meta: { request: config, response: result },
        }
      } catch (axiosError) {
        const err = axiosError as AxiosError
        return {
          error: {
            status: err.response?.status,
            data: err.response?.data,
          },
          meta: { request: config, response: err.response as AxiosResponse },
        }
      }
    }

  type SuccessResponse = { value: 'success' }
  const api = createApi({
    baseQuery: axiosBaseQuery({
      baseUrl: 'https://example.com',
    }),
    endpoints(build) {
      return {
        query: build.query<SuccessResponse, void>({
          query: () => ({ url: '/success', method: 'get' }),
          transformResponse: (result: SuccessResponse, meta) => {
            return { ...result, metaResponseData: meta?.response.data }
          },
        }),
        mutation: build.mutation<SuccessResponse, any>({
          query: () => ({ url: '/success', method: 'post' }),
        }),
      }
    },
  })

  const storeRef = setupApiStore(api)

  test('axiosBaseQuery transformResponse uses its custom meta format', async () => {
    const result = await storeRef.store.dispatch(api.endpoints.query.initiate())

    expect(result.data).toEqual({
      value: 'success',
      metaResponseData: { value: 'success' },
    })
  })

  test('axios errors behave as expected', async () => {
    server.use(
      http.get('https://example.com/success', () =>
        HttpResponse.json({ value: 'error' }, { status: 500 }),
      ),
    )
    const { result } = renderHook(() => api.endpoints.query.useQuery(), {
      wrapper: storeRef.wrapper,
    })

    await hookWaitFor(() => expect(result.current.isFetching).toBeFalsy())
    expect(result.current).toEqual(
      expect.objectContaining({
        isLoading: false,
        isError: true,
        isSuccess: false,
        error: { status: 500, data: { value: 'error' } },
      }),
    )
  })
})

describe('error handling in a component', () => {
  const mockErrorResponse = { value: 'error', very: 'mean' }
  const mockSuccessResponse = { value: 'success' }

  const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'https://example.com' }),
    endpoints: (build) => ({
      update: build.mutation<typeof mockSuccessResponse, any>({
        query: () => ({ url: 'success' }),
      }),
      failedUpdate: build.mutation<typeof mockSuccessResponse, any>({
        query: () => ({ url: 'error' }),
      }),
    }),
  })
  const storeRef = setupApiStore(api)

  test('a mutation is unwrappable and has the correct types', async () => {
    server.use(
      http.get(
        'https://example.com/success',
        () => HttpResponse.json(mockErrorResponse, { status: 500 }),
        { once: true },
      ),
    )

    function User() {
      const [manualError, setManualError] = React.useState<any>()
      const [update, { isLoading, data, error }] =
        api.endpoints.update.useMutation()

      return (
        <div>
          <div data-testid="isLoading">{String(isLoading)}</div>
          <div data-testid="data">{JSON.stringify(data)}</div>
          <div data-testid="error">{JSON.stringify(error)}</div>
          <div data-testid="manuallySetError">
            {JSON.stringify(manualError)}
          </div>
          <button
            onClick={() => {
              update({ name: 'hello' })
                .unwrap()
                .then((result) => {
                  setManualError(undefined)
                })
                .catch((error) => act(() => setManualError(error)))
            }}
          >
            Update User
          </button>
        </div>
      )
    }

    render(<User />, { wrapper: storeRef.wrapper })

    await waitFor(() =>
      expect(screen.getByTestId('isLoading').textContent).toBe('false'),
    )
    fireEvent.click(screen.getByText('Update User'))
    expect(screen.getByTestId('isLoading').textContent).toBe('true')
    await waitFor(() =>
      expect(screen.getByTestId('isLoading').textContent).toBe('false'),
    )

    // Make sure the hook and the unwrapped action return the same things in an error state
    await waitFor(() =>
      expect(screen.getByTestId('error').textContent).toEqual(
        screen.getByTestId('manuallySetError').textContent,
      ),
    )

    fireEvent.click(screen.getByText('Update User'))
    expect(screen.getByTestId('isLoading').textContent).toBe('true')
    await waitFor(() =>
      expect(screen.getByTestId('isLoading').textContent).toBe('false'),
    )
    await waitFor(() =>
      expect(screen.getByTestId('error').textContent).toBeFalsy(),
    )
    await waitFor(() =>
      expect(screen.getByTestId('manuallySetError').textContent).toBeFalsy(),
    )
    await waitFor(() =>
      expect(screen.getByTestId('data').textContent).toEqual(
        JSON.stringify(mockSuccessResponse),
      ),
    )
  })

  for (const track of [true, false]) {
    test(`an un-subscribed mutation will still return something useful (success case, track: ${track})`, async () => {
      const hook = renderHook(useDispatch, { wrapper: storeRef.wrapper })

      const dispatch = hook.result.current as ThunkDispatch<
        any,
        any,
        UnknownAction
      >
      let mutationqueryFulfilled: ReturnType<
        ReturnType<typeof api.endpoints.update.initiate>
      >
      act(() => {
        mutationqueryFulfilled = dispatch(
          api.endpoints.update.initiate({}, { track }),
        )
      })
      const result = await mutationqueryFulfilled!
      expect(result).toMatchObject({
        data: { value: 'success' },
      })
    })

    test(`an un-subscribed mutation will still return something useful (error case, track: ${track})`, async () => {
      const hook = renderHook(useDispatch, { wrapper: storeRef.wrapper })

      const dispatch = hook.result.current as ThunkDispatch<
        any,
        any,
        UnknownAction
      >
      let mutationqueryFulfilled: ReturnType<
        ReturnType<typeof api.endpoints.failedUpdate.initiate>
      >
      act(() => {
        mutationqueryFulfilled = dispatch(
          api.endpoints.failedUpdate.initiate({}, { track }),
        )
      })
      const result = await mutationqueryFulfilled!
      expect(result).toMatchObject({
        error: {
          status: 500,
          data: { value: 'error' },
        },
      })
    })
    test(`an un-subscribed mutation will still be unwrappable (success case), track: ${track}`, async () => {
      const hook = renderHook(useDispatch, { wrapper: storeRef.wrapper })

      const dispatch = hook.result.current as ThunkDispatch<
        any,
        any,
        UnknownAction
      >
      let mutationqueryFulfilled: ReturnType<
        ReturnType<typeof api.endpoints.update.initiate>
      >
      act(() => {
        mutationqueryFulfilled = dispatch(
          api.endpoints.update.initiate({}, { track }),
        )
      })
      const result = await mutationqueryFulfilled!.unwrap()
      expect(result).toMatchObject({
        value: 'success',
      })
    })

    test(`an un-subscribed mutation will still be unwrappable (error case, track: ${track})`, async () => {
      const hook = renderHook(useDispatch, { wrapper: storeRef.wrapper })

      const dispatch = hook.result.current as ThunkDispatch<
        any,
        any,
        UnknownAction
      >
      let mutationqueryFulfilled: ReturnType<
        ReturnType<typeof api.endpoints.failedUpdate.initiate>
      >
      act(() => {
        mutationqueryFulfilled = dispatch(
          api.endpoints.failedUpdate.initiate({}, { track }),
        )
      })
      const unwrappedPromise = mutationqueryFulfilled!.unwrap()
      await expect(unwrappedPromise).rejects.toMatchObject({
        status: 500,
        data: { value: 'error' },
      })
    })
  }
})

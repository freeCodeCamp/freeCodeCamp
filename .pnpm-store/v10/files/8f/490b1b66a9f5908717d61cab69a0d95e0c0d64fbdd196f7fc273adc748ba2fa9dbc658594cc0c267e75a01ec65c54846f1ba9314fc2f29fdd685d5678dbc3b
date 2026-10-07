import {
  actionsReducer,
  hookWaitFor,
  setupApiStore,
} from '@internal/tests/utils/helpers'
import { createSlice } from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { act, renderHook } from '@testing-library/react'

interface ResultType {
  result: 'complex'
}

interface ArgType {
  foo: 'bar'
  count: 3
}

const baseQuery = fetchBaseQuery({ baseUrl: 'https://example.com' })
const api = createApi({
  baseQuery,
  endpoints(build) {
    return {
      querySuccess: build.query<ResultType, ArgType>({
        query: () => '/success',
      }),
      querySuccess2: build.query({ query: () => '/success' }),
      queryFail: build.query({ query: () => '/error' }),
      mutationSuccess: build.mutation({
        query: () => ({ url: '/success', method: 'POST' }),
      }),
      mutationSuccess2: build.mutation({
        query: () => ({ url: '/success', method: 'POST' }),
      }),
      mutationFail: build.mutation({
        query: () => ({ url: '/error', method: 'POST' }),
      }),
    }
  },
})

const storeRef = setupApiStore(api, {
  ...actionsReducer,
})

const {
  mutationFail,
  mutationSuccess,
  mutationSuccess2,
  queryFail,
  querySuccess,
  querySuccess2,
} = api.endpoints

test('matches query pending & fulfilled actions for the given endpoint', async () => {
  const endpoint = querySuccess2
  const otherEndpoint = queryFail
  const { result } = renderHook(() => endpoint.useQuery({} as any), {
    wrapper: storeRef.wrapper,
  })
  await hookWaitFor(() => expect(result.current.isLoading).toBeFalsy())

  expect(storeRef.store.getState().actions).toMatchSequence(
    api.internalActions.middlewareRegistered.match,
    endpoint.matchPending,
    endpoint.matchFulfilled,
  )
  expect(storeRef.store.getState().actions).not.toMatchSequence(
    api.internalActions.middlewareRegistered.match,
    otherEndpoint.matchPending,
    otherEndpoint.matchFulfilled,
  )
  expect(storeRef.store.getState().actions).not.toMatchSequence(
    api.internalActions.middlewareRegistered.match,
    endpoint.matchFulfilled,
    api.endpoints.mutationSuccess.matchFulfilled,
    endpoint.matchRejected,
  )
  expect(storeRef.store.getState().actions).not.toMatchSequence(
    api.internalActions.middlewareRegistered.match,
    endpoint.matchPending,
    endpoint.matchRejected,
  )
})
test('matches query pending & rejected actions for the given endpoint', async () => {
  const endpoint = queryFail
  const { result } = renderHook(() => endpoint.useQuery({}), {
    wrapper: storeRef.wrapper,
  })
  await hookWaitFor(() => expect(result.current.isLoading).toBeFalsy())
  expect(storeRef.store.getState().actions).toMatchSequence(
    api.internalActions.middlewareRegistered.match,
    endpoint.matchPending,
    endpoint.matchRejected,
  )
  expect(storeRef.store.getState().actions).not.toMatchSequence(
    api.internalActions.middlewareRegistered.match,
    endpoint.matchFulfilled,
    endpoint.matchRejected,
  )
  expect(storeRef.store.getState().actions).not.toMatchSequence(
    api.internalActions.middlewareRegistered.match,
    endpoint.matchPending,
    endpoint.matchFulfilled,
  )
})

test('matches lazy query pending & fulfilled actions for given endpoint', async () => {
  const endpoint = querySuccess
  const { result } = renderHook(() => endpoint.useLazyQuery(), {
    wrapper: storeRef.wrapper,
  })
  act(() => void result.current[0]({} as any))
  await hookWaitFor(() => expect(result.current[1].isLoading).toBeFalsy())

  expect(storeRef.store.getState().actions).toMatchSequence(
    api.internalActions.middlewareRegistered.match,
    endpoint.matchPending,
    endpoint.matchFulfilled,
  )
  expect(storeRef.store.getState().actions).not.toMatchSequence(
    api.internalActions.middlewareRegistered.match,
    endpoint.matchFulfilled,
    endpoint.matchRejected,
  )

  expect(storeRef.store.getState().actions).not.toMatchSequence(
    api.internalActions.middlewareRegistered.match,
    endpoint.matchPending,
    endpoint.matchRejected,
  )
})

test('matches lazy query pending & rejected actions for given endpoint', async () => {
  const endpoint = queryFail
  const { result } = renderHook(() => endpoint.useLazyQuery(), {
    wrapper: storeRef.wrapper,
  })
  act(() => void result.current[0]({}))
  await hookWaitFor(() => expect(result.current[1].isLoading).toBeFalsy())

  expect(storeRef.store.getState().actions).toMatchSequence(
    api.internalActions.middlewareRegistered.match,
    endpoint.matchPending,
    endpoint.matchRejected,
  )
  expect(storeRef.store.getState().actions).not.toMatchSequence(
    api.internalActions.middlewareRegistered.match,
    endpoint.matchFulfilled,
    endpoint.matchRejected,
  )
  expect(storeRef.store.getState().actions).not.toMatchSequence(
    api.internalActions.middlewareRegistered.match,
    endpoint.matchPending,
    endpoint.matchFulfilled,
  )
})

test('matches mutation pending & fulfilled actions for the given endpoint', async () => {
  const endpoint = mutationSuccess
  const otherEndpoint = mutationSuccess2
  const { result } = renderHook(() => endpoint.useMutation(), {
    wrapper: storeRef.wrapper,
  })
  act(() => void result.current[0]({}))
  await hookWaitFor(() => expect(result.current[1].isLoading).toBeFalsy())

  expect(storeRef.store.getState().actions).toMatchSequence(
    api.internalActions.middlewareRegistered.match,
    endpoint.matchPending,
    endpoint.matchFulfilled,
  )
  expect(storeRef.store.getState().actions).not.toMatchSequence(
    api.internalActions.middlewareRegistered.match,
    otherEndpoint.matchPending,
    otherEndpoint.matchFulfilled,
  )
  expect(storeRef.store.getState().actions).not.toMatchSequence(
    api.internalActions.middlewareRegistered.match,
    endpoint.matchFulfilled,
    endpoint.matchRejected,
  )
  expect(storeRef.store.getState().actions).not.toMatchSequence(
    api.internalActions.middlewareRegistered.match,
    endpoint.matchPending,
    endpoint.matchRejected,
  )
})
test('matches mutation pending & rejected actions for the given endpoint', async () => {
  const endpoint = mutationFail
  const { result } = renderHook(() => endpoint.useMutation(), {
    wrapper: storeRef.wrapper,
  })
  act(() => void result.current[0]({}))
  await hookWaitFor(() => expect(result.current[1].isLoading).toBeFalsy())

  expect(storeRef.store.getState().actions).toMatchSequence(
    api.internalActions.middlewareRegistered.match,
    endpoint.matchPending,
    endpoint.matchRejected,
  )
  expect(storeRef.store.getState().actions).not.toMatchSequence(
    api.internalActions.middlewareRegistered.match,
    endpoint.matchFulfilled,
    endpoint.matchRejected,
  )
  expect(storeRef.store.getState().actions).not.toMatchSequence(
    api.internalActions.middlewareRegistered.match,
    endpoint.matchPending,
    endpoint.matchFulfilled,
  )
})

test('inferred types', () => {
  createSlice({
    name: 'auth',
    initialState: {},
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addMatcher(
          api.endpoints.querySuccess.matchPending,
          (state, action) => {
            // @ts-expect-error
            console.log(action.error)
          },
        )
        .addMatcher(
          api.endpoints.querySuccess.matchFulfilled,
          (state, action) => {
            // @ts-expect-error
            console.log(action.error)
          },
        )
        .addMatcher(
          api.endpoints.querySuccess.matchRejected,
          (state, action) => {},
        )
    },
  })
})

import { createApi, QueryStatus } from '@reduxjs/toolkit/query'
import { delay } from 'msw'
import { actionsReducer, setupApiStore } from '../../tests/utils/helpers'

// We need to be able to control when which query resolves to simulate race
// conditions properly, that's the purpose of this factory.
const createPromiseFactory = () => {
  const resolveQueue: (() => void)[] = []
  const createPromise = () =>
    new Promise<void>((resolve) => {
      resolveQueue.push(resolve)
    })
  const resolveOldest = () => {
    resolveQueue.shift()?.()
  }
  return { createPromise, resolveOldest }
}

const getEatenBananaPromises = createPromiseFactory()
const eatBananaPromises = createPromiseFactory()

let eatenBananas = 0
const api = createApi({
  invalidationBehavior: 'delayed',
  baseQuery: () => undefined as any,
  tagTypes: ['Banana'],
  endpoints: (build) => ({
    // Eat a banana.
    eatBanana: build.mutation<unknown, void>({
      queryFn: async () => {
        await eatBananaPromises.createPromise()
        eatenBananas += 1
        return { data: null, meta: {} }
      },
      invalidatesTags: ['Banana'],
    }),

    // Get the number of eaten bananas.
    getEatenBananas: build.query<number, void>({
      queryFn: async (arg, arg1, arg2, arg3) => {
        const result = eatenBananas
        await getEatenBananaPromises.createPromise()
        return { data: result }
      },
      providesTags: ['Banana'],
    }),
  }),
})
const { getEatenBananas, eatBanana } = api.endpoints

const storeRef = setupApiStore(api, {
  ...actionsReducer,
})

it('invalidates a query after a corresponding mutation', async () => {
  eatenBananas = 0

  const query = storeRef.store.dispatch(getEatenBananas.initiate())
  const getQueryState = () =>
    storeRef.store.getState().api.queries[query.queryCacheKey]
  getEatenBananaPromises.resolveOldest()
  await delay(2)

  expect(getQueryState()?.data).toBe(0)
  expect(getQueryState()?.status).toBe(QueryStatus.fulfilled)

  const mutation = storeRef.store.dispatch(eatBanana.initiate())
  const getMutationState = () =>
    storeRef.store.getState().api.mutations[mutation.requestId]
  eatBananaPromises.resolveOldest()
  await delay(2)

  expect(getMutationState()?.status).toBe(QueryStatus.fulfilled)
  expect(getQueryState()?.data).toBe(0)
  expect(getQueryState()?.status).toBe(QueryStatus.pending)

  getEatenBananaPromises.resolveOldest()
  await delay(2)

  expect(getQueryState()?.data).toBe(1)
  expect(getQueryState()?.status).toBe(QueryStatus.fulfilled)
})

it('invalidates a query whose corresponding mutation finished while the query was in flight', async () => {
  eatenBananas = 0

  const query = storeRef.store.dispatch(getEatenBananas.initiate())
  const getQueryState = () =>
    storeRef.store.getState().api.queries[query.queryCacheKey]

  const mutation = storeRef.store.dispatch(eatBanana.initiate())
  const getMutationState = () =>
    storeRef.store.getState().api.mutations[mutation.requestId]
  eatBananaPromises.resolveOldest()
  await delay(2)
  expect(getMutationState()?.status).toBe(QueryStatus.fulfilled)

  getEatenBananaPromises.resolveOldest()
  await delay(2)
  expect(getQueryState()?.data).toBe(0)
  expect(getQueryState()?.status).toBe(QueryStatus.pending)

  // should already be refetching
  getEatenBananaPromises.resolveOldest()
  await delay(2)

  expect(getQueryState()?.status).toBe(QueryStatus.fulfilled)
  expect(getQueryState()?.data).toBe(1)
})

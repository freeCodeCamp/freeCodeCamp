import { noop } from '@internal/listenerMiddleware/utils'
import type { SubscriptionOptions } from '@internal/query/core/apiState'
import type { SubscriptionSelectors } from '@internal/query/core/buildMiddleware/types'
import { server } from '@internal/query/tests/mocks/server'
import { countObjectKeys } from '@internal/query/utils/countObjectKeys'
import {
  actionsReducer,
  setupApiStore,
  useRenderCounter,
  waitForFakeTimer,
  waitMs,
  withProvider,
} from '@internal/tests/utils/helpers'
import type { UnknownAction } from '@reduxjs/toolkit'
import {
  configureStore,
  createListenerMiddleware,
  createSlice,
} from '@reduxjs/toolkit'
import {
  QueryStatus,
  createApi,
  fetchBaseQuery,
  skipToken,
} from '@reduxjs/toolkit/query/react'
import {
  act,
  fireEvent,
  render,
  renderHook,
  screen,
  waitFor,
} from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import type { SyncScreen } from '@testing-library/react-render-stream/pure'
import { createRenderStream } from '@testing-library/react-render-stream/pure'
import { HttpResponse, http, delay } from 'msw'
import { useEffect, useMemo, useRef, useState } from 'react'
import type { InfiniteQueryResultFlags } from '../core/buildSelectors'

// Just setup a temporary in-memory counter for tests that `getIncrementedAmount`.
// This can be used to test how many renders happen due to data changes or
// the refetching behavior of components.
let amount = 0
let nextItemId = 0
let refetchCount = 0

interface Item {
  id: number
}

const api = createApi({
  baseQuery: async (arg: any) => {
    await waitForFakeTimer(150)
    if (arg?.body && 'amount' in arg.body) {
      amount += 1
    }

    if (arg?.body && 'forceError' in arg.body) {
      return {
        error: {
          status: 500,
          data: null,
        },
      }
    }

    if (arg?.body && 'listItems' in arg.body) {
      const items: Item[] = []
      for (let i = 0; i < 3; i++) {
        const item = { id: nextItemId++ }
        items.push(item)
      }
      return { data: items }
    }

    return {
      data: arg?.body ? { ...arg.body, ...(amount ? { amount } : {}) } : {},
    }
  },
  tagTypes: ['IncrementedAmount'],
  endpoints: (build) => ({
    getUser: build.query<{ name: string }, number>({
      query: () => ({
        body: { name: 'Timmy' },
      }),
    }),
    getUserAndForceError: build.query<{ name: string }, number>({
      query: () => ({
        body: {
          forceError: true,
        },
      }),
    }),
    getUserWithRefetchError: build.query<{ name: string }, number>({
      queryFn: async (id) => {
        refetchCount += 1

        if (refetchCount > 1) {
          return { error: true } as any
        }

        return { data: { name: 'Timmy' } }
      },
    }),
    getIncrementedAmount: build.query<{ amount: number }, void>({
      query: () => ({
        url: '',
        body: {
          amount,
        },
      }),
      providesTags: ['IncrementedAmount'],
    }),
    triggerUpdatedAmount: build.mutation<void, void>({
      queryFn: async () => {
        return { data: undefined }
      },
      invalidatesTags: ['IncrementedAmount'],
    }),
    updateUser: build.mutation<{ name: string }, { name: string }>({
      query: (update) => ({ body: update }),
    }),
    getError: build.query({
      query: () => '/error',
    }),
    listItems: build.query<Item[], { pageNumber: number | bigint }>({
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName
      },
      query: ({ pageNumber }) => ({
        url: `items?limit=1&offset=${pageNumber}`,
        body: {
          listItems: true,
        },
      }),
      merge: (currentCache, newItems) => {
        currentCache.push(...newItems)
      },
      forceRefetch: () => {
        return true
      },
    }),
    queryWithDeepArg: build.query<string, { param: { nested: string } }>({
      query: ({ param: { nested } }) => nested,
      serializeQueryArgs: ({ queryArgs }) => {
        return queryArgs.param.nested
      },
    }),
  }),
})

const listenerMiddleware = createListenerMiddleware()

let actions: UnknownAction[] = []

const storeRef = setupApiStore(
  api,
  {},
  {
    middleware: {
      prepend: [listenerMiddleware.middleware],
    },
  },
)

let getSubscriptions: SubscriptionSelectors['getSubscriptions']
let getSubscriptionCount: SubscriptionSelectors['getSubscriptionCount']

beforeEach(() => {
  actions = []
  listenerMiddleware.startListening({
    predicate: () => true,
    effect: (action) => {
      actions.push(action)
    },
  })
  ;({ getSubscriptions, getSubscriptionCount } = storeRef.store.dispatch(
    api.internalActions.internal_getRTKQSubscriptions(),
  ) as unknown as SubscriptionSelectors)
})

afterEach(() => {
  nextItemId = 0
  amount = 0
  listenerMiddleware.clearListeners()

  server.resetHandlers()
})

let getRenderCount: () => number = () => 0

describe('hooks tests', () => {
  describe('useQuery', () => {
    test('useQuery hook basic render count assumptions', async () => {
      function User() {
        const { isFetching } = api.endpoints.getUser.useQuery(1)
        getRenderCount = useRenderCounter()

        return (
          <div>
            <div data-testid="isFetching">{String(isFetching)}</div>
          </div>
        )
      }

      render(<User />, { wrapper: storeRef.wrapper })
      // By the time this runs, the initial render will happen, and the query
      //  will start immediately running by the time we can expect this
      expect(getRenderCount()).toBe(2)

      await waitFor(() =>
        expect(screen.getByTestId('isFetching').textContent).toBe('false'),
      )
      expect(getRenderCount()).toBe(3)
    })

    test('useQuery hook sets isFetching=true whenever a request is in flight', async () => {
      function User() {
        const [value, setValue] = useState(0)

        const { isFetching } = api.endpoints.getUser.useQuery(1, {
          skip: value < 1,
        })
        getRenderCount = useRenderCounter()

        return (
          <div>
            <div data-testid="isFetching">{String(isFetching)}</div>
            <button onClick={() => setValue((val) => val + 1)}>
              Increment value
            </button>
          </div>
        )
      }

      render(<User />, { wrapper: storeRef.wrapper })
      expect(getRenderCount()).toBe(1)

      await waitFor(() =>
        expect(screen.getByTestId('isFetching').textContent).toBe('false'),
      )
      fireEvent.click(screen.getByText('Increment value')) // setState = 1, perform request = 2
      await waitFor(() =>
        expect(screen.getByTestId('isFetching').textContent).toBe('true'),
      )
      await waitFor(() =>
        expect(screen.getByTestId('isFetching').textContent).toBe('false'),
      )
      expect(getRenderCount()).toBe(4)

      fireEvent.click(screen.getByText('Increment value'))
      // Being that nothing has changed in the args, this should never fire.
      expect(screen.getByTestId('isFetching').textContent).toBe('false')
      expect(getRenderCount()).toBe(5) // even though there was no request, the button click updates the state so this is an expected render
    })

    test('useQuery hook sets isLoading=true only on initial request', async () => {
      let refetch: any, isLoading: boolean, isFetching: boolean
      function User() {
        const [value, setValue] = useState(0)

        ;({ isLoading, isFetching, refetch } = api.endpoints.getUser.useQuery(
          2,
          {
            skip: value < 1,
          },
        ))
        return (
          <div>
            <div data-testid="isLoading">{String(isLoading)}</div>
            <div data-testid="isFetching">{String(isFetching)}</div>
            <button onClick={() => setValue((val) => val + 1)}>
              Increment value
            </button>
          </div>
        )
      }

      render(<User />, { wrapper: storeRef.wrapper })

      // Being that we skipped the initial request on mount, this should be false
      await waitFor(() =>
        expect(screen.getByTestId('isLoading').textContent).toBe('false'),
      )
      fireEvent.click(screen.getByText('Increment value'))
      // Condition is met, should load
      await waitFor(() =>
        expect(screen.getByTestId('isLoading').textContent).toBe('true'),
      )
      await waitFor(() =>
        expect(screen.getByTestId('isLoading').textContent).toBe('false'),
      ) // Make sure the original loading has completed.
      fireEvent.click(screen.getByText('Increment value'))
      // Being that we already have data, isLoading should be false
      await waitFor(() =>
        expect(screen.getByTestId('isLoading').textContent).toBe('false'),
      )
      // We call a refetch, should still be `false`
      act(() => void refetch())
      await waitFor(() =>
        expect(screen.getByTestId('isFetching').textContent).toBe('true'),
      )
      expect(screen.getByTestId('isLoading').textContent).toBe('false')
    })

    test('useQuery hook sets isLoading and isFetching to the correct states', async () => {
      let refetchMe: () => void = () => {}
      function User() {
        const [value, setValue] = useState(0)
        getRenderCount = useRenderCounter()

        const { isLoading, isFetching, refetch } =
          api.endpoints.getUser.useQuery(22, { skip: value < 1 })
        refetchMe = refetch
        return (
          <div>
            <div data-testid="isFetching">{String(isFetching)}</div>
            <div data-testid="isLoading">{String(isLoading)}</div>
            <button onClick={() => setValue((val) => val + 1)}>
              Increment value
            </button>
          </div>
        )
      }

      render(<User />, { wrapper: storeRef.wrapper })
      expect(getRenderCount()).toBe(1)

      expect(screen.getByTestId('isLoading').textContent).toBe('false')
      expect(screen.getByTestId('isFetching').textContent).toBe('false')

      fireEvent.click(screen.getByText('Increment value')) // renders: set state = 1, perform request = 2
      // Condition is met, should load
      await waitFor(() => {
        expect(screen.getByTestId('isLoading').textContent).toBe('true')
        expect(screen.getByTestId('isFetching').textContent).toBe('true')
      })

      // Make sure the request is done for sure.
      await waitFor(() => {
        expect(screen.getByTestId('isLoading').textContent).toBe('false')
        expect(screen.getByTestId('isFetching').textContent).toBe('false')
      })
      expect(getRenderCount()).toBe(4)

      fireEvent.click(screen.getByText('Increment value'))
      // Being that we already have data and changing the value doesn't trigger a new request, only the button click should impact the render
      await waitFor(() => {
        expect(screen.getByTestId('isLoading').textContent).toBe('false')
        expect(screen.getByTestId('isFetching').textContent).toBe('false')
      })
      expect(getRenderCount()).toBe(5)

      // We call a refetch, should set `isFetching` to true, then false when complete/errored
      act(() => void refetchMe())
      await waitFor(() => {
        expect(screen.getByTestId('isLoading').textContent).toBe('false')
        expect(screen.getByTestId('isFetching').textContent).toBe('true')
      })
      await waitFor(() => {
        expect(screen.getByTestId('isLoading').textContent).toBe('false')
        expect(screen.getByTestId('isFetching').textContent).toBe('false')
      })
      expect(getRenderCount()).toBe(7)
    })

    test('`isLoading` does not jump back to true, while `isFetching` does', async () => {
      const loadingHist: boolean[] = [],
        fetchingHist: boolean[] = []

      function User({ id }: { id: number }) {
        const { isLoading, isFetching, status } =
          api.endpoints.getUser.useQuery(id)

        useEffect(() => {
          loadingHist.push(isLoading)
        }, [isLoading])
        useEffect(() => {
          fetchingHist.push(isFetching)
        }, [isFetching])
        return (
          <div data-testid="status">
            {status === QueryStatus.fulfilled && id}
          </div>
        )
      }

      let { rerender } = render(<User id={1} />, { wrapper: storeRef.wrapper })

      await waitFor(() =>
        expect(screen.getByTestId('status').textContent).toBe('1'),
      )
      rerender(<User id={2} />)

      await waitFor(() =>
        expect(screen.getByTestId('status').textContent).toBe('2'),
      )

      expect(loadingHist).toEqual([true, false])
      expect(fetchingHist).toEqual([true, false, true, false])
    })

    test('`isSuccess` does not jump back false on subsequent queries', async () => {
      type LoadingState = {
        id: number
        isFetching: boolean
        isSuccess: boolean
      }
      const loadingHistory: LoadingState[] = []

      function User({ id }: { id: number }) {
        const queryRes = api.endpoints.getUser.useQuery(id)

        useEffect(() => {
          const { isFetching, isSuccess } = queryRes
          loadingHistory.push({ id, isFetching, isSuccess })
        }, [id, queryRes])
        return (
          <div data-testid="status">
            {queryRes.status === QueryStatus.fulfilled && id}
          </div>
        )
      }

      let { rerender } = render(<User id={1} />, { wrapper: storeRef.wrapper })

      await waitFor(() =>
        expect(screen.getByTestId('status').textContent).toBe('1'),
      )
      rerender(<User id={2} />)

      await waitFor(() =>
        expect(screen.getByTestId('status').textContent).toBe('2'),
      )

      expect(loadingHistory).toEqual([
        // Initial render(s)
        { id: 1, isFetching: true, isSuccess: false },
        { id: 1, isFetching: true, isSuccess: false },
        // Data returned
        { id: 1, isFetching: false, isSuccess: true },
        // ID changed, there's an uninitialized cache entry.
        // IMPORTANT: `isSuccess` should not be false here.
        // We have valid data already for the old item.
        { id: 2, isFetching: true, isSuccess: true },
        { id: 2, isFetching: true, isSuccess: true },
        { id: 2, isFetching: false, isSuccess: true },
      ])
    })

    test('isSuccess stays consistent if there is an error while refetching', async () => {
      type LoadingState = {
        id: number
        isFetching: boolean
        isSuccess: boolean
        isError: boolean
      }
      const loadingHistory: LoadingState[] = []

      function Component({ id = 1 }) {
        const queryRes = api.endpoints.getUserWithRefetchError.useQuery(id)
        const { refetch, data, status } = queryRes

        useEffect(() => {
          const { isFetching, isSuccess, isError } = queryRes
          loadingHistory.push({ id, isFetching, isSuccess, isError })
        }, [id, queryRes])

        return (
          <div>
            <button
              onClick={() => {
                refetch()
              }}
            >
              refetch
            </button>
            <div data-testid="name">{data?.name}</div>
            <div data-testid="status">{status}</div>
          </div>
        )
      }

      render(<Component />, { wrapper: storeRef.wrapper })

      await waitFor(() =>
        expect(screen.getByTestId('name').textContent).toBe('Timmy'),
      )

      fireEvent.click(screen.getByText('refetch'))

      await waitFor(() =>
        expect(screen.getByTestId('status').textContent).toBe('pending'),
      )

      await waitFor(() =>
        expect(screen.getByTestId('status').textContent).toBe('rejected'),
      )

      fireEvent.click(screen.getByText('refetch'))

      await waitFor(() =>
        expect(screen.getByTestId('status').textContent).toBe('pending'),
      )

      await waitFor(() =>
        expect(screen.getByTestId('status').textContent).toBe('rejected'),
      )

      expect(loadingHistory).toEqual([
        // Initial renders
        { id: 1, isFetching: true, isSuccess: false, isError: false },
        { id: 1, isFetching: true, isSuccess: false, isError: false },
        // Data is returned
        { id: 1, isFetching: false, isSuccess: true, isError: false },
        // Started first refetch
        { id: 1, isFetching: true, isSuccess: true, isError: false },
        // First refetch errored
        { id: 1, isFetching: false, isSuccess: false, isError: true },
        // Started second refetch
        // IMPORTANT We expect `isSuccess` to still be false,
        // despite having started the refetch again.
        { id: 1, isFetching: true, isSuccess: false, isError: false },
        // Second refetch errored
        { id: 1, isFetching: false, isSuccess: false, isError: true },
      ])
    })

    test('useQuery hook respects refetchOnMountOrArgChange: true', async () => {
      let data, isLoading, isFetching
      function User() {
        ;({ data, isLoading, isFetching } =
          api.endpoints.getIncrementedAmount.useQuery(undefined, {
            refetchOnMountOrArgChange: true,
          }))
        return (
          <div>
            <div data-testid="isLoading">{String(isLoading)}</div>
            <div data-testid="isFetching">{String(isFetching)}</div>
            <div data-testid="amount">{String(data?.amount)}</div>
          </div>
        )
      }

      const { unmount } = render(<User />, { wrapper: storeRef.wrapper })

      await waitFor(() =>
        expect(screen.getByTestId('isLoading').textContent).toBe('true'),
      )
      await waitFor(() =>
        expect(screen.getByTestId('isLoading').textContent).toBe('false'),
      )

      await waitFor(() =>
        expect(screen.getByTestId('amount').textContent).toBe('1'),
      )

      unmount()

      render(<User />, { wrapper: storeRef.wrapper })
      // Let's make sure we actually fetch, and we increment
      expect(screen.getByTestId('isLoading').textContent).toBe('false')
      await waitFor(() =>
        expect(screen.getByTestId('isFetching').textContent).toBe('true'),
      )
      await waitFor(() =>
        expect(screen.getByTestId('isFetching').textContent).toBe('false'),
      )

      await waitFor(() =>
        expect(screen.getByTestId('amount').textContent).toBe('2'),
      )
    })

    test('useQuery does not refetch when refetchOnMountOrArgChange: NUMBER condition is not met', async () => {
      let data, isLoading, isFetching
      function User() {
        ;({ data, isLoading, isFetching } =
          api.endpoints.getIncrementedAmount.useQuery(undefined, {
            refetchOnMountOrArgChange: 10,
          }))
        return (
          <div>
            <div data-testid="isLoading">{String(isLoading)}</div>
            <div data-testid="isFetching">{String(isFetching)}</div>
            <div data-testid="amount">{String(data?.amount)}</div>
          </div>
        )
      }

      const { unmount } = render(<User />, { wrapper: storeRef.wrapper })

      await waitFor(() =>
        expect(screen.getByTestId('isLoading').textContent).toBe('true'),
      )
      await waitFor(() =>
        expect(screen.getByTestId('isLoading').textContent).toBe('false'),
      )

      await waitFor(() =>
        expect(screen.getByTestId('amount').textContent).toBe('1'),
      )

      unmount()

      render(<User />, { wrapper: storeRef.wrapper })
      // Let's make sure we actually fetch, and we increment. Should be false because we do this immediately
      // and the condition is set to 10 seconds
      expect(screen.getByTestId('isFetching').textContent).toBe('false')
      await waitFor(() =>
        expect(screen.getByTestId('amount').textContent).toBe('1'),
      )
    })

    test('useQuery refetches when refetchOnMountOrArgChange: NUMBER condition is met', async () => {
      let data, isLoading, isFetching
      function User() {
        ;({ data, isLoading, isFetching } =
          api.endpoints.getIncrementedAmount.useQuery(undefined, {
            refetchOnMountOrArgChange: 0.5,
          }))
        return (
          <div>
            <div data-testid="isLoading">{String(isLoading)}</div>
            <div data-testid="isFetching">{String(isFetching)}</div>
            <div data-testid="amount">{String(data?.amount)}</div>
          </div>
        )
      }

      const { unmount } = render(<User />, { wrapper: storeRef.wrapper })

      await waitFor(() =>
        expect(screen.getByTestId('isLoading').textContent).toBe('true'),
      )
      await waitFor(() =>
        expect(screen.getByTestId('isLoading').textContent).toBe('false'),
      )

      await waitFor(() =>
        expect(screen.getByTestId('amount').textContent).toBe('1'),
      )

      unmount()

      // Wait to make sure we've passed the `refetchOnMountOrArgChange` value
      await waitMs(510)

      render(<User />, { wrapper: storeRef.wrapper })
      // Let's make sure we actually fetch, and we increment
      await waitFor(() =>
        expect(screen.getByTestId('isFetching').textContent).toBe('true'),
      )
      await waitFor(() =>
        expect(screen.getByTestId('isFetching').textContent).toBe('false'),
      )

      await waitFor(() =>
        expect(screen.getByTestId('amount').textContent).toBe('2'),
      )
    })

    test('refetchOnMountOrArgChange works as expected when changing skip from false->true', async () => {
      let data, isLoading, isFetching
      function User() {
        const [skip, setSkip] = useState(true)
        ;({ data, isLoading, isFetching } =
          api.endpoints.getIncrementedAmount.useQuery(undefined, {
            refetchOnMountOrArgChange: 0.5,
            skip,
          }))

        return (
          <div>
            <div data-testid="isLoading">{String(isLoading)}</div>
            <div data-testid="isFetching">{String(isFetching)}</div>
            <div data-testid="amount">{String(data?.amount)}</div>
            <button onClick={() => setSkip((prev) => !prev)}>
              change skip
            </button>
            ;
          </div>
        )
      }

      render(<User />, { wrapper: storeRef.wrapper })

      expect(screen.getByTestId('isLoading').textContent).toBe('false')
      expect(screen.getByTestId('amount').textContent).toBe('undefined')

      fireEvent.click(screen.getByText('change skip'))

      await waitFor(() =>
        expect(screen.getByTestId('isFetching').textContent).toBe('true'),
      )
      await waitFor(() =>
        expect(screen.getByTestId('isFetching').textContent).toBe('false'),
      )

      await waitFor(() =>
        expect(screen.getByTestId('amount').textContent).toBe('1'),
      )
    })

    test('refetchOnMountOrArgChange works as expected when changing skip from false->true with a cached query', async () => {
      // 1. we need to mount a skipped query, then toggle skip to generate a cached result
      // 2. we need to mount a skipped component after that, then toggle skip as well. should pull from the cache.
      // 3. we need to mount another skipped component, then toggle skip after the specified duration and expect the time condition to be satisfied

      let data, isLoading, isFetching
      function User() {
        const [skip, setSkip] = useState(true)
        ;({ data, isLoading, isFetching } =
          api.endpoints.getIncrementedAmount.useQuery(undefined, {
            skip,
            refetchOnMountOrArgChange: 0.5,
          }))

        return (
          <div>
            <div data-testid="isLoading">{String(isLoading)}</div>
            <div data-testid="isFetching">{String(isFetching)}</div>
            <div data-testid="amount">{String(data?.amount)}</div>
            <button onClick={() => setSkip((prev) => !prev)}>
              change skip
            </button>
            ;
          </div>
        )
      }

      let { unmount } = render(<User />, { wrapper: storeRef.wrapper })

      expect(screen.getByTestId('isFetching').textContent).toBe('false')

      // skipped queries do nothing by default, so we need to toggle that to get a cached result
      fireEvent.click(screen.getByText('change skip'))

      await waitFor(() =>
        expect(screen.getByTestId('isFetching').textContent).toBe('true'),
      )

      await waitFor(() => {
        expect(screen.getByTestId('amount').textContent).toBe('1')
        expect(screen.getByTestId('isFetching').textContent).toBe('false')
      })

      unmount()

      await waitMs(100)

      // This will pull from the cache as the time criteria is not met.
      ;({ unmount } = render(<User />, {
        wrapper: storeRef.wrapper,
      }))

      // skipped queries return nothing
      expect(screen.getByTestId('isFetching').textContent).toBe('false')
      expect(screen.getByTestId('amount').textContent).toBe('undefined')

      // toggle skip -> true... won't refetch as the time critera is not met, and just loads the cached values
      fireEvent.click(screen.getByText('change skip'))
      expect(screen.getByTestId('isFetching').textContent).toBe('false')
      expect(screen.getByTestId('amount').textContent).toBe('1')

      unmount()

      await waitMs(500)
      ;({ unmount } = render(<User />, {
        wrapper: storeRef.wrapper,
      }))

      // toggle skip -> true... will cause a refetch as the time criteria is now satisfied
      fireEvent.click(screen.getByText('change skip'))

      await waitFor(() =>
        expect(screen.getByTestId('isFetching').textContent).toBe('true'),
      )
      await waitFor(() =>
        expect(screen.getByTestId('isFetching').textContent).toBe('false'),
      )

      await waitFor(() =>
        expect(screen.getByTestId('amount').textContent).toBe('2'),
      )
    })

    test(`useQuery refetches when query args object changes even if serialized args don't change`, async () => {
      const user = userEvent.setup()

      function ItemList() {
        const [pageNumber, setPageNumber] = useState(0)
        const { data = [] } = api.useListItemsQuery({
          pageNumber,
        })

        const renderedItems = data.map((item) => (
          <li key={item.id}>ID: {item.id}</li>
        ))
        return (
          <div>
            <button onClick={() => setPageNumber(pageNumber + 1)}>
              Next Page
            </button>
            <ul>{renderedItems}</ul>
          </div>
        )
      }

      render(<ItemList />, { wrapper: storeRef.wrapper })

      await screen.findByText('ID: 0')

      await user.click(screen.getByText('Next Page'))

      await screen.findByText('ID: 3')
    })

    test(`useQuery shouldn't call args serialization if request skipped`, async () => {
      expect(() =>
        renderHook(() => api.endpoints.queryWithDeepArg.useQuery(skipToken), {
          wrapper: storeRef.wrapper,
        }),
      ).not.toThrow()
    })

    test(`useQuery gracefully handles bigint types`, async () => {
      const user = userEvent.setup()

      function ItemList() {
        const [pageNumber, setPageNumber] = useState(0)
        const { data = [] } = api.useListItemsQuery({
          pageNumber: BigInt(pageNumber),
        })

        const renderedItems = data.map((item) => (
          <li key={item.id}>ID: {item.id}</li>
        ))
        return (
          <div>
            <button onClick={() => setPageNumber(pageNumber + 1)}>
              Next Page
            </button>
            <ul>{renderedItems}</ul>
          </div>
        )
      }

      render(<ItemList />, { wrapper: storeRef.wrapper })

      await screen.findByText('ID: 0')

      await user.click(screen.getByText('Next Page'))

      await screen.findByText('ID: 3')
    })

    describe('api.util.resetApiState resets hook', () => {
      test('without `selectFromResult`', async () => {
        const { result } = renderHook(() => api.endpoints.getUser.useQuery(5), {
          wrapper: storeRef.wrapper,
        })

        await waitFor(() => expect(result.current.isSuccess).toBe(true))

        act(() => void storeRef.store.dispatch(api.util.resetApiState()))

        expect(result.current).toEqual(
          expect.objectContaining({
            isError: false,
            isFetching: true,
            isLoading: true,
            isSuccess: false,
            isUninitialized: false,
            refetch: expect.any(Function),
            status: 'pending',
          }),
        )
      })
      test('with `selectFromResult`', async () => {
        const selectFromResult = vi.fn((x) => x)
        const { result } = renderHook(
          () => api.endpoints.getUser.useQuery(5, { selectFromResult }),
          {
            wrapper: storeRef.wrapper,
          },
        )

        await waitFor(() => expect(result.current.isSuccess).toBe(true))
        selectFromResult.mockClear()
        act(() => {
          storeRef.store.dispatch(api.util.resetApiState())
        })

        expect(selectFromResult).toHaveBeenNthCalledWith(1, {
          isError: false,
          isFetching: false,
          isLoading: false,
          isSuccess: false,
          isUninitialized: true,
          status: 'uninitialized',
        })
      })

      test('hook should not be stuck loading post resetApiState after re-render', async () => {
        const user = userEvent.setup()

        function QueryComponent() {
          const { isLoading, data } = api.endpoints.getUser.useQuery(1)

          if (isLoading) {
            return <p>Loading...</p>
          }

          return <p>{data?.name}</p>
        }

        function Wrapper() {
          const [open, setOpen] = useState(true)

          const handleRerender = () => {
            setOpen(false)
            setTimeout(() => {
              setOpen(true)
            }, 250)
          }

          const handleReset = () => {
            storeRef.store.dispatch(api.util.resetApiState())
          }

          return (
            <>
              <button onClick={handleRerender} aria-label="Rerender component">
                Rerender
              </button>
              {open ? (
                <div>
                  <button onClick={handleReset} aria-label="Reset API state">
                    Reset
                  </button>

                  <QueryComponent />
                </div>
              ) : null}
            </>
          )
        }

        render(<Wrapper />, { wrapper: storeRef.wrapper })

        await user.click(
          screen.getByRole('button', { name: /Rerender component/i }),
        )
        await waitFor(() => {
          expect(screen.getByText('Timmy')).toBeTruthy()
        })

        await user.click(
          screen.getByRole('button', { name: /reset api state/i }),
        )
        await waitFor(() => {
          expect(screen.queryByText('Loading...')).toBeNull()
        })
        await waitFor(() => {
          expect(screen.getByText('Timmy')).toBeTruthy()
        })
      })
    })

    test('useQuery refetch method returns a promise that resolves with the result', async () => {
      const { result } = renderHook(
        () => api.endpoints.getIncrementedAmount.useQuery(),
        {
          wrapper: storeRef.wrapper,
        },
      )

      await waitFor(() => expect(result.current.isSuccess).toBe(true))
      const originalAmount = result.current.data!.amount

      const { refetch } = result.current

      let resPromise: ReturnType<typeof refetch> = null as any
      await act(async () => {
        resPromise = refetch()
      })
      expect(resPromise).toBeInstanceOf(Promise)
      const res = await act(() => resPromise)
      expect(res.data!.amount).toBeGreaterThan(originalAmount)
    })

    // See https://github.com/reduxjs/redux-toolkit/issues/4267 - Memory leak in useQuery rapid query arg changes
    test('Hook subscriptions are properly cleaned up when query is fulfilled/rejected', async () => {
      // This is imported already, but it seems to be causing issues with the test on certain matrixes

      const pokemonApi = createApi({
        baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
        endpoints: (builder) => ({
          getTest: builder.query<string, number>({
            async queryFn() {
              await new Promise((resolve) => setTimeout(resolve, 1000))
              return { data: 'data!' }
            },
            keepUnusedDataFor: 0,
          }),
        }),
      })

      const storeRef = setupApiStore(pokemonApi, undefined, {
        withoutTestLifecycles: true,
      })

      const checkNumQueries = (count: number) => {
        const cacheEntries = Object.keys(storeRef.store.getState().api.queries)
        const queries = cacheEntries.length

        expect(queries).toBe(count)
      }

      let i = 0

      function User() {
        const [fetchTest, { isFetching, isUninitialized }] =
          pokemonApi.endpoints.getTest.useLazyQuery()

        return (
          <div>
            <div data-testid="isUninitialized">{String(isUninitialized)}</div>
            <div data-testid="isFetching">{String(isFetching)}</div>
            <button data-testid="fetchButton" onClick={() => fetchTest(i++)}>
              fetchUser
            </button>
          </div>
        )
      }

      render(<User />, { wrapper: storeRef.wrapper })
      fireEvent.click(screen.getByTestId('fetchButton'))
      fireEvent.click(screen.getByTestId('fetchButton'))
      fireEvent.click(screen.getByTestId('fetchButton'))
      checkNumQueries(3)

      await act(async () => {
        await delay(1500)
      })

      // There should only be one stored query once they have had time to resolve
      checkNumQueries(1)
    })

    // See https://github.com/reduxjs/redux-toolkit/issues/3182
    test('Hook subscriptions are properly cleaned up when changing skip back and forth', async () => {
      const pokemonApi = createApi({
        baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
        endpoints: (builder) => ({
          getPokemonByName: builder.query({
            queryFn: (name: string) => ({ data: null }),
            keepUnusedDataFor: 1,
          }),
        }),
      })

      const storeRef = setupApiStore(pokemonApi, undefined, {
        withoutTestLifecycles: true,
      })

      const checkNumSubscriptions = (arg: string, count: number) => {
        const subscriptions = getSubscriptions()
        const cacheKeyEntry = subscriptions.get(arg)

        if (cacheKeyEntry) {
          const subscriptionCount = Object.keys(cacheKeyEntry) //getSubscriptionCount(arg)
          expect(subscriptionCount).toBe(count)
        }
      }

      // 1) Initial state: an active subscription
      const { rerender, unmount } = renderHook(
        ([arg, options]: Parameters<
          typeof pokemonApi.useGetPokemonByNameQuery
        >) => pokemonApi.useGetPokemonByNameQuery(arg, options),
        {
          wrapper: storeRef.wrapper,
          initialProps: ['a'],
        },
      )

      await act(async () => {
        await waitMs(1)
      })

      // 2) Set the current subscription to `{skip: true}
      rerender(['a', { skip: true }])

      // 3) Change _both_ the cache key _and_ `{skip: false}` at the same time.
      // This causes the `subscriptionRemoved` check to be `true`.
      rerender(['b'])

      // There should only be one active subscription after changing the arg
      checkNumSubscriptions('b', 1)

      // 4) Re-render with the same arg.
      // This causes the `subscriptionRemoved` check to be `false`.
      // Correct behavior is this does _not_ clear the promise ref,
      // so
      rerender(['b'])

      // There should only be one active subscription after changing the arg
      checkNumSubscriptions('b', 1)

      await act(async () => {
        await waitMs(1)
      })

      unmount()

      await act(async () => {
        await waitMs(1)
      })

      // There should be no subscription entries left over after changing
      // cache key args and swapping `skip` on and off
      checkNumSubscriptions('b', 0)

      const finalSubscriptions = getSubscriptions()

      for (const cacheKeyEntry of Object.values(finalSubscriptions)) {
        expect(Object.values(cacheKeyEntry!).length).toBe(0)
      }
    })

    test('Hook subscription failures do not reset isLoading state', async () => {
      const states: boolean[] = []

      function Parent() {
        const { isLoading } = api.endpoints.getUserAndForceError.useQuery(1)

        // Collect loading states to verify that it does not revert back to true.
        states.push(isLoading)

        // Parent conditionally renders child when loading.
        if (isLoading) return null

        return <Child />
      }

      function Child() {
        // Using the same args as the parent
        api.endpoints.getUserAndForceError.useQuery(1)

        return null
      }

      render(<Parent />, { wrapper: storeRef.wrapper })

      expect(states).toHaveLength(2)

      // Allow at least three state effects to hit.
      // Trying to see if any [true, false, true] occurs.
      await act(async () => {
        await waitForFakeTimer(150)
      })

      expect(states).toHaveLength(4)

      await act(async () => {
        await waitForFakeTimer(150)
      })

      expect(states).toHaveLength(5)

      await act(async () => {
        await waitForFakeTimer(150)
      })

      expect(states).toHaveLength(5)

      // Find if at any time the isLoading state has reverted
      // E.G.: `[..., true, false, ..., true]`
      //              ^^^^  ^^^^^       ^^^^
      const firstTrue = states.indexOf(true)
      const firstFalse = states.slice(firstTrue).indexOf(false)
      const revertedState = states.slice(firstFalse).indexOf(true)

      expect(
        revertedState,
        `Expected isLoading state to never revert back to true but did after ${revertedState} renders...`,
      ).toBe(-1)
    })

    test('query thunk should be aborted when component unmounts and cache entry is removed', async () => {
      let abortSignalFromQueryFn: AbortSignal | undefined

      const pokemonApi = createApi({
        baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
        endpoints: (builder) => ({
          getTest: builder.query<string, number>({
            async queryFn(arg, { signal }) {
              abortSignalFromQueryFn = signal

              // Simulate a long-running request that should be aborted
              await new Promise((resolve, reject) => {
                const timeout = setTimeout(resolve, 5000)

                signal.addEventListener('abort', () => {
                  clearTimeout(timeout)
                  reject(new Error('Aborted'))
                })
              })

              return { data: 'data!' }
            },
            keepUnusedDataFor: 0.01, // Very short timeout (10ms)
          }),
        }),
      })

      const storeRef = setupApiStore(pokemonApi, undefined, {
        withoutTestLifecycles: true,
      })

      function TestComponent() {
        const { data, isFetching } = pokemonApi.endpoints.getTest.useQuery(1)

        return (
          <div>
            <div data-testid="isFetching">{String(isFetching)}</div>
            <div data-testid="data">{data || 'no data'}</div>
          </div>
        )
      }

      function App() {
        const [showComponent, setShowComponent] = useState(true)

        return (
          <div>
            {showComponent && <TestComponent />}
            <button
              data-testid="unmount"
              onClick={() => setShowComponent(false)}
            >
              Unmount Component
            </button>
          </div>
        )
      }

      render(<App />, { wrapper: storeRef.wrapper })

      // Wait for the query to start
      await waitFor(() =>
        expect(screen.getByTestId('isFetching').textContent).toBe('true'),
      )

      // Verify we have an abort signal
      expect(abortSignalFromQueryFn).toBeDefined()
      expect(abortSignalFromQueryFn!.aborted).toBe(false)

      // Unmount the component
      fireEvent.click(screen.getByTestId('unmount'))

      // Wait for the cache entry to be removed (keepUnusedDataFor: 0.01s = 10ms)
      await act(async () => {
        await delay(100)
      })

      // The abort signal should now be aborted
      expect(abortSignalFromQueryFn!.aborted).toBe(true)
    })

    describe('Hook middleware requirements', () => {
      const consoleErrorSpy = vi
        .spyOn(console, 'error')
        .mockImplementation(noop)

      afterEach(() => {
        consoleErrorSpy.mockClear()
      })

      afterAll(() => {
        consoleErrorSpy.mockRestore()
      })

      test('Throws error if middleware is not added to the store', async () => {
        const store = configureStore({
          reducer: {
            [api.reducerPath]: api.reducer,
          },
        })

        const doRender = () => {
          renderHook(() => api.endpoints.getIncrementedAmount.useQuery(), {
            wrapper: withProvider(store),
          })
        }

        expect(doRender).toThrowError(
          /Warning: Middleware for RTK-Query API at reducerPath "api" has not been added to the store/,
        )
      })
    })
  })

  describe('useLazyQuery', () => {
    let data: any

    afterEach(() => {
      data = undefined
    })

    let getRenderCount: () => number = () => 0
    test('useLazyQuery does not automatically fetch when mounted and has undefined data', async () => {
      function User() {
        const [fetchUser, { data: hookData, isFetching, isUninitialized }] =
          api.endpoints.getUser.useLazyQuery()
        getRenderCount = useRenderCounter()

        data = hookData

        return (
          <div>
            <div data-testid="isUninitialized">{String(isUninitialized)}</div>
            <div data-testid="isFetching">{String(isFetching)}</div>
            <button data-testid="fetchButton" onClick={() => fetchUser(1)}>
              fetchUser
            </button>
          </div>
        )
      }

      render(<User />, { wrapper: storeRef.wrapper })
      expect(getRenderCount()).toBe(1)

      await waitFor(() =>
        expect(screen.getByTestId('isUninitialized').textContent).toBe('true'),
      )
      await waitFor(() => expect(data).toBeUndefined())

      fireEvent.click(screen.getByTestId('fetchButton'))
      expect(getRenderCount()).toBe(2)

      await waitFor(() =>
        expect(screen.getByTestId('isUninitialized').textContent).toBe('false'),
      )
      await waitFor(() =>
        expect(screen.getByTestId('isFetching').textContent).toBe('false'),
      )
      expect(getRenderCount()).toBe(3)

      fireEvent.click(screen.getByTestId('fetchButton'))
      await waitFor(() =>
        expect(screen.getByTestId('isFetching').textContent).toBe('true'),
      )
      await waitFor(() =>
        expect(screen.getByTestId('isFetching').textContent).toBe('false'),
      )
      expect(getRenderCount()).toBe(5)
    })

    test('useLazyQuery accepts updated subscription options and only dispatches updateSubscriptionOptions when values are updated', async () => {
      let interval = 1000
      function User() {
        const [options, setOptions] = useState<SubscriptionOptions>()
        const [fetchUser, { data: hookData, isFetching, isUninitialized }] =
          api.endpoints.getUser.useLazyQuery(options)
        getRenderCount = useRenderCounter()

        data = hookData

        return (
          <div>
            <div data-testid="isUninitialized">{String(isUninitialized)}</div>
            <div data-testid="isFetching">{String(isFetching)}</div>

            <button data-testid="fetchButton" onClick={() => fetchUser(1)}>
              fetchUser
            </button>
            <button
              data-testid="updateOptions"
              onClick={() =>
                setOptions({
                  pollingInterval: interval,
                })
              }
            >
              updateOptions
            </button>
          </div>
        )
      }

      render(<User />, { wrapper: storeRef.wrapper })
      expect(getRenderCount()).toBe(1) // hook mount

      await waitFor(() =>
        expect(screen.getByTestId('isUninitialized').textContent).toBe('true'),
      )
      await waitFor(() => expect(data).toBeUndefined())

      fireEvent.click(screen.getByTestId('fetchButton'))
      expect(getRenderCount()).toBe(2)

      await waitFor(() =>
        expect(screen.getByTestId('isFetching').textContent).toBe('true'),
      )
      await waitFor(() =>
        expect(screen.getByTestId('isFetching').textContent).toBe('false'),
      )
      expect(getRenderCount()).toBe(3)

      fireEvent.click(screen.getByTestId('updateOptions')) // setState = 1
      expect(getRenderCount()).toBe(4)

      fireEvent.click(screen.getByTestId('fetchButton')) // perform new request = 2
      await waitFor(() =>
        expect(screen.getByTestId('isFetching').textContent).toBe('true'),
      )
      await waitFor(() =>
        expect(screen.getByTestId('isFetching').textContent).toBe('false'),
      )
      expect(getRenderCount()).toBe(6)

      interval = 1000

      fireEvent.click(screen.getByTestId('updateOptions')) // setState = 1
      expect(getRenderCount()).toBe(7)

      fireEvent.click(screen.getByTestId('fetchButton'))
      await waitFor(() =>
        expect(screen.getByTestId('isFetching').textContent).toBe('true'),
      )
      await waitFor(() =>
        expect(screen.getByTestId('isFetching').textContent).toBe('false'),
      )
      expect(getRenderCount()).toBe(9)

      expect(
        actions.filter(api.internalActions.updateSubscriptionOptions.match),
      ).toHaveLength(1)
    })

    test('useLazyQuery accepts updated args and unsubscribes the original query', async () => {
      function User() {
        const [fetchUser, { data: hookData, isFetching, isUninitialized }] =
          api.endpoints.getUser.useLazyQuery()

        data = hookData

        return (
          <div>
            <div data-testid="isUninitialized">{String(isUninitialized)}</div>
            <div data-testid="isFetching">{String(isFetching)}</div>

            <button data-testid="fetchUser1" onClick={() => fetchUser(1)}>
              fetchUser1
            </button>
            <button data-testid="fetchUser2" onClick={() => fetchUser(2)}>
              fetchUser2
            </button>
          </div>
        )
      }

      const { unmount } = render(<User />, { wrapper: storeRef.wrapper })

      await waitFor(() =>
        expect(screen.getByTestId('isUninitialized').textContent).toBe('true'),
      )
      await waitFor(() => expect(data).toBeUndefined())

      fireEvent.click(screen.getByTestId('fetchUser1'))

      await waitFor(() =>
        expect(screen.getByTestId('isFetching').textContent).toBe('true'),
      )
      await waitFor(() =>
        expect(screen.getByTestId('isFetching').textContent).toBe('false'),
      )

      // Being that there is only the initial query, no unsubscribe should be dispatched
      expect(
        actions.filter(api.internalActions.unsubscribeQueryResult.match),
      ).toHaveLength(0)

      fireEvent.click(screen.getByTestId('fetchUser2'))

      await waitFor(() =>
        expect(screen.getByTestId('isFetching').textContent).toBe('true'),
      )
      await waitFor(() =>
        expect(screen.getByTestId('isFetching').textContent).toBe('false'),
      )

      expect(
        actions.filter(api.internalActions.unsubscribeQueryResult.match),
      ).toHaveLength(1)

      fireEvent.click(screen.getByTestId('fetchUser1'))

      expect(
        actions.filter(api.internalActions.unsubscribeQueryResult.match),
      ).toHaveLength(2)

      // we always unsubscribe the original promise and create a new one
      fireEvent.click(screen.getByTestId('fetchUser1'))
      expect(
        actions.filter(api.internalActions.unsubscribeQueryResult.match),
      ).toHaveLength(3)

      unmount()

      // We unsubscribe after the component unmounts
      expect(
        actions.filter(api.internalActions.unsubscribeQueryResult.match),
      ).toHaveLength(4)
    })

    test('useLazyQuery hook callback returns various properties to handle the result', async () => {
      const user = userEvent.setup()

      function User() {
        const [getUser] = api.endpoints.getUser.useLazyQuery()
        const [{ successMsg, errMsg, isAborted }, setValues] = useState({
          successMsg: '',
          errMsg: '',
          isAborted: false,
        })

        const handleClick = (abort: boolean) => async () => {
          const res = getUser(1)

          // abort the query immediately to force an error
          if (abort) res.abort()
          res
            .unwrap()
            .then((result) => {
              setValues({
                successMsg: `Successfully fetched user ${result.name}`,
                errMsg: '',
                isAborted: false,
              })
            })
            .catch((err) => {
              setValues({
                successMsg: '',
                errMsg: `An error has occurred fetching userId: ${res.arg}`,
                isAborted: err.name === 'AbortError',
              })
            })
        }

        return (
          <div>
            <button onClick={handleClick(false)}>
              Fetch User successfully
            </button>
            <button onClick={handleClick(true)}>Fetch User and abort</button>
            <div>{successMsg}</div>
            <div>{errMsg}</div>
            <div>{isAborted ? 'Request was aborted' : ''}</div>
          </div>
        )
      }

      render(<User />, { wrapper: storeRef.wrapper })
      expect(screen.queryByText(/An error has occurred/i)).toBeNull()
      expect(screen.queryByText(/Successfully fetched user/i)).toBeNull()
      expect(screen.queryByText('Request was aborted')).toBeNull()

      fireEvent.click(
        screen.getByRole('button', { name: 'Fetch User and abort' }),
      )
      await screen.findByText('An error has occurred fetching userId: 1')
      expect(screen.queryByText(/Successfully fetched user/i)).toBeNull()
      screen.getByText('Request was aborted')

      await user.click(
        screen.getByRole('button', { name: 'Fetch User successfully' }),
      )

      await screen.findByText('Successfully fetched user Timmy')
      expect(screen.queryByText(/An error has occurred/i)).toBeNull()
      expect(screen.queryByText('Request was aborted')).toBeNull()
    })

    // Based on issue #5079, which I couldn't reproduce but we might as well capture
    test('useLazyQuery calling abort() multiple times does not throw an error', async () => {
      const user = userEvent.setup()

      // Create a fresh API instance with fetchBaseQuery and timeout, matching the user's example
      const timeoutApi = createApi({
        baseQuery: fetchBaseQuery({
          baseUrl: 'https://example.com',
          timeout: 5000,
        }),
        endpoints: (builder) => ({
          getData: builder.query<string, void>({
            query: () => ({ url: '/data/' }),
          }),
        }),
      })

      const timeoutStoreRef = setupApiStore(timeoutApi, undefined, {
        withoutTestLifecycles: true,
      })

      // Set up a mock handler for the endpoint
      server.use(
        http.get('https://example.com/data/', async () => {
          await delay(100)
          return HttpResponse.json('test data')
        }),
      )

      function Component() {
        const [trigger] = timeoutApi.endpoints.getData.useLazyQuery()
        const abortRef = useRef<(() => void) | undefined>(undefined)
        const [errorMsg, setErrorMsg] = useState('')

        const handleChange = () => {
          // Abort any previous request
          abortRef.current?.()

          // Trigger new request
          const result = trigger()

          // Store abort function for next call
          abortRef.current = () => {
            try {
              result.abort()
            } catch (err: any) {
              setErrorMsg(err.message)
            }
          }
        }

        return (
          <div>
            <input data-testid="input" onChange={handleChange} />
            <div data-testid="error">{errorMsg}</div>
          </div>
        )
      }

      render(<Component />, { wrapper: timeoutStoreRef.wrapper })

      const input = screen.getByTestId('input')

      // Trigger multiple rapid changes that will call abort() multiple times
      await user.type(input, 'abc')

      // Wait a bit to ensure any errors would have been caught
      await waitMs(200)

      // Should not have any error messages
      expect(screen.getByTestId('error').textContent).toBe('')
    })

    test('unwrapping the useLazyQuery trigger result does not throw on ConditionError and instead returns the aggregate error', async () => {
      function User() {
        const [getUser, { data, error }] =
          api.endpoints.getUserAndForceError.useLazyQuery()

        const [unwrappedError, setUnwrappedError] = useState<any>()

        const handleClick = async () => {
          const res = getUser(1)

          try {
            await res.unwrap()
          } catch (error) {
            setUnwrappedError(error)
          }
        }

        return (
          <div>
            <button onClick={handleClick}>Fetch User</button>
            <div data-testid="result">{JSON.stringify(data)}</div>
            <div data-testid="error">{JSON.stringify(error)}</div>
            <div data-testid="unwrappedError">
              {JSON.stringify(unwrappedError)}
            </div>
          </div>
        )
      }

      render(<User />, { wrapper: storeRef.wrapper })

      const fetchButton = screen.getByRole('button', { name: 'Fetch User' })
      fireEvent.click(fetchButton)
      fireEvent.click(fetchButton) // This technically dispatches a ConditionError, but we don't want to see that here. We want the real error to resolve.

      await waitFor(() => {
        const errorResult = screen.getByTestId('error')?.textContent
        const unwrappedErrorResult =
          screen.getByTestId('unwrappedError')?.textContent

        if (errorResult && unwrappedErrorResult) {
          expect(JSON.parse(errorResult)).toMatchObject({
            status: 500,
            data: null,
          })
          expect(JSON.parse(unwrappedErrorResult)).toMatchObject(
            JSON.parse(errorResult),
          )
        }
      })

      expect(screen.getByTestId('result').textContent).toBe('')
    })

    test('useLazyQuery does not throw on ConditionError and instead returns the aggregate result', async () => {
      function User() {
        const [getUser, { data, error }] = api.endpoints.getUser.useLazyQuery()

        const [unwrappedResult, setUnwrappedResult] = useState<
          undefined | { name: string }
        >()

        const handleClick = async () => {
          const res = getUser(1)

          const result = await res.unwrap()
          setUnwrappedResult(result)
        }

        return (
          <div>
            <button onClick={handleClick}>Fetch User</button>
            <div data-testid="result">{JSON.stringify(data)}</div>
            <div data-testid="error">{JSON.stringify(error)}</div>
            <div data-testid="unwrappedResult">
              {JSON.stringify(unwrappedResult)}
            </div>
          </div>
        )
      }

      render(<User />, { wrapper: storeRef.wrapper })

      const fetchButton = screen.getByRole('button', { name: 'Fetch User' })
      fireEvent.click(fetchButton)
      fireEvent.click(fetchButton) // This technically dispatches a ConditionError, but we don't want to see that here. We want the real result to resolve and ignore the error.

      await waitFor(() => {
        const dataResult = screen.getByTestId('error')?.textContent
        const unwrappedDataResult =
          screen.getByTestId('unwrappedResult')?.textContent

        if (dataResult && unwrappedDataResult) {
          expect(JSON.parse(dataResult)).toMatchObject({
            name: 'Timmy',
          })
          expect(JSON.parse(unwrappedDataResult)).toMatchObject(
            JSON.parse(dataResult),
          )
        }
      })

      expect(screen.getByTestId('error').textContent).toBe('')
    })

    test('useLazyQuery trigger promise returns the correctly updated data', async () => {
      const user = userEvent.setup()

      const LazyUnwrapUseEffect = () => {
        const [triggerGetIncrementedAmount, { isFetching, isSuccess, data }] =
          api.endpoints.getIncrementedAmount.useLazyQuery()

        type AmountData = { amount: number } | undefined

        const [triggerUpdate] = api.endpoints.triggerUpdatedAmount.useMutation()

        const [dataFromQuery, setDataFromQuery] =
          useState<AmountData>(undefined)
        const [dataFromTrigger, setDataFromTrigger] =
          useState<AmountData>(undefined)

        const handleLoad = async () => {
          try {
            const res = await triggerGetIncrementedAmount().unwrap()

            setDataFromTrigger(res) // adding client side state here will cause stale data
          } catch (error) {
            console.error('Error handling increment trigger', error)
          }
        }

        const handleMutate = async () => {
          try {
            await triggerUpdate()
            // Force the lazy trigger to refetch
            await handleLoad()
          } catch (error) {
            console.error('Error handling mutate trigger', error)
          }
        }

        useEffect(() => {
          // Intentionally copy to local state for comparison purposes
          setDataFromQuery(data)
        }, [data])

        let content: React.ReactNode | null = null

        if (isFetching) {
          content = <div className="loading">Loading</div>
        } else if (isSuccess) {
          content = (
            <div className="wrapper">
              <div>
                useEffect data: {dataFromQuery?.amount ?? 'No query amount'}
              </div>
              <div>
                Unwrap data: {dataFromTrigger?.amount ?? 'No trigger amount'}
              </div>
            </div>
          )
        }

        return (
          <div className="outer">
            <button onClick={() => handleLoad()}>Load Data</button>
            <button onClick={() => handleMutate()}>Update Data</button>
            {content}
          </div>
        )
      }

      render(<LazyUnwrapUseEffect />, { wrapper: storeRef.wrapper })

      // Kick off the initial fetch via lazy query trigger
      await user.click(screen.getByText('Load Data'))

      // We get back initial data, which should get copied into local state,
      // and also should come back as valid via the lazy trigger promise
      await waitFor(() => {
        expect(screen.getByText('useEffect data: 1')).toBeTruthy()
        expect(screen.getByText('Unwrap data: 1')).toBeTruthy()
      })

      // If we mutate and then re-run the lazy trigger afterwards...
      await user.click(screen.getByText('Update Data'))

      // We should see both sets of data agree (ie, the lazy trigger promise
      // should not return stale data or be out of sync with the hook).
      // Prior to PR #4651, this would fail because the trigger never updated properly.
      await waitFor(() => {
        expect(screen.getByText('useEffect data: 2')).toBeTruthy()
        expect(screen.getByText('Unwrap data: 2')).toBeTruthy()
      })
    })

    test('`reset` sets state back to original state', async () => {
      const user = userEvent.setup()

      function User() {
        const [getUser, { isSuccess, isUninitialized, reset }, _lastInfo] =
          api.endpoints.getUser.useLazyQuery()

        const handleFetchClick = async () => {
          await getUser(1).unwrap()
        }

        return (
          <div>
            <span>
              {isUninitialized
                ? 'isUninitialized'
                : isSuccess
                  ? 'isSuccess'
                  : 'other'}
            </span>
            <button onClick={handleFetchClick}>Fetch User</button>
            <button onClick={reset}>Reset</button>
          </div>
        )
      }

      render(<User />, { wrapper: storeRef.wrapper })

      await screen.findByText(/isUninitialized/i)
      expect(countObjectKeys(storeRef.store.getState().api.queries)).toBe(0)

      await user.click(screen.getByRole('button', { name: 'Fetch User' }))

      await screen.findByText(/isSuccess/i)
      expect(countObjectKeys(storeRef.store.getState().api.queries)).toBe(1)

      await user.click(
        screen.getByRole('button', {
          name: 'Reset',
        }),
      )

      await screen.findByText(/isUninitialized/i)
      expect(countObjectKeys(storeRef.store.getState().api.queries)).toBe(0)
    })
  })

  describe('useInfiniteQuery', () => {
    type Pokemon = {
      id: string
      name: string
    }

    const pokemonApi = createApi({
      baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
      endpoints: (builder) => ({
        getInfinitePokemon: builder.infiniteQuery<Pokemon, string, number>({
          infiniteQueryOptions: {
            initialPageParam: 0,
            getNextPageParam: (
              lastPage,
              allPages,
              lastPageParam,
              allPageParams,
            ) => lastPageParam + 1,
            getPreviousPageParam: (
              firstPage,
              allPages,
              firstPageParam,
              allPageParams,
            ) => {
              return firstPageParam > 0 ? firstPageParam - 1 : undefined
            },
          },
          query({ pageParam }) {
            return `https://example.com/listItems?page=${pageParam}`
          },
        }),
      }),
    })

    const pokemonApiWithRefetch = createApi({
      baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
      endpoints: (builder) => ({
        getInfinitePokemon: builder.infiniteQuery<Pokemon, string, number>({
          infiniteQueryOptions: {
            initialPageParam: 0,
            getNextPageParam: (
              lastPage,
              allPages,
              lastPageParam,
              allPageParams,
            ) => lastPageParam + 1,
            getPreviousPageParam: (
              firstPage,
              allPages,
              firstPageParam,
              allPageParams,
            ) => {
              return firstPageParam > 0 ? firstPageParam - 1 : undefined
            },
          },
          query({ pageParam }) {
            return `https://example.com/listItems?page=${pageParam}`
          },
        }),
      }),
      refetchOnMountOrArgChange: true,
    })

    function PokemonList({
      api,
      arg = 'fire',
      initialPageParam = 0,
    }: {
      api: typeof pokemonApi
      arg?: string
      initialPageParam?: number
    }) {
      const {
        data,
        isFetching,
        isUninitialized,
        fetchNextPage,
        fetchPreviousPage,
        refetch,
      } = api.useGetInfinitePokemonInfiniteQuery(arg, {
        initialPageParam,
      })

      const handlePreviousPage = async () => {
        const res = await fetchPreviousPage()
      }

      const handleNextPage = async () => {
        const res = await fetchNextPage()
      }

      const handleRefetch = async () => {
        const res = await refetch()
      }

      return (
        <div>
          <div data-testid="isUninitialized">{String(isUninitialized)}</div>
          <div data-testid="isFetching">{String(isFetching)}</div>
          <div>Type: {arg}</div>
          <div data-testid="data">
            {data?.pages.map((page, i: number | null | undefined) => (
              <div key={i}>{page.name}</div>
            ))}
          </div>
          <button data-testid="prevPage" onClick={() => handlePreviousPage()}>
            previousPage
          </button>
          <button data-testid="nextPage" onClick={() => handleNextPage()}>
            nextPage
          </button>
          <button data-testid="refetch" onClick={() => handleRefetch()}>
            refetch
          </button>
        </div>
      )
    }

    beforeEach(() => {
      server.use(
        http.get('https://example.com/listItems', ({ request }) => {
          const url = new URL(request.url)
          const pageString = url.searchParams.get('page')
          const pageNum = parseInt(pageString || '0')

          const results: Pokemon = {
            id: `${pageNum}`,
            name: `Pokemon ${pageNum}`,
          }

          return HttpResponse.json(results)
        }),
      )
    })

    test.each([
      ['no refetch', pokemonApi],
      ['with refetch', pokemonApiWithRefetch],
    ])(`useInfiniteQuery %s`, async (_, pokemonApi) => {
      const storeRef = setupApiStore(pokemonApi, undefined, {
        withoutTestLifecycles: true,
      })

      const { takeRender, render, getCurrentRender } = createRenderStream({
        snapshotDOM: true,
      })

      const checkNumQueries = (count: number) => {
        const cacheEntries = Object.keys(storeRef.store.getState().api.queries)
        const queries = cacheEntries.length

        expect(queries).toBe(count)
      }

      const checkEntryFlags = (
        arg: string,
        expectedFlags: Partial<InfiniteQueryResultFlags>,
      ) => {
        const selector = pokemonApi.endpoints.getInfinitePokemon.select(arg)
        const entry = selector(storeRef.store.getState())

        const actualFlags: InfiniteQueryResultFlags = {
          hasNextPage: false,
          hasPreviousPage: false,
          isFetchingNextPage: false,
          isFetchingPreviousPage: false,
          isFetchNextPageError: false,
          isFetchPreviousPageError: false,
          ...expectedFlags,
        }

        expect(entry).toMatchObject(actualFlags)
      }

      const checkPageRows = (
        withinDOM: () => SyncScreen,
        type: string,
        ids: number[],
      ) => {
        expect(withinDOM().getByText(`Type: ${type}`)).toBeTruthy()
        for (const id of ids) {
          expect(withinDOM().getByText(`Pokemon ${id}`)).toBeTruthy()
        }
      }

      async function waitForFetch(handleExtraMiddleRender = false) {
        {
          const { withinDOM } = await takeRender()
          expect(withinDOM().getByTestId('isFetching').textContent).toBe('true')
        }

        // We seem to do an extra render when fetching an uninitialized entry
        if (handleExtraMiddleRender) {
          {
            const { withinDOM } = await takeRender()
            expect(withinDOM().getByTestId('isFetching').textContent).toBe(
              'true',
            )
          }
        }

        {
          // Second fetch complete
          const { withinDOM } = await takeRender()
          expect(withinDOM().getByTestId('isFetching').textContent).toBe(
            'false',
          )
        }
      }

      const utils = render(<PokemonList api={pokemonApi} />, {
        wrapper: storeRef.wrapper,
      })
      checkNumQueries(1)
      checkEntryFlags('fire', {})
      await waitForFetch(true)
      checkNumQueries(1)
      checkPageRows(getCurrentRender().withinDOM, 'fire', [0])
      checkEntryFlags('fire', {
        hasNextPage: true,
      })

      fireEvent.click(screen.getByTestId('nextPage'), {})
      checkEntryFlags('fire', {
        hasNextPage: true,
        isFetchingNextPage: true,
      })
      await waitForFetch()
      checkPageRows(getCurrentRender().withinDOM, 'fire', [0, 1])
      checkEntryFlags('fire', {
        hasNextPage: true,
      })

      fireEvent.click(screen.getByTestId('nextPage'))
      await waitForFetch()
      checkPageRows(getCurrentRender().withinDOM, 'fire', [0, 1, 2])

      utils.rerender(
        <PokemonList api={pokemonApi} arg="water" initialPageParam={3} />,
      )
      checkEntryFlags('water', {})
      await waitForFetch(true)
      checkNumQueries(2)
      checkPageRows(getCurrentRender().withinDOM, 'water', [3])
      checkEntryFlags('water', {
        hasNextPage: true,
        hasPreviousPage: true,
      })

      fireEvent.click(screen.getByTestId('nextPage'))
      checkEntryFlags('water', {
        hasNextPage: true,
        hasPreviousPage: true,
        isFetchingNextPage: true,
      })
      await waitForFetch()
      checkPageRows(getCurrentRender().withinDOM, 'water', [3, 4])
      checkEntryFlags('water', {
        hasNextPage: true,
        hasPreviousPage: true,
      })

      fireEvent.click(screen.getByTestId('prevPage'))
      checkEntryFlags('water', {
        hasNextPage: true,
        hasPreviousPage: true,
        isFetchingPreviousPage: true,
      })
      await waitForFetch()
      checkPageRows(getCurrentRender().withinDOM, 'water', [2, 3, 4])
      checkEntryFlags('water', {
        hasNextPage: true,
        hasPreviousPage: true,
      })

      fireEvent.click(screen.getByTestId('refetch'))
      checkEntryFlags('water', {
        hasNextPage: true,
        hasPreviousPage: true,
      })
      await waitForFetch()
      checkPageRows(getCurrentRender().withinDOM, 'water', [2, 3, 4])
      checkEntryFlags('water', {
        hasNextPage: true,
        hasPreviousPage: true,
      })
    })

    test('Object page params does not keep forcing refetching', async () => {
      type Project = {
        id: number
        createdAt: string
      }

      type ProjectsResponse = {
        projects: Project[]
        numFound: number
        serverTime: string
      }

      interface ProjectsInitialPageParam {
        offset: number
        limit: number
      }

      const apiWithInfiniteScroll = createApi({
        baseQuery: fetchBaseQuery({ baseUrl: 'https://example.com/' }),
        endpoints: (builder) => ({
          projectsLimitOffset: builder.infiniteQuery<
            ProjectsResponse,
            void,
            ProjectsInitialPageParam
          >({
            infiniteQueryOptions: {
              initialPageParam: {
                offset: 0,
                limit: 20,
              },
              getNextPageParam: (
                lastPage,
                allPages,
                lastPageParam,
                allPageParams,
              ) => {
                const nextOffset = lastPageParam.offset + lastPageParam.limit
                const remainingItems = lastPage?.numFound - nextOffset

                if (remainingItems <= 0) {
                  return undefined
                }

                return {
                  ...lastPageParam,
                  offset: nextOffset,
                }
              },
              getPreviousPageParam: (
                firstPage,
                allPages,
                firstPageParam,
                allPageParams,
              ) => {
                const prevOffset = firstPageParam.offset - firstPageParam.limit
                if (prevOffset < 0) return undefined

                return {
                  ...firstPageParam,
                  offset: firstPageParam.offset - firstPageParam.limit,
                }
              },
            },
            query: ({ pageParam }) => {
              const { offset, limit } = pageParam
              return {
                url: `https://example.com/api/projectsLimitOffset?offset=${offset}&limit=${limit}`,
                method: 'GET',
              }
            },
          }),
        }),
      })

      const projects = Array.from({ length: 50 }, (_, i) => {
        return {
          id: i,
          createdAt: Date.now() + i * 1000,
        }
      })

      let numRequests = 0

      server.use(
        http.get(
          'https://example.com/api/projectsLimitOffset',
          async ({ request }) => {
            const url = new URL(request.url)
            const limit = parseInt(url.searchParams.get('limit') ?? '5', 10)
            let offset = parseInt(url.searchParams.get('offset') ?? '0', 10)

            numRequests++

            if (isNaN(offset) || offset < 0) {
              offset = 0
            }
            if (isNaN(limit) || limit <= 0) {
              return HttpResponse.json(
                {
                  message:
                    "Invalid 'limit' parameter. It must be a positive integer.",
                } as any,
                { status: 400 },
              )
            }

            const result = projects.slice(offset, offset + limit)

            await delay(10)
            return HttpResponse.json({
              projects: result,
              serverTime: Date.now(),
              numFound: projects.length,
            })
          },
        ),
      )

      function LimitOffsetExample() {
        const {
          data,
          hasPreviousPage,
          hasNextPage,
          error,
          isFetching,
          isLoading,
          isError,
          fetchNextPage,
          fetchPreviousPage,
          isFetchingNextPage,
          isFetchingPreviousPage,
          status,
        } = apiWithInfiniteScroll.useProjectsLimitOffsetInfiniteQuery(
          undefined,
          {
            initialPageParam: {
              offset: 10,
              limit: 10,
            },
          },
        )

        const [counter, setCounter] = useState(0)

        const combinedData = useMemo(() => {
          return data?.pages?.map((item) => item?.projects)?.flat()
        }, [data])

        return (
          <div>
            <h2>Limit and Offset Infinite Scroll</h2>
            <button onClick={() => setCounter((c) => c + 1)}>Increment</button>
            <div>Counter: {counter}</div>
            {isLoading ? (
              <p>Loading...</p>
            ) : isError ? (
              <span>Error: {error.message}</span>
            ) : null}

            <>
              <div>
                <button
                  onClick={() => fetchPreviousPage()}
                  disabled={!hasPreviousPage || isFetchingPreviousPage}
                >
                  {isFetchingPreviousPage
                    ? 'Loading more...'
                    : hasPreviousPage
                      ? 'Load Older'
                      : 'Nothing more to load'}
                </button>
              </div>
              <div data-testid="projects">
                {combinedData?.map((project, index, arr) => {
                  return (
                    <div key={project.id}>
                      <div data-testid="project">
                        <div>{`Project ${project.id} (created at: ${project.createdAt})`}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
              <div>
                <button
                  onClick={() => fetchNextPage()}
                  disabled={!hasNextPage || isFetchingNextPage}
                >
                  {isFetchingNextPage
                    ? 'Loading more...'
                    : hasNextPage
                      ? 'Load Newer'
                      : 'Nothing more to load'}
                </button>
              </div>
              <div>
                {isFetching && !isFetchingPreviousPage && !isFetchingNextPage
                  ? 'Background Updating...'
                  : null}
              </div>
            </>
          </div>
        )
      }

      const storeRef = setupApiStore(
        apiWithInfiniteScroll,
        { ...actionsReducer },
        {
          withoutTestLifecycles: true,
        },
      )

      const { takeRender, render, totalRenderCount } = createRenderStream({
        snapshotDOM: true,
      })

      render(<LimitOffsetExample />, {
        wrapper: storeRef.wrapper,
      })

      {
        const { withinDOM } = await takeRender()
        withinDOM().getByText('Counter: 0')
        withinDOM().getByText('Loading...')
      }

      {
        const { withinDOM } = await takeRender()
        withinDOM().getByText('Counter: 0')
        withinDOM().getByText('Loading...')
      }

      {
        const { withinDOM } = await takeRender()
        withinDOM().getByText('Counter: 0')

        expect(withinDOM().getAllByTestId('project').length).toBe(10)
        expect(withinDOM().queryByTestId('Loading...')).toBeNull()
      }

      expect(totalRenderCount()).toBe(3)
      expect(numRequests).toBe(1)
    })

    test.each([
      ['skip token', true],
      ['skip option', false],
    ])(
      'useInfiniteQuery hook does not fetch when skipped via %s',
      async (_, useSkipToken) => {
        function Pokemon() {
          const [value, setValue] = useState(0)

          const shouldFetch = value > 0

          const arg = shouldFetch || !useSkipToken ? 'fire' : skipToken
          const skip = useSkipToken ? undefined : shouldFetch ? undefined : true

          const { isFetching } = pokemonApi.useGetInfinitePokemonInfiniteQuery(
            arg,
            {
              skip,
            },
          )
          getRenderCount = useRenderCounter()

          return (
            <div>
              <div data-testid="isFetching">{String(isFetching)}</div>
              <button onClick={() => setValue((val) => val + 1)}>
                Increment value
              </button>
            </div>
          )
        }

        render(<Pokemon />, { wrapper: storeRef.wrapper })
        expect(getRenderCount()).toBe(1)

        await waitFor(() =>
          expect(screen.getByTestId('isFetching').textContent).toBe('false'),
        )
        fireEvent.click(screen.getByText('Increment value'))
        await waitFor(() =>
          expect(screen.getByTestId('isFetching').textContent).toBe('true'),
        )
        expect(getRenderCount()).toBe(2)
      },
    )

    test('useInfiniteQuery hook option refetchCachedPages: false only refetches first page', async () => {
      const storeRef = setupApiStore(pokemonApi, undefined, {
        withoutTestLifecycles: true,
      })

      function PokemonList() {
        const { data, fetchNextPage, refetch } =
          pokemonApi.useGetInfinitePokemonInfiniteQuery('fire', {
            refetchCachedPages: false,
          })

        return (
          <div>
            <div data-testid="data">
              {data?.pages.map((page, i) => (
                <div key={i} data-testid={`page-${i}`}>
                  {page.name}
                </div>
              ))}
            </div>
            <button data-testid="nextPage" onClick={() => fetchNextPage()}>
              Next Page
            </button>
            <button data-testid="refetch" onClick={() => refetch()}>
              Refetch
            </button>
          </div>
        )
      }

      render(<PokemonList />, { wrapper: storeRef.wrapper })

      // Wait for initial page to load
      await waitFor(() => {
        expect(screen.getByTestId('page-0').textContent).toBe('Pokemon 0')
      })

      // Fetch second page
      fireEvent.click(screen.getByTestId('nextPage'))
      await waitFor(() => {
        expect(screen.getByTestId('page-1').textContent).toBe('Pokemon 1')
      })

      // Fetch third page
      fireEvent.click(screen.getByTestId('nextPage'))
      await waitFor(() => {
        expect(screen.getByTestId('page-2').textContent).toBe('Pokemon 2')
      })

      // Now we have 3 pages. Refetch with refetchCachedPages: false should only refetch page 0
      fireEvent.click(screen.getByTestId('refetch'))

      await waitFor(
        () => {
          // Should only have 1 page
          expect(screen.queryByTestId('page-0')).toBeTruthy()
          expect(screen.queryByTestId('page-1')).toBeNull()
          expect(screen.queryByTestId('page-2')).toBeNull()
        },
        { timeout: 1000 },
      )

      // Verify we only have 1 page (not refetched all)
      const pages = screen.getAllByTestId(/^page-/)
      expect(pages).toHaveLength(1)
    })

    test('useInfiniteQuery refetch() method option refetchCachedPages: false only refetches first page', async () => {
      const storeRef = setupApiStore(pokemonApi, undefined, {
        withoutTestLifecycles: true,
      })

      function PokemonList() {
        const { data, fetchNextPage, refetch } =
          pokemonApi.useGetInfinitePokemonInfiniteQuery('fire')

        return (
          <div>
            <div data-testid="data">
              {data?.pages.map((page, i) => (
                <div key={i} data-testid={`page-${i}`}>
                  {page.name}
                </div>
              ))}
            </div>
            <button data-testid="nextPage" onClick={() => fetchNextPage()}>
              Next Page
            </button>
            <button
              data-testid="refetch"
              onClick={() => refetch({ refetchCachedPages: false })}
            >
              Refetch
            </button>
          </div>
        )
      }

      render(<PokemonList />, { wrapper: storeRef.wrapper })

      // Wait for initial page to load
      await waitFor(() => {
        expect(screen.getByTestId('page-0').textContent).toBe('Pokemon 0')
      })

      // Fetch second page
      fireEvent.click(screen.getByTestId('nextPage'))
      await waitFor(() => {
        expect(screen.getByTestId('page-1').textContent).toBe('Pokemon 1')
      })

      // Fetch third page
      fireEvent.click(screen.getByTestId('nextPage'))
      await waitFor(() => {
        expect(screen.getByTestId('page-2').textContent).toBe('Pokemon 2')
      })

      // Now we have 3 pages. Refetch with refetchCachedPages: false should only refetch page 0
      fireEvent.click(screen.getByTestId('refetch'))

      await waitFor(() => {
        // Should only have 1 page
        expect(screen.queryByTestId('page-0')).toBeTruthy()
        expect(screen.queryByTestId('page-1')).toBeNull()
        expect(screen.queryByTestId('page-2')).toBeNull()
      })

      // Verify we only have 1 page (not refetched all)
      const pages = screen.getAllByTestId(/^page-/)
      expect(pages).toHaveLength(1)
    })
  })

  describe('useMutation', () => {
    test('useMutation hook sets and unsets the isLoading flag when running', async () => {
      function User() {
        const [updateUser, { isLoading }] =
          api.endpoints.updateUser.useMutation()

        return (
          <div>
            <div data-testid="isLoading">{String(isLoading)}</div>
            <button onClick={() => updateUser({ name: 'Banana' })}>
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
      await waitFor(() =>
        expect(screen.getByTestId('isLoading').textContent).toBe('true'),
      )
      await waitFor(() =>
        expect(screen.getByTestId('isLoading').textContent).toBe('false'),
      )
    })

    test('useMutation hook sets data to the resolved response on success', async () => {
      const result = { name: 'Banana' }

      function User() {
        const [updateUser, { data }] = api.endpoints.updateUser.useMutation()

        return (
          <div>
            <div data-testid="result">{JSON.stringify(data)}</div>
            <button onClick={() => updateUser({ name: 'Banana' })}>
              Update User
            </button>
          </div>
        )
      }

      render(<User />, { wrapper: storeRef.wrapper })

      fireEvent.click(screen.getByText('Update User'))
      await waitFor(() =>
        expect(screen.getByTestId('result').textContent).toBe(
          JSON.stringify(result),
        ),
      )
    })

    test('useMutation hook callback returns various properties to handle the result', async () => {
      const user = userEvent.setup()

      function User() {
        const [updateUser] = api.endpoints.updateUser.useMutation()
        const [successMsg, setSuccessMsg] = useState('')
        const [errMsg, setErrMsg] = useState('')
        const [isAborted, setIsAborted] = useState(false)

        const handleClick = async () => {
          const res = updateUser({ name: 'Banana' })

          // abort the mutation immediately to force an error
          res.abort()
          res
            .unwrap()
            .then((result) => {
              setSuccessMsg(`Successfully updated user ${result.name}`)
            })
            .catch((err) => {
              setErrMsg(
                `An error has occurred updating user ${res.arg.originalArgs.name}`,
              )
              if (err.name === 'AbortError') {
                setIsAborted(true)
              }
            })
        }

        return (
          <div>
            <button onClick={handleClick}>Update User and abort</button>
            <div>{successMsg}</div>
            <div>{errMsg}</div>
            <div>{isAborted ? 'Request was aborted' : ''}</div>
          </div>
        )
      }

      render(<User />, { wrapper: storeRef.wrapper })
      expect(screen.queryByText(/An error has occurred/i)).toBeNull()
      expect(screen.queryByText(/Successfully updated user/i)).toBeNull()
      expect(screen.queryByText('Request was aborted')).toBeNull()

      await user.click(
        screen.getByRole('button', { name: 'Update User and abort' }),
      )
      await screen.findByText('An error has occurred updating user Banana')
      expect(screen.queryByText(/Successfully updated user/i)).toBeNull()
      screen.getByText('Request was aborted')
    })

    test('useMutation return value contains originalArgs', async () => {
      const { result } = renderHook(
        () => api.endpoints.updateUser.useMutation(),
        {
          wrapper: storeRef.wrapper,
        },
      )
      const arg = { name: 'Foo' }

      const firstRenderResult = result.current
      expect(firstRenderResult[1].originalArgs).toBe(undefined)
      await act(async () => {
        await firstRenderResult[0](arg)
      })
      const secondRenderResult = result.current
      expect(firstRenderResult[1].originalArgs).toBe(undefined)
      expect(secondRenderResult[1].originalArgs).toBe(arg)
    })

    test('`reset` sets state back to original state', async () => {
      const user = userEvent.setup()

      function User() {
        const [updateUser, result] = api.endpoints.updateUser.useMutation()
        return (
          <>
            <span>
              {result.isUninitialized
                ? 'isUninitialized'
                : result.isSuccess
                  ? 'isSuccess'
                  : 'other'}
            </span>
            <span>{result.originalArgs?.name}</span>
            <button onClick={() => updateUser({ name: 'Yay' })}>trigger</button>
            <button onClick={result.reset}>reset</button>
          </>
        )
      }
      render(<User />, { wrapper: storeRef.wrapper })

      await screen.findByText(/isUninitialized/i)
      expect(screen.queryByText('Yay')).toBeNull()
      expect(countObjectKeys(storeRef.store.getState().api.mutations)).toBe(0)

      await user.click(screen.getByRole('button', { name: 'trigger' }))

      await screen.findByText(/isSuccess/i)
      expect(screen.queryByText('Yay')).not.toBeNull()
      expect(countObjectKeys(storeRef.store.getState().api.mutations)).toBe(1)

      await user.click(screen.getByRole('button', { name: 'reset' }))

      await screen.findByText(/isUninitialized/i)
      expect(screen.queryByText('Yay')).toBeNull()
      expect(countObjectKeys(storeRef.store.getState().api.mutations)).toBe(0)
    })
  })

  describe('usePrefetch', () => {
    test('usePrefetch respects force arg', async () => {
      const user = userEvent.setup()

      const { usePrefetch } = api
      const USER_ID = 4
      function User() {
        const { isFetching } = api.endpoints.getUser.useQuery(USER_ID)
        const prefetchUser = usePrefetch('getUser', { force: true })

        return (
          <div>
            <div data-testid="isFetching">{String(isFetching)}</div>
            <button
              onMouseEnter={() => prefetchUser(USER_ID, { force: true })}
              data-testid="highPriority"
            >
              High priority action intent
            </button>
          </div>
        )
      }

      render(<User />, { wrapper: storeRef.wrapper })

      // Resolve initial query
      await waitFor(() =>
        expect(screen.getByTestId('isFetching').textContent).toBe('false'),
      )

      await user.hover(screen.getByTestId('highPriority'))

      expect(
        api.endpoints.getUser.select(USER_ID)(storeRef.store.getState() as any),
      ).toEqual({
        data: { name: 'Timmy' },
        endpointName: 'getUser',
        error: undefined,
        fulfilledTimeStamp: expect.any(Number),
        isError: false,
        isLoading: true,
        isSuccess: false,
        isUninitialized: false,
        originalArgs: USER_ID,
        requestId: expect.any(String),
        startedTimeStamp: expect.any(Number),
        status: QueryStatus.pending,
      })

      await waitFor(() =>
        expect(screen.getByTestId('isFetching').textContent).toBe('false'),
      )

      expect(
        api.endpoints.getUser.select(USER_ID)(storeRef.store.getState() as any),
      ).toEqual({
        data: { name: 'Timmy' },
        endpointName: 'getUser',
        fulfilledTimeStamp: expect.any(Number),
        isError: false,
        isLoading: false,
        isSuccess: true,
        isUninitialized: false,
        originalArgs: USER_ID,
        requestId: expect.any(String),
        startedTimeStamp: expect.any(Number),
        status: QueryStatus.fulfilled,
      })
    })

    test('usePrefetch does not make an additional request if already in the cache and force=false', async () => {
      const user = userEvent.setup()

      const { usePrefetch } = api
      const USER_ID = 2

      function User() {
        // Load the initial query
        const { isFetching } = api.endpoints.getUser.useQuery(USER_ID)
        const prefetchUser = usePrefetch('getUser', { force: false })

        return (
          <div>
            <div data-testid="isFetching">{String(isFetching)}</div>
            <button
              onMouseEnter={() => prefetchUser(USER_ID)}
              data-testid="lowPriority"
            >
              Low priority user action intent
            </button>
          </div>
        )
      }

      render(<User />, { wrapper: storeRef.wrapper })

      // Let the initial query resolve
      await waitFor(() =>
        expect(screen.getByTestId('isFetching').textContent).toBe('false'),
      )
      // Try to prefetch what we just loaded
      await user.hover(screen.getByTestId('lowPriority'))

      expect(
        api.endpoints.getUser.select(USER_ID)(storeRef.store.getState() as any),
      ).toEqual({
        data: { name: 'Timmy' },
        endpointName: 'getUser',
        fulfilledTimeStamp: expect.any(Number),
        isError: false,
        isLoading: false,
        isSuccess: true,
        isUninitialized: false,
        originalArgs: USER_ID,
        requestId: expect.any(String),
        startedTimeStamp: expect.any(Number),
        status: QueryStatus.fulfilled,
      })

      await waitMs()

      expect(
        api.endpoints.getUser.select(USER_ID)(storeRef.store.getState() as any),
      ).toEqual({
        data: { name: 'Timmy' },
        endpointName: 'getUser',
        fulfilledTimeStamp: expect.any(Number),
        isError: false,
        isLoading: false,
        isSuccess: true,
        isUninitialized: false,
        originalArgs: USER_ID,
        requestId: expect.any(String),
        startedTimeStamp: expect.any(Number),
        status: QueryStatus.fulfilled,
      })
    })

    test('usePrefetch respects ifOlderThan when it evaluates to true', async () => {
      const user = userEvent.setup()

      const { usePrefetch } = api
      const USER_ID = 47

      function User() {
        // Load the initial query
        const { isFetching } = api.endpoints.getUser.useQuery(USER_ID)
        const prefetchUser = usePrefetch('getUser', { ifOlderThan: 0.2 })

        return (
          <div>
            <div data-testid="isFetching">{String(isFetching)}</div>
            <button
              onMouseEnter={() => prefetchUser(USER_ID)}
              data-testid="lowPriority"
            >
              Low priority user action intent
            </button>
          </div>
        )
      }

      render(<User />, { wrapper: storeRef.wrapper })

      await waitFor(() =>
        expect(screen.getByTestId('isFetching').textContent).toBe('false'),
      )

      // Wait 400ms, making it respect ifOlderThan
      await waitMs(400)

      // This should run the query being that we're past the threshold
      await user.hover(screen.getByTestId('lowPriority'))

      expect(
        api.endpoints.getUser.select(USER_ID)(storeRef.store.getState() as any),
      ).toEqual({
        data: { name: 'Timmy' },
        endpointName: 'getUser',
        fulfilledTimeStamp: expect.any(Number),
        isError: false,
        isLoading: true,
        isSuccess: false,
        isUninitialized: false,
        originalArgs: USER_ID,
        requestId: expect.any(String),
        startedTimeStamp: expect.any(Number),
        status: QueryStatus.pending,
      })

      await waitFor(() =>
        expect(screen.getByTestId('isFetching').textContent).toBe('false'),
      )

      expect(
        api.endpoints.getUser.select(USER_ID)(storeRef.store.getState() as any),
      ).toEqual({
        data: { name: 'Timmy' },
        endpointName: 'getUser',
        fulfilledTimeStamp: expect.any(Number),
        isError: false,
        isLoading: false,
        isSuccess: true,
        isUninitialized: false,
        originalArgs: USER_ID,
        requestId: expect.any(String),
        startedTimeStamp: expect.any(Number),
        status: QueryStatus.fulfilled,
      })
    })

    test('usePrefetch returns the last success result when ifOlderThan evaluates to false', async () => {
      const user = userEvent.setup()

      const { usePrefetch } = api
      const USER_ID = 2

      function User() {
        // Load the initial query
        const { isFetching } = api.endpoints.getUser.useQuery(USER_ID)
        const prefetchUser = usePrefetch('getUser', { ifOlderThan: 10 })

        return (
          <div>
            <div data-testid="isFetching">{String(isFetching)}</div>
            <button
              onMouseEnter={() => prefetchUser(USER_ID)}
              data-testid="lowPriority"
            >
              Low priority user action intent
            </button>
          </div>
        )
      }

      render(<User />, { wrapper: storeRef.wrapper })

      await waitFor(() =>
        expect(screen.getByTestId('isFetching').textContent).toBe('false'),
      )
      await waitMs()

      // Get a snapshot of the last result
      const latestQueryData = api.endpoints.getUser.select(USER_ID)(
        storeRef.store.getState() as any,
      )

      await user.hover(screen.getByTestId('lowPriority'))

      //  Serve up the result from the cache being that the condition wasn't met
      expect(
        api.endpoints.getUser.select(USER_ID)(storeRef.store.getState() as any),
      ).toEqual(latestQueryData)
    })

    test('usePrefetch executes a query even if conditions fail when the cache is empty', async () => {
      const user = userEvent.setup()

      const { usePrefetch } = api
      const USER_ID = 2

      function User() {
        const prefetchUser = usePrefetch('getUser', { ifOlderThan: 10 })

        return (
          <div>
            <button
              onMouseEnter={() => prefetchUser(USER_ID)}
              data-testid="lowPriority"
            >
              Low priority user action intent
            </button>
          </div>
        )
      }

      render(<User />, { wrapper: storeRef.wrapper })

      await user.hover(screen.getByTestId('lowPriority'))

      expect(
        api.endpoints.getUser.select(USER_ID)(storeRef.store.getState()),
      ).toEqual({
        endpointName: 'getUser',
        isError: false,
        isLoading: true,
        isSuccess: false,
        isUninitialized: false,
        originalArgs: USER_ID,
        requestId: expect.any(String),
        startedTimeStamp: expect.any(Number),
        status: 'pending',
      })
    })

    it('should create subscription when hook mounts after prefetch', async () => {
      const api = createApi({
        baseQuery: async () => ({ data: 'test data' }),
        endpoints: (build) => ({
          getTest: build.query<string, void>({
            query: () => '',
          }),
        }),
      })
      const storeRef = setupApiStore(api, undefined, { withoutListeners: true })

      // 1. Prefetch data (no subscription)
      await storeRef.store.dispatch(api.util.prefetch('getTest', undefined))

      // Verify data is cached
      await waitFor(() => {
        let state = storeRef.store.getState()
        expect(state.api.queries['getTest(undefined)']?.data).toBe('test data')
      })

      // Verify no subscription exists
      const subscriptions = storeRef.store.dispatch(
        api.internalActions.internal_getRTKQSubscriptions(),
      ) as any
      expect(subscriptions.getSubscriptionCount('getTest(undefined)')).toBe(0)

      // 2. Mount component with useQuery hook
      function TestComponent() {
        const result = api.endpoints.getTest.useQuery()
        return <div>{result.data}</div>
      }

      const { unmount } = render(<TestComponent />, {
        wrapper: storeRef.wrapper,
      })

      // Wait for hook to initialize
      await waitFor(() => {
        // EXPECTED: Subscription should be created
        expect(subscriptions.getSubscriptionCount('getTest(undefined)')).toBe(1)
      })

      // 3. Verify data is still available
      let state = storeRef.store.getState()
      expect(state.api.queries['getTest(undefined)']?.data).toBe('test data')

      // 4. Unmount and verify subscription is removed
      unmount()

      await waitFor(() => {
        expect(subscriptions.getSubscriptionCount('getTest(undefined)')).toBe(0)
      })
    })
  })

  describe('useQuery and useMutation invalidation behavior', () => {
    const api = createApi({
      baseQuery: fetchBaseQuery({ baseUrl: 'https://example.com' }),
      tagTypes: ['User'],
      endpoints: (build) => ({
        checkSession: build.query<any, void>({
          query: () => '/me',
          providesTags: ['User'],
        }),
        login: build.mutation<any, any>({
          query: () => ({ url: '/login', method: 'POST' }),
          invalidatesTags: ['User'],
        }),
      }),
    })

    const storeRef = setupApiStore(api, { ...actionsReducer })
    test('initially failed useQueries that provide an tag will refetch after a mutation invalidates it', async () => {
      const checkSessionData = { name: 'matt' }
      server.use(
        http.get(
          'https://example.com/me',
          () => {
            return HttpResponse.json(null, { status: 500 })
          },
          { once: true },
        ),
        http.get('https://example.com/me', () => {
          return HttpResponse.json(checkSessionData)
        }),
        http.post('https://example.com/login', () => {
          return HttpResponse.json(null, { status: 200 })
        }),
      )
      let data, isLoading, isError
      function User() {
        ;({ data, isError, isLoading } = api.endpoints.checkSession.useQuery())
        const [login, { isLoading: loginLoading }] =
          api.endpoints.login.useMutation()

        return (
          <div>
            <div data-testid="isLoading">{String(isLoading)}</div>
            <div data-testid="isError">{String(isError)}</div>
            <div data-testid="user">{JSON.stringify(data)}</div>
            <div data-testid="loginLoading">{String(loginLoading)}</div>
            <button onClick={() => login(null)}>Login</button>
          </div>
        )
      }

      render(<User />, { wrapper: storeRef.wrapper })
      await waitFor(() =>
        expect(screen.getByTestId('isLoading').textContent).toBe('true'),
      )
      await waitFor(() =>
        expect(screen.getByTestId('isLoading').textContent).toBe('false'),
      )
      await waitFor(() =>
        expect(screen.getByTestId('isError').textContent).toBe('true'),
      )
      await waitFor(() =>
        expect(screen.getByTestId('user').textContent).toBe(''),
      )

      fireEvent.click(screen.getByRole('button', { name: /Login/i }))

      await waitFor(() =>
        expect(screen.getByTestId('loginLoading').textContent).toBe('true'),
      )
      await waitFor(() =>
        expect(screen.getByTestId('loginLoading').textContent).toBe('false'),
      )
      // login mutation will cause the original errored out query to refire, clearing the error and setting the user
      await waitFor(() =>
        expect(screen.getByTestId('isError').textContent).toBe('false'),
      )
      await waitFor(() =>
        expect(screen.getByTestId('user').textContent).toBe(
          JSON.stringify(checkSessionData),
        ),
      )

      const { checkSession, login } = api.endpoints
      expect(storeRef.store.getState().actions).toMatchSequence(
        api.internalActions.middlewareRegistered.match,
        checkSession.matchPending,
        checkSession.matchRejected,
        login.matchPending,
        login.matchFulfilled,
        checkSession.matchPending,
        checkSession.matchFulfilled,
      )
    })
  })
})

describe('hooks with createApi defaults set', () => {
  const defaultApi = createApi({
    baseQuery: async (arg: any) => {
      await waitMs()
      if ('amount' in arg?.body) {
        amount += 1
      }
      return {
        data: arg?.body
          ? { ...arg.body, ...(amount ? { amount } : {}) }
          : undefined,
      }
    },
    endpoints: (build) => ({
      getIncrementedAmount: build.query<any, void>({
        query: () => ({
          url: '',
          body: {
            amount,
          },
        }),
      }),
    }),
    refetchOnMountOrArgChange: true,
  })

  const storeRef = setupApiStore(defaultApi)
  test('useQuery hook respects refetchOnMountOrArgChange: true when set in createApi options', async () => {
    let data, isLoading, isFetching

    function User() {
      ;({ data, isLoading } =
        defaultApi.endpoints.getIncrementedAmount.useQuery())
      return (
        <div>
          <div data-testid="isLoading">{String(isLoading)}</div>
          <div data-testid="amount">{String(data?.amount)}</div>
        </div>
      )
    }

    const { unmount } = render(<User />, { wrapper: storeRef.wrapper })

    await waitFor(() =>
      expect(screen.getByTestId('isLoading').textContent).toBe('true'),
    )
    await waitFor(() =>
      expect(screen.getByTestId('isLoading').textContent).toBe('false'),
    )

    await waitFor(() =>
      expect(screen.getByTestId('amount').textContent).toBe('1'),
    )

    unmount()

    function OtherUser() {
      ;({ data, isFetching } =
        defaultApi.endpoints.getIncrementedAmount.useQuery(undefined, {
          refetchOnMountOrArgChange: true,
        }))
      return (
        <div>
          <div data-testid="isFetching">{String(isFetching)}</div>
          <div data-testid="amount">{String(data?.amount)}</div>
        </div>
      )
    }

    render(<OtherUser />, { wrapper: storeRef.wrapper })
    // Let's make sure we actually fetch, and we increment
    await waitFor(() =>
      expect(screen.getByTestId('isFetching').textContent).toBe('true'),
    )
    await waitFor(() =>
      expect(screen.getByTestId('isFetching').textContent).toBe('false'),
    )

    await waitFor(() =>
      expect(screen.getByTestId('amount').textContent).toBe('2'),
    )
  })

  test('useQuery hook overrides default refetchOnMountOrArgChange: false that was set by createApi', async () => {
    let data, isLoading, isFetching

    function User() {
      ;({ data, isLoading } =
        defaultApi.endpoints.getIncrementedAmount.useQuery())
      return (
        <div>
          <div data-testid="isLoading">{String(isLoading)}</div>
          <div data-testid="amount">{String(data?.amount)}</div>
        </div>
      )
    }

    let { unmount } = render(<User />, { wrapper: storeRef.wrapper })

    await waitFor(() =>
      expect(screen.getByTestId('isLoading').textContent).toBe('true'),
    )
    await waitFor(() =>
      expect(screen.getByTestId('isLoading').textContent).toBe('false'),
    )

    await waitFor(() =>
      expect(screen.getByTestId('amount').textContent).toBe('1'),
    )

    unmount()

    function OtherUser() {
      ;({ data, isFetching } =
        defaultApi.endpoints.getIncrementedAmount.useQuery(undefined, {
          refetchOnMountOrArgChange: false,
        }))
      return (
        <div>
          <div data-testid="isFetching">{String(isFetching)}</div>
          <div data-testid="amount">{String(data?.amount)}</div>
        </div>
      )
    }

    render(<OtherUser />, { wrapper: storeRef.wrapper })

    await waitFor(() =>
      expect(screen.getByTestId('isFetching').textContent).toBe('false'),
    )
    await waitFor(() =>
      expect(screen.getByTestId('amount').textContent).toBe('1'),
    )
  })

  describe('selectFromResult (query) behaviors', () => {
    let startingId = 3
    const initialPosts = [
      { id: 1, name: 'A sample post', fetched_at: new Date().toUTCString() },
      {
        id: 2,
        name: 'A post about rtk-query',
        fetched_at: new Date().toUTCString(),
      },
    ]
    let posts = [] as typeof initialPosts

    beforeEach(() => {
      startingId = 3
      posts = [...initialPosts]

      const handlers = [
        http.get('https://example.com/posts', () => {
          return HttpResponse.json(posts)
        }),
        http.put<{ id: string }, Partial<Post>>(
          'https://example.com/post/:id',
          async ({ request, params }) => {
            const body = await request.json()
            const id = Number(params.id)
            const idx = posts.findIndex((post) => post.id === id)

            const newPosts = posts.map((post, index) =>
              index !== idx
                ? post
                : {
                    ...body,
                    id,
                    name: body?.name || post.name,
                    fetched_at: new Date().toUTCString(),
                  },
            )
            posts = [...newPosts]

            return HttpResponse.json(posts)
          },
        ),
        http.post<any, Omit<Post, 'id'>>(
          'https://example.com/post',
          async ({ request }) => {
            const body = await request.json()
            const post = body
            startingId += 1
            posts.concat({
              ...post,
              fetched_at: new Date().toISOString(),
              id: startingId,
            })
            return HttpResponse.json(posts)
          },
        ),
      ]

      server.use(...handlers)
    })

    interface Post {
      id: number
      name: string
      fetched_at: string
    }

    type PostsResponse = Post[]

    const api = createApi({
      baseQuery: fetchBaseQuery({ baseUrl: 'https://example.com/' }),
      tagTypes: ['Posts'],
      endpoints: (build) => ({
        getPosts: build.query<PostsResponse, void>({
          query: () => ({ url: 'posts' }),
          providesTags: (result) =>
            result ? result.map(({ id }) => ({ type: 'Posts', id })) : [],
        }),
        updatePost: build.mutation<Post, Partial<Post>>({
          query: ({ id, ...body }) => ({
            url: `post/${id}`,
            method: 'PUT',
            body,
          }),
          invalidatesTags: (result, error, { id }) => [{ type: 'Posts', id }],
        }),
        addPost: build.mutation<Post, Partial<Post>>({
          query: (body) => ({
            url: `post`,
            method: 'POST',
            body,
          }),
          invalidatesTags: ['Posts'],
        }),
      }),
    })

    const counterSlice = createSlice({
      name: 'counter',
      initialState: { count: 0 },
      reducers: {
        increment(state) {
          state.count++
        },
      },
    })

    const storeRef = setupApiStore(api, {
      counter: counterSlice.reducer,
    })

    test('useQueryState serves a deeply memoized value and does not rerender unnecessarily', async () => {
      function Posts() {
        const { data: posts } = api.endpoints.getPosts.useQuery()
        const [addPost] = api.endpoints.addPost.useMutation()
        return (
          <div>
            <button
              data-testid="addPost"
              onClick={() => addPost({ name: `some text ${posts?.length}` })}
            >
              Add random post
            </button>
          </div>
        )
      }

      function SelectedPost() {
        const { post } = api.endpoints.getPosts.useQueryState(undefined, {
          selectFromResult: ({ data }) => ({
            post: data?.find((post) => post.id === 1),
          }),
        })
        getRenderCount = useRenderCounter()

        /**
         * Notes on the renderCount behavior
         *
         * We initialize at 0, and the first render will bump that 1 while post is `undefined`.
         * Once the request resolves, it will be at 2. What we're looking for is to make sure that
         * any requests that don't directly change the value of the selected item will have no impact
         * on rendering.
         */

        return <div />
      }

      render(
        <div>
          <Posts />
          <SelectedPost />
        </div>,
        { wrapper: storeRef.wrapper },
      )

      expect(getRenderCount()).toBe(1)

      const addBtn = screen.getByTestId('addPost')

      await waitFor(() => expect(getRenderCount()).toBe(2))

      fireEvent.click(addBtn)
      await waitFor(() => expect(getRenderCount()).toBe(2))
      // We fire off a few requests that would typically cause a rerender as JSON.parse() on a request would always be a new object.
      fireEvent.click(addBtn)
      fireEvent.click(addBtn)
      await waitFor(() => expect(getRenderCount()).toBe(2))
      // Being that it didn't rerender, we can be assured that the behavior is correct
    })

    /**
     * This test shows that even though a user can select a specific post, the fetching/loading flags
     * will still cause rerenders for the query. This should show that if you're using selectFromResult,
     * the 'performance' value comes with selecting _only_ the data.
     */
    test('useQuery with selectFromResult with all flags destructured rerenders like the default useQuery behavior', async () => {
      function Posts() {
        const { data: posts } = api.endpoints.getPosts.useQuery()
        const [addPost] = api.endpoints.addPost.useMutation()
        getRenderCount = useRenderCounter()
        return (
          <div>
            <button
              data-testid="addPost"
              onClick={() =>
                addPost({
                  name: `some text ${posts?.length}`,
                  fetched_at: new Date().toISOString(),
                })
              }
            >
              Add random post
            </button>
          </div>
        )
      }

      function SelectedPost() {
        getRenderCount = useRenderCounter()

        const { post } = api.endpoints.getPosts.useQuery(undefined, {
          selectFromResult: ({
            data,
            isUninitialized,
            isLoading,
            isFetching,
            isSuccess,
            isError,
          }) => ({
            post: data?.find((post) => post.id === 1),
            isUninitialized,
            isLoading,
            isFetching,
            isSuccess,
            isError,
          }),
        })

        return <div />
      }

      render(
        <div>
          <Posts />
          <SelectedPost />
        </div>,
        { wrapper: storeRef.wrapper },
      )
      expect(getRenderCount()).toBe(2)

      const addBtn = screen.getByTestId('addPost')

      await waitFor(() => expect(getRenderCount()).toBe(3))

      fireEvent.click(addBtn)
      await waitFor(() => expect(getRenderCount()).toBe(5))
      fireEvent.click(addBtn)
      fireEvent.click(addBtn)
      await waitFor(() => expect(getRenderCount()).toBe(7))
    })

    test('useQuery with selectFromResult option serves a deeply memoized value and does not rerender unnecessarily', async () => {
      function Posts() {
        const { data: posts } = api.endpoints.getPosts.useQuery()
        const [addPost] = api.endpoints.addPost.useMutation()
        return (
          <div>
            <button
              data-testid="addPost"
              onClick={() =>
                addPost({
                  name: `some text ${posts?.length}`,
                  fetched_at: new Date().toISOString(),
                })
              }
            >
              Add random post
            </button>
          </div>
        )
      }

      function SelectedPost() {
        getRenderCount = useRenderCounter()
        const { post } = api.endpoints.getPosts.useQuery(undefined, {
          selectFromResult: ({ data }) => ({
            post: data?.find((post) => post.id === 1),
          }),
        })

        return <div />
      }

      render(
        <div>
          <Posts />
          <SelectedPost />
        </div>,
        { wrapper: storeRef.wrapper },
      )
      expect(getRenderCount()).toBe(1)

      const addBtn = screen.getByTestId('addPost')

      await waitFor(() => expect(getRenderCount()).toBe(2))

      fireEvent.click(addBtn)
      await waitFor(() => expect(getRenderCount()).toBe(2))
      fireEvent.click(addBtn)
      fireEvent.click(addBtn)
      await waitFor(() => expect(getRenderCount()).toBe(2))
    })

    test('useQuery with selectFromResult option serves a deeply memoized value, then ONLY updates when the underlying data changes', async () => {
      let expectablePost: Post | undefined
      function Posts() {
        const { data: posts } = api.endpoints.getPosts.useQuery()
        const [addPost] = api.endpoints.addPost.useMutation()
        const [updatePost] = api.endpoints.updatePost.useMutation()

        return (
          <div>
            <button
              data-testid="addPost"
              onClick={() =>
                addPost({
                  name: `some text ${posts?.length}`,
                  fetched_at: new Date().toISOString(),
                })
              }
            >
              Add random post
            </button>
            <button
              data-testid="updatePost"
              onClick={() => updatePost({ id: 1, name: 'supercoooll!' })}
            >
              Update post
            </button>
          </div>
        )
      }

      function SelectedPost() {
        const { post } = api.endpoints.getPosts.useQuery(undefined, {
          selectFromResult: ({ data }) => ({
            post: data?.find((post) => post.id === 1),
          }),
        })
        getRenderCount = useRenderCounter()

        useEffect(() => {
          expectablePost = post
        }, [post])

        return (
          <div>
            <div data-testid="postName">{post?.name}</div>
          </div>
        )
      }

      render(
        <div>
          <Posts />
          <SelectedPost />
        </div>,
        { wrapper: storeRef.wrapper },
      )
      expect(getRenderCount()).toBe(1)

      const addBtn = screen.getByTestId('addPost')
      const updateBtn = screen.getByTestId('updatePost')

      fireEvent.click(addBtn)
      await waitFor(() => expect(getRenderCount()).toBe(2))
      fireEvent.click(addBtn)
      fireEvent.click(addBtn)
      await waitFor(() => expect(getRenderCount()).toBe(2))

      fireEvent.click(updateBtn)
      await waitFor(() => expect(getRenderCount()).toBe(3))
      expect(expectablePost?.name).toBe('supercoooll!')

      fireEvent.click(addBtn)
      await waitFor(() => expect(getRenderCount()).toBe(3))
    })

    test('useQuery with selectFromResult option does not update when unrelated data in the store changes', async () => {
      function Posts() {
        const { posts } = api.endpoints.getPosts.useQuery(undefined, {
          selectFromResult: ({ data }) => ({
            // Intentionally use an unstable reference to force a rerender
            posts: data?.filter((post) => post.name.includes('post')),
          }),
        })

        getRenderCount = useRenderCounter()

        return (
          <div>
            {posts?.map((post) => <div key={post.id}>{post.name}</div>)}
          </div>
        )
      }

      function CounterButton() {
        return (
          <div
            data-testid="incrementButton"
            onClick={() =>
              storeRef.store.dispatch(counterSlice.actions.increment())
            }
          >
            Increment Count
          </div>
        )
      }

      render(
        <div>
          <Posts />
          <CounterButton />
        </div>,
        { wrapper: storeRef.wrapper },
      )

      await waitFor(() => expect(getRenderCount()).toBe(2))

      const incrementBtn = screen.getByTestId('incrementButton')
      fireEvent.click(incrementBtn)
      expect(getRenderCount()).toBe(2)
    })

    test('useQuery with selectFromResult option has a type error if the result is not an object', async () => {
      function SelectedPost() {
        const res2 = api.endpoints.getPosts.useQuery(undefined, {
          // selectFromResult must always return an object
          selectFromResult: ({ data }) => ({ size: data?.length ?? 0 }),
        })

        return (
          <div>
            <div data-testid="size2">{res2.size}</div>
          </div>
        )
      }

      render(
        <div>
          <SelectedPost />
        </div>,
        { wrapper: storeRef.wrapper },
      )

      expect(screen.getByTestId('size2').textContent).toBe('0')
    })
  })

  describe('selectFromResult (mutation) behavior', () => {
    const api = createApi({
      baseQuery: async (arg: any) => {
        await waitMs()
        if ('amount' in arg?.body) {
          amount += 1
        }
        return {
          data: arg?.body
            ? { ...arg.body, ...(amount ? { amount } : {}) }
            : undefined,
        }
      },
      endpoints: (build) => ({
        increment: build.mutation<{ amount: number }, number>({
          query: (amount) => ({
            url: '',
            method: 'POST',
            body: {
              amount,
            },
          }),
        }),
      }),
    })

    const storeRef = setupApiStore(api, {
      ...actionsReducer,
    })

    it('causes no more than one rerender when using selectFromResult with an empty object', async () => {
      function Counter() {
        const [increment] = api.endpoints.increment.useMutation({
          selectFromResult: () => ({}),
        })
        getRenderCount = useRenderCounter()

        return (
          <div>
            <button
              data-testid="incrementButton"
              onClick={() => increment(1)}
            ></button>
          </div>
        )
      }

      render(<Counter />, { wrapper: storeRef.wrapper })

      expect(getRenderCount()).toBe(1)

      fireEvent.click(screen.getByTestId('incrementButton'))
      await waitMs(200) // give our baseQuery a chance to return
      expect(getRenderCount()).toBe(2)

      fireEvent.click(screen.getByTestId('incrementButton'))
      await waitMs(200)
      expect(getRenderCount()).toBe(3)

      const { increment } = api.endpoints

      expect(storeRef.store.getState().actions).toMatchSequence(
        api.internalActions.middlewareRegistered.match,
        increment.matchPending,
        increment.matchFulfilled,
        increment.matchPending,
        api.internalActions.removeMutationResult.match,
        increment.matchFulfilled,
      )
    })

    it('causes rerenders when only selected data changes', async () => {
      function Counter() {
        const [increment, { data }] = api.endpoints.increment.useMutation({
          selectFromResult: ({ data }) => ({ data }),
        })
        getRenderCount = useRenderCounter()

        return (
          <div>
            <button
              data-testid="incrementButton"
              onClick={() => increment(1)}
            ></button>
            <div data-testid="data">{JSON.stringify(data)}</div>
          </div>
        )
      }

      render(<Counter />, { wrapper: storeRef.wrapper })

      expect(getRenderCount()).toBe(1)

      fireEvent.click(screen.getByTestId('incrementButton'))
      await waitFor(() =>
        expect(screen.getByTestId('data').textContent).toBe(
          JSON.stringify({ amount: 1 }),
        ),
      )
      expect(getRenderCount()).toBe(3)

      fireEvent.click(screen.getByTestId('incrementButton'))
      await waitFor(() =>
        expect(screen.getByTestId('data').textContent).toBe(
          JSON.stringify({ amount: 2 }),
        ),
      )
      expect(getRenderCount()).toBe(5)
    })

    it('causes the expected # of rerenders when NOT using selectFromResult', async () => {
      function Counter() {
        const [increment, data] = api.endpoints.increment.useMutation()
        getRenderCount = useRenderCounter()

        return (
          <div>
            <button
              data-testid="incrementButton"
              onClick={() => increment(1)}
            ></button>
            <div data-testid="status">{String(data.status)}</div>
          </div>
        )
      }

      render(<Counter />, { wrapper: storeRef.wrapper })

      expect(getRenderCount()).toBe(1) // mount, uninitialized status in substate

      fireEvent.click(screen.getByTestId('incrementButton'))

      expect(getRenderCount()).toBe(2) // will be pending, isLoading: true,
      await waitFor(() =>
        expect(screen.getByTestId('status').textContent).toBe('pending'),
      )
      await waitFor(() =>
        expect(screen.getByTestId('status').textContent).toBe('fulfilled'),
      )
      expect(getRenderCount()).toBe(3)

      fireEvent.click(screen.getByTestId('incrementButton'))
      await waitFor(() =>
        expect(screen.getByTestId('status').textContent).toBe('pending'),
      )
      await waitFor(() =>
        expect(screen.getByTestId('status').textContent).toBe('fulfilled'),
      )
      expect(getRenderCount()).toBe(5)
    })

    it('useMutation with selectFromResult option has a type error if the result is not an object', async () => {
      function Counter() {
        const [increment] = api.endpoints.increment.useMutation({
          // selectFromResult must always return an object
          // @ts-expect-error
          selectFromResult: () => 42,
        })

        return (
          <div>
            <button
              data-testid="incrementButton"
              onClick={() => increment(1)}
            ></button>
          </div>
        )
      }

      render(<Counter />, { wrapper: storeRef.wrapper })
    })
  })
})

describe('skip behavior', () => {
  const uninitialized = {
    status: QueryStatus.uninitialized,
    refetch: expect.any(Function),
    data: undefined,
    isError: false,
    isFetching: false,
    isLoading: false,
    isSuccess: false,
    isUninitialized: true,
  }

  test('normal skip', async () => {
    const { result, rerender } = renderHook(
      ([arg, options]: Parameters<typeof api.endpoints.getUser.useQuery>) =>
        api.endpoints.getUser.useQuery(arg, options),
      {
        wrapper: storeRef.wrapper,
        initialProps: [1, { skip: true }],
      },
    )

    expect(result.current).toEqual(uninitialized)
    await waitMs(1)
    expect(getSubscriptionCount('getUser(1)')).toBe(0)

    rerender([1])

    await act(async () => {
      await waitForFakeTimer(150)
    })

    expect(result.current).toMatchObject({ status: QueryStatus.fulfilled })
    await waitMs(1)
    expect(getSubscriptionCount('getUser(1)')).toBe(1)

    rerender([1, { skip: true }])

    expect(result.current).toEqual({
      ...uninitialized,
      isSuccess: true,
      currentData: undefined,
      data: { name: 'Timmy' },
    })
    await waitMs(1)
    expect(getSubscriptionCount('getUser(1)')).toBe(0)
  })

  test('skipToken', async () => {
    const { result, rerender } = renderHook(
      ([arg, options]: Parameters<typeof api.endpoints.getUser.useQuery>) =>
        api.endpoints.getUser.useQuery(arg, options),
      {
        wrapper: storeRef.wrapper,
        initialProps: [skipToken],
      },
    )

    expect(result.current).toEqual(uninitialized)
    await waitMs(1)

    expect(getSubscriptionCount('getUser(1)')).toBe(0)
    // also no subscription on `getUser(skipToken)` or similar:
    expect(getSubscriptions().size).toBe(0)

    rerender([1])

    await act(async () => {
      await waitForFakeTimer(150)
    })

    expect(result.current).toMatchObject({ status: QueryStatus.fulfilled })
    await waitMs(1)
    expect(getSubscriptionCount('getUser(1)')).toBe(1)
    expect(getSubscriptions().size).toBe(1)

    rerender([skipToken])

    expect(result.current).toEqual({
      ...uninitialized,
      isSuccess: true,
      currentData: undefined,
      data: { name: 'Timmy' },
    })
    await waitMs(1)
    expect(getSubscriptionCount('getUser(1)')).toBe(0)
  })

  test('skipToken does not break serializeQueryArgs', async () => {
    const { result, rerender } = renderHook(
      ([arg, options]: Parameters<
        typeof api.endpoints.queryWithDeepArg.useQuery
      >) => api.endpoints.queryWithDeepArg.useQuery(arg, options),
      {
        wrapper: storeRef.wrapper,
        initialProps: [skipToken],
      },
    )

    expect(result.current).toEqual(uninitialized)
    await waitMs(1)

    expect(getSubscriptionCount('nestedValue')).toBe(0)
    // also no subscription on `getUser(skipToken)` or similar:
    expect(getSubscriptions().size).toBe(0)

    rerender([{ param: { nested: 'nestedValue' } }])

    await act(async () => {
      await waitForFakeTimer(150)
    })

    expect(result.current).toMatchObject({ status: QueryStatus.fulfilled })
    await waitMs(1)

    expect(getSubscriptionCount('nestedValue')).toBe(1)
    expect(getSubscriptions().size).toBe(1)

    rerender([skipToken])

    expect(result.current).toEqual({
      ...uninitialized,
      isSuccess: true,
      currentData: undefined,
      data: {},
    })
    await waitMs(1)
    expect(getSubscriptionCount('nestedValue')).toBe(0)
  })

  test('skipping a previously fetched query retains the existing value as `data`, but clears `currentData`', async () => {
    const { result, rerender } = renderHook(
      ([arg, options]: Parameters<typeof api.endpoints.getUser.useQuery>) =>
        api.endpoints.getUser.useQuery(arg, options),
      {
        wrapper: storeRef.wrapper,
        initialProps: [1],
      },
    )

    await act(async () => {
      await waitForFakeTimer(150)
    })

    // Normal fulfilled result, with both `data` and `currentData`
    expect(result.current).toMatchObject({
      status: QueryStatus.fulfilled,
      isSuccess: true,
      data: { name: 'Timmy' },
      currentData: { name: 'Timmy' },
    })

    rerender([1, { skip: true }])

    // After skipping, the query is "uninitialized", but still retains the last fetched `data`
    // even though it's skipped. `currentData` is undefined, since that matches the current arg.
    expect(result.current).toMatchObject({
      status: QueryStatus.uninitialized,
      isSuccess: true,
      data: { name: 'Timmy' },
      currentData: undefined,
    })
  })
})

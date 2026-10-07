import { createApi, setupListeners } from '@reduxjs/toolkit/query/react'
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react'
import { delay } from 'msw'
import { setupApiStore } from '../../tests/utils/helpers'

// Just setup a temporary in-memory counter for tests that `getIncrementedAmount`.
// This can be used to test how many renders happen due to data changes or
// the refetching behavior of components.
let amount = 0

const defaultApi = createApi({
  baseQuery: async (arg: any) => {
    await delay(150)
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
  refetchOnFocus: true,
  refetchOnReconnect: true,
})

const storeRef = setupApiStore(defaultApi)

const getIncrementedAmountState = () =>
  storeRef.store.getState().api.queries['getIncrementedAmount(undefined)']

afterEach(() => {
  amount = 0
})

describe('refetchOnFocus tests', () => {
  test('useQuery hook respects refetchOnFocus: true when set in createApi options', async () => {
    let data, isLoading, isFetching

    function User() {
      ;({ data, isFetching, isLoading } =
        defaultApi.endpoints.getIncrementedAmount.useQuery())
      return (
        <div>
          <div data-testid="isLoading">{String(isLoading)}</div>
          <div data-testid="isFetching">{String(isFetching)}</div>
          <div data-testid="amount">{String(data?.amount)}</div>
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
      expect(screen.getByTestId('amount').textContent).toBe('1'),
    )

    fireEvent.focus(window)

    await waitFor(() =>
      expect(screen.getByTestId('amount').textContent).toBe('2'),
    )
  })

  test('useQuery hook respects refetchOnFocus: false from a hook and overrides createApi defaults', async () => {
    let data, isLoading, isFetching

    function User() {
      ;({ data, isFetching, isLoading } =
        defaultApi.endpoints.getIncrementedAmount.useQuery(undefined, {
          refetchOnFocus: false,
        }))
      return (
        <div>
          <div data-testid="isLoading">{String(isLoading)}</div>
          <div data-testid="isFetching">{String(isFetching)}</div>
          <div data-testid="amount">{String(data?.amount)}</div>
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
      expect(screen.getByTestId('amount').textContent).toBe('1'),
    )

    fireEvent.focus(window)

    await waitFor(() =>
      expect(screen.getByTestId('amount').textContent).toBe('1'),
    )
  })

  test('useQuery hook prefers refetchOnFocus: true when multiple components have different configurations', async () => {
    let data, isLoading, isFetching

    function User() {
      ;({ data, isFetching, isLoading } =
        defaultApi.endpoints.getIncrementedAmount.useQuery(undefined, {
          refetchOnFocus: false,
        }))
      return (
        <div>
          <div data-testid="isLoading">{String(isLoading)}</div>
          <div data-testid="isFetching">{String(isFetching)}</div>
          <div data-testid="amount">{String(data?.amount)}</div>
        </div>
      )
    }

    function UserWithRefetchTrue() {
      ;({ data, isFetching, isLoading } =
      defaultApi.endpoints.getIncrementedAmount.useQuery(undefined, {
        refetchOnFocus: true,
        }))
      return <div />
    }

    render(
      <div>
        <User />
        <UserWithRefetchTrue />
      </div>,
      { wrapper: storeRef.wrapper },
    )

    await waitFor(() =>
      expect(screen.getByTestId('isLoading').textContent).toBe('true'),
    )
    await waitFor(() =>
      expect(screen.getByTestId('isLoading').textContent).toBe('false'),
    )
    await waitFor(() =>
      expect(screen.getByTestId('amount').textContent).toBe('1'),
    )

    fireEvent.focus(window)
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

  test('useQuery hook cleans data if refetch without active subscribers', async () => {
    let data, isLoading, isFetching

    function User() {
      ;({ data, isFetching, isLoading } =
        defaultApi.endpoints.getIncrementedAmount.useQuery(undefined, {
          refetchOnFocus: true,
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

    expect(getIncrementedAmountState()).not.toBeUndefined()

    fireEvent.focus(window)

    await delay(1)
    expect(getIncrementedAmountState()).toBeUndefined()
  })
})

describe('refetchOnReconnect tests', () => {
  test('useQuery hook respects refetchOnReconnect: true when set in createApi options', async () => {
    let data, isLoading, isFetching

    function User() {
      ;({ data, isFetching, isLoading } =
        defaultApi.endpoints.getIncrementedAmount.useQuery())
      return (
        <div>
          <div data-testid="isLoading">{String(isLoading)}</div>
          <div data-testid="isFetching">{String(isFetching)}</div>
          <div data-testid="amount">{String(data?.amount)}</div>
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
      expect(screen.getByTestId('amount').textContent).toBe('1'),
    )

    act(() => {
      window.dispatchEvent(new Event('offline'))
      window.dispatchEvent(new Event('online'))
    })

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

  test('useQuery hook should not refetch when refetchOnReconnect: false from a hook and overrides createApi defaults', async () => {
    let data, isLoading, isFetching

    function User() {
      ;({ data, isFetching, isLoading } =
        defaultApi.endpoints.getIncrementedAmount.useQuery(undefined, {
          refetchOnReconnect: false,
        }))
      return (
        <div>
          <div data-testid="isLoading">{String(isLoading)}</div>
          <div data-testid="isFetching">{String(isFetching)}</div>
          <div data-testid="amount">{String(data?.amount)}</div>
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
      expect(screen.getByTestId('amount').textContent).toBe('1'),
    )

    act(() => {
      window.dispatchEvent(new Event('offline'))
      window.dispatchEvent(new Event('online'))
    })
    expect(screen.getByTestId('isFetching').textContent).toBe('false')
    await waitFor(() =>
      expect(screen.getByTestId('amount').textContent).toBe('1'),
    )
  })

  test('useQuery hook prefers refetchOnReconnect: true when multiple components have different configurations', async () => {
    let data, isLoading, isFetching

    function User() {
      ;({ data, isFetching, isLoading } =
        defaultApi.endpoints.getIncrementedAmount.useQuery(undefined, {
          refetchOnReconnect: false,
        }))
      return (
        <div>
          <div data-testid="isLoading">{String(isLoading)}</div>
          <div data-testid="isFetching">{String(isFetching)}</div>
          <div data-testid="amount">{String(data?.amount)}</div>
        </div>
      )
    }

    function UserWithRefetchTrue() {
      ;({ data, isFetching, isLoading } =
        defaultApi.endpoints.getIncrementedAmount.useQuery(undefined, {
          refetchOnReconnect: true,
        }))
      return <div />
    }

    render(
      <div>
        <User />
        <UserWithRefetchTrue />
      </div>,
      { wrapper: storeRef.wrapper },
    )

    await waitFor(() =>
      expect(screen.getByTestId('isLoading').textContent).toBe('true'),
    )
    await waitFor(() =>
      expect(screen.getByTestId('isLoading').textContent).toBe('false'),
    )
    await waitFor(() =>
      expect(screen.getByTestId('amount').textContent).toBe('1'),
    )

    act(() => {
      window.dispatchEvent(new Event('offline'))
      window.dispatchEvent(new Event('online'))
    })

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
})

describe('customListenersHandler', () => {
  const storeRef = setupApiStore(defaultApi, undefined, {
    withoutListeners: true,
  })

  test('setupListeners accepts a custom callback and executes it', async () => {
    const consoleSpy = vi.spyOn(console, 'log')
    consoleSpy.mockImplementation((...args: any[]) => {
      // console.info(...args)
    })
    const dispatchSpy = vi.spyOn(storeRef.store, 'dispatch')

    let unsubscribe = () => {}
    unsubscribe = setupListeners(
      storeRef.store.dispatch,
      (dispatch, actions) => {
        const handleOnline = () =>
          dispatch(defaultApi.internalActions.onOnline())
        window.addEventListener('online', handleOnline, false)
        console.log('setup!')
        return () => {
          window.removeEventListener('online', handleOnline)
          console.log('cleanup!')
        }
      },
    )

    await delay(150)

    let data, isLoading, isFetching

    function User() {
      ;({ data, isFetching, isLoading } =
        defaultApi.endpoints.getIncrementedAmount.useQuery(undefined, {
          refetchOnReconnect: true,
        }))
      return (
        <div>
          <div data-testid="isLoading">{String(isLoading)}</div>
          <div data-testid="isFetching">{String(isFetching)}</div>
          <div data-testid="amount">{String(data?.amount)}</div>
        </div>
      )
    }

    render(<User />, { wrapper: storeRef.wrapper })

    expect(consoleSpy).toHaveBeenCalledWith('setup!')

    await waitFor(() =>
      expect(screen.getByTestId('isLoading').textContent).toBe('true'),
    )
    await waitFor(() =>
      expect(screen.getByTestId('isLoading').textContent).toBe('false'),
    )
    await waitFor(() =>
      expect(screen.getByTestId('amount').textContent).toBe('1'),
    )

    act(() => {
      window.dispatchEvent(new Event('offline'))
      window.dispatchEvent(new Event('online'))
    })
    expect(dispatchSpy).toHaveBeenCalled()

    // Ignore RTKQ middleware internal data calls
    const mockCallsWithoutInternals = dispatchSpy.mock.calls.filter((call) => {
      const type = (call[0] as any)?.type ?? ''
      const reIsInternal = /internal/i
      return !reIsInternal.test(type)
    })

    expect(
      defaultApi.internalActions.onOnline.match(
        mockCallsWithoutInternals[1][0] as any,
      ),
    ).toBe(true)

    await waitFor(() =>
      expect(screen.getByTestId('isFetching').textContent).toBe('true'),
    )
    await waitFor(() =>
      expect(screen.getByTestId('isFetching').textContent).toBe('false'),
    )
    await waitFor(() =>
      expect(screen.getByTestId('amount').textContent).toBe('2'),
    )

    unsubscribe()
    expect(consoleSpy).toHaveBeenCalledWith('cleanup!')
  })
})

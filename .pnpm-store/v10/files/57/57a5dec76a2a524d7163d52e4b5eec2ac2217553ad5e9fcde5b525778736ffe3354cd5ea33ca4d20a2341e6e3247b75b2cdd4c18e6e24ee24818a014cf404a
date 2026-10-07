// tests for "cleanup-after-unsubscribe" behavior
import React from 'react'

import { createListenerMiddleware } from '@reduxjs/toolkit'
import { createApi, QueryStatus } from '@reduxjs/toolkit/query/react'
import { act, render, screen, waitFor } from '@testing-library/react'
import { setupApiStore } from '../../tests/utils/helpers'
import type { SubscriptionSelectors } from '../core/buildMiddleware/types'

const api = createApi({
  baseQuery: () => ({ data: 42 }),
  endpoints: (build) => ({
    a: build.query<unknown, void>({ query: () => '' }),
    b: build.query<unknown, void>({ query: () => '' }),
  }),
})
const storeRef = setupApiStore(api)

const getSubStateA = () => storeRef.store.getState().api.queries['a(undefined)']
const getSubStateB = () => storeRef.store.getState().api.queries['b(undefined)']

function UsingA() {
  const { data } = api.endpoints.a.useQuery()

  return <>Result: {data as React.ReactNode} </>
}

function UsingB() {
  api.endpoints.b.useQuery()

  return <></>
}

function UsingAB() {
  api.endpoints.a.useQuery()
  api.endpoints.b.useQuery()

  return <></>
}

beforeAll(() => {
  vi.useFakeTimers({ shouldAdvanceTime: true })
})

test('data stays in store when component stays rendered', async () => {
  expect(getSubStateA()).toBeUndefined()

  render(<UsingA />, { wrapper: storeRef.wrapper })
  await waitFor(() =>
    expect(getSubStateA()?.status).toBe(QueryStatus.fulfilled),
  )

  vi.advanceTimersByTime(120_000)

  expect(getSubStateA()?.status).toBe(QueryStatus.fulfilled)
})

test('data is removed from store after 60 seconds', async () => {
  expect(getSubStateA()).toBeUndefined()

  const { unmount } = render(<UsingA />, { wrapper: storeRef.wrapper })
  await waitFor(() =>
    expect(getSubStateA()?.status).toBe(QueryStatus.fulfilled),
  )

  unmount()

  vi.advanceTimersByTime(59_000)

  expect(getSubStateA()?.status).toBe(QueryStatus.fulfilled)

  vi.advanceTimersByTime(2000)

  expect(getSubStateA()).toBeUndefined()
})

test('data stays in store when component stays rendered while data for another component is removed after it unmounted', async () => {
  expect(getSubStateA()).toBeUndefined()
  expect(getSubStateB()).toBeUndefined()

  const { rerender } = render(
    <>
      <UsingA />
      <UsingB />
    </>,
    { wrapper: storeRef.wrapper },
  )
  await waitFor(() => {
    expect(getSubStateA()?.status).toBe(QueryStatus.fulfilled)
    expect(getSubStateB()?.status).toBe(QueryStatus.fulfilled)
  })

  const statusA = getSubStateA()

  await act(async () => {
    rerender(<UsingA />)

    vi.advanceTimersByTime(10)
  })

  vi.advanceTimersByTime(120_000)

  expect(getSubStateA()).toEqual(statusA)
  expect(getSubStateB()).toBeUndefined()
})

test('data stays in store when one component requiring the data stays in the store', async () => {
  expect(getSubStateA()).toBeUndefined()
  expect(getSubStateB()).toBeUndefined()

  const { rerender } = render(
    <>
      <UsingA key="a" />
      <UsingAB key="ab" />
    </>,
    { wrapper: storeRef.wrapper },
  )
  await waitFor(() => {
    expect(getSubStateA()?.status).toBe(QueryStatus.fulfilled)
    expect(getSubStateB()?.status).toBe(QueryStatus.fulfilled)
  })

  const statusA = getSubStateA()
  const statusB = getSubStateB()

  await act(async () => {
    rerender(<UsingAB key="ab" />)
    vi.advanceTimersByTime(10)
    vi.runAllTimers()
  })

  await act(async () => {
    vi.advanceTimersByTime(120000)
    vi.runAllTimers()
  })

  expect(getSubStateA()).toEqual(statusA)
  expect(getSubStateB()).toEqual(statusB)
})

test('Minimizes the number of subscription dispatches when multiple components ask for the same data', async () => {
  const listenerMiddleware = createListenerMiddleware()
  const storeRef = setupApiStore(api, undefined, {
    middleware: {
      concat: [listenerMiddleware.middleware],
    },
    withoutTestLifecycles: true,
  })

  const actionTypes: unknown[] = []

  listenerMiddleware.startListening({
    predicate: () => true,
    effect: (action) => {
      if (
        action.type.includes('subscriptionsUpdated') ||
        action.type.includes('internal_')
      ) {
        return
      }

      actionTypes.push(action.type)
    },
  })

  const { getSubscriptionCount } = storeRef.store.dispatch(
    api.internalActions.internal_getRTKQSubscriptions(),
  ) as unknown as SubscriptionSelectors

  const NUM_LIST_ITEMS = 1000

  function ParentComponent() {
    const listItems = Array.from({ length: NUM_LIST_ITEMS }).map((_, i) => (
      <UsingA key={i} />
    ))

    return <>{listItems}</>
  }

  render(<ParentComponent />, {
    wrapper: storeRef.wrapper,
  })

  await act(async () => {
    vi.advanceTimersByTime(10)
    vi.runAllTimers()
  })

  await waitFor(() => {
    return screen.getAllByText(/42/).length > 0
  })

  expect(getSubscriptionCount('a(undefined)')).toBe(NUM_LIST_ITEMS)

  expect(actionTypes).toEqual([
    'api/config/middlewareRegistered',
    'api/executeQuery/pending',
    'api/executeQuery/fulfilled',
  ])
}, 25_000)

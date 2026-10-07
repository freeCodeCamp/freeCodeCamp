import { createSelectorCreator, lruMemoize } from '@reduxjs/toolkit'
import {
  buildCreateApi,
  coreModule,
  reactHooksModule,
} from '@reduxjs/toolkit/query/react'
import { render, screen, waitFor } from '@testing-library/react'
import { delay } from 'msw'
import * as React from 'react'
import type { ReactReduxContextValue } from 'react-redux'
import {
  Provider,
  createDispatchHook,
  createSelectorHook,
  createStoreHook,
} from 'react-redux'
import { setupApiStore, useRenderCounter } from '../../tests/utils/helpers'

const MyContext = React.createContext<ReactReduxContextValue | null>(null)

describe('buildCreateApi', () => {
  test('Works with all hooks provided', async () => {
    const customCreateApi = buildCreateApi(
      coreModule(),
      reactHooksModule({
        hooks: {
          useDispatch: createDispatchHook(MyContext),
          useSelector: createSelectorHook(MyContext),
          useStore: createStoreHook(MyContext),
        },
      }),
    )

    const api = customCreateApi({
      baseQuery: async (arg: any) => {
        await delay(150)

        return {
          data: arg?.body ? { ...arg.body } : {},
        }
      },
      endpoints: (build) => ({
        getUser: build.query<{ name: string }, number>({
          query: () => ({
            body: { name: 'Timmy' },
          }),
        }),
      }),
    })

    let getRenderCount: () => number = () => 0

    const storeRef = setupApiStore(api, {}, { withoutTestLifecycles: true })

    // Copy of 'useQuery hook basic render count assumptions' from `buildHooks.test.tsx`
    function User() {
      const { isFetching } = api.endpoints.getUser.useQuery(1)
      getRenderCount = useRenderCounter()

      return (
        <div>
          <div data-testid="isFetching">{String(isFetching)}</div>
        </div>
      )
    }

    function Wrapper({ children }: any) {
      return (
        <Provider store={storeRef.store} context={MyContext}>
          {children}
        </Provider>
      )
    }

    render(<User />, { wrapper: Wrapper })
    // By the time this runs, the initial render will happen, and the query
    //  will start immediately running by the time we can expect this
    expect(getRenderCount()).toBe(2)

    await waitFor(() =>
      expect(screen.getByTestId('isFetching').textContent).toBe('false'),
    )
    expect(getRenderCount()).toBe(3)
  })

  test("Throws an error if you don't provide all hooks", async () => {
    const callBuildCreateApi = () => {
      const customCreateApi = buildCreateApi(
        coreModule(),
        reactHooksModule({
          // @ts-ignore
          hooks: {
            useDispatch: createDispatchHook(MyContext),
            useSelector: createSelectorHook(MyContext),
          },
        }),
      )
    }

    expect(callBuildCreateApi).toThrowErrorMatchingInlineSnapshot(
      `
      [Error: When using custom hooks for context, all 3 hooks need to be provided: useDispatch, useSelector, useStore.
      Hook useStore was either not provided or not a function.]
    `,
    )
  })
  test('allows passing createSelector instance', async () => {
    const memoize = vi.fn(lruMemoize)
    const createSelector = createSelectorCreator(memoize)
    const createApi = buildCreateApi(
      coreModule({ createSelector }),
      reactHooksModule({ createSelector }),
    )
    const api = createApi({
      baseQuery: async (arg: any) => {
        await delay(150)

        return {
          data: arg?.body ? { ...arg.body } : {},
        }
      },
      endpoints: (build) => ({
        getUser: build.query<{ name: string }, number>({
          query: () => ({
            body: { name: 'Timmy' },
          }),
        }),
      }),
    })

    const storeRef = setupApiStore(api, {}, { withoutTestLifecycles: true })

    await storeRef.store.dispatch(api.endpoints.getUser.initiate(1))

    const selectUser = api.endpoints.getUser.select(1)

    expect(selectUser(storeRef.store.getState()).data).toEqual({
      name: 'Timmy',
    })

    expect(memoize).toHaveBeenCalledTimes(4)

    memoize.mockClear()

    function User() {
      const { isFetching } = api.endpoints.getUser.useQuery(1)

      return (
        <div>
          <div data-testid="isFetching">{String(isFetching)}</div>
        </div>
      )
    }

    function Wrapper({ children }: any) {
      return <Provider store={storeRef.store}>{children}</Provider>
    }

    render(<User />, { wrapper: Wrapper })

    await waitFor(() =>
      expect(screen.getByTestId('isFetching').textContent).toBe('false'),
    )

    // select() + selectFromResult
    expect(memoize).toHaveBeenCalledTimes(8)
  })
})

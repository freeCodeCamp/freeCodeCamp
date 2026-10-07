import type {
  EnhancedStore,
  Middleware,
  Reducer,
  Store,
  UnknownAction,
} from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { useCallback, useEffect, useRef } from 'react'

import { Provider } from 'react-redux'

import { act, cleanup } from '@testing-library/react'

export const ANY = 0 as any

export const DEFAULT_DELAY_MS = 150

export const getSerializedHeaders = (headers: Headers = new Headers()) => {
  const result: Record<string, string> = {}
  headers.forEach((val, key) => {
    result[key] = val
  })
  return result
}

export async function waitMs(time = DEFAULT_DELAY_MS) {
  const now = Date.now()
  while (Date.now() < now + time) {
    await new Promise((res) => process.nextTick(res))
  }
}

export function waitForFakeTimer(time = DEFAULT_DELAY_MS) {
  return new Promise((resolve) => setTimeout(resolve, time))
}

export function withProvider(store: Store<any>) {
  return function Wrapper({ children }: any) {
    return <Provider store={store}>{children}</Provider>
  }
}

export const hookWaitFor = async (cb: () => void, time = 2000) => {
  const startedAt = Date.now()

  while (true) {
    try {
      cb()
      return true
    } catch (e) {
      if (Date.now() > startedAt + time) {
        throw e
      }
      await act(async () => {
        await waitMs(2)
      })
    }
  }
}
export const fakeTimerWaitFor = async (cb: () => void, time = 2000) => {
  const startedAt = Date.now()

  while (true) {
    try {
      cb()
      return true
    } catch (e) {
      if (Date.now() > startedAt + time) {
        throw e
      }
      await act(async () => {
        await vi.advanceTimersByTimeAsync(2)
      })
    }
  }
}

export const useRenderCounter = () => {
  const countRef = useRef(0)

  useEffect(() => {
    countRef.current += 1
  })

  useEffect(() => {
    return () => {
      countRef.current = 0
    }
  }, [])

  return useCallback(() => countRef.current, [])
}

expect.extend({
  toMatchSequence(
    _actions: UnknownAction[],
    ...matchers: Array<(arg: any) => boolean>
  ) {
    const actions = _actions.concat()
    actions.shift() // remove INIT

    for (let i = 0; i < matchers.length; i++) {
      if (!matchers[i](actions[i])) {
        return {
          message: () =>
            `Action ${actions[i].type} does not match sequence at position ${i}.
All actions:
${actions.map((a) => a.type).join('\n')}`,
          pass: false,
        }
      }
    }
    return {
      message: () => `All actions match the sequence.`,
      pass: true,
    }
  },
})

export const actionsReducer = {
  actions: (state: UnknownAction[] = [], action: UnknownAction) => {
    // As of 2.0-beta.4, we are going to ignore all `subscriptionsUpdated` actions in tests
    if (action.type.includes('subscriptionsUpdated')) {
      return state
    }

    return [...state, action]
  },
}

export function setupApiStore<
  A extends {
    reducerPath: 'api'
    reducer: Reducer<any, any>
    middleware: Middleware
    util: { resetApiState(): any }
  },
  R extends Record<string, Reducer<any, any>> = Record<never, never>,
>(
  api: A,
  extraReducers?: R,
  options: {
    withoutListeners?: boolean
    withoutTestLifecycles?: boolean
    middleware?: {
      prepend?: Middleware[]
      concat?: Middleware[]
    }
  } = {},
) {
  const { middleware } = options
  const getStore = () =>
    configureStore({
      reducer: { api: api.reducer, ...extraReducers },
      middleware: (gdm) => {
        const tempMiddleware = gdm({
          serializableCheck: false,
          immutableCheck: false,
        }).concat(api.middleware)

        return tempMiddleware
          .concat(middleware?.concat ?? [])
          .prepend(middleware?.prepend ?? []) as typeof tempMiddleware
      },
      enhancers: (gde) =>
        gde({
          autoBatch: false,
        }),
    })

  type State = {
    api: ReturnType<A['reducer']>
  } & {
    [K in keyof R]: ReturnType<R[K]>
  }
  type StoreType = EnhancedStore<
    {
      api: ReturnType<A['reducer']>
    } & {
      [K in keyof R]: ReturnType<R[K]>
    },
    UnknownAction,
    ReturnType<typeof getStore> extends EnhancedStore<any, any, infer M>
      ? M
      : never
  >

  const initialStore = getStore() as StoreType
  const refObj = {
    api,
    store: initialStore,
    wrapper: withProvider(initialStore),
  }
  let cleanupListeners: () => void

  if (!options.withoutTestLifecycles) {
    beforeEach(() => {
      const store = getStore() as StoreType
      refObj.store = store
      refObj.wrapper = withProvider(store)
      if (!options.withoutListeners) {
        cleanupListeners = setupListeners(store.dispatch)
      }
    })
    afterEach(() => {
      cleanup()
      if (!options.withoutListeners) {
        cleanupListeners()
      }
      refObj.store.dispatch(api.util.resetApiState())
    })
  }

  return refObj
}

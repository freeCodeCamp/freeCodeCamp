import * as React from 'react'
import { createDynamicMiddleware } from '../react'
import { configureStore } from '../../configureStore'
import { makeProbeableMiddleware, probeMiddleware } from './index.test'
import { render } from '@testing-library/react'
import type { Dispatch } from 'redux'
import type { ReactReduxContextValue } from 'react-redux'
import { Provider } from 'react-redux'

const staticMiddleware = makeProbeableMiddleware(1)

describe('createReactDynamicMiddleware', () => {
  describe('createDispatchWithMiddlewareHook', () => {
    it('injects middleware upon creation', () => {
      const dynamicInstance = createDynamicMiddleware()
      const store = configureStore({
        reducer: () => 0,
        middleware: (gDM) =>
          gDM().prepend(dynamicInstance.middleware).concat(staticMiddleware),
      })
      // normal, pre-inject
      expect(store.dispatch(probeMiddleware(2))).toEqual(probeMiddleware(2))
      // static
      expect(store.dispatch(probeMiddleware(1))).toBe(1)

      const useDispatch = dynamicInstance.createDispatchWithMiddlewareHook(
        makeProbeableMiddleware(2),
      )

      // injected
      expect(store.dispatch(probeMiddleware(2))).toBe(2)
    })

    it('returns dispatch', () => {
      const dynamicInstance = createDynamicMiddleware()
      const store = configureStore({
        reducer: () => 0,
        middleware: (gDM) =>
          gDM().prepend(dynamicInstance.middleware).concat(staticMiddleware),
      })

      const useDispatch = dynamicInstance.createDispatchWithMiddlewareHook(
        makeProbeableMiddleware(2),
      )

      let dispatch: Dispatch | undefined
      function Component() {
        dispatch = useDispatch()

        return null
      }
      render(<Component />, {
        wrapper: ({ children }) => (
          <Provider store={store}>{children}</Provider>
        ),
      })
      expect(dispatch).toBe(store.dispatch)
    })
  })
  describe('createDispatchWithMiddlewareHookFactory', () => {
    it('returns the correct store dispatch', () => {
      const dynamicInstance = createDynamicMiddleware()
      const store = configureStore({
        reducer: () => 0,
        middleware: (gDM) =>
          gDM().prepend(dynamicInstance.middleware).concat(staticMiddleware),
      })
      const store2 = configureStore({
        reducer: () => '',
        middleware: (gDM) =>
          gDM().prepend(dynamicInstance.middleware).concat(staticMiddleware),
      })

      const context = React.createContext<ReactReduxContextValue | null>(null)

      const createDispatchWithMiddlewareHook =
        dynamicInstance.createDispatchWithMiddlewareHookFactory(context)

      const useDispatch = createDispatchWithMiddlewareHook(
        makeProbeableMiddleware(2),
      )

      let dispatch: Dispatch | undefined
      function Component() {
        dispatch = useDispatch()

        return null
      }
      render(<Component />, {
        wrapper: ({ children }) => (
          <Provider store={store}>
            <Provider context={context} store={store2}>
              {children}
            </Provider>
          </Provider>
        ),
      })
      expect(dispatch).toBe(store2.dispatch)
    })
  })
})

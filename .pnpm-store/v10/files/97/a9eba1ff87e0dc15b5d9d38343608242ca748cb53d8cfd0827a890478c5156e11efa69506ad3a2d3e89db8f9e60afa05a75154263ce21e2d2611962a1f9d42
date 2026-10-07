import { configureStore } from '@reduxjs/toolkit'
import type { Context } from 'react'
import { useContext, useEffect } from './reactImports'
import * as React from 'react'
import type { ReactReduxContextValue } from 'react-redux'
import { Provider, ReactReduxContext } from './reactReduxImports'
import { setupListeners } from './rtkqImports'
import type { Api } from '@reduxjs/toolkit/query'

/**
 * Can be used as a `Provider` if you **do not already have a Redux store**.
 *
 * @example
 * ```tsx
 * // codeblock-meta no-transpile title="Basic usage - wrap your App with ApiProvider"
 * import * as React from 'react';
 * import { ApiProvider } from '@reduxjs/toolkit/query/react';
 * import { Pokemon } from './features/Pokemon';
 *
 * function App() {
 *   return (
 *     <ApiProvider api={api}>
 *       <Pokemon />
 *     </ApiProvider>
 *   );
 * }
 * ```
 *
 * @remarks
 * Using this together with an existing redux store, both will
 * conflict with each other - please use the traditional redux setup
 * in that case.
 */
export function ApiProvider(props: {
  children: any
  api: Api<any, {}, any, any>
  setupListeners?: Parameters<typeof setupListeners>[1] | false
  context?: Context<ReactReduxContextValue | null>
}) {
  const context = props.context || ReactReduxContext
  const existingContext = useContext(context)
  if (existingContext) {
    throw new Error(
      'Existing Redux context detected. If you already have a store set up, please use the traditional Redux setup.',
    )
  }
  const [store] = React.useState(() =>
    configureStore({
      reducer: {
        [props.api.reducerPath]: props.api.reducer,
      },
      middleware: (gDM) => gDM().concat(props.api.middleware),
    }),
  )
  // Adds the event listeners for online/offline/focus/etc
  useEffect(
    (): undefined | (() => void) =>
      props.setupListeners === false
        ? undefined
        : setupListeners(store.dispatch, props.setupListeners),
    [props.setupListeners, store.dispatch],
  )

  return (
    <Provider store={store} context={context}>
      {props.children}
    </Provider>
  )
}

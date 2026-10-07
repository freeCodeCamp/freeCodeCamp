// needed for fast refresh
import "@gatsbyjs/webpack-hot-middleware/client"

import React from "react"
import ReactDOM from "react-dom"

import socketIo from "./socketIo"
import emitter from "./emitter"
import { apiRunner, apiRunnerAsync } from "./api-runner-browser"
import { setLoader, publicLoader } from "./loader"
import { Indicator } from "./loading-indicator/indicator"
import DevLoader from "./dev-loader"
import asyncRequires from "$virtual/async-requires"
// Generated during bootstrap
import matchPaths from "$virtual/match-paths.json"
import { LoadingIndicatorEventHandler } from "./loading-indicator"
import Root from "./root"
import { init as navigationInit } from "./navigation"
// ensure in develop we have at least some .css (even if it's empty).
// this is so there is no warning about not matching content-type when site doesn't include any regular css (for example when css-in-js is used)
// this also make sure that if all css is removed in develop we are not left with stale commons.css that have stale content
import "./blank.css"

// Enable fast-refresh for virtual sync-requires, gatsby-browser & navigation
// To ensure that our <Root /> component can hot reload in case anything below doesn't
// satisfy fast-refresh constraints
module.hot.accept(
  [`$virtual/async-requires`, `./api-runner-browser`, `./navigation`],
  () => {
    // asyncRequires should be automatically updated here (due to ESM import and webpack HMR spec),
    // but loader doesn't know that and needs to be manually nudged
    loader.updateAsyncRequires(asyncRequires)
  }
)

// Initialize Gatsby events system early for error overlay
window._gatsbyEvents = window._gatsbyEvents || []

window.___emitter = emitter

const loader = new DevLoader(asyncRequires, matchPaths)
setLoader(loader)
loader.setApiRunner(apiRunner)

window.___loader = publicLoader

// React 19 error handlers for development error overlay
const handleUncaughtError = (error, errorInfo) => {
  console.error(`Uncaught error:`, error, errorInfo)
  window._gatsbyEvents.push([
    `FAST_REFRESH`,
    {
      action: `SHOW_RUNTIME_ERRORS`,
      payload: [error], // Pass the actual Error object
    },
  ])
  apiRunner(`onUncaughtError`, { error, errorInfo })
}

const handleCaughtError = (error, errorInfo) => {
  // Also forward caught errors to the overlay system
  window._gatsbyEvents.push([
    `FAST_REFRESH`,
    {
      action: `SHOW_RUNTIME_ERRORS`,
      payload: [error],
    },
  ])
  apiRunner(`onCaughtError`, { error, errorInfo })
}

const reactDomClient = require(`react-dom/client`)
const reactFirstRenderOrHydrate = (Component, el) => {
  // we will use hydrate if mount element has any content inside
  const useHydrate = el && el.children.length

  // Pass error handler options for React 19+ (React 18 will ignore these options)
  const errorHandlerOptions = {
    onUncaughtError: handleUncaughtError,
    onCaughtError: handleCaughtError,
  }

  if (useHydrate) {
    const root = reactDomClient.hydrateRoot(el, Component, errorHandlerOptions)
    return () => root.unmount()
  } else {
    const root = reactDomClient.createRoot(el, errorHandlerOptions)
    root.render(Component)
    return () => root.unmount()
  }
}

// Do dummy dynamic import so the jsonp __webpack_require__.e is added to the commons.js
// bundle. This ensures hot reloading doesn't break when someone first adds
// a dynamic import.
//
// Without this, the runtime breaks with a
// "TypeError: __webpack_require__.e is not a function"
// error.
export function notCalledFunction() {
  return import(`./dummy`)
}

// Let the site/plugins run code very early.
apiRunnerAsync(`onClientEntry`).then(() => {
  // Hook up the client to socket.io on server
  const socket = socketIo()
  if (socket) {
    socket.on(`reload`, () => {
      window.location.reload()
    })
  }

  /**
   * Service Workers are persistent by nature. They stick around,
   * serving a cached version of the site if they aren't removed.
   * This is especially frustrating when you need to test the
   * production build on your local machine.
   *
   * Let's warn if we find service workers in development.
   */
  if (`serviceWorker` in navigator) {
    navigator.serviceWorker.getRegistrations().then(registrations => {
      if (registrations.length > 0)
        console.warn(
          `Warning: found one or more service workers present.`,
          `If your site isn't behaving as expected, you might want to remove these.`,
          registrations
        )
    })
  }

  const rootElement = document.getElementById(`___gatsby`)
  const renderer = apiRunner(
    `replaceHydrateFunction`,
    undefined,
    reactFirstRenderOrHydrate
  )[0]

  let dismissLoadingIndicator
  if (
    process.env.GATSBY_QUERY_ON_DEMAND &&
    process.env.GATSBY_QUERY_ON_DEMAND_LOADING_INDICATOR === `true`
  ) {
    let indicatorMountElement
    let cleanupFn

    const showIndicatorTimeout = setTimeout(() => {
      indicatorMountElement = document.createElement(
        `first-render-loading-indicator`
      )
      document.body.append(indicatorMountElement)
      cleanupFn = renderer(<Indicator />, indicatorMountElement)
    }, 1000)

    dismissLoadingIndicator = () => {
      clearTimeout(showIndicatorTimeout)
      if (indicatorMountElement) {
        // If user defined replaceHydrateFunction themselves the cleanupFn return might not be there
        // So fallback to unmountComponentAtNode if available
        if (cleanupFn && typeof cleanupFn === `function`) {
          cleanupFn()
        } else {
          if (typeof ReactDOM.unmountComponentAtNode === `function`) {
            ReactDOM.unmountComponentAtNode(indicatorMountElement)
          } else {
            // This was removed in React 19:
            // https://react.dev/blog/2024/04/25/react-19-upgrade-guide#removed-unmountcomponentatnode.
            console.warn(
              `You provided a custom replaceHydrateFunction that does not return a cleanup function.`
            )
          }
        }
        indicatorMountElement.remove()
      }
    }
  }

  Promise.all([
    loader.loadPage(`/dev-404-page/`),
    loader.loadPage(`/404.html`),
    loader.loadPage(window.location.pathname + window.location.search),
  ]).then(() => {
    navigationInit()

    function onHydrated() {
      apiRunner(`onInitialClientRender`)

      // Render query on demand overlay
      if (
        process.env.GATSBY_QUERY_ON_DEMAND_LOADING_INDICATOR &&
        process.env.GATSBY_QUERY_ON_DEMAND_LOADING_INDICATOR === `true`
      ) {
        const indicatorMountElement = document.createElement(`div`)
        indicatorMountElement.setAttribute(
          `id`,
          `query-on-demand-indicator-element`
        )
        document.body.append(indicatorMountElement)

        renderer(<LoadingIndicatorEventHandler />, indicatorMountElement)
      }
    }

    function App() {
      const onClientEntryRanRef = React.useRef(false)

      React.useEffect(() => {
        if (!onClientEntryRanRef.current) {
          onClientEntryRanRef.current = true

          onHydrated()
        }
      }, [])

      return <Root />
    }

    function runRender() {
      if (dismissLoadingIndicator) {
        dismissLoadingIndicator()
      }

      renderer(<App />, rootElement)
    }

    // https://github.com/madrobby/zepto/blob/b5ed8d607f67724788ec9ff492be297f64d47dfc/src/zepto.js#L439-L450
    // TODO remove IE 10 support
    const doc = document
    if (
      doc.readyState === `complete` ||
      (doc.readyState !== `loading` && !doc.documentElement.doScroll)
    ) {
      setTimeout(function () {
        runRender()
      }, 0)
    } else {
      const handler = function () {
        doc.removeEventListener(`DOMContentLoaded`, handler, false)
        window.removeEventListener(`load`, handler, false)

        runRender()
      }

      doc.addEventListener(`DOMContentLoaded`, handler, false)
      window.addEventListener(`load`, handler, false)
    }
  })
})

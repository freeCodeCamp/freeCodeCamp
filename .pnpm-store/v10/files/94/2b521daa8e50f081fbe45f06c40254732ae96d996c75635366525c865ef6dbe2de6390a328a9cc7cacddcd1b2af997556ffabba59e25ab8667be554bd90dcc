import { apiRunner, apiRunnerAsync } from "./api-runner-browser"
import React from "react"
import { Router, navigate, Location, BaseContext } from "@gatsbyjs/reach-router"
import { ScrollContext } from "gatsby-react-router-scroll"
import { StaticQueryContext } from "./static-query"
import {
  SlicesMapContext,
  SlicesContext,
  SlicesResultsContext,
} from "./slice/context"
import {
  shouldUpdateScroll,
  init as navigationInit,
  RouteUpdates,
} from "./navigation"
import emitter from "./emitter"
import PageRenderer from "./page-renderer"
import asyncRequires from "$virtual/async-requires"
import {
  setLoader,
  ProdLoader,
  publicLoader,
  PageResourceStatus,
  getStaticQueryResults,
  getSliceResults,
} from "./loader"
import EnsureResources from "./ensure-resources"
import stripPrefix from "./strip-prefix"

// Generated during bootstrap
import matchPaths from "$virtual/match-paths.json"
import { reactDOMUtils } from "./react-dom-utils"

const loader = new ProdLoader(asyncRequires, matchPaths, window.pageData)
setLoader(loader)
loader.setApiRunner(apiRunner)

const { render, hydrate } = reactDOMUtils()

window.asyncRequires = asyncRequires
window.___emitter = emitter
window.___loader = publicLoader

navigationInit()

const reloadStorageKey = `gatsby-reload-compilation-hash-match`

apiRunnerAsync(`onClientEntry`).then(() => {
  const handleUncaughtError = (error, errorInfo) => {
    console.error(`Uncaught error:`, error, errorInfo)
    apiRunner(`onUncaughtError`, { error, errorInfo })
  }

  const handleCaughtError = (error, errorInfo) => {
    apiRunner(`onCaughtError`, { error, errorInfo })
  }

  // Let plugins register a service worker. The plugin just needs
  // to return true.
  if (apiRunner(`registerServiceWorker`).filter(Boolean).length > 0) {
    require(`./register-service-worker`)
  }

  // In gatsby v2 if Router is used in page using matchPaths
  // paths need to contain full path.
  // For example:
  //   - page have `/app/*` matchPath
  //   - inside template user needs to use `/app/xyz` as path
  // Resetting `basepath`/`baseuri` keeps current behaviour
  // to not introduce breaking change.
  // Remove this in v3
  const RouteHandler = props => (
    <BaseContext.Provider
      value={{
        baseuri: `/`,
        basepath: `/`,
      }}
    >
      <PageRenderer {...props} />
    </BaseContext.Provider>
  )

  const DataContext = React.createContext({})

  const slicesContext = {
    renderEnvironment: `browser`,
  }

  class GatsbyRoot extends React.Component {
    render() {
      const { children } = this.props
      return (
        <Location>
          {({ location }) => (
            <EnsureResources location={location}>
              {({ pageResources, location }) => {
                const staticQueryResults = getStaticQueryResults()
                const sliceResults = getSliceResults()

                return (
                  <StaticQueryContext.Provider value={staticQueryResults}>
                    <SlicesContext.Provider value={slicesContext}>
                      <SlicesResultsContext.Provider value={sliceResults}>
                        <SlicesMapContext.Provider
                          value={pageResources.page.slicesMap}
                        >
                          <DataContext.Provider
                            value={{ pageResources, location }}
                          >
                            {children}
                          </DataContext.Provider>
                        </SlicesMapContext.Provider>
                      </SlicesResultsContext.Provider>
                    </SlicesContext.Provider>
                  </StaticQueryContext.Provider>
                )
              }}
            </EnsureResources>
          )}
        </Location>
      )
    }
  }

  class LocationHandler extends React.Component {
    render() {
      return (
        <DataContext.Consumer>
          {({ pageResources, location }) => (
            <RouteUpdates location={location}>
              <ScrollContext
                location={location}
                shouldUpdateScroll={shouldUpdateScroll}
              >
                <Router
                  basepath={__BASE_PATH__}
                  location={location}
                  id="gatsby-focus-wrapper"
                >
                  <RouteHandler
                    path={
                      pageResources.page.path === `/404.html` ||
                      pageResources.page.path === `/500.html`
                        ? stripPrefix(location.pathname, __BASE_PATH__)
                        : encodeURI(
                            (
                              pageResources.page.matchPath ||
                              pageResources.page.path
                            ).split(`?`)[0]
                          )
                    }
                    {...this.props}
                    location={location}
                    pageResources={pageResources}
                    {...pageResources.json}
                  />
                </Router>
              </ScrollContext>
            </RouteUpdates>
          )}
        </DataContext.Consumer>
      )
    }
  }

  const { pagePath, location: browserLoc } = window

  // Explicitly call navigate if the canonical path (window.pagePath)
  // is different to the browser path (window.location.pathname). SSR
  // page paths might include search params, while SSG and DSG won't.
  // If page path include search params we also compare query params.
  // But only if NONE of the following conditions hold:
  //
  // - The url matches a client side route (page.matchPath)
  // - it's a 404 page
  // - it's the offline plugin shell (/offline-plugin-app-shell-fallback/)
  if (
    pagePath &&
    __BASE_PATH__ + pagePath !==
      browserLoc.pathname + (pagePath.includes(`?`) ? browserLoc.search : ``) &&
    !(
      loader.findMatchPath(stripPrefix(browserLoc.pathname, __BASE_PATH__)) ||
      pagePath.match(/^\/(404|500)(\/?|.html)$/) ||
      pagePath.match(/^\/offline-plugin-app-shell-fallback\/?$/)
    )
  ) {
    navigate(
      __BASE_PATH__ +
        pagePath +
        (!pagePath.includes(`?`) ? browserLoc.search : ``) +
        browserLoc.hash,
      {
        replace: true,
      }
    )
  }

  // It's possible that sessionStorage can throw an exception if access is not granted, see https://github.com/gatsbyjs/gatsby/issues/34512
  const getSessionStorage = () => {
    try {
      return sessionStorage
    } catch {
      return null
    }
  }

  publicLoader.loadPage(browserLoc.pathname + browserLoc.search).then(page => {
    const sessionStorage = getSessionStorage()

    if (
      page?.page?.webpackCompilationHash &&
      page.page.webpackCompilationHash !== window.___webpackCompilationHash
    ) {
      // Purge plugin-offline cache
      if (
        `serviceWorker` in navigator &&
        navigator.serviceWorker.controller !== null &&
        navigator.serviceWorker.controller.state === `activated`
      ) {
        navigator.serviceWorker.controller.postMessage({
          gatsbyApi: `clearPathResources`,
        })
      }

      // We have not matching html + js (inlined `window.___webpackCompilationHash`)
      // with our data (coming from `app-data.json` file). This can cause issues such as
      // errors trying to load static queries (as list of static queries is inside `page-data`
      // which might not match to currently loaded `.js` scripts).
      // We are making attempt to reload if hashes don't match, but we also have to handle case
      // when reload doesn't fix it (possibly broken deploy) so we don't end up in infinite reload loop
      if (sessionStorage) {
        const isReloaded = sessionStorage.getItem(reloadStorageKey) === `1`

        if (!isReloaded) {
          sessionStorage.setItem(reloadStorageKey, `1`)
          window.location.reload(true)
          return
        }
      }
    }

    if (sessionStorage) {
      sessionStorage.removeItem(reloadStorageKey)
    }

    if (!page || page.status === PageResourceStatus.Error) {
      const message = `page resources for ${browserLoc.pathname} not found. Not rendering React`

      // if the chunk throws an error we want to capture the real error
      // This should help with https://github.com/gatsbyjs/gatsby/issues/19618
      if (page && page.error) {
        console.error(message)
        throw page.error
      }

      throw new Error(message)
    }

    const SiteRoot = apiRunner(
      `wrapRootElement`,
      { element: <LocationHandler /> },
      <LocationHandler />,
      ({ result }) => {
        return { element: result }
      }
    ).pop()

    const App = function App() {
      const onClientEntryRanRef = React.useRef(false)

      React.useEffect(() => {
        if (!onClientEntryRanRef.current) {
          onClientEntryRanRef.current = true
          if (performance.mark) {
            performance.mark(`onInitialClientRender`)
          }

          apiRunner(`onInitialClientRender`)
        }
      }, [])

      return <GatsbyRoot>{SiteRoot}</GatsbyRoot>
    }

    const focusEl = document.getElementById(`gatsby-focus-wrapper`)

    // Client only pages have any empty body so we just do a normal
    // render to avoid React complaining about hydration mis-matches.
    let defaultRenderer = (Component, el) =>
      render(Component, el, {
        onUncaughtError: handleUncaughtError,
        onCaughtError: handleCaughtError,
      })

    if (focusEl && focusEl.children.length) {
      defaultRenderer = (Component, el) =>
        hydrate(Component, el, {
          onUncaughtError: handleUncaughtError,
          onCaughtError: handleCaughtError,
        })
    }

    const renderer =
      apiRunner(`replaceHydrateFunction`, undefined, defaultRenderer)[0] ||
      defaultRenderer

    function runRender() {
      const rootElement =
        typeof window !== `undefined`
          ? document.getElementById(`___gatsby`)
          : null

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

    return
  })
})

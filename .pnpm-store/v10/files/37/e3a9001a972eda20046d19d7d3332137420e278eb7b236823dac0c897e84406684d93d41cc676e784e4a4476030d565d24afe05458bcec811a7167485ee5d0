"use strict";

exports.__esModule = true;
exports.wrapRootElement = exports.wrapPageElement = exports.shouldUpdateScroll = exports.replaceHydrateFunction = exports.registerServiceWorker = exports.onUncaughtError = exports.onServiceWorkerUpdateReady = exports.onServiceWorkerUpdateFound = exports.onServiceWorkerRedundant = exports.onServiceWorkerInstalled = exports.onServiceWorkerActive = exports.onRouteUpdateDelayed = exports.onRouteUpdate = exports.onPrefetchPathname = exports.onPreRouteUpdate = exports.onPostPrefetchPathname = exports.onInitialClientRender = exports.onClientEntry = exports.onCaughtError = exports.disableCorePrefetching = void 0;
/**
 * This argument is empty. This is for consistency so `pluginOptions` is always second argument.
 * @typedef {undefined} emptyArg
 */

/**
 * Object containing options defined in `gatsby-config.js`
 * @typedef {object} pluginOptions
 */

/**
 * Called when the Gatsby browser runtime first starts.
 * @param {emptyArg} _
 * @param {pluginOptions} pluginOptions
 * @example
 * exports.onClientEntry = () => {
 *   console.log("We've started!")
 *   callAnalyticsAPI()
 * }
 */
const onClientEntry = true;

/**
 * Called when the initial (but not subsequent) render of Gatsby App is done on the client.
 * @param {emptyArg} _
 * @param {pluginOptions} pluginOptions
 * @example
 * exports.onInitialClientRender = () => {
 *   console.log("ReactDOM.render has executed")
 * }
 */
exports.onClientEntry = onClientEntry;
const onInitialClientRender = true;

/**
 * Called when changing location is started.
 * @param {object} $0
 * @param {object} $0.location A location object
 * @param {object|null} $0.prevLocation The previous location object
 * @param {pluginOptions} pluginOptions
 * @example
 * exports.onPreRouteUpdate = ({ location, prevLocation }) => {
 *   console.log("Gatsby started to change location to", location.pathname)
 *   console.log("Gatsby started to change location from", prevLocation ? prevLocation.pathname : null)
 * }
 */
exports.onInitialClientRender = onInitialClientRender;
const onPreRouteUpdate = true;

/**
 * Called when changing location is longer than 1 second.
 * @param {object} $0
 * @param {object} $0.location A location object
 * @param {object} $0.action The "action" that caused the route change
 * @param {pluginOptions} pluginOptions
 * @example
 * exports.onRouteUpdateDelayed = () => {
 *   console.log("We can show loading indicator now")
 * }
 */
exports.onPreRouteUpdate = onPreRouteUpdate;
const onRouteUpdateDelayed = true;

/**
 * Called when the user changes routes, including on the initial load of the app
 * @param {object} $0
 * @param {object} $0.location A location object
 * @param {object|null} $0.prevLocation The previous location object
 * @param {pluginOptions} pluginOptions
 * @example
 * exports.onRouteUpdate = ({ location, prevLocation }) => {
 *   console.log('new pathname', location.pathname)
 *   console.log('old pathname', prevLocation ? prevLocation.pathname : null)
 * }
 */
exports.onRouteUpdateDelayed = onRouteUpdateDelayed;
const onRouteUpdate = true;

/**
 * Allows a plugin to influence scrolling behavior on navigation.
 * Default behavior is persisting last known scrolling positions and scrolling back to them on navigation.
 * Plugins can also override this and return an Array of coordinates or an element name to scroll to.
 * @param {object} $0
 * @param {object} $0.prevRouterProps The previous state of the router before the route change.
 * @param {object} $0.routerProps The current state of the router.
 * @param {string} $0.pathname The new pathname (for backwards compatibility with v1).
 * @param {function} $0.getSavedScrollPosition Takes a location and returns the
 * coordinates of the last scroll position for that location, or `null` depending on
 * whether a scroll happened or not. Gatsby saves scroll positions for each route
 * in `SessionStorage`, so they are available after page reload.
 * @returns {(boolean|string|Array)} Should return either an [x, y] Array of
 * coordinates to scroll to, a string of the `id` or `name` of an element to
 * scroll to, `false` to not update the scroll position, or `true` for the
 * default behavior.
 * @param {pluginOptions} pluginOptions
 * @example
 * exports.shouldUpdateScroll = ({
 *   routerProps: { location },
 *   getSavedScrollPosition
 * }) => {
 *   const currentPosition = getSavedScrollPosition(location)
 *   const queriedPosition = getSavedScrollPosition({ pathname: `/random` })
 *
 *   window.scrollTo(...(currentPosition || [0, 0]))
 *
 *   return false
 * }
 */
exports.onRouteUpdate = onRouteUpdate;
const shouldUpdateScroll = true;

/**
 * Allow a plugin to register a Service Worker. Should be a function that returns true.
 * @param {emptyArg} _
 * @param {pluginOptions} pluginOptions
 * @returns {boolean} Should Gatsby register `/sw.js` service worker
 * @example
 * exports.registerServiceWorker = () => true
 */
exports.shouldUpdateScroll = shouldUpdateScroll;
const registerServiceWorker = true;

/**
 * Can be used to wrap each page element.
 *
 * This is useful for setting wrapper components around pages that won't get
 * unmounted on page changes. For setting context providers, use [wrapRootElement](#wrapRootElement).
 *
 * _Note:_
 * There is an equivalent hook in Gatsby's [SSR API](/docs/ssr-apis/#wrapPageElement).
 * It is recommended to use both APIs together.
 * For example usage, check out [Using i18n](https://github.com/gatsbyjs/gatsby/tree/master/examples/using-i18n).
 * @param {object} $0
 * @param {ReactNode} $0.element The "Page" React Element built by Gatsby.
 * @param {object} $0.props Props object used by page.
 * @param {pluginOptions} pluginOptions
 * @returns {ReactNode} Wrapped element
 * @example
 * const React = require("react")
 * const Layout = require("./src/components/layout").default
 *
 * exports.wrapPageElement = ({ element, props }) => {
 *   // props provide same data to Layout as Page element will get
 *   // including location, data, etc - you don't need to pass it
 *   return <Layout {...props}>{element}</Layout>
 * }
 */
exports.registerServiceWorker = registerServiceWorker;
const wrapPageElement = true;

/**
 * Can be used to the wrap the root element.
 *
 * This is useful to set up any context providers that will wrap your application.
 * For setting persistent UI elements around pages use [wrapPageElement](#wrapPageElement).
 *
 * _Note:_
 * There is an equivalent hook in Gatsby's [SSR API](/docs/ssr-apis/#wrapRootElement).
 * It is recommended to use both APIs together.
 * For example usage, check out [Using redux](https://github.com/gatsbyjs/gatsby/tree/master/examples/using-redux).
 * @param {object} $0
 * @param {ReactNode} $0.element The "Root" React Element built by Gatsby.
 * @param {pluginOptions} pluginOptions
 * @returns {ReactNode} Wrapped element
 * @example
 * const React = require("react")
 * const { Provider } = require("react-redux")
 *
 * const createStore = require("./src/state/createStore")
 * const store = createStore()
 *
 * exports.wrapRootElement = ({ element }) => {
 *   return (
 *     <Provider store={store}>
 *       {element}
 *     </Provider>
 *   )
 * }
 */
exports.wrapPageElement = wrapPageElement;
const wrapRootElement = true;

/**
 * Called when prefetching for a pathname is triggered. Allows
 * for plugins with custom prefetching logic.
 * @param {object} $0
 * @param {string} $0.pathname The pathname whose resources should now be prefetched
 * @param {function} $0.loadPage Function for fetching resources related to pathname
 * @param {pluginOptions} pluginOptions
 */
exports.wrapRootElement = wrapRootElement;
const onPrefetchPathname = true;

/**
 * Called when prefetching for a pathname is successful. Allows
 * for plugins with custom prefetching logic.
 * @param {object} $0
 * @param {string} $0.pathname The pathname whose resources have now been prefetched
 * @param {pluginOptions} pluginOptions
 */
exports.onPrefetchPathname = onPrefetchPathname;
const onPostPrefetchPathname = true;

/**
 * Plugins can take over prefetching logic. If they do, they should call this
 * to disable the now duplicate core prefetching logic.
 * @param {emptyArg} _
 * @param {pluginOptions} pluginOptions
 * @returns {boolean} Should disable core prefetching
 * @example
 * exports.disableCorePrefetching = () => true
 */
exports.onPostPrefetchPathname = onPostPrefetchPathname;
const disableCorePrefetching = true;

/**
 * Allow a plugin to replace the `ReactDOM.createRoot`/`render` function calls with a custom renderer.
 * @param {emptyArg} _
 * @param {pluginOptions} pluginOptions
 * @returns {Function} This method should return a function with same signature as `ReactDOM.createRoot`/`render`
 *
 * _Note:_
 * Refer to React's documentation on [`ReactDOM.createRoot`/`render`](https://reactjs.org/docs/react-dom-client.html#createroot) for more information.
 * Note that `ReactDOM.createRoot`/`render` is only available in React 18 or greater, prior versions should use [`ReactDOM.render`](https://reactjs.org/docs/react-dom.html#render).
 * @example
 * exports.replaceHydrateFunction = () => {
 *   return (element, container) => {
 *     const root = ReactDOM.createRoot(container)
 *     root.render(element)
 *   }
 * }
 */
exports.disableCorePrefetching = disableCorePrefetching;
const replaceHydrateFunction = true;

/**
 * Inform plugins when a service worker has been installed.
 * @param {object} $0
 * @param {object} $0.serviceWorker The service worker instance.
 * @param {pluginOptions} pluginOptions
 */
exports.replaceHydrateFunction = replaceHydrateFunction;
const onServiceWorkerInstalled = true;

/**
 * Inform plugins of when a service worker has an update available.
 * @param {object} $0
 * @param {object} $0.serviceWorker The service worker instance.
 * @param {pluginOptions} pluginOptions
 */
exports.onServiceWorkerInstalled = onServiceWorkerInstalled;
const onServiceWorkerUpdateFound = true;

/**
 * Inform plugins when a service worker has been updated in the background
 * and the page is ready to reload to apply changes.
 * @param {object} $0
 * @param {object} $0.serviceWorker The service worker instance.
 * @param {pluginOptions} pluginOptions
 */
exports.onServiceWorkerUpdateFound = onServiceWorkerUpdateFound;
const onServiceWorkerUpdateReady = true;

/**
 * Inform plugins when a service worker has become active.
 * @param {object} $0
 * @param {object} $0.serviceWorker The service worker instance.
 * @param {pluginOptions} pluginOptions
 */
exports.onServiceWorkerUpdateReady = onServiceWorkerUpdateReady;
const onServiceWorkerActive = true;

/**
 * Inform plugins when a service worker is redundant.
 * @param {object} $0
 * @param {object} $0.serviceWorker The service worker instance.
 * @param {pluginOptions} pluginOptions
 */
exports.onServiceWorkerActive = onServiceWorkerActive;
const onServiceWorkerRedundant = true;

/**
 * Called when React catches an error during rendering, in a lifecycle method, or in the constructor of the whole tree.
 * This corresponds to React 19's `onCaughtError` root option.
 * @param {object} $0
 * @param {Error} $0.error The error that was caught.
 * @param {object} $0.errorInfo Additional error information containing componentStack.
 * @param {pluginOptions} pluginOptions
 * @example
 * exports.onCaughtError = ({ error, errorInfo }) => {
 *   console.log('Caught error:', error.message)
 *   // Log to external error reporting service
 * }
 */
exports.onServiceWorkerRedundant = onServiceWorkerRedundant;
const onCaughtError = true;

/**
 * Called when React receives an error that was thrown by an asynchronous event (e.g., setTimeout, requestIdleCallback, etc).
 * This corresponds to React 19's `onUncaughtError` root option.
 * @param {object} $0
 * @param {Error} $0.error The error that was thrown.
 * @param {object} $0.errorInfo Additional error information containing componentStack.
 * @param {pluginOptions} pluginOptions
 * @example
 * exports.onUncaughtError = ({ error, errorInfo }) => {
 *   console.error('Uncaught error:', error.message)
 *   // Log to external error reporting service
 * }
 */
exports.onCaughtError = onCaughtError;
const onUncaughtError = true;
exports.onUncaughtError = onUncaughtError;
//# sourceMappingURL=api-browser-docs.js.map
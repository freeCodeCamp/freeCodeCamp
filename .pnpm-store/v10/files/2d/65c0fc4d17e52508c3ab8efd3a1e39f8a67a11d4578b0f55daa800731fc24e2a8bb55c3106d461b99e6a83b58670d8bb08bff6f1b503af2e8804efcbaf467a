import prefetchHelper from "./prefetch"
import emitter from "./emitter"
import { setMatchPaths, findPath, findMatchPath } from "./find-path"

/**
 * Available resource loading statuses
 */
export const PageResourceStatus = {
  /**
   * At least one of critical resources failed to load
   */
  Error: `error`,
  /**
   * Resources loaded successfully
   */
  Success: `success`,
}

const preferDefault = m => (m && m.default) || m

const stripSurroundingSlashes = s => {
  s = s[0] === `/` ? s.slice(1) : s
  s = s.endsWith(`/`) ? s.slice(0, -1) : s
  return s
}

const createPageDataUrl = rawPath => {
  const [path, maybeSearch] = rawPath.split(`?`)
  const fixedPath = path === `/` ? `index` : stripSurroundingSlashes(path)
  return `${__PATH_PREFIX__}/page-data/${fixedPath}/page-data.json${
    maybeSearch ? `?${maybeSearch}` : ``
  }`
}

/**
 * Utility to check the path that goes into doFetch for e.g. potential malicious intentions.
 * It checks for "//" because with this you could do a fetch request to a different domain.
 */
const shouldAbortFetch = rawPath => rawPath.startsWith(`//`)

function doFetch(url, method = `GET`) {
  return new Promise(resolve => {
    const req = new XMLHttpRequest()
    req.open(method, url, true)
    req.onreadystatechange = () => {
      if (req.readyState == 4) {
        resolve(req)
      }
    }
    req.send(null)
  })
}

const doesConnectionSupportPrefetch = () => {
  if (
    `connection` in navigator &&
    typeof navigator.connection !== `undefined`
  ) {
    if ((navigator.connection.effectiveType || ``).includes(`2g`)) {
      return false
    }
    if (navigator.connection.saveData) {
      return false
    }
  }
  return true
}

// Regex that matches common search crawlers
const BOT_REGEX = /bot|crawler|spider|crawling/i

const toPageResources = (pageData, component = null, head) => {
  const page = {
    componentChunkName: pageData.componentChunkName,
    path: pageData.path,
    webpackCompilationHash: pageData.webpackCompilationHash,
    matchPath: pageData.matchPath,
    staticQueryHashes: pageData.staticQueryHashes,
    getServerDataError: pageData.getServerDataError,
    slicesMap: pageData.slicesMap ?? {},
  }

  return {
    component,
    head,
    json: pageData.result,
    page,
  }
}

function waitForResponse(response) {
  return new Promise(resolve => {
    try {
      const result = response.readRoot()
      resolve(result)
    } catch (err) {
      if (
        Object.hasOwnProperty.call(err, `_response`) &&
        Object.hasOwnProperty.call(err, `_status`)
      ) {
        setTimeout(() => {
          waitForResponse(response).then(resolve)
        }, 200)
      } else {
        throw err
      }
    }
  })
}

export class BaseLoader {
  constructor(loadComponent, matchPaths) {
    // Map of pagePath -> Page. Where Page is an object with: {
    //   status: PageResourceStatus.Success || PageResourceStatus.Error,
    //   payload: PageResources, // undefined if PageResourceStatus.Error
    // }
    // PageResources is {
    //   component,
    //   json: pageData.result,
    //   page: {
    //     componentChunkName,
    //     path,
    //     webpackCompilationHash,
    //     staticQueryHashes
    //   },
    //   staticQueryResults
    // }
    this.pageDb = new Map()
    this.inFlightDb = new Map()
    this.staticQueryDb = {}
    this.pageDataDb = new Map()
    this.partialHydrationDb = new Map()
    this.slicesDataDb = new Map()
    this.sliceInflightDb = new Map()
    this.slicesDb = new Map()
    this.isPrefetchQueueRunning = false
    this.prefetchQueued = []
    this.prefetchTriggered = new Set()
    this.prefetchCompleted = new Set()
    this.loadComponent = loadComponent
    setMatchPaths(matchPaths)
  }

  inFlightNetworkRequests = new Map()

  memoizedGet(url) {
    let inFlightPromise = this.inFlightNetworkRequests.get(url)

    if (!inFlightPromise) {
      inFlightPromise = doFetch(url, `GET`)
      this.inFlightNetworkRequests.set(url, inFlightPromise)
    }

    // Prefer duplication with then + catch over .finally to prevent problems in ie11 + firefox
    return inFlightPromise
      .then(response => {
        this.inFlightNetworkRequests.delete(url)
        return response
      })
      .catch(err => {
        this.inFlightNetworkRequests.delete(url)
        throw err
      })
  }

  setApiRunner(apiRunner) {
    this.apiRunner = apiRunner
    this.prefetchDisabled = apiRunner(`disableCorePrefetching`).some(a => a)
  }

  fetchPageDataJson(loadObj) {
    const { pagePath, retries = 0 } = loadObj
    const url = createPageDataUrl(pagePath)
    return this.memoizedGet(url).then(req => {
      const { status, responseText } = req

      // Handle 200
      if (status === 200) {
        try {
          const jsonPayload = JSON.parse(responseText)
          if (jsonPayload.path === undefined) {
            throw new Error(`not a valid pageData response`)
          }

          const maybeSearch = pagePath.split(`?`)[1]
          if (maybeSearch && !jsonPayload.path.includes(maybeSearch)) {
            jsonPayload.path += `?${maybeSearch}`
          }

          return Object.assign(loadObj, {
            status: PageResourceStatus.Success,
            payload: jsonPayload,
          })
        } catch (err) {
          // continue regardless of error
        }
      }

      // Handle 404
      if (status === 404 || status === 200) {
        // If the request was for a 404/500 page and it doesn't exist, we're done
        if (pagePath === `/404.html` || pagePath === `/500.html`) {
          return Object.assign(loadObj, {
            status: PageResourceStatus.Error,
          })
        }

        // Need some code here to cache the 404 request. In case
        // multiple loadPageDataJsons result in 404s
        return this.fetchPageDataJson(
          Object.assign(loadObj, { pagePath: `/404.html`, notFound: true })
        )
      }

      // handle 500 response (Unrecoverable)
      if (status === 500) {
        return this.fetchPageDataJson(
          Object.assign(loadObj, {
            pagePath: `/500.html`,
            internalServerError: true,
          })
        )
      }

      // Handle everything else, including status === 0, and 503s. Should retry
      if (retries < 3) {
        return this.fetchPageDataJson(
          Object.assign(loadObj, { retries: retries + 1 })
        )
      }

      // Retried 3 times already, result is an error.
      return Object.assign(loadObj, {
        status: PageResourceStatus.Error,
      })
    })
  }

  fetchPartialHydrationJson(loadObj) {
    const { pagePath, retries = 0 } = loadObj
    const url = createPageDataUrl(pagePath).replace(`.json`, `-rsc.json`)
    return this.memoizedGet(url).then(req => {
      const { status, responseText } = req

      // Handle 200
      if (status === 200) {
        try {
          return Object.assign(loadObj, {
            status: PageResourceStatus.Success,
            payload: responseText,
          })
        } catch (err) {
          // continue regardless of error
        }
      }

      // Handle 404
      if (status === 404 || status === 200) {
        // If the request was for a 404/500 page and it doesn't exist, we're done
        if (pagePath === `/404.html` || pagePath === `/500.html`) {
          return Object.assign(loadObj, {
            status: PageResourceStatus.Error,
          })
        }

        // Need some code here to cache the 404 request. In case
        // multiple loadPageDataJsons result in 404s
        return this.fetchPartialHydrationJson(
          Object.assign(loadObj, { pagePath: `/404.html`, notFound: true })
        )
      }

      // handle 500 response (Unrecoverable)
      if (status === 500) {
        return this.fetchPartialHydrationJson(
          Object.assign(loadObj, {
            pagePath: `/500.html`,
            internalServerError: true,
          })
        )
      }

      // Handle everything else, including status === 0, and 503s. Should retry
      if (retries < 3) {
        return this.fetchPartialHydrationJson(
          Object.assign(loadObj, { retries: retries + 1 })
        )
      }

      // Retried 3 times already, result is an error.
      return Object.assign(loadObj, {
        status: PageResourceStatus.Error,
      })
    })
  }

  loadPageDataJson(rawPath) {
    const pagePath = findPath(rawPath)
    if (this.pageDataDb.has(pagePath)) {
      const pageData = this.pageDataDb.get(pagePath)
      if (process.env.BUILD_STAGE !== `develop` || !pageData.stale) {
        return Promise.resolve(pageData)
      }
    }

    return this.fetchPageDataJson({ pagePath }).then(pageData => {
      this.pageDataDb.set(pagePath, pageData)

      return pageData
    })
  }

  loadPartialHydrationJson(rawPath) {
    const pagePath = findPath(rawPath)
    if (this.partialHydrationDb.has(pagePath)) {
      const pageData = this.partialHydrationDb.get(pagePath)
      if (process.env.BUILD_STAGE !== `develop` || !pageData.stale) {
        return Promise.resolve(pageData)
      }
    }

    return this.fetchPartialHydrationJson({ pagePath }).then(pageData => {
      this.partialHydrationDb.set(pagePath, pageData)

      return pageData
    })
  }

  loadSliceDataJson(sliceName) {
    if (this.slicesDataDb.has(sliceName)) {
      const jsonPayload = this.slicesDataDb.get(sliceName)
      return Promise.resolve({ sliceName, jsonPayload })
    }

    const url = `${__PATH_PREFIX__}/slice-data/${sliceName}.json`
    return doFetch(url, `GET`).then(res => {
      const jsonPayload = JSON.parse(res.responseText)

      this.slicesDataDb.set(sliceName, jsonPayload)
      return { sliceName, jsonPayload }
    })
  }

  findMatchPath(rawPath) {
    return findMatchPath(rawPath)
  }

  // TODO check all uses of this and whether they use undefined for page resources not exist
  loadPage(rawPath) {
    const pagePath = findPath(rawPath)
    if (this.pageDb.has(pagePath)) {
      const page = this.pageDb.get(pagePath)
      if (process.env.BUILD_STAGE !== `develop` || !page.payload.stale) {
        if (page.error) {
          return Promise.resolve({
            error: page.error,
            status: page.status,
          })
        }

        return Promise.resolve(page.payload)
      }
    }

    if (this.inFlightDb.has(pagePath)) {
      return this.inFlightDb.get(pagePath)
    }

    const loadDataPromises = [
      this.loadAppData(),
      this.loadPageDataJson(pagePath),
    ]

    if (global.hasPartialHydration) {
      loadDataPromises.push(this.loadPartialHydrationJson(pagePath))
    }

    const inFlightPromise = Promise.all(loadDataPromises).then(allData => {
      const [appDataResponse, pageDataResponse, rscDataResponse] = allData

      if (
        pageDataResponse.status === PageResourceStatus.Error ||
        rscDataResponse?.status === PageResourceStatus.Error
      ) {
        return {
          status: PageResourceStatus.Error,
        }
      }

      let pageData = pageDataResponse.payload

      const {
        componentChunkName,
        staticQueryHashes: pageStaticQueryHashes = [],
        slicesMap = {},
      } = pageData

      const finalResult = {}

      const dedupedSliceNames = Array.from(new Set(Object.values(slicesMap)))

      const loadSlice = slice => {
        if (this.slicesDb.has(slice.name)) {
          return this.slicesDb.get(slice.name)
        } else if (this.sliceInflightDb.has(slice.name)) {
          return this.sliceInflightDb.get(slice.name)
        }

        const inFlight = this.loadComponent(slice.componentChunkName).then(
          component => {
            return {
              component: preferDefault(component),
              sliceContext: slice.result.sliceContext,
              data: slice.result.data,
            }
          }
        )

        this.sliceInflightDb.set(slice.name, inFlight)
        inFlight.then(results => {
          this.slicesDb.set(slice.name, results)
          this.sliceInflightDb.delete(slice.name)
        })

        return inFlight
      }

      return Promise.all(
        dedupedSliceNames.map(sliceName => this.loadSliceDataJson(sliceName))
      ).then(slicesData => {
        const slices = []
        const dedupedStaticQueryHashes = [...pageStaticQueryHashes]

        for (const { jsonPayload, sliceName } of Object.values(slicesData)) {
          slices.push({ name: sliceName, ...jsonPayload })
          for (const staticQueryHash of jsonPayload.staticQueryHashes) {
            if (!dedupedStaticQueryHashes.includes(staticQueryHash)) {
              dedupedStaticQueryHashes.push(staticQueryHash)
            }
          }
        }

        const loadChunkPromises = [
          Promise.all(slices.map(loadSlice)),
          this.loadComponent(componentChunkName, `head`),
        ]

        if (!global.hasPartialHydration) {
          loadChunkPromises.push(this.loadComponent(componentChunkName))
        }

        // In develop we have separate chunks for template and Head components
        // to enable HMR (fast refresh requires single exports).
        // In production we have shared chunk with both exports. Double loadComponent here
        // will be deduped by webpack runtime resulting in single request and single module
        // being loaded for both `component` and `head`.
        // get list of components to get
        const componentChunkPromises = Promise.all(loadChunkPromises).then(
          components => {
            const [sliceComponents, headComponent, pageComponent] = components

            finalResult.createdAt = new Date()

            for (const sliceComponent of sliceComponents) {
              if (!sliceComponent || sliceComponent instanceof Error) {
                finalResult.status = PageResourceStatus.Error
                finalResult.error = sliceComponent
              }
            }

            if (
              !global.hasPartialHydration &&
              (!pageComponent || pageComponent instanceof Error)
            ) {
              finalResult.status = PageResourceStatus.Error
              finalResult.error = pageComponent
            }

            let pageResources

            if (finalResult.status !== PageResourceStatus.Error) {
              finalResult.status = PageResourceStatus.Success
              if (
                pageDataResponse.notFound === true ||
                rscDataResponse?.notFound === true
              ) {
                finalResult.notFound = true
              }
              pageData = Object.assign(pageData, {
                webpackCompilationHash: appDataResponse
                  ? appDataResponse.webpackCompilationHash
                  : ``,
              })

              if (typeof rscDataResponse?.payload === `string`) {
                pageResources = toPageResources(pageData, null, headComponent)

                pageResources.partialHydration = rscDataResponse.payload

                const readableStream = new ReadableStream({
                  start(controller) {
                    const te = new TextEncoder()
                    controller.enqueue(te.encode(rscDataResponse.payload))
                  },
                  pull(controller) {
                    // close on next read when queue is empty
                    controller.close()
                  },
                  cancel() {},
                })

                // Only load this experimental module if opting in to experimental Partial Hydration
                return import(`react-server-dom-webpack`)
                  .then(({ createFromReadableStream }) =>
                    waitForResponse(createFromReadableStream(readableStream))
                  )
                  .then(result => {
                    pageResources.partialHydration = result

                    return pageResources
                  })
              } else {
                pageResources = toPageResources(
                  pageData,
                  pageComponent,
                  headComponent
                )
              }
            }

            // undefined if final result is an error
            return pageResources
          }
        )

        // get list of static queries to get
        const staticQueryBatchPromise = Promise.all(
          dedupedStaticQueryHashes.map(staticQueryHash => {
            // Check for cache in case this static query result has already been loaded
            if (this.staticQueryDb[staticQueryHash]) {
              const jsonPayload = this.staticQueryDb[staticQueryHash]
              return { staticQueryHash, jsonPayload }
            }

            return this.memoizedGet(
              `${__PATH_PREFIX__}/page-data/sq/d/${staticQueryHash}.json`
            )
              .then(req => {
                const jsonPayload = JSON.parse(req.responseText)
                return { staticQueryHash, jsonPayload }
              })
              .catch(() => {
                throw new Error(
                  `We couldn't load "${__PATH_PREFIX__}/page-data/sq/d/${staticQueryHash}.json"`
                )
              })
          })
        ).then(staticQueryResults => {
          const staticQueryResultsMap = {}

          staticQueryResults.forEach(({ staticQueryHash, jsonPayload }) => {
            staticQueryResultsMap[staticQueryHash] = jsonPayload
            this.staticQueryDb[staticQueryHash] = jsonPayload
          })

          return staticQueryResultsMap
        })

        return (
          Promise.all([componentChunkPromises, staticQueryBatchPromise])
            .then(([pageResources, staticQueryResults]) => {
              let payload
              if (pageResources) {
                payload = { ...pageResources, staticQueryResults }
                finalResult.payload = payload
                emitter.emit(`onPostLoadPageResources`, {
                  page: payload,
                  pageResources: payload,
                })
              }

              this.pageDb.set(pagePath, finalResult)

              if (finalResult.error) {
                return {
                  error: finalResult.error,
                  status: finalResult.status,
                }
              }

              return payload
            })
            // when static-query fail to load we throw a better error
            .catch(err => {
              return {
                error: err,
                status: PageResourceStatus.Error,
              }
            })
        )
      })
    })

    inFlightPromise
      .then(() => {
        this.inFlightDb.delete(pagePath)
      })
      .catch(error => {
        this.inFlightDb.delete(pagePath)
        throw error
      })

    this.inFlightDb.set(pagePath, inFlightPromise)

    return inFlightPromise
  }

  // returns undefined if the page does not exists in cache
  loadPageSync(rawPath, options = {}) {
    const pagePath = findPath(rawPath)
    if (this.pageDb.has(pagePath)) {
      const pageData = this.pageDb.get(pagePath)

      if (pageData.payload) {
        return pageData.payload
      }

      if (options?.withErrorDetails) {
        return {
          error: pageData.error,
          status: pageData.status,
        }
      }
    }
    return undefined
  }

  shouldPrefetch(pagePath) {
    // Skip prefetching if we know user is on slow or constrained connection
    if (!doesConnectionSupportPrefetch()) {
      return false
    }

    // Don't prefetch if this is a crawler bot
    if (navigator.userAgent && BOT_REGEX.test(navigator.userAgent)) {
      return false
    }

    // Check if the page exists.
    if (this.pageDb.has(pagePath)) {
      return false
    }

    return true
  }

  prefetch(pagePath) {
    if (!this.shouldPrefetch(pagePath)) {
      return {
        then: resolve => resolve(false),
        abort: () => {},
      }
    }
    if (this.prefetchTriggered.has(pagePath)) {
      return {
        then: resolve => resolve(true),
        abort: () => {},
      }
    }

    const defer = {
      resolve: null,
      reject: null,
      promise: null,
    }
    defer.promise = new Promise((resolve, reject) => {
      defer.resolve = resolve
      defer.reject = reject
    })
    this.prefetchQueued.push([pagePath, defer])
    const abortC = new AbortController()
    abortC.signal.addEventListener(`abort`, () => {
      const index = this.prefetchQueued.findIndex(([p]) => p === pagePath)
      // remove from the queue
      if (index !== -1) {
        this.prefetchQueued.splice(index, 1)
      }
    })

    if (!this.isPrefetchQueueRunning) {
      this.isPrefetchQueueRunning = true
      setTimeout(() => {
        this._processNextPrefetchBatch()
      }, 3000)
    }

    return {
      then: (resolve, reject) => defer.promise.then(resolve, reject),
      abort: abortC.abort.bind(abortC),
    }
  }

  _processNextPrefetchBatch() {
    const idleCallback = window.requestIdleCallback || (cb => setTimeout(cb, 0))

    idleCallback(() => {
      const toPrefetch = this.prefetchQueued.splice(0, 4)
      const prefetches = Promise.all(
        toPrefetch.map(([pagePath, dPromise]) => {
          // Tell plugins with custom prefetching logic that they should start
          // prefetching this path.
          if (!this.prefetchTriggered.has(pagePath)) {
            this.apiRunner(`onPrefetchPathname`, { pathname: pagePath })
            this.prefetchTriggered.add(pagePath)
          }

          // If a plugin has disabled core prefetching, stop now.
          if (this.prefetchDisabled) {
            return dPromise.resolve(false)
          }

          return this.doPrefetch(findPath(pagePath)).then(() => {
            if (!this.prefetchCompleted.has(pagePath)) {
              this.apiRunner(`onPostPrefetchPathname`, { pathname: pagePath })
              this.prefetchCompleted.add(pagePath)
            }

            dPromise.resolve(true)
          })
        })
      )

      if (this.prefetchQueued.length) {
        prefetches.then(() => {
          setTimeout(() => {
            this._processNextPrefetchBatch()
          }, 3000)
        })
      } else {
        this.isPrefetchQueueRunning = false
      }
    })
  }

  doPrefetch(pagePath) {
    const pageDataUrl = createPageDataUrl(pagePath)

    if (global.hasPartialHydration) {
      return Promise.all([
        prefetchHelper(pageDataUrl, {
          crossOrigin: `anonymous`,
          as: `fetch`,
        }).then(() =>
          // This was just prefetched, so will return a response from
          // the cache instead of making another request to the server
          this.loadPageDataJson(pagePath)
        ),
        prefetchHelper(pageDataUrl.replace(`.json`, `-rsc.json`), {
          crossOrigin: `anonymous`,
          as: `fetch`,
        }).then(() =>
          // This was just prefetched, so will return a response from
          // the cache instead of making another request to the server
          this.loadPartialHydrationJson(pagePath)
        ),
      ])
    } else {
      return prefetchHelper(pageDataUrl, {
        crossOrigin: `anonymous`,
        as: `fetch`,
      }).then(() =>
        // This was just prefetched, so will return a response from
        // the cache instead of making another request to the server
        this.loadPageDataJson(pagePath)
      )
    }
  }

  hovering(rawPath) {
    this.loadPage(rawPath)
  }

  getResourceURLsForPathname(rawPath) {
    const pagePath = findPath(rawPath)
    const page = this.pageDataDb.get(pagePath)
    if (page) {
      const pageResources = toPageResources(page.payload)

      return [
        ...createComponentUrls(pageResources.page.componentChunkName),
        createPageDataUrl(pagePath),
      ]
    } else {
      return null
    }
  }

  isPageNotFound(rawPath) {
    const pagePath = findPath(rawPath)
    const page = this.pageDb.get(pagePath)
    return !page || page.notFound
  }

  loadAppData(retries = 0) {
    return this.memoizedGet(`${__PATH_PREFIX__}/page-data/app-data.json`).then(
      req => {
        const { status, responseText } = req

        let appData

        if (status !== 200 && retries < 3) {
          // Retry 3 times incase of non-200 responses
          return this.loadAppData(retries + 1)
        }

        // Handle 200
        if (status === 200) {
          try {
            const jsonPayload = JSON.parse(responseText)
            if (jsonPayload.webpackCompilationHash === undefined) {
              throw new Error(`not a valid app-data response`)
            }

            appData = jsonPayload
          } catch (err) {
            // continue regardless of error
          }
        }

        return appData
      }
    )
  }
}

const createComponentUrls = componentChunkName =>
  (window.___chunkMapping[componentChunkName] || []).map(
    chunk => __PATH_PREFIX__ + chunk
  )

export class ProdLoader extends BaseLoader {
  constructor(asyncRequires, matchPaths, pageData) {
    const loadComponent = (chunkName, exportType = `components`) => {
      if (!global.hasPartialHydration) {
        exportType = `components`
      }

      if (!asyncRequires[exportType][chunkName]) {
        throw new Error(
          `We couldn't find the correct component chunk with the name "${chunkName}"`
        )
      }

      return (
        asyncRequires[exportType][chunkName]()
          // loader will handle the case when component is error
          .catch(err => err)
      )
    }

    super(loadComponent, matchPaths)

    if (pageData) {
      this.pageDataDb.set(findPath(pageData.path), {
        pagePath: pageData.path,
        payload: pageData,
        status: `success`,
      })
    }
  }

  doPrefetch(pagePath) {
    return super.doPrefetch(pagePath).then(result => {
      if (result.status !== PageResourceStatus.Success) {
        return Promise.resolve()
      }
      const pageData = result.payload
      const chunkName = pageData.componentChunkName
      const componentUrls = createComponentUrls(chunkName)
      return Promise.all(componentUrls.map(prefetchHelper)).then(() => pageData)
    })
  }

  loadPageDataJson(rawPath) {
    return super.loadPageDataJson(rawPath).then(data => {
      if (data.notFound) {
        if (shouldAbortFetch(rawPath)) {
          return data
        }
        // check if html file exist using HEAD request:
        // if it does we should navigate to it instead of showing 404
        return doFetch(rawPath, `HEAD`).then(req => {
          if (req.status === 200) {
            // page (.html file) actually exist (or we asked for 404 )
            // returning page resources status as errored to trigger
            // regular browser navigation to given page
            return {
              status: PageResourceStatus.Error,
            }
          }

          // if HEAD request wasn't 200, return notFound result
          // and show 404 page
          return data
        })
      }
      return data
    })
  }

  loadPartialHydrationJson(rawPath) {
    return super.loadPartialHydrationJson(rawPath).then(data => {
      if (data.notFound) {
        if (shouldAbortFetch(rawPath)) {
          return data
        }
        // check if html file exist using HEAD request:
        // if it does we should navigate to it instead of showing 404
        return doFetch(rawPath, `HEAD`).then(req => {
          if (req.status === 200) {
            // page (.html file) actually exist (or we asked for 404 )
            // returning page resources status as errored to trigger
            // regular browser navigation to given page
            return {
              status: PageResourceStatus.Error,
            }
          }

          // if HEAD request wasn't 200, return notFound result
          // and show 404 page
          return data
        })
      }
      return data
    })
  }
}

let instance

export const setLoader = _loader => {
  instance = _loader
}

export const publicLoader = {
  enqueue: rawPath => instance.prefetch(rawPath),

  // Real methods
  getResourceURLsForPathname: rawPath =>
    instance.getResourceURLsForPathname(rawPath),
  loadPage: rawPath => instance.loadPage(rawPath),
  // TODO add deprecation to v4 so people use withErrorDetails and then we can remove in v5 and change default behaviour
  loadPageSync: (rawPath, options = {}) =>
    instance.loadPageSync(rawPath, options),
  prefetch: rawPath => instance.prefetch(rawPath),
  isPageNotFound: rawPath => instance.isPageNotFound(rawPath),
  hovering: rawPath => instance.hovering(rawPath),
  loadAppData: () => instance.loadAppData(),
}

export default publicLoader

export function getStaticQueryResults() {
  if (instance) {
    return instance.staticQueryDb
  } else {
    return {}
  }
}

export function getSliceResults() {
  if (instance) {
    return instance.slicesDb
  } else {
    return {}
  }
}

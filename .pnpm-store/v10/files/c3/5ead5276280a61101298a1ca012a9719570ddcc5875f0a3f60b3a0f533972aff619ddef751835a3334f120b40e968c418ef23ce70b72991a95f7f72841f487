import { BaseLoader, PageResourceStatus } from "./loader"
import { findPath } from "./find-path"

import getSocket from "./socketIo"
import normalizePagePath from "./normalize-page-path"

// TODO move away from lodash
import isEqual from "lodash/isEqual"

function mergePageEntry(cachedPage, newPageData) {
  return {
    ...cachedPage,
    payload: {
      ...cachedPage.payload,
      json: {
        // For SSR, cachedPage may contain "data" and "serverData"
        // But newPageData may contain only "data" or only "serverData" depending on what was updated
        ...cachedPage.payload.json,
        ...newPageData.result,
      },
      page: {
        ...cachedPage.payload.page,
        getServerDataError: newPageData.getServerDataError,
        staticQueryResults: newPageData.staticQueryResults,
      },
    },
  }
}

class DevLoader extends BaseLoader {
  constructor(asyncRequires, matchPaths) {
    const loadComponent = (chunkName, exportType = `components`) => {
      if (!this.asyncRequires[exportType][chunkName]) {
        if (exportType === `head`) {
          return null
        }
        throw new Error(
          `We couldn't find the correct component chunk with the name "${chunkName}"`
        )
      }

      return (
        this.asyncRequires[exportType][chunkName]()
          // loader will handle the case when component is error
          .catch(err => err)
      )
    }
    super(loadComponent, matchPaths)
    this.asyncRequires = asyncRequires

    const socket = getSocket()

    this.notFoundPagePathsInCaches = new Set()

    if (socket) {
      socket.on(`message`, msg => {
        if (msg.type === `staticQueryResult`) {
          this.handleStaticQueryResultHotUpdate(msg)
        } else if (msg.type === `pageQueryResult`) {
          this.handlePageQueryResultHotUpdate(msg)
        } else if (msg.type === `sliceQueryResult`) {
          this.handleSliceQueryResultHotUpdate(msg)
        } else if (msg.type === `stalePageData`) {
          this.handleStalePageDataMessage(msg)
        } else if (msg.type === `staleServerData`) {
          this.handleStaleServerDataMessage(msg)
        }
      })
    } else if (process.env.NODE_ENV !== `test`) {
      console.warn(`Could not get web socket`)
    }
  }

  updateAsyncRequires(asyncRequires) {
    this.asyncRequires = asyncRequires
  }

  loadPage(pagePath) {
    const realPath = findPath(pagePath)
    return super.loadPage(realPath).then(result => {
      if (this.isPageNotFound(realPath)) {
        this.notFoundPagePathsInCaches.add(realPath)
      }

      return result
    })
  }

  loadPageDataJson(rawPath) {
    return super.loadPageDataJson(rawPath).then(data => {
      // when we can't find a proper 404.html we fallback to dev-404-page
      // we need to make sure to mark it as not found.
      if (
        data.status === PageResourceStatus.Error &&
        rawPath !== `/dev-404-page/`
      ) {
        console.error(
          `404 page could not be found. Checkout https://www.gatsbyjs.com/docs/how-to/adding-common-features/add-404-page/`
        )
        return this.loadPageDataJson(`/dev-404-page/`).then(result =>
          Object.assign({}, data, result)
        )
      }

      return data
    })
  }

  doPrefetch(pagePath) {
    if (process.env.GATSBY_QUERY_ON_DEMAND) {
      return Promise.resolve()
    }
    return super.doPrefetch(pagePath).then(result => result.payload)
  }

  handleStaticQueryResultHotUpdate(msg) {
    const newResult = msg.payload.result

    const cacheKey = msg.payload.id
    const cachedResult = this.staticQueryDb[cacheKey]
    if (!isEqual(newResult, cachedResult)) {
      this.staticQueryDb[cacheKey] = newResult
      ___emitter.emit(`staticQueryResult`, newResult)
    }
  }

  handleSliceQueryResultHotUpdate(msg) {
    const newResult = msg.payload.result

    const cacheKey = msg.payload.id

    // raw json db
    {
      const cachedResult = this.slicesDataDb.get(cacheKey)
      if (!isEqual(newResult, cachedResult)) {
        this.slicesDataDb.set(cacheKey, newResult)
      }
    }

    // processed data
    {
      const cachedResult = this.slicesDb.get(cacheKey)
      if (
        !isEqual(newResult?.result?.data, cachedResult?.data) ||
        !isEqual(newResult?.result?.sliceContext, cachedResult?.sliceContext)
      ) {
        const mergedResult = {
          ...cachedResult,
          data: newResult?.result?.data,
          sliceContext: newResult?.result?.sliceContext,
        }
        this.slicesDb.set(cacheKey, mergedResult)
        ___emitter.emit(`sliceQueryResult`, mergedResult)
      }
    }
  }

  updatePageData = (pagePath, newPageData) => {
    const pageDataDbCacheKey = normalizePagePath(pagePath)
    const cachedPageData = this.pageDataDb.get(pageDataDbCacheKey)?.payload

    if (!isEqual(newPageData, cachedPageData)) {
      // TODO: if this is update for current page and there are any new static queries added
      // that are not yet cached, there is currently no trigger to fetch them (yikes)
      // always update canonical key for pageDataDb
      this.pageDataDb.set(pageDataDbCacheKey, {
        pagePath: pageDataDbCacheKey,
        payload: newPageData,
        status: `success`,
      })

      const cachedPage = this.pageDb.get(pageDataDbCacheKey)
      if (cachedPage) {
        this.pageDb.set(
          pageDataDbCacheKey,
          mergePageEntry(cachedPage, newPageData)
        )
      }

      // Additionally if those are query results for "/404.html"
      // we have to update all paths user wanted to visit, but didn't have
      // page for it, because we do store them under (normalized) path
      // user wanted to visit
      if (pageDataDbCacheKey === `/404.html`) {
        this.notFoundPagePathsInCaches.forEach(notFoundPath => {
          const previousPageDataEntry = this.pageDataDb.get(notFoundPath)
          if (previousPageDataEntry) {
            this.pageDataDb.set(notFoundPath, {
              ...previousPageDataEntry,
              payload: newPageData,
            })
          }

          const previousPageEntry = this.pageDb.get(notFoundPath)
          if (previousPageEntry) {
            this.pageDb.set(
              notFoundPath,
              mergePageEntry(previousPageEntry, newPageData)
            )
          }
        })
      }
      return true
    }
    return false
  }

  markAsStale = dirtyQueryId => {
    if (dirtyQueryId === `/dev-404-page/` || dirtyQueryId === `/404.html`) {
      // those pages are not on demand so skipping
      return
    }

    const normalizedId = normalizePagePath(dirtyQueryId)

    // We can't just delete items in caches, because then
    // using history.back() would show dev-404 page
    // due to our special handling of it in root.js (loader.isPageNotFound check)
    // so instead we mark it as stale and instruct loader's async methods
    // to refetch resources if they are marked as stale

    const cachedPageData = this.pageDataDb.get(normalizedId)
    if (cachedPageData) {
      // if we have page data in cache, mark it as stale
      this.pageDataDb.set(normalizedId, {
        ...cachedPageData,
        stale: true,
      })
    }

    const cachedPage = this.pageDb.get(normalizedId)
    if (cachedPage) {
      // if we have page data in cache, mark it as stale
      this.pageDb.set(normalizedId, {
        ...cachedPage,
        payload: { ...cachedPage.payload, stale: true },
      })
    }
  }

  handlePageQueryResultHotUpdate(msg) {
    const updated = this.updatePageData(msg.payload.id, msg.payload.result)
    if (updated) {
      ___emitter.emit(`pageQueryResult`, msg.payload.result)
    }
  }

  handleStalePageDataMessage(msg) {
    for (const dirtyQueryId of msg.payload.stalePageDataPaths) {
      this.markAsStale(dirtyQueryId)
    }
  }

  handleStaleServerDataMessage() {
    const activePath = normalizePagePath(location.pathname)

    // For now just invalidate every single page with serverData
    for (const [key, value] of this.pageDataDb) {
      if (value?.payload?.result?.serverData) {
        this.markAsStale(key)
      }
      if (activePath === normalizePagePath(key)) {
        this.reFetchServerData(activePath)
      }
    }
  }

  reFetchServerData(pagePath) {
    this.fetchPageDataJson({ pagePath }).then(data => {
      const updated = this.updatePageData(data.pagePath, data.payload)
      // SSR could be slow, so we should only emit serverDataResult
      // when still on the same page
      if (updated && pagePath === normalizePagePath(location.pathname)) {
        ___emitter.emit(`serverDataResult`, data.payload)
      }
    })
  }
}

export default DevLoader

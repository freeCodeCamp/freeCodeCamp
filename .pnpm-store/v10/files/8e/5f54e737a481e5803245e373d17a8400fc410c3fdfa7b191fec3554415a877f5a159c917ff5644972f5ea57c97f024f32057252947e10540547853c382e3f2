/* global BROWSER_ESM_ONLY */
import React from "react"
import fs from "fs-extra"
import { renderToStaticMarkup, renderToPipeableStream } from "react-dom/server"
import { get, merge, isObject, flatten, uniqBy, concat } from "lodash"
import nodePath from "path"
import { apiRunner, apiRunnerAsync } from "./api-runner-ssr"
import { grabMatchParams } from "./find-path"
import syncRequires from "$virtual/ssr-sync-requires"

import { RouteAnnouncerProps } from "./route-announcer-props"
import { ServerLocation, Router, isRedirect } from "@gatsbyjs/reach-router"
import { headHandlerForSSR } from "./head/head-export-handler-for-ssr"
import { getStaticQueryResults } from "./loader"
import { WritableAsPromise } from "./server-utils/writable-as-promise"
import {
  SlicesResultsContext,
  SlicesContext,
  SlicesMapContext,
  SlicesPropsContext,
} from "./slice/context"

// prefer default export if available
const preferDefault = m => (m && m.default) || m

const testRequireError = (moduleName, err) => {
  const regex = new RegExp(`Error: Cannot find module\\s.${moduleName}`)
  const firstLine = err.toString().split(`\n`)[0]
  return regex.test(firstLine)
}

let cachedStats
const getStats = publicDir => {
  if (cachedStats) {
    return cachedStats
  } else {
    cachedStats = JSON.parse(
      fs.readFileSync(nodePath.join(publicDir, `webpack.stats.json`), `utf-8`)
    )

    return cachedStats
  }
}

let Html
try {
  Html = require(`../src/html`)
} catch (err) {
  if (testRequireError(`../src/html`, err)) {
    Html = require(`./default-html`)
  } else {
    console.log(`There was an error requiring "src/html.js"\n\n`, err, `\n\n`)
    process.exit()
  }
}

Html = Html && Html.__esModule ? Html.default : Html

export default async function staticPage({
  pagePath,
  isClientOnlyPage,
  publicDir,
  error,
  serverData,
}) {
  let bodyHtml = ``
  let headComponents = [
    <meta key="environment" name="note" content="environment=development" />,
  ]
  let htmlAttributes = {}
  let bodyAttributes = {}
  let preBodyComponents = []
  let postBodyComponents = []
  let bodyProps = {}

  if (error) {
    postBodyComponents.push([
      <script
        key="dev-ssr-error"
        dangerouslySetInnerHTML={{
          __html: `window._gatsbyEvents = window._gatsbyEvents || []; window._gatsbyEvents.push(["FAST_REFRESH", { action: "SHOW_DEV_SSR_ERROR", payload: ${JSON.stringify(
            error
          )} }])`,
        }}
      />,
      <noscript key="dev-ssr-error-noscript">
        <h1>Failed to Server Render (SSR)</h1>
        <h2>Error message:</h2>
        <p>{error.sourceMessage}</p>
        <h2>File:</h2>
        <p>
          {error.source}:{error.line}:{error.column}
        </p>
        <h2>Stack:</h2>
        <pre>
          <code>{error.stack}</code>
        </pre>
      </noscript>,
    ])
  }

  const generateBodyHTML = async () => {
    const setHeadComponents = components => {
      headComponents = headComponents.concat(components)
    }

    const setHtmlAttributes = attributes => {
      htmlAttributes = merge(htmlAttributes, attributes)
    }

    const setBodyAttributes = attributes => {
      bodyAttributes = merge(bodyAttributes, attributes)
    }

    const setPreBodyComponents = components => {
      preBodyComponents = preBodyComponents.concat(components)
    }

    const setPostBodyComponents = components => {
      postBodyComponents = postBodyComponents.concat(components)
    }

    const setBodyProps = props => {
      bodyProps = merge({}, bodyProps, props)
    }

    const getHeadComponents = () => headComponents

    const replaceHeadComponents = components => {
      headComponents = components
    }

    const replaceBodyHTMLString = body => {
      bodyHtml = body
    }

    const getPreBodyComponents = () => preBodyComponents

    const replacePreBodyComponents = components => {
      preBodyComponents = components
    }

    const getPostBodyComponents = () => postBodyComponents

    const replacePostBodyComponents = components => {
      postBodyComponents = components
    }

    const getPageDataPath = path => {
      const fixedPagePath = path === `/` ? `index` : path
      return nodePath.join(`page-data`, fixedPagePath, `page-data.json`)
    }

    const getPageData = pagePath => {
      const pageDataPath = getPageDataPath(pagePath)
      const absolutePageDataPath = nodePath.join(publicDir, pageDataPath)
      const pageDataJson = fs.readFileSync(absolutePageDataPath, `utf8`)

      try {
        return JSON.parse(pageDataJson)
      } catch (err) {
        return null
      }
    }

    const pageData = getPageData(pagePath)

    const { componentChunkName, slicesMap } = pageData

    const pageComponent = await syncRequires.ssrComponents[componentChunkName]

    let scriptsAndStyles = flatten(
      [`commons`].map(chunkKey => {
        const fetchKey = `assetsByChunkName[${chunkKey}]`

        const stats = getStats(publicDir)
        let chunks = get(stats, fetchKey)
        const namedChunkGroups = get(stats, `namedChunkGroups`)

        if (!chunks) {
          return null
        }

        chunks = chunks.map(chunk => {
          if (chunk === `/`) {
            return null
          }
          return { rel: `preload`, name: chunk }
        })

        namedChunkGroups[chunkKey].assets.forEach(asset =>
          chunks.push({ rel: `preload`, name: asset.name })
        )

        const childAssets = namedChunkGroups[chunkKey].childAssets
        for (const rel in childAssets) {
          if (childAssets.hasownProperty(rel)) {
            chunks = concat(
              chunks,
              childAssets[rel].map(chunk => {
                return { rel, name: chunk }
              })
            )
          }
        }

        return chunks
      })
    )
      .filter(s => isObject(s))
      .sort((s1, _s2) => (s1.rel == `preload` ? -1 : 1)) // given priority to preload

    scriptsAndStyles = uniqBy(scriptsAndStyles, item => item.name)

    const styles = scriptsAndStyles.filter(
      style => style.name && style.name.endsWith(`.css`)
    )

    styles
      .slice(0)
      .reverse()
      .forEach(style => {
        headComponents.unshift(
          <link
            data-identity={`gatsby-dev-css`}
            key={style.name}
            rel="stylesheet"
            type="text/css"
            href={`${__PATH_PREFIX__}/${style.name}`}
          />
        )
      })
    class RouteHandler extends React.Component {
      render() {
        const props = {
          ...this.props,
          ...pageData.result,
          serverData,
          params: {
            ...grabMatchParams(this.props.location.pathname),
            ...(pageData.result?.pageContext?.__params || {}),
          },
        }

        const pageElement = React.createElement(
          preferDefault(syncRequires.ssrComponents[componentChunkName]),
          props
        )

        const wrappedPage = apiRunner(
          `wrapPageElement`,
          { element: pageElement, props },
          pageElement,
          ({ result }) => {
            return { element: result, props }
          }
        ).pop()

        return wrappedPage
      }
    }

    const routerElement =
      syncRequires.ssrComponents[componentChunkName] && !isClientOnlyPage ? (
        <ServerLocation url={`${__BASE_PATH__}${pagePath}`}>
          <Router id="gatsby-focus-wrapper" baseuri={__BASE_PATH__}>
            <RouteHandler path="/*" />
          </Router>
          <div {...RouteAnnouncerProps} />
        </ServerLocation>
      ) : null

    let bodyComponent = apiRunner(
      `wrapRootElement`,
      { element: routerElement, pathname: pagePath },
      routerElement,
      ({ result }) => {
        return { element: result, pathname: pagePath }
      }
    ).pop()

    if (process.env.GATSBY_SLICES) {
      const readSliceData = sliceName => {
        const filePath = nodePath.join(
          publicDir,
          `slice-data`,
          `${sliceName}.json`
        )

        const rawSliceData = fs.readFileSync(filePath, `utf-8`)
        return JSON.parse(rawSliceData)
      }

      const slicesContext = {
        renderEnvironment: `dev-ssr`,
      }
      const sliceProps = {}
      const slicesDb = new Map()
      const sliceData = {}
      for (const sliceName of Object.values(slicesMap)) {
        sliceData[sliceName] = await readSliceData(sliceName)
      }

      for (const sliceName of Object.values(slicesMap)) {
        const slice = sliceData[sliceName]
        const { default: SliceComponent } = await getPageChunk(slice)

        const sliceObject = {
          component: SliceComponent,
          sliceContext: slice.result.sliceContext,
          data: slice.result.data,
        }

        slicesDb.set(sliceName, sliceObject)
      }

      bodyComponent = (
        <SlicesContext.Provider value={slicesContext}>
          <SlicesPropsContext.Provider value={sliceProps}>
            <SlicesMapContext.Provider value={slicesMap}>
              <SlicesResultsContext.Provider value={slicesDb}>
                {bodyComponent}
              </SlicesResultsContext.Provider>
            </SlicesMapContext.Provider>
          </SlicesPropsContext.Provider>
        </SlicesContext.Provider>
      )
    }

    // Let the site or plugin render the page component.
    await apiRunnerAsync(`replaceRenderer`, {
      bodyComponent,
      replaceBodyHTMLString,
      setHeadComponents,
      setHtmlAttributes,
      setBodyAttributes,
      setPreBodyComponents,
      setPostBodyComponents,
      setBodyProps,
      pathname: pagePath,
      pathPrefix: __PATH_PREFIX__,
    })

    // If no one stepped up, we'll handle it.
    if (!bodyHtml) {
      try {
        const writableStream = new WritableAsPromise()
        const { pipe } = renderToPipeableStream(bodyComponent, {
          onAllReady() {
            pipe(writableStream)
          },
          onError(error) {
            writableStream.destroy(error)
          },
        })

        bodyHtml = await writableStream
      } catch (e) {
        // ignore @reach/router redirect errors
        if (!isRedirect(e)) throw e
      }
    }

    apiRunner(`onRenderBody`, {
      setHeadComponents,
      setHtmlAttributes,
      setBodyAttributes,
      setPreBodyComponents,
      setPostBodyComponents,
      setBodyProps,
      pathname: pagePath,
    })

    // we want to run Head after onRenderBody, so Html and Body attributes
    // from Head wins over global ones from onRenderBody
    headHandlerForSSR({
      pageComponent,
      setHeadComponents,
      setHtmlAttributes,
      setBodyAttributes,
      staticQueryContext: getStaticQueryResults(),
      pageData,
      pagePath,
    })

    apiRunner(`onPreRenderHTML`, {
      getHeadComponents,
      replaceHeadComponents,
      getPreBodyComponents,
      replacePreBodyComponents,
      getPostBodyComponents,
      replacePostBodyComponents,
      pathname: pagePath,
    })

    return bodyHtml
  }

  const bodyStr = await generateBodyHTML()

  const htmlElement = React.createElement(Html, {
    ...bodyProps,
    body: bodyStr,
    headComponents: headComponents.concat([
      <script key={`io`} src="/socket.io/socket.io.js" />,
    ]),
    htmlAttributes,
    bodyAttributes,
    preBodyComponents,
    postBodyComponents: postBodyComponents.concat(
      [
        !BROWSER_ESM_ONLY && (
          <script key={`polyfill`} src="/polyfill.js" noModule={true} />
        ),
        <script key={`framework`} src="/framework.js" />,
        <script key={`commons`} src="/commons.js" />,
      ].filter(Boolean)
    ),
  })
  let htmlStr = renderToStaticMarkup(htmlElement)
  htmlStr = `<!DOCTYPE html>${htmlStr}`

  return htmlStr
}

export function getPageChunk({ componentChunkName }) {
  return syncRequires.ssrComponents[componentChunkName]
}

/* global BROWSER_ESM_ONLY */
import React from "react"
import { renderToStaticMarkup } from "react-dom/server"
import { merge } from "lodash"
import { apiRunner } from "./api-runner-ssr"
import asyncRequires from "$virtual/async-requires"

const testRequireError = (moduleName, err) => {
  const regex = new RegExp(`Error: Cannot find module\\s.${moduleName}`)
  const firstLine = err.toString().split(`\n`)[0]
  return regex.test(firstLine)
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

export default ({ pagePath }) => {
  let headComponents = [
    <meta key="environment" name="note" content="environment=development" />,
  ]
  let htmlAttributes = {}
  let bodyAttributes = {}
  let preBodyComponents = []
  let postBodyComponents = []
  let bodyProps = {}
  let htmlStr

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

  const getPreBodyComponents = () => preBodyComponents

  const replacePreBodyComponents = components => {
    preBodyComponents = components
  }

  const getPostBodyComponents = () => postBodyComponents

  const replacePostBodyComponents = components => {
    postBodyComponents = components
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

  apiRunner(`onPreRenderHTML`, {
    getHeadComponents,
    replaceHeadComponents,
    getPreBodyComponents,
    replacePreBodyComponents,
    getPostBodyComponents,
    replacePostBodyComponents,
    pathname: pagePath,
  })

  const htmlElement = React.createElement(Html, {
    ...bodyProps,
    body: ``,
    headComponents: headComponents.concat([
      <script key={`io`} src="/socket.io/socket.io.js" />,
      <link key="styles" rel="stylesheet" href="/commons.css" />,
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
  htmlStr = renderToStaticMarkup(htmlElement)
  htmlStr = `<!DOCTYPE html>${htmlStr}`

  return htmlStr
}

export function getPageChunk({ componentChunkName }) {
  return asyncRequires.components[componentChunkName]()
}

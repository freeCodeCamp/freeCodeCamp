const React = require(`react`)
const { grabMatchParams } = require(`../find-path`)
const { StaticQueryContext } = require(`gatsby`)
const {
  headExportValidator,
  filterHeadProps,
  isElementType,
  isValidNodeName,
  warnForInvalidTag,
} = require(`./utils`)
const { ServerLocation, Router } = require(`@gatsbyjs/reach-router`)
const { renderToString } = require(`react-dom/server`)
const { parse } = require(`node-html-parser`)
const styleToOjbect = require(`style-to-object`)

import {
  ITEM_PROP_WORKAROUND_KEY,
  ITEM_PROP_WORKAROUND_VALUE,
  HTML_BODY_ORIGINAL_TAG_ATTRIBUTE_KEY,
} from "./constants"
import { getValidHeadComponentReplacements } from "./components/head-components"
import { apiRunner } from "../api-runner-ssr"

export function applyHtmlAndBodyAttributesSSR(
  htmlAndBodyAttributes,
  { setHtmlAttributes, setBodyAttributes }
) {
  if (!htmlAndBodyAttributes) return

  const { html, body } = htmlAndBodyAttributes

  setHtmlAttributes(html)
  setBodyAttributes(body)
}

export function getValidHeadNodesAndAttributesSSR(
  rootNode,
  htmlAndBodyAttributes = {
    html: {},
    body: {},
  }
) {
  const seenIds = new Map()
  const validHeadNodes = []

  // Filter out non-element nodes before looping since we don't care about them
  for (const node of rootNode.childNodes) {
    const { rawTagName } = node
    const id = node.attributes?.id

    if (!isElementType(node)) continue

    const NodeName =
      node.attributes?.[HTML_BODY_ORIGINAL_TAG_ATTRIBUTE_KEY] ?? rawTagName

    if (isValidNodeName(NodeName)) {
      if (NodeName === `html` || NodeName === `body`) {
        const { style, ...nonStyleAttributes } = node.attributes

        htmlAndBodyAttributes[NodeName] = {
          ...htmlAndBodyAttributes[NodeName],
          ...nonStyleAttributes,
        }

        // Unfortunately renderToString converts inline styles to a string, so we have to convert them back to an object
        if (style) {
          htmlAndBodyAttributes[NodeName].style = {
            ...htmlAndBodyAttributes[NodeName]?.style,
            ...styleToOjbect(style),
          }
        }
      } else {
        let element
        const attributes = { ...node.attributes, "data-gatsby-head": true }

        if (
          attributes[ITEM_PROP_WORKAROUND_KEY] === ITEM_PROP_WORKAROUND_VALUE
        ) {
          delete attributes[ITEM_PROP_WORKAROUND_KEY]
        }

        if (NodeName === `script` || NodeName === `style`) {
          element = (
            <NodeName
              {...attributes}
              dangerouslySetInnerHTML={{
                __html: node.text,
              }}
            />
          )
        } else {
          element =
            node.textContent.length > 0 ? (
              <NodeName {...attributes}>{node.textContent}</NodeName>
            ) : (
              <NodeName {...attributes} />
            )
        }

        if (id) {
          if (!seenIds.has(id)) {
            validHeadNodes.push(element)
            seenIds.set(id, validHeadNodes.length - 1)
          } else {
            const indexOfPreviouslyInsertedNode = seenIds.get(id)
            validHeadNodes[indexOfPreviouslyInsertedNode] = element
          }
        } else {
          validHeadNodes.push(element)
        }
      }
    } else {
      warnForInvalidTag(rawTagName)
    }

    if (node.childNodes.length) {
      validHeadNodes.push(
        ...getValidHeadNodesAndAttributesSSR(node, htmlAndBodyAttributes)
          .validHeadNodes
      )
    }
  }

  return { validHeadNodes, htmlAndBodyAttributes }
}

// see explanation in "head-export-handler-for-browser.js" module for reasons behind this patching
let applyCreateElementPatch = undefined
let revertCreateElementPatch = undefined
let needToRevertCreateElementPatch = false

const reactMajor = parseInt(React.version.split(`.`)[0], 10)
if (reactMajor !== 18) {
  const originalCreateElement = React.createElement
  const validHeadComponentReplacements = getValidHeadComponentReplacements(
    originalCreateElement,
    true
  )

  function patchedCreateElement(type, props, ...rest) {
    const headReplacement = validHeadComponentReplacements.get(type)
    if (headReplacement) {
      type = headReplacement
    }

    return originalCreateElement.call(React, type, props, ...rest)
  }

  applyCreateElementPatch = () => {
    needToRevertCreateElementPatch = true
    React.createElement = patchedCreateElement
  }

  revertCreateElementPatch = () => {
    if (needToRevertCreateElementPatch) {
      React.createElement = originalCreateElement
      needToRevertCreateElementPatch = false
    }
  }
}

// if this sync function is changed to async one, make sure to cover potential React.createElement patching as
// current handling relies on it being sync and we can just modify React.createElement temporarily without checking context of render
// (check how it's done in "head-export-handler-for-browser.js" module for potential solution)
export function headHandlerForSSR({
  pageComponent,
  setHeadComponents,
  setHtmlAttributes,
  setBodyAttributes,
  staticQueryContext,
  pageData,
  pagePath,
}) {
  if (pageComponent?.Head) {
    try {
      headExportValidator(pageComponent.Head)

      function HeadRouteHandler(props) {
        const _props = {
          ...props,
          ...pageData.result,
          params: {
            ...grabMatchParams(props.location.pathname),
            ...(pageData.result?.pageContext?.__params || {}),
          },
        }

        const HeadElement = <pageComponent.Head {...filterHeadProps(_props)} />

        const headWithWrapRootElement = apiRunner(
          `wrapRootElement`,
          { element: HeadElement },
          HeadElement,
          ({ result }) => {
            return { element: result }
          }
        ).pop()

        return headWithWrapRootElement
      }

      const routerElement = (
        <StaticQueryContext.Provider value={staticQueryContext}>
          <ServerLocation url={`${__BASE_PATH__}${pagePath}`}>
            <Router
              baseuri={__BASE_PATH__}
              component={({ children }) => <>{children}</>}
            >
              <HeadRouteHandler path="/*" />
            </Router>
          </ServerLocation>
        </StaticQueryContext.Provider>
      )

      applyCreateElementPatch?.()

      const rawString = renderToString(routerElement)

      revertCreateElementPatch?.()

      const rootNode = parse(rawString)
      const { validHeadNodes, htmlAndBodyAttributes } =
        getValidHeadNodesAndAttributesSSR(rootNode)

      applyHtmlAndBodyAttributesSSR(htmlAndBodyAttributes, {
        setHtmlAttributes,
        setBodyAttributes,
      })

      setHeadComponents(validHeadNodes)
    } catch (e) {
      // make sure that we don't leave this function without reverting the patch
      revertCreateElementPatch?.()
      throw e
    }
  }
}

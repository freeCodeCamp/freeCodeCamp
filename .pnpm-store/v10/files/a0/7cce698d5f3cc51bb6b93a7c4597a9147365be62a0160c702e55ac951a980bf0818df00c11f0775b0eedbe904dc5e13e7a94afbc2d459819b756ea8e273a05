import React from "react"

import {
  HTML_BODY_ORIGINAL_TAG_ATTRIBUTE_KEY,
  ITEM_PROP_WORKAROUND_KEY,
  ITEM_PROP_WORKAROUND_VALUE,
  VALID_NODE_NAMES,
} from "../constants"

export const IsHeadRenderContext = React.createContext(false)

export function getValidHeadComponentReplacements(
  originalCreateElement,
  forceHeadRenderContext
) {
  function useIsHeadRender() {
    if (forceHeadRenderContext) {
      // for SSR we don't need to use React context, because head rendering is sync
      // so forcing it is more performant
      return true
    }

    // for Browser we use React Context
    // note: technically this is breaking rules of hooks, because useContext is used
    // not at the top of the hook after some conditional code did run,
    // but this would only manifest if `forceHeadRenderContext` could change between rerenders,
    // and because this is factory argument, it can't change
    const isHeadRenderFromContext = React.useContext(IsHeadRenderContext)

    return isHeadRenderFromContext
  }

  function htmlOrBodyComponentFactory(TagName) {
    const HeadAwareComponent = props => {
      // De-risk monkey patch by only applying it within a `Head()` render.
      const isHeadRender = useIsHeadRender()
      if (isHeadRender) {
        const allProps = {
          ...props,
          [HTML_BODY_ORIGINAL_TAG_ATTRIBUTE_KEY]: TagName,
        }
        return originalCreateElement(`div`, allProps)
      } else {
        return originalCreateElement(TagName, props)
      }
    }
    HeadAwareComponent.displayName = `React19HeadAPICompat${TagName}`
    return HeadAwareComponent
  }

  function nodeComponentFactory(TagName) {
    const HeadAwareComponent = props => {
      // De-risk monkey patch by only applying it within a `Head()` render:
      const isHeadRender = useIsHeadRender()
      // only modify props if ITEM_PROP_WORKAROUND_KEY is not set in props
      if (isHeadRender && !(ITEM_PROP_WORKAROUND_KEY in props)) {
        const propsWithWorkaround = {
          ...props,
          [ITEM_PROP_WORKAROUND_KEY]: ITEM_PROP_WORKAROUND_VALUE,
        }
        return originalCreateElement(TagName, propsWithWorkaround)
      }

      return originalCreateElement(TagName, props)
    }
    HeadAwareComponent.displayName = `React19HeadAPICompat${TagName}`
    return HeadAwareComponent
  }

  return new Map(
    VALID_NODE_NAMES.map(nodeName => {
      // for each of valid head nodes we will create replacement component
      // that can check IsHeadRenderContext context (it is a new component,
      // so this won't break rules of hooks) and apply workarounds for
      // React 19 automatic handling of meta tags which is incompatible with
      // Gatsby Head API

      const replacement =
        nodeName === `html` || nodeName === `body`
          ? htmlOrBodyComponentFactory(nodeName)
          : nodeComponentFactory(nodeName)

      return [nodeName, replacement]
    })
  )
}

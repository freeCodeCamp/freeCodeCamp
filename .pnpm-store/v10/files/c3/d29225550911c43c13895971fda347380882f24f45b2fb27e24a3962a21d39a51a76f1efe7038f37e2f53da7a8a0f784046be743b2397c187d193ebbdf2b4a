"use client"

import React, { useContext } from "react"
import { ServerSlice } from "./slice/server-slice"
import { InlineSlice } from "./slice/inline-slice"
import { SlicesContext } from "./slice/context"

export function Slice(props) {
  if (process.env.GATSBY_SLICES) {
    // we use sliceName internally, so remap alias to sliceName
    const internalProps = {
      ...props,
      sliceName: props.alias,
    }
    delete internalProps.alias
    delete internalProps.__renderedByLocation

    const slicesContext = useContext(SlicesContext)

    // validate props
    const propErrors = validateSliceProps(props)
    if (Object.keys(propErrors).length) {
      throw new SlicePropsError(
        slicesContext.renderEnvironment === `browser`,
        internalProps.sliceName,
        propErrors,
        props.__renderedByLocation
      )
    }

    if (slicesContext.renderEnvironment === `server`) {
      return <ServerSlice {...internalProps} />
    } else if (slicesContext.renderEnvironment === `browser`) {
      // in the browser, we'll just render the component as is
      return <InlineSlice {...internalProps} />
    } else if (
      slicesContext.renderEnvironment === `engines` ||
      slicesContext.renderEnvironment === `dev-ssr`
    ) {
      // if we're in SSR, we'll just render the component as is
      return <InlineSlice {...internalProps} />
    } else if (slicesContext.renderEnvironment === `slices`) {
      // we are not yet supporting nested slices

      let additionalContextMessage = ``

      // just in case generating additional contextual information fails, we still want the base message to show
      // and not show another cryptic error message
      try {
        additionalContextMessage = `\n\nSlice component "${slicesContext.sliceRoot.name}" (${slicesContext.sliceRoot.componentPath}) tried to render <Slice alias="${props.alias}"/>`
      } catch {
        // don't need to handle it, we will just skip the additional context message if we fail to generate it
      }

      throw new Error(
        `Nested slices are not supported.${additionalContextMessage}\n\nSee https://gatsbyjs.com/docs/reference/built-in-components/gatsby-slice#nested-slices`
      )
    } else {
      throw new Error(
        `Slice context "${slicesContext.renderEnvironment}" is not supported.`
      )
    }
  } else {
    throw new Error(`Slices are disabled.`)
  }
}

class SlicePropsError extends Error {
  constructor(inBrowser, sliceName, propErrors, renderedByLocation) {
    const errors = Object.entries(propErrors)
      .map(
        ([key, value]) =>
          `not serializable "${value}" type passed to "${key}" prop`
      )
      .join(`, `)

    const name = `SlicePropsError`
    let stack = ``
    let message = ``

    if (inBrowser) {
      let fullStack = ``

      // React 19+ uses captureOwnerStack, React 18 uses ReactDebugCurrentFrame.getCurrentStack
      if (React.captureOwnerStack) {
        // React 19+ approach
        const ownerStack = React.captureOwnerStack()
        const currentStack = new Error().stack || ``
        fullStack = ownerStack ? `${currentStack}\n${ownerStack}` : currentStack
      } else if (
        React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
          ?.ReactDebugCurrentFrame?.getCurrentStack
      ) {
        // React 18 approach
        fullStack =
          React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactDebugCurrentFrame.getCurrentStack()
      } else {
        // Fallback if neither API is available
        fullStack = new Error().stack || ``
      }

      // remove the first line of the stack trace
      const stackLines = fullStack.trim().split(`\n`).slice(1)
      if (stackLines.length > 0) {
        stackLines[0] = stackLines[0].trim()
        stack = `\n` + stackLines.join(`\n`)
      }

      message = `Slice "${sliceName}" was passed props that are not serializable (${errors}).`
    } else {
      // we can't really grab any extra info outside of the browser, so just print what we can
      message = `${name}: Slice "${sliceName}" was passed props that are not serializable (${errors}).`
      const stackLines = new Error().stack.trim().split(`\n`).slice(2)
      stack = `${message}\n${stackLines.join(`\n`)}`
    }

    super(message)
    this.name = name
    if (stack) {
      this.stack = stack
    } else {
      Error.captureStackTrace(this, SlicePropsError)
    }

    if (renderedByLocation) {
      this.forcedLocation = { ...renderedByLocation, functionName: `Slice` }
    }
  }
}

const validateSliceProps = (
  props,
  errors = {},
  seenObjects = [],
  path = null
) => {
  // recursively validate all props
  for (const [name, value] of Object.entries(props)) {
    if (
      value === undefined ||
      value === null ||
      (!path && name === `children`)
    ) {
      continue
    }

    const propPath = path ? `${path}.${name}` : name

    if (typeof value === `function`) {
      errors[propPath] = typeof value
    } else if (typeof value === `object` && seenObjects.indexOf(value) <= 0) {
      seenObjects.push(value)
      validateSliceProps(value, errors, seenObjects, propPath)
    }
  }

  return errors
}

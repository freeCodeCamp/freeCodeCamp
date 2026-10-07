// Copied from https://github.com/carbon-design-system/carbon
// License: Apache-2.0
// Copyright IBM Corp. 2016, 2018
// Entrypoint: packages/react/src/internal/useId.js

function setupGetInstanceId() {
  let instanceId = 0
  return function getInstanceId() {
    return ++instanceId
  }
}

import * as React from "react"

const getId = setupGetInstanceId()
const useIsomorphicLayoutEffect = canUseDOM()
  ? React.useLayoutEffect
  : React.useEffect

function canUseDOM() {
  return !!(
    typeof window !== `undefined` &&
    window.document &&
    window.document.createElement
  )
}

let serverHandoffCompleted = false

/**
 * Generate a unique ID with an optional prefix prepended to it
 * @param {string} [prefix]
 * @returns {string}
 */
export function useId(prefix = `id`) {
  const [id, setId] = React.useState(() => {
    if (serverHandoffCompleted) {
      return `${prefix}-${getId()}`
    }
    return null
  })

  useIsomorphicLayoutEffect(() => {
    if (id === null) {
      setId(`${prefix}-${getId()}`)
    }
  }, [getId])

  React.useEffect(() => {
    if (serverHandoffCompleted === false) {
      serverHandoffCompleted = true
    }
  }, [])

  return id
}

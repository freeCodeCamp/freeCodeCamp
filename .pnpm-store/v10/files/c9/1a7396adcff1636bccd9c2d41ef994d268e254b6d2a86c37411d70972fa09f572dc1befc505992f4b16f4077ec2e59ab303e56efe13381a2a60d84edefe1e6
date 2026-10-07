import React from "react"

// Ensure serverContext is not created more than once as React will throw when creating it more than once
// https://github.com/facebook/react/blob/dd2d6522754f52c70d02c51db25eb7cbd5d1c8eb/packages/react/src/ReactServerContext.js#L101
const createServerContext = (name, defaultValue = null) => {
  /* eslint-disable no-undef */
  if (!globalThis.__SERVER_CONTEXT) {
    globalThis.__SERVER_CONTEXT = {}
  }

  if (!globalThis.__SERVER_CONTEXT[name]) {
    globalThis.__SERVER_CONTEXT[name] = React.createServerContext(
      name,
      defaultValue
    )
  }

  return globalThis.__SERVER_CONTEXT[name]
}

function createServerOrClientContext(name, defaultValue) {
  if (React.createServerContext) {
    return createServerContext(name, defaultValue)
  }

  return React.createContext(defaultValue)
}

export { createServerOrClientContext }

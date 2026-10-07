import * as React from 'react';
const ContextKey = Symbol.for(`react-redux-context`);
const gT = typeof globalThis !== "undefined" ? globalThis :
/* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
{};

function getContext() {
  var _gT$ContextKey;

  if (!React.createContext) return {};
  const contextMap = (_gT$ContextKey = gT[ContextKey]) != null ? _gT$ContextKey : gT[ContextKey] = new Map();
  let realContext = contextMap.get(React.createContext);

  if (!realContext) {
    realContext = React.createContext(null);

    if (process.env.NODE_ENV !== 'production') {
      realContext.displayName = 'ReactRedux';
    }

    contextMap.set(React.createContext, realContext);
  }

  return realContext;
}

export const ReactReduxContext = /*#__PURE__*/getContext();
export default ReactReduxContext;
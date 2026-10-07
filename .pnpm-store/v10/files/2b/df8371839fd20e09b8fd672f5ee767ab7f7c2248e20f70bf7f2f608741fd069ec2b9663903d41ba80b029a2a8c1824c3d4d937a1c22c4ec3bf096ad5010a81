"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.enableNodeMutationsDetection = enableNodeMutationsDetection;
exports.wrapNode = wrapNode;
exports.wrapNodes = wrapNodes;
var _reporter = _interopRequireDefault(require("gatsby-cli/lib/reporter"));
var _stackTraceUtils = require("./stack-trace-utils");
const reported = new Set();
const genericProxy = createProxyHandler();
const nodeInternalProxy = createProxyHandler({
  onGet(key, value) {
    if (key === `fieldOwners` || key === `content`) {
      // all allowed in here
      return value;
    }
    return undefined;
  },
  onSet(target, key, value) {
    if (key === `fieldOwners` || key === `content`) {
      target[key] = value;
      return true;
    }
    return undefined;
  }
});
const nodeProxy = createProxyHandler({
  onGet(key, value) {
    if (key === `internal`) {
      return memoizedProxy(value, nodeInternalProxy);
    } else if (key === `fields` || key === `children`) {
      // all allowed in here
      return value;
    }
    return undefined;
  },
  onSet(target, key, value) {
    if (key === `fields` || key === `children`) {
      target[key] = value;
      return true;
    }
    return undefined;
  }
});

/**
 * Every time we create proxy for object, we store it in WeakMap,
 * so that we reuse it for that object instead of creating new Proxy.
 * This also ensures reference equality: `memoizedProxy(obj) === memoizedProxy(obj)`.
 * If we didn't reuse already created proxy above comparison would return false.
 */
const referenceMap = new WeakMap();
function memoizedProxy(target, handler) {
  const alreadyWrapped = referenceMap.get(target);
  if (alreadyWrapped) {
    return alreadyWrapped;
  } else {
    const wrapped = new Proxy(target, handler);
    referenceMap.set(target, wrapped);
    return wrapped;
  }
}
function createProxyHandler({
  onGet,
  onSet
} = {}) {
  function set(target, key, value) {
    if (onSet) {
      const result = onSet(target, key, value);
      if (result !== undefined) {
        return result;
      }
    }
    const error = new Error(`Stack trace:`);
    Error.captureStackTrace(error, set);
    if (error.stack && !reported.has(error.stack)) {
      reported.add(error.stack);
      const codeFrame = (0, _stackTraceUtils.getNonGatsbyCodeFrameFormatted)({
        stack: error.stack
      });
      _reporter.default.warn(`Node mutation detected\n\n${codeFrame ? `${codeFrame}\n\n` : ``}${error.stack.replace(/^Error:?\s*/, ``)}`);
    }
    return true;
  }
  function get(target, key) {
    const value = target[key];
    if (onGet) {
      const result = onGet(key, value);
      if (result !== undefined) {
        return result;
      }
    }
    const fieldDescriptor = Object.getOwnPropertyDescriptor(target, key);
    if (fieldDescriptor && !fieldDescriptor.writable) {
      // this is to prevent errors like:
      // ```
      // TypeError: 'get' on proxy: property 'constants' is a read - only and
      // non - configurable data property on the proxy target but the proxy
      // did not return its actual value
      // (expected '[object Object]' but got '[object Object]')
      // ```
      return value;
    }
    if (typeof value === `object` && value !== null) {
      return memoizedProxy(value, genericProxy);
    }
    return value;
  }
  return {
    get,
    set
  };
}
let shouldWrapNodesInProxies = !!process.env.GATSBY_DETECT_NODE_MUTATIONS;
function enableNodeMutationsDetection() {
  shouldWrapNodesInProxies = true;
  _reporter.default.warn(`Node mutation detection is enabled. Remember to disable it after you are finished with diagnostic as it will cause build performance degradation.`);
}
function wrapNode(node) {
  if (node && shouldWrapNodesInProxies) {
    return memoizedProxy(node, nodeProxy);
  } else {
    return node;
  }
}
function wrapNodes(nodes) {
  if (nodes && shouldWrapNodesInProxies && nodes.length > 0) {
    return nodes.map(node => memoizedProxy(node, nodeProxy));
  } else {
    return nodes;
  }
}
//# sourceMappingURL=detect-node-mutations.js.map
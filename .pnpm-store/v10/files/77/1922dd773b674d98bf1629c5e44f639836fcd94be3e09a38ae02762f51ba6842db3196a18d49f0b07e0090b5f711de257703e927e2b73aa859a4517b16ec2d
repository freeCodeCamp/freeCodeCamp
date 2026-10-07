/**
 * react-virtual
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _rollupPluginBabelHelpers = require('./_virtual/_rollupPluginBabelHelpers.js');
var React = require('react');
var reactDom = require('react-dom');
var virtualCore = require('@tanstack/virtual-core');

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);

//

var useIsomorphicLayoutEffect = typeof document !== 'undefined' ? React__namespace.useLayoutEffect : React__namespace.useEffect;
function useVirtualizerBase(options) {
  var rerender = React__namespace.useReducer(function () {
    return {};
  }, {})[1];
  var resolvedOptions = _rollupPluginBabelHelpers["extends"]({}, options, {
    onChange: function onChange(instance, sync) {
      if (sync) {
        reactDom.flushSync(rerender);
      } else {
        rerender();
      }
      options.onChange == null || options.onChange(instance, sync);
    }
  });
  var _React$useState = React__namespace.useState(function () {
      return new virtualCore.Virtualizer(resolvedOptions);
    }),
    instance = _React$useState[0];
  instance.setOptions(resolvedOptions);
  React__namespace.useEffect(function () {
    return instance._didMount();
  }, []);
  useIsomorphicLayoutEffect(function () {
    return instance._willUpdate();
  });
  return instance;
}
function useVirtualizer(options) {
  return useVirtualizerBase(_rollupPluginBabelHelpers["extends"]({
    observeElementRect: virtualCore.observeElementRect,
    observeElementOffset: virtualCore.observeElementOffset,
    scrollToFn: virtualCore.elementScroll
  }, options));
}
function useWindowVirtualizer(options) {
  return useVirtualizerBase(_rollupPluginBabelHelpers["extends"]({
    getScrollElement: function getScrollElement() {
      return typeof document !== 'undefined' ? window : null;
    },
    observeElementRect: virtualCore.observeWindowRect,
    observeElementOffset: virtualCore.observeWindowOffset,
    scrollToFn: virtualCore.windowScroll,
    initialOffset: typeof document !== 'undefined' ? window.scrollY : undefined
  }, options));
}

exports.useVirtualizer = useVirtualizer;
exports.useWindowVirtualizer = useWindowVirtualizer;
Object.keys(virtualCore).forEach(function (k) {
  if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return virtualCore[k]; }
  });
});
//# sourceMappingURL=index.js.map

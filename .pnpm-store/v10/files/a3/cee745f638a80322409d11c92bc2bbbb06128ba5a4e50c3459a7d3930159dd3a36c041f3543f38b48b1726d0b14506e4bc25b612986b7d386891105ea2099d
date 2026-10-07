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
import { extends as _extends } from './_virtual/_rollupPluginBabelHelpers.esm.js';
import * as React from 'react';
import { flushSync } from 'react-dom';
import { observeElementRect, observeElementOffset, elementScroll, observeWindowRect, observeWindowOffset, windowScroll, Virtualizer } from '@tanstack/virtual-core';
export * from '@tanstack/virtual-core';

//

var useIsomorphicLayoutEffect = typeof document !== 'undefined' ? React.useLayoutEffect : React.useEffect;
function useVirtualizerBase(options) {
  var rerender = React.useReducer(function () {
    return {};
  }, {})[1];
  var resolvedOptions = _extends({}, options, {
    onChange: function onChange(instance, sync) {
      if (sync) {
        flushSync(rerender);
      } else {
        rerender();
      }
      options.onChange == null || options.onChange(instance, sync);
    }
  });
  var _React$useState = React.useState(function () {
      return new Virtualizer(resolvedOptions);
    }),
    instance = _React$useState[0];
  instance.setOptions(resolvedOptions);
  React.useEffect(function () {
    return instance._didMount();
  }, []);
  useIsomorphicLayoutEffect(function () {
    return instance._willUpdate();
  });
  return instance;
}
function useVirtualizer(options) {
  return useVirtualizerBase(_extends({
    observeElementRect: observeElementRect,
    observeElementOffset: observeElementOffset,
    scrollToFn: elementScroll
  }, options));
}
function useWindowVirtualizer(options) {
  return useVirtualizerBase(_extends({
    getScrollElement: function getScrollElement() {
      return typeof document !== 'undefined' ? window : null;
    },
    observeElementRect: observeWindowRect,
    observeElementOffset: observeWindowOffset,
    scrollToFn: windowScroll,
    initialOffset: typeof document !== 'undefined' ? window.scrollY : undefined
  }, options));
}

export { useVirtualizer, useWindowVirtualizer };
//# sourceMappingURL=index.esm.js.map

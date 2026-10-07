/* global __react_refresh_library__ */

const safeThis = require('core-js-pure/features/global-this');
const RefreshRuntime = require('react-refresh/runtime');

if (process.env.NODE_ENV !== 'production') {
  if (typeof safeThis !== 'undefined') {
    var $RefreshInjected$ = '__reactRefreshInjected';
    // Namespace the injected flag (if necessary) for monorepo compatibility
    if (typeof __react_refresh_library__ !== 'undefined' && __react_refresh_library__) {
      $RefreshInjected$ += '_' + __react_refresh_library__;
    }

    // Only inject the runtime if it hasn't been injected
    if (!safeThis[$RefreshInjected$]) {
      // Inject refresh runtime into global scope
      RefreshRuntime.injectIntoGlobalHook(safeThis);

      // Mark the runtime as injected to prevent double-injection
      safeThis[$RefreshInjected$] = true;
    }
  }
}

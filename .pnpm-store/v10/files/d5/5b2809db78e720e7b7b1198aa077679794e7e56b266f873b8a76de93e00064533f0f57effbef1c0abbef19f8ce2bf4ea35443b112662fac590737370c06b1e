import AbortController, { AbortSignal } from './abortcontroller';
import abortableFetch from './abortableFetch';
import { polyfillNeeded } from './utils';

(function (self) {
  'use strict';

  if (!polyfillNeeded(self)) {
    return;
  }

  if (!self.fetch) {
    console.warn('fetch() is not available, cannot install abortcontroller-polyfill');
    return;
  }

  const { fetch, Request } = abortableFetch(self);
  self.fetch = fetch;
  self.Request = Request;

  Object.defineProperty(self, 'AbortController', {
    writable: true,
    enumerable: false,
    configurable: true,
    value: AbortController,
  });

  Object.defineProperty(self, 'AbortSignal', {
    writable: true,
    enumerable: false,
    configurable: true,
    value: AbortSignal,
  });
})(typeof self !== 'undefined' ? self : global);

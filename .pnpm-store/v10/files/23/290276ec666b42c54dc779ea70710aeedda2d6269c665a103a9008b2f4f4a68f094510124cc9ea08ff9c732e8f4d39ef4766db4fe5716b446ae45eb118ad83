import AbortController, { AbortSignal } from './abortcontroller';
import { polyfillNeeded } from './utils';

(function (self) {
  'use strict';

  if (!polyfillNeeded(self)) {
    return;
  }

  self.AbortController = AbortController;
  self.AbortSignal = AbortSignal;
})(typeof self !== 'undefined' ? self : global);

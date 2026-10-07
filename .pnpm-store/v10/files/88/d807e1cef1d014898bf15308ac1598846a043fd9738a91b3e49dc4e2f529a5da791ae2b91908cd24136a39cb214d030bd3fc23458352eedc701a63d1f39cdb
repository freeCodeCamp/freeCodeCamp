import { AbortSignal, AbortController } from './abortsignal-ponyfill';
import { signalPolyfillNeeded } from './utils';

(function (self) {
  'use strict';

  if (!signalPolyfillNeeded(self)) {
    return;
  }

  if (!self.AbortSignal.__polyfill__) {
    self.AbortSignal = AbortSignal;
  }

  if (!self.AbortController.__polyfill__) {
    self.AbortController = AbortController;
  }
})(typeof self !== 'undefined' ? self : global);

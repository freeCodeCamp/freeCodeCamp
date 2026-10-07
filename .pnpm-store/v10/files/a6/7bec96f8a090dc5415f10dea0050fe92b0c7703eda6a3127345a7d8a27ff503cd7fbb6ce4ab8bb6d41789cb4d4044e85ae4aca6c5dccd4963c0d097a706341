/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 * @emails oncall+relay
 */

// flowlint ambiguous-object-type:error

'use strict';

import type {IEnvironment} from '../store/RelayStoreTypes';

function registerEnvironmentWithDevTools(environment: IEnvironment): void {
  // Register this Relay Environment with Relay DevTools if it exists.
  // Note: this must always be the last step in the constructor.
  const _global =
    typeof global !== 'undefined'
      ? global
      : typeof window !== 'undefined'
      ? window
      : undefined;
  const devToolsHook = _global && _global.__RELAY_DEVTOOLS_HOOK__;
  if (devToolsHook) {
    devToolsHook.registerEnvironment(environment);
  }
}

module.exports = registerEnvironmentWithDevTools;

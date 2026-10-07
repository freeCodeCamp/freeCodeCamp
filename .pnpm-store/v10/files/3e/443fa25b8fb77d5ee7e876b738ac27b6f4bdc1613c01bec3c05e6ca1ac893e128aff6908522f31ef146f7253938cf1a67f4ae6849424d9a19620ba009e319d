/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

// flowlint ambiguous-object-type:error

'use strict';

const RelayModernFragmentSpecResolver = require('./RelayModernFragmentSpecResolver');

const warning = require('warning');

import type {
  FragmentMap,
  FragmentSpecResolver,
  Props,
  RelayContext,
} from './RelayStoreTypes';

function createFragmentSpecResolver(
  context: RelayContext,
  containerName: string,
  fragments: FragmentMap,
  props: Props,
  rootIsQueryRenderer: boolean,
  callback?: () => void,
): FragmentSpecResolver {
  if (__DEV__) {
    const fragmentNames = Object.keys(fragments);
    fragmentNames.forEach(fragmentName => {
      const propValue = props[fragmentName];
      warning(
        propValue !== undefined,
        'createFragmentSpecResolver: Expected prop `%s` to be supplied to `%s`, but ' +
          'got `undefined`. Pass an explicit `null` if this is intentional.',
        fragmentName,
        containerName,
      );
    });
  }

  return new RelayModernFragmentSpecResolver(
    context,
    fragments,
    props,
    callback,
    rootIsQueryRenderer,
  );
}

module.exports = createFragmentSpecResolver;

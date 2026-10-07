// @flow strict-local

import assert from 'assert';
import {createEnvironment} from '../src/Environment';
import PublicEnvironment from '../src/public/Environment';
import {DEFAULT_OPTIONS} from './test-utils';

describe('Public Environment', () => {
  it('has correct support data for ChromeAndroid', () => {
    let env = new PublicEnvironment(
      createEnvironment({
        context: 'browser',
        engines: {
          browsers: ['last 1 Chrome version', 'last 1 ChromeAndroid version'],
        },
        outputFormat: 'esmodule',
      }),
      DEFAULT_OPTIONS,
    );

    assert(env.supports('esmodules'));
    assert(env.supports('dynamic-import'));
    assert(env.supports('worker-module'));
    assert(env.supports('import-meta-url'));
    assert(env.supports('arrow-functions'));
  });
});

// @flow strict-local

import assert from 'assert';
import {Asset, MutableAsset} from '../src/public/Asset';
import UncommittedAsset from '../src/UncommittedAsset';
import {createAsset as _createAsset} from '../src/assetUtils';
import {createEnvironment} from '../src/Environment';
import {DEFAULT_OPTIONS} from './test-utils';
import {toProjectPath} from '../src/projectPath';

function createAsset(opts) {
  return _createAsset('/', opts);
}

describe('Public Asset', () => {
  let internalAsset;
  beforeEach(() => {
    internalAsset = new UncommittedAsset({
      options: DEFAULT_OPTIONS,
      value: createAsset({
        filePath: toProjectPath('/', '/does/not/exist'),
        type: 'js',
        env: createEnvironment({}),
        isSource: true,
        stats: {size: 0, time: 0},
      }),
    });
  });

  it('returns the same public Asset given an internal asset', () => {
    assert.equal(new Asset(internalAsset), new Asset(internalAsset));
  });

  it('returns the same public MutableAsset given an internal asset', () => {
    assert.equal(
      new MutableAsset(internalAsset),
      new MutableAsset(internalAsset),
    );
  });
});

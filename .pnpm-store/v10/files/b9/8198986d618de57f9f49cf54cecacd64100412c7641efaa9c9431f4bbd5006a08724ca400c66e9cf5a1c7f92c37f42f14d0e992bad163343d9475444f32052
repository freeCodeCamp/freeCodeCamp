// @flow strict-local
import type {Bundle as InternalBundle} from '../src/types';

import assert from 'assert';
import {ContentGraph} from '@parcel/graph';

import {Bundle, NamedBundle, PackagedBundle} from '../src/public/Bundle';
import BundleGraph from '../src/BundleGraph';
import {createEnvironment} from '../src/Environment';
import {DEFAULT_OPTIONS} from './test-utils';
import {toProjectPath} from '../src/projectPath';

describe('Public Bundle', () => {
  let internalBundle: InternalBundle;
  let bundleGraph;
  beforeEach(() => {
    let env = createEnvironment({});
    internalBundle = {
      id: '123',
      hashReference: '@@HASH_REFERENCE_123',
      entryAssetIds: [],
      mainEntryId: null,
      type: 'js',
      env,
      name: null,
      displayName: null,
      publicId: null,
      pipeline: null,
      needsStableName: null,
      bundleBehavior: null,
      isSplittable: true,
      target: {
        env,
        distDir: toProjectPath('/', '/'),
        name: '',
        publicUrl: '',
      },
    };

    bundleGraph = new BundleGraph({
      graph: new ContentGraph(),
      assetPublicIds: new Set(),
      publicIdByAssetId: new Map(),
      bundleContentHashes: new Map(),
      symbolPropagationRan: false,
    });
  });

  it('returns the same public Bundle given an internal bundle', () => {
    assert.equal(
      Bundle.get(internalBundle, bundleGraph, DEFAULT_OPTIONS),
      Bundle.get(internalBundle, bundleGraph, DEFAULT_OPTIONS),
    );
  });

  it('returns the same public NamedBundle given an internal bundle', () => {
    assert.equal(
      NamedBundle.get(internalBundle, bundleGraph, DEFAULT_OPTIONS),
      NamedBundle.get(internalBundle, bundleGraph, DEFAULT_OPTIONS),
    );
  });

  it('returns the same public PackagedBundle given an internal bundle', () => {
    assert.equal(
      PackagedBundle.get(internalBundle, bundleGraph, DEFAULT_OPTIONS),
      PackagedBundle.get(internalBundle, bundleGraph, DEFAULT_OPTIONS),
    );
  });
});

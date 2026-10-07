// @flow strict-local

import type {ContentKey} from '@parcel/graph';
import type {Async} from '@parcel/types';
import type {SharedReference} from '@parcel/workers';
import type {StaticRunOpts} from '../RequestTracker';
import type {PackagedBundleInfo} from '../types';
import type BundleGraph from '../BundleGraph';
import type {BundleInfo} from '../PackagerRunner';

import {HASH_REF_PREFIX} from '../constants';
import {joinProjectPath} from '../projectPath';
import nullthrows from 'nullthrows';
import {hashString} from '@parcel/hash';
import {createPackageRequest} from './PackageRequest';
import createWriteBundleRequest from './WriteBundleRequest';

type WriteBundlesRequestInput = {|
  bundleGraph: BundleGraph,
  optionsRef: SharedReference,
|};

type RunInput<TResult> = {|
  input: WriteBundlesRequestInput,
  ...StaticRunOpts<TResult>,
|};

export type WriteBundlesRequest = {|
  id: ContentKey,
  +type: 'write_bundles_request',
  run: (
    RunInput<Map<string, PackagedBundleInfo>>,
  ) => Async<Map<string, PackagedBundleInfo>>,
  input: WriteBundlesRequestInput,
|};

/**
 * Packages, optimizes, and writes all bundles to the dist directory.
 */
export default function createWriteBundlesRequest(
  input: WriteBundlesRequestInput,
): WriteBundlesRequest {
  return {
    type: 'write_bundles_request',
    id: 'write_bundles:' + input.bundleGraph.getBundleGraphHash(),
    run,
    input,
  };
}

async function run({input, api, farm, options}) {
  let {bundleGraph, optionsRef} = input;
  let {ref, dispose} = await farm.createSharedReference(bundleGraph);

  api.invalidateOnOptionChange('shouldContentHash');

  let res = new Map();
  let bundleInfoMap: {|
    [string]: BundleInfo,
  |} = {};
  let writeEarlyPromises = {};
  let hashRefToNameHash = new Map();
  let bundles = bundleGraph.getBundles().filter(bundle => {
    // Do not package and write placeholder bundles to disk. We just
    // need to update the name so other bundles can reference it.
    if (bundle.isPlaceholder) {
      let hash = bundle.id.slice(-8);
      hashRefToNameHash.set(bundle.hashReference, hash);
      let name = nullthrows(bundle.name).replace(bundle.hashReference, hash);
      res.set(bundle.id, {
        filePath: joinProjectPath(bundle.target.distDir, name),
        type: bundle.type, // FIXME: this is wrong if the packager changes the type...
        stats: {
          time: 0,
          size: 0,
        },
      });
      return false;
    }

    return true;
  });

  // Package on the main thread if there is only one bundle to package.
  // This avoids the cost of serializing the bundle graph for single file change builds.
  let useMainThread =
    bundles.length === 1 ||
    bundles.filter(b => !api.canSkipSubrequest(bundleGraph.getHash(b)))
      .length === 1;

  try {
    await Promise.all(
      bundles.map(async bundle => {
        let request = createPackageRequest({
          bundle,
          bundleGraph,
          bundleGraphReference: ref,
          optionsRef,
          useMainThread,
        });

        let info = await api.runRequest(request);

        bundleInfoMap[bundle.id] = info;
        if (!info.hashReferences.length) {
          hashRefToNameHash.set(
            bundle.hashReference,
            options.shouldContentHash
              ? info.hash.slice(-8)
              : bundle.id.slice(-8),
          );
          let writeBundleRequest = createWriteBundleRequest({
            bundle,
            info,
            hashRefToNameHash,
            bundleGraph,
          });
          let promise = api.runRequest(writeBundleRequest);
          // If the promise rejects before we await it (below), we don't want to crash the build.
          promise.catch(() => {});
          writeEarlyPromises[bundle.id] = promise;
        }
      }),
    );
    assignComplexNameHashes(hashRefToNameHash, bundles, bundleInfoMap, options);
    await Promise.all(
      bundles.map(bundle => {
        let promise =
          writeEarlyPromises[bundle.id] ??
          api.runRequest(
            createWriteBundleRequest({
              bundle,
              info: bundleInfoMap[bundle.id],
              hashRefToNameHash,
              bundleGraph,
            }),
          );

        return promise.then(r => res.set(bundle.id, r));
      }),
    );

    api.storeResult(res);
    return res;
  } finally {
    await dispose();
  }
}

function assignComplexNameHashes(
  hashRefToNameHash,
  bundles,
  bundleInfoMap,
  options,
) {
  for (let bundle of bundles) {
    if (hashRefToNameHash.get(bundle.hashReference) != null) {
      continue;
    }
    hashRefToNameHash.set(
      bundle.hashReference,
      options.shouldContentHash
        ? hashString(
            [...getBundlesIncludedInHash(bundle.id, bundleInfoMap)]
              .map(bundleId => bundleInfoMap[bundleId].hash)
              .join(':'),
          ).slice(-8)
        : bundle.id.slice(-8),
    );
  }
}

function getBundlesIncludedInHash(
  bundleId,
  bundleInfoMap,
  included = new Set(),
) {
  included.add(bundleId);
  for (let hashRef of bundleInfoMap[bundleId].hashReferences) {
    let referencedId = getIdFromHashRef(hashRef);
    if (!included.has(referencedId)) {
      getBundlesIncludedInHash(referencedId, bundleInfoMap, included);
    }
  }

  return included;
}

function getIdFromHashRef(hashRef: string) {
  return hashRef.slice(HASH_REF_PREFIX.length);
}

// @flow
import type {DependencySpecifier, SemverRange} from '@parcel/types';
import type ParcelConfig from '../ParcelConfig';
import type {
  DevDepRequest,
  ParcelOptions,
  InternalDevDepOptions,
} from '../types';
import type {RunAPI} from '../RequestTracker';
import type {ProjectPath} from '../projectPath';

import nullthrows from 'nullthrows';
import {getInvalidationHash} from '../assetUtils';
import {createBuildCache} from '../buildCache';
import {invalidateOnFileCreateToInternal} from '../utils';
import {
  fromProjectPath,
  fromProjectPathRelative,
  toProjectPath,
} from '../projectPath';

// A cache of dev dep requests keyed by invalidations.
// If the package manager returns the same invalidation object, then
// we can reuse the dev dep request rather than recomputing the project
// paths and hashes.
const devDepRequestCache = new WeakMap();

export async function createDevDependency(
  opts: InternalDevDepOptions,
  requestDevDeps: Map<string, string>,
  options: ParcelOptions,
): Promise<DevDepRequest> {
  let {specifier, resolveFrom, additionalInvalidations} = opts;
  let key = `${specifier}:${fromProjectPathRelative(resolveFrom)}`;

  // If the request sent us a hash, we know the dev dep and all of its dependencies didn't change.
  // Reuse the same hash in the response. No need to send back invalidations as the request won't
  // be re-run anyway.
  let hash = requestDevDeps.get(key);
  if (hash != null) {
    return {
      specifier,
      resolveFrom,
      hash,
    };
  }

  let resolveFromAbsolute = fromProjectPath(options.projectRoot, resolveFrom);

  // Ensure that the package manager has an entry for this resolution.
  await options.packageManager.resolve(specifier, resolveFromAbsolute);
  let invalidations = options.packageManager.getInvalidations(
    specifier,
    resolveFromAbsolute,
  );

  let cached = devDepRequestCache.get(invalidations);
  if (cached != null) {
    return cached;
  }

  let invalidateOnFileChangeProject = [
    ...invalidations.invalidateOnFileChange,
  ].map(f => toProjectPath(options.projectRoot, f));

  // It is possible for a transformer to have multiple different hashes due to
  // different dependencies (e.g. conditional requires) so we must always
  // recompute the hash and compare rather than only sending a transformer
  // dev dependency once.
  hash = await getInvalidationHash(
    invalidateOnFileChangeProject.map(f => ({
      type: 'file',
      filePath: f,
    })),
    options,
  );

  let devDepRequest: DevDepRequest = {
    specifier,
    resolveFrom,
    hash,
    invalidateOnFileCreate: invalidations.invalidateOnFileCreate.map(i =>
      invalidateOnFileCreateToInternal(options.projectRoot, i),
    ),
    invalidateOnFileChange: new Set(invalidateOnFileChangeProject),
    additionalInvalidations,
  };

  devDepRequestCache.set(invalidations, devDepRequest);
  return devDepRequest;
}

export type DevDepSpecifier = {|
  specifier: DependencySpecifier,
  resolveFrom: ProjectPath,
|};

type DevDepRequests = {|
  devDeps: Map<string, string>,
  invalidDevDeps: Array<DevDepSpecifier>,
|};

export async function getDevDepRequests<TResult>(
  api: RunAPI<TResult>,
): Promise<DevDepRequests> {
  let previousDevDepRequests = new Map(
    await Promise.all(
      api
        .getSubRequests()
        .filter(req => req.type === 'dev_dep_request')
        .map(async req => [
          req.id,
          nullthrows(await api.getRequestResult<DevDepRequest>(req.id)),
        ]),
    ),
  );

  return {
    devDeps: new Map(
      [...previousDevDepRequests.entries()]
        .filter(([id]) => api.canSkipSubrequest(id))
        .map(([, req]) => [
          `${req.specifier}:${fromProjectPathRelative(req.resolveFrom)}`,
          req.hash,
        ]),
    ),
    invalidDevDeps: await Promise.all(
      [...previousDevDepRequests.entries()]
        .filter(([id]) => !api.canSkipSubrequest(id))
        .flatMap(([, req]) => {
          return [
            {
              specifier: req.specifier,
              resolveFrom: req.resolveFrom,
            },
            ...(req.additionalInvalidations ?? []).map(i => ({
              specifier: i.specifier,
              resolveFrom: i.resolveFrom,
            })),
          ];
        }),
    ),
  };
}

// Tracks dev deps that have been invalidated during this build
// so we don't invalidate the require cache more than once.
const invalidatedDevDeps = createBuildCache();

export function invalidateDevDeps(
  invalidDevDeps: Array<DevDepSpecifier>,
  options: ParcelOptions,
  config: ParcelConfig,
) {
  for (let {specifier, resolveFrom} of invalidDevDeps) {
    let key = `${specifier}:${fromProjectPathRelative(resolveFrom)}`;
    if (!invalidatedDevDeps.has(key)) {
      config.invalidatePlugin(specifier);
      options.packageManager.invalidate(
        specifier,
        fromProjectPath(options.projectRoot, resolveFrom),
      );
      invalidatedDevDeps.set(key, true);
    }
  }
}

type DevDepRequestResult = {|
  specifier: DependencySpecifier,
  resolveFrom: ProjectPath,
  hash: string,
  additionalInvalidations: void | Array<{|
    range?: ?SemverRange,
    resolveFrom: ProjectPath,
    specifier: DependencySpecifier,
  |}>,
|};

export async function runDevDepRequest<TResult>(
  api: RunAPI<TResult>,
  devDepRequest: DevDepRequest,
) {
  await api.runRequest<null, DevDepRequestResult | void>({
    id: 'dev_dep_request:' + devDepRequest.specifier + ':' + devDepRequest.hash,
    type: 'dev_dep_request',
    run: ({api}) => {
      for (let filePath of nullthrows(devDepRequest.invalidateOnFileChange)) {
        api.invalidateOnFileUpdate(filePath);
        api.invalidateOnFileDelete(filePath);
      }

      for (let invalidation of nullthrows(
        devDepRequest.invalidateOnFileCreate,
      )) {
        api.invalidateOnFileCreate(invalidation);
      }

      api.storeResult({
        specifier: devDepRequest.specifier,
        resolveFrom: devDepRequest.resolveFrom,
        hash: devDepRequest.hash,
        additionalInvalidations: devDepRequest.additionalInvalidations,
      });
    },
    input: null,
  });
}

// A cache of plugin dependency hashes that we've already sent to the main thread.
// Automatically cleared before each build.
const pluginCache = createBuildCache();

export function getWorkerDevDepRequests(
  devDepRequests: Array<DevDepRequest>,
): Array<DevDepRequest> {
  return devDepRequests.map(devDepRequest => {
    // If we've already sent a matching transformer + hash to the main thread during this build,
    // there's no need to repeat ourselves.
    let {specifier, resolveFrom, hash} = devDepRequest;
    if (hash === pluginCache.get(specifier)) {
      return {specifier, resolveFrom, hash};
    } else {
      pluginCache.set(specifier, hash);
      return devDepRequest;
    }
  });
}

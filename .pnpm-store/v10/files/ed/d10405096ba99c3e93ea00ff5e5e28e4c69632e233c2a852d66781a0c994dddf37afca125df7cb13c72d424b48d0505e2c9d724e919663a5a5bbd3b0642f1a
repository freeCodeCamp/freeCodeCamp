// @flow strict-local

import type {ContentKey} from '@parcel/graph';
import type {Async} from '@parcel/types';
import type {StaticRunOpts} from '../RequestTracker';
import type {
  AssetRequestInput,
  AssetRequestResult,
  DevDepRequest,
  TransformationRequest,
} from '../types';
import type {ConfigAndCachePath} from './ParcelConfigRequest';
import type {TransformationResult} from '../Transformation';

import nullthrows from 'nullthrows';
import ThrowableDiagnostic from '@parcel/diagnostic';
import {hashString} from '@parcel/hash';
import createParcelConfigRequest from './ParcelConfigRequest';
import {runDevDepRequest} from './DevDepRequest';
import {runConfigRequest} from './ConfigRequest';
import {fromProjectPath, fromProjectPathRelative} from '../projectPath';
import {report} from '../ReporterRunner';

type RunInput<TResult> = {|
  input: AssetRequestInput,
  ...StaticRunOpts<TResult>,
|};

export type AssetRequest = {|
  id: ContentKey,
  +type: 'asset_request',
  run: (RunInput<AssetRequestResult>) => Async<AssetRequestResult>,
  input: AssetRequestInput,
|};

export default function createAssetRequest(
  input: AssetRequestInput,
): AssetRequest {
  return {
    type: 'asset_request',
    id: getId(input),
    run,
    input,
  };
}

const type = 'asset_request';

function getId(input: AssetRequestInput) {
  // eslint-disable-next-line no-unused-vars
  let {optionsRef, ...hashInput} = input;
  return hashString(
    type +
      fromProjectPathRelative(input.filePath) +
      input.env.id +
      String(input.isSource) +
      String(input.sideEffects) +
      (input.code ?? '') +
      ':' +
      (input.pipeline ?? '') +
      ':' +
      (input.query ?? ''),
  );
}

async function run({input, api, farm, invalidateReason, options}) {
  report({
    type: 'buildProgress',
    phase: 'transforming',
    filePath: fromProjectPath(options.projectRoot, input.filePath),
  });

  api.invalidateOnFileUpdate(input.filePath);
  let start = Date.now();
  let {optionsRef, ...rest} = input;
  let {cachePath} = nullthrows(
    await api.runRequest<null, ConfigAndCachePath>(createParcelConfigRequest()),
  );

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

  let request: TransformationRequest = {
    ...rest,
    invalidateReason,
    // Add invalidations to the request if a node already exists in the graph.
    // These are used to compute the cache key for assets during transformation.
    invalidations: api.getInvalidations().filter(invalidation => {
      // Filter out invalidation node for the input file itself.
      return (
        invalidation.type !== 'file' || invalidation.filePath !== input.filePath
      );
    }),
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

  let {
    assets,
    configRequests,
    error,
    invalidations,
    invalidateOnFileCreate,
    devDepRequests,
  } = (await farm.createHandle(
    'runTransform',
    input.isSingleChangeRebuild,
  )({
    configCachePath: cachePath,
    optionsRef,
    request,
  }): TransformationResult);

  let time = Date.now() - start;
  if (assets) {
    for (let asset of assets) {
      asset.stats.time = time;
    }
  }

  for (let invalidation of invalidateOnFileCreate) {
    api.invalidateOnFileCreate(invalidation);
  }

  for (let invalidation of invalidations) {
    switch (invalidation.type) {
      case 'file':
        api.invalidateOnFileUpdate(invalidation.filePath);
        api.invalidateOnFileDelete(invalidation.filePath);
        break;
      case 'env':
        api.invalidateOnEnvChange(invalidation.key);
        break;
      case 'option':
        api.invalidateOnOptionChange(invalidation.key);
        break;
      default:
        throw new Error(`Unknown invalidation type: ${invalidation.type}`);
    }
  }

  for (let devDepRequest of devDepRequests) {
    await runDevDepRequest(api, devDepRequest);
  }

  for (let configRequest of configRequests) {
    await runConfigRequest(api, configRequest);
  }

  if (error != null) {
    throw new ThrowableDiagnostic({diagnostic: error});
  } else {
    return nullthrows(assets);
  }
}

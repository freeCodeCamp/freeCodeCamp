// @flow strict-local

import type {
  Bundle,
  ParcelOptions,
  ProcessedParcelConfig,
  RequestInvalidation,
} from './types';
import type {SharedReference, WorkerApi} from '@parcel/workers';
import {loadConfig as configCache} from '@parcel/utils';
import type {DevDepSpecifier} from './requests/DevDepRequest';

import invariant from 'assert';
import nullthrows from 'nullthrows';
import BundleGraph from './BundleGraph';
import Transformation, {
  type TransformationOpts,
  type TransformationResult,
} from './Transformation';
import {reportWorker, report} from './ReporterRunner';
import PackagerRunner, {type PackageRequestResult} from './PackagerRunner';
import Validation, {type ValidationOpts} from './Validation';
import ParcelConfig from './ParcelConfig';
import {registerCoreWithSerializer} from './utils';
import {clearBuildCaches} from './buildCache';
import {init as initSourcemaps} from '@parcel/source-map';
import {init as initHash} from '@parcel/hash';
import WorkerFarm from '@parcel/workers';

import '@parcel/cache'; // register with serializer
import '@parcel/package-manager';
import '@parcel/fs';

registerCoreWithSerializer();

// Remove the workerApi type from the TransformationOpts and ValidationOpts types:
// https://github.com/facebook/flow/issues/2835
type WorkerTransformationOpts = {|
  ...$Diff<TransformationOpts, {|workerApi: mixed, options: ParcelOptions|}>,
  optionsRef: SharedReference,
  configCachePath: string,
|};
type WorkerValidationOpts = {|
  ...$Diff<ValidationOpts, {|workerApi: mixed, options: ParcelOptions|}>,
  optionsRef: SharedReference,
  configCachePath: string,
|};

// TODO: this should eventually be replaced by an in memory cache layer
let parcelConfigCache = new Map();

function loadOptions(ref, workerApi) {
  return nullthrows(
    ((workerApi.getSharedReference(
      ref,
      // $FlowFixMe
    ): any): ParcelOptions),
  );
}

async function loadConfig(cachePath, options) {
  let config = parcelConfigCache.get(cachePath);
  if (config && config.options === options) {
    return config;
  }

  let processedConfig = nullthrows(
    await options.cache.get<ProcessedParcelConfig>(cachePath),
  );
  config = new ParcelConfig(processedConfig, options);
  parcelConfigCache.set(cachePath, config);
  return config;
}

export function clearConfigCache() {
  configCache.clear();
  clearBuildCaches();
}

export async function runTransform(
  workerApi: WorkerApi,
  opts: WorkerTransformationOpts,
): Promise<TransformationResult> {
  let {optionsRef, configCachePath, ...rest} = opts;
  let options = loadOptions(optionsRef, workerApi);
  let config = await loadConfig(configCachePath, options);

  return new Transformation({
    workerApi,
    options,
    config,
    ...rest,
  }).run();
}

export async function runValidate(
  workerApi: WorkerApi,
  opts: WorkerValidationOpts,
): Promise<void> {
  let {optionsRef, configCachePath, ...rest} = opts;
  let options = loadOptions(optionsRef, workerApi);
  let config = await loadConfig(configCachePath, options);

  return new Validation({
    workerApi,
    report: reportWorker.bind(null, workerApi),
    options,
    config,
    ...rest,
  }).run();
}

export async function runPackage(
  workerApi: WorkerApi,
  {
    bundle,
    bundleGraphReference,
    configCachePath,
    optionsRef,
    previousDevDeps,
    invalidDevDeps,
    previousInvalidations,
  }: {|
    bundle: Bundle,
    bundleGraphReference: SharedReference,
    configCachePath: string,
    optionsRef: SharedReference,
    previousDevDeps: Map<string, string>,
    invalidDevDeps: Array<DevDepSpecifier>,
    previousInvalidations: Array<RequestInvalidation>,
  |},
): Promise<PackageRequestResult> {
  let bundleGraph = workerApi.getSharedReference(bundleGraphReference);
  invariant(bundleGraph instanceof BundleGraph);
  let options = loadOptions(optionsRef, workerApi);
  let parcelConfig = await loadConfig(configCachePath, options);

  let runner = new PackagerRunner({
    config: parcelConfig,
    options,
    report: WorkerFarm.isWorker() ? reportWorker.bind(null, workerApi) : report,
    previousDevDeps,
    previousInvalidations,
  });

  return runner.run(bundleGraph, bundle, invalidDevDeps);
}

export async function childInit() {
  await initSourcemaps;
  await initHash;
}

const PKG_RE =
  /node_modules[/\\]((?:@[^/\\]+[/\\][^/\\]+)|[^/\\]+)(?!.*[/\\]node_modules[/\\])/;
export function invalidateRequireCache(workerApi: WorkerApi, file: string) {
  if (process.env.PARCEL_BUILD_ENV === 'test') {
    // Delete this module and all children in the same node_modules folder
    let module = require.cache[file];
    if (module) {
      delete require.cache[file];

      let pkg = file.match(PKG_RE)?.[1];
      for (let child of module.children) {
        if (pkg === child.id.match(PKG_RE)?.[1]) {
          invalidateRequireCache(workerApi, child.id);
        }
      }
    }

    parcelConfigCache.clear();
    return;
  }

  throw new Error('invalidateRequireCache is only for tests');
}

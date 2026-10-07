// @flow strict-local

import type {AbortSignal} from 'abortcontroller-polyfill/dist/cjs-ponyfill';
import type {
  FilePath,
  FileCreateInvalidation,
  SourceLocation,
} from '@parcel/types';
import type {
  BundleGroup,
  ParcelOptions,
  InternalFileCreateInvalidation,
  InternalSourceLocation,
  InternalDevDepOptions,
} from './types';
import type {PackageManager} from '@parcel/package-manager';

import invariant from 'assert';
import baseX from 'base-x';
import {Graph} from '@parcel/graph';
import {hashObject} from '@parcel/utils';

import {registerSerializableClass} from './serializer';
import AssetGraph from './AssetGraph';
import BundleGraph from './BundleGraph';
import ParcelConfig from './ParcelConfig';
import {RequestGraph} from './RequestTracker';
import Config from './public/Config';
import {fromProjectPath, toProjectPath} from './projectPath';
// flowlint-next-line untyped-import:off
import packageJson from '../package.json';

const base62 = baseX(
  '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
);

export function getBundleGroupId(bundleGroup: BundleGroup): string {
  return 'bundle_group:' + bundleGroup.entryAssetId;
}

export function assertSignalNotAborted(signal: ?AbortSignal): void {
  if (signal && signal.aborted) {
    throw new BuildAbortError();
  }
}

export class BuildAbortError extends Error {
  name: string = 'BuildAbortError';
}

let coreRegistered;
export function registerCoreWithSerializer() {
  if (coreRegistered) {
    return;
  }

  const packageVersion: mixed = packageJson.version;
  if (typeof packageVersion !== 'string') {
    throw new Error('Expected package version to be a string');
  }

  // $FlowFixMe[incompatible-cast]
  for (let [name, ctor] of (Object.entries({
    AssetGraph,
    Config,
    BundleGraph,
    Graph,
    ParcelConfig,
    RequestGraph,
    // $FlowFixMe[unclear-type]
  }): Array<[string, Class<any>]>)) {
    registerSerializableClass(packageVersion + ':' + name, ctor);
  }

  coreRegistered = true;
}

export function getPublicId(
  id: string,
  alreadyExists: string => boolean,
): string {
  let encoded = base62.encode(Buffer.from(id, 'hex'));
  for (let end = 5; end <= encoded.length; end++) {
    let candidate = encoded.slice(0, end);
    if (!alreadyExists(candidate)) {
      return candidate;
    }
  }

  throw new Error('Original id was not unique');
}

// These options don't affect compilation and should cause invalidations
const ignoreOptions = new Set([
  'env', // handled by separate invalidateOnEnvChange
  'inputFS',
  'outputFS',
  'workerFarm',
  'packageManager',
  'detailedReport',
  'shouldDisableCache',
  'cacheDir',
  'shouldAutoInstall',
  'logLevel',
  'shouldProfile',
  'shouldPatchConsole',
  'projectRoot',
  'additionalReporters',
]);

export function optionsProxy(
  options: ParcelOptions,
  invalidateOnOptionChange: string => void,
  addDevDependency?: (devDep: InternalDevDepOptions) => void,
): ParcelOptions {
  let packageManager = addDevDependency
    ? proxyPackageManager(
        options.projectRoot,
        options.packageManager,
        addDevDependency,
      )
    : options.packageManager;
  return new Proxy(options, {
    get(target, prop) {
      if (prop === 'packageManager') {
        return packageManager;
      }

      if (!ignoreOptions.has(prop)) {
        invalidateOnOptionChange(prop);
      }

      return target[prop];
    },
  });
}

function proxyPackageManager(
  projectRoot: FilePath,
  packageManager: PackageManager,
  addDevDependency: (devDep: InternalDevDepOptions) => void,
): PackageManager {
  let require = (id: string, from: string, opts) => {
    addDevDependency({
      specifier: id,
      resolveFrom: toProjectPath(projectRoot, from),
      range: opts?.range,
    });
    return packageManager.require(id, from, opts);
  };

  return new Proxy(packageManager, {
    get(target, prop) {
      if (prop === 'require') {
        return require;
      }

      // $FlowFixMe
      return target[prop];
    },
  });
}

export function hashFromOption(value: mixed): string {
  if (typeof value === 'object' && value != null) {
    return hashObject(value);
  }

  return String(value);
}

export function invalidateOnFileCreateToInternal(
  projectRoot: FilePath,
  invalidation: FileCreateInvalidation,
): InternalFileCreateInvalidation {
  if (invalidation.glob != null) {
    return {glob: toProjectPath(projectRoot, invalidation.glob)};
  } else if (invalidation.filePath != null) {
    return {
      filePath: toProjectPath(projectRoot, invalidation.filePath),
    };
  } else {
    invariant(
      invalidation.aboveFilePath != null && invalidation.fileName != null,
    );
    return {
      fileName: invalidation.fileName,
      aboveFilePath: toProjectPath(projectRoot, invalidation.aboveFilePath),
    };
  }
}

export function fromInternalSourceLocation(
  projectRoot: FilePath,
  loc: ?InternalSourceLocation,
): ?SourceLocation {
  if (!loc) return loc;

  return {
    filePath: fromProjectPath(projectRoot, loc.filePath),
    start: loc.start,
    end: loc.end,
  };
}

export function toInternalSourceLocation(
  projectRoot: FilePath,
  loc: ?SourceLocation,
): ?InternalSourceLocation {
  if (!loc) return loc;

  return {
    filePath: toProjectPath(projectRoot, loc.filePath),
    start: loc.start,
    end: loc.end,
  };
}
export function toInternalSymbols<T: {|loc: ?SourceLocation|}>(
  projectRoot: FilePath,
  symbols: ?Map<Symbol, T>,
): ?Map<
  Symbol,
  {|loc: ?InternalSourceLocation, ...$Rest<T, {|loc: ?SourceLocation|}>|},
> {
  if (!symbols) return symbols;

  return new Map(
    [...symbols].map(([k, {loc, ...v}]) => [
      k,
      {
        ...v,
        loc: toInternalSourceLocation(projectRoot, loc),
      },
    ]),
  );
}

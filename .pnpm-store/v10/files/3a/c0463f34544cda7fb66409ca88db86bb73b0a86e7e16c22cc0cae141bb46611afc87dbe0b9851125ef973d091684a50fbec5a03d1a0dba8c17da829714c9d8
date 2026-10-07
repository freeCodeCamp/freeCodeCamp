// @flow strict-local

import type {
  FilePath,
  InitialParcelOptions,
  DependencySpecifier,
  InitialServerOptions,
} from '@parcel/types';
import type {FileSystem} from '@parcel/fs';
import type {ParcelOptions} from './types';

import path from 'path';
import {hashString} from '@parcel/hash';
import {NodeFS} from '@parcel/fs';
import {LMDBCache, FSCache} from '@parcel/cache';
import {NodePackageManager} from '@parcel/package-manager';
import {getRootDir, relativePath, resolveConfig, isGlob} from '@parcel/utils';
import loadDotEnv from './loadDotEnv';
import {toProjectPath} from './projectPath';
import {getResolveFrom} from './requests/ParcelConfigRequest';

// Default cache directory name
const DEFAULT_CACHE_DIRNAME = '.parcel-cache';
const LOCK_FILE_NAMES = ['yarn.lock', 'package-lock.json', 'pnpm-lock.yaml'];

// Generate a unique instanceId, will change on every run of parcel
function generateInstanceId(entries: Array<FilePath>): string {
  return hashString(
    `${entries.join(',')}-${Date.now()}-${Math.round(Math.random() * 100)}`,
  );
}

export default async function resolveOptions(
  initialOptions: InitialParcelOptions,
): Promise<ParcelOptions> {
  let inputFS = initialOptions.inputFS || new NodeFS();
  let outputFS = initialOptions.outputFS || new NodeFS();

  let inputCwd = inputFS.cwd();
  let outputCwd = outputFS.cwd();

  let entries: Array<FilePath>;
  if (initialOptions.entries == null || initialOptions.entries === '') {
    entries = [];
  } else if (Array.isArray(initialOptions.entries)) {
    entries = initialOptions.entries.map(entry =>
      path.resolve(inputCwd, entry),
    );
  } else {
    entries = [path.resolve(inputCwd, initialOptions.entries)];
  }

  let shouldMakeEntryReferFolder = false;
  if (entries.length === 1 && !isGlob(entries[0])) {
    let [entry] = entries;
    try {
      shouldMakeEntryReferFolder = (await inputFS.stat(entry)).isDirectory();
    } catch {
      // ignore failing stat call
    }
  }

  // getRootDir treats the input as files, so getRootDir(["/home/user/myproject"]) returns "/home/user".
  // Instead we need to make the the entry refer to some file inside the specified folders if entries refers to the directory.
  let entryRoot = getRootDir(
    shouldMakeEntryReferFolder ? [path.join(entries[0], 'index')] : entries,
  );
  let projectRootFile =
    (await resolveConfig(
      inputFS,
      path.join(entryRoot, 'index'),
      [...LOCK_FILE_NAMES, '.git', '.hg'],
      path.parse(entryRoot).root,
    )) || path.join(inputCwd, 'index'); // ? Should this just be rootDir

  let projectRoot = path.dirname(projectRootFile);

  let packageManager =
    initialOptions.packageManager ||
    new NodePackageManager(inputFS, projectRoot);

  let cacheDir =
    // If a cacheDir is provided, resolve it relative to cwd. Otherwise,
    // use a default directory resolved relative to the project root.
    initialOptions.cacheDir != null
      ? path.resolve(outputCwd, initialOptions.cacheDir)
      : path.resolve(projectRoot, DEFAULT_CACHE_DIRNAME);

  let cache =
    initialOptions.cache ??
    (outputFS instanceof NodeFS
      ? new LMDBCache(cacheDir)
      : new FSCache(outputFS, cacheDir));

  let mode = initialOptions.mode ?? 'development';
  let shouldOptimize =
    initialOptions?.defaultTargetOptions?.shouldOptimize ??
    mode === 'production';

  let publicUrl = initialOptions?.defaultTargetOptions?.publicUrl ?? '/';
  let distDir =
    initialOptions?.defaultTargetOptions?.distDir != null
      ? path.resolve(inputCwd, initialOptions?.defaultTargetOptions?.distDir)
      : undefined;

  let shouldBuildLazily = initialOptions.shouldBuildLazily ?? false;
  let shouldContentHash =
    initialOptions.shouldContentHash ?? initialOptions.mode === 'production';
  if (shouldBuildLazily && shouldContentHash) {
    throw new Error('Lazy bundling does not work with content hashing');
  }

  let env = {
    ...(await loadDotEnv(
      initialOptions.env ?? {},
      inputFS,
      path.join(projectRoot, 'index'),
      projectRoot,
    )),
    ...process.env,
    ...initialOptions.env,
  };

  let port = determinePort(initialOptions.serveOptions, env.PORT);

  return {
    config: getRelativeConfigSpecifier(
      inputFS,
      projectRoot,
      initialOptions.config,
    ),
    defaultConfig: getRelativeConfigSpecifier(
      inputFS,
      projectRoot,
      initialOptions.defaultConfig,
    ),
    shouldPatchConsole: initialOptions.shouldPatchConsole ?? false,
    env,
    mode,
    shouldAutoInstall: initialOptions.shouldAutoInstall ?? false,
    hmrOptions: initialOptions.hmrOptions ?? null,
    shouldBuildLazily,
    shouldBundleIncrementally: initialOptions.shouldBundleIncrementally ?? true,
    shouldContentHash,
    serveOptions: initialOptions.serveOptions
      ? {
          ...initialOptions.serveOptions,
          distDir: distDir ?? path.join(outputCwd, 'dist'),
          port,
        }
      : false,
    shouldDisableCache: initialOptions.shouldDisableCache ?? false,
    shouldProfile: initialOptions.shouldProfile ?? false,
    cacheDir,
    entries: entries.map(e => toProjectPath(projectRoot, e)),
    targets: initialOptions.targets,
    logLevel: initialOptions.logLevel ?? 'info',
    projectRoot,
    inputFS,
    outputFS,
    cache,
    packageManager,
    additionalReporters:
      initialOptions.additionalReporters?.map(({packageName, resolveFrom}) => ({
        packageName,
        resolveFrom: toProjectPath(projectRoot, resolveFrom),
      })) ?? [],
    instanceId: generateInstanceId(entries),
    detailedReport: initialOptions.detailedReport,
    defaultTargetOptions: {
      shouldOptimize,
      shouldScopeHoist: initialOptions?.defaultTargetOptions?.shouldScopeHoist,
      sourceMaps: initialOptions?.defaultTargetOptions?.sourceMaps ?? true,
      publicUrl,
      ...(distDir != null
        ? {distDir: toProjectPath(projectRoot, distDir)}
        : {
            /*::...null*/
          }),
      engines: initialOptions?.defaultTargetOptions?.engines,
      outputFormat: initialOptions?.defaultTargetOptions?.outputFormat,
      isLibrary: initialOptions?.defaultTargetOptions?.isLibrary,
    },
  };
}

function getRelativeConfigSpecifier(
  fs: FileSystem,
  projectRoot: FilePath,
  specifier: ?DependencySpecifier,
) {
  if (specifier == null) {
    return undefined;
  } else if (path.isAbsolute(specifier)) {
    let resolveFrom = getResolveFrom(fs, projectRoot);
    let relative = relativePath(path.dirname(resolveFrom), specifier);
    // If the config is outside the project root, use an absolute path so that if the project root
    // moves the path still works. Otherwise, use a relative path so that the cache is portable.
    return relative.startsWith('..') ? specifier : relative;
  } else {
    return specifier;
  }
}

function determinePort(
  initialServerOptions: InitialServerOptions | false | void,
  portInEnv: string | void,
  defaultPort: number = 1234,
): number {
  function parsePort(port: string): number | void {
    let parsedPort = Number(port);

    // return undefined if port number defined in .env is not valid integer
    if (!Number.isInteger(parsedPort)) {
      return undefined;
    }
    return parsedPort;
  }

  if (!initialServerOptions) {
    return typeof portInEnv !== 'undefined'
      ? parsePort(portInEnv) ?? defaultPort
      : defaultPort;
  }

  // if initialServerOptions.port is equal to defaultPort, then this means that port number is provided via PORT=~~~~ on cli. In this case, we should ignore port number defined in .env.
  if (initialServerOptions.port !== defaultPort) {
    return initialServerOptions.port;
  }

  return typeof portInEnv !== 'undefined'
    ? parsePort(portInEnv) ?? defaultPort
    : defaultPort;
}

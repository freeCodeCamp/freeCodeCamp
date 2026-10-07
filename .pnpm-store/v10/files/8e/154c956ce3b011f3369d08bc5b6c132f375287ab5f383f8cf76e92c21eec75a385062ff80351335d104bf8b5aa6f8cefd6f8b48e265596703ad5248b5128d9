// @flow

import type {FilePath, PackageJSON} from '@parcel/types';
import type {
  ModuleRequest,
  PackageManager,
  PackageInstaller,
  InstallOptions,
} from './types';
import type {FileSystem} from '@parcel/fs';

import invariant from 'assert';
import path from 'path';
import nullthrows from 'nullthrows';
import semver from 'semver';
import ThrowableDiagnostic, {
  generateJSONCodeHighlights,
  encodeJSONKeyComponent,
  md,
} from '@parcel/diagnostic';
import logger from '@parcel/logger';
import {loadConfig, PromiseQueue, resolveConfig} from '@parcel/utils';
import WorkerFarm from '@parcel/workers';

import {Npm} from './Npm';
import {Yarn} from './Yarn';
import {Pnpm} from './Pnpm.js';
import {getConflictingLocalDependencies} from './utils';
import validateModuleSpecifier from './validateModuleSpecifier';

async function install(
  fs: FileSystem,
  packageManager: PackageManager,
  modules: Array<ModuleRequest>,
  from: FilePath,
  projectRoot: FilePath,
  options: InstallOptions = {},
): Promise<void> {
  let {installPeers = true, saveDev = true, packageInstaller} = options;
  let moduleNames = modules.map(m => m.name).join(', ');

  logger.progress(`Installing ${moduleNames}...`);

  let fromPkgPath = await resolveConfig(
    fs,
    from,
    ['package.json'],
    projectRoot,
  );
  let cwd = fromPkgPath ? path.dirname(fromPkgPath) : fs.cwd();

  if (!packageInstaller) {
    packageInstaller = await determinePackageInstaller(fs, from, projectRoot);
  }

  try {
    await packageInstaller.install({
      modules,
      saveDev,
      cwd,
      packagePath: fromPkgPath,
      fs,
    });
  } catch (err) {
    throw new Error(`Failed to install ${moduleNames}: ${err.message}`);
  }

  if (installPeers) {
    await Promise.all(
      modules.map(m =>
        installPeerDependencies(
          fs,
          packageManager,
          m,
          from,
          projectRoot,
          options,
        ),
      ),
    );
  }
}

async function installPeerDependencies(
  fs: FileSystem,
  packageManager: PackageManager,
  module: ModuleRequest,
  from: FilePath,
  projectRoot: FilePath,
  options,
) {
  const {resolved} = await packageManager.resolve(module.name, from);
  const modulePkg: PackageJSON = nullthrows(
    await loadConfig(fs, resolved, ['package.json'], projectRoot),
  ).config;
  const peers = modulePkg.peerDependencies || {};

  let modules: Array<ModuleRequest> = [];
  for (let [name, range] of Object.entries(peers)) {
    invariant(typeof range === 'string');

    let conflicts = await getConflictingLocalDependencies(
      fs,
      name,
      from,
      projectRoot,
    );
    if (conflicts) {
      let {pkg} = await packageManager.resolve(name, from);
      invariant(pkg);
      if (!semver.satisfies(pkg.version, range)) {
        throw new ThrowableDiagnostic({
          diagnostic: {
            message: md`Could not install the peer dependency "${name}" for "${module.name}", installed version ${pkg.version} is incompatible with ${range}`,
            origin: '@parcel/package-manager',
            codeFrames: [
              {
                filePath: conflicts.filePath,
                language: 'json',
                code: conflicts.json,
                codeHighlights: generateJSONCodeHighlights(
                  conflicts.json,
                  conflicts.fields.map(field => ({
                    key: `/${field}/${encodeJSONKeyComponent(name)}`,
                    type: 'key',
                    message: 'Found this conflicting local requirement.',
                  })),
                ),
              },
            ],
          },
        });
      }

      continue;
    }
    modules.push({name, range});
  }

  if (modules.length) {
    await install(
      fs,
      packageManager,
      modules,
      from,
      projectRoot,
      Object.assign({}, options, {installPeers: false}),
    );
  }
}

async function determinePackageInstaller(
  fs: FileSystem,
  filepath: FilePath,
  projectRoot: FilePath,
): Promise<PackageInstaller> {
  let configFile = await resolveConfig(
    fs,
    filepath,
    ['package-lock.json', 'pnpm-lock.yaml', 'yarn.lock'],
    projectRoot,
  );

  let configName = configFile && path.basename(configFile);

  // Always use the package manager that seems to be used in the project,
  // falling back to a different one wouldn't update the existing lockfile.
  if (configName === 'package-lock.json') {
    return new Npm();
  } else if (configName === 'pnpm-lock.yaml') {
    return new Pnpm();
  } else if (configName === 'yarn.lock') {
    return new Yarn();
  }

  if (await Yarn.exists()) {
    return new Yarn();
  } else if (await Pnpm.exists()) {
    return new Pnpm();
  } else {
    return new Npm();
  }
}

let queue = new PromiseQueue({maxConcurrent: 1});
let modulesInstalling: Set<string> = new Set();

// Exported so that it may be invoked from the worker api below.
// Do not call this directly! This can result in concurrent package installations
// across multiple instances of the package manager.
export function _addToInstallQueue(
  fs: FileSystem,
  packageManager: PackageManager,
  modules: Array<ModuleRequest>,
  filePath: FilePath,
  projectRoot: FilePath,
  options?: InstallOptions,
): Promise<mixed> {
  modules = modules.map(request => ({
    name: validateModuleSpecifier(request.name),
    range: request.range,
  }));

  // Wrap PromiseQueue and track modules that are currently installing.
  // If a request comes in for a module that is currently installing, don't bother
  // enqueuing it.
  let modulesToInstall = modules.filter(
    m => !modulesInstalling.has(getModuleRequestKey(m)),
  );
  if (modulesToInstall.length) {
    for (let m of modulesToInstall) {
      modulesInstalling.add(getModuleRequestKey(m));
    }

    queue
      .add(() =>
        install(
          fs,
          packageManager,
          modulesToInstall,
          filePath,
          projectRoot,
          options,
        ).then(() => {
          for (let m of modulesToInstall) {
            modulesInstalling.delete(getModuleRequestKey(m));
          }
        }),
      )
      .then(
        () => {},
        () => {},
      );
  }

  return queue.run();
}

export function installPackage(
  fs: FileSystem,
  packageManager: PackageManager,
  modules: Array<ModuleRequest>,
  filePath: FilePath,
  projectRoot: FilePath,
  options?: InstallOptions,
): Promise<mixed> {
  if (WorkerFarm.isWorker()) {
    let workerApi = WorkerFarm.getWorkerApi();
    // TODO this should really be `__filename` but without the rewriting.
    let bundlePath =
      process.env.PARCEL_BUILD_ENV === 'production' &&
      !process.env.PARCEL_SELF_BUILD
        ? path.join(__dirname, '..', 'lib/index.js')
        : __filename;
    return workerApi.callMaster({
      location: bundlePath,
      args: [fs, packageManager, modules, filePath, projectRoot, options],
      method: '_addToInstallQueue',
    });
  }

  return _addToInstallQueue(
    fs,
    packageManager,
    modules,
    filePath,
    projectRoot,
    options,
  );
}

function getModuleRequestKey(moduleRequest: ModuleRequest): string {
  return [moduleRequest.name, moduleRequest.range].join('@');
}

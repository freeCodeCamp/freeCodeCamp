// @flow

import type {ModuleRequest, PackageInstaller, InstallerOptions} from './types';
import type {FileSystem} from '@parcel/fs';
import type {FilePath} from '@parcel/types';

import path from 'path';
import {ncp} from '@parcel/fs';
import {registerSerializableClass} from '@parcel/core';
import pkg from '../package.json';
import {moduleRequestsFromDependencyMap} from './utils';

type Package = {|
  fs: FileSystem,
  packagePath: FilePath,
|};

// This PackageInstaller implementation simply copies files from one filesystem to another.
// Mostly useful for testing purposes.
export class MockPackageInstaller implements PackageInstaller {
  packages: Map<string, Package> = new Map<string, Package>();

  register(packageName: string, fs: FileSystem, packagePath: FilePath) {
    this.packages.set(packageName, {fs, packagePath});
  }

  async install({
    modules,
    fs,
    cwd,
    packagePath,
    saveDev = true,
  }: InstallerOptions): Promise<void> {
    if (packagePath == null) {
      packagePath = path.join(cwd, 'package.json');
      await fs.writeFile(packagePath, '{}');
    }

    let pkg = JSON.parse(await fs.readFile(packagePath, 'utf8'));
    let key = saveDev ? 'devDependencies' : 'dependencies';

    if (!pkg[key]) {
      pkg[key] = {};
    }

    for (let module of modules) {
      pkg[key][module.name] =
        '^' + (await this.installPackage(module, fs, packagePath));
    }

    await fs.writeFile(packagePath, JSON.stringify(pkg));
  }

  async installPackage(
    moduleRequest: ModuleRequest,
    fs: FileSystem,
    packagePath: FilePath,
  ): Promise<any> {
    let pkg = this.packages.get(moduleRequest.name);
    if (!pkg) {
      throw new Error('Unknown package ' + moduleRequest.name);
    }

    let dest = path.join(
      path.dirname(packagePath),
      'node_modules',
      moduleRequest.name,
    );
    await ncp(pkg.fs, pkg.packagePath, fs, dest);

    let packageJSON = JSON.parse(
      await fs.readFile(path.join(dest, 'package.json'), 'utf8'),
    );

    if (packageJSON.dependencies != null) {
      for (let dep of moduleRequestsFromDependencyMap(
        packageJSON.dependencies,
      )) {
        await this.installPackage(dep, fs, packagePath);
      }
    }

    return packageJSON.version;
  }
}

registerSerializableClass(
  `${pkg.version}:MockPackageInstaller`,
  MockPackageInstaller,
);

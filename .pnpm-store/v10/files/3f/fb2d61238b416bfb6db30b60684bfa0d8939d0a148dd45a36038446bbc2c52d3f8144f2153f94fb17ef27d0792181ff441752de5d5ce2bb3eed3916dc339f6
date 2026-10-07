// @flow

import type {
  FilePath,
  FileCreateInvalidation,
  SemverRange,
  DependencySpecifier,
  PackageJSON,
} from '@parcel/types';
import type {FileSystem} from '@parcel/fs';

export type ResolveResult = {|
  resolved: FilePath | DependencySpecifier,
  pkg?: ?PackageJSON,
  invalidateOnFileCreate: Array<FileCreateInvalidation>,
  invalidateOnFileChange: Set<FilePath>,
|};

export type InstallOptions = {
  installPeers?: boolean,
  saveDev?: boolean,
  packageInstaller?: ?PackageInstaller,
  ...
};

export type InstallerOptions = {|
  modules: Array<ModuleRequest>,
  fs: FileSystem,
  cwd: FilePath,
  packagePath?: ?FilePath,
  saveDev?: boolean,
|};

export interface PackageInstaller {
  install(opts: InstallerOptions): Promise<void>;
}

export type Invalidations = {|
  invalidateOnFileCreate: Array<FileCreateInvalidation>,
  invalidateOnFileChange: Set<FilePath>,
|};

export interface PackageManager {
  require(
    id: DependencySpecifier,
    from: FilePath,
    ?{|range?: ?SemverRange, shouldAutoInstall?: boolean, saveDev?: boolean|},
  ): Promise<any>;
  resolve(
    id: DependencySpecifier,
    from: FilePath,
    ?{|range?: ?SemverRange, shouldAutoInstall?: boolean, saveDev?: boolean|},
  ): Promise<ResolveResult>;
  getInvalidations(id: DependencySpecifier, from: FilePath): Invalidations;
  invalidate(id: DependencySpecifier, from: FilePath): void;
}

export type ModuleRequest = {|
  +name: string,
  +range: ?SemverRange,
|};

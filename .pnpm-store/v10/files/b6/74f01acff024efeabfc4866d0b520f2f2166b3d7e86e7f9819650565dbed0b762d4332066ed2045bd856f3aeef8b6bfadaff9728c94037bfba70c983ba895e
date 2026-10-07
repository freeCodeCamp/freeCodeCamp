import type { FilePath, FileCreateInvalidation, SemverRange, DependencySpecifier, PackageJSON } from "@parcel/types";
import type { FileSystem } from "@parcel/fs";
export type ResolveResult = {
  resolved: FilePath | DependencySpecifier;
  pkg?: PackageJSON | null | undefined;
  invalidateOnFileCreate: Array<FileCreateInvalidation>;
  invalidateOnFileChange: Set<FilePath>;
};
export type InstallOptions = {
  installPeers?: boolean;
  saveDev?: boolean;
  packageInstaller?: PackageInstaller | null | undefined;
};
export type InstallerOptions = {
  modules: Array<ModuleRequest>;
  fs: FileSystem;
  cwd: FilePath;
  packagePath?: FilePath | null | undefined;
  saveDev?: boolean;
};
export interface PackageInstaller {
  install(opts: InstallerOptions): Promise<void>;
}
export type Invalidations = {
  invalidateOnFileCreate: Array<FileCreateInvalidation>;
  invalidateOnFileChange: Set<FilePath>;
};
export interface PackageManager {
  require(id: DependencySpecifier, from: FilePath, arg2: {
    range?: SemverRange | null | undefined;
    shouldAutoInstall?: boolean;
    saveDev?: boolean;
  } | null | undefined): Promise<any>;
  resolve(id: DependencySpecifier, from: FilePath, arg2: {
    range?: SemverRange | null | undefined;
    shouldAutoInstall?: boolean;
    saveDev?: boolean;
  } | null | undefined): Promise<ResolveResult>;
  getInvalidations(id: DependencySpecifier, from: FilePath): Invalidations;
  invalidate(id: DependencySpecifier, from: FilePath): void;
}
export type ModuleRequest = {
  readonly name: string;
  readonly range: SemverRange | null | undefined;
};

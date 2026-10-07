import type {FilePath} from '@parcel/types';
import type {FileSystem} from '@parcel/fs';
import type {PackageInstaller, PackageManager} from './lib/types';

export * from './lib/types';

export const Npm: {
  new (): PackageInstaller;
};
export const Pnpm: {
  new (): PackageInstaller;
};
export const Yarn: {
  new (): PackageInstaller;
};

export const MockPackageInstaller: {
  new (): PackageInstaller;
};
export const NodePackageManager: {
  new (fs: FileSystem, projectRoot: FilePath, installer?: PackageInstaller): PackageManager;
};

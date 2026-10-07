import type {FileSystem} from './lib/types';
import type WorkerFarm from '@parcel/workers';

export * from './lib/types';

export const NodeFS: {
  new (): FileSystem;
};

export const MemoryFS: {
  new (farm: WorkerFarm): FileSystem;
};

export const OverlayFS: {
  new (writable: FileSystem, readable: FileSystem): FileSystem;
};

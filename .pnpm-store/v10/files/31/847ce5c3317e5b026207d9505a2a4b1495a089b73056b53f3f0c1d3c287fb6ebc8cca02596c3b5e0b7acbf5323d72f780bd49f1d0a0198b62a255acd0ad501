import {FilePath} from '@parcel/types';

type BackendType = 'process' | 'threads';

export type FarmOptions = {
  maxConcurrentWorkers: number,
  maxConcurrentCallsPerWorker: number,
  forcedKillTime: number,
  useLocalWorker: boolean,
  warmWorkers: boolean,
  workerPath?: FilePath,
  backend: BackendType,
  shouldPatchConsole?: boolean,
};

declare class WorkerFarm {
  constructor(options: FarmOptions);

  end(): Promise<void>;
}

export default WorkerFarm; 

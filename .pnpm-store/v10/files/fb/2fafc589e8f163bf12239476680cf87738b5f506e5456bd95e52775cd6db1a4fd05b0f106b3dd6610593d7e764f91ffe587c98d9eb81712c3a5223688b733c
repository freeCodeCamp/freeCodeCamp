import Stats from './Stats';
import Dirent from './Dirent';
import { Volume as _Volume, StatWatcher, FSWatcher, IReadStream, IWriteStream, DirectoryJSON } from './volume';
import { IPromisesAPI } from './promises';
import { constants } from './constants';
export { DirectoryJSON };
export declare const Volume: typeof _Volume;
export declare const vol: _Volume;
export interface IFs extends _Volume {
    constants: typeof constants;
    Stats: new (...args: any[]) => Stats;
    Dirent: new (...args: any[]) => Dirent;
    StatWatcher: new () => StatWatcher;
    FSWatcher: new () => FSWatcher;
    ReadStream: new (...args: any[]) => IReadStream;
    WriteStream: new (...args: any[]) => IWriteStream;
    promises: IPromisesAPI;
    _toUnixTimestamp: any;
}
export declare function createFsFromVolume(vol: _Volume): IFs;
export declare const fs: IFs;

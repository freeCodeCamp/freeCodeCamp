import { Volume } from './volume';
export interface IStore {
    setItem(key: string, json: any): any;
    getItem(key: string): any;
    removeItem(key: string): any;
}
export declare class ObjectStore {
    obj: object;
    constructor(obj: any);
    setItem(key: string, json: any): void;
    getItem(key: string): any;
    removeItem(key: string): void;
}
export declare function createVolume(namespace: string, LS?: IStore | object): new (...args: any[]) => Volume;

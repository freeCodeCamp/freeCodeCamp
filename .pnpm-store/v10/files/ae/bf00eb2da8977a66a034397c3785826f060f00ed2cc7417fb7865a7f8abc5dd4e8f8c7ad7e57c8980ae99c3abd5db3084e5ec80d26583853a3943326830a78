import { IReadOnlyMap } from './interfaces';

export class ReadOnlyMap<T, U> implements IReadOnlyMap<T, U> {
    private _map: Map<T, U>;

    constructor(parameters: [T, U][]) {
        this._map = new Map(parameters);
    }

    get size(): number {
        return this._map.size;
    }

    public entries(): IterableIterator<[T, U]> {
        return this._map.entries();
    }

    public forEach(callback: (audioParam: U, name: T, map: ReadOnlyMap<T, U>) => void, thisArg: any = null): void {
        return this._map.forEach((value: U, key: T) => callback.call(thisArg, value, key, this));
    }

    public get(name: T): undefined | U {
        return this._map.get(name);
    }

    public has(name: T): boolean {
        return this._map.has(name);
    }

    public keys(): IterableIterator<T> {
        return this._map.keys();
    }

    public values(): IterableIterator<U> {
        return this._map.values();
    }
}

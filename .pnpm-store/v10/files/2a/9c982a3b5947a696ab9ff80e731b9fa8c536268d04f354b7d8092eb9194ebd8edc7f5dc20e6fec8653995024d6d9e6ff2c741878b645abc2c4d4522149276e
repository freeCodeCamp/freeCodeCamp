export { i as isEqual } from '../shared/ohash.CMR0vuBX.js';

/**
 * Calculates the difference between two objects and returns a list of differences.
 *
 * @param {any} obj1 - The first object to compare.
 * @param {any} obj2 - The second object to compare.
 * @param {HashOptions} [opts={}] - Configuration options for hashing the objects. See {@link HashOptions}.
 * @returns {DiffEntry[]} An array with the differences between the two objects.
 */
declare function diff(obj1: any, obj2: any): DiffEntry[];
declare class DiffEntry {
    key: string;
    type: "changed" | "added" | "removed";
    newValue: DiffHashedObject;
    oldValue?: DiffHashedObject | undefined;
    constructor(key: string, type: "changed" | "added" | "removed", newValue: DiffHashedObject, oldValue?: DiffHashedObject | undefined);
    toString(): string;
    toJSON(): string;
}
declare class DiffHashedObject {
    key: string;
    value: any;
    hash?: string | undefined;
    props?: Record<string, DiffHashedObject> | undefined;
    constructor(key: string, value: any, hash?: string | undefined, props?: Record<string, DiffHashedObject> | undefined);
    toString(): string;
    toJSON(): string;
}

export { diff };

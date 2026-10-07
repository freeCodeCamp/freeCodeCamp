import { Maybe } from './types.cjs';
export interface Path {
    readonly prev: Path | undefined;
    readonly key: string | number;
    readonly typename: string | undefined;
}
/**
 * Given a Path and a key, return a new Path containing the new key.
 */
export declare function addPath(prev: Readonly<Path> | undefined, key: string | number, typename: string | undefined): Path;
/**
 * Given a Path, return an Array of the path keys.
 */
export declare function pathToArray(path: Maybe<Readonly<Path>>): Array<string | number>;
/**
 * Build a string describing the path.
 */
export declare function printPathArray(path: ReadonlyArray<string | number>): string;

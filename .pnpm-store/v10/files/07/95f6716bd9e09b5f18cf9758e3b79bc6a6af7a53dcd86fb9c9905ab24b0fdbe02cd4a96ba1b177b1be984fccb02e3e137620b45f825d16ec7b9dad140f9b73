import type { Maybe } from './Maybe';
export interface Path {
  readonly prev: Path | undefined;
  readonly key: string | number;
  readonly typename: string | undefined;
}
/**
 * Given a Path and a key, return a new Path containing the new key.
 */
export declare function addPath(
  prev: Readonly<Path> | undefined,
  key: string | number,
  typename: string | undefined,
): Path;
/**
 * Given a Path, return an Array of the path keys.
 */
export declare function pathToArray(
  path: Maybe<Readonly<Path>>,
): Array<string | number>;

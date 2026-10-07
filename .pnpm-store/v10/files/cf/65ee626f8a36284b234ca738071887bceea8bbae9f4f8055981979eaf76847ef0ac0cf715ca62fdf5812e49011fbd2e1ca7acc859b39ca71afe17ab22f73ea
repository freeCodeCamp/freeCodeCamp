import type { ObjMap } from './ObjMap';
/**
 * This function transforms a JS object `ObjMap<Promise<T>>` into
 * a `Promise<ObjMap<T>>`
 *
 * This is akin to bluebird's `Promise.props`, but implemented only using
 * `Promise.all` so it will work with any implementation of ES6 promises.
 */
export declare function promiseForObject<T>(
  object: ObjMap<Promise<T>>,
): Promise<ObjMap<T>>;

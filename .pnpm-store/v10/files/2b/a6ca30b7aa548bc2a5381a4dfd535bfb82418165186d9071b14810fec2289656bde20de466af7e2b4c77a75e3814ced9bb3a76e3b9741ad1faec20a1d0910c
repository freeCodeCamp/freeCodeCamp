/**
 * This function transforms a JS object `ObjMap<Promise<T>>` into
 * a `Promise<ObjMap<T>>`
 *
 * This is akin to bluebird's `Promise.props`, but implemented only using
 * `Promise.all` so it will work with any implementation of ES6 promises.
 */
export function promiseForObject(object) {
  return Promise.all(Object.values(object)).then((resolvedValues) => {
    const resolvedObject = Object.create(null);

    for (const [i, key] of Object.keys(object).entries()) {
      resolvedObject[key] = resolvedValues[i];
    }

    return resolvedObject;
  });
}

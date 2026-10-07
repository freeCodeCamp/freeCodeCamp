/**
 * Determines if a given value is an instance of object.
 */
export function isObject<T>(value: any, loose = false): value is T {
  return loose
    ? Object.prototype.toString.call(value).startsWith('[object ')
    : Object.prototype.toString.call(value) === '[object Object]'
}

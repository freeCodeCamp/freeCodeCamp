import { isObject } from './isObject'

export function hasRefCounted<T extends object>(
  value: T,
): value is T & NodeJS.RefCounted {
  return (
    /**
     * @note Guard against non-object values.
     * E.g. `setTimeout` returns an object in Node.js but a number in the browser.
     */
    isObject(value) &&
    typeof Reflect.get(value, 'ref') === 'function' &&
    typeof Reflect.get(value, 'unref') === 'function'
  )
}

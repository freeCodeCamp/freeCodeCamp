/**
 * A function that validates if property access is possible on an object
 * without throwing. It returns `true` if the property access is possible
 * and `false` otherwise.
 *
 * Environments like miniflare will throw on property access on certain objects
 * like Request and Response, for unimplemented properties.
 */
export function isPropertyAccessible<Obj extends Record<string, any>>(
  obj: Obj,
  key: keyof Obj
) {
  try {
    obj[key]
    return true
  } catch {
    return false
  }
}

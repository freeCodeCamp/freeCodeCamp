/**
 * Returns the source object of the given property on the target object
 * (the target itself, any parent in its prototype, or null).
 */
export function findPropertySource(
  target: object,
  propertyName: string | symbol
): object | null {
  if (!(propertyName in target)) {
    return null
  }

  const hasProperty = Object.prototype.hasOwnProperty.call(target, propertyName)
  if (hasProperty) {
    return target
  }

  const prototype = Reflect.getPrototypeOf(target)
  return prototype ? findPropertySource(prototype, propertyName) : null
}

import { getDeepPropertyDescriptor } from './patchesRegistry'

/**
 * Returns a boolean indicating whether the given global property
 * is defined and is configurable.
 */
export function hasConfigurableGlobal(
  propertyName: keyof typeof globalThis
): boolean {
  const match = getDeepPropertyDescriptor(globalThis, propertyName)

  // The property is not set at all.
  if (typeof match === 'undefined') {
    return false
  }

  const { descriptor } = match

  // The property is set to a getter that returns undefined.
  if (
    typeof descriptor.get === 'function' &&
    typeof descriptor.get() === 'undefined'
  ) {
    return false
  }

  // The property is set to a value equal to undefined.
  if (typeof descriptor.get === 'undefined' && descriptor.value == null) {
    return false
  }

  if (typeof descriptor.set === 'undefined' && !descriptor.configurable) {
    console.error(
      `[MSW] Failed to apply interceptor: the global \`${propertyName}\` property is non-configurable. This is likely an issue with your environment. If you are using a framework, please open an issue about this in their repository.`
    )
    return false
  }

  return true
}

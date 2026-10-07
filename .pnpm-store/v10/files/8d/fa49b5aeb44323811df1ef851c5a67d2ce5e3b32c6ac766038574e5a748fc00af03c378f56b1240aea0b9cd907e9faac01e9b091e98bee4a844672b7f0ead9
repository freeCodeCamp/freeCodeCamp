import { Logger } from '@open-draft/logger'

const logger = new Logger('cloneObject')

function isPlainObject(obj?: Record<string, any>): boolean {
  logger.info('is plain object?', obj)

  if (obj == null || !obj.constructor?.name) {
    logger.info('given object is undefined, not a plain object...')
    return false
  }

  logger.info('checking the object constructor:', obj.constructor.name)
  return obj.constructor.name === 'Object'
}

export function cloneObject<ObjectType extends Record<string, any>>(
  obj: ObjectType
): ObjectType {
  logger.info('cloning object:', obj)

  const enumerableProperties = Object.entries(obj).reduce<Record<string, any>>(
    (acc, [key, value]) => {
      logger.info('analyzing key-value pair:', key, value)

      // Recursively clone only plain objects, omitting class instances.
      acc[key] = isPlainObject(value) ? cloneObject(value) : value
      return acc
    },
    {}
  )

  return isPlainObject(obj)
    ? enumerableProperties
    : Object.assign(Object.getPrototypeOf(obj), enumerableProperties)
}

import isPlainObject from './isPlainObject'
import warning from './warning'

export default function verifyPlainObject(
  value: unknown,
  displayName: string,
  methodName: string
) {
  if (!isPlainObject(value)) {
    warning(
      `${methodName}() in ${displayName} must return a plain object. Instead received ${value}.`
    )
  }
}

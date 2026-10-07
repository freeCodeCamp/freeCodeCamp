/**
 * Remove a prefix from a string. Return the input string if the given prefix
 * isn't found.
 */

export default function stripPrefix(str, prefix = ``) {
  if (!prefix) {
    return str
  }

  if (str === prefix) {
    return `/`
  }

  if (str.startsWith(`${prefix}/`)) {
    return str.slice(prefix.length)
  }

  return str
}

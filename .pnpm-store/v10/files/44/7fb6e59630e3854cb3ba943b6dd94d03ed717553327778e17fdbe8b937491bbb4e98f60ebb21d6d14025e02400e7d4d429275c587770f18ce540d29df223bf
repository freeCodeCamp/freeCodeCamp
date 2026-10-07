const arr = []
const each = arr.forEach
const slice = arr.slice

const UNSAFE_KEYS = ['__proto__', 'constructor', 'prototype']

export function defaults (obj) {
  each.call(slice.call(arguments, 1), (source) => {
    if (source) {
      for (const prop of Object.keys(source)) {
        if (UNSAFE_KEYS.indexOf(prop) > -1) continue
        if (obj[prop] === undefined) obj[prop] = source[prop]
      }
    }
  })
  return obj
}

// Shared denylist: the patterns that are always unsafe to interpolate into a
// filesystem path, regardless of whether the value is a language code or a
// namespace name. Blocks directory escape (`..`), Windows path separators
// (`\`), control characters, prototype keys, empty strings, and oversized
// inputs. Anything that gets past this is safe *except* for whether it is
// allowed to contain a forward slash — see the two per-key helpers below.
function isSafeSegmentBase (v) {
  if (typeof v !== 'string') return false
  if (v.length === 0 || v.length > 128) return false
  if (UNSAFE_KEYS.indexOf(v) > -1) return false
  if (v.indexOf('..') > -1) return false
  if (v.indexOf('\\') > -1) return false
  // eslint-disable-next-line no-control-regex
  if (/[\x00-\x1F\x7F]/.test(v)) return false
  return true
}

// Strict — also rejects forward slash. Applied to `lng`:
// no legitimate BCP-47 / i18next language-code shape
// (https://www.i18next.com/how-to/faq#how-should-the-language-codes-be-formatted)
// contains `/`, so allowing it would only enable attacks.
export function isSafeLangSegment (v) {
  if (!isSafeSegmentBase(v)) return false
  if (v.indexOf('/') > -1) return false
  return true
}

// Loose — allows forward slash. Applied to `ns`:
// nested namespace names like `a/b` that map to subfolder locale files
// (`public/locales/en/a/b.json`) are a documented i18next pattern and were
// rejected in 2.6.4 as an unintended regression (see issue #74). Directory
// escape is still prevented — `..` is still blocked, `\` is still blocked,
// and the 2.6.4 security fix remains in force for every concrete attack
// pattern from the original advisory.
export function isSafeNsSegment (v) {
  return isSafeSegmentBase(v)
}

// Backwards-compatible alias for the strict check. Kept because 2.6.4
// exported this symbol; external callers (if any) get the pre-fix behaviour.
export const isSafePathSegment = isSafeLangSegment

// Per-interpolation-key routing: `lng` gets strict, `ns` gets loose.
// Unknown keys fall back to strict (fail-closed).
const SAFETY_CHECK_BY_KEY = {
  lng: isSafeLangSegment,
  ns: isSafeNsSegment
}

export function debounce (func, wait, immediate) {
  let timeout
  return function () {
    const context = this
    const args = arguments
    const later = function () {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    const callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}

function getLastOfPath (object, path, Empty) {
  function cleanKey (key) {
    return (key && key.indexOf('###') > -1) ? key.replace(/###/g, '.') : key
  }

  const stack = (typeof path !== 'string') ? [].concat(path) : path.split('.')
  while (stack.length > 1) {
    if (!object) return {}

    const key = cleanKey(stack.shift())
    // guard against prototype pollution — refuse to traverse __proto__,
    // constructor or prototype segments. Returning an empty result lets
    // callers drop the write silently rather than walking into Object.prototype.
    if (UNSAFE_KEYS.indexOf(key) > -1) return {}
    // descend only into OWN properties. Inherited members (hasOwnProperty,
    // valueOf, …) are truthy, so `!object[key]` skipped autovivify and the
    // walk landed on Object.prototype. (GHSA-cchx-rhgv-92hj)
    if (!Object.prototype.hasOwnProperty.call(object, key) && Empty) object[key] = new Empty()
    if (Object.prototype.hasOwnProperty.call(object, key)) object = object[key]
    else object = {}
  }

  if (!object) return {}
  const k = cleanKey(stack.shift())
  if (UNSAFE_KEYS.indexOf(k) > -1) return {}
  return { obj: object, k }
}

export function setPath (object, path, newValue) {
  const { obj, k } = getLastOfPath(object, path, Object)
  if (obj === undefined) return // unsafe path — drop silently
  if (Array.isArray(obj) && isNaN(k)) throw new Error(`Cannot create property "${k}" here since object is an array`)
  obj[k] = newValue
}

export function pushPath (object, path, newValue, concat) {
  const { obj, k } = getLastOfPath(object, path, Object)
  if (obj === undefined) return // unsafe path — drop silently
  obj[k] = obj[k] || []
  if (concat) obj[k] = obj[k].concat(newValue)
  if (!concat) obj[k].push(newValue)
}

export function getPath (object, path) {
  const { obj, k } = getLastOfPath(object, path)
  if (!obj) return undefined
  return obj[k]
}

const interpolationRegexp = /\{\{(.+?)\}\}/g
export function interpolate (str, data) {
  return str.replace(interpolationRegexp, (match, key) => {
    const k = key.trim()
    if (UNSAFE_KEYS.indexOf(k) > -1) return match
    const value = data[k]
    return value != null ? value : match
  })
}

// Path-specific variant: reject values that fail the path-segment safety
// check. Returns `null` if any substitution is unsafe — callers should bail
// out cleanly rather than issue the filesystem read/write. For multi-value
// joins (`en+de`), validates each `+`-separated segment independently.
export function interpolatePath (str, data) {
  let unsafe = false
  const result = str.replace(interpolationRegexp, (match, key) => {
    const k = key.trim()
    if (UNSAFE_KEYS.indexOf(k) > -1) return match
    const value = data[k]
    if (value == null) return match
    const check = SAFETY_CHECK_BY_KEY[k] || isSafeLangSegment // fail-closed on unknown keys
    const segments = String(value).split('+')
    for (const seg of segments) {
      if (!check(seg)) {
        unsafe = true
        return match
      }
    }
    return segments.join('+')
  })
  return unsafe ? null : result
}

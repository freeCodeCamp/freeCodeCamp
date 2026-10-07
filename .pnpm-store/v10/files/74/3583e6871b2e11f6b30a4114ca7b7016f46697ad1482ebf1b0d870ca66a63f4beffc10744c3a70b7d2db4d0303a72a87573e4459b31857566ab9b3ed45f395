'use strict'

function deepClone (obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  if (obj instanceof Date) {
    return new Date(obj.getTime())
  }

  if (obj instanceof Array) {
    const cloned = []
    for (let i = 0; i < obj.length; i++) {
      cloned[i] = deepClone(obj[i])
    }
    return cloned
  }

  if (typeof obj === 'object') {
    const cloned = Object.create(Object.getPrototypeOf(obj))
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        cloned[key] = deepClone(obj[key])
      }
    }
    return cloned
  }

  return obj
}

function parsePath (path) {
  const parts = []
  let current = ''
  let inBrackets = false
  let inQuotes = false
  let quoteChar = ''

  for (let i = 0; i < path.length; i++) {
    const char = path[i]

    if (!inBrackets && char === '.') {
      if (current) {
        parts.push(current)
        current = ''
      }
    } else if (char === '[') {
      if (current) {
        parts.push(current)
        current = ''
      }
      inBrackets = true
    } else if (char === ']' && inBrackets) {
      // Always push the current value when closing brackets, even if it's an empty string
      parts.push(current)
      current = ''
      inBrackets = false
      inQuotes = false
    } else if ((char === '"' || char === "'") && inBrackets) {
      if (!inQuotes) {
        inQuotes = true
        quoteChar = char
      } else if (char === quoteChar) {
        inQuotes = false
        quoteChar = ''
      } else {
        current += char
      }
    } else {
      current += char
    }
  }

  if (current) {
    parts.push(current)
  }

  return parts
}

function setValue (obj, parts, value) {
  let current = obj

  for (let i = 0; i < parts.length - 1; i++) {
    const key = parts[i]
    // Type safety: Check if current is an object before using 'in' operator
    if (typeof current !== 'object' || current === null || !(key in current)) {
      return false // Path doesn't exist, don't create it
    }
    if (typeof current[key] !== 'object' || current[key] === null) {
      return false // Path doesn't exist properly
    }
    current = current[key]
  }

  const lastKey = parts[parts.length - 1]
  if (lastKey === '*') {
    if (Array.isArray(current)) {
      for (let i = 0; i < current.length; i++) {
        current[i] = value
      }
    } else if (typeof current === 'object' && current !== null) {
      for (const key in current) {
        if (Object.prototype.hasOwnProperty.call(current, key)) {
          current[key] = value
        }
      }
    }
  } else {
    // Type safety: Check if current is an object before using 'in' operator
    if (typeof current === 'object' && current !== null && lastKey in current && Object.prototype.hasOwnProperty.call(current, lastKey)) {
      current[lastKey] = value
    }
  }
  return true
}

function removeKey (obj, parts) {
  let current = obj

  for (let i = 0; i < parts.length - 1; i++) {
    const key = parts[i]
    // Type safety: Check if current is an object before using 'in' operator
    if (typeof current !== 'object' || current === null || !(key in current)) {
      return false // Path doesn't exist, don't create it
    }
    if (typeof current[key] !== 'object' || current[key] === null) {
      return false // Path doesn't exist properly
    }
    current = current[key]
  }

  const lastKey = parts[parts.length - 1]
  if (lastKey === '*') {
    if (Array.isArray(current)) {
      // For arrays, we can't really "remove" all items as that would change indices
      // Instead, we set them to undefined which will be omitted by JSON.stringify
      for (let i = 0; i < current.length; i++) {
        current[i] = undefined
      }
    } else if (typeof current === 'object' && current !== null) {
      for (const key in current) {
        if (Object.prototype.hasOwnProperty.call(current, key)) {
          delete current[key]
        }
      }
    }
  } else {
    // Type safety: Check if current is an object before using 'in' operator
    if (typeof current === 'object' && current !== null && lastKey in current && Object.prototype.hasOwnProperty.call(current, lastKey)) {
      delete current[lastKey]
    }
  }
  return true
}

// Sentinel object to distinguish between undefined value and non-existent path
const PATH_NOT_FOUND = Symbol('PATH_NOT_FOUND')

function getValueIfExists (obj, parts) {
  let current = obj

  for (const part of parts) {
    if (current === null || current === undefined) {
      return PATH_NOT_FOUND
    }
    // Type safety: Check if current is an object before property access
    if (typeof current !== 'object' || current === null) {
      return PATH_NOT_FOUND
    }
    // Check if the property exists before accessing it
    if (!(part in current)) {
      return PATH_NOT_FOUND
    }
    current = current[part]
  }

  return current
}

function getValue (obj, parts) {
  let current = obj

  for (const part of parts) {
    if (current === null || current === undefined) {
      return undefined
    }
    // Type safety: Check if current is an object before property access
    if (typeof current !== 'object' || current === null) {
      return undefined
    }
    current = current[part]
  }

  return current
}

function redactPaths (obj, paths, censor, remove = false) {
  for (const path of paths) {
    const parts = parsePath(path)

    if (parts.includes('*')) {
      redactWildcardPath(obj, parts, censor, path, remove)
    } else {
      if (remove) {
        removeKey(obj, parts)
      } else {
        // Get value only if path exists - single traversal
        const value = getValueIfExists(obj, parts)
        if (value === PATH_NOT_FOUND) {
          continue
        }

        const actualCensor = typeof censor === 'function'
          ? censor(value, parts)
          : censor
        setValue(obj, parts, actualCensor)
      }
    }
  }
}

function redactWildcardPath (obj, parts, censor, originalPath, remove = false) {
  const wildcardIndex = parts.indexOf('*')

  if (wildcardIndex === parts.length - 1) {
    const parentParts = parts.slice(0, -1)
    let current = obj

    for (const part of parentParts) {
      if (current === null || current === undefined) return
      // Type safety: Check if current is an object before property access
      if (typeof current !== 'object' || current === null) return
      current = current[part]
    }

    if (Array.isArray(current)) {
      if (remove) {
        // For arrays, set all items to undefined which will be omitted by JSON.stringify
        for (let i = 0; i < current.length; i++) {
          current[i] = undefined
        }
      } else {
        for (let i = 0; i < current.length; i++) {
          const indexPath = [...parentParts, i.toString()]
          const actualCensor = typeof censor === 'function'
            ? censor(current[i], indexPath)
            : censor
          current[i] = actualCensor
        }
      }
    } else if (typeof current === 'object' && current !== null) {
      if (remove) {
        // Collect keys to delete to avoid issues with deleting during iteration
        const keysToDelete = []
        for (const key in current) {
          if (Object.prototype.hasOwnProperty.call(current, key)) {
            keysToDelete.push(key)
          }
        }
        for (const key of keysToDelete) {
          delete current[key]
        }
      } else {
        for (const key in current) {
          const keyPath = [...parentParts, key]
          const actualCensor = typeof censor === 'function'
            ? censor(current[key], keyPath)
            : censor
          current[key] = actualCensor
        }
      }
    }
  } else {
    redactIntermediateWildcard(obj, parts, censor, wildcardIndex, originalPath, remove)
  }
}

function redactIntermediateWildcard (obj, parts, censor, wildcardIndex, originalPath, remove = false) {
  const beforeWildcard = parts.slice(0, wildcardIndex)
  const afterWildcard = parts.slice(wildcardIndex + 1)
  const pathArray = [] // Cached array to avoid allocations

  function traverse (current, pathLength) {
    if (pathLength === beforeWildcard.length) {
      if (Array.isArray(current)) {
        for (let i = 0; i < current.length; i++) {
          pathArray[pathLength] = i.toString()
          traverse(current[i], pathLength + 1)
        }
      } else if (typeof current === 'object' && current !== null) {
        for (const key in current) {
          pathArray[pathLength] = key
          traverse(current[key], pathLength + 1)
        }
      }
    } else if (pathLength < beforeWildcard.length) {
      const nextKey = beforeWildcard[pathLength]
      // Type safety: Check if current is an object before using 'in' operator
      if (current && typeof current === 'object' && current !== null && nextKey in current) {
        pathArray[pathLength] = nextKey
        traverse(current[nextKey], pathLength + 1)
      }
    } else {
      // Check if afterWildcard contains more wildcards
      if (afterWildcard.includes('*')) {
        // Recursively handle remaining wildcards
        // Wrap censor to prepend current path context
        const wrappedCensor = typeof censor === 'function'
          ? (value, path) => {
              const fullPath = [...pathArray.slice(0, pathLength), ...path]
              return censor(value, fullPath)
            }
          : censor
        redactWildcardPath(current, afterWildcard, wrappedCensor, originalPath, remove)
      } else {
        // No more wildcards, apply the redaction directly
        if (remove) {
          removeKey(current, afterWildcard)
        } else {
          const actualCensor = typeof censor === 'function'
            ? censor(getValue(current, afterWildcard), [...pathArray.slice(0, pathLength), ...afterWildcard])
            : censor
          setValue(current, afterWildcard, actualCensor)
        }
      }
    }
  }

  if (beforeWildcard.length === 0) {
    traverse(obj, 0)
  } else {
    let current = obj
    for (let i = 0; i < beforeWildcard.length; i++) {
      const part = beforeWildcard[i]
      if (current === null || current === undefined) return
      // Type safety: Check if current is an object before property access
      if (typeof current !== 'object' || current === null) return
      current = current[part]
      pathArray[i] = part
    }
    if (current !== null && current !== undefined) {
      traverse(current, beforeWildcard.length)
    }
  }
}

function buildPathStructure (pathsToClone) {
  if (pathsToClone.length === 0) {
    return null // No paths to redact
  }

  // Parse all paths and organize by depth
  const pathStructure = new Map()
  for (const path of pathsToClone) {
    const parts = parsePath(path)
    let current = pathStructure
    for (let i = 0; i < parts.length; i++) {
      const part = parts[i]
      if (!current.has(part)) {
        current.set(part, new Map())
      }
      current = current.get(part)
    }
  }
  return pathStructure
}

function selectiveClone (obj, pathStructure) {
  if (!pathStructure) {
    return obj // No paths to redact, return original
  }

  function cloneSelectively (source, pathMap, depth = 0) {
    if (!pathMap || pathMap.size === 0) {
      return source // No more paths to clone, return reference
    }

    if (source === null || typeof source !== 'object') {
      return source
    }

    if (source instanceof Date) {
      return new Date(source.getTime())
    }

    if (Array.isArray(source)) {
      const cloned = []
      for (let i = 0; i < source.length; i++) {
        const indexStr = i.toString()
        if (pathMap.has(indexStr) || pathMap.has('*')) {
          cloned[i] = cloneSelectively(source[i], pathMap.get(indexStr) || pathMap.get('*'))
        } else {
          cloned[i] = source[i] // Share reference for non-redacted items
        }
      }
      return cloned
    }

    // Handle objects
    const cloned = Object.create(Object.getPrototypeOf(source))
    for (const key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        if (pathMap.has(key) || pathMap.has('*')) {
          cloned[key] = cloneSelectively(source[key], pathMap.get(key) || pathMap.get('*'))
        } else {
          cloned[key] = source[key] // Share reference for non-redacted properties
        }
      }
    }
    return cloned
  }

  return cloneSelectively(obj, pathStructure)
}

function validatePath (path) {
  if (typeof path !== 'string') {
    throw new Error('Paths must be (non-empty) strings')
  }

  if (path === '') {
    throw new Error('Invalid redaction path ()')
  }

  // Check for double dots
  if (path.includes('..')) {
    throw new Error(`Invalid redaction path (${path})`)
  }

  // Check for comma-separated paths (invalid syntax)
  if (path.includes(',')) {
    throw new Error(`Invalid redaction path (${path})`)
  }

  // Check for unmatched brackets
  let bracketCount = 0
  let inQuotes = false
  let quoteChar = ''

  for (let i = 0; i < path.length; i++) {
    const char = path[i]

    if ((char === '"' || char === "'") && bracketCount > 0) {
      if (!inQuotes) {
        inQuotes = true
        quoteChar = char
      } else if (char === quoteChar) {
        inQuotes = false
        quoteChar = ''
      }
    } else if (char === '[' && !inQuotes) {
      bracketCount++
    } else if (char === ']' && !inQuotes) {
      bracketCount--
      if (bracketCount < 0) {
        throw new Error(`Invalid redaction path (${path})`)
      }
    }
  }

  if (bracketCount !== 0) {
    throw new Error(`Invalid redaction path (${path})`)
  }
}

function validatePaths (paths) {
  if (!Array.isArray(paths)) {
    throw new TypeError('paths must be an array')
  }

  for (const path of paths) {
    validatePath(path)
  }
}

function slowRedact (options = {}) {
  const {
    paths = [],
    censor = '[REDACTED]',
    serialize = JSON.stringify,
    strict = true,
    remove = false
  } = options

  // Validate paths upfront to match fast-redact behavior
  validatePaths(paths)

  // Build path structure once during setup, not on every call
  const pathStructure = buildPathStructure(paths)

  return function redact (obj) {
    if (strict && (obj === null || typeof obj !== 'object')) {
      if (obj === null || obj === undefined) {
        return serialize ? serialize(obj) : obj
      }
      if (typeof obj !== 'object') {
        return serialize ? serialize(obj) : obj
      }
    }

    // Only clone paths that need redaction
    const cloned = selectiveClone(obj, pathStructure)
    const original = obj // Keep reference to original for restore

    let actualCensor = censor
    if (typeof censor === 'function') {
      actualCensor = censor
    }

    redactPaths(cloned, paths, actualCensor, remove)

    if (serialize === false) {
      cloned.restore = function () {
        return deepClone(original) // Full clone only when restore is called
      }
      return cloned
    }

    if (typeof serialize === 'function') {
      return serialize(cloned)
    }

    return JSON.stringify(cloned)
  }
}

module.exports = slowRedact

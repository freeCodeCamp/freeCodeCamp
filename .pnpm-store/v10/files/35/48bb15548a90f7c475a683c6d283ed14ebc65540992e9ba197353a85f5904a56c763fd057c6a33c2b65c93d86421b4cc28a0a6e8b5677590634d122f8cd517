// Inlined / shortened version of `kindOf` from https://github.com/jonschlinkert/kind-of
export function miniKindOf(val: any): string {
  if (val === void 0) return 'undefined'
  if (val === null) return 'null'

  const type = typeof val
  switch (type) {
    case 'boolean':
    case 'string':
    case 'number':
    case 'symbol':
    case 'function': {
      return type
    }
  }

  if (Array.isArray(val)) return 'array'
  if (isDate(val)) return 'date'
  if (isError(val)) return 'error'

  const constructorName = ctorName(val)
  switch (constructorName) {
    case 'Symbol':
    case 'Promise':
    case 'WeakMap':
    case 'WeakSet':
    case 'Map':
    case 'Set':
      return constructorName
  }

  // other
  return Object.prototype.toString
    .call(val)
    .slice(8, -1)
    .toLowerCase()
    .replace(/\s/g, '')
}

function ctorName(val: any): string | null {
  return typeof val.constructor === 'function' ? val.constructor.name : null
}

function isError(val: any) {
  return (
    val instanceof Error ||
    (typeof val.message === 'string' &&
      val.constructor &&
      typeof val.constructor.stackTraceLimit === 'number')
  )
}

function isDate(val: any) {
  if (val instanceof Date) return true
  return (
    typeof val.toDateString === 'function' &&
    typeof val.getDate === 'function' &&
    typeof val.setDate === 'function'
  )
}

export function kindOf(val: any) {
  let typeOfVal: string = typeof val

  if (process.env.NODE_ENV !== 'production') {
    typeOfVal = miniKindOf(val)
  }

  return typeOfVal
}

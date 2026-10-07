// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export abstract class _CodeOrName {
  abstract readonly str: string
  abstract readonly names: UsedNames
  abstract toString(): string
  abstract emptyStr(): boolean
}

export const IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i

export class Name extends _CodeOrName {
  readonly str: string
  constructor(s: string) {
    super()
    if (!IDENTIFIER.test(s)) throw new Error("CodeGen: name must be a valid identifier")
    this.str = s
  }

  toString(): string {
    return this.str
  }

  emptyStr(): boolean {
    return false
  }

  get names(): UsedNames {
    return {[this.str]: 1}
  }
}

export class _Code extends _CodeOrName {
  readonly _items: readonly CodeItem[]
  private _str?: string
  private _names?: UsedNames

  constructor(code: string | readonly CodeItem[]) {
    super()
    this._items = typeof code === "string" ? [code] : code
  }

  toString(): string {
    return this.str
  }

  emptyStr(): boolean {
    if (this._items.length > 1) return false
    const item = this._items[0]
    return item === "" || item === '""'
  }

  get str(): string {
    return (this._str ??= this._items.reduce((s: string, c: CodeItem) => `${s}${c}`, ""))
  }

  get names(): UsedNames {
    return (this._names ??= this._items.reduce((names: UsedNames, c) => {
      if (c instanceof Name) names[c.str] = (names[c.str] || 0) + 1
      return names
    }, {}))
  }
}

export type CodeItem = Name | string | number | boolean | null

export type UsedNames = Record<string, number | undefined>

export type Code = _Code | Name

export type SafeExpr = Code | number | boolean | null

export const nil = new _Code("")

type CodeArg = SafeExpr | string | undefined

export function _(strs: TemplateStringsArray, ...args: CodeArg[]): _Code {
  const code: CodeItem[] = [strs[0]]
  let i = 0
  while (i < args.length) {
    addCodeArg(code, args[i])
    code.push(strs[++i])
  }
  return new _Code(code)
}

const plus = new _Code("+")

export function str(strs: TemplateStringsArray, ...args: (CodeArg | string[])[]): _Code {
  const expr: CodeItem[] = [safeStringify(strs[0])]
  let i = 0
  while (i < args.length) {
    expr.push(plus)
    addCodeArg(expr, args[i])
    expr.push(plus, safeStringify(strs[++i]))
  }
  optimize(expr)
  return new _Code(expr)
}

export function addCodeArg(code: CodeItem[], arg: CodeArg | string[]): void {
  if (arg instanceof _Code) code.push(...arg._items)
  else if (arg instanceof Name) code.push(arg)
  else code.push(interpolate(arg))
}

function optimize(expr: CodeItem[]): void {
  let i = 1
  while (i < expr.length - 1) {
    if (expr[i] === plus) {
      const res = mergeExprItems(expr[i - 1], expr[i + 1])
      if (res !== undefined) {
        expr.splice(i - 1, 3, res)
        continue
      }
      expr[i++] = "+"
    }
    i++
  }
}

function mergeExprItems(a: CodeItem, b: CodeItem): CodeItem | undefined {
  if (b === '""') return a
  if (a === '""') return b
  if (typeof a == "string") {
    if (b instanceof Name || a[a.length - 1] !== '"') return
    if (typeof b != "string") return `${a.slice(0, -1)}${b}"`
    if (b[0] === '"') return a.slice(0, -1) + b.slice(1)
    return
  }
  if (typeof b == "string" && b[0] === '"' && !(a instanceof Name)) return `"${a}${b.slice(1)}`
  return
}

export function strConcat(c1: Code, c2: Code): Code {
  return c2.emptyStr() ? c1 : c1.emptyStr() ? c2 : str`${c1}${c2}`
}

// TODO do not allow arrays here
function interpolate(x?: string | string[] | number | boolean | null): SafeExpr | string {
  return typeof x == "number" || typeof x == "boolean" || x === null
    ? x
    : safeStringify(Array.isArray(x) ? x.join(",") : x)
}

export function stringify(x: unknown): Code {
  return new _Code(safeStringify(x))
}

export function safeStringify(x: unknown): string {
  return JSON.stringify(x)
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029")
}

export function getProperty(key: Code | string | number): Code {
  return typeof key == "string" && IDENTIFIER.test(key) ? new _Code(`.${key}`) : _`[${key}]`
}

//Does best effort to format the name properly
export function getEsmExportName(key: Code | string | number): Code {
  if (typeof key == "string" && IDENTIFIER.test(key)) {
    return new _Code(`${key}`)
  }
  throw new Error(`CodeGen: invalid export name: ${key}, use explicit $id name mapping`)
}

export function regexpCode(rx: RegExp): Code {
  return new _Code(rx.toString())
}

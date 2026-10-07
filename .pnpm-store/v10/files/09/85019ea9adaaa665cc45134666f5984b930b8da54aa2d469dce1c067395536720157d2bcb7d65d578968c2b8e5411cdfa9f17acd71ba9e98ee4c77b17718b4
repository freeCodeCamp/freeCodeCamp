const rxParseJson = /position\s(\d+)(?: \(line \d+ column \d+\))?$/

export function parseJson(s: string, pos: number): unknown {
  let endPos: number | undefined
  parseJson.message = undefined
  let matches: RegExpExecArray | null
  if (pos) s = s.slice(pos)
  try {
    parseJson.position = pos + s.length
    return JSON.parse(s)
  } catch (e) {
    matches = rxParseJson.exec((e as Error).message)
    if (!matches) {
      parseJson.message = "unexpected end"
      return undefined
    }
    endPos = +matches[1]
    const c = s[endPos]
    s = s.slice(0, endPos)
    parseJson.position = pos + endPos
    try {
      return JSON.parse(s)
    } catch (e1) {
      parseJson.message = `unexpected token ${c}`
      return undefined
    }
  }
}

parseJson.message = undefined as string | undefined
parseJson.position = 0 as number
parseJson.code = 'require("ajv/dist/runtime/parseJson").parseJson'

export function parseJsonNumber(s: string, pos: number, maxDigits?: number): number | undefined {
  let numStr = ""
  let c: string
  parseJsonNumber.message = undefined
  if (s[pos] === "-") {
    numStr += "-"
    pos++
  }
  if (s[pos] === "0") {
    numStr += "0"
    pos++
  } else {
    if (!parseDigits(maxDigits)) {
      errorMessage()
      return undefined
    }
  }
  if (maxDigits) {
    parseJsonNumber.position = pos
    return +numStr
  }
  if (s[pos] === ".") {
    numStr += "."
    pos++
    if (!parseDigits()) {
      errorMessage()
      return undefined
    }
  }
  if (((c = s[pos]), c === "e" || c === "E")) {
    numStr += "e"
    pos++
    if (((c = s[pos]), c === "+" || c === "-")) {
      numStr += c
      pos++
    }
    if (!parseDigits()) {
      errorMessage()
      return undefined
    }
  }
  parseJsonNumber.position = pos
  return +numStr

  function parseDigits(maxLen?: number): boolean {
    let digit = false
    while (((c = s[pos]), c >= "0" && c <= "9" && (maxLen === undefined || maxLen-- > 0))) {
      digit = true
      numStr += c
      pos++
    }
    return digit
  }

  function errorMessage(): void {
    parseJsonNumber.position = pos
    parseJsonNumber.message = pos < s.length ? `unexpected token ${s[pos]}` : "unexpected end"
  }
}

parseJsonNumber.message = undefined as string | undefined
parseJsonNumber.position = 0 as number
parseJsonNumber.code = 'require("ajv/dist/runtime/parseJson").parseJsonNumber'

const escapedChars: {[X in string]?: string} = {
  b: "\b",
  f: "\f",
  n: "\n",
  r: "\r",
  t: "\t",
  '"': '"',
  "/": "/",
  "\\": "\\",
}

const CODE_A: number = "a".charCodeAt(0)
const CODE_0: number = "0".charCodeAt(0)

export function parseJsonString(s: string, pos: number): string | undefined {
  let str = ""
  let c: string | undefined
  parseJsonString.message = undefined
  // eslint-disable-next-line no-constant-condition, @typescript-eslint/no-unnecessary-condition
  while (true) {
    c = s[pos++]
    if (c === '"') break
    if (c === "\\") {
      c = s[pos]
      if (c in escapedChars) {
        str += escapedChars[c]
        pos++
      } else if (c === "u") {
        pos++
        let count = 4
        let code = 0
        while (count--) {
          code <<= 4
          c = s[pos]
          // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
          if (c === undefined) {
            errorMessage("unexpected end")
            return undefined
          }
          c = c.toLowerCase()
          if (c >= "a" && c <= "f") {
            code += c.charCodeAt(0) - CODE_A + 10
          } else if (c >= "0" && c <= "9") {
            code += c.charCodeAt(0) - CODE_0
          } else {
            errorMessage(`unexpected token ${c}`)
            return undefined
          }
          pos++
        }
        str += String.fromCharCode(code)
      } else {
        errorMessage(`unexpected token ${c}`)
        return undefined
      }
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    } else if (c === undefined) {
      errorMessage("unexpected end")
      return undefined
    } else {
      if (c.charCodeAt(0) >= 0x20) {
        str += c
      } else {
        errorMessage(`unexpected token ${c}`)
        return undefined
      }
    }
  }
  parseJsonString.position = pos
  return str

  function errorMessage(msg: string): void {
    parseJsonString.position = pos
    parseJsonString.message = msg
  }
}

parseJsonString.message = undefined as string | undefined
parseJsonString.position = 0 as number
parseJsonString.code = 'require("ajv/dist/runtime/parseJson").parseJsonString'

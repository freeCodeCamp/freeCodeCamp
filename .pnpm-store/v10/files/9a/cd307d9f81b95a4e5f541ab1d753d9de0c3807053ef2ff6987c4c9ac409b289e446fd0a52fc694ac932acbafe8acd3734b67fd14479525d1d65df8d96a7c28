// https://mathiasbynens.be/notes/javascript-encoding
// https://github.com/bestiejs/punycode.js - punycode.ucs2.decode
export default function ucs2length(str: string): number {
  const len = str.length
  let length = 0
  let pos = 0
  let value: number
  while (pos < len) {
    length++
    value = str.charCodeAt(pos++)
    if (value >= 0xd800 && value <= 0xdbff && pos < len) {
      // high surrogate, and there is a next character
      value = str.charCodeAt(pos)
      if ((value & 0xfc00) === 0xdc00) pos++ // low surrogate
    }
  }
  return length
}

ucs2length.code = 'require("ajv/dist/runtime/ucs2length").default'

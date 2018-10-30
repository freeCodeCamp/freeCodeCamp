// Matches a whole line break (where CRLF is considered a single
// line break). Used to count lines.

export const lineBreak = /\r\n?|\n|\u2028|\u2029/
export const lineBreakG = new RegExp(lineBreak.source, "g")

export function isNewLine(code) {
  return code === 10 || code === 13 || code === 0x2028 || code == 0x2029
}

export const nonASCIIwhitespace = /[\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff]/

export const skipWhiteSpace = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g

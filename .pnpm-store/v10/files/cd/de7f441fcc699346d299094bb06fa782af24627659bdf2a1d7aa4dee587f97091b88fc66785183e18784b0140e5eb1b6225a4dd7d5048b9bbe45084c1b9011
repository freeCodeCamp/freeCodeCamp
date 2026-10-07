import { type Token, type TokenType } from './Token'

type PartialToken = Omit<Token, 'startOfLine'>

type Rule = (text: string) => PartialToken | null

function makePunctuationRule (type: TokenType): Rule {
  return text => {
    if (text.startsWith(type)) {
      return { type, text: type }
    } else {
      return null
    }
  }
}

function getQuoted (text: string): string | null {
  let position = 0
  let char
  const mark = text[0]
  let escaped = false

  if (mark !== '\'' && mark !== '"') {
    return null
  }

  while (position < text.length) {
    position++
    char = text[position]
    if (!escaped && char === mark) {
      position++
      break
    }
    escaped = !escaped && char === '\\'
  }

  if (char !== mark) {
    throw new Error('Unterminated String')
  }

  return text.slice(0, position)
}

const identifierStartRegex = /[$_\p{ID_Start}]|\\u\p{Hex_Digit}{4}|\\u\{0*(?:\p{Hex_Digit}{1,5}|10\p{Hex_Digit}{4})\}/u
// A hyphen is not technically allowed, but to keep it liberal for now,
//  adding it here
const identifierContinueRegex = /[$\-\p{ID_Continue}\u200C\u200D]|\\u\p{Hex_Digit}{4}|\\u\{0*(?:\p{Hex_Digit}{1,5}|10\p{Hex_Digit}{4})\}/u
function getIdentifier (text: string): string | null {
  let char = text[0]
  if (!identifierStartRegex.test(char)) {
    return null
  }
  let position = 1
  do {
    char = text[position]
    if (!identifierContinueRegex.test(char)) {
      break
    }
    position++
  } while (position < text.length)
  return text.slice(0, position)
}

// we are a bit more liberal than TypeScript here and allow `NaN`, `Infinity` and `-Infinity`
const numberRegex = /^(NaN|-?((\d*\.\d+|\d+)([Ee][+-]?\d+)?|Infinity))/
function getNumber (text: string): string | null {
  return numberRegex.exec(text)?.[0] ?? null
}

const identifierRule: Rule = text => {
  const value = getIdentifier(text)
  if (value == null) {
    return null
  }

  return {
    type: 'Identifier',
    text: value
  }
}

function makeKeyWordRule (type: TokenType): Rule {
  return text => {
    if (!text.startsWith(type)) {
      return null
    }
    const prepends = text[type.length]
    if (prepends !== undefined && identifierContinueRegex.test(prepends)) {
      return null
    }
    return {
      type,
      text: type
    }
  }
}

const stringValueRule: Rule = text => {
  const value = getQuoted(text)
  if (value == null) {
    return null
  }
  return {
    type: 'StringValue',
    text: value
  }
}

const eofRule: Rule = text => {
  if (text.length > 0) {
    return null
  }
  return {
    type: 'EOF',
    text: ''
  }
}

const numberRule: Rule = text => {
  const value = getNumber(text)
  if (value === null) {
    return null
  }
  return {
    type: 'Number',
    text: value
  }
}

const rules: Rule[] = [
  eofRule,
  makePunctuationRule('=>'),
  makePunctuationRule('('),
  makePunctuationRule(')'),
  makePunctuationRule('{'),
  makePunctuationRule('}'),
  makePunctuationRule('['),
  makePunctuationRule(']'),
  makePunctuationRule('|'),
  makePunctuationRule('&'),
  makePunctuationRule('<'),
  makePunctuationRule('>'),
  makePunctuationRule(','),
  makePunctuationRule(';'),
  makePunctuationRule('*'),
  makePunctuationRule('?'),
  makePunctuationRule('!'),
  makePunctuationRule('='),
  makePunctuationRule(':'),
  makePunctuationRule('...'),
  makePunctuationRule('.'),
  makePunctuationRule('#'),
  makePunctuationRule('~'),
  makePunctuationRule('/'),
  makePunctuationRule('@'),
  makeKeyWordRule('undefined'),
  makeKeyWordRule('null'),
  makeKeyWordRule('function'),
  makeKeyWordRule('this'),
  makeKeyWordRule('new'),
  makeKeyWordRule('module'),
  makeKeyWordRule('event'),
  makeKeyWordRule('external'),
  makeKeyWordRule('typeof'),
  makeKeyWordRule('keyof'),
  makeKeyWordRule('readonly'),
  makeKeyWordRule('import'),
  makeKeyWordRule('is'),
  makeKeyWordRule('in'),
  numberRule,
  identifierRule,
  stringValueRule
]

const breakingWhitespaceRegex = /^\s*\n\s*/

export class Lexer {
  private readonly text: string = ''
  public readonly current: Token
  public readonly next: Token
  public readonly previous: Token | undefined

  public static create (text: string): Lexer {
    const current = this.read(text)
    text = current.text
    const next = this.read(text)
    text = next.text
    return new Lexer(text, undefined, current.token, next.token)
  }

  private constructor (text: string, previous: Token | undefined, current: Token, next: Token) {
    this.text = text
    this.previous = previous
    this.current = current
    this.next = next
  }

  private static read (text: string, startOfLine: boolean = false): { text: string, token: Token } {
    startOfLine = startOfLine || breakingWhitespaceRegex.test(text)
    text = text.trim()
    for (const rule of rules) {
      const partial = rule(text)
      if (partial !== null) {
        const token = {
          ...partial,
          startOfLine
        }
        text = text.slice(token.text.length)
        return { text, token }
      }
    }
    throw new Error('Unexpected Token ' + text)
  }

  advance (): Lexer {
    const next = Lexer.read(this.text)
    return new Lexer(next.text, this.current, this.next, next.token)
  }
}

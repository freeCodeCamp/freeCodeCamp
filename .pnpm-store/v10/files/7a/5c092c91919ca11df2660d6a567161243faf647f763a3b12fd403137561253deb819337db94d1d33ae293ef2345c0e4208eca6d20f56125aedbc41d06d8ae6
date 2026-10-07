import { type Token } from './lexer/Token'
import { type IntermediateResult } from './result/IntermediateResult'

function tokenToString (token: Token): string {
  if (token.text !== undefined && token.text !== '') {
    return `'${token.type}' with value '${token.text}'`
  } else {
    return `'${token.type}'`
  }
}

export class NoParsletFoundError extends Error {
  private readonly token: Token

  constructor (token: Token) {
    super(`No parslet found for token: ${tokenToString(token)}`)

    this.token = token

    Object.setPrototypeOf(this, NoParsletFoundError.prototype)
  }

  getToken (): Token {
    return this.token
  }
}

export class EarlyEndOfParseError extends Error {
  private readonly token: Token

  constructor (token: Token) {
    super(`The parsing ended early. The next token was: ${tokenToString(token)}`)

    this.token = token

    Object.setPrototypeOf(this, EarlyEndOfParseError.prototype)
  }

  getToken (): Token {
    return this.token
  }
}

export class UnexpectedTypeError extends Error {
  constructor (result: IntermediateResult, message?: string) {
    let error = `Unexpected type: '${result.type}'.`
    if (message !== undefined) {
      error += ` Message: ${message}`
    }
    super(error)

    Object.setPrototypeOf(this, UnexpectedTypeError.prototype)
  }
}

// export class UnexpectedTokenError extends Error {
//   private expected: Token
//   private found: Token
//
//   constructor (expected: Token, found: Token) {
//     super(`The parsing ended early. The next token was: ${tokenToString(token)}`)
//
//     this.token = token
//
//     Object.setPrototypeOf(this, EarlyEndOfParseError.prototype)
//   }
//
//   getToken() {
//     return this.token
//   }
// }

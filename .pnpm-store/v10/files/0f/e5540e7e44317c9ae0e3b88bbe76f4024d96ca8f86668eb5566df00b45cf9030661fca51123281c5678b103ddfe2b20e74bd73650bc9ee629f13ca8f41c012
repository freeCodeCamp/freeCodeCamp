// Minimum TypeScript Version: 3.0

import {Code} from './character/codes'
import {Type} from './constant/types'

/**
 * A location in a string or buffer
 */
export interface Point {
  line: number
  column: number
  offset: number
  _index?: number
  _bufferIndex?: number
}

/**
 *
 */
export interface Token {
  type: Type
  start: Point
  end: Point

  previous?: Token
  next?: Token

  /**
   * Declares a token as having content of a certain type.
   * Because markdown requires to first parse containers, flow, content completely,
   * and then later go on to phrasing and such, it needs to be declared somewhere on the tokens.
   */
  contentType?: 'flow' | 'content' | 'string' | 'text'

  /**
   * Used when dealing with linked tokens. A child tokenizer is needed to tokenize them, which is stored on those tokens
   */
  _tokenizer?: Tokenizer

  /**
   * Close and open are also used in attention:
   * depending on the characters before and after sequences (**),
   * the sequence can open, close, both, or none
   */
  _open?: boolean

  /**
   * Close and open are also used in attention:
   * depending on the characters before and after sequences (**),
   * the sequence can open, close, both, or none
   */
  _close?: boolean
}

/**
 *
 */
export type Event = [string, Token, Tokenizer]

/**
 * These these are transitions to update the CommonMark State Machine (CSMS)
 */
export interface Effects {
  /**
   * Enter and exit define where tokens start and end
   */
  enter: (type: Type) => Token

  /**
   * Enter and exit define where tokens start and end
   */
  exit: (type: Type) => Token

  /**
   * Consume deals with a character, and moves to the next
   */
  consume: (code: number) => void

  /**
   * Attempt deals with several values, and tries to parse according to those values.
   * If a value resulted in `ok`, it worked, the tokens that were made are used,
   * and `returnState` is switched to.
   * If the result is `nok`, the attempt failed,
   * so we revert to the original state, and `bogusState` is used.
   */
  attempt: (
    constructInfo:
      | Construct
      | Construct[]
      | Record<CodeAsKey, Construct | Construct[]>,
    returnState: State,
    bogusState?: State
  ) => (code: Code) => void

  /**
   * Interrupt is used for stuff right after a line of content.
   */
  interrupt: (
    constructInfo:
      | Construct
      | Construct[]
      | Record<CodeAsKey, Construct | Construct[]>,
    ok: Okay,
    nok?: NotOkay
  ) => (code: Code) => void

  check: (
    constructInfo:
      | Construct
      | Construct[]
      | Record<CodeAsKey, Construct | Construct[]>,
    ok: Okay,
    nok?: NotOkay
  ) => (code: Code) => void

  /**
   * Lazy is used for lines that were not properly preceded by the container.
   */
  lazy: (
    constructInfo:
      | Construct
      | Construct[]
      | Record<CodeAsKey, Construct | Construct[]>,
    ok: Okay,
    nok?: NotOkay
  ) => void
}

/**
 * A state function should return another function: the next state-as-a-function to go to.
 *
 * But there is one case where they return void: for the eof character code (at the end of a value)
 * The reason being: well, there isn’t any state that makes sense, so void works well. Practically
 * that has also helped: if for some reason it was a mistake, then an exception is throw because
 * there is no next function, meaning it surfaces early.
 */
export type State = (code: number) => State | void

/**
 *
 */
export type Okay = State

/**
 *
 */
export type NotOkay = State

/**
 *
 */
export interface Tokenizer {
  previous: Code
  events: Event[]
  parser: Parser
  sliceStream: (token: Token) => Chunk[]
  sliceSerialize: (token: Token) => string
  now: () => Point
  defineSkip: (value: Point) => void
  write: (slice: Chunk[]) => Event[]
}

export type Resolve = (events: Event[], context: Tokenizer) => Event[]

export type Tokenize = (context: Tokenizer, effects: Effects) => State

export interface Construct {
  name?: string
  tokenize: Tokenize
  partial?: boolean
  resolve?: Resolve
  resolveTo?: Resolve
  resolveAll?: Resolve
  concrete?: boolean
  interruptible?: boolean
  lazy?: boolean
}

/**
 *
 */
export interface Parser {
  constructs: Record<CodeAsKey, Construct | Construct[]>
  content: (from: Point) => Tokenizer
  document: (from: Point) => Tokenizer
  flow: (from: Point) => Tokenizer
  string: (from: Point) => Tokenizer
  text: (from: Point) => Tokenizer
  defined: string[]
}

/**
 *
 */
export interface TokenizerThis {
  events: Event[]
  interrupt?: boolean
  lazy?: boolean
  containerState?: Record<string, unknown>
}

/**
 * `Compile` is the return value of `lib/compile/html.js`
 */
export type Compile = (slice: Event[]) => string

/**
 * https://github.com/micromark/micromark#syntaxextension
 */
export interface SyntaxExtension {
  document?: Record<CodeAsKey, Construct | Construct[]>
  contentInitial?: Record<CodeAsKey, Construct | Construct[]>
  flowInitial?: Record<CodeAsKey, Construct | Construct[]>
  flow?: Record<CodeAsKey, Construct | Construct[]>
  string?: Record<CodeAsKey, Construct | Construct[]>
  text?: Record<CodeAsKey, Construct | Construct[]>
}

/**
 * https://github.com/micromark/micromark#htmlextension
 */
export type HtmlExtension =
  | {enter: Record<Type, () => void>}
  | {exit: Record<Type, () => void>}

export type Options = ParseOptions & CompileOptions

export interface ParseOptions {
  // Array of syntax extensions
  //
  extensions?: SyntaxExtension[]
}

export interface CompileOptions {
  // Value to use for line endings not in `doc` (`string`, default: first line
  // ending or `'\n'`).
  //
  // Generally, micromark copies line endings (`'\r'`, `'\n'`, `'\r\n'`) in the
  // markdown document over to the compiled HTML.
  // In some cases, such as `> a`, CommonMark requires that extra line endings are
  // added: `<blockquote>\n<p>a</p>\n</blockquote>`.
  //
  defaultLineEnding?: '\r' | '\n' | '\r\n'
  // Whether to allow embedded HTML (`boolean`, default: `false`).
  //
  allowDangerousHtml?: boolean
  // Whether to allow potentially dangerous protocols in links and images (`boolean`,
  // default: `false`).
  // URLs relative to the current protocol are always allowed (such as, `image.jpg`).
  // For links, the allowed protocols are `http`, `https`, `irc`, `ircs`, `mailto`,
  // and `xmpp`.
  // For images, the allowed protocols are `http` and `https`.
  //
  allowDangerousProtocol?: boolean
  // Array of HTML extensions
  //
  htmlExtensions?: HtmlExtension[]
}

export type Chunk = NonNullable<Code> | string

// TypeScript will complain that `null` can't be the key of an object. So when a `Code` value is a key of an object, use CodeAsKey instead.
export type CodeAsKey = NonNullable<Code> | 'null'

/**
 * Encodings supported by the buffer class
 *
 * @remarks
 * This is a copy of the typing from Node, copied to prevent Node globals from being needed.
 * Copied from https://github.com/DefinitelyTyped/DefinitelyTyped/blob/a2bc1d868d81733a8969236655fa600bd3651a7b/types/node/globals.d.ts#L174
 */
export type BufferEncoding =
  | 'ascii'
  | 'utf8'
  | 'utf-8'
  | 'utf16le'
  | 'ucs2'
  | 'ucs-2'
  | 'base64'
  | 'latin1'
  | 'binary'
  | 'hex'

/**
 * This is an interface for Node's Buffer.
 */
export interface Buffer {
  toString: (encoding?: BufferEncoding) => string
}

export type CodeCheck = (code: Code) => boolean

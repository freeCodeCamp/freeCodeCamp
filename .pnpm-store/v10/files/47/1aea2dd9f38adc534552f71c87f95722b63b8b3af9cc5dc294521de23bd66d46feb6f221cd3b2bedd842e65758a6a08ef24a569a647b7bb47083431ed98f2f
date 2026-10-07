/**
 * Message.
 */
export class VFileMessage extends Error {
  constructor(reason: string, options?: Options | null | undefined)
  constructor(
    reason: string,
    parent: Node | NodeLike | null | undefined,
    origin?: string | null | undefined
  )
  constructor(
    reason: string,
    place: Point | Position | null | undefined,
    origin?: string | null | undefined
  )
  constructor(reason: string, origin?: string | null | undefined)
  constructor(
    cause: Error | VFileMessage,
    parent: Node | NodeLike | null | undefined,
    origin?: string | null | undefined
  )
  constructor(
    cause: Error | VFileMessage,
    place: Point | Position | null | undefined,
    origin?: string | null | undefined
  )
  constructor(cause: Error | VFileMessage, origin?: string | null | undefined)
  /**
   * Stack of ancestor nodes surrounding the message.
   *
   * @type {Array<Node> | undefined}
   */
  ancestors: Array<Node> | undefined
  /**
   * Starting column of message.
   *
   * @type {number | undefined}
   */
  column: number | undefined
  /**
   * State of problem.
   *
   * * `true` — error, file not usable
   * * `false` — warning, change may be needed
   * * `undefined` — change likely not needed
   *
   * @type {boolean | null | undefined}
   */
  fatal: boolean | null | undefined
  /**
   * Path of a file (used throughout the `VFile` ecosystem).
   *
   * @type {string | undefined}
   */
  file: string | undefined
  /**
   * Starting line of error.
   *
   * @type {number | undefined}
   */
  line: number | undefined
  /**
   * Place of message.
   *
   * @type {Point | Position | undefined}
   */
  place: Point | Position | undefined
  /**
   * Reason for message, should use markdown.
   *
   * @type {string}
   */
  reason: string
  /**
   * Category of message (example: `'my-rule'`).
   *
   * @type {string | undefined}
   */
  ruleId: string | undefined
  /**
   * Namespace of message (example: `'my-package'`).
   *
   * @type {string | undefined}
   */
  source: string | undefined
  /**
   * Specify the source value that’s being reported, which is deemed
   * incorrect.
   *
   * @type {string | undefined}
   */
  actual: string | undefined
  /**
   * Suggest acceptable values that can be used instead of `actual`.
   *
   * @type {Array<string> | undefined}
   */
  expected: Array<string> | undefined
  /**
   * Long form description of the message (you should use markdown).
   *
   * @type {string | undefined}
   */
  note: string | undefined
  /**
   * Link to docs for the message.
   *
   * > 👉 **Note**: this must be an absolute URL that can be passed as `x`
   * > to `new URL(x)`.
   *
   * @type {string | undefined}
   */
  url: string | undefined
}
export type Node = import('unist').Node
export type Point = import('unist').Point
export type Position = import('unist').Position
export type NodeLike = object & {
  type: string
  position?: Position | undefined
}
/**
 * Configuration.
 */
export type Options = {
  /**
   * Stack of (inclusive) ancestor nodes surrounding the message (optional).
   */
  ancestors?: Array<Node> | null | undefined
  /**
   * Original error cause of the message (optional).
   */
  cause?: Error | null | undefined
  /**
   * Place of message (optional).
   */
  place?: Point | Position | null | undefined
  /**
   * Category of message (optional, example: `'my-rule'`).
   */
  ruleId?: string | null | undefined
  /**
   * Namespace of who sent the message (optional, example: `'my-package'`).
   */
  source?: string | null | undefined
}

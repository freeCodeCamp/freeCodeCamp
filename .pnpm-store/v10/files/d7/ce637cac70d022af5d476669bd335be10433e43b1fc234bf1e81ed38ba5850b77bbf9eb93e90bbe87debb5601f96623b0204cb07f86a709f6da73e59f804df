/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Point} Point
 * @typedef {import('unist').Position} Position
 */
/**
 * @typedef NodeLike
 * @property {string} type
 * @property {PositionLike | null | undefined} [position]
 *
 * @typedef PointLike
 * @property {number | null | undefined} [line]
 * @property {number | null | undefined} [column]
 * @property {number | null | undefined} [offset]
 *
 * @typedef PositionLike
 * @property {PointLike | null | undefined} [start]
 * @property {PointLike | null | undefined} [end]
 */
/**
 * Serialize the positional info of a point, position (start and end points),
 * or node.
 *
 * @param {Node | NodeLike | Point | PointLike | Position | PositionLike | null | undefined} [value]
 *   Node, position, or point.
 * @returns {string}
 *   Pretty printed positional info of a node (`string`).
 *
 *   In the format of a range `ls:cs-le:ce` (when given `node` or `position`)
 *   or a point `l:c` (when given `point`), where `l` stands for line, `c` for
 *   column, `s` for `start`, and `e` for end.
 *   An empty string (`''`) is returned if the given value is neither `node`,
 *   `position`, nor `point`.
 */
export function stringifyPosition(
  value?:
    | Node
    | NodeLike
    | Point
    | PointLike
    | Position
    | PositionLike
    | null
    | undefined
): string
export type Node = import('unist').Node
export type Point = import('unist').Point
export type Position = import('unist').Position
export type NodeLike = {
  type: string
  position?: PositionLike | null | undefined
}
export type PointLike = {
  line?: number | null | undefined
  column?: number | null | undefined
  offset?: number | null | undefined
}
export type PositionLike = {
  start?: PointLike | null | undefined
  end?: PointLike | null | undefined
}

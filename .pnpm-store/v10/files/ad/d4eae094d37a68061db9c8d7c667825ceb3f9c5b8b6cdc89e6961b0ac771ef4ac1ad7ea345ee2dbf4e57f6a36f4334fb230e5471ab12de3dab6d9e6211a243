import * as acorn from "acorn"

export const LooseParser: typeof acorn.Parser

export function parse (input: string, options: acorn.Options): acorn.Program

/**
 * returns `true` if it is a dummy node inserted by the parser. The function performs a simple equality check on the node's name.
 */
export function isDummy(node: acorn.Node): boolean

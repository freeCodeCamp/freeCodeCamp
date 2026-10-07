// TypeScript Version: 3.5

import {Node} from 'unist'

// NOTE: namespace is needed to use `export = unistBuilder`
declare namespace unistBuilder {}

// NOTE: the order of the unistBuilder overloads is important.
// Looking at the generics' "extends" left to right.
// It should go from more specific types higher in the file, to more broad types lower in the file.

/**
 * Creates a node, with a given type
 *
 * @param type type of node
 */
declare function unistBuilder<T extends string>(type: T): {type: T}

/**
 * Creates a node, with type and value
 *
 * @param type type of node
 * @param value  value property of node
 */
declare function unistBuilder<T extends string>(
  type: T,
  value: string
): {type: T; value: string}

/**
 * Creates a node, with type, props, and value
 *
 * @param type type of node
 * @param props additional properties for node
 * @param value value property of node
 */
declare function unistBuilder<T extends string, P extends {}>(
  type: T,
  props: P,
  value: string
): {type: T; value: string} & P

/**
 * Creates a node, with type and children
 *
 * @param type type of node
 * @param children child nodes of the current node
 */
declare function unistBuilder<T extends string, C extends Node[]>(
  type: T,
  children: C
): {type: T; children: C}

/**
 * Creates a node, with type, props, and children
 *
 * @param type type of node
 * @param props additional properties for node
 * @param children child nodes of the current node
 */
declare function unistBuilder<T extends string, P extends {}, C extends Node[]>(
  type: T,
  props: P,
  children: C
): {type: T; children: C} & P

/**
 * Creates a node, with type and props
 *
 * @param type type of node
 * @param props additional properties for node
 */
declare function unistBuilder<T extends string, P extends {}>(
  type: T,
  props: P
): {type: T} & P

export = unistBuilder

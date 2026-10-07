import {Node} from 'unist'

declare namespace sanitize {
  /**
   * Possible HTML attribute values
   */
  type HTMLValue = string | number | boolean

  /**
   * Sanitization configuration
   */
  interface Schema {
    /**
     * Map of tag names to allowed property names
     *
     * The special '*' key defines property names allowed on all elements
     */
    attributes?: Record<string, Array<string | [string, ...HTMLValue[]]>>

    /**
     * Map of tag names to required property names and their default property value
     */
    required?: Record<string, Record<string, HTMLValue>>

    /**
     * List of allowed tag names
     */
    tagNames?: string[]

    /**
     * Map of protocols to allow in property values
     */
    protocols?: Record<string, string[]>

    /**
     * Map of tag names to their required ancestor elements
     */
    ancestors?: Record<string, string[]>

    /**
     * List of allowed property names which can clobber
     */
    clobber?: string[]

    /**
     * Prefix to use before potentially clobbering property names
     */
    clobberPrefix?: string

    /**
     * Names of elements to strip from the tree
     */
    strip?: string[]

    /**
     * Whether to allow comments
     */
    allowComments?: boolean

    /**
     * Whether to allow doctypes
     */
    allowDoctypes?: boolean
  }
}

/**
 * Hast utility to sanitize a tree
 *
 * @param tree Hast tree to sanitize
 * @param schema Schema defining how to sanitize - defaults to Github style sanitation
 */
declare function sanitize(tree: Node, schema?: sanitize.Schema): Node

export = sanitize

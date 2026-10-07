// Minimum TypeScript Version: 3.2
import {Node} from 'unist'

declare namespace hastToHyperScript {
  /**
   * Basic shape of a create element function,
   * this should be extended by a concrete type.
   *
   * @remark
   * This exists to avoid needing to make all supported renders' typings as dependencies
   */
  type CreateElementLike = (
    name: string,
    attributes: Record<string, any>,
    children: any[]
  ) => any

  /**
   * Prefix to use as a prefix for keys passed in attrs to h(), this behaviour is turned off by passing false, turned on by passing a string.
   */
  type Prefix = string | boolean

  interface Options {
    /**
     * Prefix to use as a prefix for keys passed in attrs to h(), this behaviour is turned off by passing false, turned on by passing a string.
     */
    prefix?: Prefix

    /**
     * Whether node is in the 'html' or 'svg' space
     */
    space?: 'svg' | 'html'
  }
}

/**
 * Hast utility to transform a tree to something else through a hyperscript DSL.
 *
 * @param h Hyperscript function
 * @param tree Tree to transform
 * @param options Options or prefix
 * @typeParam H a Hyperscript like function type, can be inferred
 */
declare function hastToHyperScript<
  H extends hastToHyperScript.CreateElementLike
>(
  h: H,
  tree: Node,
  options?: hastToHyperScript.Prefix | hastToHyperScript.Options
): ReturnType<H>

export = hastToHyperScript

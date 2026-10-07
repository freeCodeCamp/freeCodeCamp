import AtRule from './at-rule.js'
import Comment from './comment.js'
import Declaration from './declaration.js'
import Node, { ChildNode, ChildProps, NodeProps } from './node.js'
import { Root } from './postcss.js'
import Rule from './rule.js'

declare namespace Container {
  export type ContainerWithChildren<Child extends Node = ChildNode> = {
    nodes: Child[]
  } & (AtRule | Root | Rule)

  export interface ValueOptions {
    /**
     * String that’s used to narrow down values and speed up the regexp search.
     */
    fast?: string

    /**
     * An array of property names.
     */
    props?: readonly string[]
  }

  export interface ContainerProps extends NodeProps {
    nodes?: readonly (ChildProps | Node)[]
  }

  /**
   * All types that can be passed into container methods to create or add a new
   * child node.
   */
  export type NewChild =
    | ChildProps
    | Node
    | readonly ChildProps[]
    | readonly Node[]
    | readonly string[]
    | string
    | undefined

  export { Container_ as default }
}

/**
 * The `Root`, `AtRule`, and `Rule` container nodes
 * inherit some common methods to help work with their children.
 *
 * Note that all containers can store any content. If you write a rule inside
 * a rule, PostCSS will parse it.
 */
declare abstract class Container_<Child extends Node = ChildNode> extends Node {
  /**
   * An array containing the container’s children.
   *
   * ```js
   * const root = postcss.parse('a { color: black }')
   * root.nodes.length           //=> 1
   * root.nodes[0].selector      //=> 'a'
   * root.nodes[0].nodes[0].prop //=> 'color'
   * ```
   */
  nodes: Child[] | undefined

  /**
   * The container’s first child.
   *
   * ```js
   * rule.first === rules.nodes[0]
   * ```
   */
  get first(): Child | undefined

  /**
   * The container’s last child.
   *
   * ```js
   * rule.last === rule.nodes[rule.nodes.length - 1]
   * ```
   */
  get last(): Child | undefined
  /**
   * Inserts new nodes to the end of the container.
   *
   * ```js
   * const decl1 = new Declaration({ prop: 'color', value: 'black' })
   * const decl2 = new Declaration({ prop: 'background-color', value: 'white' })
   * rule.append(decl1, decl2)
   *
   * root.append({ name: 'charset', params: '"UTF-8"' })  // at-rule
   * root.append({ selector: 'a' })                       // rule
   * rule.append({ prop: 'color', value: 'black' })       // declaration
   * rule.append({ text: 'Comment' })                     // comment
   *
   * root.append('a {}')
   * root.first.append('color: black; z-index: 1')
   * ```
   *
   * @param nodes New nodes.
   * @return This node for methods chain.
   */
  append(...nodes: Container.NewChild[]): this
  assign(overrides: Container.ContainerProps | object): this
  clone(overrides?: Partial<Container.ContainerProps>): this

  cloneAfter(overrides?: Partial<Container.ContainerProps>): this

  cloneBefore(overrides?: Partial<Container.ContainerProps>): this
  /**
   * Iterates through the container’s immediate children,
   * calling `callback` for each child.
   *
   * Returning `false` in the callback will break iteration.
   *
   * This method only iterates through the container’s immediate children.
   * If you need to recursively iterate through all the container’s descendant
   * nodes, use `Container#walk`.
   *
   * Unlike the for `{}`-cycle or `Array#forEach` this iterator is safe
   * if you are mutating the array of child nodes during iteration.
   * PostCSS will adjust the current index to match the mutations.
   *
   * ```js
   * const root = postcss.parse('a { color: black; z-index: 1 }')
   * const rule = root.first
   *
   * for (const decl of rule.nodes) {
   *   decl.cloneBefore({ prop: '-webkit-' + decl.prop })
   *   // Cycle will be infinite, because cloneBefore moves the current node
   *   // to the next index
   * }
   *
   * rule.each(decl => {
   *   decl.cloneBefore({ prop: '-webkit-' + decl.prop })
   *   // Will be executed only for color and z-index
   * })
   * ```
   *
   * @param callback Iterator receives each node and index.
   * @return Returns `false` if iteration was broke.
   */
  each(
    callback: (node: Child, index: number) => false | void
  ): false | undefined

  /**
   * Returns `true` if callback returns `true`
   * for all of the container’s children.
   *
   * ```js
   * const noPrefixes = rule.every(i => i.prop[0] !== '-')
   * ```
   *
   * @param condition Iterator returns true or false.
   * @return Is every child pass condition.
   */
  every(
    condition: (node: Child, index: number, nodes: Child[]) => boolean
  ): boolean
  /**
   * Returns a `child`’s index within the `Container#nodes` array.
   *
   * ```js
   * rule.index( rule.nodes[2] ) //=> 2
   * ```
   *
   * @param child Child of the current container.
   * @return Child index.
   */
  index(child: Child | number): number

  /**
   * Insert new node after old node within the container.
   *
   * @param oldNode Child or child’s index.
   * @param newNode New node.
   * @return This node for methods chain.
   */
  insertAfter(oldNode: Child | number, newNode: Container.NewChild): this

  /**
   * Traverses the container’s descendant nodes, calling callback
   * for each comment node.
   *
   * Like `Container#each`, this method is safe
   * to use if you are mutating arrays during iteration.
   *
   * ```js
   * root.walkComments(comment => {
   *   comment.remove()
   * })
   * ```
   *
   * @param callback Iterator receives each node and index.
   * @return Returns `false` if iteration was broke.
   */

  /**
   * Insert new node before old node within the container.
   *
   * ```js
   * rule.insertBefore(decl, decl.clone({ prop: '-webkit-' + decl.prop }))
   * ```
   *
   * @param oldNode Child or child’s index.
   * @param newNode New node.
   * @return This node for methods chain.
   */
  insertBefore(oldNode: Child | number, newNode: Container.NewChild): this
  /**
   * Inserts new nodes to the start of the container.
   *
   * ```js
   * const decl1 = new Declaration({ prop: 'color', value: 'black' })
   * const decl2 = new Declaration({ prop: 'background-color', value: 'white' })
   * rule.prepend(decl1, decl2)
   *
   * root.append({ name: 'charset', params: '"UTF-8"' })  // at-rule
   * root.append({ selector: 'a' })                       // rule
   * rule.append({ prop: 'color', value: 'black' })       // declaration
   * rule.append({ text: 'Comment' })                     // comment
   *
   * root.append('a {}')
   * root.first.append('color: black; z-index: 1')
   * ```
   *
   * @param nodes New nodes.
   * @return This node for methods chain.
   */
  prepend(...nodes: Container.NewChild[]): this

  /**
   * Add child to the end of the node.
   *
   * ```js
   * rule.push(new Declaration({ prop: 'color', value: 'black' }))
   * ```
   *
   * @param child New node.
   * @return This node for methods chain.
   */
  push(child: Child): this

  /**
   * Removes all children from the container
   * and cleans their parent properties.
   *
   * ```js
   * rule.removeAll()
   * rule.nodes.length //=> 0
   * ```
   *
   * @return This node for methods chain.
   */
  removeAll(): this

  /**
   * Removes node from the container and cleans the parent properties
   * from the node and its children.
   *
   * ```js
   * rule.nodes.length  //=> 5
   * rule.removeChild(decl)
   * rule.nodes.length  //=> 4
   * decl.parent        //=> undefined
   * ```
   *
   * @param child Child or child’s index.
   * @return This node for methods chain.
   */
  removeChild(child: Child | number): this

  replaceValues(
    pattern: RegExp | string,
    replaced: { (substring: string, ...args: any[]): string } | string
  ): this
  /**
   * Passes all declaration values within the container that match pattern
   * through callback, replacing those values with the returned result
   * of callback.
   *
   * This method is useful if you are using a custom unit or function
   * and need to iterate through all values.
   *
   * ```js
   * root.replaceValues(/\d+rem/, { fast: 'rem' }, string => {
   *   return 15 * parseInt(string) + 'px'
   * })
   * ```
   *
   * @param pattern      Replace pattern.
   * @param {object} options             Options to speed up the search.
   * @param replaced   String to replace pattern or callback
   *                                     that returns a new value. The callback
   *                                     will receive the same arguments
   *                                     as those passed to a function parameter
   *                                     of `String#replace`.
   * @return This node for methods chain.
   */
  replaceValues(
    pattern: RegExp | string,
    options: Container.ValueOptions,
    replaced: { (substring: string, ...args: any[]): string } | string
  ): this

  /**
   * Returns `true` if callback returns `true` for (at least) one
   * of the container’s children.
   *
   * ```js
   * const hasPrefix = rule.some(i => i.prop[0] === '-')
   * ```
   *
   * @param condition Iterator returns true or false.
   * @return Is some child pass condition.
   */
  some(
    condition: (node: Child, index: number, nodes: Child[]) => boolean
  ): boolean

  /**
   * Traverses the container’s descendant nodes, calling callback
   * for each node.
   *
   * Like container.each(), this method is safe to use
   * if you are mutating arrays during iteration.
   *
   * If you only need to iterate through the container’s immediate children,
   * use `Container#each`.
   *
   * ```js
   * root.walk(node => {
   *   // Traverses all descendant nodes.
   * })
   * ```
   *
   * @param callback Iterator receives each node and index.
   * @return  Returns `false` if iteration was broke.
   */
  walk(
    callback: (node: ChildNode, index: number) => false | void
  ): false | undefined

  /**
   * Traverses the container’s descendant nodes, calling callback
   * for each at-rule node.
   *
   * If you pass a filter, iteration will only happen over at-rules
   * that have matching names.
   *
   * Like `Container#each`, this method is safe
   * to use if you are mutating arrays during iteration.
   *
   * ```js
   * root.walkAtRules(rule => {
   *   if (isOld(rule.name)) rule.remove()
   * })
   *
   * let first = false
   * root.walkAtRules('charset', rule => {
   *   if (!first) {
   *     first = true
   *   } else {
   *     rule.remove()
   *   }
   * })
   * ```
   *
   * @param name     String or regular expression to filter at-rules by name.
   * @param callback Iterator receives each node and index.
   * @return Returns `false` if iteration was broke.
   */
  walkAtRules(
    nameFilter: RegExp | string,
    callback: (atRule: AtRule, index: number) => false | void
  ): false | undefined
  walkAtRules(
    callback: (atRule: AtRule, index: number) => false | void
  ): false | undefined

  walkComments(
    callback: (comment: Comment, indexed: number) => false | void
  ): false | undefined
  walkComments(
    callback: (comment: Comment, indexed: number) => false | void
  ): false | undefined

  /**
   * Traverses the container’s descendant nodes, calling callback
   * for each declaration node.
   *
   * If you pass a filter, iteration will only happen over declarations
   * with matching properties.
   *
   * ```js
   * root.walkDecls(decl => {
   *   checkPropertySupport(decl.prop)
   * })
   *
   * root.walkDecls('border-radius', decl => {
   *   decl.remove()
   * })
   *
   * root.walkDecls(/^background/, decl => {
   *   decl.value = takeFirstColorFromGradient(decl.value)
   * })
   * ```
   *
   * Like `Container#each`, this method is safe
   * to use if you are mutating arrays during iteration.
   *
   * @param prop     String or regular expression to filter declarations
   *                 by property name.
   * @param callback Iterator receives each node and index.
   * @return Returns `false` if iteration was broke.
   */
  walkDecls(
    propFilter: RegExp | string,
    callback: (decl: Declaration, index: number) => false | void
  ): false | undefined
  walkDecls(
    callback: (decl: Declaration, index: number) => false | void
  ): false | undefined
  /**
   * Traverses the container’s descendant nodes, calling callback
   * for each rule node.
   *
   * If you pass a filter, iteration will only happen over rules
   * with matching selectors.
   *
   * Like `Container#each`, this method is safe
   * to use if you are mutating arrays during iteration.
   *
   * ```js
   * const selectors = []
   * root.walkRules(rule => {
   *   selectors.push(rule.selector)
   * })
   * console.log(`Your CSS uses ${ selectors.length } selectors`)
   * ```
   *
   * @param selector String or regular expression to filter rules by selector.
   * @param callback Iterator receives each node and index.
   * @return Returns `false` if iteration was broke.
   */
  walkRules(
    selectorFilter: RegExp | string,
    callback: (rule: Rule, index: number) => false | void
  ): false | undefined
  walkRules(
    callback: (rule: Rule, index: number) => false | void
  ): false | undefined
  /**
   * An internal method that converts a {@link NewChild} into a list of actual
   * child nodes that can then be added to this container.
   *
   * This ensures that the nodes' parent is set to this container, that they use
   * the correct prototype chain, and that they're marked as dirty.
   *
   * @param mnodes The new node or nodes to add.
   * @param sample A node from whose raws the new node's `before` raw should be
   *               taken.
   * @param type   This should be set to `'prepend'` if the new nodes will be
   *               inserted at the beginning of the container.
   * @hidden
   */
  protected normalize(
    nodes: Container.NewChild,
    sample: Node | undefined,
    type?: 'prepend' | false
  ): Child[]
}

declare class Container<
  Child extends Node = ChildNode
> extends Container_<Child> {}

export = Container

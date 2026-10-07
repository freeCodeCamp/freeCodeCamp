import { RawSourceMap, SourceMapGenerator } from 'source-map-js'

import AtRule, { AtRuleProps } from './at-rule.js'
import Comment, { CommentProps } from './comment.js'
import Container, { ContainerProps, NewChild } from './container.js'
import CssSyntaxError from './css-syntax-error.js'
import Declaration, { DeclarationProps } from './declaration.js'
import Document, { DocumentProps } from './document.js'
import Input, { FilePosition } from './input.js'
import LazyResult from './lazy-result.js'
import list from './list.js'
import Node, {
  AnyNode,
  ChildNode,
  ChildProps,
  NodeErrorOptions,
  NodeProps,
  Position,
  Source
} from './node.js'
import Processor from './processor.js'
import Result, { Message } from './result.js'
import Root, { RootProps } from './root.js'
import Rule, { RuleProps } from './rule.js'
import Warning, { WarningOptions } from './warning.js'

type DocumentProcessor = (
  document: Document,
  helper: postcss.Helpers
) => Promise<void> | void
type RootProcessor = (
  root: Root,
  helper: postcss.Helpers
) => Promise<void> | void
type DeclarationProcessor = (
  decl: Declaration,
  helper: postcss.Helpers
) => Promise<void> | void
type RuleProcessor = (
  rule: Rule,
  helper: postcss.Helpers
) => Promise<void> | void
type AtRuleProcessor = (
  atRule: AtRule,
  helper: postcss.Helpers
) => Promise<void> | void
type CommentProcessor = (
  comment: Comment,
  helper: postcss.Helpers
) => Promise<void> | void

interface Processors {
  /**
   * Will be called on all`AtRule` nodes.
   *
   * Will be called again on node or children changes.
   */
  AtRule?: { [name: string]: AtRuleProcessor } | AtRuleProcessor

  /**
   * Will be called on all `AtRule` nodes, when all children will be processed.
   *
   * Will be called again on node or children changes.
   */
  AtRuleExit?: { [name: string]: AtRuleProcessor } | AtRuleProcessor

  /**
   * Will be called on all `Comment` nodes.
   *
   * Will be called again on node or children changes.
   */
  Comment?: CommentProcessor

  /**
   * Will be called on all `Comment` nodes after listeners
   * for `Comment` event.
   *
   * Will be called again on node or children changes.
   */
  CommentExit?: CommentProcessor

  /**
   * Will be called on all `Declaration` nodes after listeners
   * for `Declaration` event.
   *
   * Will be called again on node or children changes.
   */
  Declaration?: { [prop: string]: DeclarationProcessor } | DeclarationProcessor

  /**
   * Will be called on all `Declaration` nodes.
   *
   * Will be called again on node or children changes.
   */
  DeclarationExit?:
    | { [prop: string]: DeclarationProcessor }
    | DeclarationProcessor

  /**
   * Will be called on `Document` node.
   *
   * Will be called again on children changes.
   */
  Document?: DocumentProcessor

  /**
   * Will be called on `Document` node, when all children will be processed.
   *
   * Will be called again on children changes.
   */
  DocumentExit?: DocumentProcessor

  /**
   * Will be called on `Root` node once.
   */
  Once?: RootProcessor

  /**
   * Will be called on `Root` node once, when all children will be processed.
   */
  OnceExit?: RootProcessor

  /**
   * Will be called on `Root` node.
   *
   * Will be called again on children changes.
   */
  Root?: RootProcessor

  /**
   * Will be called on `Root` node, when all children will be processed.
   *
   * Will be called again on children changes.
   */
  RootExit?: RootProcessor

  /**
   * Will be called on all `Rule` nodes.
   *
   * Will be called again on node or children changes.
   */
  Rule?: RuleProcessor

  /**
   * Will be called on all `Rule` nodes, when all children will be processed.
   *
   * Will be called again on node or children changes.
   */
  RuleExit?: RuleProcessor
}

declare namespace postcss {
  export {
    AnyNode,
    AtRule,
    AtRuleProps,
    ChildNode,
    ChildProps,
    Comment,
    CommentProps,
    Container,
    ContainerProps,
    CssSyntaxError,
    Declaration,
    DeclarationProps,
    Document,
    DocumentProps,
    FilePosition,
    Input,
    LazyResult,
    list,
    Message,
    NewChild,
    Node,
    NodeErrorOptions,
    NodeProps,
    Position,
    Processor,
    Result,
    Root,
    RootProps,
    Rule,
    RuleProps,
    Source,
    Warning,
    WarningOptions
  }

  export type SourceMap = {
    toJSON(): RawSourceMap
  } & SourceMapGenerator

  export type Helpers = { postcss: Postcss; result: Result } & Postcss

  export interface Plugin extends Processors {
    postcssPlugin: string
    prepare?: (result: Result) => Processors
  }

  export interface PluginCreator<PluginOptions> {
    (opts?: PluginOptions): Plugin | Processor
    postcss: true
  }

  export interface Transformer extends TransformCallback {
    postcssPlugin: string
    postcssVersion: string
  }

  export interface TransformCallback {
    (root: Root, result: Result): Promise<void> | void
  }

  export interface OldPlugin<T> extends Transformer {
    (opts?: T): Transformer
    postcss: Transformer
  }

  export type AcceptedPlugin =
    | {
        postcss: Processor | TransformCallback
      }
    | OldPlugin<any>
    | Plugin
    | PluginCreator<any>
    | Processor
    | TransformCallback

  export interface Parser<RootNode = Document | Root> {
    (
      css: { toString(): string } | string,
      opts?: Pick<ProcessOptions, 'document' | 'from' | 'map'>
    ): RootNode
  }

  export interface Builder {
    (part: string, node?: AnyNode, type?: 'end' | 'start'): void
  }

  export interface Stringifier {
    (node: AnyNode, builder: Builder): void
  }

  export interface JSONHydrator {
    (data: object): Node
    (data: object[]): Node[]
  }

  export interface Syntax<RootNode = Document | Root> {
    /**
     * Function to generate AST by string.
     */
    parse?: Parser<RootNode>

    /**
     * Class to generate string by AST.
     */
    stringify?: Stringifier
  }

  export interface SourceMapOptions {
    /**
     * Use absolute path in generated source map.
     */
    absolute?: boolean

    /**
     * Indicates that PostCSS should add annotation comments to the CSS.
     * By default, PostCSS will always add a comment with a path
     * to the source map. PostCSS will not add annotations to CSS files
     * that do not contain any comments.
     *
     * By default, PostCSS presumes that you want to save the source map as
     * `opts.to + '.map'` and will use this path in the annotation comment.
     * A different path can be set by providing a string value for annotation.
     *
     * If you have set `inline: true`, annotation cannot be disabled.
     */
    annotation?: ((file: string, root: Root) => string) | boolean | string

    /**
     * Override `from` in map’s sources.
     */
    from?: string

    /**
     * Indicates that the source map should be embedded in the output CSS
     * as a Base64-encoded comment. By default, it is `true`.
     * But if all previous maps are external, not inline, PostCSS will not embed
     * the map even if you do not set this option.
     *
     * If you have an inline source map, the result.map property will be empty,
     * as the source map will be contained within the text of `result.css`.
     */
    inline?: boolean

    /**
     * Source map content from a previous processing step (e.g., Sass).
     *
     * PostCSS will try to read the previous source map
     * automatically (based on comments within the source CSS), but you can use
     * this option to identify it manually.
     *
     * If desired, you can omit the previous map with prev: `false`.
     */
    prev?: ((file: string) => string) | boolean | object | string

    /**
     * Indicates that PostCSS should set the origin content (e.g., Sass source)
     * of the source map. By default, it is true. But if all previous maps do not
     * contain sources content, PostCSS will also leave it out even if you
     * do not set this option.
     */
    sourcesContent?: boolean
  }

  export interface ProcessOptions<RootNode = Document | Root> {
    /**
     * Input file if it is not simple CSS file, but HTML with <style> or JS with CSS-in-JS blocks.
     */
    document?: string

    /**
     * The path of the CSS source file. You should always set `from`,
     * because it is used in source map generation and syntax error messages.
     */
    from?: string | undefined

    /**
     * Source map options
     */
    map?: boolean | SourceMapOptions

    /**
     * Function to generate AST by string.
     */
    parser?: Parser<RootNode> | Syntax<RootNode>

    /**
     * Class to generate string by AST.
     */
    stringifier?: Stringifier | Syntax<RootNode>

    /**
     * Object with parse and stringify.
     */
    syntax?: Syntax<RootNode>

    /**
     * The path where you'll put the output CSS file. You should always set `to`
     * to generate correct source maps.
     */
    to?: string

    /**
     * Disable source map file protections.
     */
    unsafeMap?: boolean
  }

  export type Postcss = typeof postcss

  /**
   * Default function to convert a node tree into a CSS string.
   */
  export let stringify: Stringifier

  /**
   * Parses source css and returns a new `Root` or `Document` node,
   * which contains the source CSS nodes.
   *
   * ```js
   * // Simple CSS concatenation with source map support
   * const root1 = postcss.parse(css1, { from: file1 })
   * const root2 = postcss.parse(css2, { from: file2 })
   * root1.append(root2).toResult().css
   * ```
   */
  export let parse: Parser<Root>

  /**
   * Rehydrate a JSON AST (from `Node#toJSON`) back into the AST classes.
   *
   * ```js
   * const json = root.toJSON()
   * // save to file, send by network, etc
   * const root2  = postcss.fromJSON(json)
   * ```
   */
  export let fromJSON: JSONHydrator

  /**
   * Creates a new `Comment` node.
   *
   * @param defaults Properties for the new node.
   * @return New comment node
   */
  export function comment(defaults?: CommentProps): Comment

  /**
   * Creates a new `AtRule` node.
   *
   * @param defaults Properties for the new node.
   * @return New at-rule node.
   */
  export function atRule(defaults?: AtRuleProps): AtRule

  /**
   * Creates a new `Declaration` node.
   *
   * @param defaults Properties for the new node.
   * @return New declaration node.
   */
  export function decl(defaults?: DeclarationProps): Declaration

  /**
   * Creates a new `Rule` node.
   *
   * @param default Properties for the new node.
   * @return New rule node.
   */
  export function rule(defaults?: RuleProps): Rule

  /**
   * Creates a new `Root` node.
   *
   * @param defaults Properties for the new node.
   * @return New root node.
   */
  export function root(defaults?: RootProps): Root

  /**
   * Creates a new `Document` node.
   *
   * @param defaults Properties for the new node.
   * @return New document node.
   */
  export function document(defaults?: DocumentProps): Document

  export { postcss as default }
}

/**
 * Create a new `Processor` instance that will apply `plugins`
 * as CSS processors.
 *
 * ```js
 * let postcss = require('postcss')
 *
 * postcss(plugins).process(css, { from, to }).then(result => {
 *   console.log(result.css)
 * })
 * ```
 *
 * @param plugins PostCSS plugins.
 * @return Processor to process multiple CSS.
 */
declare function postcss(plugins?: readonly postcss.AcceptedPlugin[]): Processor
declare function postcss(...plugins: postcss.AcceptedPlugin[]): Processor

export = postcss

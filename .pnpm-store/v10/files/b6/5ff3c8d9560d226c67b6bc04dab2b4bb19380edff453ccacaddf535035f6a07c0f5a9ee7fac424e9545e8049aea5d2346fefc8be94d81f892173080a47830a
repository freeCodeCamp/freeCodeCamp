import {
  Document,
  Node,
  Plugin,
  ProcessOptions,
  Root,
  SourceMap,
  TransformCallback,
  Warning,
  WarningOptions
} from './postcss.js'
import Processor from './processor.js'

declare namespace Result {
  export interface Message {
    [others: string]: any

    /**
     * Source PostCSS plugin name.
     */
    plugin?: string

    /**
     * Message type.
     */
    type: string
  }

  export interface ResultOptions extends ProcessOptions {
    /**
     * The CSS node that was the source of the warning.
     */
    node?: Node

    /**
     * Name of plugin that created this warning. `Result#warn` will fill it
     * automatically with `Plugin#postcssPlugin` value.
     */
    plugin?: string
  }

  export { Result_ as default }
}

/**
 * Provides the result of the PostCSS transformations.
 *
 * A Result instance is returned by `LazyResult#then`
 * or `Root#toResult` methods.
 *
 * ```js
 * postcss([autoprefixer]).process(css).then(result => {
 *  console.log(result.css)
 * })
 * ```
 *
 * ```js
 * const result2 = postcss.parse(css).toResult()
 * ```
 */
declare class Result_<RootNode = Document | Root> {
  /**
   * A CSS string representing of `Result#root`.
   *
   * ```js
   * postcss.parse('a{}').toResult().css //=> "a{}"
   * ```
   */
  css: string

  /**
   * Last runned PostCSS plugin.
   */
  lastPlugin: Plugin | TransformCallback

  /**
   * An instance of `SourceMapGenerator` class from the `source-map` library,
   * representing changes to the `Result#root` instance.
   *
   * ```js
   * result.map.toJSON() //=> { version: 3, file: 'a.css', … }
   * ```
   *
   * ```js
   * if (result.map) {
   *   fs.writeFileSync(result.opts.to + '.map', result.map.toString())
   * }
   * ```
   */
  map: SourceMap

  /**
   * Contains messages from plugins (e.g., warnings or custom messages).
   * Each message should have type and plugin properties.
   *
   * ```js
   * AtRule: {
   *   import: (atRule, { result }) {
   *     const importedFile = parseImport(atRule)
   *     result.messages.push({
   *       type: 'dependency',
   *       plugin: 'postcss-import',
   *       file: importedFile,
   *       parent: result.opts.from
   *     })
   *   }
   * }
   * ```
   */
  messages: Result.Message[]

  /**
   * Options from the `Processor#process` or `Root#toResult` call
   * that produced this Result instance.]
   *
   * ```js
   * root.toResult(opts).opts === opts
   * ```
   */
  opts: Result.ResultOptions

  /**
   * The Processor instance used for this transformation.
   *
   * ```js
   * for (const plugin of result.processor.plugins) {
   *   if (plugin.postcssPlugin === 'postcss-bad') {
   *     throw 'postcss-good is incompatible with postcss-bad'
   *   }
   * })
   * ```
   */
  processor: Processor

  /**
   * Root node after all transformations.
   *
   * ```js
   * root.toResult().root === root
   * ```
   */
  root: RootNode

  /**
   * An alias for the `Result#css` property.
   * Use it with syntaxes that generate non-CSS output.
   *
   * ```js
   * result.css === result.content
   * ```
   */
  get content(): string

  /**
   * @param processor Processor used for this transformation.
   * @param root      Root node after all transformations.
   * @param opts      Options from the `Processor#process` or `Root#toResult`.
   */
  constructor(processor: Processor, root: RootNode, opts: Result.ResultOptions)

  /**
   * Returns for `Result#css` content.
   *
   * ```js
   * result + '' === result.css
   * ```
   *
   * @return String representing of `Result#root`.
   */
  toString(): string

  /**
   * Creates an instance of `Warning` and adds it to `Result#messages`.
   *
   * ```js
   * if (decl.important) {
   *   result.warn('Avoid !important', { node: decl, word: '!important' })
   * }
   * ```
   *
   * @param text Warning message.
   * @param opts Warning options.
   * @return Created warning.
   */
  warn(message: string, options?: WarningOptions): Warning

  /**
   * Returns warnings from plugins. Filters `Warning` instances
   * from `Result#messages`.
   *
   * ```js
   * result.warnings().forEach(warn => {
   *   console.warn(warn.toString())
   * })
   * ```
   *
   * @return Warnings from plugins.
   */
  warnings(): Warning[]
}

declare class Result<RootNode = Document | Root> extends Result_<RootNode> {}

export = Result

import Document from './document.js'
import LazyResult from './lazy-result.js'
import NoWorkResult from './no-work-result.js'
import {
  AcceptedPlugin,
  Plugin,
  ProcessOptions,
  TransformCallback,
  Transformer
} from './postcss.js'
import Result from './result.js'
import Root from './root.js'

declare namespace Processor {
  export { Processor_ as default }
}

/**
 * Contains plugins to process CSS. Create one `Processor` instance,
 * initialize its plugins, and then use that instance on numerous CSS files.
 *
 * ```js
 * const processor = postcss([autoprefixer, postcssNested])
 * processor.process(css1).then(result => console.log(result.css))
 * processor.process(css2).then(result => console.log(result.css))
 * ```
 */
declare class Processor_ {
  /**
   * Plugins added to this processor.
   *
   * ```js
   * const processor = postcss([autoprefixer, postcssNested])
   * processor.plugins.length //=> 2
   * ```
   */
  plugins: (Plugin | TransformCallback | Transformer)[]

  /**
   * Current PostCSS version.
   *
   * ```js
   * if (result.processor.version.split('.')[0] !== '6') {
   *   throw new Error('This plugin works only with PostCSS 6')
   * }
   * ```
   */
  version: string

  /**
   * @param plugins PostCSS plugins
   */
  constructor(plugins?: readonly AcceptedPlugin[])

  /**
   * Parses source CSS and returns a `LazyResult` Promise proxy.
   * Because some plugins can be asynchronous it doesn’t make
   * any transformations. Transformations will be applied
   * in the `LazyResult` methods.
   *
   * ```js
   * processor.process(css, { from: 'a.css', to: 'a.out.css' })
   *   .then(result => {
   *      console.log(result.css)
   *   })
   * ```
   *
   * @param css String with input CSS or any object with a `toString()` method,
   *            like a Buffer. Optionally, send a `Result` instance
   *            and the processor will take the `Root` from it.
   * @param opts Options.
   * @return Promise proxy.
   */
  process(
    css: { toString(): string } | LazyResult | Result | Root | string
  ): LazyResult | NoWorkResult
  process<RootNode extends Document | Root = Root>(
    css: { toString(): string } | LazyResult | Result | Root | string,
    options: ProcessOptions<RootNode>
  ): LazyResult<RootNode>

  /**
   * Adds a plugin to be used as a CSS processor.
   *
   * PostCSS plugin can be in 4 formats:
   * * A plugin in `Plugin` format.
   * * A plugin creator function with `pluginCreator.postcss = true`.
   *   PostCSS will call this function without argument to get plugin.
   * * A function. PostCSS will pass the function a {@link Root}
   *   as the first argument and current `Result` instance
   *   as the second.
   * * Another `Processor` instance. PostCSS will copy plugins
   *   from that instance into this one.
   *
   * Plugins can also be added by passing them as arguments when creating
   * a `postcss` instance (see [`postcss(plugins)`]).
   *
   * Asynchronous plugins should return a `Promise` instance.
   *
   * ```js
   * const processor = postcss()
   *   .use(autoprefixer)
   *   .use(postcssNested)
   * ```
   *
   * @param plugin PostCSS plugin or `Processor` with plugins.
   * @return Current processor to make methods chain.
   */
  use(plugin: AcceptedPlugin): this
}

declare class Processor extends Processor_ {}

export = Processor

import type {KatexOptions} from 'katex'

export {mathHtml} from './lib/html.js'
export {math} from './lib/syntax.js'

/**
 * Configuration for HTML output.
 *
 * > 👉 **Note**: passed to `katex.renderToString`.
 * > `displayMode` is overwritten by this plugin, to `false` for math in
 * > text (inline), and `true` for math in flow (block).
 */
export interface HtmlOptions extends KatexOptions {
  /**
   * The field `displayMode` cannot be passed to `micromark-extension-math`.
   * It is overwritten by it,
   * to `false` for math in text (inline) and `true` for math in flow (block).
   */
  displayMode?: never
}

/**
 * Configuration.
 */
export interface Options {
  /**
   * Whether to support math (text) with a single dollar (default: `true`).
   *
   * Single dollars work in Pandoc and many other places, but often interfere
   * with “normal” dollars in text.
   * If you turn this off, you can use two or more dollars for text math.
   */
  singleDollarTextMath?: boolean | null | undefined
}

/**
 * Augment types.
 */
declare module 'micromark-util-types' {
  /**
   * Compile data.
   */
  interface CompileData {
    mathFlowOpen?: boolean
  }

  /**
   * Token types.
   */
  interface TokenTypeMap {
    mathFlow: 'mathFlow'
    mathFlowFence: 'mathFlowFence'
    mathFlowFenceMeta: 'mathFlowFenceMeta'
    mathFlowFenceSequence: 'mathFlowFenceSequence'
    mathFlowValue: 'mathFlowValue'
    mathText: 'mathText'
    mathTextData: 'mathTextData'
    mathTextPadding: 'mathTextPadding'
    mathTextSequence: 'mathTextSequence'
  }
}

export {gfmFootnoteHtml, defaultBackLabel} from './lib/html.js'
export {gfmFootnote} from './lib/syntax.js'

/**
 * Generate a back label dynamically.
 *
 * For the following markdown:
 *
 * ```markdown
 * Alpha[^micromark], bravo[^micromark], and charlie[^remark].
 *
 * [^remark]: things about remark
 * [^micromark]: things about micromark
 * ```
 *
 * This function will be called with:
 *
 * * `0` and `0` for the backreference from `things about micromark` to
 *  `alpha`, as it is the first used definition, and the first call to it
 * * `0` and `1` for the backreference from `things about micromark` to
 *  `bravo`, as it is the first used definition, and the second call to it
 * * `1` and `0` for the backreference from `things about remark` to
 *  `charlie`, as it is the second used definition
 *
 * @param referenceIndex
 *   Index of the definition in the order that they are first referenced,
 *   0-indexed.
 * @param rereferenceIndex
 *   Index of calls to the same definition, 0-indexed.
 * @returns
 *   Back label to use when linking back from definitions to their reference.
 */
export type BackLabelTemplate = (
  referenceIndex: number,
  rereferenceIndex: number
) => string

/**
 * Configuration.
 */
export interface HtmlOptions {
  /**
   * Prefix to use before the `id` attribute on footnotes to prevent them from
   * *clobbering* (default: `'user-content-'`).
   *
   * Pass `''` for trusted markdown and when you are careful with
   * polyfilling.
   * You could pass a different prefix.
   *
   * DOM clobbering is this:
   *
   * ```html
   * <p id="x"></p>
   * <script>alert(x) // `x` now refers to the `p#x` DOM element</script>
   * ```
   *
   * The above example shows that elements are made available by browsers, by
   * their ID, on the `window` object.
   * This is a security risk because you might be expecting some other variable
   * at that place.
   * It can also break polyfills.
   * Using a prefix solves these problems.
   */
  clobberPrefix?: string | null | undefined
  /**
   * Textual label to use for the footnotes section (default: `'Footnotes'`).
   *
   * Change it when the markdown is not in English.
   *
   * This label is typically hidden visually (assuming a `sr-only` CSS class
   * is defined that does that) and so affects screen readers only.
   * If you do have such a class, but want to show this section to everyone,
   * pass different attributes with the `labelAttributes` option.
   */
  label?: string | null | undefined
  /**
   * Attributes to use on the footnote label (default: `'class="sr-only"'`).
   *
   * Change it to show the label and add other attributes.
   *
   * This label is typically hidden visually (assuming an `sr-only` CSS class
   * is defined that does that) and so affects screen readers only.
   * If you do have such a class, but want to show this section to everyone,
   * pass an empty string.
   * You can also add different attributes.
   *
   * > 👉 **Note**: `id="footnote-label"` is always added, because footnote
   * > calls use it with `aria-describedby` to provide an accessible label.
   */
  labelAttributes?: string | null | undefined
  /**
   * HTML tag name to use for the footnote label element (default: `'h2'`).
   *
   * Change it to match your document structure.
   *
   * This label is typically hidden visually (assuming a `sr-only` CSS class
   * is defined that does that) and so affects screen readers only.
   * If you do have such a class, but want to show this section to everyone,
   * pass different attributes with the `labelAttributes` option.
   */
  labelTagName?: string | null | undefined
  /**
   * Textual label to describe the backreference back to references (default:
   * `defaultBackLabel`).
   *
   * The default value is:
   *
   * ```js
   * function defaultBackLabel(referenceIndex, rereferenceIndex) {
   *   return (
   *     'Back to reference ' +
   *     (referenceIndex + 1) +
   *     (rereferenceIndex > 1 ? '-' + rereferenceIndex : '')
   *   )
   * }
   * ```
   *
   * Change it when the markdown is not in English.
   *
   * This label is used in the `aria-label` attribute on each backreference
   * (the `↩` links).
   * It affects users of assistive technology.
   */
  backLabel?: BackLabelTemplate | string | null | undefined
}

/**
 * Augment types.
 */
declare module 'micromark-util-types' {
  /**
   * Compile data.
   */
  interface CompileData {
    gfmFootnoteDefinitions?: Record<string, string>
    gfmFootnoteDefinitionStack?: Array<string>
    gfmFootnoteCallCounts?: Record<string, number>
    gfmFootnoteCallOrder?: Array<string>
  }

  /**
   * Parse context.
   */
  interface ParseContext {
    gfmFootnotes?: Array<string>
  }

  /**
   * Token types.
   */
  interface TokenTypeMap {
    gfmFootnoteCall: 'gfmFootnoteCall'
    gfmFootnoteCallLabelMarker: 'gfmFootnoteCallLabelMarker'
    gfmFootnoteCallMarker: 'gfmFootnoteCallMarker'
    gfmFootnoteCallString: 'gfmFootnoteCallString'
    gfmFootnoteDefinition: 'gfmFootnoteDefinition'
    gfmFootnoteDefinitionIndent: 'gfmFootnoteDefinitionIndent'
    gfmFootnoteDefinitionLabel: 'gfmFootnoteDefinitionLabel'
    gfmFootnoteDefinitionLabelMarker: 'gfmFootnoteDefinitionLabelMarker'
    gfmFootnoteDefinitionLabelString: 'gfmFootnoteDefinitionLabelString'
    gfmFootnoteDefinitionMarker: 'gfmFootnoteDefinitionMarker'
    gfmFootnoteDefinitionWhitespace: 'gfmFootnoteDefinitionWhitespace'
  }
}

// TypeScript Version: 3.5

import {Node} from 'unist'
import {StringifyEntitiesOptions} from 'stringify-entities'

declare namespace hastUtilToHtml {
  interface HastUtilToHtmlOptions {
    /**
     * Whether the *root* of the *tree* is in the `'html'` or `'svg'` space.
     *
     * If an `svg` element is found in the HTML space, `toHtml` automatically switches to the SVG space when entering the element, and switches back when exiting.
     *
     * @defaultValue 'html'
     */
    space?: 'html' | 'svg'

    /**
     * Configuration for `stringify-entities`.
     * Do not use `escapeOnly`, `attribute`, or `subset` (`toHtml` already passes those, so they won’t work).
     * However, `useNamedReferences`, `useShortestReferences`, and `omitOptionalSemicolons` are all fine.
     *
     * @defaultValue {}
     */
    /* eslint-disable-next-line @typescript-eslint/ban-types */
    entities?: Omit<
      StringifyEntitiesOptions,
      'escapeOnly' | 'attribute' | 'subset'
    >

    /**
     * Tag names of *elements* to serialize without closing tag.
     *
     * Not used in the SVG space.
     *
     * @defaultValue `require('html-void-elements')`
     */
    voids?: string[]

    /**
     * Use a `<!DOCTYPE…` instead of `<!doctype…`.
     * Useless except for XHTML.
     *
     * @defaultValue false
     */
    upperDoctype?: boolean

    /**
     * Preferred quote to use.
     *
     * @defaultValue '"'
     */
    quote?: '"' | "'"

    /**
     * Use the other quote if that results in less bytes.
     *
     * @defaultValue false
     */
    quoteSmart?: boolean

    /**
     * Leave attributes unquoted if that results in less bytes.
     *
     * Not used in the SVG space.
     *
     * @defaultValue false
     */
    preferUnquoted?: boolean

    /**
     * Omit optional opening and closing tags.
     * For example, in `<ol><li>one</li><li>two</li></ol>`, both `</li>` closing tags can be omitted.
     * The first because it’s followed by another `li`, the last because it’s followed by nothing.
     *
     * Not used in the SVG space.
     *
     * @defaultValue false
     */
    omitOptionalTags?: boolean

    /**
     * Collapse empty attributes: `class=""` is stringified as `class` instead.
     * **Note**: boolean attributes, such as `hidden`, are always collapsed.
     *
     * Not used in the SVG space.
     *
     * @defaultValue false
     */
    collapseEmptyAttributes?: boolean

    /**
     * Close self-closing nodes with an extra slash (`/`): `<img />` instead of `<img>`.
     * See `tightSelfClosing` to control whether a space is used before the slash.
     *
     * Not used in the SVG space.
     *
     * @defaultValue false
     */
    closeSelfClosing?: boolean

    /**
     * Close SVG elements without any content with slash (`/`) on the opening tag instead of an end tag: `<circle />` instead of `<circle></circle>`.
     * See `tightSelfClosing` to control whether a space is used before the slash.
     *
     * Not used in the HTML space.
     *
     * @defaultValue false
     */
    closeEmptyElements?: boolean

    /**
     * Do not use an extra space when closing self-closing elements: `<img/>` instead of `<img />`.
     * **Note**: Only used if `closeSelfClosing: true` or `closeEmptyElements: true`.
     *
     * @defaultValue false
     */
    tightSelfClosing?: boolean

    /**
     * Join known comma-separated attribute values with just a comma (`,`), instead of padding them on the right as well (`,·`, where `·` represents a space).
     *
     * @defaultValue false
     */
    tightCommaSeparatedLists?: boolean

    /**
     * Join attributes together, without white-space, if possible: `class="a b" title="c d"` is stringified as `class="a b"title="c d"` instead to save bytes.
     * **Note**: creates invalid (but working) markup.
     *
     * Not used in the SVG space.
     *
     * @defaultValue false
     */
    tightAttributes?: boolean

    /**
     * Drop unneeded spaces in doctypes: `<!doctypehtml>` instead of `<!doctype html>` to save bytes.
     * **Note**: creates invalid (but working) markup.
     *
     * @defaultValue false
     */
    tightDoctype?: boolean

    /**
     * Do not encode characters which cause parse errors (even though they work), to save bytes.
     * **Note**: creates invalid (but working) markup.
     *
     * Not used in the SVG space.
     *
     * @defaultValue false
     */
    allowParseErrors?: boolean

    /**
     * Do not encode some characters which cause XSS vulnerabilities in older browsers.
     * **Note**: Only set this if you completely trust the content.
     *
     * @defaultValue false
     */
    allowDangerousCharacters?: boolean

    /**
     * Allow `raw` nodes and insert them as raw HTML.
     * When falsey, encodes `raw` nodes.
     * **Note**: Only set this if you completely trust the content.
     *
     * @defaultValue false
     */
    allowDangerousHtml?: boolean
  }
}

/**
 * Serialize the given **hast** *tree*.
 *
 * @param tree given hast tree
 * @param options configuration for stringifier
 */
declare function hastUtilToHtml(
  tree: Node | Node[],
  options?: hastUtilToHtml.HastUtilToHtmlOptions
): string

export = hastUtilToHtml

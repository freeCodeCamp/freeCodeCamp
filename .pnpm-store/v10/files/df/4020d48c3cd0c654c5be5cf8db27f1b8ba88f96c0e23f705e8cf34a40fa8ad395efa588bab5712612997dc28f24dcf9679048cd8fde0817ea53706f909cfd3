/**
 * @import {HtmlOptions as Options} from 'micromark-extension-math'
 * @import {HtmlExtension} from 'micromark-util-types'
 */

import katex from 'katex'

const renderToString = katex.renderToString

/**
 * Create an extension for `micromark` to support math when serializing to
 * HTML.
 *
 * > 👉 **Note**: this uses KaTeX to render math.
 *
 * @param {Options | null | undefined} [options={}]
 *   Configuration (default: `{}`).
 * @returns {HtmlExtension}
 *   Extension for `micromark` that can be passed in `htmlExtensions`, to
 *   support math when serializing to HTML.
 */
export function mathHtml(options) {
  return {
    enter: {
      mathFlow() {
        this.lineEndingIfNeeded()
        this.tag('<div class="math math-display">')
      },
      mathFlowFenceMeta() {
        this.buffer()
      },
      mathText() {
        // Double?
        this.tag('<span class="math math-inline">')
        this.buffer()
      }
    },
    exit: {
      mathFlow() {
        const value = this.resume()
        this.tag(math(value.replace(/(?:\r?\n|\r)$/, ''), true))
        this.tag('</div>')
        this.setData('mathFlowOpen')
        this.setData('slurpOneLineEnding')
      },
      mathFlowFence() {
        // After the first fence.
        if (!this.getData('mathFlowOpen')) {
          this.setData('mathFlowOpen', true)
          this.setData('slurpOneLineEnding', true)
          this.buffer()
        }
      },
      mathFlowFenceMeta() {
        this.resume()
      },
      mathFlowValue(token) {
        this.raw(this.sliceSerialize(token))
      },
      mathText() {
        const value = this.resume()
        this.tag(math(value, false))
        this.tag('</span>')
      },
      mathTextData(token) {
        this.raw(this.sliceSerialize(token))
      }
    }
  }

  /**
   * @param {string} value
   *   Math text.
   * @param {boolean} displayMode
   *   Whether the math is in display mode.
   * @returns {string}
   *   HTML.
   */
  function math(value, displayMode) {
    return renderToString(value, {...options, displayMode})
  }
}

// TypeScript Version: 3.5

import {Plugin} from 'unified'
import {HastUtilToHtmlOptions} from 'hast-util-to-html'
import {Schema} from 'hast-util-sanitize'
import {Handlers} from 'mdast-util-to-hast'

interface htmlOptions extends HastUtilToHtmlOptions {
  /**
   * How to sanitize the output
   */
  sanitize?: boolean | Schema

  /**
   * Object mapping mdast nodes to functions handling them
   */
  handlers?: Handlers
}

declare const html: Plugin<[htmlOptions?]>
export = html

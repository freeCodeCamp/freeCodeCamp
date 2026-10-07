// TypeScript Version: 3.0

import unified = require('unified')
import remarkParse = require('remark-parse')
import remarkStringify = require('remark-stringify')

declare namespace remark {
  type RemarkOptions = remarkParse.RemarkParseOptions &
    remarkStringify.RemarkStringifyOptions

  /**
   * @deprecated Use `RemarkOptions` instead.
   */
  type PartialRemarkOptions = RemarkOptions
}

declare const remark: unified.FrozenProcessor<remark.RemarkOptions>

export = remark

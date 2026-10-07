// Bootstrap cliui with CommonJS dependencies:
import { cliui } from './build/lib/index.js'
import { wrap, stripAnsi } from './build/lib/string-utils.js'

export default function ui (opts) {
  return cliui(opts, {
    stringWidth: (str) => {
      return [...str].length
    },
    stripAnsi,
    wrap
  })
}

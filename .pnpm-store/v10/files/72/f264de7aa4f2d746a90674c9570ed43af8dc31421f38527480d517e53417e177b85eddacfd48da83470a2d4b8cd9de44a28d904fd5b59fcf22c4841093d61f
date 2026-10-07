export default buffer

import compiler from './compile/html.mjs'
import parser from './parse.mjs'
import postprocess from './postprocess.mjs'
import preprocessor from './preprocess.mjs'

function buffer(value, encoding, options) {
  if (typeof encoding !== 'string') {
    options = encoding
    encoding = undefined
  }

  return compiler(options)(
    postprocess(
      parser(options).document().write(preprocessor()(value, encoding, true))
    )
  )
}

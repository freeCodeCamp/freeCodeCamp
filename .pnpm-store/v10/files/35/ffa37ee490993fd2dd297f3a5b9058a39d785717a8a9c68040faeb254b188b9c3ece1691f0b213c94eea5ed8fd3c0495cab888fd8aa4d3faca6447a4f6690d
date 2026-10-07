let { Input } = require('postcss')

let SafeParser = require('./safe-parser')

module.exports = function safeParse(css, opts) {
  let input = new Input(css, opts)

  let parser = new SafeParser(input)
  parser.parse()

  return parser.root
}

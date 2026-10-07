// Main entrypoint for ESM web browser environments. Avoids using Node.js
// specific libraries, such as "path".
//
// TODO: figure out reasonable web equivalents for "resolve", "normalize", etc.
import { camelCase, decamelize, looksLikeNumber } from './build/lib/string-utils.js'
import { YargsParser } from './build/lib/yargs-parser.js'
const parser = new YargsParser({
  cwd: () => { return '' },
  format: (str, arg) => { return str.replace('%s', arg) },
  normalize: (str) => { return str },
  resolve: (str) => { return str },
  require: () => {
    throw Error('loading config from files not currently supported in browser')
  },
  env: () => {}
})

const yargsParser = function Parser (args, opts) {
  const result = parser.parse(args.slice(), opts)
  return result.argv
}
yargsParser.detailed = function (args, opts) {
  return parser.parse(args.slice(), opts)
}
yargsParser.camelCase = camelCase
yargsParser.decamelize = decamelize
yargsParser.looksLikeNumber = looksLikeNumber

export default yargsParser

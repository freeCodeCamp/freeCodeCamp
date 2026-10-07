const re = /^dotenv_config_(encoding|path|quiet|debug|override|DOTENV_KEY)=(.+)$/

module.exports = function optionMatcher (args) {
  const options = args.reduce(function (acc, cur) {
    const matches = cur.match(re)
    if (matches) {
      acc[matches[1]] = matches[2]
    }
    return acc
  }, {})

  if (!('quiet' in options)) {
    options.quiet = 'true'
  }

  return options
}

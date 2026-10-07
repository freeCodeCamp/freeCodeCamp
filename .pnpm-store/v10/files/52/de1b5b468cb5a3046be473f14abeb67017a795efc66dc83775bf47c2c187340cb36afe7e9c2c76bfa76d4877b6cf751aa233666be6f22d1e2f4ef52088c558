(function () {
  const dotenvExpand = require('./lib/main').expand

  const env = require('dotenv').config(
    Object.assign(
      {},
      require('dotenv/lib/env-options'),
      require('dotenv/lib/cli-options')(process.argv)
    )
  )

  return dotenvExpand(env)
})()

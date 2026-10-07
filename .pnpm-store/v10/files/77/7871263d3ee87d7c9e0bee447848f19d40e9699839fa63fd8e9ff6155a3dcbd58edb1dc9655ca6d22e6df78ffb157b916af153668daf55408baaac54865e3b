// ../config.js accepts options via environment variables
const options = {}

if (process.env.DOTENV_CONFIG_ENCODING != null) {
  options.encoding = process.env.DOTENV_CONFIG_ENCODING
}

if (process.env.DOTENV_CONFIG_PATH != null) {
  options.path = process.env.DOTENV_CONFIG_PATH
}

if (process.env.DOTENV_CONFIG_DEBUG != null) {
  options.debug = process.env.DOTENV_CONFIG_DEBUG
}

if (process.env.DOTENV_CONFIG_OVERRIDE != null) {
  options.override = process.env.DOTENV_CONFIG_OVERRIDE
}

module.exports = options

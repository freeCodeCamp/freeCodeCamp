const dotenv = require('dotenv')
const fs = require('fs')
const path = require('path')
const { promisify } = require('util')

function escapeNewlines (str) {
  return str.replace(/\n/g, '\\n')
}

function format (key, value) {
  return `${key}=${escapeNewlines(value)}`
}

module.exports = async function updateDotenv (env) {
  const filename = path.join(process.cwd(), '.env')

  // Merge with existing values
  try {
    const existing = dotenv.parse(await promisify(fs.readFile)(filename, 'utf-8'))
    env = Object.assign(existing, env)
  } catch (err) {
    if (err.code !== 'ENOENT') {
      throw err
    }
  }

  const contents = Object.keys(env).map(key => format(key, env[key])).join('\n')
  await promisify(fs.writeFile)(filename, contents)

  // Update current env with new values
  Object.assign(process.env, env)

  return env
}

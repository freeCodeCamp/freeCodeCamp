#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const help = require('help-me')({
  dir: path.join(__dirname, 'help'),
  ext: '.txt'
})
const pump = require('pump')
const sjp = require('secure-json-parse')
const JoyCon = require('joycon')
const stripJsonComments = require('strip-json-comments')

const build = require('./')
const CONSTANTS = require('./lib/constants')
const { isObject } = require('./lib/utils')
const minimist = require('minimist')

const parseJSON = input => {
  return sjp.parse(stripJsonComments(input), { protoAction: 'remove' })
}

const joycon = new JoyCon({
  parseJSON,
  files: [
    'pino-pretty.config.cjs',
    'pino-pretty.config.js',
    '.pino-prettyrc',
    '.pino-prettyrc.json'
  ],
  stopDir: path.dirname(process.cwd())
})

const cmd = minimist(process.argv.slice(2))

if (cmd.h || cmd.help) {
  help.toStdout()
} else {
  const DEFAULT_VALUE = '\0default'

  let opts = minimist(process.argv, {
    alias: {
      colorize: 'c',
      colorizeObjects: 'C',
      crlf: 'f',
      errorProps: 'e',
      levelFirst: 'l',
      minimumLevel: 'L',
      customLevels: 'x',
      customColors: 'X',
      useOnlyCustomProps: 'U',
      errorLikeObjectKeys: 'k',
      messageKey: 'm',
      levelKey: CONSTANTS.LEVEL_KEY,
      levelLabel: 'b',
      messageFormat: 'o',
      timestampKey: 'a',
      translateTime: 't',
      ignore: 'i',
      include: 'I',
      hideObject: 'H',
      singleLine: 'S'
    },
    default: {
      messageKey: DEFAULT_VALUE,
      minimumLevel: DEFAULT_VALUE,
      levelKey: DEFAULT_VALUE,
      timestampKey: DEFAULT_VALUE
    }
  })

  // Remove default values
  opts = filter(opts, value => value !== DEFAULT_VALUE)
  const config = loadConfig(opts.config)
  // Override config with cli options
  opts = Object.assign({}, config, opts)
  // set defaults
  opts.errorLikeObjectKeys = opts.errorLikeObjectKeys || 'err,error'
  opts.errorProps = opts.errorProps || ''

  const res = build(opts)
  pump(process.stdin, res)

  // https://github.com/pinojs/pino/pull/358
  /* istanbul ignore next */
  if (!process.stdin.isTTY && !fs.fstatSync(process.stdin.fd).isFile()) {
    process.once('SIGINT', function noOp () {})
  }

  function loadConfig (configPath) {
    const files = configPath ? [path.resolve(configPath)] : undefined
    const result = joycon.loadSync(files)
    if (result.path && !isObject(result.data)) {
      configPath = configPath || path.basename(result.path)
      throw new Error(`Invalid runtime configuration file: ${configPath}`)
    }
    if (configPath && !result.data) {
      throw new Error(`Failed to load runtime configuration file: ${configPath}`)
    }
    return result.data
  }

  function filter (obj, cb) {
    return Object.keys(obj).reduce((acc, key) => {
      const value = obj[key]
      if (cb(value, key)) {
        acc[key] = value
      }
      return acc
    }, {})
  }
}

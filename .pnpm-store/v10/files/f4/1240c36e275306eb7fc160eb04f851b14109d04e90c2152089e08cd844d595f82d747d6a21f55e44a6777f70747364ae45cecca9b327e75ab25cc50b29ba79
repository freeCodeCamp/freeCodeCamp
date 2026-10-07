'use strict'

import { notStrictEqual, strictEqual } from 'assert'
import cliui from 'cliui'
import escalade from 'escalade/sync'
import { format, inspect } from 'util'
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url';
import Parser from 'yargs-parser'
import { basename, dirname, extname, relative, resolve } from 'path'
import { getProcessArgvBin } from '../../build/lib/utils/process-argv.js'
import { YError } from '../../build/lib/yerror.js'
import y18n from 'y18n'

const REQUIRE_ERROR = 'require is not supported by ESM'
const REQUIRE_DIRECTORY_ERROR = 'loading a directory of commands is not supported yet for ESM'

const mainFilename = fileURLToPath(import.meta.url).split('node_modules')[0]
const __dirname = fileURLToPath(import.meta.url)

export default {
  assert: {
    notStrictEqual,
    strictEqual
  },
  cliui,
  findUp: escalade,
  getEnv: (key) => {
    return process.env[key]
  },
  inspect,
  getCallerFile: () => {
    throw new YError(REQUIRE_DIRECTORY_ERROR)
  },
  getProcessArgvBin,
  mainFilename: mainFilename || process.cwd(),
  Parser,
  path: {
    basename,
    dirname,
    extname,
    relative,
    resolve
  },
  process: {
    argv: () => process.argv,
    cwd: process.cwd,
    execPath: () => process.execPath,
    exit: process.exit,
    nextTick: process.nextTick,
    stdColumns: typeof process.stdout.columns !== 'undefined' ? process.stdout.columns : null
  },
  readFileSync,
  require: () => {
    throw new YError(REQUIRE_ERROR)
  },
  requireDirectory: () => {
    throw new YError(REQUIRE_DIRECTORY_ERROR)
  },
  stringWidth: (str) => {
    return [...str].length
  },
  y18n: y18n({
    directory: resolve(__dirname, '../../../locales'),
    updateFiles: false
  })
}

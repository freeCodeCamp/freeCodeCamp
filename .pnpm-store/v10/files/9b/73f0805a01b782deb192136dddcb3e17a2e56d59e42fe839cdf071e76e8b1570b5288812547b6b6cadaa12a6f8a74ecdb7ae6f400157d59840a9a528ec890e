'use strict'

const { test } = require('tap')
const config = require('./pkg.config.json')
const { promisify } = require('node:util')
const { unlink } = require('node:fs/promises')
const { join } = require('node:path')
const { platform } = require('node:process')
const execFile = promisify(require('node:child_process').execFile)

const skip = process.env.PNPM_CI || process.env.CITGM || process.arch === 'ppc64'

/**
 * The following regex is for tesintg the deprecation warning that is thrown by the `punycode` module.
 * Exact text that it's matching is:
 * (node:1234) [DEP0040] DeprecationWarning: The `punycode` module is deprecated.
    Please use a userland alternative instead.

    (Use `node --trace-deprecation ...` to show where the warning was created)
 */
const deprecationWarningRegex = /^\(\w+:\d+\)\s\[[\w|\d]+\]\sDeprecationWarning: The `punycode` module is deprecated\.\s+Please use a userland alternative instead\.\s+\(Use `node --trace-deprecation \.\.\.` to show where the warning was created\)\s+$/

test('worker test when packaged into executable using pkg', { skip }, async (t) => {
  const packageName = 'index'

  // package the app into several node versions, check config for more info
  const filePath = `${join(__dirname, packageName)}.js`
  const configPath = join(__dirname, 'pkg.config.json')
  const { stderr } = await execFile('npx', ['pkg', filePath, '--config', configPath], { shell: true })

  // there should be no error when packaging
  const expectedvalue = stderr === '' || deprecationWarningRegex.test(stderr)
  t.ok(expectedvalue)

  // pkg outputs files in the following format by default: {filename}-{node version}
  for (const target of config.pkg.targets) {
    // execute the packaged test
    let executablePath = `${join(config.pkg.outputPath, packageName)}-${target}`

    // when on windows, we need the .exe extension
    if (platform === 'win32') {
      executablePath = `${executablePath}.exe`
    } else {
      executablePath = `./${executablePath}`
    }

    const { stderr } = await execFile(executablePath)

    // check if there were no errors
    const expectedvalue = stderr === '' || deprecationWarningRegex.test(stderr)
    t.ok(expectedvalue)

    // clean up afterwards
    await unlink(executablePath)
  }

  t.end()
})

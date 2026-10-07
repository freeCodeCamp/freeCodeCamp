'use strict'

const { test } = require('tap')
const config = require('./pkg.config.json')
const { promisify } = require('util')
const { unlink } = require('fs/promises')
const { join } = require('path')
const { platform } = require('process')
const exec = promisify(require('child_process').exec)

test('worker test when packaged into executable using pkg', async (t) => {
  const packageName = 'index'

  // package the app into several node versions, check config for more info
  const filePath = `${join(__dirname, packageName)}.js`
  const configPath = join(__dirname, 'pkg.config.json')
  process.env.NODE_OPTIONS ||= ''
  process.env.NODE_OPTIONS = '--no-warnings'
  const { stderr } = await exec(`npx pkg ${filePath} --config ${configPath}`)

  // there should be no error when packaging
  t.equal(stderr, '')

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

    const { stderr } = await exec(executablePath)

    // check if there were no errors
    t.equal(stderr, '')

    // clean up afterwards
    await unlink(executablePath)
  }

  t.end()
})

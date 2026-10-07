#!/usr/bin/env node

const execa = require('execa')
const fs = require('node:fs')

const existsSync = fs.existsSync
const stat = fs.promises.stat

// Hardcoded parameters
const esVersions = ['es5', 'es6', 'es2017', 'esnext']
const filesToTranspile = ['to-file-transport.ts']

async function transpile () {
  process.chdir(__dirname)

  for (const sourceFileName of filesToTranspile) {
    const sourceStat = await stat(sourceFileName)

    for (const esVersion of esVersions) {
      const intermediateFileName = sourceFileName.replace(/\.ts$/, '.js')
      const targetFileName = sourceFileName.replace(/\.ts$/, `.${esVersion}.cjs`)

      const shouldTranspile = !existsSync(targetFileName) || (await stat(targetFileName)).mtimeMs < sourceStat.mtimeMs

      if (shouldTranspile) {
        await execa('tsc', ['--target', esVersion, '--module', 'commonjs', sourceFileName])
        await execa('mv', [intermediateFileName, targetFileName])
      }
    }
  }
}

transpile().catch(err => {
  process.exitCode = 1
  throw err
})

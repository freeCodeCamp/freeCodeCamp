'use strict'

const fs = require('node:fs')
const path = require('node:path')
const spawn = require('node:child_process').spawn

const exe = process.argv[0]
const cwd = process.cwd()

for (const dep in process.versions) {
  console.log('  %s@%s', dep, process.versions[dep])
}

console.log('')

runScripts(fs.readdirSync(__dirname))

function runScripts (fileNames) {
  const fileName = fileNames.shift()

  if (!fileName) return
  if (!/\.js$/i.test(fileName)) return runScripts(fileNames)
  if (fileName.toLowerCase() === 'index.js') return runScripts(fileNames)

  const fullPath = path.join(__dirname, fileName)

  console.log('> %s %s', exe, path.relative(cwd, fullPath))

  const proc = spawn(exe, [fullPath], {
    stdio: 'inherit'
  })

  proc.on('exit', function () {
    runScripts(fileNames)
  })
}

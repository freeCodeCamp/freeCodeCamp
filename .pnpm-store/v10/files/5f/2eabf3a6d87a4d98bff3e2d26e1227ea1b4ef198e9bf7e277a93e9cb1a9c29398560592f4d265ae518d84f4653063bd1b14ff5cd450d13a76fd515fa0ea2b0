'use strict'

const fs = require('node:fs')
const path = require('node:path')
let { version } = require('../package.json')

let passedVersion = process.argv[2]

if (passedVersion) {
  passedVersion = passedVersion.trim().replace(/^v/, '')
  if (version !== passedVersion) {
    console.log(`Syncing version from ${version} to ${passedVersion}`)
    version = passedVersion
    const packageJson = require('../package.json')
    packageJson.version = version
    fs.writeFileSync(path.resolve('./package.json'), JSON.stringify(packageJson, null, 2) + '\n', { encoding: 'utf-8' })
  }
}

const metaContent = `'use strict'

module.exports = { version: '${version}' }
`

fs.writeFileSync(path.resolve('./lib/meta.js'), metaContent, { encoding: 'utf-8' })

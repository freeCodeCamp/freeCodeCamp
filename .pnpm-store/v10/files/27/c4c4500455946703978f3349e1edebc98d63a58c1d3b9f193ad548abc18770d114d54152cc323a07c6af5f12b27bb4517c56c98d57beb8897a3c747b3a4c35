'use strict'

const fs = require('node:fs')
const fse = require('fs-extra')
const crypto = require('node:crypto')
const swaggerUiAssetPath = require('swagger-ui-dist').getAbsoluteFSPath()
const resolve = require('node:path').resolve

const folderName = 'static'

fse.emptyDirSync(resolve(`./${folderName}`))

// since the original swagger-ui-dist folder contains non UI files
const filesToCopy = [
  'index.html',
  'index.css',
  'oauth2-redirect.html',
  'oauth2-redirect.js',
  'swagger-ui-bundle.js',
  'swagger-ui-standalone-preset.js',
  'swagger-ui.css',
  'swagger-ui.js'
]
filesToCopy.forEach(filename => {
  fse.ensureFileSync(resolve(`./static/${filename}`))
  const readableStream = fs.createReadStream(`${swaggerUiAssetPath}/${filename}`, 'utf8')
  const writableStream = fs.createWriteStream(resolve(`./static/${filename}`))
  // Matches sourceMappingURL comments in .js and .css files
  const sourceMapRegex = new RegExp(String.raw`\/.# sourceMappingURL=${filename}.map(\*\/)?$`)

  readableStream.on('data', (chunk) => {
    // Copy file while removing sourceMappingURL comments
    writableStream.write(chunk.replace(sourceMapRegex, ''))
  })
})

const overrides = [
  'favicon-16x16.png',
  'favicon-32x32.png',
  'logo.svg'
]
overrides.forEach(filename => {
  fse.copySync(`./${filename}`, resolve(`./static/${filename}`))
})

const sha = {
  script: [],
  style: []
}
function computeCSPHashes (path) {
  const scriptRegex = /<script>(.*)<\/script>/gis
  const styleRegex = /<style>(.*)<\/style>/gis
  const indexSrc = fs.readFileSync(resolve(path)).toString('utf8')
  let result = scriptRegex.exec(indexSrc)
  while (result !== null) {
    const hash = crypto.createHash('sha256')
    hash.update(result[1])
    sha.script.push(`'sha256-${hash.digest().toString('base64')}'`)
    result = scriptRegex.exec(indexSrc)
  }
  result = styleRegex.exec(indexSrc)
  while (result !== null) {
    const hash = crypto.createHash('sha256')
    hash.update(result[1])
    sha.style.push(`'sha256-${hash.digest().toString('base64')}'`)
    result = styleRegex.exec(indexSrc)
  }
}
computeCSPHashes(`./${folderName}/index.html`)
computeCSPHashes(`./${folderName}/oauth2-redirect.html`)
fse.writeFileSync(resolve(`./${folderName}/csp.json`), JSON.stringify(sha))

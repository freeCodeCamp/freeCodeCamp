#!/usr/bin/env node

const path = require('path')
const fs = require('fs')
const napi = require('napi-build-utils')

const pkg = require(path.resolve('package.json'))
const rc = require('./rc')(pkg)
const log = require('./log')(rc, process.env)
const download = require('./download')
const asset = require('./asset')
const util = require('./util')

const prebuildClientVersion = require('./package.json').version
if (rc.version) {
  console.log(prebuildClientVersion)
  process.exit(0)
}

if (rc.path) process.chdir(rc.path)

if (rc.runtime === 'electron' && rc.target[0] === '4' && rc.abi === '64') {
  log.error(`Electron version ${rc.target} found - skipping prebuild-install work due to known ABI issue`)
  log.error('More information about this issue can be found at https://github.com/lgeiger/node-abi/issues/54')
  process.exit(1)
}

if (!fs.existsSync('package.json')) {
  log.error('setup', 'No package.json found. Aborting...')
  process.exit(1)
}

if (rc.help) {
  console.error(fs.readFileSync(path.join(__dirname, 'help.txt'), 'utf-8'))
  process.exit(0)
}

log.info('begin', 'Prebuild-install version', prebuildClientVersion)

const opts = Object.assign({}, rc, { pkg: pkg, log: log })

if (napi.isNapiRuntime(rc.runtime)) napi.logUnsupportedVersion(rc.target, log)

const origin = util.packageOrigin(process.env, pkg)

if (opts.force) {
  log.warn('install', 'prebuilt binaries enforced with --force!')
  log.warn('install', 'prebuilt binaries may be out of date!')
} else if (origin && origin.length > 4 && origin.substr(0, 4) === 'git+') {
  log.info('install', 'installing from git repository, skipping download.')
  process.exit(1)
} else if (opts.buildFromSource) {
  log.info('install', '--build-from-source specified, not attempting download.')
  process.exit(1)
}

const startDownload = function (downloadUrl) {
  download(downloadUrl, opts, function (err) {
    if (err) {
      log.warn('install', err.message)
      return process.exit(1)
    }
    log.info('install', 'Successfully installed prebuilt binary!')
  })
}

if (opts.token) {
  asset(opts, function (err, assetId) {
    if (err) {
      log.warn('install', err.message)
      return process.exit(1)
    }

    startDownload(util.getAssetUrl(opts, assetId))
  })
} else {
  startDownload(util.getDownloadUrl(opts))
}

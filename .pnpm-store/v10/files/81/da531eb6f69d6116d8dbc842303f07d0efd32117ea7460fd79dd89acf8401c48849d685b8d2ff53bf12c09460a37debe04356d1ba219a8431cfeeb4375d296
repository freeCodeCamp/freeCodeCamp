const path = require('path')
const minimist = require('minimist')
const getAbi = require('node-abi').getAbi
const detectLibc = require('detect-libc')
const napi = require('napi-build-utils')

const env = process.env

const libc = env.LIBC || process.env.npm_config_libc ||
  (detectLibc.isNonGlibcLinuxSync() && detectLibc.familySync()) || ''

// Get the configuration
module.exports = function (pkg) {
  const pkgConf = pkg.config || {}
  const buildFromSource = env.npm_config_build_from_source

  const rc = require('rc')('prebuild-install', {
    target: pkgConf.target || env.npm_config_target || process.versions.node,
    runtime: pkgConf.runtime || env.npm_config_runtime || 'node',
    arch: pkgConf.arch || env.npm_config_arch || process.arch,
    libc: libc,
    platform: env.npm_config_platform || process.platform,
    debug: env.npm_config_debug === 'true',
    force: false,
    verbose: env.npm_config_verbose === 'true',
    buildFromSource: buildFromSource === pkg.name || buildFromSource === 'true',
    path: '.',
    proxy: env.npm_config_proxy || env.http_proxy || env.HTTP_PROXY,
    'https-proxy': env.npm_config_https_proxy || env.https_proxy || env.HTTPS_PROXY,
    'local-address': env.npm_config_local_address,
    'local-prebuilds': 'prebuilds',
    'tag-prefix': 'v',
    download: env.npm_config_download
  }, minimist(process.argv, {
    alias: {
      target: 't',
      runtime: 'r',
      help: 'h',
      arch: 'a',
      path: 'p',
      version: 'v',
      download: 'd',
      buildFromSource: 'build-from-source',
      token: 'T'
    }
  }))

  rc.path = path.resolve(rc.path === true ? '.' : rc.path || '.')

  if (napi.isNapiRuntime(rc.runtime) && rc.target === process.versions.node) {
    rc.target = napi.getBestNapiBuildVersion()
  }

  rc.abi = napi.isNapiRuntime(rc.runtime) ? rc.target : getAbi(rc.target, rc.runtime)

  rc.libc = rc.platform !== 'linux' || rc.libc === detectLibc.GLIBC ? '' : rc.libc

  return rc
}

// Print the configuration values when executed standalone for testing purposses
if (!module.parent) {
  console.log(JSON.stringify(module.exports({}), null, 2))
}

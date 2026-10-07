#!/usr/bin/env node

var proc = require('child_process')
var os = require('os')
var path = require('path')

if (!buildFromSource()) {
  proc.exec('node-gyp-build-optional-packages-test', function (err, stdout, stderr) {
    if (err) {
      if (verbose()) console.error(stderr)
      preinstall()
    }
  })
} else {
  preinstall()
}

function build () {
  var args = [os.platform() === 'win32' ? 'node-gyp.cmd' : 'node-gyp', 'rebuild']

  try {
    args = [
      process.execPath,
      path.join(require.resolve('node-gyp/package.json'), '..', require('node-gyp/package.json').bin['node-gyp']),
      'rebuild'
    ]
  } catch (_) {}

  proc.spawn(args[0], args.slice(1), { stdio: 'inherit' }).on('exit', function (code) {
    if (code || !process.argv[3]) process.exit(code)
    exec(process.argv[3]).on('exit', function (code) {
      process.exit(code)
    })
  })
}

function preinstall () {
  if (!process.argv[2]) return build()
  exec(process.argv[2]).on('exit', function (code) {
    if (code) process.exit(code)
    build()
  })
}

function exec (cmd) {
  if (process.platform !== 'win32') {
    var shell = os.platform() === 'android' ? 'sh' : '/bin/sh'
    return proc.spawn(shell, ['-c', '--', cmd], {
      stdio: 'inherit'
    })
  }

  return proc.spawn(process.env.comspec || 'cmd.exe', ['/s', '/c', '"' + cmd + '"'], {
    windowsVerbatimArguments: true,
    stdio: 'inherit'
  })
}

function buildFromSource () {
  return hasFlag('--build-from-source') || process.env.npm_config_build_from_source === 'true'
}

function verbose () {
  return hasFlag('--verbose') || process.env.npm_config_loglevel === 'verbose'
}

// TODO (next major): remove in favor of env.npm_config_* which works since npm
// 0.1.8 while npm_config_argv will stop working in npm 7. See npm/rfcs#90
function hasFlag (flag) {
  if (!process.env.npm_config_argv) return false

  try {
    return JSON.parse(process.env.npm_config_argv).original.indexOf(flag) !== -1
  } catch (_) {
    return false
  }
}

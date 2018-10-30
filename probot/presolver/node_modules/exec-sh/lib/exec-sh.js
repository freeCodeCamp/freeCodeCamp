var cp = require('child_process')
var merge = require('merge')

var defSpawnOptions = { stdio: 'inherit' }

/**
 * @summary Get shell program meta for current platform
 * @private
 * @returns {Object}
 */
function getShell () {
  if (process.platform === 'win32') {
    return { cmd: 'cmd', arg: '/C' }
  } else {
    return { cmd: 'sh', arg: '-c' }
  }
}

/**
 * Callback is called with the output when the process terminates. Output is
 * available when true is passed as options argument or stdio: null set
 * within given options.
 *
 * @summary Execute shell command forwarding all stdio
 * @param {String|Array} command
 * @param {Object|TRUE} [options] spawn() options or TRUE to set stdio: null
 * @param {Function} [callback]
 * @returns {ChildProcess}
 */
function execSh (command, options, callback) {
  if (Array.isArray(command)) {
    command = command.join(';')
  }

  if (options === true) {
    options = { stdio: null }
  }

  if (typeof options === 'function') {
    callback = options
    options = defSpawnOptions
  } else {
    options = options || {}
    options = merge(true, defSpawnOptions, options)
    callback = callback || function () {}
  }

  var child
  var stdout = ''
  var stderr = ''
  var shell = getShell()

  try {
    child = cp.spawn(shell.cmd, [shell.arg, command], options)
  } catch (e) {
    callback(e, stdout, stderr)
    return
  }

  if (child.stdout) {
    child.stdout.on('data', function (data) {
      stdout += data
    })
  }

  if (child.stderr) {
    child.stderr.on('data', function (data) {
      stderr += data
    })
  }

  child.on('close', function (code) {
    if (code) {
      var e = new Error('Shell command exit with non zero code: ' + code)
      e.code = code
      callback(e, stdout, stderr)
    } else {
      callback(null, stdout, stderr)
    }
  })

  return child
}

module.exports = execSh

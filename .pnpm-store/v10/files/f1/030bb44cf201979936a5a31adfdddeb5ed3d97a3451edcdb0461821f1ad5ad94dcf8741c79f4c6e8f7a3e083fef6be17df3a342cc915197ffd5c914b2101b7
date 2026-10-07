const binding = require('./binding')
const errors = require('./lib/errors')
const constants = require('./lib/constants')

exports.constants = constants

exports.EOL = binding.platform === 'win32' ? '\r\n' : '\n'

exports.platform = function platform() {
  return binding.platform
}

exports.arch = function arch() {
  return binding.arch
}

exports.type = binding.type
exports.version = binding.version
exports.release = binding.release
exports.machine = binding.machine
exports.execPath = binding.execPath
exports.pid = binding.pid
exports.ppid = binding.ppid
exports.cwd = binding.cwd
exports.chdir = binding.chdir
exports.tmpdir = binding.tmpdir
exports.homedir = binding.homedir
exports.hostname = binding.hostname
exports.userInfo = binding.userInfo

exports.kill = function kill(pid, signal = constants.signals.SIGTERM) {
  if (typeof signal === 'string') {
    if (signal in constants.signals === false) {
      throw errors.UNKNOWN_SIGNAL('Unknown signal: ' + signal)
    }

    signal = constants.signals[signal]
  }

  binding.kill(pid, signal)
}

exports.endianness = function endianness() {
  return binding.isLittleEndian ? 'LE' : 'BE'
}

exports.availableParallelism = binding.availableParallelism

exports.cpuUsage = function cpuUsage(previous) {
  const current = binding.cpuUsage()

  if (previous) {
    return {
      user: current.user - previous.user,
      system: current.system - previous.system
    }
  }

  return current
}

exports.threadCpuUsage = function threadCpuUsage(previous) {
  const current = binding.threadCpuUsage()

  if (previous) {
    return {
      user: current.user - previous.user,
      system: current.system - previous.system
    }
  }

  return current
}

exports.resourceUsage = binding.resourceUsage
exports.memoryUsage = binding.memoryUsage
exports.freemem = binding.freemem
exports.totalmem = binding.totalmem
exports.uptime = binding.uptime
exports.loadavg = binding.loadavg
exports.cpus = binding.cpus

exports.getProcessTitle = binding.getProcessTitle

exports.setProcessTitle = function setProcessTitle(title) {
  if (typeof title !== 'string') title = title.toString()

  if (title.length >= 256) {
    throw errors.TITLE_OVERFLOW('Process title is too long')
  }

  binding.setProcessTitle(title)
}

exports.getEnvKeys = binding.getEnvKeys
exports.getEnv = binding.getEnv
exports.hasEnv = binding.hasEnv
exports.setEnv = binding.setEnv
exports.unsetEnv = binding.unsetEnv

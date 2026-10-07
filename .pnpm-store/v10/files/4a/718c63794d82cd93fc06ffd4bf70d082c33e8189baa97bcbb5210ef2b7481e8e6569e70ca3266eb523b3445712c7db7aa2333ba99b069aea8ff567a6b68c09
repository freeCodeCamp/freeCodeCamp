const levels = {
  silent: 0,
  error: 1,
  warn: 2,
  notice: 3,
  http: 4,
  timing: 5,
  info: 6,
  verbose: 7,
  silly: 8
}

module.exports = function (rc, env) {
  const level = rc.verbose
    ? 'verbose'
    : env.npm_config_loglevel || 'notice'

  const logAtLevel = function (messageLevel) {
    return function (...args) {
      if (levels[messageLevel] <= levels[level]) {
        console.error(`prebuild-install ${messageLevel} ${args.join(' ')}`)
      }
    }
  }

  return {
    error: logAtLevel('error'),
    warn: logAtLevel('warn'),
    http: logAtLevel('http'),
    info: logAtLevel('info'),
    level
  }
}

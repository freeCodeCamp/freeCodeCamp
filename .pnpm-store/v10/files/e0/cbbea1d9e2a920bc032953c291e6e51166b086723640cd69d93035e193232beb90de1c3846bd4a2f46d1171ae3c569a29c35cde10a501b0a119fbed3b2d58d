module.exports = function (query, force) {
  var isAttached = false
  if (process.stderr.isTTY || force === true) {
    isAttached = true
    process.on('SIGINFO', onsiginfo)
    process.on('SIGUSR1', onsiginfo)
  }

  return function () {
    if (isAttached === true) {
      process.removeListener('SIGINFO', onsiginfo)
      process.removeListener('SIGUSR1', onsiginfo)
      isAttached = false
    }
  }

  function onsiginfo () {
    query()
  }
}

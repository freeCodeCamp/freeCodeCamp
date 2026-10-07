var asyncHooks = require('async_hooks')
var stackback = require('stackback')
var path = require('path')
var fs = require('fs')
var sep = path.sep

var active = new Map()
var hook = asyncHooks.createHook({
  init (asyncId, type, triggerAsyncId, resource) {
    if (type === 'TIMERWRAP' || type === 'PROMISE') return
    if (type === 'PerformanceObserver' || type === 'RANDOMBYTESREQUEST') return
    var err = new Error('whatevs')
    var stacks = stackback(err)
    active.set(asyncId, {type, stacks, resource})
  },
  destroy (asyncId) {
    active.delete(asyncId)
  }
})

hook.enable()
module.exports = whyIsNodeRunning

function whyIsNodeRunning (logger) {
  if (!logger) logger = console

  hook.disable()
  var activeResources = [...active.values()].filter(function(r) {
    if (
      typeof r.resource.hasRef === 'function'
      && !r.resource.hasRef()
    ) return false
    return true
  })

  logger.error('There are %d handle(s) keeping the process running', activeResources.length)
  for (const o of activeResources) printStacks(o)

  function printStacks (o) {
    var stacks = o.stacks.slice(1).filter(function (s) {
      var filename = s.getFileName()
      return filename && filename.indexOf(sep) > -1 && filename.indexOf('internal' + sep) !== 0 && filename.indexOf('node:internal' + sep) !== 0
    })

    logger.error('')
    logger.error('# %s', o.type)

    if (!stacks[0]) {
      logger.error('(unknown stack trace)')
    } else {
      var padding = ''
      stacks.forEach(function (s) {
        var pad = (s.getFileName() + ':' + s.getLineNumber()).replace(/./g, ' ')
        if (pad.length > padding.length) padding = pad
      })
      stacks.forEach(function (s) {
        var prefix = s.getFileName() + ':' + s.getLineNumber()
        try {
          var src = fs.readFileSync(s.getFileName(), 'utf-8').split(/\n|\r\n/)
          logger.error(prefix + padding.slice(prefix.length) + ' - ' + src[s.getLineNumber() - 1].trim())
        } catch (e) {
          logger.error(prefix + padding.slice(prefix.length))
        }
      })
    }
  }
}

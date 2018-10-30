DLList = require "./DLList"
class Sync
  constructor: (@name, @instance) ->
    @_running = 0
    @_queue = new DLList()
  isEmpty: -> @_queue.length == 0
  _tryToRun: ->
    if (@_running < 1) and @_queue.length > 0
      @_running++
      next = @_queue.shift()
      next.task.apply {}, next.args.concat (args...) =>
        @_running--
        @_tryToRun()
        next.cb?.apply {}, args
  submit: (task, args..., cb) =>
    @_queue.push {task, args, cb}
    @_tryToRun()
  schedule: (task, args...) ->
    wrapped = (args..., cb) ->
      (task.apply {}, args)
      .then (args...) -> cb.apply {}, Array::concat null, args
      .catch (args...) -> cb.apply {}, args
    new @instance.Promise (resolve, reject) =>
      @submit.apply {}, Array::concat wrapped, args, (args...) ->
        (if args[0]? then reject else args.shift(); resolve).apply {}, args

module.exports = Sync

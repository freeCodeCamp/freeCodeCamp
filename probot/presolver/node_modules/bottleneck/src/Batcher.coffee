parser = require "./parser"
Events = require "./Events"

class Batcher
  defaults:
    maxTime: null
    maxSize: null
    Promise: Promise

  constructor: (@options={}) ->
    parser.load @options, @defaults, @
    @Events = new Events @
    @_arr = []
    @_resetPromise()
    @_lastFlush = Date.now()

  _resetPromise: ->
    @_promise = new @Promise (res, rej) => @_resolve = res

  _flush: ->
    clearTimeout @_timeout
    @_lastFlush = Date.now()
    @_resolve()
    @Events.trigger "batch", [@_arr]
    @_arr = []
    @_resetPromise()

  add: (data) ->
    @_arr.push data
    ret = @_promise
    if @_arr.length == @maxSize
      @_flush()
    else if @maxTime? and @_arr.length == 1
      @_timeout = setTimeout =>
        @_flush()
      , @maxTime
    ret

module.exports = Batcher

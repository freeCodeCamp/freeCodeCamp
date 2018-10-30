parser = require "./parser"
Events = require "./Events"
RedisConnection = require "./RedisConnection"
IORedisConnection = require "./IORedisConnection"

class Group
  defaults:
    timeout: 1000 * 60 * 5
    connection: null
    id: "group-key"

  constructor: (@limiterOptions={}) ->
    parser.load @limiterOptions, @defaults, @
    @Events = new Events @
    @instances = {}
    @Bottleneck = require "./Bottleneck"
    @_startAutoCleanup()
    @sharedConnection = @connection?

    if !@connection?
      if @limiterOptions.datastore == "redis"
        @connection = new RedisConnection Object.assign {}, @limiterOptions, { @Events }
      else if @limiterOptions.datastore == "ioredis"
        @connection = new IORedisConnection Object.assign {}, @limiterOptions, { @Events }

  key: (key="") -> @instances[key] ? do =>
    limiter = @instances[key] = new @Bottleneck Object.assign @limiterOptions, {
      id: "#{@id}-#{key}",
      @timeout,
      @connection
    }
    @Events.trigger "created", [limiter, key]
    limiter

  deleteKey: (key="") =>
    instance = @instances[key]
    delete @instances[key]
    instance?.disconnect()

  limiters: -> { key: k, limiter: v } for k, v of @instances

  keys: -> Object.keys @instances

  _startAutoCleanup: ->
    clearInterval @interval
    (@interval = setInterval =>
      time = Date.now()
      for k, v of @instances
        try if await v._store.__groupCheck__(time) then @deleteKey k
        catch e then v.Events.trigger "error", [e]
    , (@timeout / 2)).unref?()

  updateSettings: (options={}) =>
    parser.overwrite options, @defaults, @
    parser.overwrite options, options, @limiterOptions
    @_startAutoCleanup() if options.timeout?

  disconnect: (flush=true) ->
    if !@sharedConnection
      @connection?.disconnect flush

module.exports = Group

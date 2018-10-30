parser = require "./parser"
BottleneckError = require "./BottleneckError"
RedisConnection = require "./RedisConnection"
IORedisConnection = require "./IORedisConnection"

class RedisDatastore
  constructor: (@instance, @storeOptions, storeInstanceOptions) ->
    @originalId = @instance.id
    parser.load storeInstanceOptions, storeInstanceOptions, @
    @clients = {}
    @sharedConnection = @connection?

    @connection ?= if @instance.datastore == "redis" then new RedisConnection { @clientOptions, @Promise, Events: @instance.Events }
    else if @instance.datastore == "ioredis" then new IORedisConnection { @clientOptions, @clusterNodes, @Promise, Events: @instance.Events }

    @instance.connection = @connection
    @instance.datastore = @connection.datastore

    @ready = @connection.ready
    .then (@clients) => @runScript "init", @prepareInitSettings @clearDatastore
    .then => @connection.__addLimiter__ @instance
    .then =>
      (@heartbeat = setInterval =>
        @runScript "heartbeat", []
        .catch (e) => @instance.Events.trigger "error", [e]
      , @heartbeatInterval).unref?()
      @clients

  __publish__: (message) ->
    { client } = await @ready
    client.publish(@instance.channel(), "message:#{message.toString()}")

  onMessage: (message) ->
    pos = message.indexOf(":")
    [type, data] = [message.slice(0, pos), message.slice(pos+1)]
    if type == "capacity"
      @instance._drainAll(if data.length > 0 then ~~data)
    else if type == "message"
      @instance.Events.trigger "message", [data]
    else if type == "blocked"
      @instance._dropAllQueued()

  __disconnect__: (flush) ->
    clearInterval @heartbeat
    if @sharedConnection
      @connection.__removeLimiter__ @instance
    else
      @connection.disconnect flush

  runScript: (name, args) ->
    await @ready unless name == "init" or name == "heartbeat"
    args.unshift Date.now().toString()
    new @Promise (resolve, reject) =>
      @instance.Events.trigger "debug", ["Calling Redis script: #{name}.lua", args]
      arr = @connection.__scriptArgs__ name, @originalId, args, (err, replies) ->
        if err? then return reject err
        return resolve replies
      @connection.__scriptFn__(name).apply {}, arr
    .catch (e) =>
      if e.message == "SETTINGS_KEY_NOT_FOUND"
        @runScript("init", @prepareInitSettings(false))
        .then => @runScript(name, args)
      else @Promise.reject e

  prepareArray: (arr) -> (if x? then x.toString() else "") for x in arr

  prepareObject: (obj) ->
    arr = []
    for k, v of obj then arr.push k, (if v? then v.toString() else "")
    arr

  prepareInitSettings: (clear) ->
    args = @prepareObject Object.assign({}, @storeOptions, {
      id: @originalId,
      version: @instance.version,
      groupTimeout: @timeout
    })
    args.unshift (if clear then 1 else 0), @instance.version
    args

  convertBool: (b) -> !!b

  __updateSettings__: (options) ->
    await @runScript "update_settings", @prepareObject options
    parser.overwrite options, options, @storeOptions

  __running__: -> @runScript "running", []

  __done__: -> @runScript "done", []

  __groupCheck__: -> @convertBool await @runScript "group_check", []

  __incrementReservoir__: (incr) -> @runScript "increment_reservoir", [incr]

  __currentReservoir__: -> @runScript "current_reservoir", []

  __check__: (weight) -> @convertBool await @runScript "check", @prepareArray [weight]

  __register__: (index, weight, expiration) ->
    [success, wait, reservoir] = await @runScript "register", @prepareArray [index, weight, expiration]
    return {
      success: @convertBool(success),
      wait,
      reservoir
    }

  __submit__: (queueLength, weight) ->
    try
      [reachedHWM, blocked, strategy] = await @runScript "submit", @prepareArray [queueLength, weight]
      return {
        reachedHWM: @convertBool(reachedHWM),
        blocked: @convertBool(blocked),
        strategy
      }
    catch e
      if e.message.indexOf("OVERWEIGHT") == 0
        [overweight, weight, maxConcurrent] = e.message.split ":"
        throw new BottleneckError("Impossible to add a job having a weight of #{weight} to a limiter having a maxConcurrent setting of #{maxConcurrent}")
      else
        throw e

  __free__: (index, weight) ->
    running = await @runScript "free", @prepareArray [index]
    return { running }

module.exports = RedisDatastore

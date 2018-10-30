parser = require "./parser"
Events = require "./Events"
Scripts = require "./Scripts"

class IORedisConnection
  datastore: "ioredis"
  defaults:
    clientOptions: {}
    clusterNodes: null
    client: null
    Promise: Promise
    Events: null

  constructor: (options={}) ->
    Redis = eval("require")("ioredis") # Obfuscated or else Webpack/Angular will try to inline the optional ioredis module
    parser.load options, @defaults, @
    @Events ?= new Events @
    @terminated = false

    if @clusterNodes?
      @client = new Redis.Cluster @clusterNodes, @clientOptions
      @subscriber = new Redis.Cluster @clusterNodes, @clientOptions
    else
      @client ?= new Redis @clientOptions
      @subscriber = @client.duplicate()
    @limiters = {}

    @ready = @Promise.all [@_setup(@client, false), @_setup(@subscriber, true)]
    .then =>
      @_loadScripts()
      { @client, @subscriber }

  _setup: (client, subscriber) ->
    new @Promise (resolve, reject) =>
      client.on "error", (e) => @Events.trigger "error", [e]
      if subscriber
        client.on "message", (channel, message) =>
          @limiters[channel]?._store.onMessage message
      if client.status == "ready" then resolve()
      else client.once "ready", resolve

  _loadScripts: -> Scripts.names.forEach (name) => @client.defineCommand name, { lua: Scripts.payload(name) }

  __addLimiter__: (instance) ->
    channel = instance.channel()
    new @Promise (resolve, reject) =>
      @subscriber.subscribe channel, =>
        @limiters[channel] = instance
        resolve()

  __removeLimiter__: (instance) ->
    channel = instance.channel()
    await @subscriber.unsubscribe channel unless @terminated
    delete @limiters[channel]

  __scriptArgs__: (name, id, args, cb) ->
    keys = Scripts.keys name, id
    [keys.length].concat keys, args, cb

  __scriptFn__: (name) ->
    @client[name].bind(@client)

  disconnect: (flush=true) ->
    clearInterval(@limiters[k]._store.heartbeat) for k in Object.keys @limiters
    @limiters = {}
    @terminated = true

    if flush
      @Promise.all [@client.quit(), @subscriber.quit()]
    else
      @client.disconnect()
      @subscriber.disconnect()
      @Promise.resolve()

module.exports = IORedisConnection

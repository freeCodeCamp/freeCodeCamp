parser = require "./parser"
BottleneckError = require "./BottleneckError"

class LocalDatastore
  constructor: (@instance, @storeOptions, storeInstanceOptions) ->
    parser.load storeInstanceOptions, storeInstanceOptions, @
    @_nextRequest = @_lastReservoirRefresh = Date.now()
    @_running = 0
    @_done = 0
    @_unblockTime = 0
    @ready = @yieldLoop()
    @clients = {}
    (@heartbeat = setInterval =>
      now = Date.now()
      reservoirRefreshActive = @storeOptions.reservoirRefreshInterval? and @storeOptions.reservoirRefreshAmount?
      if reservoirRefreshActive and now >= @_lastReservoirRefresh + @storeOptions.reservoirRefreshInterval
        @storeOptions.reservoir = @storeOptions.reservoirRefreshAmount
        @_lastReservoirRefresh = now
        @instance._drainAll @computeCapacity()
    , @heartbeatInterval).unref?()

  __publish__: (message) ->
    await @yieldLoop()
    @instance.Events.trigger "message", [message.toString()]

  __disconnect__: (flush) ->
    clearInterval @heartbeat
    @Promise.resolve()

  yieldLoop: (t=0) -> new @Promise (resolve, reject) -> setTimeout resolve, t

  computePenalty: -> @storeOptions.penalty ? ((15 * @storeOptions.minTime) or 5000)

  __updateSettings__: (options) ->
    await @yieldLoop()
    parser.overwrite options, options, @storeOptions
    @instance._drainAll @computeCapacity()
    true

  __running__: ->
    await @yieldLoop()
    @_running

  __done__: ->
    await @yieldLoop()
    @_done

  __groupCheck__: (time) ->
    await @yieldLoop()
    (@_nextRequest + @timeout) < time

  computeCapacity: ->
    { maxConcurrent, reservoir } = @storeOptions
    if maxConcurrent? and reservoir? then Math.min((maxConcurrent - @_running), reservoir)
    else if maxConcurrent? then maxConcurrent - @_running
    else if reservoir? then reservoir
    else null

  conditionsCheck: (weight) ->
    capacity = @computeCapacity()
    not capacity? or weight <= capacity

  __incrementReservoir__: (incr) ->
    await @yieldLoop()
    reservoir = @storeOptions.reservoir += incr
    @instance._drainAll @computeCapacity()
    reservoir

  __currentReservoir__: ->
    await @yieldLoop()
    @storeOptions.reservoir

  isBlocked: (now) -> @_unblockTime >= now

  check: (weight, now) -> @conditionsCheck(weight) and (@_nextRequest - now) <= 0

  __check__: (weight) ->
    await @yieldLoop()
    now = Date.now()
    @check weight, now

  __register__: (index, weight, expiration) ->
    await @yieldLoop()
    now = Date.now()
    if @conditionsCheck weight
      @_running += weight
      if @storeOptions.reservoir? then @storeOptions.reservoir -= weight
      wait = Math.max @_nextRequest - now, 0
      @_nextRequest = now + wait + @storeOptions.minTime
      { success: true, wait, reservoir: @storeOptions.reservoir }
    else { success: false }

  strategyIsBlock: -> @storeOptions.strategy == 3

  __submit__: (queueLength, weight) ->
    await @yieldLoop()
    if @storeOptions.maxConcurrent? and weight > @storeOptions.maxConcurrent
      throw new BottleneckError("Impossible to add a job having a weight of #{weight} to a limiter having a maxConcurrent setting of #{@storeOptions.maxConcurrent}")
    now = Date.now()
    reachedHWM = @storeOptions.highWater? and queueLength == @storeOptions.highWater and not @check(weight, now)
    blocked = @strategyIsBlock() and (reachedHWM or @isBlocked now)
    if blocked
      @_unblockTime = now + @computePenalty()
      @_nextRequest = @_unblockTime + @storeOptions.minTime
      @instance._dropAllQueued()
    { reachedHWM, blocked, strategy: @storeOptions.strategy }

  __free__: (index, weight) ->
    await @yieldLoop()
    @_running -= weight
    @_done += weight
    @instance._drainAll @computeCapacity()
    { running: @_running }

module.exports = LocalDatastore

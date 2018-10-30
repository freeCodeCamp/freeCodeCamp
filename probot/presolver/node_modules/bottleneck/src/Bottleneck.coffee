NUM_PRIORITIES = 10
DEFAULT_PRIORITY = 5

parser = require "./parser"
Queues = require "./Queues"
LocalDatastore = require "./LocalDatastore"
RedisDatastore = require "./RedisDatastore"
Events = require "./Events"
States = require "./States"
Sync = require "./Sync"
packagejson = require "../package.json"

class Bottleneck
  Bottleneck.default = Bottleneck
  Bottleneck.version = Bottleneck::version = packagejson.version
  Bottleneck.strategy = Bottleneck::strategy = { LEAK:1, OVERFLOW:2, OVERFLOW_PRIORITY:4, BLOCK:3 }
  Bottleneck.BottleneckError = Bottleneck::BottleneckError = require "./BottleneckError"
  Bottleneck.Group = Bottleneck::Group = require "./Group"
  Bottleneck.RedisConnection = Bottleneck::RedisConnection = require "./RedisConnection"
  Bottleneck.IORedisConnection = Bottleneck::IORedisConnection = require "./IORedisConnection"
  Bottleneck.Batcher = Bottleneck::Batcher = require "./Batcher"
  jobDefaults:
    priority: DEFAULT_PRIORITY
    weight: 1
    expiration: null
    id: "<no-id>"
  storeDefaults:
    maxConcurrent: null
    minTime: 0
    highWater: null
    strategy: Bottleneck::strategy.LEAK
    penalty: null
    reservoir: null
    reservoirRefreshInterval: null
    reservoirRefreshAmount: null
  localStoreDefaults:
    Promise: Promise
    timeout: null
    heartbeatInterval: 250
  redisStoreDefaults:
    Promise: Promise
    timeout: null
    heartbeatInterval: 5000
    clientOptions: {}
    clusterNodes: null
    clearDatastore: false
    connection: null
  instanceDefaults:
    datastore: "local"
    connection: null
    id: "<no-id>"
    rejectOnDrop: true
    trackDoneStatus: false
    Promise: Promise
  stopDefaults:
    enqueueErrorMessage: "This limiter has been stopped and cannot accept new jobs."
    dropWaitingJobs: true
    dropErrorMessage: "This limiter has been stopped."

  constructor: (options={}, invalid...) ->
    @_validateOptions options, invalid
    parser.load options, @instanceDefaults, @
    @_queues = new Queues NUM_PRIORITIES
    @_scheduled = {}
    @_states = new States ["RECEIVED", "QUEUED", "RUNNING", "EXECUTING"].concat(if @trackDoneStatus then ["DONE"] else [])
    @_limiter = null
    @Events = new Events @
    @_submitLock = new Sync "submit", @
    @_registerLock = new Sync "register", @
    storeOptions = parser.load options, @storeDefaults, {}

    @_store = if @datastore == "redis" or @datastore == "ioredis" or @connection?
      storeInstanceOptions = parser.load options, @redisStoreDefaults, {}
      new RedisDatastore @, storeOptions, storeInstanceOptions
    else if @datastore == "local"
      storeInstanceOptions = parser.load options, @localStoreDefaults, {}
      new LocalDatastore @, storeOptions, storeInstanceOptions
    else
      throw new Bottleneck::BottleneckError "Invalid datastore type: #{@datastore}"

    @_queues.on "leftzero", => @_store.heartbeat.ref?()
    @_queues.on "zero", => @_store.heartbeat.unref?()

  _validateOptions: (options, invalid) ->
    unless options? and typeof options == "object" and invalid.length == 0
      throw new Bottleneck::BottleneckError "Bottleneck v2 takes a single object argument. Refer to https://github.com/SGrondin/bottleneck#upgrading-to-v2 if you're upgrading from Bottleneck v1."

  ready: -> @_store.ready

  clients: -> @_store.clients

  channel: -> "b_#{@id}"

  publish: (message) -> @_store.__publish__ message

  disconnect: (flush=true) -> @_store.__disconnect__ flush

  chain: (@_limiter) -> @

  queued: (priority) -> @_queues.queued priority

  empty: -> @queued() == 0 and @_submitLock.isEmpty()

  running: -> @_store.__running__()

  done: -> @_store.__done__()

  jobStatus: (id) -> @_states.jobStatus id

  jobs: (status) -> @_states.statusJobs status

  counts: -> @_states.statusCounts()

  _sanitizePriority: (priority) ->
    sProperty = if ~~priority != priority then DEFAULT_PRIORITY else priority
    if sProperty < 0 then 0 else if sProperty > NUM_PRIORITIES-1 then NUM_PRIORITIES-1 else sProperty

  _randomIndex: -> Math.random().toString(36).slice(2)

  check: (weight=1) -> @_store.__check__ weight

  _run: (next, wait, index) ->
    @Events.trigger "debug", ["Scheduling #{next.options.id}", { args: next.args, options: next.options }]
    done = false
    completed = (args...) =>
      if not done
        try
          done = true
          @_states.next next.options.id # DONE
          clearTimeout @_scheduled[index].expiration
          delete @_scheduled[index]
          @Events.trigger "debug", ["Completed #{next.options.id}", { args: next.args, options: next.options }]
          @Events.trigger "done", ["Completed #{next.options.id}", { args: next.args, options: next.options }]
          { running } = await @_store.__free__ index, next.options.weight
          @Events.trigger "debug", ["Freed #{next.options.id}", { args: next.args, options: next.options }]
          if running == 0 and @empty() then @Events.trigger "idle", []
          next.cb?.apply {}, args
        catch e
          @Events.trigger "error", [e]
    @_states.next next.options.id # RUNNING
    @_scheduled[index] =
      timeout: setTimeout =>
        @Events.trigger "debug", ["Executing #{next.options.id}", { args: next.args, options: next.options }]
        @_states.next next.options.id # EXECUTING
        if @_limiter? then @_limiter.submit.apply @_limiter, Array::concat next.options, next.task, next.args, completed
        else next.task.apply {}, next.args.concat completed
      , wait
      expiration: if next.options.expiration? then setTimeout =>
        completed new Bottleneck::BottleneckError "This job timed out after #{next.options.expiration} ms."
      , wait + next.options.expiration
      job: next

  _drainOne: (capacity) =>
    @_registerLock.schedule =>
      if @queued() == 0 then return @Promise.resolve false
      queue = @_queues.getFirst()
      { options, args } = next = queue.first()
      if capacity? and options.weight > capacity then return @Promise.resolve false
      @Events.trigger "debug", ["Draining #{options.id}", { args, options }]
      index = @_randomIndex()
      @_store.__register__ index, options.weight, options.expiration
      .then ({ success, wait, reservoir }) =>
        @Events.trigger "debug", ["Drained #{options.id}", { success, args, options }]
        if success
          queue.shift()
          empty = @empty()
          if empty then @Events.trigger "empty", []
          if reservoir == 0 then @Events.trigger "depleted", [empty]
          @_run next, wait, index
        @Promise.resolve success

  _drainAll: (capacity) ->
    @_drainOne(capacity)
    .then (success) =>
      if success then @_drainAll()
      else @Promise.resolve success
    .catch (e) => @Events.trigger "error", [e]

  _drop: (job, message="This job has been dropped by Bottleneck") ->
    if @_states.remove job.options.id
      if @rejectOnDrop then job.cb?.apply {}, [new Bottleneck::BottleneckError message]
      @Events.trigger "dropped", [job]

  _dropAllQueued: (message) ->
    @_queues.shiftAll (job) => @_drop job, message

  stop: (options={}) ->
    options = parser.load options, @stopDefaults
    waitForExecuting = (at) =>
      finished = =>
        counts = @_states.counts
        (counts[0] + counts[1] + counts[2] + counts[3]) == at
      new @Promise (resolve, reject) =>
        if finished() then resolve()
        else
          @on "done", =>
            if finished()
              @removeAllListeners "done"
              resolve()
    done = if options.dropWaitingJobs
      @_run = (next) => @_drop next, options.dropErrorMessage
      @_drainOne = => @Promise.resolve false
      @_registerLock.schedule => @_submitLock.schedule =>
        for k, v of @_scheduled
          if @jobStatus(v.job.options.id) == "RUNNING"
            clearTimeout v.timeout
            clearTimeout v.expiration
            @_drop v.job, options.dropErrorMessage
        @_dropAllQueued options.dropErrorMessage
        waitForExecuting(0)
    else
      @schedule { priority: NUM_PRIORITIES - 1, weight: 0 }, => waitForExecuting(1)
    @submit = (args..., cb) => cb?.apply {}, [new Bottleneck::BottleneckError options.enqueueErrorMessage]
    @stop = => @Promise.reject new Bottleneck::BottleneckError "stop() has already been called"
    done

  submit: (args...) =>
    if typeof args[0] == "function"
      [task, args..., cb] = args
      options = parser.load {}, @jobDefaults, {}
    else
      [options, task, args..., cb] = args
      options = parser.load options, @jobDefaults
    job = { options, task, args, cb }
    options.priority = @_sanitizePriority options.priority
    if options.id == @jobDefaults.id then options.id = "#{options.id}-#{@_randomIndex()}"

    if @jobStatus(options.id)?
      job.cb?.apply {}, [new Bottleneck::BottleneckError "A job with the same id already exists (id=#{options.id})"]
      return false

    @_states.start options.id # RECEIVED

    @Events.trigger "debug", ["Queueing #{options.id}", { args, options }]
    @_submitLock.schedule =>
      try
        { reachedHWM, blocked, strategy } = await @_store.__submit__ @queued(), options.weight
        @Events.trigger "debug", ["Queued #{options.id}", { args, options, reachedHWM, blocked }]
      catch e
        @_states.remove options.id
        @Events.trigger "debug", ["Could not queue #{options.id}", { args, options, error: e }]
        job.cb?.apply {}, [e]
        return false

      if blocked
        @_drop job
        return true
      else if reachedHWM
        shifted = if strategy == Bottleneck::strategy.LEAK then @_queues.shiftLastFrom(options.priority)
        else if strategy == Bottleneck::strategy.OVERFLOW_PRIORITY then @_queues.shiftLastFrom(options.priority + 1)
        else if strategy == Bottleneck::strategy.OVERFLOW then job
        if shifted? then @_drop shifted
        if not shifted? or strategy == Bottleneck::strategy.OVERFLOW
          if not shifted? then @_drop job
          return reachedHWM

      @_states.next job.options.id # QUEUED
      @_queues.push options.priority, job
      await @_drainAll()
      reachedHWM

  schedule: (args...) =>
    if typeof args[0] == "function"
      [task, args...] = args
      options = parser.load {}, @jobDefaults, {}
    else
      [options, task, args...] = args
      options = parser.load options, @jobDefaults
    wrapped = (args..., cb) =>
      returned = task.apply {}, args
      (unless returned?.then? and typeof returned.then == "function" then @Promise.resolve(returned) else returned)
      .then (args...) -> cb.apply {}, Array::concat null, args
      .catch (args...) -> cb.apply {}, args
    new @Promise (resolve, reject) =>
      @submit.apply {}, Array::concat options, wrapped, args, (args...) ->
        (if args[0]? then reject else args.shift(); resolve).apply {}, args
      .catch (e) => @Events.trigger "error", [e]

  wrap: (fn) ->
    wrapped = (args...) => @schedule.apply {}, Array::concat fn, args
    wrapped.withOptions = (options, args...) => @schedule.apply {}, Array::concat options, fn, args
    wrapped

  updateSettings: (options={}) =>
    await @_store.__updateSettings__ parser.overwrite options, @storeDefaults
    parser.overwrite options, @instanceDefaults, @
    @

  currentReservoir: -> @_store.__currentReservoir__()

  incrementReservoir: (incr=0) => @_store.__incrementReservoir__ incr

module.exports = Bottleneck

DLList = require "./DLList"
Events = require "./Events"

class Queues

  constructor: (num_priorities) ->
    @Events = new Events @
    @_length = 0
    @_lists = for i in [1..num_priorities] then new DLList @

  incr: -> if @_length++ == 0 then @Events.trigger "leftzero"

  decr: -> if --@_length == 0 then @Events.trigger "zero"

  push: (priority, job) -> @_lists[priority].push job

  queued: (priority) -> if priority? then @_lists[priority].length else @_length

  shiftAll: (fn) -> @_lists.forEach (list) -> list.forEachShift fn

  getFirst: (arr=@_lists) ->
    for list in arr
      return list if list.length > 0
    []

  shiftLastFrom: (priority) -> @getFirst(@_lists[priority..].reverse()).shift()

module.exports = Queues

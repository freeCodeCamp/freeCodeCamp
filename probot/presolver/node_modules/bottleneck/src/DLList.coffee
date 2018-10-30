class DLList
  constructor: (@_queues) ->
    @_first = null
    @_last = null
    @length = 0
  push: (value) ->
    @length++
    @_queues?.incr()
    node = {value, next:null}
    if @_last?
      @_last.next = node
      @_last = node
    else @_first = @_last = node
    undefined
  shift: () ->
    if not @_first? then return undefined
    else
      @length--
      @_queues?.decr()
    value = @_first.value
    @_first = @_first.next ? (@_last = null)
    value
  first: () -> if @_first? then @_first.value
  getArray: () ->
    node = @_first
    while node? then (ref = node; node = node.next; ref.value)
  forEachShift: (cb) ->
    node = @shift()
    while node? then (cb node; node = @shift())
    undefined

module.exports = DLList

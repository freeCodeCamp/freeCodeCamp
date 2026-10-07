var debounce = require('.')
var sinon = require('sinon')

describe('housekeeping', function() {
  it('should be defined as a function', function() {
    expect(typeof debounce).toEqual('function')
  })
})

describe('catch issue #3 - Debounced function executing early?', function() {

  // use sinon to control the clock
  var clock

  beforeEach(function(){
    clock = sinon.useFakeTimers()
  })

  afterEach(function(){
    clock.restore()
  })

  it('should debounce with fast timeout', function() {

    var callback = sinon.spy()

    // set up debounced function with wait of 100
    var fn = debounce(callback, 100)

    // call debounced function at interval of 50
    setTimeout(fn, 100)
    setTimeout(fn, 150)
    setTimeout(fn, 200)
    setTimeout(fn, 250)

    // set the clock to 100 (period of the wait) ticks after the last debounced call
    clock.tick(350)

    // the callback should have been triggered once
    expect(callback.callCount).toEqual(1)

  })

})

describe('forcing execution', function() {

  // use sinon to control the clock
  var clock

  beforeEach(function(){
    clock = sinon.useFakeTimers()
  })

  afterEach(function(){
    clock.restore()
  })

  it('should not execute prior to timeout', function() {

    var callback = sinon.spy()

    // set up debounced function with wait of 100
    var fn = debounce(callback, 100)

    // call debounced function at interval of 50
    setTimeout(fn, 100)
    setTimeout(fn, 150)

    // set the clock to 25 (period of the wait) ticks after the last debounced call
    clock.tick(175)

    // the callback should not have been called yet
    expect(callback.callCount).toEqual(0)

  })

  it('should execute prior to timeout when flushed', function() {

    var callback = sinon.spy()

    // set up debounced function with wait of 100
    var fn = debounce(callback, 100)

    // call debounced function at interval of 50
    setTimeout(fn, 100)
    setTimeout(fn, 150)

    // set the clock to 25 (period of the wait) ticks after the last debounced call
    clock.tick(175)
    
    fn.flush()

    // the callback has been called
    expect(callback.callCount).toEqual(1)

  })

  it('should not execute again after timeout when flushed before the timeout', function() {

    var callback = sinon.spy()

    // set up debounced function with wait of 100
    var fn = debounce(callback, 100)

    // call debounced function at interval of 50
    setTimeout(fn, 100)
    setTimeout(fn, 150)

    // set the clock to 25 (period of the wait) ticks after the last debounced call
    clock.tick(175)
    
    fn.flush()
    
    // the callback has been called here
    expect(callback.callCount).toEqual(1)
    
    // move to past the timeout
    clock.tick(225)

    // the callback should have only been called once
    expect(callback.callCount).toEqual(1)

  })

  it('should not execute on a timer after being flushed', function() {

    var callback = sinon.spy()

    // set up debounced function with wait of 100
    var fn = debounce(callback, 100)

    // call debounced function at interval of 50
    setTimeout(fn, 100)
    setTimeout(fn, 150)

    // set the clock to 25 (period of the wait) ticks after the last debounced call
    clock.tick(175)
    
    fn.flush()
    
    // the callback has been called here
    expect(callback.callCount).toEqual(1)
    
    // schedule again
    setTimeout(fn, 250)
    
    // move to past the new timeout
    clock.tick(400)

    // the callback should have been called again
    expect(callback.callCount).toEqual(2)

  })

  it('should not execute when flushed if nothing was scheduled', function() {

    var callback = sinon.spy()

    // set up debounced function with wait of 100
    var fn = debounce(callback, 100)

    fn.flush()
    
    // the callback should not have been called
    expect(callback.callCount).toEqual(0)

  })

})

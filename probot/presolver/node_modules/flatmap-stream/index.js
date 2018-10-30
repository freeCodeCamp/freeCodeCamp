var Stream = require('stream').Stream

module.exports = function (mapper, opts) {

  var stream = new Stream()
    , inputs = 0
    , outputs = 0
    , ended = false
    , paused = false
    , destroyed = false
    , lastWritten = 0
    , inNext = false

  opts = opts || {};
  var errorEventName = opts.failures ? 'failure' : 'error';

  // Items that are not ready to be written yet (because they would come out of
  // order) get stuck in a queue for later.
  var writeQueue = {}

  stream.writable = true
  stream.readable = true

  function queueData (data, number) {
    var nextToWrite = lastWritten + 1

    if (number === nextToWrite) {
      // If it's next, and its not undefined write it
      if (data !== undefined) {
        stream.emit.apply(stream, ['data', data])
      }
      lastWritten ++
      nextToWrite ++
    } else {
      // Otherwise queue it for later.
      writeQueue[number] = data
    }

    // If the next value is in the queue, write it
    if (writeQueue.hasOwnProperty(nextToWrite)) {
      var dataToWrite = writeQueue[nextToWrite]
      delete writeQueue[nextToWrite]
      return queueData(dataToWrite, nextToWrite)
    }

    outputs ++
    if(inputs === outputs) {
      if(paused) paused = false, stream.emit('drain') //written all the incoming events
      if(ended) end()
    }
  }

  function next (err, data, number) {
    if(destroyed) return
    inNext = true

    if (!err || opts.failures) {
      queueData(data, number)
    }

    if (err) {
      stream.emit.apply(stream, [ errorEventName, err ]);
    }

    inNext = false;
  }

  // Wrap the mapper function by calling its callback with the order number of
  // the item in the stream.
  function wrappedMapper (input, number, callback) {
    return mapper.call(null, input, function(err, data){
      callback(err, data, number)
    })
  }

  stream.write = function (data) {
    if(ended) throw new Error('flatmap stream is not writable')
    inNext = false
    
    try {
      //catch sync errors and handle them like async errors
      for (var i in data) {
        inputs ++
        var written = wrappedMapper(data[i], inputs, next)
        paused = (written === false)
        if (paused)
            break
      }
      return !paused
    } catch (err) {
      //if the callback has been called syncronously, and the error
      //has occured in an listener, throw it again.
      if(inNext)
        throw err
      next(err)
      return !paused
    }
  }

  function end (data) {
    //if end was called with args, write it, 
    ended = true //write will emit 'end' if ended is true
    stream.writable = false
    if(data !== undefined) {
      return queueData(data, inputs)
    } else if (inputs == outputs) { //wait for processing 
      stream.readable = false, stream.emit('end'), stream.destroy() 
    }
  }

  stream.end = function (data) {
    if(ended) return
    end(data)
  }

  stream.destroy = function () {
    ended = destroyed = true
    stream.writable = stream.readable = paused = false
    process.nextTick(function () {
      stream.emit('close')
    })
  }
  stream.pause = function () {
    paused = true
  }

  stream.resume = function () {
    paused = false
  }

  return stream
}

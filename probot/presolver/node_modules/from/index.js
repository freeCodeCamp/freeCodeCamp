
'use strict';

var Stream = require('stream')

// from
//
// a stream that reads from an source.
// source may be an array, or a function.
// from handles pause behaviour for you.

module.exports =
function from (source) {
  if(Array.isArray(source)) {
		var source_index = 0, source_len = source.length;
    return from (function (i) {
      if(source_index < source_len)
        this.emit('data', source[source_index++])
      else
        this.emit('end')
      return true
    })
  }
  var s = new Stream(), i = 0
  s.ended = false
  s.started = false
  s.readable = true
  s.writable = false
  s.paused = false
  s.ended = false
  s.pause = function () {
    s.started = true
    s.paused = true
  }
  function next () {
    s.started = true
    if(s.ended) return
    while(!s.ended && !s.paused && source.call(s, i++, function () {
      if(!s.ended && !s.paused)
          process.nextTick(next);
    }))
      ;
  }
  s.resume = function () {
    s.started = true
    s.paused = false
    next()
  }
  s.on('end', function () {
    s.ended = true
    s.readable = false
    process.nextTick(s.destroy)
  })
  s.destroy = function () {
    s.ended = true
    s.emit('close') 
  }
  /*
    by default, the stream will start emitting at nextTick
    if you want, you can pause it, after pipeing.
    you can also resume before next tick, and that will also
    work.
  */
  process.nextTick(function () {
    if(!s.started) s.resume()
  })
  return s
}

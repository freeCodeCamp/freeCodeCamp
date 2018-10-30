#through

[![build status](https://secure.travis-ci.org/dominictarr/through.png)](http://travis-ci.org/dominictarr/through)
[![testling badge](https://ci.testling.com/dominictarr/through.png)](https://ci.testling.com/dominictarr/through)

Easy way to create a `Stream` that is both `readable` and `writable`. 

* Pass in optional `write` and `end` methods.
* `through` takes care of pause/resume logic if you use `this.queue(data)` instead of `this.emit('data', data)`.
* Use `this.pause()` and `this.resume()` to manage flow.
* Check `this.paused` to see current flow state. (`write` always returns `!this.paused`).

This function is the basis for most of the synchronous streams in 
[event-stream](http://github.com/dominictarr/event-stream).

``` js
var through = require('through')

through(function write(data) {
    this.queue(data) //data *must* not be null
  },
  function end () { //optional
    this.queue(null)
  })
```

Or, can also be used _without_ buffering on pause, use `this.emit('data', data)`,
and this.emit('end')

``` js
var through = require('through')

through(function write(data) {
    this.emit('data', data)
    //this.pause() 
  },
  function end () { //optional
    this.emit('end')
  })
```

## Extended Options

You will probably not need these 99% of the time.

### autoDestroy=false

By default, `through` emits close when the writable
and readable side of the stream has ended.
If that is not desired, set `autoDestroy=false`.

``` js
var through = require('through')

//like this
var ts = through(write, end, {autoDestroy: false})
//or like this
var ts = through(write, end)
ts.autoDestroy = false
```

## License

MIT / Apache2

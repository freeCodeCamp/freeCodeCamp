[![TravisCI Build Status](https://travis-ci.org/nmhnmh/from.svg?branch=master)](https://travis-ci.org/nmhnmh/from)

# from

An easy way to create a `readable Stream`.

## from(function getChunk(count, next))

from takes a `getChunk` function and returns a stream.  

`getChunk` is called again and again, after each time the user calls `next()`, 
until the user emits `'end'`

if `pause()` is called, the `getChunk` won't be called again untill `resume()` is called.


```js
var from = require('from')

var stream = 
  from(function getChunk(count, next) {
    //do some sort of data
    this.emit('data', whatever)
    
    if(itsOver)
      this.emit('end')

    //ready to handle the next chunk
    next()
    //or, if it's sync:
    return true 
  })
```

## from(array)

from also takes an `Array` whose elements it emits one after another.

## License
MIT / Apache2

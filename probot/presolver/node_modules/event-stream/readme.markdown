# EventStream

[Streams](http://nodejs.org/api/stream.html "Stream") are node's best and most misunderstood idea, and EventStream is a toolkit to make creating and working with streams easy.

Normally, streams are only used for IO, but in event stream we send all kinds of objects down the pipe. If your application's input and output are streams,  shouldn't the throughput be a stream too?  

The *EventStream* functions resemble the array functions, because Streams are like Arrays, but laid out in time, rather than in memory.  

All the `event-stream` functions return instances of `Stream`.

`event-stream` creates [0.8 streams](https://github.com/joyent/node/blob/v0.8/doc/api/stream.markdown), which are compatible with [0.10 streams](http://nodejs.org/api/stream.html "Stream").

>NOTE: I shall use the term <em>"through stream"</em> to refer to a stream that is writable <em>and</em> readable.  

>NOTE for Gulp users: Merge will not work for gulp 4. [merge-stream](https://npmjs.com/merge-stream) should be used. 

### [simple example](https://github.com/dominictarr/event-stream/blob/master/examples/pretty.js):

``` js
//pretty.js

if(!module.parent) {
  var es = require('event-stream')
  var inspect = require('util').inspect

  process.stdin                        //connect streams together with `pipe`
    .pipe(es.split())                  //split stream to break on newlines
    .pipe(es.map(function (data, cb) { //turn this async function into a stream
      cb(null
        , inspect(JSON.parse(data)))   //render it nicely
    }))
    .pipe(process.stdout)              // pipe it to stdout !
}
```
run it ...

``` bash  
curl -sS registry.npmjs.org/event-stream | node pretty.js
```
 
[node Stream documentation](http://nodejs.org/api/stream.html)

## through (write?, end?)

Re-emits data synchronously. Easy way to create synchronous through streams.
Pass in optional `write` and `end` methods. They will be called in the 
context of the stream. Use `this.pause()` and `this.resume()` to manage flow.
Check `this.paused` to see current flow state. (write always returns `!this.paused`)

this function is the basis for most of the synchronous streams in `event-stream`.

``` js

es.through(function write(data) {
    this.emit('data', data)
    //this.pause() 
  },
  function end () { //optional
    this.emit('end')
  })

```

## map (asyncFunction)

Create a through stream from an asynchronous function.  

``` js
var es = require('event-stream')

es.map(function (data, callback) {
  //transform data
  // ...
  callback(null, data)
})

```

Each map MUST call the callback. It may callback with data, with an error or with no arguments, 

  * `callback()` drop this data.  
    this makes the map work like `filter`,  
    note:`callback(null,null)` is not the same, and will emit `null`

  * `callback(null, newData)` turn data into newData
    
  * `callback(error)` emit an error for this item.

>Note: if a callback is not called, `map` will think that it is still being processed,   
>every call must be answered or the stream will not know when to end.  
>
>Also, if the callback is called more than once, every call but the first will be ignored.

## mapSync (syncFunction)

Same as `map`, but the callback is called synchronously. Based on `es.through`

## split (matcher)

Break up a stream and reassemble it so that each line is a chunk. matcher may be a `String`, or a `RegExp` 

Example, read every line in a file ...

``` js
fs.createReadStream(file, {flags: 'r'})
  .pipe(es.split())
  .pipe(es.map(function (line, cb) {
    //do something with the line 
    cb(null, line)
  }))
```

`split` takes the same arguments as `string.split` except it defaults to '\n' instead of ',', and the optional `limit` parameter is ignored.
[String#split](https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String/split)

**NOTE**  - Maintaining Line Breaks  
If you want to process each line of the stream, transform the data, reassemble, and **KEEP** the line breaks the example will look like this:

```javascript
fs.createReadStream(file, {flags: 'r'})
  .pipe(es.split(/(\r?\n)/))
  .pipe(es.map(function (line, cb) {
    //do something with the line 
    cb(null, line)
  }))
```

This technique is mentioned in the [underlying documentation](https://www.npmjs.com/package/split#keep-matched-splitter) for the split npm package.

## join (separator)

Create a through stream that emits `separator` between each chunk, just like Array#join.

(for legacy reasons, if you pass a callback instead of a string, join is a synonym for `es.wait`)

## merge (stream1,...,streamN) or merge (streamArray) 
> concat → merge

Merges streams into one and returns it.
Incoming data will be emitted as soon it comes into - no ordering will be applied (for example: `data1 data1 data2 data1 data2` - where `data1` and `data2` is data from two streams).
Counts how many streams were passed to it and emits end only when all streams emitted end.

```js
es.merge(
  process.stdout,
  process.stderr
).pipe(fs.createWriteStream('output.log'));
```

It can also take an Array of streams as input like this: 
```js
es.merge([
  fs.createReadStream('input1.txt'),
  fs.createReadStream('input2.txt')
]).pipe(fs.createWriteStream('output.log'));
```

## replace (from, to)

Replace all occurrences of `from` with `to`. `from` may be a `String` or a `RegExp`.  
Works just like `string.split(from).join(to)`, but streaming.


## parse

Convenience function for parsing JSON chunks. For newline separated JSON,
use with `es.split`.  By default it logs parsing errors by `console.error`;
for another behaviour, transforms created by `es.parse({error: true})` will
emit error events for exceptions thrown from `JSON.parse`, unmodified.

``` js
fs.createReadStream(filename)
  .pipe(es.split()) //defaults to lines.
  .pipe(es.parse())
```

## stringify

convert javascript objects into lines of text. The text will have whitespace escaped and have a `\n` appended, so it will be compatible with `es.parse`

``` js
objectStream
  .pipe(es.stringify())
  .pipe(fs.createWriteStream(filename))
```

## readable (asyncFunction) 

create a readable stream (that respects pause) from an async function.  
while the stream is not paused,  
the function will be polled with `(count, callback)`,  
and `this`  will be the readable stream.

``` js

es.readable(function (count, callback) {
  if(streamHasEnded)
    return this.emit('end')
  
  //...
  
  this.emit('data', data) //use this way to emit multiple chunks per call.
      
  callback() // you MUST always call the callback eventually.
             // the function will not be called again until you do this.
})
```
you can also pass the data and the error to the callback.  
you may only call the callback once.  
calling the same callback more than once will have no effect.  

## readArray (array)

Create a readable stream from an Array.

Just emit each item as a data event, respecting `pause` and `resume`.

``` js
  var es = require('event-stream')
    , reader = es.readArray([1,2,3])

  reader.pipe(...)
```

If you want the stream behave like a 0.10 stream you will need to wrap it using [`Readable.wrap()`](http://nodejs.org/api/stream.html#stream_readable_wrap_stream) function. Example:

``` js
	var s = new stream.Readable({objectMode: true}).wrap(es.readArray([1,2,3]));
```

## writeArray (callback)

create a writeable stream from a callback,  
all `data` events are stored in an array, which is passed to the callback when the stream ends.

``` js
  var es = require('event-stream')
    , reader = es.readArray([1, 2, 3])
    , writer = es.writeArray(function (err, array){
      //array deepEqual [1, 2, 3]
    })

  reader.pipe(writer)
```

## pause  () 

A stream that buffers all chunks when paused.


``` js
  var ps = es.pause()
  ps.pause() //buffer the stream, also do not allow 'end' 
  ps.resume() //allow chunks through
```

## duplex (writeStream, readStream)

Takes a writable stream and a readable stream and makes them appear as a readable writable stream.

It is assumed that the two streams are connected to each other in some way.  

(This is used by `pipeline` and `child`.)

``` js
  var grep = cp.exec('grep Stream')

  es.duplex(grep.stdin, grep.stdout)
```

## child (child_process)

Create a through stream from a child process ...

``` js
  var cp = require('child_process')

  es.child(cp.exec('grep Stream')) // a through stream

```

## wait (callback)

waits for stream to emit 'end'.
joins chunks of a stream into a single string or buffer. 
takes an optional callback, which will be passed the 
complete string/buffer when it receives the 'end' event.

also, emits a single 'data' event.

``` js

readStream.pipe(es.wait(function (err, body) {
  // have complete text here.
}))

```

# Other Stream Modules

These modules are not included as a part of *EventStream* but may be
useful when working with streams.

## [reduce (syncFunction, initial)](https://github.com/parshap/node-stream-reduce)

Like `Array.prototype.reduce` but for streams. Given a sync reduce
function and an initial value it will return a through stream that emits
a single data event with the reduced value once the input stream ends.

``` js
var reduce = require("stream-reduce");
process.stdin.pipe(reduce(function(acc, data) {
  return acc + data.length;
}, 0)).on("data", function(length) {
  console.log("stdin size:", length);
});
```

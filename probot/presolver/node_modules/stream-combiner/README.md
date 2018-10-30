# stream-combiner

[![npm version](https://img.shields.io/npm/v/stream-combiner.svg)](https://npmjs.org/package/stream-combiner) 
[![Travis CI](https://travis-ci.org/dominictarr/stream-combiner.svg)](https://travis-ci.org/dominictarr/stream-combiner)

## Combine (stream1,...,streamN)

Turn a pipeline into a single stream. `Combine` returns a stream that writes to the first stream
and reads from the last stream. 

Listening for 'error' will recieve errors from all streams inside the pipe.

```js
var Combine = require('stream-combiner')
var es      = require('event-stream')

Combine(                                  // connect streams together with `pipe`
  process.openStdin(),                    // open stdin
  es.split(),                             // split stream to break on newlines
  es.map(function (data, callback) {      // turn this async function into a stream
    var repr = util.inspect(JSON.parse(data))  // render it nicely
    callback(null, repr)
  }),
  process.stdout                          // pipe it to stdout !
)
```

Can also be called with an array:

```js
var combinedStream = Combine([
  stream1,
  stream2,
]);
```

Or to combine gulp plugins:

```js
function coffeePipe() {
  return Combine(
    coffeescript(),
    coffeelint.reporter('fail').on('error', function(){
      gutil.beep()
      gulp.run('lint')
    })
}

//usage:
gulp.src().pipe(coffeePipe());
```

## License

MIT

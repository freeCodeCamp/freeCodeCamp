# PauseStream

This is a `Stream` that will strictly buffer when paused.
Connect it to anything you need buffered.

``` js
  var ps = require('pause-stream')();

  badlyBehavedStream.pipe(ps.pause())

  aLittleLater(function (err, data) {
    ps.pipe(createAnotherStream(data))
    ps.resume()
  })
```

`PauseStream` will buffer whenever paused.
it will buffer when yau have called `pause` manually.
but also when it's downstream `dest.write()===false`.
it will attempt to drain the buffer when you call resume
or the downstream emits `'drain'`

`PauseStream` is tested using [stream-spec](https://github.com/dominictarr/stream-spec)
and [stream-tester](https://github.com/dominictarr/stream-tester)

This is now the default case of 
[through](https://github.com/dominictarr/through)

https://github.com/dominictarr/pause-stream/commit/4a6fe3dc2c11091b1efbfde912e0473719ed9cc0

# mute-stream

Bytes go in, but they don't come out (when muted).

This is a basic pass-through stream, but when muted, the bytes are
silently dropped, rather than being passed through.

## Usage

```javascript
var MuteStream = require('mute-stream')

var ms = new MuteStream(options)

ms.pipe(process.stdout)
ms.write('foo') // writes 'foo' to stdout
ms.mute()
ms.write('bar') // does not write 'bar'
ms.unmute()
ms.write('baz') // writes 'baz' to stdout

// can also be used to mute incoming data
var ms = new MuteStream
input.pipe(ms)

ms.on('data', function (c) {
  console.log('data: ' + c)
})

input.emit('data', 'foo') // logs 'foo'
ms.mute()
input.emit('data', 'bar') // does not log 'bar'
ms.unmute()
input.emit('data', 'baz') // logs 'baz'
```

## Options

All options are optional.

* `replace` Set to a string to replace each character with the
  specified string when muted.  (So you can show `****` instead of the
  password, for example.)

* `prompt` If you are using a replacement char, and also using a
  prompt with a readline stream (as for a `Password: *****` input),
  then specify what the prompt is so that backspace will work
  properly.  Otherwise, pressing backspace will overwrite the prompt
  with the replacement character, which is weird.

## ms.mute()

Set `muted` to `true`.  Turns `.write()` into a no-op.

## ms.unmute()

Set `muted` to `false`

## ms.isTTY

True if the pipe destination is a TTY, or if the incoming pipe source is
a TTY.

## Other stream methods...

The other standard readable and writable stream methods are all
available.  The MuteStream object acts as a facade to its pipe source
and destination.

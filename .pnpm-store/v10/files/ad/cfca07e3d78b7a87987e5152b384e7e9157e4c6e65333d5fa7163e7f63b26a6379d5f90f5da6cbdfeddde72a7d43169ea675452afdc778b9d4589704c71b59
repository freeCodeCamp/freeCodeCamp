# dezalgo

Contain async insanity so that the dark pony lord doesn't eat souls

See [this blog
post](http://blog.izs.me/post/59142742143/designing-apis-for-asynchrony).

## USAGE

Pass a callback to `dezalgo` and it will ensure that it is *always*
called in a future tick, and never in this tick.

```javascript
var dz = require('dezalgo')

var cache = {}
function maybeSync(arg, cb) {
  cb = dz(cb)

  // this will actually defer to nextTick
  if (cache[arg]) cb(null, cache[arg])

  fs.readFile(arg, function (er, data) {
    // since this is *already* defered, it will call immediately
    if (er) cb(er)
    cb(null, cache[arg] = data)
  })
}
```

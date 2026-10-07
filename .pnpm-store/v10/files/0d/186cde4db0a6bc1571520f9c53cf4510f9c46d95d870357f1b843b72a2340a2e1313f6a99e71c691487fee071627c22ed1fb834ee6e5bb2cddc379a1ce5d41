# inflight

Add callbacks to requests in flight to avoid async duplication

## USAGE

```javascript
var inflight = require('inflight')

// some request that does some stuff
function req(key, callback) {
  // key is any random string.  like a url or filename or whatever.
  //
  // will return either a falsey value, indicating that the
  // request for this key is already in flight, or a new callback
  // which when called will call all callbacks passed to inflightk
  // with the same key
  callback = inflight(key, callback)

  // If we got a falsey value back, then there's already a req going
  if (!callback) return

  // this is where you'd fetch the url or whatever
  // callback is also once()-ified, so it can safely be assigned
  // to multiple events etc.  First call wins.
  setTimeout(function() {
    callback(null, key)
  }, 100)
}

// only assigns a single setTimeout
// when it dings, all cbs get called
req('foo', cb1)
req('foo', cb2)
req('foo', cb3)
req('foo', cb4)
```

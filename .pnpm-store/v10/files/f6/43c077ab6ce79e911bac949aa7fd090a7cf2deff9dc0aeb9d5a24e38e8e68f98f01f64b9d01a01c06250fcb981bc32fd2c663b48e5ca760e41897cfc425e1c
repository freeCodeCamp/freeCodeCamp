# lock

lock asynchronous resources.

## Simple Example

``` js
var Lock = require('lock').Lock
var lock = Lock()

lock('key', function (release) { //called when resource is available.

  //do an async operation, and wrap the callback with release.
  someAsyncOperation(args,..., release(function (err) {
    //'key' is now unlocked!
  })
})
```

## Multiple Locks at Once.

``` js
var Lock = require('lock').Lock
var lock = Lock()

lock(['A', 'B', 'C'], function (release) { //called, when ALL
                                           //resources are available.

  //do an async operation, and wrap the callback with release(cb)
  someAsyncOperation(args,..., release(function (err) {
    //A, B & C are now unlocked!
  })
})
```

## Lock with optional callback.

``` js
var Lock = require('lock').Lock
var lock = Lock()

lock('cache', function(release) { //called when no one is writing to cache
	//we do not care if this fails since its a cache so no callback needed
	fs.writeFile(fileCache, ... , release())
})
```

used in [level-update](https://github.com/dominictarr/level-update)

## License

MIT


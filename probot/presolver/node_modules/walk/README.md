node-walk
====

nodejs walk implementation.

This is somewhat of a port python's `os.walk`, but using Node.JS conventions.

  * EventEmitter
  * Asynchronous
  * Chronological (optionally)
  * Built-in flow-control
  * includes Synchronous version (same API as Asynchronous)

As few file descriptors are opened at a time as possible.
This is particularly well suited for single hard disks which are not flash or solid state.

Installation
----

```bash
npm install --save walk
```

Getting Started
====

```javascript
(function () {
  "use strict";

  var walk = require('walk')
    , fs = require('fs')
    , walker
    ;

  walker = walk.walk("/tmp", options);

  walker.on("file", function (root, fileStats, next) {
    fs.readFile(fileStats.name, function () {
      // doStuff
      next();
    });
  });

  walker.on("errors", function (root, nodeStatsArray, next) {
    next();
  });

  walker.on("end", function () {
    console.log("all done");
  });
}());
```

Common Events
-----

All single event callbacks are in the form of `function (root, stat, next) {}`.

All multiple event callbacks callbacks are in the form of `function (root, stats, next) {}`, except **names** which is an array of strings.

All **error** event callbacks are in the form `function (root, stat/stats, next) {}`.
**`stat.error`** contains the error.

* `names`
* `directory`
* `directories`
* `file`
* `files`
* `end`
* `nodeError` (`stat` failed)
* `directoryError` (`stat` succedded, but `readdir` failed)
* `errors` (a collection of any errors encountered)


A typical `stat` event looks like this:

```javascript
{ dev: 16777223,
  mode: 33188,
  nlink: 1,
  uid: 501,
  gid: 20,
  rdev: 0,
  blksize: 4096,
  ino: 49868100,
  size: 5617,
  blocks: 16,
  atime: Mon Jan 05 2015 18:18:10 GMT-0700 (MST),
  mtime: Thu Sep 25 2014 21:21:28 GMT-0600 (MDT),
  ctime: Thu Sep 25 2014 21:21:28 GMT-0600 (MDT),
  birthtime: Thu Sep 25 2014 21:21:28 GMT-0600 (MDT),
  name: 'README.md',
  type: 'file' }
```

Advanced Example
====

Both Asynchronous and Synchronous versions are provided.

```javascript
(function () {
  "use strict";

  var walk = require('walk')
    , fs = require('fs')
    , options
    , walker
    ;

  options = {
    followLinks: false
    // directories with these keys will be skipped
  , filters: ["Temp", "_Temp"]
  };

  walker = walk.walk("/tmp", options);

  // OR
  // walker = walk.walkSync("/tmp", options);

  walker.on("names", function (root, nodeNamesArray) {
    nodeNamesArray.sort(function (a, b) {
      if (a > b) return 1;
      if (a < b) return -1;
      return 0;
    });
  });

  walker.on("directories", function (root, dirStatsArray, next) {
    // dirStatsArray is an array of `stat` objects with the additional attributes
    // * type
    // * error
    // * name
    
    next();
  });

  walker.on("file", function (root, fileStats, next) {
    fs.readFile(fileStats.name, function () {
      // doStuff
      next();
    });
  });

  walker.on("errors", function (root, nodeStatsArray, next) {
    next();
  });

  walker.on("end", function () {
    console.log("all done");
  });
}());
```

### Sync

Note: You **can't use EventEmitter** if you want truly synchronous walker
(although it's synchronous under the hood, it appears not to be due to the use of `process.nextTick()`).

Instead **you must use `options.listeners`** for truly synchronous walker.

Although the sync version uses all of the `fs.readSync`, `fs.readdirSync`, and other sync methods,
I don't think I can prevent the `process.nextTick()` that `EventEmitter` calls.

```javascript
(function () {
  "use strict";

  var walk = require('walk')
    , fs = require('fs')
    , options
    , walker
    ;

  // To be truly synchronous in the emitter and maintain a compatible api,
  // the listeners must be listed before the object is created
  options = {
    listeners: {
      names: function (root, nodeNamesArray) {
        nodeNamesArray.sort(function (a, b) {
          if (a > b) return 1;
          if (a < b) return -1;
          return 0;
        });
      }
    , directories: function (root, dirStatsArray, next) {
        // dirStatsArray is an array of `stat` objects with the additional attributes
        // * type
        // * error
        // * name
        
        next();
      }
    , file: function (root, fileStats, next) {
        fs.readFile(fileStats.name, function () {
          // doStuff
          next();
        });
      }
    , errors: function (root, nodeStatsArray, next) {
        next();
      }
    }
  };

  walker = walk.walkSync("/tmp", options);

  console.log("all done");
}());
```

API
====

Emitted Values

  * `on('XYZ', function(root, stats, next) {})`

  * `root` - the containing the files to be inspected
  * *stats[Array]* - a single `stats` object or an array with some added attributes
    * type - 'file', 'directory', etc
    * error
    * name - the name of the file, dir, etc 
  * next - no more files will be read until this is called

Single Events - fired immediately

  * `end` - No files, dirs, etc left to inspect

  * `directoryError` - Error when `fstat` succeeded, but reading path failed (Probably due to permissions).
  * `nodeError` - Error `fstat` did not succeeded.
  * `node` - a `stats` object for a node of any type
  * `file` - includes links when `followLinks` is `true`
  * `directory` - **NOTE** you could get a recursive loop if `followLinks` and a directory links to its parent
  * `symbolicLink` - always empty when `followLinks` is `true`
  * `blockDevice`
  * `characterDevice`
  * `FIFO`
  * `socket`

Events with Array Arguments - fired after all files in the dir have been `stat`ed

  * `names` - before any `stat` takes place. Useful for sorting and filtering.
    * Note: the array is an array of `string`s, not `stat` objects
    * Note: the `next` argument is a `noop`

  * `errors` - errors encountered by `fs.stat` when reading ndes in a directory
  * `nodes` - an array of `stats` of any type
  * `files`
  * `directories` - modification of this array - sorting, removing, etc - affects traversal
  * `symbolicLinks`
  * `blockDevices`
  * `characterDevices`
  * `FIFOs`
  * `sockets`

**Warning** beware of infinite loops when `followLinks` is true (using `walk-recurse` varient).

Comparisons
====

Tested on my `/System` containing 59,490 (+ self) directories (and lots of files).
The size of the text output was 6mb.

`find`:
    time bash -c "find /System -type d | wc"
    59491   97935 6262916

    real  2m27.114s
    user  0m1.193s
    sys 0m14.859s

`find.js`:

Note that `find.js` omits the start directory

    time bash -c "node examples/find.js /System -type d | wc"
    59490   97934 6262908
   
    # Test 1 
    real  2m52.273s
    user  0m20.374s
    sys 0m27.800s
    
    # Test 2
    real  2m23.725s
    user  0m18.019s
    sys 0m23.202s

    # Test 3
    real  2m50.077s
    user  0m17.661s
    sys 0m24.008s

In conclusion node.js asynchronous walk is much slower than regular "find".

LICENSE
===

`node-walk` is available under the following licenses:

  * MIT
  * Apache 2

Copyright 2011 - Present AJ ONeal

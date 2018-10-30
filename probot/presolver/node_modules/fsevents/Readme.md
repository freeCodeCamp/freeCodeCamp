# fsevents [![NPM](https://nodei.co/npm/fsevents.png)](https://nodei.co/npm/fsevents/)

Native access to OS X FSEvents in [Node.js](http://nodejs.org/)

The FSEvents API in OS X allows applications to register for notifications of
changes to a given directory tree. It is a very fast and lightweight alternative
to kqueue.

This is a low-level library. For a cross-compatible file watching module that
uses fsevents, check out [Chokidar](https://www.npmjs.com/package/chokidar).

* [Module Site & GitHub](https://github.com/strongloop/fsevents)
* [NPM Page](https://npmjs.org/package/fsevents)

## Installation

	$ npm install fsevents

## Usage

```js
var fsevents = require('fsevents');
var watcher = fsevents(__dirname);
watcher.on('fsevent', function(path, flags, id) { }); // RAW Event as emitted by OS-X
watcher.on('change', function(path, info) { }); // Common Event for all changes
watcher.start() // To start observation
watcher.stop()  // To end observation
```

### Events

 * *fsevent* - RAW Event as emitted by OS-X
 * *change* - Common Event for all changes
 * *created* - A File-System-Item has been created
 * *deleted* - A File-System-Item has been deleted
 * *modified* - A File-System-Item has been modified
 * *moved-out* - A File-System-Item has been moved away from this location
 * *moved-in* - A File-System-Item has been moved into this location

All events except *fsevent* take an *info* object as the second parameter of the callback. The structure of this object is:

```js
{
  "event": "<event-type>",
  "id": <eventi-id>,
  "path": "<path-that-this-is-about>",
  "type": "<file|directory|symlink>",
  "changes": {
    "inode": true, // Has the iNode Meta-Information changed
    "finder": false, // Has the Finder Meta-Data changed
    "access": false, // Have the access permissions changed
    "xattrs": false // Have the xAttributes changed
  },
  "flags": <raw-flags>
}
```

## MIT License

Copyright (C) 2010-2014 Philipp Dunkel

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

# browser-process-hrtime

Browser shim for Node.js process.hrtime().
See [documentation at nodejs.org](http://nodejs.org/api/process.html#process_process_hrtime)

### usage
Use hrtime independant of environment (node or browser).
It will use process.hrtime first and fallback if not present.
```js
var hrtime = require('browser-process-hrtime')
var start = hrtime()
// ...
var delta = hrtime(start)
```

### monkey-patching
You can monkey-patch process.hrtime for your dependency graph like this:
```js
process.hrtime = require('browser-process-hrtime')
var coolTool = require('module-that-uses-hrtime-somewhere-in-its-depths')
```

### note
This was originally pull-requested against [node-process](https://github.com/defunctzombie/node-process),
but they are trying to stay lean.

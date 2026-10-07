# browser-process-hrtime

Browser shim for Node.js `process.hrtime()`.
See [documentation at nodejs.org](http://nodejs.org/api/process.html#process_process_hrtime)

This module does not provide the same level of time precision as node.js, but provides a matching API and response format.

### usage
Use hrtime independent of environment (node or browser).
It will use `process.hrtime` first and fallback if not present.
```js
const hrtime = require('browser-process-hrtime')
const start = hrtime()
// ...
const delta = hrtime(start)
```

### monkey-patching
You can monkey-patch `process.hrtime` for your dependency graph like this:
```js
process.hrtime = require('browser-process-hrtime')
const coolTool = require('module-that-uses-hrtime-somewhere-in-its-depths')
```

### note
This was originally pull-requested against [node-process](https://github.com/defunctzombie/node-process),
but they are trying to stay lean.

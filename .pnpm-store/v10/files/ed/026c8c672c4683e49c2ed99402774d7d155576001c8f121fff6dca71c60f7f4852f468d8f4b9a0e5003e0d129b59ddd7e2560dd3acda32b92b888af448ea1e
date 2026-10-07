/**
Import a module while bypassing the cache.

@example
```
// foo.js
let i = 0;
module.exports = () => ++i;

// index.js
import importFresh = require('import-fresh');

require('./foo')();
//=> 1

require('./foo')();
//=> 2

importFresh('./foo')();
//=> 1

importFresh('./foo')();
//=> 1

const foo = importFresh<typeof import('./foo')>('./foo');
```
*/
declare function importFresh<T>(moduleId: string): T;

export = importFresh;

# `patchFs(vol[, fs])`

Rewrites Node's filesystem module `fs` with *fs-like* object.

 - `vol` - fs-like object
 - `fs` *(optional)* - a filesystem to patch, defaults to `require('fs')`

```js
import {patchFs} from 'fs-monkey';

const myfs = {
    readFileSync: () => 'hello world',
};

patchFs(myfs);
console.log(require('fs').readFileSync('/foo/bar')); // hello world
```

You don't need to create *fs-like* objects yourself, use [`memfs`](https://github.com/streamich/memfs)
to create a virtual filesystem for you:

```js
import {vol} from 'memfs';
import {patchFs} from 'fs-monkey';

vol.fromJSON({'/dir/foo': 'bar'});
patchFs(vol);
console.log(require('fs').readdirSync('/')); // [ 'dir' ]
```

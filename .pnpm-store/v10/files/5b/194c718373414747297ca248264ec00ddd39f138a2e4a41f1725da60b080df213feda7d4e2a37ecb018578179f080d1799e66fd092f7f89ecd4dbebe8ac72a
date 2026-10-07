# `patchRequire(vol[, unixifyPaths[, Module]])`

Patches Node's `module` module to use a given *fs-like* object `vol` for module loading.

 - `vol` - fs-like object
 - `unixifyPaths` *(optional)* - whether to convert Windows paths to unix style paths, defaults to `false`.
 - `Module` *(optional)* - a module to patch, defaults to `require('module')`

Monkey-patches the `require` function in Node, this way you can make
Node.js to *require* modules from your custom filesystem.

It expects an object with three filesystem methods implemented that are
needed for the `require` function to work.

```js
let vol = {
    readFileSync: () => {},
    realpathSync: () => {},
    statSync: () => {},
};
```

If you want to make Node.js to *require* your files from memory, you
don't need to implement those functions yourself, just use the
[`memfs`](https://github.com/streamich/memfs) package:

```js
import {vol} from 'memfs';
import {patchRequire} from 'fs-monkey';

vol.fromJSON({'/foo/bar.js': 'console.log("obi trice");'});
patchRequire(vol);
require('/foo/bar'); // obi trice
```

Now the `require` function will only load the files from the `vol` file
system, but not from the actual filesystem on the disk.

If you want the `require` function to load modules from both file
systems, use the [`unionfs`](https://github.com/streamich/unionfs) package
to combine both filesystems into a union:

```js
import {vol} from 'memfs';
import {patchRequire} from 'fs-monkey';
import {ufs} from 'unionfs';
import * as fs from 'fs';

vol.fromJSON({'/foo/bar.js': 'console.log("obi trice");'});
ufs
    .use(vol)
    .use(fs);
patchRequire(ufs);
require('/foo/bar.js'); // obi trice
```

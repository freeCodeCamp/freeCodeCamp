# memfs

[![][chat-badge]][chat] [![][npm-badge]][npm-url] [![][travis-badge]][travis-url]

In-memory file-system with [Node's `fs` API](https://nodejs.org/api/fs.html).

- Node's `fs` API implemented, see [_old API Status_](./docs/api-status.md), [missing list](https://github.com/streamich/memfs/issues/735), [missing `opendir`](https://github.com/streamich/memfs/issues/663)
- Stores files in memory, in `Buffer`s
- Throws sameish\* errors as Node.js
- Has concept of _i-nodes_
- Implements _hard links_
- Implements _soft links_ (aka symlinks, symbolic links)
- Permissions may\* be implemented in the future
- Can be used in browser, see [`memfs-webpack`](https://github.com/streamich/memfs-webpack)

### Install

```shell
npm install --save memfs
```

## Usage

```js
import { fs } from 'memfs';

fs.writeFileSync('/hello.txt', 'World!');
fs.readFileSync('/hello.txt', 'utf8'); // World!
```

Create a file system from a plain JSON:

```js
import { fs, vol } from 'memfs';

const json = {
  './README.md': '1',
  './src/index.js': '2',
  './node_modules/debug/index.js': '3',
};
vol.fromJSON(json, '/app');

fs.readFileSync('/app/README.md', 'utf8'); // 1
vol.readFileSync('/app/src/index.js', 'utf8'); // 2
```

Export to JSON:

```js
vol.writeFileSync('/script.sh', 'sudo rm -rf *');
vol.toJSON(); // {"/script.sh": "sudo rm -rf *"}
```

Use it for testing:

```js
vol.writeFileSync('/foo', 'bar');
expect(vol.toJSON()).toEqual({ '/foo': 'bar' });
```

Create as many filesystem volumes as you need:

```js
import { Volume } from 'memfs';

const vol = Volume.fromJSON({ '/foo': 'bar' });
vol.readFileSync('/foo'); // bar

const vol2 = Volume.fromJSON({ '/foo': 'bar 2' });
vol2.readFileSync('/foo'); // bar 2
```

Use `memfs` together with [`unionfs`][unionfs] to create one filesystem
from your in-memory volumes and the real disk filesystem:

```js
import * as fs from 'fs';
import { ufs } from 'unionfs';

ufs.use(fs).use(vol);

ufs.readFileSync('/foo'); // bar
```

Use [`fs-monkey`][fs-monkey] to monkey-patch Node's `require` function:

```js
import { patchRequire } from 'fs-monkey';

vol.writeFileSync('/index.js', 'console.log("hi world")');
patchRequire(vol);
require('/index'); // hi world
```

## Docs

- [Reference](./docs/reference.md)
- [Relative paths](./docs/relative-paths.md)
- [API status](./docs/api-status.md)
- [Dependencies](./docs/dependencies.md)

## See also

- [`spyfs`][spyfs] - spies on filesystem actions
- [`unionfs`][unionfs] - creates a union of multiple filesystem volumes
- [`linkfs`][linkfs] - redirects filesystem paths
- [`fs-monkey`][fs-monkey] - monkey-patches Node's `fs` module and `require` function
- [`libfs`](https://github.com/streamich/full-js/blob/master/src/lib/fs.ts) - real filesystem (that executes UNIX system calls) implemented in JavaScript

[chat]: https://onp4.com/@vadim/~memfs
[chat-badge]: https://img.shields.io/badge/Chat-%F0%9F%92%AC-green?style=flat&logo=chat&link=https://onp4.com/@vadim/~memfs
[npm-url]: https://www.npmjs.com/package/memfs
[npm-badge]: https://img.shields.io/npm/v/memfs.svg
[travis-url]: https://travis-ci.org/streamich/memfs
[travis-badge]: https://travis-ci.org/streamich/memfs.svg?branch=master
[memfs]: https://github.com/streamich/memfs
[unionfs]: https://github.com/streamich/unionfs
[linkfs]: https://github.com/streamich/linkfs
[spyfs]: https://github.com/streamich/spyfs
[fs-monkey]: https://github.com/streamich/fs-monkey

## License

[Unlicense](./LICENSE) - public domain.

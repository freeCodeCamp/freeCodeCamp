# linkfs

Redirects filesystem paths.

[![][npm-img]][npm-url] [![][travis-badge]][travis-url]

    npm install --save linkfs

```js
import {link} from 'linkfs';
import {fs} from 'memfs';

fs.writeFileSync('/foo', 'bar');
const lfs = link(fs, ['/foo2', '/foo']);
console.log(lfs.readFileSync('/foo2', 'utf8')); // bar
```

# Reference

### `link(fs, rewrites)`

Returns a new *fs-like* object with redirected file paths.

`fs` is the source *fs-like* object.

`rewrites` is a 2-tuple or an array of 2-tuples, where each 2-tuple
has a form of `[from, to]`. `from` is the new, *virtual* path; and `to`
is an existing path in the `fs` filesystem.

```js
const lfs = link(fs, ['/foo', '/bar']);
```

or

```js
const lfs = link(fs, [
    ['/foo1', '/bar1'],
    ['/foo2', '/bar2'],
    ['/foo3', '/bar3'],
]);
```

[npm-url]: https://www.npmjs.com/package/linkfs
[npm-img]: https://img.shields.io/npm/v/linkfs.svg
[memfs]: https://github.com/streamich/memfs
[unionfs]: https://github.com/streamich/unionfs
[linkfs]: https://github.com/streamich/linkfs
[fs-monkey]: https://github.com/streamich/fs-monkey
[travis-url]: https://travis-ci.org/streamich/linkfs
[travis-badge]: https://travis-ci.org/streamich/linkfs.svg?branch=master



# License

[Unlicense](./LICENSE) - public domain.

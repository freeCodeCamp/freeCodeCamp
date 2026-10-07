# fs-monkey

[![][npm-img]][npm-url] [![][travis-badge]][travis-url]

Monkey-patches for filesystem related things.

  - Rewrite `require` function to load Node's modules from memory.
  - Or rewrite the whole `fs` filesystem module.

## Install

```shell
npm install --save fs-monkey
```

## Terms

An *fs-like* object is an object that implements methods of Node's
[filesystem API](https://nodejs.org/api/fs.html).
It is denoted as `vol`:

```js
let vol = {
    readFile: () => { /* ... */ },
    readFileSync: () => { /* ... */ },
    // etc...
}
```


## Reference

 - [`patchFs`](./docs/api/patchFs.md) - rewrites Node's filesystem module `fs` with *fs-like* object `vol`
 - [`patchRequire`](./docs/api/patchRequire.md) - rewrites `require` function, patches Node's `module` module to use a given *fs-like* object for module loading


[npm-img]: https://img.shields.io/npm/v/fs-monkey.svg
[npm-url]: https://www.npmjs.com/package/fs-monkey
[travis-url]: https://travis-ci.org/streamich/fs-monkey
[travis-badge]: https://travis-ci.org/streamich/fs-monkey.svg?branch=master


## License

[Unlicense](./LICENSE) - public domain.

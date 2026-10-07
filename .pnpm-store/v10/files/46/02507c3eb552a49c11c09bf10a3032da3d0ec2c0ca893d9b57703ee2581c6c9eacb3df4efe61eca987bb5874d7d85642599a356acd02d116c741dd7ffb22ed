<p align="center">
  <a href="http://gulpjs.com">
    <img height="257" width="114" src="https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png">
  </a>
</p>

# rechoir

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Travis Build Status][travis-image]][travis-url] [![AppVeyor Build Status][appveyor-image]][appveyor-url] [![Coveralls Status][coveralls-image]][coveralls-url] [![Gitter chat][gitter-image]][gitter-url]

Prepare a node environment to require files with different extensions.

## What is it?

This module, in conjunction with [interpret]-like objects, can register any filetype the npm ecosystem has a module loader for. This library is a dependency of [Liftoff].

**Note:** While `rechoir` will automatically load and register transpilers like `coffee-script`, you must provide a local installation. The transpilers are **not** bundled with this module.


## rechoir for enterprise

Available as part of the Tidelift Subscription

The maintainers of rechoir and thousands of other packages are working with Tidelift to deliver commercial support and maintenance for the open source dependencies you use to build your applications. Save time, reduce risk, and improve code health, while paying the maintainers of the exact dependencies you use. [Learn more.](https://tidelift.com/subscription/pkg/npm-rechoir?utm_source=npm-rechoir&utm_medium=referral&utm_campaign=enterprise&utm_term=repo)


## Usage

```js
const config = require('interpret').extensions;
const rechoir = require('rechoir');
rechoir.prepare(config, './test/fixtures/test.coffee');
rechoir.prepare(config, './test/fixtures/test.csv');
rechoir.prepare(config, './test/fixtures/test.toml');

console.log(require('./test/fixtures/test.coffee'));
console.log(require('./test/fixtures/test.csv'));
console.log(require('./test/fixtures/test.toml'));
```

## API

### `prepare(config, filepath, [cwd], [noThrow])`

Look for a module loader associated with the provided file and attempt require it.  If necessary, run any setup required to inject it into [require.extensions](http://nodejs.org/api/globals.html#globals_require_extensions).

`config` An [interpret]-like configuration object.

`filepath` A file whose type you'd like to register a module loader for.

`cwd` An optional path to start searching for the module required to load the requested file.  Defaults to the directory of `filepath`.

`noThrow` An optional boolean indicating if the method should avoid throwing.

If calling this method is successful (e.g. it doesn't throw), you can now require files of the type you requested natively.

An error with a `failures` property will be thrown if the module loader(s) configured for a given extension cannot be registered.

If a loader is already registered, this will simply return `true`.

## License

MIT

[interpret]: http://github.com/gulpjs/interpret
[Liftoff]: http://github.com/gulpjs/liftoff

[downloads-image]: http://img.shields.io/npm/dm/rechoir.svg
[npm-url]: https://www.npmjs.com/package/rechoir
[npm-image]: http://img.shields.io/npm/v/rechoir.svg

[travis-url]: https://travis-ci.org/gulpjs/rechoir
[travis-image]: http://img.shields.io/travis/gulpjs/rechoir.svg?label=travis-ci

[appveyor-url]: https://ci.appveyor.com/project/gulpjs/rechoir
[appveyor-image]: https://img.shields.io/appveyor/ci/gulpjs/rechoir.svg?label=appveyor

[coveralls-url]: https://coveralls.io/r/gulpjs/rechoir
[coveralls-image]: http://img.shields.io/coveralls/gulpjs/rechoir/master.svg

[gitter-url]: https://gitter.im/gulpjs/gulp
[gitter-image]: https://badges.gitter.im/gulpjs/gulp.svg


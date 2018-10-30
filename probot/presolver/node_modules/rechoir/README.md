# rechoir [![Build Status](https://secure.travis-ci.org/tkellen/js-rechoir.png)](http://travis-ci.org/tkellen/js-rechoir)
> Require any supported file as a node module.

[![NPM](https://nodei.co/npm/rechoir.png)](https://nodei.co/npm/rechoir/)

## What is it?
This module, in conjunction with [interpret]-like objects can register any file type the npm ecosystem has a module loader for. This library is a dependency of [Liftoff].

## API

### prepare(config, filepath, requireFrom)
Look for a module loader associated with the provided file and attempt require it.  If necessary, run any setup required to inject it into [require.extensions](http://nodejs.org/api/globals.html#globals_require_extensions).

`config` An [interpret]-like configuration object.  

`filepath` A file whose type you'd like to register a module loader for.

`requireFrom` An optional path to start searching for the module required to load the requested file.  Defaults to the directory of `filepath`.

If calling this method is successful (aka: it doesn't throw), you can now require files of the type you requested natively.

An error with a `failures` property will be thrown if the module loader(s) configured for a given extension cannot be registered.

If a loader is already registered, this will simply return `true`.

**Note:** While rechoir will automatically load and register transpilers like `coffee-script`, you must provide a local installation. The transpilers are **not** bundled with this module.

#### Usage
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

[interpret]: http://github.com/tkellen/js-interpret
[Liftoff]: http://github.com/tkellen/js-liftoff

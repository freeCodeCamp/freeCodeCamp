# cross-spawn

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Build status][appveyor-image]][appveyor-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]

[npm-url]:https://npmjs.org/package/cross-spawn
[downloads-image]:http://img.shields.io/npm/dm/cross-spawn.svg
[npm-image]:http://img.shields.io/npm/v/cross-spawn.svg
[travis-url]:https://travis-ci.org/IndigoUnited/node-cross-spawn
[travis-image]:http://img.shields.io/travis/IndigoUnited/node-cross-spawn/master.svg
[appveyor-url]:https://ci.appveyor.com/project/satazor/node-cross-spawn
[appveyor-image]:https://img.shields.io/appveyor/ci/satazor/node-cross-spawn/master.svg
[david-dm-url]:https://david-dm.org/IndigoUnited/node-cross-spawn
[david-dm-image]:https://img.shields.io/david/IndigoUnited/node-cross-spawn.svg
[david-dm-dev-url]:https://david-dm.org/IndigoUnited/node-cross-spawn#info=devDependencies
[david-dm-dev-image]:https://img.shields.io/david/dev/IndigoUnited/node-cross-spawn.svg

A cross platform solution to node's spawn and spawnSync.


## Installation

`$ npm install cross-spawn`

If you are using `spawnSync` on node 0.10 or older, you will also need to install `spawn-sync`:

`$ npm install spawn-sync`


## Why

Node has issues when using spawn on Windows:

- It ignores [PATHEXT](https://github.com/joyent/node/issues/2318)
- It does not support [shebangs](http://pt.wikipedia.org/wiki/Shebang)
- No `options.shell` support on node < v6
- It does not allow you to run `del` or `dir`

All these issues are handled correctly by `cross-spawn`.
There are some known modules, such as [win-spawn](https://github.com/ForbesLindesay/win-spawn), that try to solve this but they are either broken or provide faulty escaping of shell arguments.


## Usage

Exactly the same way as node's [`spawn`](https://nodejs.org/api/child_process.html#child_process_child_process_spawn_command_args_options) or [`spawnSync`](https://nodejs.org/api/child_process.html#child_process_child_process_spawnsync_command_args_options), so it's a drop in replacement.


```js
var spawn = require('cross-spawn');

// Spawn NPM asynchronously
var child = spawn('npm', ['list', '-g', '-depth', '0'], { stdio: 'inherit' });

// Spawn NPM synchronously
var results = spawn.sync('npm', ['list', '-g', '-depth', '0'], { stdio: 'inherit' });
```


## Caveats

#### `options.shell` as an alternative to `cross-spawn`

Starting from node v6, `spawn` has a `shell` option that allows you run commands from within a shell. This new option solves most of the problems that `cross-spawn` attempts to solve, but:

- It's not supported in node < v6
- It has no support for shebangs on Windows
- You must manually escape the command and arguments which is very error prone, specially when passing user input

If you are using the `shell` option to spawn a command in a cross platform way, consider using `cross-spawn` instead. You have been warned.


#### Shebangs

While `cross-spawn` handles shebangs on Windows, its support is limited: e.g.: it doesn't handle arguments after the path, e.g.: `#!/bin/bash -e`.

Remember to always test your code on Windows!


## Tests

`$ npm test`


## License

Released under the [MIT License](http://www.opensource.org/licenses/mit-license.php).

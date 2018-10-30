# which-module

> Find the module object for something that was require()d

[![Build Status](https://travis-ci.org/nexdrew/which-module.svg?branch=master)](https://travis-ci.org/nexdrew/which-module)
[![Coverage Status](https://coveralls.io/repos/github/nexdrew/which-module/badge.svg?branch=master)](https://coveralls.io/github/nexdrew/which-module?branch=master)
[![Standard Version](https://img.shields.io/badge/release-standard%20version-brightgreen.svg)](https://github.com/conventional-changelog/standard-version)

Find the `module` object in `require.cache` for something that was `require()`d
or `import`ed - essentially a reverse `require()` lookup.

Useful for libs that want to e.g. lookup a filename for a module or submodule
that it did not `require()` itself.

## Install and Usage

```
npm install --save which-module
```

```js
const whichModule = require('which-module')

console.log(whichModule(require('something')))
// Module {
//   id: '/path/to/project/node_modules/something/index.js',
//   exports: [Function],
//   parent: ...,
//   filename: '/path/to/project/node_modules/something/index.js',
//   loaded: true,
//   children: [],
//   paths: [ '/path/to/project/node_modules/something/node_modules',
//            '/path/to/project/node_modules',
//            '/path/to/node_modules',
//            '/path/node_modules',
//            '/node_modules' ] }
```

## API

### `whichModule(exported)`

Return the [`module` object](https://nodejs.org/api/modules.html#modules_the_module_object),
if any, that represents the given argument in the `require.cache`.

`exported` can be anything that was previously `require()`d or `import`ed as a
module, submodule, or dependency - which means `exported` is identical to the
`module.exports` returned by this method.

If `exported` did not come from the `exports` of a `module` in `require.cache`,
then this method returns `null`.

## License

ISC © Contributors

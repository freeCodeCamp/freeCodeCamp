<p align="center">
  <a href="http://gulpjs.com">
    <img height="257" width="114" src="https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png">
  </a>
</p>

# interpret

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Travis Build Status][travis-image]][travis-url] [![AppVeyor Build Status][appveyor-image]][appveyor-url] [![Coveralls Status][coveralls-image]][coveralls-url] [![Gitter chat][gitter-image]][gitter-url]

A dictionary of file extensions and associated module loaders.

## What is it
This is used by [Liftoff](http://github.com/tkellen/node-liftoff) to automatically require dependencies for configuration files, and by [rechoir](http://github.com/tkellen/node-rechoir) for registering module loaders.

## interpret for enterprise

Available as part of the Tidelift Subscription

The maintainers of interpret and thousands of other packages are working with Tidelift to deliver commercial support and maintenance for the open source dependencies you use to build your applications. Save time, reduce risk, and improve code health, while paying the maintainers of the exact dependencies you use. [Learn more.](https://tidelift.com/subscription/pkg/npm-interpret?utm_source=npm-interpret&utm_medium=referral&utm_campaign=enterprise&utm_term=repo)

## API

### extensions
Map file types to modules which provide a [require.extensions] loader.

```js
{
  '.babel.js': [
    {
      module: '@babel/register',
      register: function(hook) {
        hook({
          extensions: '.js',
          rootMode: 'upward-optional',
          ignore: [ignoreNonBabelAndNodeModules],
        });
      },
    },
    {
      module: 'babel-register',
      register: function(hook) {
        hook({
          extensions: '.js',
          ignore: ignoreNonBabelAndNodeModules,
        });
      },
    },
    {
      module: 'babel-core/register',
      register: function(hook) {
        hook({
          extensions: '.js',
          ignore: ignoreNonBabelAndNodeModules,
        });
      },
    },
    {
      module: 'babel/register',
      register: function(hook) {
        hook({
          extensions: '.js',
          ignore: ignoreNonBabelAndNodeModules,
        });
      },
    },
  ],
  '.babel.ts': [
    {
      module: '@babel/register',
      register: function(hook) {
        hook({
          extensions: '.ts',
          rootMode: 'upward-optional',
          ignore: [ignoreNonBabelAndNodeModules],
        });
      },
    },
  ],
  '.buble.js': 'buble/register',
  '.cirru': 'cirru-script/lib/register',
  '.cjsx': 'node-cjsx/register',
  '.co': 'coco',
  '.coffee': ['coffeescript/register', 'coffee-script/register', 'coffeescript', 'coffee-script'],
  '.coffee.md': ['coffeescript/register', 'coffee-script/register', 'coffeescript', 'coffee-script'],
  '.csv': 'require-csv',
  '.eg': 'earlgrey/register',
  '.esm.js': {
    module: 'esm',
    register: function(hook) {
      // register on .js extension due to https://github.com/joyent/node/blob/v0.12.0/lib/module.js#L353
      // which only captures the final extension (.babel.js -> .js)
      var esmLoader = hook(module);
      require.extensions['.js'] = esmLoader('module')._extensions['.js'];
    },
  },
  '.iced': ['iced-coffee-script/register', 'iced-coffee-script'],
  '.iced.md': 'iced-coffee-script/register',
  '.ini': 'require-ini',
  '.js': null,
  '.json': null,
  '.json5': ['json5/lib/register', 'json5/lib/require'],
  '.jsx': [
    {
      module: '@babel/register',
      register: function(hook) {
        hook({
          extensions: '.jsx',
          rootMode: 'upward-optional',
          ignore: [ignoreNonBabelAndNodeModules],
        });
      },
    },
    {
      module: 'babel-register',
      register: function(hook) {
        hook({
          extensions: '.jsx',
          ignore: ignoreNonBabelAndNodeModules,
        });
      },
    },
    {
      module: 'babel-core/register',
      register: function(hook) {
        hook({
          extensions: '.jsx',
          ignore: ignoreNonBabelAndNodeModules,
        });
      },
    },
    {
      module: 'babel/register',
      register: function(hook) {
        hook({
          extensions: '.jsx',
          ignore: ignoreNonBabelAndNodeModules,
        });
      },
    },
    {
      module: 'node-jsx',
      register: function(hook) {
        hook.install({ extension: '.jsx', harmony: true });
      },
    },
  ],
  '.litcoffee': ['coffeescript/register', 'coffee-script/register', 'coffeescript', 'coffee-script'],
  '.liticed': 'iced-coffee-script/register',
  '.ls': ['livescript', 'LiveScript'],
  '.mjs': '/absolute/path/to/interpret/mjs-stub.js',
  '.node': null,
  '.toml': {
    module: 'toml-require',
    register: function(hook) {
      hook.install();
    },
  },
  '.ts': [
    'ts-node/register',
    'typescript-node/register',
    'typescript-register',
    'typescript-require',
    'sucrase/register/ts',
    {
      module: '@babel/register',
      register: function(hook) {
        hook({
          extensions: '.ts',
          rootMode: 'upward-optional',
          ignore: [ignoreNonBabelAndNodeModules],
        });
      },
    },
  ],
  '.tsx': [
    'ts-node/register',
    'typescript-node/register',
    'sucrase/register',
    {
      module: '@babel/register',
      register: function(hook) {
        hook({
          extensions: '.tsx',
          rootMode: 'upward-optional',
          ignore: [ignoreNonBabelAndNodeModules],
        });
      },
    },
  ],
  '.wisp': 'wisp/engine/node',
  '.xml': 'require-xml',
  '.yaml': 'require-yaml',
  '.yml': 'require-yaml',
}
```

### jsVariants
Same as above, but only include the extensions which are javascript variants.

## How to use it

Consumers should use the exported `extensions` or `jsVariants` object to determine which module should be loaded for a given extension. If a matching extension is found, consumers should do the following:

1. If the value is null, do nothing.

2. If the value is a string, try to require it.

3. If the value is an object, try to require the `module` property. If successful, the `register` property (a function) should be called with the module passed as the first argument.

4. If the value is an array, iterate over it, attempting step #2 or #3 until one of the attempts does not throw.

[require.extensions]: http://nodejs.org/api/globals.html#globals_require_extensions

[downloads-image]: http://img.shields.io/npm/dm/interpret.svg
[npm-url]: https://www.npmjs.com/package/interpret
[npm-image]: http://img.shields.io/npm/v/interpret.svg

[travis-url]: https://travis-ci.org/gulpjs/interpret
[travis-image]: http://img.shields.io/travis/gulpjs/interpret.svg?label=travis-ci

[appveyor-url]: https://ci.appveyor.com/project/gulpjs/interpret
[appveyor-image]: https://img.shields.io/appveyor/ci/gulpjs/interpret.svg?label=appveyor

[coveralls-url]: https://coveralls.io/r/gulpjs/interpret
[coveralls-image]: http://img.shields.io/coveralls/gulpjs/interpret/master.svg

[gitter-url]: https://gitter.im/gulpjs/gulp
[gitter-image]: https://badges.gitter.im/gulpjs/gulp.svg

# node-fileset [![Build Status](https://secure.travis-ci.org/mklabs/node-fileset.png)](http://travis-ci.org/mklabs/node-fileset)

Exposes a basic wrapper on top of
[Glob](https://github.com/isaacs/node-glob) /
[minimatch](https://github.com/isaacs/minimatch) combo both written by
@isaacs. Glob now uses JavaScript instead of C++ bindings which makes it
usable in Node.js 0.6.x and Windows platforms.

[![NPM](https://nodei.co/npm/fileset.png?downloads=true&stars=true)](https://nodei.co/npm/fileset/)

Adds multiples patterns matching and exlude ability. This is
basically just a sugar API syntax where you can specify a list of includes
and optional exclude patterns. It works by setting up the necessary
miniglob "fileset" and filtering out the results using minimatch.

*[Changelog](https://github.com/mklabs/node-fileset/blob/master/CHANGELOG.md#changelog)*

## Install

    npm install fileset

## Usage

Can be used with callback or emitter style.

* **include**: list of glob patterns `foo/**/*.js *.md src/lib/**/*`
* **exclude**: *optional* list of glob patterns to filter include
  results `foo/**/*.js *.md`
* **callback**: *optional* function that gets called with an error if
  something wrong happend, otherwise null with an array of results

The callback is optional since the fileset method return an instance of
EventEmitter which emit different events you might use:

* *match*: Every time a match is found, miniglob emits this event with
  the pattern.
* *include*: Emitted each time an include match is found.
* *exclude*: Emitted each time an exclude match is found and filtered
  out from the fileset.
* *end*:  Emitted when the matching is finished with all the matches
  found, optionally filtered by the exclude patterns.

#### Callback

```js
var fileset = require('fileset');

fileset('**/*.js', '**.min.js', function(err, files) {
  if (err) return console.error(err);

  console.log('Files: ', files.length);
  console.log(files);
});
```

#### Event emitter

```js
var fileset = require('fileset');

fileset('**.coffee README.md *.json Cakefile **.js', 'node_modules/**')
  .on('match', console.log.bind(console, 'error'))
  .on('include', console.log.bind(console, 'includes'))
  .on('exclude', console.log.bind(console, 'excludes'))
  .on('end', console.log.bind(console, 'end'));
```

`fileset` returns an instance of EventEmitter, with an `includes` property
which is the array of Fileset objects (inheriting from
`miniglob.Miniglob`) that were used during the mathing process, should
you want to use them individually.

Check out the
[tests](https://github.com/mklabs/node-fileset/tree/master/tests) for
more examples.

## Sync usage

```js
var results = fileset.sync('*.md *.js', 'CHANGELOG.md node_modules/**/*.md node_modules/**/*.js');
```

The behavior should remain the same, although it lacks the last `options` arguments to pass to internal `glob` and `minimatch` dependencies.

## Tests

Run `npm test`

## Why

Mainly for a build tool with cake files, to provide me an easy way to get
a list of files by either using glob or path patterns, optionally
allowing exclude patterns to filter out the results.

All the magic is happening in
[Glob](https://github.com/isaacs/node-glob) and
[minimatch](https://github.com/isaacs/minimatch). Check them out!

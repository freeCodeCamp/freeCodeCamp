[![Join the chat at https://gitter.im/moment/moment](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/moment/moment?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

[![NPM version][npm-version-image]][npm-url] [![NPM downloads][npm-downloads-image]][npm-url] [![MIT License][license-image]][license-url] [![Build Status][travis-image]][travis-url]
[![Coverage Status](https://coveralls.io/repos/moment/moment/badge.svg?branch=master)](https://coveralls.io/r/moment/moment?branch=master)

A lightweight JavaScript date library for parsing, validating, manipulating, and formatting dates.

## [Documentation](http://momentjs.com/docs/)

## Port to ES6 (version 2.10.0)

Moment 2.10.0 does not bring any new features, but the code is now written in
es6 modules and placed inside `src/`. Previously `moment.js`, `locale/*.js` and
`test/moment/*.js`, `test/locale/*.js` contained the source of the project. Now
the source is in `src/`, temporary build (es5) files are placed under
`build/umd/` (for running tests during development), and the `moment.js` and
`locale/*.js` files are updated only on release.

If you want to use a particular revision of the code, make sure to run
`grunt transpile update-index`, so `moment.js` and `locales/*.js` are synced
with `src/*`. We might place that in a commit hook in the future.

## Upgrading to 2.0.0

There are a number of small backwards incompatible changes with version 2.0.0. [See the full descriptions here](https://gist.github.com/timrwood/e72f2eef320ed9e37c51#backwards-incompatible-changes)

 * Changed language ordinal method to return the number + ordinal instead of just the ordinal.

 * Changed two digit year parsing cutoff to match strptime.

 * Removed `moment#sod` and `moment#eod` in favor of `moment#startOf` and `moment#endOf`.

 * Removed `moment.humanizeDuration()` in favor of `moment.duration().humanize()`.

 * Removed the lang data objects from the top level namespace.

 * Duplicate `Date` passed to `moment()` instead of referencing it.

## [Changelog](https://github.com/moment/moment/blob/develop/CHANGELOG.md)

## [Contributing](https://github.com/moment/moment/blob/develop/CONTRIBUTING.md)

We're looking for co-maintainers! If you want to become a master of time please
write to [ichernev](https://github.com/ichernev).

## License

Moment.js is freely distributable under the terms of the [MIT license](https://github.com/moment/moment/blob/develop/LICENSE).

[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE

[npm-url]: https://npmjs.org/package/moment
[npm-version-image]: http://img.shields.io/npm/v/moment.svg?style=flat
[npm-downloads-image]: http://img.shields.io/npm/dm/moment.svg?style=flat

[travis-url]: http://travis-ci.org/moment/moment
[travis-image]: http://img.shields.io/travis/moment/moment/develop.svg?style=flat

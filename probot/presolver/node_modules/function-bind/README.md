# function-bind

<!--
    [![build status][travis-svg]][travis-url]
    [![NPM version][npm-badge-svg]][npm-url]
    [![Coverage Status][5]][6]
    [![gemnasium Dependency Status][7]][8]
    [![Dependency status][deps-svg]][deps-url]
    [![Dev Dependency status][dev-deps-svg]][dev-deps-url]
-->

<!-- [![browser support][11]][12] -->

Implementation of function.prototype.bind

## Example

I mainly do this for unit tests I run on phantomjs.
PhantomJS does not have Function.prototype.bind :(

```js
Function.prototype.bind = require("function-bind")
```

## Installation

`npm install function-bind`

## Contributors

 - Raynos

## MIT Licenced

  [travis-svg]: https://travis-ci.org/Raynos/function-bind.svg
  [travis-url]: https://travis-ci.org/Raynos/function-bind
  [npm-badge-svg]: https://badge.fury.io/js/function-bind.svg
  [npm-url]: https://npmjs.org/package/function-bind
  [5]: https://coveralls.io/repos/Raynos/function-bind/badge.png
  [6]: https://coveralls.io/r/Raynos/function-bind
  [7]: https://gemnasium.com/Raynos/function-bind.png
  [8]: https://gemnasium.com/Raynos/function-bind
  [deps-svg]: https://david-dm.org/Raynos/function-bind.svg
  [deps-url]: https://david-dm.org/Raynos/function-bind
  [dev-deps-svg]: https://david-dm.org/Raynos/function-bind/dev-status.svg
  [dev-deps-url]: https://david-dm.org/Raynos/function-bind#info=devDependencies
  [11]: https://ci.testling.com/Raynos/function-bind.png
  [12]: https://ci.testling.com/Raynos/function-bind

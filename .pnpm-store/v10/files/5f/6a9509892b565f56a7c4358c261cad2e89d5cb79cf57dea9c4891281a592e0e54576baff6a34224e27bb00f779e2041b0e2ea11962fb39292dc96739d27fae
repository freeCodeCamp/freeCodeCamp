# object-inspect <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

string representations of objects in node and the browser

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

# example

## circular

``` js
var inspect = require('object-inspect');
var obj = { a: 1, b: [3,4] };
obj.c = obj;
console.log(inspect(obj));
```

## dom element

``` js
var inspect = require('object-inspect');

var d = document.createElement('div');
d.setAttribute('id', 'beep');
d.innerHTML = '<b>wooo</b><i>iiiii</i>';

console.log(inspect([ d, { a: 3, b : 4, c: [5,6,[7,[8,[9]]]] } ]));
```

output:

```
[ <div id="beep">...</div>, { a: 3, b: 4, c: [ 5, 6, [ 7, [ 8, [ ... ] ] ] ] } ]
```

# methods

``` js
var inspect = require('object-inspect')
```

## var s = inspect(obj, opts={})

Return a string `s` with the string representation of `obj` up to a depth of `opts.depth`.

Additional options:
  - `quoteStyle`: must be "single" or "double", if present. Default `'single'` for strings, `'double'` for HTML elements.
  - `maxStringLength`: must be `0`, a positive integer, `Infinity`, or `null`, if present. Default `Infinity`.
  - `customInspect`: When `true`, a custom inspect method function will be invoked (either undere the `util.inspect.custom` symbol, or the `inspect` property). When the string `'symbol'`, only the symbol method will be invoked. Default `true`.
  - `indent`: must be "\t", `null`, or a positive integer. Default `null`.
  - `numericSeparator`: must be a boolean, if present. Default `false`. If `true`, all numbers will be printed with numeric separators (eg, `1234.5678` will be printed as `'1_234.567_8'`)

# install

With [npm](https://npmjs.org) do:

```
npm install object-inspect
```

# license

MIT

[package-url]: https://npmjs.org/package/object-inspect
[npm-version-svg]: https://versionbadg.es/inspect-js/object-inspect.svg
[deps-svg]: https://david-dm.org/inspect-js/object-inspect.svg
[deps-url]: https://david-dm.org/inspect-js/object-inspect
[dev-deps-svg]: https://david-dm.org/inspect-js/object-inspect/dev-status.svg
[dev-deps-url]: https://david-dm.org/inspect-js/object-inspect#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/object-inspect.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/object-inspect.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/object-inspect.svg
[downloads-url]: https://npm-stat.com/charts.html?package=object-inspect
[codecov-image]: https://codecov.io/gh/inspect-js/object-inspect/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/inspect-js/object-inspect/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/inspect-js/object-inspect
[actions-url]: https://github.com/inspect-js/object-inspect/actions

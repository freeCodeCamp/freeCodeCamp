# Merge Descriptors

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Build Status][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]

Merge objects using descriptors.

```js
var thing = {
  get name() {
    return 'jon'
  }
}

var animal = {

}

merge(animal, thing)

animal.name === 'jon'
```

## API

### merge(destination, source)

Redefines `destination`'s descriptors with `source`'s.

### merge(destination, source, false)

Defines `source`'s descriptors on `destination` if `destination` does not have
a descriptor by the same name.

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/merge-descriptors.svg
[npm-url]: https://npmjs.org/package/merge-descriptors
[travis-image]: https://img.shields.io/travis/component/merge-descriptors/master.svg
[travis-url]: https://travis-ci.org/component/merge-descriptors
[coveralls-image]: https://img.shields.io/coveralls/component/merge-descriptors/master.svg
[coveralls-url]: https://coveralls.io/r/component/merge-descriptors?branch=master
[downloads-image]: https://img.shields.io/npm/dm/merge-descriptors.svg
[downloads-url]: https://npmjs.org/package/merge-descriptors

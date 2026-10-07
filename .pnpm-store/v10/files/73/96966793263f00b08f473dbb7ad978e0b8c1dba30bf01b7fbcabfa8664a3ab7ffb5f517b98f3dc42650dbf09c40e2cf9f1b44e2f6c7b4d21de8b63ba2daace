[![logo][logo-image]][logo-url]

---

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![npm download][download-image]][download-url]

[logo-image]: ./logo.png
[logo-url]: https://npmjs.org/package/detect-port
[npm-image]: https://img.shields.io/npm/v/detect-port.svg?style=flat-square
[npm-url]: https://npmjs.org/package/detect-port
[travis-image]: https://img.shields.io/travis/node-modules/detect-port.svg?style=flat-square
[travis-url]: https://travis-ci.org/node-modules/detect-port
[codecov-image]: https://codecov.io/gh/node-modules/detect-port/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/node-modules/detect-port
[download-image]: https://img.shields.io/npm/dm/detect-port.svg?style=flat-square
[download-url]: https://npmjs.org/package/detect-port

> JavaScript Implementation of Port Detector

## Usage

```bash
$ npm i detect-port --save
```

```js
const detect = require('detect-port');

/**
 * callback usage
 */

detect(port, (err, _port) => {
  if (err) {
    console.log(err);
  }

  if (port == _port) {
    console.log(`port: ${port} was not occupied`);
  } else {
    console.log(`port: ${port} was occupied, try port: ${_port}`);
  }
});

/**
 * for a yield syntax instead of callback function implement
 */

const co = require('co');

co(function *() {
  const _port = yield detect(port);

  if (port == _port) {
    console.log(`port: ${port} was not occupied`);
  } else {
    console.log(`port: ${port} was occupied, try port: ${_port}`);
  }
});

/**
 * use as a promise
 */

detect(port)
  .then(_port => {
    if (port == _port) {
      console.log(`port: ${port} was not occupied`);
    } else {
      console.log(`port: ${port} was occupied, try port: ${_port}`);
    }
  })
  .catch(err => {
    console.log(err);
  });

```

## Command Line Tool

```shell
$ npm i detect-port -g
```

### Quick Start

```shell
# get an available port randomly
$ detect

# detect pointed port
$ detect 80

# more help
$ detect --help
```

## Authors

- [xudafeng](//github.com/xudafeng)
- [zenzhu](//github.com/zenzhu)

## License

[MIT](LICENSE)

# HAR Validator [![version][npm-version]][npm-url] [![License][license-image]][license-url]

> Extremely fast HTTP Archive ([HAR](https://github.com/ahmadnassri/har-spec/blob/master/versions/1.2.md)) validator using JSON Schema.

[![Build Status][travis-image]][travis-url]
[![Downloads][npm-downloads]][npm-url]
[![Code Climate][codeclimate-quality]][codeclimate-url]
[![Coverage Status][codeclimate-coverage]][codeclimate-url]
[![Dependency Status][dependencyci-image]][dependencyci-url]
[![Dependencies][david-image]][david-url]

## Install

```bash
npm install --only=production --save har-validator
```

## CLI Usage

Please refer to [`har-cli`](https://github.com/ahmadnassri/har-cli) for more info.

## API

**Note**: as of [`v2.0.0`](https://github.com/ahmadnassri/har-validator/releases/tag/v2.0.0) this module defaults to Promise based API. *For backward compatibility with `v1.x` an [async/callback API](docs/async.md) is also provided*

- [async API](docs/async.md)
- [callback API](docs/async.md)
- [Promise API](docs/promise.md) *(default)*

----
> :copyright: [ahmadnassri.com](https://www.ahmadnassri.com/) &nbsp;&middot;&nbsp;
> License: [ISC][license-url] &nbsp;&middot;&nbsp;
> Github: [@ahmadnassri](https://github.com/ahmadnassri) &nbsp;&middot;&nbsp;
> Twitter: [@ahmadnassri](https://twitter.com/ahmadnassri)

[license-url]: http://choosealicense.com/licenses/isc/
[license-image]: https://img.shields.io/github/license/ahmadnassri/har-validator.svg?style=flat-square

[travis-url]: https://travis-ci.org/ahmadnassri/har-validator
[travis-image]: https://img.shields.io/travis/ahmadnassri/har-validator.svg?style=flat-square

[npm-url]: https://www.npmjs.com/package/har-validator
[npm-version]: https://img.shields.io/npm/v/har-validator.svg?style=flat-square
[npm-downloads]: https://img.shields.io/npm/dm/har-validator.svg?style=flat-square

[codeclimate-url]: https://codeclimate.com/github/ahmadnassri/har-validator
[codeclimate-quality]: https://img.shields.io/codeclimate/github/ahmadnassri/har-validator.svg?style=flat-square
[codeclimate-coverage]: https://img.shields.io/codeclimate/coverage/github/ahmadnassri/har-validator.svg?style=flat-square

[david-url]: https://david-dm.org/ahmadnassri/har-validator
[david-image]: https://img.shields.io/david/ahmadnassri/har-validator.svg?style=flat-square

[dependencyci-url]: https://dependencyci.com/github/ahmadnassri/har-validator
[dependencyci-image]: https://dependencyci.com/github/ahmadnassri/har-validator/badge?style=flat-square

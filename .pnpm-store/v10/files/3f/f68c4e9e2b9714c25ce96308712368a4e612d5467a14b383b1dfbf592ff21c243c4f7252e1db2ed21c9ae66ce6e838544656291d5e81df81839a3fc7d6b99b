# Bytes utility

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Build Status][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]

Utility to parse a string bytes (ex: `1TB`) to bytes (`1099511627776`) and vice-versa.

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/). Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
$ npm install bytes
```

## Usage

```js
var bytes = require('bytes');
```

#### bytes.format(number value, [options]): string｜null

Format the given value in bytes into a string. If the value is negative, it is kept as such. If it is a float, it is
 rounded.

**Arguments**

| Name    | Type     | Description        |
|---------|----------|--------------------|
| value   | `number` | Value in bytes     |
| options | `Object` | Conversion options |

**Options**

| Property          | Type   | Description                                                                             |
|-------------------|--------|-----------------------------------------------------------------------------------------|
| decimalPlaces | `number`｜`null` | Maximum number of decimal places to include in output. Default value to `2`. |
| fixedDecimals | `boolean`｜`null` | Whether to always display the maximum number of decimal places. Default value to `false` |
| thousandsSeparator | `string`｜`null` | Example of values: `' '`, `','` and `.`... Default value to `''`. |
| unit | `string`｜`null` | The unit in which the result will be returned (B/KB/MB/GB/TB). Default value to `''` (which means auto detect). |
| unitSeparator | `string`｜`null` | Separator to use between number and unit. Default value to `''`. |

**Returns**

| Name    | Type             | Description                                     |
|---------|------------------|-------------------------------------------------|
| results | `string`｜`null` | Return null upon error. String value otherwise. |

**Example**

```js
bytes(1024);
// output: '1KB'

bytes(1000);
// output: '1000B'

bytes(1000, {thousandsSeparator: ' '});
// output: '1 000B'

bytes(1024 * 1.7, {decimalPlaces: 0});
// output: '2KB'

bytes(1024, {unitSeparator: ' '});
// output: '1 KB'

```

#### bytes.parse(string｜number value): number｜null

Parse the string value into an integer in bytes. If no unit is given, or `value`
is a number, it is assumed the value is in bytes.

Supported units and abbreviations are as follows and are case-insensitive:

  * `b` for bytes
  * `kb` for kilobytes
  * `mb` for megabytes
  * `gb` for gigabytes
  * `tb` for terabytes

The units are in powers of two, not ten. This means 1kb = 1024b according to this parser.

**Arguments**

| Name          | Type   | Description        |
|---------------|--------|--------------------|
| value   | `string`｜`number` | String to parse, or number in bytes.   |

**Returns**

| Name    | Type        | Description             |
|---------|-------------|-------------------------|
| results | `number`｜`null` | Return null upon error. Value in bytes otherwise. |

**Example**

```js
bytes('1KB');
// output: 1024

bytes('1024');
// output: 1024

bytes(1024);
// output: 1024
```

## License 

[MIT](LICENSE)

[downloads-image]: https://img.shields.io/npm/dm/bytes.svg
[downloads-url]: https://npmjs.org/package/bytes
[npm-image]: https://img.shields.io/npm/v/bytes.svg
[npm-url]: https://npmjs.org/package/bytes
[travis-image]: https://img.shields.io/travis/visionmedia/bytes.js/master.svg
[travis-url]: https://travis-ci.org/visionmedia/bytes.js
[coveralls-image]: https://img.shields.io/coveralls/visionmedia/bytes.js/master.svg
[coveralls-url]: https://coveralls.io/r/visionmedia/bytes.js?branch=master

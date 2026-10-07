![Node.js CI](https://github.com/Borewit/token-types/workflows/Node.js%20CI/badge.svg)
[![NPM version](https://badge.fury.io/js/token-types.svg)](https://npmjs.org/package/token-types)
[![npm downloads](http://img.shields.io/npm/dm/token-types.svg)](https://npmcharts.com/compare/token-types,strtok3?start=1200&interval=30)
[![coveralls](https://coveralls.io/repos/github/Borewit/token-types/badge.svg?branch=master)](https://coveralls.io/github/Borewit/token-types?branch=master)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/4723ce4613fc49cda8db5eed29f18834)](https://www.codacy.com/app/Borewit/token-types?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Borewit/token-types&amp;utm_campaign=Badge_Grade)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/Borewit/token-types.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/Borewit/token-types/context:javascript)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/Borewit/token-types.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/Borewit/token-types/alerts/)
[![DeepScan grade](https://deepscan.io/api/teams/5165/projects/6940/branches/61852/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=5165&pid=6940&bid=61852)
[![Known Vulnerabilities](https://snyk.io/test/github/Borewit/token-types/badge.svg?targetFile=package.json)](https://snyk.io/test/github/Borewit/token-types?targetFile=package.json)

# token-types

A primitive token library used to read and write from a node `Buffer`.
Although it is possible to use this module directly, it is primary designed to be used with [strtok3 tokenizer](https://github.com/Borewit/strtok3).

## Installation

```sh
npm install --save token-types
```
Usually in combination with [strtok3](https://github.com/Borewit/strtok3):
```sh
npm install --save strtok3
```

Using TypeScript you should also install [@tokenizer/token](https://github.com/Borewit/tokenizer-token) as a development
dependency:

```shell
npm install --save-dev @tokenizer/token
```


## Example

```js
const strtok3 = require('strtok3');
const token = require('token-types');
    
(async () => {

  const tokenizer = await strtok3.fromFile("somefile.bin");
  try {
    const myNumber = await tokenizer.readToken(token.Float32_BE);
    console.log(`My number: ${myNumber}`);
  } finally {
    tokenizer.close(); // Close the file
  } 
})();
```

## Tokens

### Numeric tokens

`node-strtok` supports a wide variety of numerical tokens out of the box:

| Token         | Number           | Bits | Endianness     |
|---------------|------------------|------|----------------|
| `UINT8`       | Unsigned integer |    8 | n/a            |
| `UINT16_BE`   | Unsigned integer |   16 | big endian     |
| `UINT16_LE`   | Unsigned integer |   16 | little endian  |
| `UINT24_BE`   | Unsigned integer |   24 | big endian     |
| `UINT24_LE`   | Unsigned integer |   24 | little endian  |
| `UINT32_BE`   | Unsigned integer |   32 | big endian     |
| `UINT32_LE`   | Unsigned integer |   32 | little endian  |
| `UINT64_BE`   | Unsigned integer |   64 | big endian     |
| `UINT64_LE`*  | Unsigned integer |   64 | little endian  |
| `INT8`        | Signed integer   |    8 | n/a            |
| `INT16_BE`    | Signed integer   |   16 | big endian     |
| `INT16_LE`    | Signed integer   |   16 | little endian  |
| `INT24_BE`    | Signed integer   |   24 | big endian     |
| `INT24_LE`    | Signed integer   |   24 | little endian  |
| `INT32_BE`    | Signed integer   |   32 | big endian     |
| `INT32_LE`    | Signed integer   |   32 | little endian  |
| `INT64_BE`    | Signed integer   |   64 | big endian     |
| `INT64_LE`*   | Signed integer   |   64 | little endian  |
| `Float16_BE`  | IEEE 754 float   |   16 | big endian     |
| `Float16_LE`  | IEEE 754 float   |   16 | little endian  |
| `Float32_BE`  | IEEE 754 float   |   32 | big endian     |
| `Float32_LE`  | IEEE 754 float   |   32 | little endian  |
| `Float64_BE`  | IEEE 754 float   |   64 | big endian     |
| `Float64_LE`  | IEEE 754 float   |   64 | little endian  |
| `Float80_BE`* | IEEE 754 float   |   80 | big endian     |
| `Float80_LE`* | IEEE 754 float   |   80 | little endian  |

### Other tokens

String types:
*   Windows-1252
*   ISO-8859-1
  
*) The tokens exceed the JavaScript IEEE 754 64-bit Floating Point precision, decoding and encoding is best effort based.

### Custom token

Complex tokens can be added, which makes very suitable for reading binary files or network messages:
```js
 ExtendedHeader = {
    len: 10,

    get: (buf, off) => {
      return {
        // Extended header size
        size: Token.UINT32_BE.get(buf, off),
        // Extended Flags
        extendedFlags: Token.UINT16_BE.get(buf, off + 4),
        // Size of padding
        sizeOfPadding: Token.UINT32_BE.get(buf, off + 6),
        // CRC data present
        crcDataPresent: common.strtokBITSET.get(buf, off + 4, 31)
      };
    }
  };
```

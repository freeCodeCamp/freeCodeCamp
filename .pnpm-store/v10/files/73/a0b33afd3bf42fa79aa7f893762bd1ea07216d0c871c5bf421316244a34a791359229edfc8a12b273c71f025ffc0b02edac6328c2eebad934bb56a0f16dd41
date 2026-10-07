# chardet

_Chardet_ is a character detection module written in pure JavaScript (TypeScript). Module uses occurrence analysis to determine the most probable encoding.

- Packed size is only **22 KB**
- Works in all environments: Node / Browser / Native
- Works on all platforms: Linux / Mac / Windows
- No dependencies
- No native code / bindings
- 100% written in TypeScript
- Extensive code coverage

## Installation

```
npm i chardet
```

## Usage

To return the encoding with the highest confidence:

```javascript
import chardet from 'chardet';

const encoding = chardet.detect(Buffer.from('hello there!'));
// or
const encoding = await chardet.detectFile('/path/to/file');
// or
const encoding = chardet.detectFileSync('/path/to/file');
```

To return the full list of possible encodings use `analyse` method.

```javascript
import chardet from 'chardet';
chardet.analyse(Buffer.from('hello there!'));
```

Returned value is an array of objects sorted by confidence value in descending order

```javascript
[
  { confidence: 90, name: 'UTF-8' },
  { confidence: 20, name: 'windows-1252', lang: 'fr' },
];
```

In browser, you can use [Uint8Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) instead of the `Buffer`:

```javascript
import chardet from 'chardet';
chardet.analyse(new Uint8Array([0x68, 0x65, 0x6c, 0x6c, 0x6f]));
```

## Working with large data sets

Sometimes, when data set is huge and you want to optimize performance (with a trade off of less accuracy),
you can sample only the first N bytes of the buffer:

```javascript
const encoding = await chardet.detectFile('/path/to/file', { sampleSize: 32 });
```

You can also specify where to begin reading from in the buffer:

```javascript
const encoding = await chardet.detectFile('/path/to/file', {
  sampleSize: 32,
  offset: 128,
});
```

## Working with strings

In both Node.js and browsers, all strings in memory are represented in UTF-16 encoding. This is a fundamental aspect of the JavaScript language specification. Therefore, you cannot use plain strings directly as input for `chardet.analyse()` or `chardet.detect()`. Instead, you need the original string data in the form of a Buffer or Uint8Array.

In other words, if you receive a piece of data over the network and want to detect its encoding, use the original data payload, not its string representation. By the time you convert data to a string, it will be in UTF-16 encoding.

Note on [TextEncoder](https://developer.mozilla.org/en-US/docs/Web/API/TextEncoder/TextEncoder): By default, it returns a UTF-8 encoded buffer, which means the buffer will not be in the original encoding of the string.

## Supported Encodings:

- UTF-8
- UTF-16 LE
- UTF-16 BE
- UTF-32 LE
- UTF-32 BE
- ISO-2022-JP
- ISO-2022-KR
- ISO-2022-CN
- Shift_JIS
- Big5
- EUC-JP
- EUC-KR
- GB18030
- ISO-8859-1
- ISO-8859-2
- ISO-8859-5
- ISO-8859-6
- ISO-8859-7
- ISO-8859-8
- ISO-8859-9
- windows-1250
- windows-1251
- windows-1252
- windows-1253
- windows-1254
- windows-1255
- windows-1256
- KOI8-R

Currently only these encodings are supported.

## TypeScript?

Yes. Type definitions are included.

### References

- ICU project http://site.icu-project.org/

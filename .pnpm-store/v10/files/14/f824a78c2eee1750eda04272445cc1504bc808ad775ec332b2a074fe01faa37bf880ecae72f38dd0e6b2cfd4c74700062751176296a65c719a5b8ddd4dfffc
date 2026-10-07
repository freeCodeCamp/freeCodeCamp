# text-decoder

Streaming text decoder that preserves multibyte Unicode characters.

```
npm i text-decoder
```

## Usage

```js
const TextDecoder = require('text-decoder')

const td = new TextDecoder()

td.push(Buffer.of(0xf0, 0x9f, 0x92)) // returns ''
td.push(Buffer.of(0xa9)) // returns '💩'
```

## API

#### `const td = new TextDecoder([encoding])`

Create a text decoder. `encoding` defaults to `utf8`.

#### `const string = td.push(data)`

Push either a `Buffer` or a `string` to the text decoder. Returns the decoded string, buffering any partial data.

#### `const string = td.end([data])`

End the decoder, optionally pushing a final piece of data. Returns the decoded string.

## License

Apache-2.0

# teex

Turn a readable stream into multiple readable [streamx streams](https://github.com/mafintosh/streamx).

```
npm install teex
```

## Usage

``` js
const tee = require('teex')

// a, b are readable streams that are "clones"
// of someReadableStream. both streams need to
// be flowing, for someReadableStream to flow

const [a, b] = tee(someReadableStream)
```

## API

#### `const streams = tee(s, [howMany])`

Split a readable stream into multiple streams.
The `howMany` argument indicates how many streams
to split into and defaults to 2.

## License

MIT

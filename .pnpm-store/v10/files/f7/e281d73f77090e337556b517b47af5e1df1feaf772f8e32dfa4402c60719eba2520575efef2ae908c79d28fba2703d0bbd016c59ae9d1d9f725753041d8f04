# lines-and-columns

Maps lines and columns to character offsets and back. This is useful for parsers
and other text processors that deal in character ranges but process text with
meaningful lines and columns.

## Install

```
$ npm install [--save] lines-and-columns
```

## Usage

```js
import { LinesAndColumns } from 'lines-and-columns'

const lines = new LinesAndColumns(
  `table {
  border: 0
}`
)

lines.locationForIndex(9)
// { line: 1, column: 1 }

lines.indexForLocation({ line: 1, column: 2 })
// 10
```

## License

MIT

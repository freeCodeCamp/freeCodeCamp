# fast-fifo

A fast fifo implementation similar to the one powering nextTick in Node.js core

```
npm install fast-fifo
```

Uses a linked list of growing fixed sized arrays to implement the FIFO to avoid
allocating a wrapper object for each item.

## Usage

``` js
const FIFO = require('fast-fifo')

const q = new FIFO()

q.push('hello')
q.push('world')

q.shift() // returns hello
q.shift() // returns world
```

## API

#### `q = new FIFO()`

Create a new FIFO.

#### `q.push(value)`

Push a value to the FIFO. `value` can be anything other than undefined.

#### `value = q.shift()`

Return the oldest value from the FIFO.

#### `q.clear()`

Remove all values from the FIFO.

#### `bool = q.isEmpty()`

Returns `true` if the FIFO is empty and false otherwise.

#### `value = q.peek()`

Return the oldest value from the FIFO without shifting it out.

#### `len = q.length`

Get the number of entries remaining in the FIFO.

## Benchmarks

Included in bench.js is a simple benchmark that benchmarks this against a simple
linked list based FIFO.

On my machine the benchmark looks like this:

```
fifo bulk push and shift: 2881.508ms
fifo individual push and shift: 3248.437ms
fast-fifo bulk push and shift: 1606.972ms
fast-fifo individual push and shift: 1328.064ms
fifo bulk push and shift: 3266.902ms
fifo individual push and shift: 3320.944ms
fast-fifo bulk push and shift: 1858.307ms
fast-fifo individual push and shift: 1516.983ms
```

YMMV

## License

MIT

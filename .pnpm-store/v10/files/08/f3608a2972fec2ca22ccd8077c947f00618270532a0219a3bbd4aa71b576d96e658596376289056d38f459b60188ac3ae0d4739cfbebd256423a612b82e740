# memory-pager

Access memory using small fixed sized buffers instead of allocating a huge buffer.
Useful if you are implementing sparse data structures (such as large bitfield).

![travis](https://travis-ci.org/mafintosh/memory-pager.svg?branch=master)

```
npm install memory-pager
```

## Usage

``` js
var pager = require('paged-memory')

var pages = pager(1024) // use 1kb per page

var page = pages.get(10) // get page #10

console.log(page.offset) // 10240
console.log(page.buffer) // a blank 1kb buffer
```

## API

#### `var pages = pager(pageSize)`

Create a new pager. `pageSize` defaults to `1024`.

#### `var page = pages.get(pageNumber, [noAllocate])`

Get a page. The page will be allocated at first access.

Optionally you can set the `noAllocate` flag which will make the
method return undefined if no page has been allocated already

A page looks like this

``` js
{
  offset: byteOffset,
  buffer: bufferWithPageSize
}
```

#### `pages.set(pageNumber, buffer)`

Explicitly set the buffer for a page.

#### `pages.updated(page)`

Mark a page as updated.

#### `pages.lastUpdate()`

Get the last page that was updated.

#### `var buf = pages.toBuffer()`

Concat all pages allocated pages into a single buffer

## License

MIT

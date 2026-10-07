[![Published version](https://img.shields.io/npm/v/headers-polyfill.svg)](https://www.npmjs.com/package/headers-polyfill)

# `headers-polyfill`

A `Headers` class polyfill and transformation library.

## Motivation

Various request issuing libraries utilize a different format of headers. This library chooses the [`Headers`](https://developer.mozilla.org/en-US/docs/Web/API/Headers) instance as the middle-ground between server and client, and provides functions to convert that instance to primitives and vice-versa.

## Install

```bash
npm install headers-polyfill
```

## Polyfill

This package exports the `Headers` class that polyfills the native [`window.Headers`](https://developer.mozilla.org/en-US/docs/Web/API/Headers) implementation. This allows you to construct and manage headers using the same API in non-browser environments.

```js
import { Headers } from 'headers-polyfill'

const headers = new Headers({
  Accept: '*/*',
  'Content-Type': 'application/json',
})

headers.get('accept') // "*/*"
```

## Methods

The `Headers` polyfill instance supports the same methods as the standard `Headers` instance:

- [`.has()`](https://developer.mozilla.org/en-US/docs/Web/API/Headers/has)
- [`.get()`](https://developer.mozilla.org/en-US/docs/Web/API/Headers/get)
- [`.set()`](https://developer.mozilla.org/en-US/docs/Web/API/Headers/set)
- [`.append()`](https://developer.mozilla.org/en-US/docs/Web/API/Headers/append)
- [`.delete()`](https://developer.mozilla.org/en-US/docs/Web/API/Headers/delete)
- [`.forEach()`](https://developer.mozilla.org/en-US/docs/Web/API/Headers/forEach)
- [`.getSetCookie()`](https://developer.mozilla.org/en-US/docs/Web/API/Headers/getSetCookie)

As well as the iterator methods:

- [`.keys()`](https://developer.mozilla.org/en-US/docs/Web/API/Headers/keys)
- [`.values()`](https://developer.mozilla.org/en-US/docs/Web/API/Headers/values)
- [`.entries()`](https://developer.mozilla.org/en-US/docs/Web/API/Headers/entries)

## Transformations

### `getRawHeaders()`

Returns an object consisting of the header name/value pairs but preserving raw header names.

```js
const headers = new Headers({
  Accept: '*/*',
  'Content-Type': 'application/json',
})

headers.raw()
// { "Accept": "*/*", "Content-Type": "application/json" }
```

### Headers ⭢ N

- `headersToString: (h: Headers): string`

```js
import { headersToString } from 'headers-polyfill'

headersToString(
  new Headers({
    connection: 'keep-alive',
    'content-type': ['text/plain', 'image/png'],
  })
)
// connetion: keep-alive
// content-type: text/plain, image/png
```

- `headersToList: (h: Headers): Array<[string, string | string[]]>`

```js
import { headersToList } from 'headers-polyfill'

headersToList(
  new Headers({
    connection: 'keep-alive',
    'content-type': ['text/plain', 'image/png'],
  })
)
// [['connection', 'keep-alive'], ['content-type', ['text/plain', 'image/png']]]
```

- `headersToObject: (h: Headers): Record<string, string | string[]>`

```js
import { headersToObject } from 'headers-polyfill'

headersToObject(
  new Headers({
    connection: 'keep-alive',
    'content-type': ['text/plain', 'image/png'],
  })
)
// { connection: 'keep-alive', 'content-type': ['text/plain', 'image/png'] }
```

### N ⭢ Headers

- `stringToHeaders: (s: string): Headers`

```js
import { stringToHeaders } from 'headers-polyfill'


const stringToHeaders(`
connection: keep-alive
content-type: text/plain, image/png
`)
// Headers { connection: 'keep-alive', 'content-type': ['text/plain', 'image/png'] }
```

- `listToHeaders: (l: Array<[string, string | string[]]>): Headers`

```js
import { listToHeaders } from 'headers-polyfill'

listToHeaders([
  ['connection', 'keep-alive'],
  ['content-type', ['text/plain', 'image/png']],
])
// Headers { connection: 'keep-alive', 'content-type': ['text/plain', 'image/png'] }
```

- `objectToHeaders: (o: Record<string, string | string[] | undefined>): Headers`

```js
import { objectToHeaders } from 'headers-polyfill'

objectToHeaders({
  connection: 'keep-alive',
  'content-type': ['text/plain', 'image/png'],
})
// Headers { connection: 'keep-alive', 'content-type': ['text/plain', 'image/png'] }
```

---

## Utilities

- `reduceHeadersObject: <R>(o: Record<string, string | string[]>, reducer: (acc: R, name: string, value: string | string[]) => R) => R`

```js
import { reduceHeadersObject } from 'headers-polyfill'

reduceHeadersObject <
  HeadersObject >
  ({
    Accept: '*/*',
    'Content-Type': ['application/json', 'text/plain'],
  },
  (headers, name, value) => {
    headers[name.toLowerCase()] = value
    return headers
  },
  {})
// { 'accept': '*/*', 'content-type': ['application/json', 'text/plain'] }
```

- `appendHeader: (o: Record<string, string | string[]>, n: string, v: string | string[]): Record<string, string | string[]>`

```js
import { appendHeader } from 'headers-polyfill'

appendHeader(
  { 'content-type': 'application/json' },
  'content-type',
  'text/plain'
)
// { 'content-type': ['application/json', 'text/plain']}
```

- `flattenHeadersList: (l: Array<[string, string | string[]]>): Array<string, string>`

```js
import { flattenHeadersList } from 'headers-polyfill'

flattenHeadersList([['content-type', ['text/plain', 'image/png']]])
// ['content-type', 'text/plain, image/png']
```

- `flattenHeadersObject: (o: Record<string, string | string[]>): Record<string, string>`

```js
import { flattenHeadersObject } from 'headers-polyfill'

flattenHeadersObject({
  'content-type': ['text/plain', 'image/png'],
})
// { 'content-type': 'text/plain, image/png' }
```

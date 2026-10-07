# BSER Binary Serialization

BSER is a binary serialization scheme that can be used as an alternative to JSON.
BSER uses a framed encoding that makes it simpler to use to stream a sequence of
encoded values.

It is intended to be used for local-IPC only and strings are represented as binary
with no specific encoding; this matches the convention employed by most operating
system filename storage.

For more details about the serialization scheme see
[Watchman's docs](https://facebook.github.io/watchman/docs/bser.html).

## API

```js
var bser = require('bser');
```

### bser.loadFromBuffer

The is the synchronous decoder; given an input string or buffer,
decodes a single value and returns it.  Throws an error if the
input is invalid.

```js
var obj = bser.loadFromBuffer(buf);
```

### bser.dumpToBuffer

Synchronously encodes a value as BSER.

```js
var encoded = bser.dumpToBuffer(['hello']);
console.log(bser.loadFromBuffer(encoded)); // ['hello']
```

### BunserBuf

The asynchronous decoder API is implemented in the BunserBuf object.
You may incrementally append data to this object and it will emit the
decoded values via its `value` event.

```js
var bunser = new bser.BunserBuf();

bunser.on('value', function(obj) {
  console.log(obj);
});
```

Then in your socket `data` event:

```js
bunser.append(buf);
```

## Example

Read BSER from socket:

```js
var bunser = new bser.BunserBuf();

bunser.on('value', function(obj) {
  console.log('data from socket', obj);
});

var socket = net.connect('/socket');

socket.on('data', function(buf) {
  bunser.append(buf);
});
```

Write BSER to socket:

```js
socket.write(bser.dumpToBuffer(obj));
```

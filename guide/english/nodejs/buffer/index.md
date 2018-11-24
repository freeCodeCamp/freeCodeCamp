---
title: Nodejs- Buffer
---

## Buffer

Binary is simply a set or a collection of `1` and `0`. Each number in a binary, each 1 and 0 in a set are called a _bit_. Computer converts the data to this binary format to store and perform operations. For example, the following are five different binaries:

`10, 01, 001, 1110, 00101011`

JavaScript does not have a byte type data in its core API. To handle binary data Node.js includes a binary buffer implementation with a global module called `Buffer`.

### Creating a Buffer

There are different ways you can create a buffer in Node.js. You can create an empty buffer by with a size of 10 bytes.

```javascript
const buf1 = Buffer.alloc(10);
```

From UTF-8-encoded strings, the creation is like this:

```javascript
const buf2 = Buffer.from('Hello World!');
```

There are different accepted encoding when creating a Buffer:

* ascii
* utf-8
* base64:
* latin1
* binary
* hex

There are three separate functions allocated in the Buffer API to use and create new buffers. In above examples we have seen `alloc()` and `from()`. The third one is `allocUnsafe()`.

```javascript
const buf3 = Buffer.allocUnsafe(10);
```

When returned, this function might contain old data that needs to be overwritten.

### Interactions with Buffer

There are different interactions that can be made with the Buffer API. We are going to cover most of them here. Let us start with converting a buffer to JSON.

```javascript
let bufferOne = Buffer.from('This is a buffer example.');
console.log(bufferOne);

// Output: <Buffer 54 68 69 73 20 69 73 20 61 20 62 75 66 66 65 72 20 65 78 61 6d 70 6c 65 2e>

let json = JSON.stringify(bufferOne);
console.log(json);

// Output: {"type": "Buffer", "data": [84,104,105,115,32,105,115,32,97,32,98,117,102,102,101,114,32,101,120,97,109,112,108,101,46]}
```

The JSON specifies that the type of object being transformed is a Buffer, and its data. Converting an empty buffer to JSON will show us that it contains nothing but zeros.

```javascript
const emptyBuf = Buffer.alloc(10);

emptyBuf.toJSON();

// Output: { "type": "Buffer", "data": [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] }
```

Do notice that, Buffer API also provides a direct function `toJSON()` to convert a buffer into a JSON object. To examine the size of a buffer, we can use `length` method.

```javascript
emptyBuf.length;
// Output: 10
```

Now let us convert buffer to a readable string, in our case, the utf-8 encoded.

```javascript
console.log(bufferOne.toString('utf8'));

// Output: This is a buffer example.
```

`.toString()` by default converts a buffer to a utf-8 format string. This is how you decode a buffer. If you specify an encoding you can convert the buffer to another encoding

```javascript
console.log(bufferOne.toString('base64'));
```

---
title: Streams
---

## Streams

Streams are available in Node.js core API as objects that allow the data to read or write in a continuous way. Basically, a stream does that in chunks in comparison to buffer which does its bit by bit, thus making it a slow process.

There are four types of streams available:

* Readable (streams from which data is read)
* Writable (streams to which data is written)
* Duplex (streams that are both Readable and Writable)
* Transform (Duplex Streams that can modify data as it is read and written)

Each available type has several methods associated. Some of the common ones are:

* data (this runs when data is available)
* end (this gets triggered when there is no data left to read)
* error (this runs when there is an error either receiving or writing data)

### Pipe

In programming, the concept of `pipe` is not new. Unix based systems have been pragmatically using it since the 1970s. What does a Pipe do? A `pipe` generally connects the source and the destination. It passes the output of one function as the input of another function.

In Node.js, `pipe` is used the same way, to pair inputs and outputs of different operations. `pipe()` is available as a function that takes a readable source stream and attaches the output to a destination stream. The general syntax can be represented as:

```javascript
src.pipe(dest);
```

Multiple `pipe()` functions can also be chained together.

```javascript
a.pipe(b).pipe(c);

// which is equivalent to

a.pipe(b);
b.pipe(c);
```

### Readable Streams

Streams that produce data that can be attached as the input to a writable stream is known as a Readable stream. To create a readable stream:

```javascript
const { Readable } = require('stream');

const readable = new Readable();

readable.on('data', chunk => {
  console.log(`Received ${chunk.length} bytes of data.`);
});
readable.on('end', () => {
  console.log('There will be no more data.');
});
```

### Writable Stream

This is the type of a stream that you can `pipe()` the data to from a readable source. To create a writable stream, we have a constructor approach. We create an object from it and pass a number of options. The method takes three arguments:

* chunk: a buffer
* encoding: to convert data to human readable form
* callback: a function that is called when the data is done processing from the chunk

```javascript
const { Writable } = require('stream');
const writable = new Writable({
  write(chunk, encoding, callback) {
    console.log(chunk.toString());
    callback();
  }
});

process.stdin.pipe(writable);
```

### Duplex Streams

Duplex streams help us to implement both readable and writable streams at the same time.

```javascript
const { Duplex } = require('stream');

const inoutStream = new Duplex({
  write(chunk, encoding, callback) {
    console.log(chunk.toString());
    callback();
  },

  read(size) {
    this.push(String.fromCharCode(this.currentCharCode++));
    if (this.currentCharCode > 90) {
      this.push(null);
    }
  }
});

inoutStream.currentCharCode = 65;
process.stdin.pipe(inoutStream).pipe(process.stdout);
```

The `stdin` stream pipes the readable data into the duplex stream. The `stdout` helps us to see the data. The readable and writable parts of a duplex stream operate completely independent of each other.

### Transform Stream

This type of stream is more of an advanced version of the duplex stream.

```javascript
const { Transform } = require('stream');

const upperCaseTr = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
});

process.stdin.pipe(upperCaseTr).pipe(process.stdout);
```

The data we are consuming is same as the previous example of the duplex stream. The thing to notice here is that `transform()` does not require implementation of `read` or `write` methods. It combines both the methods itself.

### Why use Streams?

Since Node.js is asynchronous so interacting by passing callbacks to functions with disk and network. An example given below reads the data from a file on the disk and responds it to over the network request from client.

```javascript
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile('data.txt', (err, data) => {
    res.end(data);
  });
});
server.listen(8000);
```

The above snippet of code will work but the entire data from the file will first go into the memory for every request before writing the result back to the client request. If the file we are reading is too large, this can become a very heavy and expensive server call as it will consume a lot of memory for the process to advance. The user experience on the client side will also suffer from delay.

In this case, if we use streams, the data will be send to the client request as one chunk at a time as soon as they received from the disk.

```javascript
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const stream = fs.createReadStream('data.txt');
  stream.pipe(res);
});
server.listen(8000);
```

The `pipe()` here takes care of writing or in our case, sending the data with response object and once all the data is read from the file, to close the connection.

Note: `process.stdin` and `process.stdout` are build in streams in the global `process` object provided by Node.js API.

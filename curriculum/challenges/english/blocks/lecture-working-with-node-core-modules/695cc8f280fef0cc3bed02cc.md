---
id: 695cc8f280fef0cc3bed02cc
title: What Is the Stream Module and How Does It Work?
challengeType: 19
dashedName: what-is-the-stream-module-and-how-does-it-work
---

# --description--

The last core Node.js module we'll look at is `stream`. This module helps you handle data efficiently, especially when the data is too large to load all at once, like reading a big text file or downloading a large video.

Instead of waiting to read or write all the data before doing anything, streams process chunks of data as they arrive, similar to how you can start watching a YouTube video before the whole video finishes loading.

There are four main types of streams in Node.js: readable, writable, duplex, and transform:

- Readable streams let you read data in chunks (for example, reading a large file).
- Writable streams let you write data in chunks (for example, saving a file).
- Duplex streams can both read and write data.
- Transform streams are a special kind of duplex stream that can change or process the data as it flows through.

You can import the stream classes you need by destructuring them from the stream module:

```js
const { Readable, Writable, Transform } = require("stream");
```

Most of the time, you don't need to create custom stream classes yourself. For everyday file operations, built-in methods like `fs.createReadStream()` and `fs.createWriteStream()` are usually all you need.

These two methods take the path of the file to read or write. This means you also need the `fs` and `path` modules to implement streaming on many occasions.

Here's how you can read data from a file, say an `input.txt` file:

```js
const fs = require("fs");
const path = require("path");

const inputFilePath = path.join(__dirname, "input.txt");

// Readable stream
const readInputFileStream = fs.createReadStream(inputFilePath);
console.log(readInputFileStream);
```

This will not do anything yet, as you need to use the events from the stream to read the data. For example, you can listen to the `data` event this way:

```js
readInputFileStream.on("data", (chunk) => {
  console.log(`Received ${chunk.length} bytes of data`);
}); // Received 622 bytes of data
```

You can also log the chunk of data to the console:

```js
readInputFileStream.on("data", (chunk) => {
  console.log(`Received ${chunk.length} bytes of data`);
  console.log("Received data:", chunk);
});

/*
Received 622 bytes of data
Received data: <Buffer 4c 6f 72 65 6d 20 69 70 73 75 6d 
20 64 6f 6c 6f 72 20 73 69 74 20 61 6d 65 74 20 63 6f 6e
73 65 63 74 65 74 75 72 20 61 64 69 70 69 73 69 63 69 6e 67 ... 572 more bytes>
*/
```

Since it returns a buffer, you can call the `toString()` method to convert it into readable text:

```js
const fs = require("fs");
const path = require("path");

const inputFilePath = path.join(__dirname, "input.txt");

// Readable stream
const readInputFileStream = fs.createReadStream(inputFilePath);

readInputFileStream.on("data", (chunk) => {
  console.log(`Received ${chunk.length} bytes of data`);
  console.log("Received data:", chunk.toString());
});
/*
Received 622 bytes of data
Received data: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus sint facilis
aliquid. Odio voluptatibus veniam saepe consectetur alias modi non fuga in,
tempore explicabo numquam maiores quod inventore quibusdam! Nam cumque repellat
facere voluptatem nulla aliquam atque ratione numquam ea aperiam porro ducimus
animi tempora laboriosam, labore quae voluptatum? Nam, hic quas dolore
repudiandae placeat eius! Voluptate reiciendis totam hic expedita tenetur. Nisi
ipsa ad facere optio sint debitis. Magni nostrum sit ipsa saepe suscipit facilis
eaque doloribus assumenda, minima fuga tempore, porro, debitis rem harum in
*/
```

To implement a writable stream, particularly when you're reading from one file and writing to another, you need to create the read stream first, followed by the write stream:

```js
const fs = require("fs");
const path = require("path");

const inputFilePath = path.join(__dirname, "input.txt");
const outputFilePath = path.join(__dirname, "output.txt");

// Create the read stream first
const readInputFileStream = fs.createReadStream(inputFilePath);

// Create the write stream
const writeOutputFileStream = fs.createWriteStream(outputFilePath);
```

Next, use the `.pipe()` method to connect the readable stream to the writable stream. This lets Node.js automatically read data from the source and write it to the destination, chunk by chunk:

```js
const fs = require("fs");
const path = require("path");

const inputFilePath = path.join(__dirname, "input.txt");
const outputFilePath = path.join(__dirname, "output.txt");

// Create the read stream first
const readInputFileStream = fs.createReadStream(inputFilePath);

// Create the write stream
const writeOutputFileStream = fs.createWriteStream(outputFilePath);

// Pipe the read stream to the write stream
readInputFileStream.pipe(writeOutputFileStream);
```

Then you can listen for the `finish` and `error` events on the writable stream to know when the streaming is complete or if something goes wrong:

```js
const fs = require("fs");
const path = require("path");

const inputFilePath = path.join(__dirname, "input.txt");
const outputFilePath = path.join(__dirname, "output.txt");

// Create the read stream first
const readInputFileStream = fs.createReadStream(inputFilePath);

// Create the write stream
const writeOutputFileStream = fs.createWriteStream(outputFilePath);

readInputFileStream.pipe(writeOutputFileStream);

writeOutputFileStream.on("finish", () => {
  console.log("All data has been written to the file");
});

writeOutputFileStream.on("error", (err) => {
  console.error("Error writing to file:", err);
});
```

The `finish` event tells you that the stream is complete and there is no more data to write, while the error event helps you catch problems that might happen during writing, like permissions issues or missing directories.

# --questions--

## --text--

Which of these are the four main types of streams?

## --answers--

Request, Response, Event, and Error streams.

### --feedback--

Think about how Node.js handles reading, writing, and transforming data.

---

Readable, Editable, Duplex, and Transform streams.

### --feedback--

Think about how Node.js handles reading, writing, and transforming data.

---

Data, File, HTTP, and Buffer streams.

### --feedback--

Think about how Node.js handles reading, writing, and transforming data.

---

Readable, Writable, Duplex, and Transform streams.

## --video-solution--

4

## --text--

What lets you implement a custom readable and writable stream?

## --answers--

The `stream` module using Readable and Writable classes.

---

The `http` module.

### --feedback--

Think about the module that provides base classes for creating custom streams.

---

The `fs` module using `createReadStream()` and `createWriteStream()`.

### --feedback--

Think about how Node.js handles reading, writing, and transforming data.

---

The events module.

### --feedback--

Think about how Node.js handles reading, writing, and transforming data.

## --video-solution--

1

## --text--

What events can you use on a writable stream to know when streaming completes or an error occurs?

## --answers--

`end` and `close`.

### --feedback--

Think about the writable stream events that signal completion and failure.

---

`finish` and `error`.

---

`start` and `stop`.

### --feedback--

Think about the writable stream events that signal completion and failure.

---

`done` and `fail`.

### --feedback--

Think about the writable stream events that signal completion and failure.

## --video-solution--

2

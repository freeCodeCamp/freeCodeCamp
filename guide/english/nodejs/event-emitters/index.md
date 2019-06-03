---
title: Event Emitters
---

## Events and Streams

Traditionally, in a web server, to process a data in the form of a file by reading and writing consumes a lot more memory since these processing methods need to load the file every time it has to read or write that file. This is considered a waste of resources. Think of it, in terms of scalability and Big Data if we are wasting resources, we are going to compromise a lot. Node.js asynchronous nature provides two suitable options for us to work with and to provide a flow of data that consumes fewer resources since Node.js is based on a non-blocking asynchronous model. They are emitting events and streams. In this section, we will be taking a look at both of them.

## EventEmitter Class

EventEmitters are one of the core ideas behind the architecture of event-driven programming or asynchronous programming in Node.js. An EventEmitter is an object and in Node.js any object that emits an event is an instance of EventEmitter class. What is an event? Every action took by the Node.js program such as initiating the web server and closing terminating the program when there is no request left to fulfill are considered as two separate events.

To access the EventEmitter class in a Node.js program, you have to require the `events` module from the Node.js API. To create the object, we then make an instance of the EventEmitter class by calling its constructor function.

```js
const events = require('events');

const eventEmitter = new events.EventEmitter();
```

Or you can directly require access the EventEmitter subclass like this:

```js
const EventEmitter = require('events');

const eventEmitter = new EventEmitter();
```

An EventEmitter class provides various pre-defined methods to work with events. These methods are `.on`, `.emit` and `.error`. Emitting an event from a function can be done triggering a callback function that can be accessed by any other JavaScript function. This is like broadcasting.

The ability to trigger an event can be done by following syntax:

```js
eventEmitter.emit(eventName, optionalData);
```

And the ability to attach a listener function and define the name of a specific event is done by `.on`.

```js
eventEmitter.on(eventName, callback);
```

We will mimic the new functions we just learned about with an example. Create a new file called `eventemitter.js` and paste the following code:

```js
const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

const callback = () => {
	console.log('callback runs');
};

eventEmitter.on('invoke', callback);

eventEmitter.emit('invoke');
eventEmitter.emit('invoke');
```

Now run the above example using `node` command and you must get the following output.

```shell
callback runs
callback runs
```

We start by creating an eventEmitter instance through which we get access to `.on` the method. The `.on` method adds the event by defining the name `invoke` which we use later on in `.emit` to call trigger the callback function associated with it.

There is another function that EventEmitter class provides which is called `.once`. This method only invokes the callback function associated with an event first time when an event is emitted. Consider the example below.

```js
const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

const callback = () => {
	console.log('callback runs');
};

eventEmitter.once('invoke', callback);

eventEmitter.emit('invoke');
eventEmitter.emit('invoke');
```

Output

```shell
callback runs
```

`.once` keep tracks of events as to when they get triggered and how many times they get triggered unlike `.on` method which does not keep track like this. This is a major difference between the two.

## Understanding Streams

Node.js provide another way to work with data instead of consuming a high amount of memory resources and making it cost effective. This what streams do. Basically, streams let you read data from the one source and put into the destination. Streams process data in chunks instead of all at once thus, making them suitable for working with large datasets. Many built-in Node.js modules use streams under the hood. For example, HTTP request and response, TCP sockets, zlib, crypto, fs read and write streams, etc.

### Type of Streams

In Node.js there are four types of streams:

- Readable
- Writable
- Duplex
- Transform

Most common of these are Readable and Writable streams. Readable streams are used to read the data from the source and Writable streams are used to perform the write operation of that data to the destination. Duplex streams can be used to perform both read and write operations. Transform is a superset of Duplex streams with the only difference is that in this the data can be modified when reading or being written.

### Type of Stream Events

All of these stream types are instances of EventEmitter class which does mean that they emit read and write events. Each type of stream can emit the following events.

- data: This event is fired when the data is available to read by the readable stream
- error: This event is fired when there is an error reading or writing the data
- end: This event gets fired when there is no data left to read

## Readable Streams

A readable stream lets you read the data from the source. This source can be anything from a buffer, a file, etc. First, create a file simple text file from which we are going to read the data using the stream.

```text
I am Text file that contains data.
```

Now, create a new file called read.js which will implement the functionality of reading data from this text file using a readable stream.

```js
const fs = require('fs');
const readableStream = fs.createReadStream('abc.txt');
let data = '';

readableStream.on('data', function(chunk) {
	data += chunk;
});

readableStream.on('end', function() {
	console.log(data);
});
```

If you run the above program, you will get the following output:

```shell
 $ node test.js
I am Text file that contains data.
```

Which is what we wrote inside the text file. To read data using stream we use a function called `createReadStream()` of file system module `fs`.

When there is no data left to read by the readable stream, it automatically ends the callback function. The `.on` method is what we learned in the previous section of EventEmitter class. This signifies that streams use EventEmitter class behind the scenes.

## Writable Stream

Writeable streams are used to write or insert or append data to a destination. Like readable streams, they are also provided by `fs` module. Create a new file called `wrtte.js` in which are going to use a readable stream to read data from the source and write it to a destination by creating a new `.txt` file.

```js
const fs = require('fs');
const readableStream = fs.createReadStream('./abc.txt');
const writeableStream = fs.createWriteStream('./dest.txt');
let data = '';

readableStream.on('data', function(chunk) {
	writeableStream.write(chunk);
});
```

When you run this program, a new file will be created by the writable stream since it has access to the file system module. Writable stream uses `.write()` method to output the data on the destination. In the above example, we are creating a new file called `dest.txt` that will contain the same data as of `abc.txt`.

## Piping

Piping is a mechanism by which you can read data from the source and write it to the destination without writing so much code like we did above and it does not use `.on` or `.write` methods.

If we are to write above example using pipe, we will write like below:

```js
const fs = require('fs');
const readableStream = fs.createReadStream('./abc.txt');
const writeableStream = fs.createWriteStream('./dest.txt');

readableStream.pipe(writeableStream);
```

Notice how many lines of code we have removed. Also, we now only need the source and destination file paths and to read and write data we are using `.pipe()` method.

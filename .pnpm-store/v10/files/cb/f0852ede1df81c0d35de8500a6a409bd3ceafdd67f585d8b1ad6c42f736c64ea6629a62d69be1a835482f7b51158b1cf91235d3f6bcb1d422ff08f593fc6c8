smart-buffer  [![Build Status](https://travis-ci.org/JoshGlazebrook/smart-buffer.svg?branch=master)](https://travis-ci.org/JoshGlazebrook/smart-buffer)  [![Coverage Status](https://coveralls.io/repos/github/JoshGlazebrook/smart-buffer/badge.svg?branch=master)](https://coveralls.io/github/JoshGlazebrook/smart-buffer?branch=master)
=============

smart-buffer is a Buffer wrapper that adds automatic read & write offset tracking, string operations, data insertions, and more.

![stats](https://nodei.co/npm/smart-buffer.png?downloads=true&downloadRank=true&stars=true "stats")

**Key Features**:
* Proxies all of the Buffer write and read functions
* Keeps track of read and write offsets automatically
* Grows the internal Buffer as needed
* Useful string operations. (Null terminating strings)
* Allows for inserting values at specific points in the Buffer
* Built in TypeScript
* Type Definitions Provided
* Browser Support (using Webpack/Browserify)
* Full test coverage

**Requirements**:
* Node v4.0+ is supported at this time.  (Versions prior to 2.0 will work on node 0.10)



## Breaking Changes in v4.0

* Old constructor patterns have been completely removed. It's now required to use the SmartBuffer.fromXXX() factory constructors.
* rewind(), skip(), moveTo() have been removed. (see [offsets](#offsets))
* Internal private properties are now prefixed with underscores (_)
* **All** writeXXX() methods that are given an offset will now **overwrite data** instead of insert. (see [write vs insert](#write-vs-insert))
* insertXXX() methods have been added for when you want to insert data at a specific offset (this replaces the old behavior of writeXXX() when an offset was provided)


## Looking for v3 docs?

Legacy documentation for version 3 and prior can be found [here](https://github.com/JoshGlazebrook/smart-buffer/blob/master/docs/README_v3.md).

## Installing:

`yarn add smart-buffer`

or

`npm install smart-buffer`

Note: The published NPM package includes the built javascript library.
If you cloned this repo and wish to build the library manually use:

`npm run build`

## Using smart-buffer

```javascript
// Javascript
const SmartBuffer = require('smart-buffer').SmartBuffer;

// Typescript
import { SmartBuffer, SmartBufferOptions} from 'smart-buffer';
```

### Simple Example

Building a packet that uses the following protocol specification:

`[PacketType:2][PacketLength:2][Data:XX]`

To build this packet using the vanilla Buffer class, you would have to count up the length of the data payload beforehand. You would also need to keep track of the current "cursor" position in your Buffer so you write everything in the right places. With smart-buffer you don't have to do either of those things.

```javascript
function createLoginPacket(username, password, age, country) {
    const packet = new SmartBuffer();
    packet.writeUInt16LE(0x0060); // Some packet type
    packet.writeStringNT(username);
    packet.writeStringNT(password);
    packet.writeUInt8(age);
    packet.writeStringNT(country);
    packet.insertUInt16LE(packet.length - 2, 2);

    return packet.toBuffer();
}
```
With the above function, you now can do this:
```javascript
const login = createLoginPacket("Josh", "secret123", 22, "United States");

// <Buffer 60 00 1e 00 4a 6f 73 68 00 73 65 63 72 65 74 31 32 33 00 16 55 6e 69 74 65 64 20 53 74 61 74 65 73 00>
```
Notice that the `[PacketLength:2]` value (1e 00) was inserted at position 2.

Reading back the packet we created above is just as easy:
```javascript

const reader = SmartBuffer.fromBuffer(login);

const logininfo = {
    packetType: reader.readUInt16LE(),
    packetLength: reader.readUInt16LE(),
    username: reader.readStringNT(),
    password: reader.readStringNT(),
    age: reader.readUInt8(),
    country: reader.readStringNT()
};

/*
{
    packetType: 96, (0x0060)
    packetLength: 30,
    username: 'Josh',
    password: 'secret123',
    age: 22,
    country: 'United States'
}
*/
```


## Write vs Insert
In prior versions of SmartBuffer, .writeXXX(value, offset) calls would insert data when an offset was provided. In version 4, this will now overwrite the data at the offset position. To insert data there are now corresponding .insertXXX(value, offset) methods.

**SmartBuffer v3**:
```javascript
const buff = SmartBuffer.fromBuffer(new Buffer([1,2,3,4,5,6]));
buff.writeInt8(7, 2);
console.log(buff.toBuffer())

// <Buffer 01 02 07 03 04 05 06>
```

**SmartBuffer v4**:
```javascript
const buff = SmartBuffer.fromBuffer(new Buffer([1,2,3,4,5,6]));
buff.writeInt8(7, 2);
console.log(buff.toBuffer());

// <Buffer 01 02 07 04 05 06>
```

To insert you instead should use:
```javascript
const buff = SmartBuffer.fromBuffer(new Buffer([1,2,3,4,5,6]));
buff.insertInt8(7, 2);
console.log(buff.toBuffer());

// <Buffer 01 02 07 03 04 05 06>
```

**Note:** Insert/Writing to a position beyond the currently tracked internal Buffer will zero pad to your offset.

## Constructing a smart-buffer

There are a few different ways to construct a SmartBuffer instance.

```javascript
// Creating SmartBuffer from existing Buffer
const buff = SmartBuffer.fromBuffer(buffer); // Creates instance from buffer. (Uses default utf8 encoding)
const buff = SmartBuffer.fromBuffer(buffer, 'ascii'); // Creates instance from buffer with ascii encoding for strings.

// Creating SmartBuffer with specified internal Buffer size. (Note: this is not a hard cap, the internal buffer will grow as needed).
const buff = SmartBuffer.fromSize(1024); // Creates instance with internal Buffer size of 1024.
const buff = SmartBuffer.fromSize(1024, 'utf8'); // Creates instance with internal Buffer size of 1024, and utf8 encoding for strings.

// Creating SmartBuffer with options object. This one specifies size and encoding.
const buff = SmartBuffer.fromOptions({
    size: 1024,
    encoding: 'ascii'
});

// Creating SmartBuffer with options object. This one specified an existing Buffer.
const buff = SmartBuffer.fromOptions({
    buff: buffer
});

// Creating SmartBuffer from a string.
const buff = SmartBuffer.fromBuffer(Buffer.from('some string', 'utf8'));

// Just want a regular SmartBuffer with all default options?
const buff = new SmartBuffer();
```

# Api Reference:

**Note:** SmartBuffer is fully documented with Typescript definitions as well as jsdocs so your favorite editor/IDE will have intellisense.

**Table of Contents**

1. [Constructing](#constructing)
2. **Numbers**
    1. [Integers](#integers)
    2. [Floating Points](#floating-point-numbers)
3. **Strings**
    1. [Strings](#strings)
    2. [Null Terminated Strings](#null-terminated-strings)
4. [Buffers](#buffers)
5. [Offsets](#offsets)
6. [Other](#other)


## Constructing

### constructor()
### constructor([options])
- ```options``` *{SmartBufferOptions}* An optional options object to construct a SmartBuffer with.

Examples:
```javascript
const buff = new SmartBuffer();
const buff = new SmartBuffer({
    size: 1024,
    encoding: 'ascii'
});
```

### Class Method: fromBuffer(buffer[, encoding])
- ```buffer``` *{Buffer}* The Buffer instance to wrap.
- ```encoding``` *{string}* The string encoding to use. ```Default: 'utf8'```

Examples:
```javascript
const someBuffer = Buffer.from('some string');
const buff = SmartBuffer.fromBuffer(someBuffer); // Defaults to utf8
const buff = SmartBuffer.fromBuffer(someBuffer, 'ascii');
```

### Class Method: fromSize(size[, encoding])
- ```size``` *{number}* The size to initialize the internal Buffer.
- ```encoding``` *{string}* The string encoding to use. ```Default: 'utf8'```

Examples:
```javascript
const buff = SmartBuffer.fromSize(1024); // Defaults to utf8
const buff = SmartBuffer.fromSize(1024, 'ascii');
```

### Class Method: fromOptions(options)
- ```options``` *{SmartBufferOptions}* The Buffer instance to wrap.

```typescript
interface SmartBufferOptions {
    encoding?: BufferEncoding; // Defaults to utf8
    size?: number; // Defaults to 4096
    buff?: Buffer;
}
```

Examples:
```javascript
const buff = SmartBuffer.fromOptions({
    size: 1024
};
const buff = SmartBuffer.fromOptions({
    size: 1024,
    encoding: 'utf8'
});
const buff = SmartBuffer.fromOptions({
    encoding: 'utf8'
});

const someBuff = Buffer.from('some string', 'utf8');
const buff = SmartBuffer.fromOptions({
    buffer: someBuff,
    encoding: 'utf8'
});
```

## Integers

### buff.readInt8([offset])
### buff.readUInt8([offset])
- ```offset``` *{number}* Optional position to start reading data from. **Default**: ```Auto managed offset```
- Returns *{number}*

Read a Int8 value.

### buff.readInt16BE([offset])
### buff.readInt16LE([offset])
### buff.readUInt16BE([offset])
### buff.readUInt16LE([offset])
- ```offset``` *{number}* Optional position to start reading data from. **Default**: ```Auto managed offset```
- Returns *{number}*

Read a 16 bit integer value.

### buff.readInt32BE([offset])
### buff.readInt32LE([offset])
### buff.readUInt32BE([offset])
### buff.readUInt32LE([offset])
- ```offset``` *{number}* Optional position to start reading data from. **Default**: ```Auto managed offset```
- Returns *{number}*

Read a 32 bit integer value.


### buff.writeInt8(value[, offset])
### buff.writeUInt8(value[, offset])
- ```value``` *{number}* The value to write.
- ```offset``` *{number}* An optional offset to write this value to. **Default:** ```Auto managed offset```
- Returns *{this}*

Write a Int8 value.

### buff.insertInt8(value, offset)
### buff.insertUInt8(value, offset)
- ```value``` *{number}* The value to insert.
- ```offset``` *{number}* The offset to insert this data at.
- Returns *{this}*

Insert a Int8 value.


### buff.writeInt16BE(value[, offset])
### buff.writeInt16LE(value[, offset])
### buff.writeUInt16BE(value[, offset])
### buff.writeUInt16LE(value[, offset])
- ```value``` *{number}* The value to write.
- ```offset``` *{number}* An optional offset to write this value to. **Default:** ```Auto managed offset```
- Returns *{this}*

Write a 16 bit integer value.

### buff.insertInt16BE(value, offset)
### buff.insertInt16LE(value, offset)
### buff.insertUInt16BE(value, offset)
### buff.insertUInt16LE(value, offset)
- ```value``` *{number}* The value to insert.
- ```offset``` *{number}* The offset to insert this data at.
- Returns *{this}*

Insert a 16 bit integer value.


### buff.writeInt32BE(value[, offset])
### buff.writeInt32LE(value[, offset])
### buff.writeUInt32BE(value[, offset])
### buff.writeUInt32LE(value[, offset])
- ```value``` *{number}* The value to write.
- ```offset``` *{number}* An optional offset to write this value to. **Default:** ```Auto managed offset```
- Returns *{this}*

Write a 32 bit integer value.

### buff.insertInt32BE(value, offset)
### buff.insertInt32LE(value, offset)
### buff.insertUInt32BE(value, offset)
### buff.nsertUInt32LE(value, offset)
- ```value``` *{number}* The value to insert.
- ```offset``` *{number}* The offset to insert this data at.
- Returns *{this}*

Insert a 32 bit integer value.


## Floating Point Numbers

### buff.readFloatBE([offset])
### buff.readFloatLE([offset])
- ```offset``` *{number}* Optional position to start reading data from. **Default**: ```Auto managed offset```
- Returns *{number}*

Read a Float value.

### buff.readDoubleBE([offset])
### buff.readDoubleLE([offset])
- ```offset``` *{number}* Optional position to start reading data from. **Default**: ```Auto managed offset```
- Returns *{number}*

Read a Double value.


### buff.writeFloatBE(value[, offset])
### buff.writeFloatLE(value[, offset])
- ```value``` *{number}* The value to write.
- ```offset``` *{number}* An optional offset to write this value to. **Default:** ```Auto managed offset```
- Returns *{this}*

Write a Float value.

### buff.insertFloatBE(value, offset)
### buff.insertFloatLE(value, offset)
- ```value``` *{number}* The value to insert.
- ```offset``` *{number}* The offset to insert this data at.
- Returns *{this}*

Insert a Float value.


### buff.writeDoubleBE(value[, offset])
### buff.writeDoubleLE(value[, offset])
- ```value``` *{number}* The value to write.
- ```offset``` *{number}* An optional offset to write this value to. **Default:** ```Auto managed offset```
- Returns *{this}*

Write a Double value.

### buff.insertDoubleBE(value, offset)
### buff.insertDoubleLE(value, offset)
- ```value``` *{number}* The value to insert.
- ```offset``` *{number}* The offset to insert this data at.
- Returns *{this}*

Insert a Double value.

## Strings

### buff.readString()
### buff.readString(size[, encoding])
### buff.readString(encoding)
- ```size``` *{number}* The number of bytes to read. **Default:** ```Reads to the end of the Buffer.```
- ```encoding``` *{string}* The string encoding to use. **Default:** ```utf8```.

Read a string value.

Examples:
```javascript
const buff = SmartBuffer.fromBuffer(Buffer.from('hello there', 'utf8'));
buff.readString(); // 'hello there'
buff.readString(2); // 'he'
buff.readString(2, 'utf8'); // 'he'
buff.readString('utf8'); // 'hello there'
```

### buff.writeString(value)
### buff.writeString(value[, offset])
### buff.writeString(value[, encoding])
### buff.writeString(value[, offset[, encoding]])
- ```value``` *{string}* The string value to write.
- ```offset``` *{number}* The offset to write this value to. **Default:** ```Auto managed offset```
- ```encoding``` *{string}* An optional string encoding to use. **Default:** ```utf8```

Write a string value.

Examples:
```javascript
buff.writeString('hello'); // Auto managed offset
buff.writeString('hello', 2);
buff.writeString('hello', 'utf8') // Auto managed offset
buff.writeString('hello', 2, 'utf8');
```

### buff.insertString(value, offset[, encoding])
- ```value``` *{string}* The string value to write.
- ```offset``` *{number}* The offset to write this value to.
- ```encoding``` *{string}* An optional string encoding to use. **Default:** ```utf8```

Insert a string value.

Examples:
```javascript
buff.insertString('hello', 2);
buff.insertString('hello', 2, 'utf8');
```

## Null Terminated Strings

### buff.readStringNT()
### buff.readStringNT(encoding)
- ```encoding``` *{string}* The string encoding to use. **Default:** ```utf8```.

Read a null terminated string value. (If a null is not found, it will read to the end of the Buffer).

Examples:
```javascript
const buff = SmartBuffer.fromBuffer(Buffer.from('hello\0 there', 'utf8'));
buff.readStringNT(); // 'hello'

// If we called this again:
buff.readStringNT(); // ' there'
```

### buff.writeStringNT(value)
### buff.writeStringNT(value[, offset])
### buff.writeStringNT(value[, encoding])
### buff.writeStringNT(value[, offset[, encoding]])
- ```value``` *{string}* The string value to write.
- ```offset``` *{number}* The offset to write this value to. **Default:** ```Auto managed offset```
- ```encoding``` *{string}* An optional string encoding to use. **Default:** ```utf8```

Write a null terminated string value.

Examples:
```javascript
buff.writeStringNT('hello'); // Auto managed offset   <Buffer 68 65 6c 6c 6f 00>
buff.writeStringNT('hello', 2); // <Buffer 00 00 68 65 6c 6c 6f 00>
buff.writeStringNT('hello', 'utf8') // Auto managed offset
buff.writeStringNT('hello', 2, 'utf8');
```

### buff.insertStringNT(value, offset[, encoding])
- ```value``` *{string}* The string value to write.
- ```offset``` *{number}* The offset to write this value to.
- ```encoding``` *{string}* An optional string encoding to use. **Default:** ```utf8```

Insert a null terminated string value.

Examples:
```javascript
buff.insertStringNT('hello', 2);
buff.insertStringNT('hello', 2, 'utf8');
```

## Buffers

### buff.readBuffer([length])
- ```length``` *{number}* The number of bytes to read into a Buffer. **Default:** ```Reads to the end of the Buffer```

Read a Buffer of a specified size.

### buff.writeBuffer(value[, offset])
- ```value``` *{Buffer}* The buffer value to write.
- ```offset``` *{number}* An optional offset to write the value to. **Default:** ```Auto managed offset```

### buff.insertBuffer(value, offset)
- ```value``` *{Buffer}* The buffer value to write.
- ```offset``` *{number}* The offset to write the value to.


### buff.readBufferNT()

Read a null terminated Buffer.

### buff.writeBufferNT(value[, offset])
- ```value``` *{Buffer}* The buffer value to write.
- ```offset``` *{number}* An optional offset to write the value to. **Default:** ```Auto managed offset```

Write a null terminated Buffer.


### buff.insertBufferNT(value, offset)
- ```value``` *{Buffer}* The buffer value to write.
- ```offset``` *{number}* The offset to write the value to.

Insert a null terminated Buffer.


## Offsets

### buff.readOffset
### buff.readOffset(offset)
- ```offset``` *{number}* The new read offset value to set.
- Returns: ```The current read offset```

Gets or sets the current read offset.

Examples:
```javascript
const currentOffset = buff.readOffset; // 5

buff.readOffset = 10;

console.log(buff.readOffset) // 10
```

### buff.writeOffset
### buff.writeOffset(offset)
- ```offset``` *{number}* The new write offset value to set.
- Returns: ```The current write offset```

Gets or sets the current write offset.

Examples:
```javascript
const currentOffset = buff.writeOffset; // 5

buff.writeOffset = 10;

console.log(buff.writeOffset) // 10
```

### buff.encoding
### buff.encoding(encoding)
- ```encoding``` *{string}* The new string encoding to set.
- Returns: ```The current string encoding```

Gets or sets the current string encoding.

Examples:
```javascript
const currentEncoding = buff.encoding; // 'utf8'

buff.encoding = 'ascii';

console.log(buff.encoding) // 'ascii'
```

## Other

### buff.clear()

Clear and resets the SmartBuffer instance.

### buff.remaining()
- Returns ```Remaining data left to be read```

Gets the number of remaining bytes to be read.


### buff.internalBuffer
- Returns: *{Buffer}*

Gets the internally managed Buffer (Includes unmanaged data).

Examples:
```javascript
const buff = SmartBuffer.fromSize(16);
buff.writeString('hello');
console.log(buff.InternalBuffer); // <Buffer 68 65 6c 6c 6f 00 00 00 00 00 00 00 00 00 00 00>
```

### buff.toBuffer()
- Returns: *{Buffer}*

Gets a sliced Buffer instance of the internally managed Buffer. (Only includes managed data)

Examples:
```javascript
const buff = SmartBuffer.fromSize(16);
buff.writeString('hello');
console.log(buff.toBuffer()); // <Buffer 68 65 6c 6c 6f>
```

### buff.toString([encoding])
- ```encoding``` *{string}* The string encoding to use when converting to a string. **Default:** ```utf8```
- Returns *{string}*

Gets a string representation of all data in the SmartBuffer.

### buff.destroy()

Destroys the SmartBuffer instance.



## License

This work is licensed under the [MIT license](http://en.wikipedia.org/wiki/MIT_License).

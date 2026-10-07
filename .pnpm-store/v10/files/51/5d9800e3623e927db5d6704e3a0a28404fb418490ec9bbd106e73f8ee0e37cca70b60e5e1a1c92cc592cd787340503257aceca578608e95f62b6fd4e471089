# msgpackr
[![npm version](https://img.shields.io/npm/v/msgpackr.svg?style=flat-square)](https://www.npmjs.org/package/msgpackr)
[![npm version](https://img.shields.io/npm/dw/msgpackr)](https://www.npmjs.org/package/msgpackr)
[![encode](https://img.shields.io/badge/encode-1.5GB%2Fs-yellow)](benchmark.md)
[![decode](https://img.shields.io/badge/decode-2GB%2Fs-yellow)](benchmark.md)
[![types](https://img.shields.io/npm/types/msgpackr)](README.md)
[![module](https://img.shields.io/badge/module-ESM%2FCJS-blue)](README.md)
[![license](https://img.shields.io/badge/license-MIT-brightgreen)](LICENSE)

<img align="right" src="./assets/performance.png" width="380"/>

The msgpackr package is an extremely fast MessagePack NodeJS/JavaScript implementation. Currently, it is significantly faster than any other known implementations, faster than Avro (for JS), and generally faster than native V8 JSON.stringify/parse, on NodeJS. It also includes an optional record extension (the `r` in msgpackr), for defining record structures that makes MessagePack even faster and more compact, often over twice as fast as even native JSON functions, several times faster than other JS implementations, and 15-50% more compact. See the performance section for more details. Structured cloning (with support for cyclical references) is also supported through optional extensions.

## Basic Usage

Install with:

```
npm i msgpackr
```
And `import` or `require` it for basic standard serialization/encoding (`pack`) and deserialization/decoding (`unpack`) functions:
```js
import { unpack, pack } from 'msgpackr';
let serializedAsBuffer = pack(value);
let data = unpack(serializedAsBuffer);
```
This `pack` function will generate standard MessagePack without any extensions that should be compatible with any standard MessagePack parser/decoder. It will serialize JavaScript objects as MessagePack `map`s by default. The `unpack` function will deserialize MessagePack `map`s as an `Object` with the properties from the map.

## Node Usage
The msgpackr package runs on any modern JS platform, but is optimized for NodeJS usage (and will use a node addon for performance boost as an optional dependency).

### Streams
We can use the including streaming functionality (which further improves performance). The `PackrStream` is a NodeJS transform stream that can be used to serialize objects to a binary stream (writing to network/socket, IPC, etc.), and the `UnpackrStream` can be used to deserialize objects from a binary sream (reading from network/socket, etc.):

```js
import { PackrStream } from 'msgpackr';
let stream = new PackrStream();
stream.write(myData);

```
Or for a full example of sending and receiving data on a stream:
```js
import { PackrStream, UnpackrStream } from 'msgpackr';
let sendingStream = new PackrStream();
let receivingStream = new UnpackrStream();
// we are just piping to our own stream, but normally you would send and
// receive over some type of inter-process or network connection.
sendingStream.pipe(receivingStream);
sendingStream.write(myData);
receivingStream.on('data', (data) => {
	// received data
});
```
The `PackrStream` and `UnpackrStream` instances  will have also the record structure extension enabled by default (see below).

## Deno and Bun Usage
Msgpackr modules are standard ESM modules and can be loaded directly from the [deno.land registry for msgpackr](https://deno.land/x/msgpackr) for use in Deno or using the NPM module loader with `import { unpack } from 'npm:msgpackr'`. The standard pack/encode and unpack/decode functionality is available on Deno, like other platforms. msgpackr can be used like any other package on Bun.

## Browser Usage
Msgpackr works as standalone JavaScript as well, and runs on modern browsers. It includes a bundled script, at `dist/index.js` for ease of direct loading:
```html
<script src="node_modules/msgpackr/dist/index.js"></script>
```

This is UMD based, and will register as a module if possible, or create a `msgpackr` global with all the exported functions.

For module-based development, it is recommended that you directly import the module of interest, to minimize dependencies that get pulled into your application:
```js
import { unpack } from 'msgpackr/unpack' // if you only need to unpack
```

The package also includes a minified bundle in index.min.js. 
Additionally, the package includes a version that excludes dynamic code evaluation called index-no-eval.js, for situations where Content Security Policy (CSP) forbids eval/Function in code. The dynamic evaluation provides important performance optimizations (for records), so is not recommended unless required by CSP policy.

## Structured Cloning
You can also use msgpackr for [structured cloning](https://html.spec.whatwg.org/multipage/structured-data.html). By enabling the `structuredClone` option, you can include references to other objects or cyclic references, and object identity will be preserved. Structured cloning also enables preserving certain typed objects like `Error`, `Set`, `RegExp` and TypedArray instances. For example:
```js
let obj = {
	set: new Set(['a', 'b']),
	regular: /a\spattern/
};
obj.self = obj;
let packr = new Packr({ structuredClone: true });
let serialized = packr.pack(obj);
let copy = packr.unpack(serialized);
copy.self === copy // true
copy.set.has('a') // true

```

This option is disabled by default because it uses extensions and reference checking degrades performance (by about 25-30%). (Note this implementation doesn't serialize every class/type specified in the HTML specification since not all of them make sense for storing across platforms.)

### Alternate Terminology
If you prefer to use encoder/decode terminology, msgpackr exports aliases, so `decode` is equivalent to `unpack`, `encode` is `pack`, `Encoder` is `Packr`, `Decoder` is `Unpackr`, and `EncoderStream` and `DecoderStream` can be used as well.

## Record / Object Structures
There is a critical difference between maps (or dictionaries) that hold an arbitrary set of keys and values (JavaScript `Map` is designed for these), and records or object structures that have a well-defined set of fields. Typical JS objects/records may have many instances re(use) the same structure. By using the record extension, this distinction is preserved in MessagePack and the encoding can reuse structures and not only provides better type preservation, but yield much more compact encodings and increase decoding performance by 2-3x. Msgpackr automatically generates record definitions that are reused and referenced by objects with the same structure. There are a number of ways to use this to our advantage. For large object structures with repeating nested objects with similar structures, simply serializing with the record extension can yield significant benefits. To use the record structures extension, we create a new `Packr` instance. By default a new `Packr` instance will have the record extension enabled:
```js
import { Packr } from 'msgpackr';
let packr = new Packr();
packr.pack(bigDataWithLotsOfObjects);

```

Another way to further leverage the benefits of the msgpackr record structures is to use streams that naturally allow for data to reuse based on previous record structures. The stream classes have the record structure extension enabled by default and provide excellent out-of-the-box performance.

When creating a new `Packr`, `Unpackr`, `PackrStream`, or `UnpackrStream` instance, we can enable or disable the record structure extension with the `useRecords` property. When this is `false`, the record structure extension will be disabled (standard/compatibility mode), and all objects will revert to being serialized using MessageMap `map`s, and all `map`s will be deserialized to JS `Object`s as properties (like the standalone `pack` and `unpack` functions).

Streaming with record structures works by encoding a structure the first time it is seen in a stream and referencing the structure in later messages that are sent across that stream. When an encoder can expect a decoder to understand previous structure references, this can be configured using the `sequential: true` flag, which is auto-enabled by streams, but can also be used with Packr instances.

### Shared Record Structures
Another useful way of using msgpackr, and the record extension, is for storing data in a databases, files, or other storage systems. If a number of objects with common data structures are being stored, a shared structure can be used to greatly improve data storage and deserialization efficiency. In the simplest form, provide a `structures` array, which is updated if any new object structure is encountered:
```js
import { Packr } from 'msgpackr';
let packr = new Packr({
	structures: [... structures that were last generated ...]
});
```
If you are working with persisted data, you will need to persist the `structures` data when it is updated. Msgpackr provides an API for loading and saving the `structures` on demand (which is robust and can be used in multiple-process situations where other processes may be updating this same `structures` array), we just need to provide a way to store the generated shared structure so it is available to deserialize stored data in the future:
```js
import { Packr } from 'msgpackr';
let packr = new Packr({
	getStructures() {
		// storing our data in file (but we could also store in a db or key-value store)
		return unpack(readFileSync('my-shared-structures.mp')) || [];
	},
	saveStructures(structures) {
		writeFileSync('my-shared-structures.mp', pack(structures));
	}
});
```
Msgpackr will automatically add and saves structures as it encounters any new object structures (up to a limit of 32, by default). It will always add structures in an incremental/compatible way: Any object encoded with an earlier structure can be decoded with a later version (as long as it is persisted).

#### Shared Structures Options
By default there is a limit of 32 shared structures. This default is designed to record common shared structures, but also be resilient against sharing too many structures if there are many objects with dynamic properties that are likely to be repeated. This also allows for slightly more efficient one byte encoding. However, if your application has more structures that are commonly repeated, you can increase this limit by setting `maxSharedStructures` to a higher value. The maximum supported shared structures is 8160.

You can also provide a `shouldShareStructure` function in the options if you want to specifically indicate which structures should be shared. This is called during the encoding process with the array of keys for a structure that is being considered for addition to the shared structure. For example, you might want:
```
	maxSharedStructures: 100,
	shouldShareStructure(keys) {
		return !(keys[0] > 1) // don't share structures that consist of numbers as keys
	}
```

### Reading Multiple Values
If you have a buffer with multiple values sequentially encoded, you can choose to parse and read multiple values. This can be done using the `unpackMultiple` function/method, which can return an array of all the values it can sequentially parse within the provided buffer. For example:
```js
let data = new Uint8Array([1, 2, 3]) // encodings of values 1, 2, and 3
let values = unpackMultiple(data) // [1, 2, 3]
```
Alternately, you can provide a callback function that is called as the parsing occurs with each value, and can optionally terminate the parsing by returning `false`:
```js
let data = new Uint8Array([1, 2, 3]) // encodings of values 1, 2, and 3
unpackMultiple(data, (value) => {
	// called for each value
	// return false if you wish to end the parsing
})
```

If you need to know the start and end offsets of the unpacked values, these are
provided as optional parameters in the callback:
```js
let data = new Uint8Array([1, 2, 3]) // encodings of values 1, 2, and 3
unpackMultiple(data, (value,start,end) => {
	// called for each value
	// `start` is the data buffer offset where the value was read from
	// `end` is `start` plus the byte length of the encoded value
	// return false if you wish to end the parsing
})
```

## Options
The following options properties can be provided to the Packr or Unpackr constructor:

* `useRecords` - Setting this to `false` disables the record extension and stores JavaScript objects as MessagePack maps, and unpacks maps as JavaScript `Object`s, which ensures compatibilty with other decoders. Setting this to a function will use records for objects where `useRecords(object)` returns `true`.
* `structures` - Provides the array of structures that is to be used for record extension, if you want the structures saved and used again. This array will be modified in place with new record structures that are serialized (if less than 32 structures are in the array).
* `moreTypes` - Enable serialization of additional built-in types/classes including typed arrays, `Set`s, `Map`s, and `Error`s.
* `structuredClone` - This enables the structured cloning extensions that will encode object/cyclic references. `moreTypes` is enabled by default when this is enabled.
* `mapsAsObjects` - If `true`, this will decode MessagePack maps and JS `Object`s with the map entries decoded to object properties. If `false`, maps are decoded as JavaScript `Map`s. This is disabled by default if `useRecords` is enabled (which allows `Map`s to be preserved), and is enabled by default if `useRecords` is disabled.
* `useFloat32` - This will enable msgpackr to encode non-integer numbers as `float32`. See next section for possible values.
* `variableMapSize` - This will use varying map size definition (fixmap, map16, map32) based on the number of keys when encoding objects, which yields slightly more compact encodings (for small objects), but is typically 5-10% slower during encoding. This is necessary if you need to use objects with more than 65535 keys. This is only relevant when record extension is disabled.
* `bundleStrings` - If `true` this uses a custom extension that bundles strings together, so that they can be decoded more quickly on browsers and Deno that do not have access to the NodeJS addon. This a custom extension, so both encoder and decoder need to support this. This can yield significant decoding performance increases on browsers (30%-50%).
* `copyBuffers` - When decoding a MessagePack with binary data (Buffers are encoded as binary data), copy the buffer rather than providing a slice/view of the buffer. If you want your input data to be collected or modified while the decoded embedded buffer continues to live on, you can use this option (there is extra overhead to copying).
* `useTimestamp32` - Encode JS `Date`s in 32-bit format when possible by dropping the milliseconds. This is a more efficient encoding of dates. You can also cause dates to use 32-bit format by manually setting the milliseconds to zero (`date.setMilliseconds(0)`).
* `sequential` - Encode structures in serialized data, and reference previously encoded structures with expectation that decoder will read the encoded structures in the same order as encoded, with `unpackMultiple`.
* `largeBigIntToFloat` - If a bigint needs to be encoded that is larger than will fit in 64-bit integers, it will be encoded as a float-64 (otherwise will throw a RangeError).
* `largeBigIntToString` - If a bigint needs to be encoded that is larger than will fit in 64-bit integers, it will be encoded as a string (otherwise will throw a RangeError).
* `useBigIntExtension` - If a bigint needs to be encoded that is larger than will fit in 64-bit integers, it will be encoded using a custom extension that supports up to about 1000-bits of integer precision.
* `encodeUndefinedAsNil` - Encodes a value of `undefined` as a MessagePack `nil`, the same as a `null`.
* `int64AsType` - This will decode uint64 and int64 numbers as the specified type. The type can be `bigint` (default), `number`,  `string`, or `auto` (where range [-2^53...2^53] is represented by number and everything else by a bigint).
* `skipValues` - This can be an array of property values that will indicate properties that should be skipped when serializing objects. For example, to mimic `JSON.stringify`'s behavior of skipping properties with a value of `undefined`, you can provide `skipValues: [undefined]`. Note, that this will only apply to serializing objects as standard MessagePack maps, not to records. Also, the array is checked by calling the `include` method, so you can provide an object with an `includes` if you want a custom function to skip values. 
* `onInvalidDate` - This can be provided as function that will be called when an invalid date is provided. The function can throw an error, or return a value that will be encoded in place of the invalid date. If not provided, an invalid date will be encoded as an invalid timestamp (which decodes with msgpackr back to an invalid date).
* `writeFunction` - This can be provided as function that will be called when a function is encountered. The function can throw an error, or return a value that will be encoded in place of the function. If not provided, a function will be encoded as undefined (similar to `JSON.stringify`).
* `mapAsEmptyObject` - Encodes JS `Map`s as empty objects (for back-compat with older libraries).
* `setAsEmptyObject` - Encodes JS `Set`s as empty objects (for back-compat with older libraries).
* `allowArraysInMapKeys` - Allows arrays to be used as keys in Maps, as long as all elements are strings, numbers, booleans, or bigints. When enabled, such arrays are flattened and converted to a string representation.

### 32-bit Float Options
By default all non-integer numbers are serialized as 64-bit float (double). This is fast, and ensures maximum precision. However, often real-world data doesn't not need 64-bits of precision, and using 32-bit encoding can be much more space efficient. There are several options that provide more efficient encodings. Using the decimal rounding options for encoding and decoding provides lossless storage of common decimal representations like 7.99, in more efficient 32-bit format (rather than 64-bit). The `useFloat32` property has several possible options, available from the module as constants:
```js
import { FLOAT32_OPTIONS } from 'msgpackr';
const { ALWAYS, DECIMAL_ROUND, DECIMAL_FIT } = FLOAT32_OPTIONS;
```

* `ALWAYS` (1) - Always will encode non-integers (absolute less than 2147483648) as 32-bit float.
* `DECIMAL_ROUND` (3) - Always will encode non-integers as 32-bit float, and when decoding 32-bit float, round to the significant decimal digits (usually 7, but 6 or 8 digits for some ranges).
* `DECIMAL_FIT` (4) - Only encode non-integers as 32-bit float if all significant digits (usually up to 7) can be unambiguously encoded as a 32-bit float, and decode/unpack with decimal rounding (same as above). This will ensure round-trip encoding/decoding without loss in precision and uses 32-bit when possible.

Note, that the performance is decreased with decimal rounding by about 20-25%, although if only 5% of your values are floating point, that will only have about a 1% impact overall.

In addition, msgpackr exports a `roundFloat32(number)` function that can be used to round floating point numbers to the maximum significant decimal digits that can be stored in 32-bit float, just as DECIMAL_ROUND does when decoding. This can be useful for determining how a number will be decoded prior to encoding it.

## Performance
### Native Acceleration
Msgpackr employs an optional native node-addon to accelerate the parsing of strings. This should be automatically installed and utilized on NodeJS. However, you can verify this by checking the `isNativeAccelerationEnabled` property that is exported from msgpackr. If this is `false`, the `msgpackr-extract` package may not have been properly installed, and you may want to verify that it is installed correctly:
```js
import { isNativeAccelerationEnabled } from 'msgpackr'
if (!isNativeAccelerationEnabled)
	console.warn('Native acceleration not enabled, verify that install finished properly')
```

### Benchmarks
Msgpackr is fast. Really fast. Here is comparison with the next fastest JS projects using the benchmark tool from `msgpack-lite` (and the sample data is from some clinical research data we use that has a good mix of different value types and structures). It also includes comparison to V8 native JSON functionality, and JavaScript Avro (`avsc`, a very optimized Avro implementation):

operation                                                  |   op   |   ms  |  op/s
---------------------------------------------------------- | ------: | ----: | -----:
buf = Buffer(JSON.stringify(obj));                         |   81600 |  5002 |  16313
obj = JSON.parse(buf);                                     |   90700 |  5004 |  18125
require("msgpackr").pack(obj);                             |  169700 |  5000 |  33940
require("msgpackr").unpack(buf);                           |  109700 |  5003 |  21926
msgpackr w/ shared structures: packr.pack(obj);            |  190400 |  5001 |  38072
msgpackr w/ shared structures: packr.unpack(buf);          |  422900 |  5000 |  84580
buf = require("msgpack-lite").encode(obj);                 |   31300 |  5005 |   6253
obj = require("msgpack-lite").decode(buf);                 |   15700 |  5007 |   3135
buf = require("@msgpack/msgpack").encode(obj);             |  103100 |  5003 |  20607
obj = require("@msgpack/msgpack").decode(buf);             |   59100 |  5004 |  11810
buf = require("notepack").encode(obj);                     |   65500 |  5007 |  13081
obj = require("notepack").decode(buf);                     |   33400 |  5009 |   6667
obj = require("msgpack-unpack").decode(buf);               |    6900 |  5036 |   1370
require("avsc")...make schema/type...type.toBuffer(obj);   |   89300 |  5005 |  17842
require("avsc")...make schema/type...type.fromBuffer(obj); |  108400 |  5001 |  21675

All benchmarks were performed on Node 15 / V8 8.6 (Windows i7-4770 3.4Ghz).
(`avsc` is schema-based and more comparable in style to msgpackr with shared structures).

Here is a benchmark of streaming data (again borrowed from `msgpack-lite`'s benchmarking), where msgpackr is able to take advantage of the structured record extension and really demonstrate its performance capabilities:

operation (1000000 x 2)                          |   op    |  ms   |  op/s
------------------------------------------------ | ------: | ----: | -----:
new PackrStream().write(obj);                    | 1000000 |   372 | 2688172
new UnpackrStream().write(buf);                  | 1000000 |   247 | 4048582
stream.write(msgpack.encode(obj));               | 1000000 |  2898 | 345065
stream.write(msgpack.decode(buf));               | 1000000 |  1969 | 507872
stream.write(notepack.encode(obj));              | 1000000 |   901 | 1109877
stream.write(notepack.decode(buf));              | 1000000 |  1012 | 988142
msgpack.Encoder().on("data",ondata).encode(obj); | 1000000 |  1763 | 567214
msgpack.createDecodeStream().write(buf);         | 1000000 |  2222 | 450045
msgpack.createEncodeStream().write(obj);         | 1000000 |  1577 | 634115
msgpack.Decoder().on("data",ondata).decode(buf); | 1000000 |  2246 | 445235

See the [benchmark.md](benchmark.md) for more benchmarks and information about benchmarking.

## Custom Extensions
You can add your own custom extensions, which can be used to encode specific types/classes in certain ways. This is done by using the `addExtension` function, and specifying the class, extension `type` code (should be a number from 1-100, reserving negatives for MessagePack, 101-127 for msgpackr), and your `pack` and `unpack` functions (or just the one you need).
```js
import { addExtension, Packr } from 'msgpackr';

class MyCustomClass {...}

let extPackr = new Packr();
addExtension({
	Class: MyCustomClass,
	type: 11, // register your own extension code (a type code from 1-100)
	pack(instance) {
		// define how your custom class should be encoded
		return Buffer.from([instance.myData]); // return a buffer
	},
	unpack(buffer) {
		// define how your custom class should be decoded
		let instance = new MyCustomClass();
		instance.myData = buffer[0];
		return instance; // decoded value from buffer
	}
});
```
If you want to use msgpackr to encode and decode the data within your extensions, you can use the `read` and `write` functions and read and write data/objects that will be encoded and decoded by msgpackr, which can be easier and faster than creating and receiving separate buffers:

```js
import { addExtension, Packr } from 'msgpackr';

class MyCustomClass {...}

let extPackr = new Packr();
addExtension({
	Class: MyCustomClass,
	type: 11, // register your own extension code (a type code from 1-100)
	write(instance) {
		// define how your custom class should be encoded
		return instance.myData; // return some data to be encoded
	}
	read(data) {
		// define how your custom class should be decoded,
		// data will already be unpacked/decoded
		let instance = new MyCustomClass();
		instance.myData = data;
		return instance; // return decoded value
	}
});
```
Note that you can just return the same object from `write`, and in this case msgpackr will encode it using the default object/array encoding:
```js
addExtension({
	Class: MyCustomClass,
	type: 12,
	read: function(data) {
		Object.setPrototypeOf(data, MyCustomClass.prototype)
		return data
	},
	write: function(data) {
		return data
	}
})
```
You can also create an extension with `Class` and `write` methods, but no `type` (or `read`), if you just want to customize how a class is serialized without using MessagePack extension encoding.

### Additional Performance Optimizations
Msgpackr is already fast, but here are some tips for making it faster:

#### Buffer Reuse
Msgpackr is designed to work well with reusable buffers. Allocating new buffers can be relatively expensive, so if you have Node addons, it can be much faster to reuse buffers and use memcpy to copy data into existing buffers. Then msgpackr `unpack` can be executed on the same buffer, with new data, and optionally take a second paramter indicating the effective size of the available data in the buffer.

#### Arena Allocation (`useBuffer()`)
During the serialization process, data is written to buffers. Again, allocating new buffers is a relatively expensive process, and the `useBuffer` method can help allow reuse of buffers that will further improve performance. With `useBuffer` method, you can provide a buffer, serialize data into it, and when it is known that you are done using that buffer, you can call `useBuffer` again to reuse it. The use of `useBuffer` is never required, buffers will still be handled and cleaned up through GC if not used, it just provides a small performance boost.

## Record Structure Extension Definition
The record struction extension uses extension id 0x72 ("r") to declare the use of this functionality. The extension "data" byte (or bytes) identifies the byte or bytes used to identify the start of a record in the subsequent MessagePack block or stream. The identifier byte (or the first byte in a sequence) must be from 0x40 - 0x7f (and therefore replaces one byte representations of positive integers 64 - 127, which can alternately be represented with int or uint types). The extension declaration must be immediately follow by an MessagePack array that defines the field names of the record structure.

Once a record identifier and record field names have been defined, the parser/decoder should proceed to read the next value. Any subsequent use of the record identifier as a value in the block or stream should parsed as a record instance, and the next n values, where is n is the number of fields (as defined in the array of field names), should be read as the values of the fields. For example, here we have defined a structure with fields "foo" and "bar", with the record identifier 0x40, and then read a record instance that defines the field values of 4 and 2, respectively:
```
+--------+--------+--------+~~~~~~~~~~~~~~~~~~~~~~~~~+--------+--------+
|  0xd4  |  0x72  |  0x40  | array: [ "foo", "bar" ] |  0x04  |  0x02  |
+--------+--------+--------+~~~~~~~~~~~~~~~~~~~~~~~~~+--------+--------+
```
Which should generate an object that would correspond to JSON:
```js
{ "foo": 4, "bar": 2}
```

## Additional value types
msgpackr supports `undefined` (using fixext1 + type: 0 + data: 0 to match other JS implementations), `NaN`, `Infinity`, and `-Infinity` (using standard IEEE 754 representations with doubles/floats).

### Dates
msgpackr saves all JavaScript `Date`s using the standard MessagePack date extension (type -1), using the smallest of 32-bit, 64-bit or 96-bit format needed to store the date without data loss (or using 32-bit if useTimestamp32 options is specified).

### Structured Cloning
With structured cloning enabled, msgpackr will also use extensions to store Set, Map, Error, RegExp, ArrayBufferView objects and preserve their types.

## Alternate Encoding/Package
The high-performance serialization and deserialization algorithms in the msgpackr package are also available in the [cbor-x](https://github.com/kriszyp/cbor-x) for the CBOR format, with the same API and design. A quick summary of the pros and cons of using MessagePack vs CBOR are:
* MessagePack has wider adoption, and, at least with this implementation is slightly more efficient (by roughly 1%).
* CBOR has an [official IETF standardization track](https://tools.ietf.org/html/rfc7049), and the record extensions is conceptually/philosophically a better fit for CBOR tags.

## License

MIT

### Browser Consideration
MessagePack can be a great choice for high-performance data delivery to browsers, as reasonable data size is possible without compression. And msgpackr works very well in modern browsers. However, it is worth noting that if you want highly compact data, brotli or gzip are most effective in compressing, and MessagePack's character frequency tends to defeat Huffman encoding used by these standard compression algorithms, resulting in less compact data than compressed JSON.

### Credits

Various projects have been inspirations for this, and code has been borrowed from https://github.com/msgpack/msgpack-javascript and https://github.com/mtth/avsc.

# fflate
High performance (de)compression in an 8kB package

## Why fflate?
`fflate` (short for fast flate) is the **fastest, smallest, and most versatile** pure JavaScript compression and decompression library in existence, handily beating [`pako`](https://npmjs.com/package/pako), [`tiny-inflate`](https://npmjs.com/package/tiny-inflate), and [`UZIP.js`](https://github.com/photopea/UZIP.js) in performance benchmarks while being multiple times more lightweight. Its compression ratios are often better than even the original Zlib C library. It includes support for DEFLATE, GZIP, and Zlib data. Data compressed by `fflate` can be decompressed by other tools, and vice versa.

In addition to the base decompression and compression APIs, `fflate` supports high-speed ZIP file archiving for an extra 3 kB. In fact, the compressor, in synchronous mode, compresses both more quickly and with a higher compression ratio than most compression software (even Info-ZIP, a C program), and in asynchronous mode it can utilize multiple threads to achieve over 3x the performance of virtually any other utility.

|                             | `pako` | `tiny-inflate`         | `UZIP.js`             | `fflate`                       |
|-----------------------------|--------|------------------------|-----------------------|--------------------------------|
| Decompression performance   | 1x     | Up to 40% slower       | **Up to 40% faster**  | **Up to 40% faster**           |
| Compression performance     | 1x     | N/A                    | Up to 25% faster      | **Up to 50% faster**           |
| Base bundle size (minified) | 45.6kB | **3kB (inflate only)** | 14.2kB                | 8kB **(3kB for inflate only)** |
| Decompression support       | ✅     | ✅                      | ✅                    | ✅                             |
| Compression support         | ✅     | ❌                      | ✅                    | ✅                             |
| ZIP support                 | ❌     | ❌                      | ✅                    | ✅                             |
| Streaming support           | ✅     | ❌                      | ❌                    | ✅                             |
| GZIP support                | ✅     | ❌                      | ❌                    | ✅                             |
| Supports files up to 4GB    | ✅     | ❌                      | ❌                    | ✅                             |
| Doesn't hang on error       | ✅     | ❌                      | ❌                    | ✅                             |
| Dictionary support          | ✅     | ❌                      | ❌                    | ✅                             |
| Multi-thread/Asynchronous   | ❌     | ❌                      | ❌                    | ✅                             |
| Streaming ZIP support       | ❌     | ❌                      | ❌                    | ✅                             |
| Uses ES Modules             | ❌     | ❌                      | ❌                    | ✅                             |

## Demo
If you'd like to try `fflate` for yourself without installing it, you can take a look at the [browser demo](https://101arrowz.github.io/fflate). Since `fflate` is a pure JavaScript library, it works in both the browser and Node.js (see [Browser support](https://github.com/101arrowz/fflate/#browser-support) for more info).

## Usage

Install `fflate`:
```sh
npm i fflate # or yarn add fflate, or pnpm add fflate
```

Import:
```js
// I will assume that you use the following for the rest of this guide
import * as fflate from 'fflate';

// However, you should import ONLY what you need to minimize bloat.
// So, if you just need GZIP compression support:
import { gzipSync } from 'fflate';
// Woo! You just saved 20 kB off your bundle with one line.
```

If your environment doesn't support ES Modules (e.g. Node.js):
```js
// Try to avoid this when using fflate in the browser, as it will import
// all of fflate's components, even those that you aren't using.
const fflate = require('fflate');
```

If you want to load from a CDN in the browser:
```html
<!--
You should use either UNPKG or jsDelivr (i.e. only one of the following)

Note that tree shaking is completely unsupported from the CDN. If you want
a small build without build tools, please ask me and I will make one manually
with only the features you need. This build is about 31kB, or 11.5kB gzipped.
-->
<script src="https://unpkg.com/fflate@0.8.2"></script>
<script src="https://cdn.jsdelivr.net/npm/fflate@0.8.2/umd/index.js"></script>
<!-- Now, the global variable fflate contains the library -->

<!-- If you're going buildless but want ESM, import from Skypack -->
<script type="module">
  import * as fflate from 'https://cdn.skypack.dev/fflate@0.8.2?min';
</script>
```

If you are using Deno:
```js
// Don't use the ?dts Skypack flag; it isn't necessary for Deno support
// The @deno-types comment adds TypeScript typings

// @deno-types="https://cdn.skypack.dev/fflate@0.8.2/lib/index.d.ts"
import * as fflate from 'https://cdn.skypack.dev/fflate@0.8.2?min';
```


If your environment doesn't support bundling:
```js
// Again, try to import just what you need

// For the browser:
import * as fflate from 'fflate/esm/browser.js';
// If the standard ESM import fails on Node (i.e. older version):
import * as fflate from 'fflate/esm';
```

And use:
```js
// This is an ArrayBuffer of data
const massiveFileBuf = await fetch('/aMassiveFile').then(
  res => res.arrayBuffer()
);
// To use fflate, you need a Uint8Array
const massiveFile = new Uint8Array(massiveFileBuf);
// Note that Node.js Buffers work just fine as well:
// const massiveFile = require('fs').readFileSync('aMassiveFile.txt');

// Higher level means lower performance but better compression
// The level ranges from 0 (no compression) to 9 (max compression)
// The default level is 6
const notSoMassive = fflate.zlibSync(massiveFile, { level: 9 });
const massiveAgain = fflate.unzlibSync(notSoMassive);
const gzipped = fflate.gzipSync(massiveFile, {
  // GZIP-specific: the filename to use when decompressed
  filename: 'aMassiveFile.txt',
  // GZIP-specific: the modification time. Can be a Date, date string,
  // or Unix timestamp
  mtime: '9/1/16 2:00 PM'
});
```
`fflate` can autodetect a compressed file's format as well:
```js
const compressed = new Uint8Array(
  await fetch('/GZIPorZLIBorDEFLATE').then(res => res.arrayBuffer())
);
// Above example with Node.js Buffers:
// Buffer.from('H4sIAAAAAAAAE8tIzcnJBwCGphA2BQAAAA==', 'base64');

const decompressed = fflate.decompressSync(compressed);
```

Using strings is easy with `fflate`'s string conversion API:
```js
const buf = fflate.strToU8('Hello world!');

// The default compression method is gzip
// Increasing mem may increase performance at the cost of memory
// The mem ranges from 0 to 12, where 4 is the default
const compressed = fflate.compressSync(buf, { level: 6, mem: 8 });

// When you need to decompress:
const decompressed = fflate.decompressSync(compressed);
const origText = fflate.strFromU8(decompressed);
console.log(origText); // Hello world!
```

If you need to use an (albeit inefficient) binary string, you can set the second argument to `true`.
```js
const buf = fflate.strToU8('Hello world!');

// The second argument, latin1, is a boolean that indicates that the data
// is not Unicode but rather should be encoded and decoded as Latin-1.
// This is useful for creating a string from binary data that isn't
// necessarily valid UTF-8. However, binary strings are incredibly
// inefficient and tend to double file size, so they're not recommended.
const compressedString = fflate.strFromU8(
  fflate.compressSync(buf),
  true
);
const decompressed = fflate.decompressSync(
  fflate.strToU8(compressedString, true)
);
const origText = fflate.strFromU8(decompressed);
console.log(origText); // Hello world!
```

You can use streams as well to incrementally add data to be compressed or decompressed:
```js
// This example uses synchronous streams, but for the best experience
// you'll definitely want to use asynchronous streams.

let outStr = '';
const gzipStream = new fflate.Gzip({ level: 9 }, (chunk, isLast) => {
  // accumulate in an inefficient binary string (just an example)
  outStr += fflate.strFromU8(chunk, true);
});

// You can also attach the data handler separately if you don't want to
// do so in the constructor.
gzipStream.ondata = (chunk, final) => { ... }

// Since this is synchronous, all errors will be thrown by stream.push()
gzipStream.push(chunk1);
gzipStream.push(chunk2);

...

// You should mark the last chunk by using true in the second argument
// In addition to being necessary for the stream to work properly, this
// will also set the isLast parameter in the handler to true.
gzipStream.push(lastChunk, true);

console.log(outStr); // The compressed binary string is now available

// The options parameter for compression streams is optional; you can
// provide one parameter (the handler) or none at all if you set
// deflateStream.ondata later.
const deflateStream = new fflate.Deflate((chunk, final) => {
  console.log(chunk, final);
});

// If you want to create a stream from strings, use EncodeUTF8
const utfEncode = new fflate.EncodeUTF8((data, final) => {
  // Chaining streams together is done by pushing to the
  // next stream in the handler for the previous stream
  deflateStream.push(data, final);
});

utfEncode.push('Hello'.repeat(1000));
utfEncode.push(' '.repeat(100));
utfEncode.push('world!'.repeat(10), true);

// The deflateStream has logged the compressed data

const inflateStream = new fflate.Inflate();
inflateStream.ondata = (decompressedChunk, final) => { ... };

let stringData = '';

// Streaming UTF-8 decode is available too
const utfDecode = new fflate.DecodeUTF8((data, final) => {
  stringData += data;
});

// Decompress streams auto-detect the compression method, as the
// non-streaming decompress() method does.
const dcmpStrm = new fflate.Decompress((chunk, final) => {
  console.log(chunk, 'was encoded with GZIP, Zlib, or DEFLATE');
  utfDecode.push(chunk, final);
});

dcmpStrm.push(zlibJSONData1);
dcmpStrm.push(zlibJSONData2, true);

// This succeeds; the UTF-8 decoder chained with the unknown compression format
// stream to reach a string as a sink.
console.log(JSON.parse(stringData));
```

You can create multi-file ZIP archives easily as well. Note that by default, compression is enabled for all files, which is not useful when ZIPping many PNGs, JPEGs, PDFs, etc. because those formats are already compressed. You should either override the level on a per-file basis or globally to avoid wasting resources.
```js
// Note that the asynchronous version (see below) runs in parallel and
// is *much* (up to 3x) faster for larger archives.
const zipped = fflate.zipSync({
  // Directories can be nested structures, as in an actual filesystem
  'dir1': {
    'nested': {
      // You can use Unicode in filenames
      '你好.txt': fflate.strToU8('Hey there!')
    },
    // You can also manually write out a directory path
    'other/tmp.txt': new Uint8Array([97, 98, 99, 100])
  },

  // You can also provide compression options
  'massiveImage.bmp': [aMassiveFile, {
    level: 9,
    mem: 12
  }],
  // PNG is pre-compressed; no need to waste time
  'superTinyFile.png': [aPNGFile, { level: 0 }],

  // Directories take options too
  'exec': [{
    'hello.sh': [fflate.strToU8('echo hello world'), {
      // ZIP only: Set the operating system to Unix
      os: 3,
      // ZIP only: Make this file executable on Unix
      attrs: 0o755 << 16
    }]
  }, {
    // ZIP and GZIP support mtime (defaults to current time)
    mtime: new Date('10/20/2020')
  }]
}, {
  // These options are the defaults for all files, but file-specific
  // options take precedence.
  level: 1,
  // Obfuscate last modified time by default 
  mtime: new Date('1/1/1980')
});

// If you write the zipped data to myzip.zip and unzip, the folder
// structure will be outputted as:

// myzip.zip (original file)
// dir1
// |-> nested
// |   |-> 你好.txt
// |-> other
// |   |-> tmp.txt
// massiveImage.bmp
// superTinyFile.png

// When decompressing, folders are not nested; all filepaths are fully
// written out in the keys. For example, the return value may be:
// { 'nested/directory/structure.txt': Uint8Array(2) [97, 97] }
const decompressed = fflate.unzipSync(zipped, {
  // You may optionally supply a filter for files. By default, all files in a
  // ZIP archive are extracted, but a filter can save resources by telling
  // the library not to decompress certain files
  filter(file) {
    // Don't decompress the massive image or any files larger than 10 MiB
    return file.name != 'massiveImage.bmp' && file.originalSize <= 10_000_000;
  }
});
```

If you need extremely high performance or custom ZIP compression formats, you can use the highly-extensible ZIP streams. They take streams as both input and output. You can even use custom compression/decompression algorithms from other libraries, as long as they [are defined in the ZIP spec](https://pkware.cachefly.net/webdocs/casestudies/APPNOTE.TXT) (see section 4.4.5). If you'd like more info on using custom compressors, [feel free to ask](https://github.com/101arrowz/fflate/discussions).
```js
// ZIP object
// Can also specify zip.ondata outside of the constructor
const zip = new fflate.Zip((err, dat, final) => {
  if (!err) {
    // output of the streams
    console.log(dat, final);
  }
});

const helloTxt = new fflate.ZipDeflate('hello.txt', {
  level: 9
});

// Always add streams to ZIP archives before pushing to those streams
zip.add(helloTxt);

helloTxt.push(chunk1);
// Last chunk
helloTxt.push(chunk2, true);

// ZipPassThrough is like ZipDeflate with level 0, but allows for tree shaking
const nonStreamingFile = new fflate.ZipPassThrough('test.png');
zip.add(nonStreamingFile);
// If you have data already loaded, just .push(data, true)
nonStreamingFile.push(pngData, true);

// You need to call .end() after finishing
// This ensures the ZIP is valid
zip.end();

// Unzip object
const unzipper = new fflate.Unzip();

// This function will almost always have to be called. It is used to support
// compression algorithms such as BZIP2 or LZMA in ZIP files if just DEFLATE
// is not enough (though it almost always is).
// If your ZIP files are not compressed, this line is not needed.
unzipper.register(fflate.UnzipInflate);

const neededFiles = ['file1.txt', 'example.json'];

// Can specify handler in constructor too
unzipper.onfile = file => {
  // file.name is a string, file is a stream
  if (neededFiles.includes(file.name)) {
    file.ondata = (err, dat, final) => {
      // Stream output here
      console.log(dat, final);
    };
    
    console.log('Reading:', file.name);

    // File sizes are sometimes not set if the ZIP file did not encode
    // them, so you may want to check that file.size != undefined
    console.log('Compressed size', file.size);
    console.log('Decompressed size', file.originalSize);

    // You should only start the stream if you plan to use it to improve
    // performance. Only after starting the stream will ondata be called.
    // This method will throw if the compression method hasn't been registered
    file.start();
  }
};

// Try to keep under 5,000 files per chunk to avoid stack limit errors
// For example, if all files are a few kB, multi-megabyte chunks are OK
// If files are mostly under 100 bytes, 64kB chunks are the limit
unzipper.push(zipChunk1);
unzipper.push(zipChunk2);
unzipper.push(zipChunk3, true);
```

As you may have guessed, there is an asynchronous version of every method as well. Unlike most libraries, this will cause the compression or decompression run in a separate thread entirely and automatically by using Web (or Node) Workers. This means that the processing will not block the main thread at all. 

Note that there is a significant initial overhead to using workers of about 50ms for each asynchronous function. For instance, if you call `unzip` ten times, the overhead only applies for the first call, but if you call `unzip` and `zlib`, they will each cause the 50ms delay. For small (under about 50kB) payloads, the asynchronous APIs will be much slower. However, if you're compressing larger files/multiple files at once, or if the synchronous API causes the main thread to hang for too long, the callback APIs are an order of magnitude better.
```js
import {
  gzip, zlib, AsyncGzip, zip, unzip, strFromU8,
  Zip, AsyncZipDeflate, Unzip, AsyncUnzipInflate
} from 'fflate';

// Workers will work in almost any browser (even IE11!)
// All of the async APIs use a node-style callback as so:
const terminate = gzip(aMassiveFile, (err, data) => {
  if (err) {
    // The compressed data was likely corrupt, so we have to handle
    // the error.
    return;
  }
  // Use data however you like
  console.log(data.length);
});

if (needToCancel) {
  // The return value of any of the asynchronous APIs is a function that,
  // when called, will immediately cancel the operation. The callback
  // will not be called.
  terminate();
}

// If you wish to provide options, use the second argument.

// The consume option will render the data inside aMassiveFile unusable,
// but can improve performance and dramatically reduce memory usage.
zlib(aMassiveFile, { consume: true, level: 9 }, (err, data) => {
  // Use the data
});

// Asynchronous streams are similar to synchronous streams, but the
// handler has the error that occurred (if any) as the first parameter,
// and they don't block the main thread.

// Additionally, any buffers that are pushed in will be consumed and
// rendered unusable; if you need to use a buffer you push in, you
// should clone it first.
const gzs = new AsyncGzip({ level: 9, mem: 12, filename: 'hello.txt' });
let wasCallbackCalled = false;
gzs.ondata = (err, chunk, final) => {
  // Note the new err parameter
  if (err) {
    // Note that after this occurs, the stream becomes corrupt and must
    // be discarded. You can't continue pushing chunks and expect it to
    // work.
    console.error(err);
    return;
  }
  wasCallbackCalled = true;
}
gzs.push(chunk);

// Since the stream is asynchronous, the callback will not be called
// immediately. If such behavior is absolutely necessary (it shouldn't
// be), use synchronous streams.
console.log(wasCallbackCalled) // false

// To terminate an asynchronous stream's internal worker, call
// stream.terminate().
gzs.terminate();

// This is way faster than zipSync because the compression of multiple
// files runs in parallel. In fact, the fact that it's parallelized
// makes it faster than most standalone ZIP CLIs. The effect is most
// significant for multiple large files; less so for many small ones.
zip({ f1: aMassiveFile, 'f2.txt': anotherMassiveFile }, {
  // The options object is still optional, you can still do just
  // zip(archive, callback)
  level: 6
}, (err, data) => {
  // Save the ZIP file
});

// unzip is the only async function without support for consume option
// It is parallelized, so unzip is also often much faster than unzipSync
unzip(aMassiveZIPFile, (err, unzipped) => {
  // If the archive has data.xml, log it here
  console.log(unzipped['data.xml']);
  // Conversion to string
  console.log(strFromU8(unzipped['data.xml']))
});

// Streaming ZIP archives can accept asynchronous streams. This automatically
// uses multicore compression.
const zip = new Zip();
zip.ondata = (err, chunk, final) => { ... };
// The JSON and BMP are compressed in parallel
const exampleFile = new AsyncZipDeflate('example.json');
zip.add(exampleFile);
exampleFile.push(JSON.stringify({ large: 'object' }), true);
const exampleFile2 = new AsyncZipDeflate('example2.bmp', { level: 9 });
zip.add(exampleFile2);
exampleFile2.push(ec2a);
exampleFile2.push(ec2b);
exampleFile2.push(ec2c);
...
exampleFile2.push(ec2Final, true);
zip.end();

// Streaming Unzip should register the asynchronous inflation algorithm
// for parallel processing.
const unzip = new Unzip(stream => {
  if (stream.name.endsWith('.json')) {
    stream.ondata = (err, chunk, final) => { ... };
    stream.start();

    if (needToCancel) {
      // To cancel these streams, call .terminate()
      stream.terminate();
    }
  }
});
unzip.register(AsyncUnzipInflate);
unzip.push(data, true);
```

See the [documentation](https://github.com/101arrowz/fflate/blob/master/docs/README.md) for more detailed information about the API.

## Bundle size estimates

The bundle size measurements for `fflate` on sites like Bundlephobia include every feature of the library and should be seen as an upper bound. As long as you are using tree shaking or dead code elimination, this table should give you a general idea of `fflate`'s bundle size for the features you need.

The maximum bundle size that is possible with `fflate` is about 31kB (11.5kB gzipped) if you use every single feature, but feature parity with `pako` is only around 10kB (as opposed to 45kB from `pako`). If your bundle size increases dramatically after adding `fflate`, please [create an issue](https://github.com/101arrowz/fflate/issues/new).

| Feature                 | Bundle size (minified)         | Nearest competitor      |
|-------------------------|--------------------------------|-------------------------|
| Decompression           | 3kB                            | `tiny-inflate`          |
| Compression             | 5kB                            | `UZIP.js`, 2.84x larger |
| Async decompression     | 4kB (1kB + raw decompression)  | N/A                     |
| Async compression       | 6kB (1kB + raw compression)    | N/A                     |
| ZIP decompression       | 5kB (2kB + raw decompression)  | `UZIP.js`, 2.84x larger |
| ZIP compression         | 7kB (2kB + raw compression)    | `UZIP.js`, 2.03x larger |
| GZIP/Zlib decompression | 4kB (1kB + raw decompression)  | `pako`, 11.4x larger    |
| GZIP/Zlib compression   | 5kB (1kB + raw compression)    | `pako`, 9.12x larger    |
| Streaming decompression | 4kB (1kB + raw decompression)  | `pako`, 11.4x larger    |
| Streaming compression   | 5kB (1kB + raw compression)    | `pako`, 9.12x larger    |

## What makes `fflate` so fast?
Many JavaScript compression/decompression libraries exist. However, the most popular one, [`pako`](https://npmjs.com/package/pako), is merely a clone of Zlib rewritten nearly line-for-line in JavaScript. Although it is by no means poorly made, `pako` doesn't recognize the many differences between JavaScript and C, and therefore is suboptimal for performance. Moreover, even when minified, the library is 45 kB; it may not seem like much, but for anyone concerned with optimizing bundle size (especially library authors), it's more weight than necessary.

Note that there exist some small libraries like [`tiny-inflate`](https://npmjs.com/package/tiny-inflate) for solely decompression, and with a minified size of 3 kB, it can be appealing; however, its performance is lackluster, typically 40% worse than `pako` in my tests.

[`UZIP.js`](https://github.com/photopea/UZIP.js) is both faster (by up to 40%) and smaller (14 kB minified) than `pako`, and it contains a variety of innovations that make it excellent for both performance and compression ratio. However, the developer made a variety of tiny mistakes and inefficient design choices that make it imperfect. Moreover, it does not support GZIP or Zlib data directly; one must remove the headers manually to use `UZIP.js`.

So what makes `fflate` different? It takes the brilliant innovations of `UZIP.js` and optimizes them while adding direct support for GZIP and Zlib data. And unlike all of the above libraries, it uses ES Modules to allow for partial builds through tree shaking, meaning that it can rival even `tiny-inflate` in size while maintaining excellent performance. The end result is a library that, in total, weighs 8kB minified for the core build (3kB for decompression only and 5kB for compression only), is about 15% faster than `UZIP.js` or up to 60% faster than `pako`, and achieves the same or better compression ratio than the rest.

Before you decide that `fflate` is the end-all compression library, you should note that JavaScript simply cannot rival the performance of a native program. If you're only using Node.js, it's probably better to use the [native Zlib bindings](https://nodejs.org/api/zlib.html), which tend to offer the best performance. Though note that even against Zlib, `fflate` is only around 30% slower in decompression and 10% slower in compression, and can still achieve better compression ratios!

## What about `CompressionStream`?
Like `fflate`, the [Compression Streams API](https://developer.mozilla.org/en-US/docs/Web/API/Compression_Streams_API) provides DEFLATE, GZIP, and Zlib compression and decompression support. It's a good option if you'd like to compress or decompress data without installing any third-party libraries, and it wraps native Zlib bindings to achieve better performance than what most JavaScript programs can achieve.

However, browsers do not offer any native non-streaming compression API, and `CompressionStream` has surprisingly poor performance on data already loaded into memory; `fflate` tends to be faster even for files that are dozens of megabytes large. Similarly, `fflate` is much faster for files under a megabyte because it avoids marshalling overheads. Even when streaming hundreds of megabytes of data, the native API usually performs between 30% faster and 10% slower than `fflate`. And Compression Streams have many other disadvantages - no ability to control compression level, poor support for older browsers, no ZIP support, etc.

If you'd still prefer to depend upon a native browser API but want to support older browsers, you can use an `fflate`-based [Compression Streams ponyfill](https://github.com/101arrowz/compression-streams-polyfill).

## Browser support
`fflate` makes heavy use of typed arrays (`Uint8Array`, `Uint16Array`, etc.). Typed arrays can be polyfilled at the cost of performance, but the most recent browser that doesn't support them [is from 2011](https://caniuse.com/typedarrays), so I wouldn't bother.

The asynchronous APIs also use `Worker`, which is not supported in a few browsers (however, the vast majority of browsers that support typed arrays support `Worker`).

Other than that, `fflate` is completely ES3, meaning you probably won't even need a bundler to use it.

## Testing
You can validate the performance of `fflate` with `npm test`. It validates that the module is working as expected, ensures the outputs are no more than 5% larger than competitors at max compression, and outputs performance metrics to `test/results`.

Note that the time it takes for the CLI to show the completion of each test is not representative of the time each package took, so please check the JSON output if you want accurate measurements.

## License

This software is [MIT Licensed](./LICENSE), with special exemptions for projects
and organizations as noted below:

- [SheetJS](https://github.com/SheetJS/) is exempt from MIT licensing and may
  license any source code from this software under the BSD Zero Clause License

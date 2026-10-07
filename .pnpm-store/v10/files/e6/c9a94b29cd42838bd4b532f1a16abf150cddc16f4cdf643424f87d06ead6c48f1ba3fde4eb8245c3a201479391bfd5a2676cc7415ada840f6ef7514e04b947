## 0.8.2
- Fixed broken UMD build
- Fixed edge-case causing skipped data during streaming compression
- Fixed bug in GZIP streaming on member boundary
- Improved streaming performance on inconsistent chunk sizes
- Improved `unzip` performance on undercompressed archives
- Added flushing support into streaming API
- Added backpressure support into async streaming API
  - Use new `ondrain` handler and `queuedSize`
## 0.8.1
- Fixed reallocating on pre-supplied buffer in `inflateSync` and `unzlibSync`
- Minor documentation fixes
## 0.8.0
- BREAKING: synchronous decompression functions now take an options object rather than an output buffer as a second parameter
  - `inflateSync(compressed, outBuf)` is now `inflateSync(compressed, { out: outBuf })`
- Support dictionaries in compression and decompression
- Support multi-member files in GZIP streaming decompression
- Dramatically improved streaming performance
- Fixed missing error on certain malformed GZIP files
## 0.7.3
- Fix folder creation for certain operating system
  - Create 0-length "files" for each directory specified with "object" syntax"
  - Support empty folders
  - Add options for folders
- Fix minification in SWC
  - Remove instanceof, no-whitespace assumptions in async functions
## 0.7.2
- Fixed TypeScript typing for errors when using `strictNullChecks`
- Fixed failure to compress files above 64kB with `{ level: 0 }`
- Fixed AMD module definition in UMD build
## 0.7.1
- Removed requirement for `setTimeout`
- Added support for unzip file filters (thanks to [@manucorporat](https://github.com/manucorporat): #67)
- Fixed streaming gunzip and unzlib bug causing corruption
## 0.7.0
- Improved errors
  - Now errors are error objects instead of strings
  - Check the error code to apply custom logic based on error type
- Made async operations always call callbacks asynchronously
- Fixed bug that caused errors to not appear in asynchronous operations in browsers
## 0.6.10
- Fixed async operations on Node.js with native ESM
## 0.6.5
- Fixed streams not recognizing final chunk
- Fixed streaming UTF-8 decoder bug
## 0.6.4
- Made streaming inflate consume all data possible
- Optimized use of values near 32-bit boundary
## 0.6.3
- Patch exports of async functions
- Fix streaming unzip
## 0.6.2
- Replace Adler-32 implementation (used in Zlib compression) with one more optimized for V8
  - Advice from @SheetJSDev
- Add support for extra fields, file comments in ZIP files
- Work on Rust version
## 0.6.0
- Revamped streaming unzip for compatibility and performance improvements
- Fixed streaming data bugs
- Fixed inflation errors
- Planned new tests
## 0.5.2
- General bugfixes
## 0.5.0
- Add streaming zip, unzip
- Fix import issues with certain environments
  - If you had problems with `worker_threads` being included in your bundle, try updating!
## 0.4.8
- Support strict Content Security Policy
  - Remove `new Function`
## 0.4.7
- Fix data streaming bugs
## 0.4.5
- Zip64 support
  - Still not possible to have above 4GB files
## 0.4.4
- Files up to 4GB supported
  - Hey, that's better than even Node.js `zlib`!
## 0.4.1
- Fix ZIP failure bug
- Make ZIP options work better
- Improve docs
- Fix async inflate failure
- Work on Rust version
## 0.3.11
- Fix docs
## 0.3.9
- Fixed issue with unzipping
## 0.3.7
- Patched streaming compression bugs
- Added demo page
## 0.3.6
- Allowed true ESM imports
## 0.3.4
- Fixed rare overflow bug causing corruption
- Added async stream termination
- Added UMD bundle
## 0.3.0
- Added support for asynchronous and synchronous streaming
- Reduced bundle size by autogenerating worker code, even in minified environments
- Error detection rather than hanging
- Improved performance
## 0.2.3
- Improved Zlib autodetection
## 0.2.2
- Fixed Node Worker
## 0.2.1
- Fixed ZIP bug
## 0.2.0
- Added support for ZIP files (parallelized)
- Added ability to terminate running asynchronous operations
## 0.1.0
- Rewrote API: added support for asynchronous (Worker) compression/decompression, fixed critical bug involving fixed Huffman trees
## 0.0.1
- Created, works on basic input
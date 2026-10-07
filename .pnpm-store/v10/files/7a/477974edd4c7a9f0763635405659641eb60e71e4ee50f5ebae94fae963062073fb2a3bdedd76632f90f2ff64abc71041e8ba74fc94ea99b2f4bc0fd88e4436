## 4.12.0 (November 19, 2024)

- **BREAKING CHANGE**: crc32c() and createCRC32C() were removed. You can now do the same thing with crc32() and createCRC32() through setting the polynomial parameter to 0x82F63B78
- Added CRC-64 hash function
- Exported IDataType, IHasher types from index.ts
- Update benchmarks
- Update dependencies, including Clang
- Migrate from ESLint to Biome and fix linting errors

## 4.11.0 (November 13, 2023)

- Added `secret` parameter to Argon2 (by [@malobre](https://github.com/malobre))

## 4.10.0 (October 15, 2023)

- Add sideEffects: false to package.json
- Update dependencies, including Clang

## 4.9.0 (July 22, 2021)

- Add CRC32C
- Update dependencies, including Clang

## 4.8.0 (June 27, 2021)

- Optimized Adler-32 for WASM
- Add xxhash3() and xxhash128() hash functions
- Slightly faster xxhash32() and xxhash64()

## 4.7.0 (June 5, 2021)

- Add Adler-32 algorithm
- New feature: saving and loading the internal state of the hash (segmented hashing and rewinding)
- Faster builds using GNU Make
- Fix alignment of the main buffer (might result in better performance on some platforms)
- Updated dependencies
- _(Special thanks to Nicholas Sherlock for his contributions)_

## 4.6.0 (March 26, 2021)

- Smaller CRC32 binary (now it computes the lookup table at the first run)
- Less RAM required for the WASM instances: it only allocates 128kB of RAM instead of 256kB
- Update dependencies

## 4.5.0 (March 6, 2021)

- Add BLAKE3 algorithm
- Performance improvements at BLAKE2
- Update dependencies
- Update benchmarks

## 4.4.1 (November 22, 2020)

- Add JSDoc annotations

## 4.4.0 (November 8, 2020)

- Add Whirlpool and SM3 algorithms
- Fix block size at blake algorithms
- Switch compiler from Emscripten to Clang
- Fix cached seed invalidation at xxhash64
- Added wasm binary hashes to build log
- Create minified bundles from each algorithm

## 4.3.0 (October 10, 2020)

- Add blake2s algorithm
- Add bundle sizes to README

## 4.2.2 (September 19, 2020)

- Add bcrypt algorithm
- Add argon2Validate() function

## 4.1.0 (September 5, 2020)

- Add scrypt algorithm
- Improve type signiture of key derivation functions. Now the return type depends on the parameters
- Update benchmarks, add relative performance
- Add section to README about string encoding pitfalls

## 4.0.1 (August 29, 2020)

- ~~**BREAKING CHANGE**: All APIs were converted to **synchronous** functions, so you don't need to use `await` or `.then()` anymore.~~ It turned out that Chrome does not allow synchronous WebAssembly instantiation of binaries larger than 4KB. So this change was reverted.
- **BREAKING CHANGE**: `argon2()` function was renamed to `argon2i()`, `argon2d()` and `argon2id()`.
- **BREAKING CHANGE**: `pbkdf2()` function requires now an object containing all parameters
- Update dependencies

## 3.7.2 (August 15, 2020)

- Add more badges to README
- Update dependencies
- Increase code coverage
- Consistent coding style in C files

## 3.7.1 (August 2, 2020)

- Allow returning Uint8Array from digest()
- Allow operation chaining in createXXXX() response
- Throw an error when an IHasher instance is reused without init() call.
- Add "binary" and "encoded" output types to argon2
- Update benchmark results
- Remove all dependencies on Buffer object in standalone mode

## 3.7.0 (August 1, 2020)

- Added Argon2
- Support hash lengths shorter than 16 bytes in Blake2b

## 3.6.0 (July 25, 2020)

- **Breaking change**: Drop support for String() objects (normal string literals are still supported of course)
- Node.js buffer polyfills are not needed anymore

## 3.5.0 (July 19, 2020)

- Added BLAKE2b algorithm
- Fixed a bug, where sha3() and keccak() gave incorrect results when the hash length was changed

## 3.4.1 (June 27, 2020)

- Add PBKDF2 example and benchmark results

## 3.4.0 (June 27, 2020)

- Add PBKDF2 algorithm

## 3.3.0 (June 22, 2020)

- Add RIPEMD-160 algorithm

## 3.2.1 (June 5, 2020)

- Fix buffer.copy() error in browsers

## 3.2.0 (June 5, 2020)

- Added HMAC
- Better examples in readme
- Updated dependencies

## 3.1.2 (May 27, 2020)

- Fixed example code in readme
- Better description and keywords

## 3.1.1 (May 25, 2020)

- ~3x faster when hashing small chunks of data (one WASM function call instead of three)
- Updated benchmark results in readme

## 3.0.1 (May 24, 2020)

- Updated benchmark results in readme
- Use new web-based tool for benchmarking

## 3.0.0 (May 24, 2020)

- Improved performance in smaller input buffers

## 2.6.0 (April 18, 2020)

- Allow concurrent hash calculations with multiple states
- Fix WebAssembly detection
- Cache WebAssembly modules
- Fix crash when starting many parallel hash calculations
- Allocate less memory for WASM modules

## 2.5.1 (April 13, 2020)

- Add React.js demo app

## 2.5.0 (April 13, 2020)

- Add xxhash32 and xxhash64
- Add Keccak
- Bugfixes

## 2.1.0 (April 12, 2020)

- Use faster SHA256 and SHA512 implementations
- Allocate less memory in WASM modules
- Clean up C source codes

## 2.0.0 (April 11, 2020)

- Initial release

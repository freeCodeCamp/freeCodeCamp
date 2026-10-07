# system-architecture

> Get the operating system CPU architecture

[`process.arch` / `os.arch()`](https://nodejs.org/api/process.html#processarch) is generally not useful as it returns the CPU architecture for which the Node.js binary was compiled, not the actual system architecture.

For browser usage, you probably want [`is64bit`](https://github.com/sindresorhus/is64bit) instead.

## Install

```sh
npm install system-architecture
```

## Usage

```js
import {systemArchitecture} from 'system-architecture';

// On ARM64 macOS
console.log(await systemArchitecture());
//=> 'arm64'
```

## API

### systemArchitecture()

Returns a promise for a CPU architecture name. See [`process.arch`](https://nodejs.org/api/process.html#processarch) for possible values.

### systemArchitectureSync()

Returns a CPU architecture name. See [`process.arch`](https://nodejs.org/api/process.html#processarch) for possible values.

## Note

This should really be in Node.js core, but they are [not pragmatic](https://github.com/nodejs/node/issues/17036).

## Related

- [is64bit](https://github.com/sindresorhus/is64bit) - Check whether operating system CPU architecture is 64-bit or 32-bit

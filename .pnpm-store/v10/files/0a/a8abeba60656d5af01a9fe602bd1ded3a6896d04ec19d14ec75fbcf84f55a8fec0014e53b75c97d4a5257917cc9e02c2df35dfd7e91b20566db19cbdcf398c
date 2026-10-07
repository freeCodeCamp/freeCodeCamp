# environment

> Check which JavaScript environment your code is running in at runtime

## Install

```sh
npm install environment
```

## Usage

```js
import {isBrowser, isNode} from 'environment';

if (isBrowser) {
	console.log('Running in a browser!');
}

if (isNode) {
	console.log('Running in Node.js!');
}
```

> [!NOTE]
> Runtime checks should be used sparingly. Prefer [conditional package exports](https://nodejs.org/api/packages.html#conditional-exports) and [imports](https://nodejs.org/api/packages.html#subpath-imports) whenever possible.

## API

### `isBrowser`

Check if the code is running in a web browser environment.

### `isNode`

Check if the code is running in a [Node.js](https://nodejs.org) environment.

### `isBun`

Check if the code is running in a [Bun](https://bun.sh) environment.

### `isDeno`

Check if the code is running in a [Deno](https://deno.com) environment.

### `isElectron`

Check if the code is running in an [Electron](https://www.electronjs.org) environment.

### `isJsDom`

Check if the code is running in a [jsdom](https://github.com/jsdom/jsdom) environment.

### `isWebWorker`

Check if the code is running in a [Web Worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API#worker_global_contexts_and_functions) environment, which could be either a dedicated worker, shared worker, or service worker.

### `isDedicatedWorker`

Check if the code is running in a [Dedicated Worker](https://developer.mozilla.org/en-US/docs/Web/API/DedicatedWorkerGlobalScope) environment.

### `isSharedWorker`

Check if the code is running in a [Shared Worker](https://developer.mozilla.org/en-US/docs/Web/API/SharedWorkerGlobalScope) environment.

### `isServiceWorker`

Check if the code is running in a [Service Worker](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope) environment.

### `isMacOs`

Check if the code is running on macOS.

### `isWindows`

Check if the code is running on Windows.

### `isLinux`

Check if the code is running on Linux.

### `isIos`

Check if the code is running on iOS.

### `isAndroid`

Check if the code is running on Android.

## Related

- [is-in-ci](https://github.com/sindresorhus/is-in-ci) - Check if the process is running in a CI environment
- [is64bit](https://github.com/sindresorhus/is64bit) - Check if the operating system CPU architecture is 64-bit or 32-bit
- [is](https://github.com/sindresorhus/is) - Type check values

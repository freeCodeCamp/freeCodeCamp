# clipboardy [![Build Status](https://travis-ci.org/sindresorhus/clipboardy.svg?branch=master)](https://travis-ci.org/sindresorhus/clipboardy)

> Access the system clipboard (copy/paste)

Cross-platform. Supports: macOS, Windows, Linux, OpenBSD, FreeBSD, Android with [Termux](https://termux.com/), [modern browsers](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API#Browser_compatibility).

## Install

```
$ npm install clipboardy
```

## Usage

```js
const clipboardy = require('clipboardy');

clipboardy.writeSync('🦄');

clipboardy.readSync();
//=> '🦄'
```

## API

### clipboardy

#### .write(text)

Write (copy) to the clipboard asynchronously. Returns a `Promise`.

##### text

Type: `string`

The text to write to the clipboard.

#### .read()

Read (paste) from the clipboard asynchronously. Returns a `Promise`.

#### .writeSync(text)

Write (copy) to the clipboard synchronously.

Doesn't work in browsers.

##### text

Type: `string`

The text to write to the clipboard.

#### .readSync()

Read (paste) from the clipboard synchronously.

Doesn't work in browsers.

## FAQ

#### Where can I find the source of the bundled binaries?

The [Linux binary](https://github.com/sindresorhus/clipboardy/blob/master/fallbacks/linux/xsel) is just a bundled version of [`xsel`](https://linux.die.net/man/1/xsel). The source for the [Windows binary](https://github.com/sindresorhus/clipboardy/blob/master/fallbacks/windows/clipboard_x86_64.exe) can be found [here](https://github.com/sindresorhus/win-clipboard).

## Related

- [clipboard-cli](https://github.com/sindresorhus/clipboard-cli) - CLI for this module
- [copy-text-to-clipboard](https://github.com/sindresorhus/copy-text-to-clipboard) - Copy text to the clipboard in the browser

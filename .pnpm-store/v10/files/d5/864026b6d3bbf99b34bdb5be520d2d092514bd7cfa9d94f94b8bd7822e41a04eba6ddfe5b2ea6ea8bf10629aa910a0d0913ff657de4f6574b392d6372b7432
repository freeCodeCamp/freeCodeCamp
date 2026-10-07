# open

> Open stuff like URLs, files, executables. Cross-platform.

This is meant to be used in command-line tools and scripts, not in the browser.

If you need this for Electron, use [`shell.openPath()`](https://www.electronjs.org/docs/api/shell#shellopenpathpath) instead.

This package does not make any security guarantees. If you pass in untrusted input, it's up to you to properly sanitize it.

#### Why?

- Actively maintained.
- Supports app arguments.
- Safer as it uses `spawn` instead of `exec`.
- Fixes most of the original `node-open` issues.
- Includes the latest [`xdg-open` script](https://gitlab.freedesktop.org/xdg/xdg-utils/-/blob/master/scripts/xdg-open.in) for Linux.
- Supports WSL paths to Windows apps.

## Install

```sh
npm install open
```

## Usage

```js
const open = require('open');

// Opens the image in the default image viewer and waits for the opened app to quit.
await open('unicorn.png', {wait: true});
console.log('The image viewer app quit');

// Opens the URL in the default browser.
await open('https://sindresorhus.com');

// Opens the URL in a specified browser.
await open('https://sindresorhus.com', {app: {name: 'firefox'}});

// Specify app arguments.
await open('https://sindresorhus.com', {app: {name: 'google chrome', arguments: ['--incognito']}});

// Open an app
await open.openApp('xcode');

// Open an app with arguments
await open.openApp(open.apps.chrome, {arguments: ['--incognito']});
```

## API

It uses the command `open` on macOS, `start` on Windows and `xdg-open` on other platforms.

### open(target, options?)

Returns a promise for the [spawned child process](https://nodejs.org/api/child_process.html#child_process_class_childprocess). You would normally not need to use this for anything, but it can be useful if you'd like to attach custom event listeners or perform other operations directly on the spawned process.

#### target

Type: `string`

The thing you want to open. Can be a URL, file, or executable.

Opens in the default app for the file type. For example, URLs opens in your default browser.

#### options

Type: `object`

##### wait

Type: `boolean`\
Default: `false`

Wait for the opened app to exit before fulfilling the promise. If `false` it's fulfilled immediately when opening the app.

Note that it waits for the app to exit, not just for the window to close.

On Windows, you have to explicitly specify an app for it to be able to wait.

##### background <sup>(macOS only)</sup>

Type: `boolean`\
Default: `false`

Do not bring the app to the foreground.

##### newInstance <sup>(macOS only)</sup>

Type: `boolean`\
Default: `false`

Open a new instance of the app even it's already running.

A new instance is always opened on other platforms.

##### app

Type: `{name: string | string[], arguments?: string[]} | Array<{name: string | string[], arguments: string[]}>`

Specify the `name` of the app to open the `target` with, and optionally, app `arguments`. `app` can be an array of apps to try to open and `name` can be an array of app names to try. If each app fails, the last error will be thrown.

The app name is platform dependent. Don't hard code it in reusable modules. For example, Chrome is `google chrome` on macOS, `google-chrome` on Linux and `chrome` on Windows. If possible, use [`open.apps`](#openapps) which auto-detects the correct binary to use.

You may also pass in the app's full path. For example on WSL, this can be `/mnt/c/Program Files (x86)/Google/Chrome/Application/chrome.exe` for the Windows installation of Chrome.

The app `arguments` are app dependent. Check the app's documentation for what arguments it accepts.

##### allowNonzeroExitCode

Type: `boolean`\
Default: `false`

Allow the opened app to exit with nonzero exit code when the `wait` option is `true`.

We do not recommend setting this option. The convention for success is exit code zero.

### open.apps

An object containing auto-detected binary names for common apps. Useful to work around [cross-platform differences](#app).

```js
const open = require('open');

await open('https://google.com', {
	app: {
		name: open.apps.chrome
	}
});
```

#### Supported apps

- [`chrome`](https://www.google.com/chrome) - Web browser
- [`firefox`](https://www.mozilla.org/firefox) - Web browser
- [`edge`](https://www.microsoft.com/edge) - Web browser

### open.openApp(name, options?)

Open an app.

Returns a promise for the [spawned child process](https://nodejs.org/api/child_process.html#child_process_class_childprocess). You would normally not need to use this for anything, but it can be useful if you'd like to attach custom event listeners or perform other operations directly on the spawned process.

#### name

Type: `string`

The app name is platform dependent. Don't hard code it in reusable modules. For example, Chrome is `google chrome` on macOS, `google-chrome` on Linux and `chrome` on Windows. If possible, use [`open.apps`](#openapps) which auto-detects the correct binary to use.

You may also pass in the app's full path. For example on WSL, this can be `/mnt/c/Program Files (x86)/Google/Chrome/Application/chrome.exe` for the Windows installation of Chrome.

#### options

Type: `object`

Same options as [`open`](#options) except `app` and with the following additions:

##### arguments

Type: `string[]`\
Default: `[]`

Arguments passed to the app.

These arguments are app dependent. Check the app's documentation for what arguments it accepts.

## Related

- [open-cli](https://github.com/sindresorhus/open-cli) - CLI for this module
- [open-editor](https://github.com/sindresorhus/open-editor) - Open files in your editor at a specific line and column

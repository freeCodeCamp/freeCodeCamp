# open

> Open stuff like URLs, files, executables. Cross-platform.

This is meant to be used in command-line tools and scripts, not in the browser.

If you need this for Electron, use [`shell.openPath()`](https://www.electronjs.org/docs/api/shell#shellopenpathpath) instead.

Note: The original [`open` package](https://github.com/pwnall/node-open) was previously deprecated in favor of this package, and we got the name, so this package is now named `open` instead of `opn`. If you're upgrading from the original `open` package (`open@0.0.5` or lower), keep in mind that the API is different.

#### Why?

- Actively maintained.
- Supports app arguments.
- Safer as it uses `spawn` instead of `exec`.
- Fixes most of the open original `node-open` issues.
- Includes the latest [`xdg-open` script](https://cgit.freedesktop.org/xdg/xdg-utils/commit/?id=c55122295c2a480fa721a9614f0e2d42b2949c18) for Linux.
- Supports WSL paths to Windows apps.

## Install

```
$ npm install open
```

## Usage

```js
const open = require('open');

(async () => {
	// Opens the image in the default image viewer and waits for the opened app to quit.
	await open('unicorn.png', {wait: true});
	console.log('The image viewer app quit');

	// Opens the URL in the default browser.
	await open('https://sindresorhus.com');

	// Opens the URL in a specified browser.
	await open('https://sindresorhus.com', {app: 'firefox'});

	// Specify app arguments.
	await open('https://sindresorhus.com', {app: ['google chrome', '--incognito']});
})();
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

##### app

Type: `string | string[]`

Specify the app to open the `target` with, or an array with the app and app arguments.

The app name is platform dependent. Don't hard code it in reusable modules. For example, Chrome is `google chrome` on macOS, `google-chrome` on Linux and `chrome` on Windows.

You may also pass in the app's full path. For example on WSL, this can be `/mnt/c/Program Files (x86)/Google/Chrome/Application/chrome.exe` for the Windows installation of Chrome.

##### url

Type: `boolean`\
Default: `false`

Uses `URL` to encode the target before executing it.<br>
We do not recommend using it on targets that are not URLs.

Especially useful when dealing with the [double-quotes on Windows](#double-quotes-on-windows) caveat.

##### allowNonzeroExitCode

Type: `boolean`\
Default: `false`

Allow the opened app to exit with nonzero exit code when the `wait` option is `true`.

We do not recommend setting this option. The convention for success is exit code zero.

## Caveats

### Double-quotes on Windows

TL;DR: All double-quotes are stripped from the `target` and do not get to your desired destination (on Windows!).

Due to specific behaviors of Window's Command Prompt (`cmd.exe`) regarding ampersand (`&`) characters breaking commands and URLs, double-quotes are now a special case.

The solution ([#146](https://github.com/sindresorhus/open/pull/146)) to this and other problems was to leverage the fact that `cmd.exe` interprets a double-quoted argument as a plain text argument just by quoting it (like Node.js already does). Unfortunately, `cmd.exe` can only do **one** of two things: handle them all **OR** not handle them at all. As per its own documentation:

>*If /C or /K is specified, then the remainder of the command line after the switch is processed as a command line, where the following logic is used to process quote (") characters:*
>
>    1.  *If all of the following conditions are met, then quote characters on the command line are preserved:*
>        - *no /S switch*
>        - *exactly two quote characters*
>        - *no special characters between the two quote characters, where special is one of: &<>()@^|*
>        - *there are one or more whitespace characters between the two quote characters*
>        - *the string between the two quote characters is the name of an executable file.*
>
>    2.  *Otherwise, old behavior is to see if the first character is a quote character and if so, strip the leading character and remove the last quote character on the command line, preserving any text after the last quote character.*

The option that solved all of the problems was the second one, and for additional behavior consistency we're also now using the `/S` switch, so we **always** get the second option. The caveat is that this built-in double-quotes handling ends up stripping all of them from the command line and so far we weren't able to find an escaping method that works (if you do, please feel free to contribute!).

To make this caveat somewhat less impactful (at least for URLs), check out the [url option](#url). Double-quotes will be "preserved" when using it with an URL.

## Related

- [open-cli](https://github.com/sindresorhus/open-cli) - CLI for this module
- [open-editor](https://github.com/sindresorhus/open-editor) - Open files in your editor at a specific line and column

---

<div align="center">
	<b>
		<a href="https://tidelift.com/subscription/pkg/npm-opn?utm_source=npm-opn&utm_medium=referral&utm_campaign=readme">Get professional support for this package with a Tidelift subscription</a>
	</b>
	<br>
	<sub>
		Tidelift helps make open source sustainable for maintainers while giving companies<br>assurances about security, maintenance, and licensing for their dependencies.
	</sub>
</div>

# update-notifier [![Build Status](https://travis-ci.org/yeoman/update-notifier.svg?branch=master)](https://travis-ci.org/yeoman/update-notifier)

> Update notifications for your CLI app

![](screenshot.png)

Inform users of your package of updates in a non-intrusive way.

#### Contents

- [Install](#install)
- [Usage](#usage)
- [How](#how)
- [API](#api)
- [About](#about)
- [Users](#users)


## Install

```
$ npm install update-notifier
```


## Usage

### Simple

```js
const updateNotifier = require('update-notifier');
const pkg = require('./package.json');

updateNotifier({pkg}).notify();
```

### Comprehensive

```js
const updateNotifier = require('update-notifier');
const pkg = require('./package.json');

// Checks for available update and returns an instance
const notifier = updateNotifier({pkg});

// Notify using the built-in convenience method
notifier.notify();

// `notifier.update` contains some useful info about the update
console.log(notifier.update);
/*
{
	latest: '1.0.1',
	current: '1.0.0',
	type: 'patch', // Possible values: latest, major, minor, patch, prerelease, build
	name: 'pageres'
}
*/
```

### Options and custom message

```js
const notifier = updateNotifier({
	pkg,
	updateCheckInterval: 1000 * 60 * 60 * 24 * 7 // 1 week
});

if (notifier.update) {
	console.log(`Update available: ${notifier.update.latest}`);
}
```


## How

Whenever you initiate the update notifier and it's not within the interval threshold, it will asynchronously check with npm in the background for available updates, then persist the result. The next time the notifier is initiated, the result will be loaded into the `.update` property. This prevents any impact on your package startup performance.
The update check is done in a unref'ed [child process](https://nodejs.org/api/child_process.html#child_process_child_process_spawn_command_args_options). This means that if you call `process.exit`, the check will still be performed in its own process.

The first time the user runs your app, it will check for an update, and even if an update is available, it will wait the specified `updateCheckInterval` before notifying the user. This is done to not be annoying to the user, but might surprise you as an implementer if you're testing whether it works. Check out [`example.js`](example.js) to quickly test out `update-notifier` and see how you can test that it works in your app.


## API

### notifier = updateNotifier(options)

Checks if there is an available update. Accepts options defined below. Returns an instance with an `.update` property there is an available update, otherwise `undefined`.

### options

#### pkg

Type: `Object`

##### name

*Required*<br>
Type: `string`

##### version

*Required*<br>
Type: `string`

#### updateCheckInterval

Type: `number`<br>
Default: `1000 * 60 * 60 * 24` *(1 day)*

How often to check for updates.

#### callback(error, update)

Type: `Function`

Passing a callback here will make it check for an update directly and report right away. Not recommended as you won't get the benefits explained in [`How`](#how). `update` is equal to `notifier.update`.

### notifier.notify([options])

Convenience method to display a notification message. *(See screenshot)*

Only notifies if there is an update and the process is [TTY](https://nodejs.org/api/process.html#process_tty_terminals_and_process_stdout).

#### options

Type: `Object`

##### defer

Type: `boolean`<br>
Default: `true`

Defer showing the notification to after the process has exited.

##### message

Type: `string`<br>
Default: [See above screenshot](https://github.com/yeoman/update-notifier#update-notifier-)

Message that will be shown when an update is available.

##### isGlobal

Type: `boolean`<br>
Default: `true`

Include the `-g` argument in the default message's `npm i` recommendation. You may want to change this if your CLI package can be installed as a dependency of another project, and don't want to recommend a global installation. This option is ignored if you supply your own `message` (see above).

##### boxenOpts

Type: `Object`<br>
Default: `{padding: 1, margin: 1, align: 'center', borderColor: 'yellow', borderStyle: 'round'}` *(See screenshot)*

Options object that will be passed to [`boxen`](https://github.com/sindresorhus/boxen).

##### shouldNotifyInNpmScript

Type: `boolean`<br>
Default: `false`

Allows notification to be shown when running as an npm script.

### User settings

Users of your module have the ability to opt-out of the update notifier by changing the `optOut` property to `true` in `~/.config/configstore/update-notifier-[your-module-name].json`. The path is available in `notifier.config.path`.

Users can also opt-out by [setting the environment variable](https://github.com/sindresorhus/guides/blob/master/set-environment-variables.md) `NO_UPDATE_NOTIFIER` with any value or by using the `--no-update-notifier` flag on a per run basis.

The check is also skipped on CI automatically.


## About

The idea for this module came from the desire to apply the browser update strategy to CLI tools, where everyone is always on the latest version. We first tried automatic updating, which we discovered wasn't popular. This is the second iteration of that idea, but limited to just update notifications.


## Users

There are a bunch projects using it:

- [npm](https://github.com/npm/npm) - Package manager for JavaScript
- [Yeoman](http://yeoman.io) - Modern workflows for modern webapps
- [AVA](https://ava.li) - Simple concurrent test runner
- [XO](https://github.com/xojs/xo) - JavaScript happiness style linter
- [Pageres](https://github.com/sindresorhus/pageres) - Capture website screenshots
- [Node GH](http://nodegh.io) - GitHub command line tool

[And 1600+ more…](https://www.npmjs.org/browse/depended/update-notifier)


## License

BSD-2-Clause © Google

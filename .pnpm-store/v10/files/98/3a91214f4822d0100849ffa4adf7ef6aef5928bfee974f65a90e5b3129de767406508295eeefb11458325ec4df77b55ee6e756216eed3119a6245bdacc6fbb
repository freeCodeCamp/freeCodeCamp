Store.js
========

[![Build Status](https://travis-ci.org/marcuswestin/store.js.svg?branch=master)](https://travis-ci.org/marcuswestin/store.js)
[![npm version](https://badge.fury.io/js/store.svg)](https://badge.fury.io/js/store)
[![npm](https://img.shields.io/npm/dm/store.svg?maxAge=2592000)](https://npm-stat.com/charts.html?package=store)

1. [Version 2.0](#user-content-version-20)
	- What's new?
2. [Basic Usage](#user-content-basic-usage)
	- All you need to get started
	- [API](#user-content-api)
	- [Installation](#user-content-installation)
3. [Supported Browsers](#user-content-supported-browsers)
	- All of them, pretty much :)
	- [List of supported browsers](#user-content-list-of-supported-browsers)
4. [Plugins](#user-content-plugins)
	- Additional common functionality
	- [List of all Plugins](#user-content-list-of-all-plugins)
	- [Using Plugins](#user-content-using-plugins)
	- [Write your own Plugin](#user-content-write-your-own-plugin)
5. [Builds](#user-content-builds)
	- Choose which build is right for you
	- [List of default Builds](#user-content-list-of-default-builds)
	- [Make your own Build](#user-content-make-your-own-build)
6. [Storages](#user-content-storages)
	- Storages provide underlying persistence
	- [List of all Storages](#user-content-list-of-all-storages)
	- [Storages limits](#user-content-storages-limits)
	- [Write your own Storage](#user-content-write-your-own-storage)


Version 2.0
-----------

Store.js has been around since 2010 ([first commit](https://github.com/marcuswestin/store.js/commit/cb0198c2c02ff5f17c084276eeb4f28c79849d5e)! [HN discussion](https://news.ycombinator.com/item?id=1468802)!), and is live on tens of thousands of websites - like cnn.com!

For many years v1.x provided basic cross-browser persistent storage, and over time more and more people [started asking](https://github.com/marcuswestin/store.js/issues?q=is%3Aissue+is%3Aclosed) for additional functionality.

Store.js version 2 is a full revamp with pluggable storage (it will automatically fall back to one that works in every scenario by default), pluggable extra functionality (like [expirations](plugins/expire.js), [default values](plugins/defaults.js), common [array/object operations](plugins/operations.js), etc), and fully cross-browser automatic testing using saucelabs.com.



Basic Usage
-----------

All you need to know to get started:

### API

store.js exposes a simple API for cross-browser local storage:

```js
// Store current user
store.set('user', { name:'Marcus' })

// Get current user
store.get('user')

// Remove current user
store.remove('user')

// Clear all keys
store.clearAll()

// Loop over all stored values
store.each(function(value, key) {
	console.log(key, '==', value)
})
```

### Installation

Using npm:

```js
// Example store.js usage with npm
var store = require('store')
store.set('user', { name:'Marcus' })
store.get('user').name == 'Marcus'
```

Using script tag (first download one of the [builds](dist/)):

```html
<!-- Example store.js usage with script tag -->
<script src="path/to/my/store.legacy.min.js"></script>
<script>
var store = require('store')
store.set('user', { name:'Marcus' })
store.get('user').name == 'Marcus'
</script>
```



Supported Browsers
------------------

All of them, pretty much :)

To support all browsers (including IE 6, IE 7, Firefox 4, etc.), use `require('store')` (alias for `require('store/dist/store.legacy')`) or [store.legacy.min.js](dist/store.legacy.min.js).

To save some kilobytes but still support all modern browsers, use `require('store/dist/store.modern')` or [store.modern.min.js](dist/store.modern.min.js) instead.

### List of supported browsers

- Tested on IE6+
- Tested on iOS 8+
- Tested on Android 4+
- Tested on Firefox 4+
- Tested on Chrome 27+
- Tested on Safari 5+
- Tested on Opera 11+
- Tested on Node (with https://github.com/coolaj86/node-localStorage)




Plugins
-------

Plugins provide additional common functionality that some users might need:

### List of all Plugins

- [all.js](plugins/all.js):                      All the plugins in one handy place.
- [defaults.js](plugins/defaults.js):            Declare default values. [Example usage](plugins/defaults_test.js)
- [dump.js](plugins/dump.js):                    Dump all stored values. [Example usage](plugins/dump_test.js)
- [events.js](plugins/events.js):                Get notified when stored values change. [Example usage](plugins/events_test.js)
- [expire.js](plugins/expire.js):                Expire stored values at a given time. [Example usage](plugins/expire_test.js)
- [observe.js](plugins/observe.js):              Observe stored values and their changes. [Example usage](plugins/observe_test.js)
- [operations.js](plugins/operations.js):        Useful operations like push, shift & assign. [Example usage](plugins/operations_test.js)
- [update.js](plugins/update.js):                Update a stored object, or create it if null. [Example usage](plugins/update_test.js)
- [v1-backcompat.js](plugins/v1-backcompat.js):  Full backwards compatibility with store.js v1. [Example usage](plugins/v1-backcompat_test.js)

### Using Plugins

With npm:

```js
// Example plugin usage:
var expirePlugin = require('store/plugins/expire')
store.addPlugin(expirePlugin)
```

If you're using script tags, you can either use [store.everything.min.js](dist/store.everything.min.js) (which
has all plugins built-in), or clone this repo to add or modify a build and run `make build`.

### Write your own plugin

A store.js plugin is a function that returns an object that gets added to the store.
If any of the plugin functions overrides existing functions, the plugin function can still call
the original function using the first argument (super_fn).

```js
// Example plugin that stores a version history of every value
var versionHistoryPlugin = function() {
	var historyStore = this.namespace('history')
	return {
		set: function(super_fn, key, value) {
			var history = historyStore.get(key) || []
			history.push(value)
			historyStore.set(key, history)
			return super_fn()
		},
		getHistory: function(key) {
			return historyStore.get(key)
		}
	}
}
store.addPlugin(versionHistoryPlugin)
store.set('foo', 'bar 1')
store.set('foo', 'bar 2')
store.getHistory('foo') == ['bar 1', 'bar 2']
```

Let me know if you need more info on writing plugins. For the moment I recommend
taking a look at the [current plugins](plugins/). Good example plugins are
[plugins/defaults](plugins/defaults.js), [plugins/expire](plugins/expire.js) and
[plugins/events](plugins/events.js).



Builds
------

Choose which build is right for you!

### List of default builds

- [store.everything.min.js](dist/store.everything.min.js): All the plugins, all the storages. [Source](dist/store.everything.js)
- [store.legacy.min.js](dist/store.legacy.min.js): Full support for all tested browsers. Add plugins separately. [Source](dist/store.legacy.js)
- [store.modern.min.js](dist/store.modern.min.js): Full support for all modern browsers. Add plugins separately. [Source](dist/store.modern.js)
- [store.v1-backcompat.min.js](dist/store.v1-backcompat.min.js): Full backwards compatibility with [store.js v1](https://github.com/marcuswestin/store.js/releases/tag/v1.3.20). [Source](dist/store.v1-backcompat.js)

### Make your own Build

If you're using npm you can create your own build:

```js
// Example custom build usage:
var engine = require('store/src/store-engine')
var storages = [
	require('store/storages/localStorage'),
	require('store/storages/cookieStorage')
]
var plugins = [
	require('store/plugins/defaults'),
	require('store/plugins/expire')
]
var store = engine.createStore(storages, plugins)
store.set('foo', 'bar', new Date().getTime() + 3000) // Using expire plugin to expire in 3 seconds
```




Storages
--------
Store.js will pick the best available storage, and automatically falls back to the first available storage that works:

### List of all Storages

- [all.js](storages/all.js)                                     All the storages in one handy place.
- [localStorage.js](storages/localStorage.js)                   Store values in localStorage. Great for all modern browsers.
- [sessionStorage.js](storages/sessionStorage.js)               Store values in sessionStorage.
- [cookieStorage.js](storages/cookieStorage.js)                 Store values in cookies. Useful for Safari Private mode.
- [memoryStorage.js](storages/memoryStorage.js)                 Store values in memory. Great fallback to ensure store functionality at all times.
- [oldFF-globalStorage.js](storages/oldFF-globalStorage.js)     Store values in globalStorage. Only useful for legacy Firefox 3+.
- [oldIE-userDataStorage.js](storages/oldIE-userDataStorage.js) Store values in userData. Only useful for legacy IE 6+.


### Storages limits

Each storage has different limits, restrictions and overflow behavior on different browser. For example, Android has has a 4.57M localStorage limit in 4.0, a 2.49M limit in 4.1, and a 4.98M limit in 4.2... Yeah.

To simplify things we provide these recommendations to ensure cross browser behavior:

| Storage         | Targets                | Recommendations                 | More info                                        |
|:----------------|:-----------------------|:--------------------------------|:-------------------------------------------------|
| all             | All browsers           | Store < 1 million characters    | (Except Safari Private mode)                     |
| all             | All & Private mode     | Store < 32 thousand characters  | (Including Safari Private mode)                  |
| localStorage    | Modern browsers        | Max 2mb  (~1M chars)            | [limits][local-limits], [android][local-android] |
| sessionStorage  | Modern browsers        | Max 5mb  (~2M chars)            | [limits][session-limits]                         |
| cookieStorage   | Safari Private mode    | Max 4kb  (~2K chars)            | [limits][cookie-limits]                          |
| userDataStorage | IE5, IE6 & IE7         | Max 64kb (~32K chars)           | [limits][userdata-limits]                        |
| globalStorage   | Firefox 2-5            | Max 5mb  (~2M chars)            | [limits][global-limits]                          |
| memoryStorage   | All browsers, fallback | Does not persist across pages!  |                                                  |

[local-limits]: https://arty.name/localstorage.html
[local-android]: http://dev-test.nemikor.com/web-storage/support-test/
[session-limits]: http://stackoverflow.com/questions/15840976/how-large-is-html5-session-storage
[cookie-limits]: http://browsercookielimits.squawky.net/
[userdata-limits]: https://msdn.microsoft.com/en-us/library/ms533015(v=vs.85).aspx
[global-limits]: https://github.com/jeremydurham/persist-js/blob/master/README.md#4-size-limits
[more]: https://www.html5rocks.com/en/tutorials/offline/quota-research/


### Write your own Storage

Chances are you won't ever need another storage. But if you do...

See [storages/](storages/) for examples. Two good examples are [memoryStorage](storages/memoryStorage.js) and [localStorage](storages/localStorage.js).

Basically, you just need an object that looks like this:

```js
// Example custom storage
var storage = {
	name: 'myStorage',
	read: function(key) { ... },
	write: function(key, value) { ... },
	each: function(fn) { ... },
	remove: function(key) { ... },
	clearAll: function() { ... }
}
var store = require('store').createStore(storage)
```

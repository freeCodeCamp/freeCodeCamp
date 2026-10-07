How does it work?
------------------
store.js uses localStorage when available, and falls back on the userData behavior in IE6 and IE7. No flash to slow down your page load. No cookies to fatten your network requests.

store.js depends on JSON for serialization to disk.


Installation
------------
Just grab [store.min.js] or [store+json2.min.js] and include them with a script tag.


`store.enabled` flag
--------------------
If your product depends on store.js, you must check the `store.enabled` flag first:

```html
<script src="store.min.js"></script>
<script>
	init()
	function init() {
		if (!store.enabled) {
			alert('Local storage is not supported by your browser. Please disable "Private Mode", or upgrade to a modern browser.')
			return
		}
		var user = store.get('user')
		// ... and so on ...
	}
</script>
```

LocalStorage may sometimes appear to be available but throw an error when used. An example is Safari's private browsing mode. Other browsers allow the user to temporarily disable localStorage. Store.js detects these conditions and sets the `store.enabled` flag appropriately.


Screencast
-----------
[Introductory Screencast to Store.js](http://javascriptplayground.com/blog/2012/06/javascript-local-storage-store-js-tutorial) by Jack Franklin.


Contributors & Forks
--------------------
Contributors: https://github.com/marcuswestin/store.js/graphs/contributors

Forks: https://github.com/marcuswestin/store.js/network/members


In node.js
----------
store.js works as expected in node.js, assuming that global.localStorage has been set:

```
global.localStorage = require('localStorage')
var store = require('./store')
store.set('foo', 1)
console.log(store.get('foo'))
```


Supported browsers
------------------
 - Tested in iOS 4+
 - Tested in Firefox 3.5
 - Tested in Firefox 3.6
 - Tested in Firefox 4.0+
 - Support dropped for Firefox < 3.5 (see notes below)
 - Tested in Chrome 5
 - Tested in Chrome 6
 - Tested in Chrome 7
 - Tested in Chrome 8
 - Tested in Chrome 10
 - Tested in Chrome 11+
 - Tested in Safari 4
 - Tested in Safari 5
 - Tested in IE6
 - Tested in IE7
 - Tested in IE8
 - Tested in IE9
 - Tested in IE10
 - Tested in Opera 10
 - Tested in Opera 11
 - Tested in Opera 12
 - Tested in Node.js v0.10.4 (with https://github.com/coolaj86/node-localStorage 1.0.2)

*Private mode* Store.js may not work while browsing in private mode. This is as it should be. Check the `store.enabled` flag before relying on store.js.

*Saucelabs.com rocks* Extensive browser testing of store.js is possible thanks to Saucelabs.com. Check them out, they're awesome.

*Firefox 3.0 & 2.0:* Support for FF 2 & 3 was dropped in v1.3.6. If you require support for ancient versions of FF, use v1.3.5 of store.js.

*Important note:* In IE6 and IE7, many special characters are not allowed in the keys used to store any key/value pair. With [@mferretti](https://github.com/mferretti)'s help, there's a suitable workaround which replaces most forbidden characters with "___".


Storage limits
--------------
 - IE6 & IE7: 1MB total, but 128kb per "path" or "document" (see http://msdn.microsoft.com/en-us/library/ms531424(v=vs.85).aspx)
 - See http://dev-test.nemikor.com/web-storage/support-test/ for a list of limits per browser

Unsupported browsers
-------------------
 - Firefox 1.0: no means (beside cookies and flash)
 - Safari 2: no means (beside cookies and flash)
 - Safari 3: no synchronous api (has asynch sqlite api, but store.js is synch)
 - Opera 9: don't know if there is synchronous api for storing data locally
 - Firefox 1.5: don't know if there is synchronous api for storing data locally
 - Microsoft IIS & IE7: With meta tag & "charset=iso-8859-1", things stop working. See issue #47.


Some notes on serialization
---------------------------
localStorage, when used without store.js, calls toString on all stored values. This means that you can't conveniently store and retrieve numbers, objects or arrays:

```js
localStorage.myage = 24
localStorage.myage !== 24
localStorage.myage === '24'

localStorage.user = { name: 'marcus', likes: 'javascript' }
localStorage.user === "[object Object]"

localStorage.tags = ['javascript', 'localStorage', 'store.js']
localStorage.tags.length === 32
localStorage.tags === "javascript,localStorage,store.js"
```

What we want (and get with store.js) is

```js
store.set('myage', 24)
store.get('myage') === 24

store.set('user', { name: 'marcus', likes: 'javascript' })
alert("Hi my name is " + store.get('user').name + "!")

store.set('tags', ['javascript', 'localStorage', 'store.js'])
alert("We've got " + store.get('tags').length + " tags here")
```

The native serialization engine of javascript is JSON. Rather than leaving it up to you to serialize and deserialize your values, store.js uses JSON.stringify() and JSON.parse() on each call to store.set() and store.get(), respectively.

Some browsers do not have native support for JSON. For those browsers you should include [JSON2.js] \(non-minified copy is included in this repo).


No sessionStorage/auto-expiration?
----------------------------------
No. I believe there is no way to provide sessionStorage semantics cross browser. However, it is trivial to expire values on read on top of store.js:

```js
var storeWithExpiration = {
	set: function(key, val, exp) {
		store.set(key, { val:val, exp:exp, time:new Date().getTime() })
	},
	get: function(key) {
		var info = store.get(key)
		if (!info) { return null }
		if (new Date().getTime() - info.time > info.exp) { return null }
		return info.val
	}
}
storeWithExpiration.set('foo', 'bar', 1000)
setTimeout(function() { console.log(storeWithExpiration.get('foo')) }, 500) // -> "bar"
setTimeout(function() { console.log(storeWithExpiration.get('foo')) }, 1500) // -> null
```



  [JSON2.js]: https://raw.githubusercontent.com/douglascrockford/JSON-js/master/json2.js
  [store.min.js]: https://raw.github.com/marcuswestin/store.js/master/store.min.js
  [store+json2.min.js]: https://raw.github.com/marcuswestin/store.js/master/store+json2.min.js
 
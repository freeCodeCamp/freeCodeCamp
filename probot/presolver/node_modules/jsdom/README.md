<h1 align="center">
    <img width="100" height="100" src="logo.svg" alt=""><br>
    jsdom
</h1>

jsdom is a pure-JavaScript implementation of many web standards, notably the WHATWG [DOM](https://dom.spec.whatwg.org/) and [HTML](https://html.spec.whatwg.org/multipage/) Standards, for use with Node.js. In general, the goal of the project is to emulate enough of a subset of a web browser to be useful for testing and scraping real-world web applications.

The latest versions of jsdom require Node.js v6 or newer. (Versions of jsdom below v10 still work with Node.js v4, but are unsupported.)

As of v10, jsdom has a new API (documented below). The old API is still supported for now; [see its documentation](./lib/old-api.md) for details.

## Basic usage

```js
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
```

To use jsdom, you will primarily use the `JSDOM` constructor, which is a named export of the jsdom main module. Pass the constructor a string. You will get back a `JSDOM` object, which has a number of useful properties, notably `window`:

```js
const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
console.log(dom.window.document.querySelector("p").textContent); // "Hello world"
```

(Note that jsdom will parse the HTML you pass it just like a browser does, including implied `<html>`, `<head>`, and `<body>` tags.)

The resulting object is an instance of the `JSDOM` class, which contains a number of useful properties and methods besides `window`. In general it can be used to act on the jsdom from the "outside," doing things that are not possible with the normal DOM APIs. For simple cases, where you don't need any of this functionality, we recommend a coding pattern like

```js
const { window } = new JSDOM(`...`);
// or even
const { document } = (new JSDOM(`...`)).window;
```

Full documentation on everything you can do with the `JSDOM` class is below, in the section "`JSDOM` Object API".

## Customizing jsdom

The `JSDOM` constructor accepts a second parameter which can be used to customize your jsdom in the following ways.

### Simple options

```js
const dom = new JSDOM(``, {
  url: "https://example.org/",
  referrer: "https://example.com/",
  contentType: "text/html",
  userAgent: "Mellblomenator/9000",
  includeNodeLocations: true,
  storageQuota: 10000000
});
```

- `url` sets the value returned by `window.location`, `document.URL`, and `document.documentURI`, and affects things like resolution of relative URLs within the document and the same-origin restrictions and referrer used while fetching subresources. It defaults to `"about:blank"`.
- `referrer` just affects the value read from `document.referrer`. It defaults to no referrer (which reflects as the empty string).
- `contentType` affects the value read from `document.contentType`, and how the document is parsed: as HTML or as XML. Values that are not `"text/html"` or an [XML mime type](https://html.spec.whatwg.org/multipage/infrastructure.html#xml-mime-type) will throw. It defaults to `"text/html"`.
- `userAgent` affects the value read from `navigator.userAgent`, as well as the `User-Agent` header sent while fetching subresources. It defaults to <code>\`Mozilla/5.0 (${process.platform}) AppleWebKit/537.36 (KHTML, like Gecko) jsdom/${jsdomVersion}\`</code>.
- `includeNodeLocations` preserves the location info produced by the HTML parser, allowing you to retrieve it with the `nodeLocation()` method (described below). It also ensures that line numbers reported in exception stack traces for code running inside `<script>` elements are correct. It defaults to `false` to give the best performance, and cannot be used with an XML content type since our XML parser does not support location info.
- `storageQuota` is the maximum size in code units for the separate storage areas used by `localStorage` and `sessionStorage`. Attempts to store data larger than this limit will cause a `DOMException` to be thrown. By default, it is set to 5,000,000 code units per origin, as inspired by the HTML specification.

Note that both `url` and `referrer` are canonicalized before they're used, so e.g. if you pass in `"https:example.com"`, jsdom will interpret that as if you had given `"https://example.com/"`. If you pass an unparseable URL, the call will throw. (URLs are parsed and serialized according to the [URL Standard](http://url.spec.whatwg.org/).)

### Executing scripts

jsdom's most powerful ability is that it can execute scripts inside the jsdom. These scripts can modify the content of the page and access all the web platform APIs jsdom implements.

However, this is also highly dangerous when dealing with untrusted content. The jsdom sandbox is not foolproof, and code running inside the DOM's `<script>`s can, if it tries hard enough, get access to the Node.js environment, and thus to your machine. As such, the ability to execute scripts embedded in the HTML is disabled by default:

```js
const dom = new JSDOM(`<body>
  <script>document.body.appendChild(document.createElement("hr"));</script>
</body>`);

// The script will not be executed, by default:
dom.window.document.body.children.length === 1;
```

To enable executing scripts inside the page, you can use the `runScripts: "dangerously"` option:

```js
const dom = new JSDOM(`<body>
  <script>document.body.appendChild(document.createElement("hr"));</script>
</body>`, { runScripts: "dangerously" });

// The script will be executed and modify the DOM:
dom.window.document.body.children.length === 2;
```

Again we emphasize to only use this when feeding jsdom code you know is safe. If you use it on arbitrary user-supplied code, or code from the Internet, you are effectively running untrusted Node.js code, and your machine could be compromised.

If you want to execute _external_ scripts, included via `<script src="">`, you'll also need to ensure that they load them. To do this, add the option `resources: "usable"` [as described below](#loading-subresources).

Note that event handler attributes, like `<div onclick="">`, will also not function unless `runScripts` is set to `"dangerously"`. (However, event handler _properties_, like `div.onclick = ...`, will function regardless of `runScripts`.)

If you are simply trying to execute script "from the outside", instead of letting `<script>` elements (and inline event handlers) run "from the inside", you can use the `runScripts: "outside-only"` option, which enables `window.eval`:

```js
const window = (new JSDOM(``, { runScripts: "outside-only" })).window;

window.eval(`document.body.innerHTML = "<p>Hello, world!</p>";`);
window.document.body.children.length === 1;
```

This is turned off by default for performance reasons, but is safe to enable.

Note that we strongly advise against trying to "execute scripts" by mashing together the jsdom and Node global environments (e.g. by doing `global.window = dom.window`), and then executing scripts or test code inside the Node global environment. Instead, you should treat jsdom like you would a browser, and run all scripts and tests that need access to a DOM inside the jsdom environment, using `window.eval` or `runScripts: "dangerously"`. This might require, for example, creating a browserify bundle to execute as a `<script>` element—just like you would in a browser.

Finally, for advanced use cases you can use the `dom.runVMScript(script)` method, documented below.

### Pretending to be a visual browser

jsdom does not have the capability to render visual content, and will act like a headless browser by default. It provides hints to web pages through APIs such as `document.hidden` that their content is not visible.

When the `pretendToBeVisual` option is set to `true`, jsdom will pretend that it is rendering and displaying content. It does this by:

* Changing `document.hidden` to return `false` instead of `true`
* Changing `document.visibilityState` to return `"visible"` instead of `"prerender"`
* Enabling `window.requestAnimationFrame()` and `window.cancelAnimationFrame()` methods, which otherwise do not exist

```js
const window = (new JSDOM(``, { pretendToBeVisual: true })).window;

window.requestAnimationFrame(timestamp => {
  console.log(timestamp > 0);
});
```

Note that jsdom still [does not do any layout or rendering](#unimplemented-parts-of-the-web-platform), so this is really just about _pretending_ to be visual, not about implementing the parts of the platform a real, visual web browser would implement.

### Loading subresources

By default, jsdom will not load any subresources such as scripts, stylesheets, images, or iframes. If you'd like jsdom to load such resources, you can pass the `resources: "usable"` option, which will load all usable resources. Those are:

* Frames and iframes, via `<frame>` and `<iframe>`
* Stylesheets, via `<link rel="stylesheet">`
* Scripts, via `<script>`, but only if `runScripts: "dangerously"` is also set
* Images, via `<img>`, but only if the `canvas` (or `canvas-prebuilt`) npm package is also installed (see "Canvas Support" below)

In the future we plan to offer more customization of resource loading via this option, but for now the default and the `"usable"` option are the two modes offered.

### Virtual consoles

Like web browsers, jsdom has the concept of a "console". This records both information directly sent from the page, via scripts executing inside the document, as well as information from the jsdom implementation itself. We call the user-controllable console a "virtual console", to distinguish it from the Node.js `console` API and from the inside-the-page `window.console` API.

By default, the `JSDOM` constructor will return an instance with a virtual console that forwards all its output to the Node.js console. To create your own virtual console and pass it to jsdom, you can override this default by doing

```js
const virtualConsole = new jsdom.VirtualConsole();
const dom = new JSDOM(``, { virtualConsole });
```

Code like this will create a virtual console with no behavior. You can give it behavior by adding event listeners for all the possible console methods:

```js
virtualConsole.on("error", () => { ... });
virtualConsole.on("warn", () => { ... });
virtualConsole.on("info", () => { ... });
virtualConsole.on("dir", () => { ... });
// ... etc. See https://console.spec.whatwg.org/#logging
```

(Note that it is probably best to set up these event listeners *before* calling `new JSDOM()`, since errors or console-invoking script might occur during parsing.)

If you simply want to redirect the virtual console output to another console, like the default Node.js one, you can do

```js
virtualConsole.sendTo(console);
```

There is also a special event, `"jsdomError"`, which will fire with error objects to report errors from jsdom itself. This is similar to how error messages often show up in web browser consoles, even if they are not initiated by `console.error`. So far, the following errors are output this way:

- Errors loading or parsing subresources (scripts, stylesheets, frames, and iframes)
- Script execution errors that are not handled by a window `onerror` event handler that returns `true` or calls `event.preventDefault()`
- Not-implemented errors resulting from calls to methods, like `window.alert`, which jsdom does not implement, but installs anyway for web compatibility

If you're using `sendTo(c)` to send errors to `c`, by default it will call `console.error` with information from `"jsdomError"` events. If you'd prefer to maintain a strict one-to-one mapping of events to method calls, and perhaps handle `"jsdomError"`s yourself, then you can do

```js
virtualConsole.sendTo(c, { omitJSDOMErrors: true });
```

### Cookie jars

Like web browsers, jsdom has the concept of a cookie jar, storing HTTP cookies. Cookies that have a URL on the same domain as the document, and are not marked HTTP-only, are accessible via the `document.cookie` API. Additionally, all cookies in the cookie jar will impact the fetching of subresources.

By default, the `JSDOM` constructor will return an instance with an empty cookie jar. To create your own cookie jar and pass it to jsdom, you can override this default by doing

```js
const cookieJar = new jsdom.CookieJar(store, options);
const dom = new JSDOM(``, { cookieJar });
```

This is mostly useful if you want to share the same cookie jar among multiple jsdoms, or prime the cookie jar with certain values ahead of time.

Cookie jars are provided by the [tough-cookie](https://www.npmjs.com/package/tough-cookie) package. The `jsdom.CookieJar` constructor is a subclass of the tough-cookie cookie jar which by default sets the `looseMode: true` option, since that [matches better how browsers behave](https://github.com/whatwg/html/issues/804). If you want to use tough-cookie's utilities and classes yourself, you can use the `jsdom.toughCookie` module export to get access to the tough-cookie module instance packaged with jsdom.

### Intervening before parsing

jsdom allows you to intervene in the creation of a jsdom very early: after the `Window` and `Document` objects are created, but before any HTML is parsed to populate the document with nodes:

```js
const dom = new JSDOM(`<p>Hello</p>`, {
  beforeParse(window) {
    window.document.childNodes.length === 0;
    window.someCoolAPI = () => { /* ... */ };
  }
});
```

This is especially useful if you are wanting to modify the environment in some way, for example adding shims for web platform APIs jsdom does not support.

## `JSDOM` object API

Once you have constructed a `JSDOM` object, it will have the following useful capabilities:

### Properties

The property `window` retrieves the `Window` object that was created for you.

The properties `virtualConsole` and `cookieJar` reflect the options you pass in, or the defaults created for you if nothing was passed in for those options.

### Serializing the document with `serialize()`

The `serialize()` method will return the [HTML serialization](https://html.spec.whatwg.org/#html-fragment-serialisation-algorithm) of the document, including the doctype:

```js
const dom = new JSDOM(`<!DOCTYPE html>hello`);

dom.serialize() === "<!DOCTYPE html><html><head></head><body>hello</body></html>";

// Contrast with:
dom.window.document.documentElement.outerHTML === "<html><head></head><body>hello</body></html>";
```

### Getting the source location of a node with `nodeLocation(node)`

The `nodeLocation()` method will find where a DOM node is within the source document, returning the [parse5 location info](https://www.npmjs.com/package/parse5#options-locationinfo) for the node:

```js
const dom = new JSDOM(
  `<p>Hello
    <img src="foo.jpg">
  </p>`,
  { includeNodeLocations: true }
);

const document = dom.window.document;
const bodyEl = document.body; // implicitly created
const pEl = document.querySelector("p");
const textNode = pEl.firstChild;
const imgEl = document.querySelector("img");

console.log(dom.nodeLocation(bodyEl));   // null; it's not in the source
console.log(dom.nodeLocation(pEl));      // { startOffset: 0, endOffset: 39, startTag: ..., endTag: ... }
console.log(dom.nodeLocation(textNode)); // { startOffset: 3, endOffset: 13 }
console.log(dom.nodeLocation(imgEl));    // { startOffset: 13, endOffset: 32 }
```

Note that this feature only works if you have set the `includeNodeLocations` option; node locations are off by default for performance reasons.

### Running vm-created scripts with `runVMScript(script)`

The built-in `vm` module of Node.js allows you to create `Script` instances, which can be compiled ahead of time and then run multiple times on a given "VM context". Behind the scenes, a jsdom `Window` is indeed a VM context. To get access to this ability, use the `runVMScript()` method:

```js
const { Script } = require("vm");

const dom = new JSDOM(``, { runScripts: "outside-only" });
const s = new Script(`
  if (!this.ran) {
    this.ran = 0;
  }

  ++this.ran;
`);

dom.runVMScript(s);
dom.runVMScript(s);
dom.runVMScript(s);

dom.window.ran === 3;
```

This is somewhat-advanced functionality, and we advise sticking to normal DOM APIs (such as `window.eval()` or `document.createElement("script")`) unless you have very specific needs.

### Reconfiguring the jsdom with `reconfigure(settings)`

The `top` property on `window` is marked `[Unforgeable]` in the spec, meaning it is a non-configurable own property and thus cannot be overridden or shadowed by normal code running inside the jsdom, even using `Object.defineProperty`.

Similarly, at present jsdom does not handle navigation (such as setting `window.location.href = "https://example.com/"`); doing so will cause the virtual console to emit a `"jsdomError"` explaining that this feature is not implemented, and nothing will change: there will be no new `Window` or `Document` object, and the existing `window`'s `location` object will still have all the same property values.

However, if you're acting from outside the window, e.g. in some test framework that creates jsdoms, you can override one or both of these using the special `reconfigure()` method:

```js
const dom = new JSDOM();

dom.window.top === dom.window;
dom.window.location.href === "about:blank";

dom.reconfigure({ windowTop: myFakeTopForTesting, url: "https://example.com/" });

dom.window.top === myFakeTopForTesting;
dom.window.location.href === "https://example.com/";
```

Note that changing the jsdom's URL will impact all APIs that return the current document URL, such as `window.location`, `document.URL`, and `document.documentURI`, as well as resolution of relative URLs within the document, and the same-origin checks and referrer used while fetching subresources. It will not, however, perform a navigation to the contents of that URL; the contents of the DOM will remain unchanged, and no new instances of `Window`, `Document`, etc. will be created.

## Convenience APIs

### `fromURL()`

In addition to the `JSDOM` constructor itself, jsdom provides a promise-returning factory method for constructing a jsdom from a URL:

```js
JSDOM.fromURL("https://example.com/", options).then(dom => {
  console.log(dom.serialize());
});
```

The returned promise will fulfill with a `JSDOM` instance if the URL is valid and the request is successful. Any redirects will be followed to their ultimate destination.

The options provided to `fromURL()` are similar to those provided to the `JSDOM` constructor, with the following additional restrictions and consequences:

- The `url` and `contentType` options cannot be provided.
- The `referrer` option is used as the HTTP `Referer` request header of the initial request.
- The `userAgent` option is used as the HTTP `User-Agent` request header of any requests.
- The resulting jsdom's URL, content type, and referrer are determined from the response.
- Any cookies set via HTTP `Set-Cookie` response headers are stored in the jsdom's cookie jar. Similarly, any cookies already in a supplied cookie jar are sent as HTTP `Cookie` request headers.

The initial request is not infinitely customizable to the same extent as is possible in a package like [request](https://www.npmjs.com/package/request); `fromURL()` is meant to be a convenience API for the majority of cases. If you need greater control over the initial request, you should perform it yourself, and then use the `JSDOM` constructor manually.

### `fromFile()`

Similar to `fromURL()`, jsdom also provides a `fromFile()` factory method for constructing a jsdom from a filename:

```js
JSDOM.fromFile("stuff.html", options).then(dom => {
  console.log(dom.serialize());
});
```

The returned promise will fulfill with a `JSDOM` instance if the given file can be opened. As usual in Node.js APIs, the filename is given relative to the current working directory.

The options provided to `fromFile()` are similar to those provided to the `JSDOM` constructor, with the following additional defaults:

- The `url` option will default to a file URL corresponding to the given filename, instead of to `"about:blank"`.
- The `contentType` option will default to `"application/xhtml+xml"` if the given filename ends in `.xhtml` or `.xml`; otherwise it will continue to default to `"text/html"`.

### `fragment()`

For the very simplest of cases, you might not need a whole `JSDOM` instance with all its associated power. You might not even need a `Window` or `Document`! Instead, you just need to parse some HTML, and get a DOM object you can manipulate. For that, we have `fragment()`, which creates a `DocumentFragment` from a given string:

```js
const frag = JSDOM.fragment(`<p>Hello</p><p><strong>Hi!</strong>`);

frag.childNodes.length === 2;
frag.querySelector("strong").textContent = "Why hello there!";
// etc.
```

Here `frag` is a [`DocumentFragment`](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment) instance, whose contents are created by parsing the provided string. The parsing is done using a `<template>` element, so you can include any element there (including ones with weird parsing rules like `<td>`).

All invocations of the `fragment()` factory result in `DocumentFragment`s that share the same owner `Document` and `Window`. This allows many calls to `fragment()` with no extra overhead. But it also means that calls to `fragment()` cannot be customized with any options.

Note that serialization is not as easy with `DocumentFragment`s as it is with full `JSDOM` objects. If you need to serialize your DOM, you should probably use the `JSDOM` constructor more directly. But for the special case of a fragment containing a single element, it's pretty easy to do through normal means:

```js
const frag = JSDOM.fragment(`<p>Hello</p>`);
console.log(frag.firstChild.outerHTML); // logs "<p>Hello</p>"
```

## Other noteworthy features

### Canvas support

jsdom includes support for using the [`canvas`](https://www.npmjs.com/package/canvas) or [`canvas-prebuilt`](https://npmjs.org/package/canvas-prebuilt) package to extend any `<canvas>` elements with the canvas API. To make this work, you need to include `canvas` as a dependency in your project, as a peer of `jsdom`. If jsdom can find the `canvas` package, it will use it, but if it's not present, then `<canvas>` elements will behave like `<div>`s.

### Encoding sniffing

In addition to supplying a string, the `JSDOM` constructor can also be supplied binary data, in the form of a Node.js [`Buffer`](https://nodejs.org/docs/latest/api/buffer.html) or a standard JavaScript binary data type like `ArrayBuffer`, `Uint8Array`, `DataView`, etc. When this is done, jsdom will [sniff the encoding](https://html.spec.whatwg.org/multipage/syntax.html#encoding-sniffing-algorithm) from the supplied bytes, scanning for `<meta charset>` tags just like a browser does.

This encoding sniffing also applies to `JSDOM.fromFile()` and `JSDOM.fromURL()`. In the latter case, just as in a browser, any `Content-Type` headers sent with the response will take priority.

Note that in many cases supplying bytes in this fashion can be better than supplying a string. For example, if you attempt to use Node.js's `buffer.toString("utf-8")` API, Node.js will not strip any leading BOMs. If you then give this string to jsdom, it will interpret it verbatim, leaving the BOM intact. But jsdom's binary data decoding code will strip leading BOMs, just like a browser; in such cases, supplying `buffer` directly will give the desired result.

### Closing down a jsdom

Timers in the jsdom (set by `window.setTimeout()` or `window.setInterval()`) will, by definition, execute code in the future in the context of the window. Since there is no way to execute code in the future without keeping the process alive, outstanding jsdom timers will keep your Node.js process alive. Similarly, since there is no way to execute code in the context of an object without keeping that object alive, outstanding jsdom timers will prevent garbage collection of the window on which they are scheduled.

If you want to be sure to shut down a jsdom window, use `window.close()`, which will terminate all running timers (and also remove any event listeners on the window and document).

### Running jsdom inside a web browser

jsdom has some support for being run inside a web browser, using [browserify](https://browserify.org/). That is, inside a web browser, you can use a browserified jsdom to create an entirely self-contained set of plain JavaScript objects which look and act much like the browser's existing DOM objects, while being entirely independent of them. "Virtual DOM", indeed!

jsdom's primary target is still Node.js, and so we use language features that are only present in recent Node.js versions (namely, Node.js v6+). Thus, older browsers will likely not work. (Even transpilation will not help much: we plan to use `Proxy`s extensively throughout the course of jsdom v10.x.)

Notably, jsdom works well inside a web worker. The original contributor, [@lawnsea](https://github.com/lawnsea/), who made this possible, has [published a paper](https://pdfs.semanticscholar.org/47f0/6bb6607a975500a30e9e52d7c9fbc0034e27.pdf) about his project which uses this capability.

Not everything works perfectly when running jsdom inside a web browser. Sometimes that is because of fundamental limitations (such as not having filesystem access), but sometimes it is simply because we haven't spent enough time making the appropriate small tweaks. Bug reports are certainly welcome.

### Debugging the DOM using Chrome Devtools

As of Node.js v6 you can debug programs using Chrome Devtools. See the [official documentation](https://nodejs.org/en/docs/inspector/) for how to get started.

By default jsdom elements are formatted as plain old JS objects in the console. To make it easier to debug, you can use [jsdom-devtools-formatter](https://github.com/viddo/jsdom-devtools-formatter), which lets you inspect them like real DOM elements.

## Caveats

### Asynchronous script loading

People often have trouble with asynchronous script loading when using jsdom. Many pages loads scripts asynchronously, but there is no way to tell when they're done doing so, and thus when it's a good time to run your code and inspect the resulting DOM structure. This is a fundamental limitation; we cannot predict what scripts on the web page will do, and so cannot tell you when they are done loading more scripts.

This can be worked around in a few ways. The best way, if you control the page in question, is to use whatever mechanisms are given by the script loader to detect when loading is done. For example, if you're using a module loader like RequireJS, the code could look like:

```js
// On the Node.js side:
const window = (new JSDOM(...)).window;
window.onModulesLoaded = () => {
  console.log("ready to roll!");
};
```

```html
<!-- Inside the HTML you supply to jsdom -->
<script>
requirejs(["entry-module"], () => {
  window.onModulesLoaded();
});
</script>
```

If you do not control the page, you could try workarounds such as polling for the presence of a specific element.

For more details, see the discussion in [#640](https://github.com/tmpvar/jsdom/issues/640), especially [@matthewkastor](https://github.com/matthewkastor)'s [insightful comment](https://github.com/tmpvar/jsdom/issues/640#issuecomment-22216965).

### Shared constructors and prototypes

At the present time, for most web platform APIs, jsdom shares the same class definition between multiple seemingly-independent jsdoms. That means that, for example, the following situation can occur:

```js
const dom1 = new JSDOM();
const dom2 = new JSDOM();

dom1.window.Element.prototype.expando = "blah";
console.log(dom2.window.document.createElement("frameset").expando); // logs "blah"
```

This is done mainly for performance and memory reasons: creating separate copies of all the many classes on the web platform, each time we create a jsdom, would be rather expensive.

Nevertheless, we remain interested in one day providing an option to create an "independent" jsdom, at the cost of some performance.

### Missing features in the new API

Compared to the old jsdom API from v9.x and before, the new API is noticeably missing fine-grained control of resource loads. Previous versions of jsdom allowed you to set options that were used when making requests (both for the initial request, in the old equivalent of `JSDOM.fromURL()`, and for subresource requests). They also allowed you to control which subresources were requested and applied to the main document, so that you could e.g. download stylesheets but not scripts. Finally, they provided a customizable resource loader that let you intercept any outgoing request and fulfill it with a completely synthetic response.

None of these features are yet in the new jsdom API, although we are hoping to add them back soon! This requires a decent amount of behind-the-scenes work to implement in a reasonable way, unfortunately.

In the meantime, please feel free to use the old jsdom API to get access to this functionality. It is supported and maintained, although it will not be getting new features. The documentation is found in [lib/old-api.md](./lib/old-api.md).

### Unimplemented parts of the web platform

Although we enjoy adding new features to jsdom and keeping it up to date with the latest web specs, it has many missing APIs. Please feel free to file an issue for anything missing, but we're a small and busy team, so a pull request might work even better.

Beyond just features that we haven't gotten to yet, there are two major features that are currently outside the scope of jsdom. These are:

- **Navigation**: the ability to change the global object, and all other objects, when clicking a link or assigning `location.href` or similar.
- **Layout**: the ability to calculate where elements will be visually laid out as a result of CSS, which impacts methods like `getBoundingClientRects()` or properties like `offsetTop`.

Currently jsdom has dummy behaviors for some aspects of these features, such as sending a "not implemented" `"jsdomError"` to the virtual console for navigation, or returning zeros for many layout-related properties. Often you can work around these limitations in your code, e.g. by creating new `JSDOM` instances for each page you "navigate" to during a crawl, or using `Object.defineProperty()` to change what various layout-related getters and methods return.

Note that other tools in the same space, such as PhantomJS, do support these features. On the wiki, we have a more complete writeup about [jsdom vs. PhantomJS](https://github.com/tmpvar/jsdom/wiki/jsdom-vs.-PhantomJS).

## Getting help

If you need help with jsdom, please feel free to use any of the following venues:

- The [mailing list](http://groups.google.com/group/jsdom) (best for "how do I" questions)
- The [issue tracker](https://github.com/tmpvar/jsdom/issues) (best for bug reports)
- The IRC channel: [#jsdom on freenode](irc://irc.freenode.net/jsdom)

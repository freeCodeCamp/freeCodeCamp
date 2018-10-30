# jsdom old API

The old jsdom API, from before v10, is hard to use and understand, and has bad defaults. But for now, it still has more features than the new API introduced in v10. As such, it is still supported, until we can port over all important features (notably custom resource loading) to the new API.

No new features will be added to the old API, but bug reports are accepted.

## Easymode: `jsdom.env`

`jsdom.env` is an API that allows you to throw a bunch of stuff at it, and it will generally do the right thing.

You can use it with a URL

```js
// Count all of the links from the io.js build page
var jsdom = require("jsdom/lib/old-api.js");

jsdom.env(
  "https://iojs.org/dist/",
  ["http://code.jquery.com/jquery.js"],
  function (err, window) {
    console.log("there have been", window.$("a").length - 4, "io.js releases!");
  }
);
```

or with raw HTML

```js
// Run some jQuery on a html fragment
var jsdom = require("jsdom/lib/old-api.js");

jsdom.env(
  '<p><a class="the-link" href="https://github.com/tmpvar/jsdom">jsdom!</a></p>',
  ["http://code.jquery.com/jquery.js"],
  function (err, window) {
    console.log("contents of a.the-link:", window.$("a.the-link").text());
  }
);
```

or with a configuration object

```js
// Print all of the news items on Hacker News
var jsdom = require("jsdom/lib/old-api.js");

jsdom.env({
  url: "http://news.ycombinator.com/",
  scripts: ["http://code.jquery.com/jquery.js"],
  done: function (err, window) {
    var $ = window.$;
    console.log("HN Links");
    $("td.title:not(:last) a").each(function() {
      console.log(" -", $(this).text());
    });
  }
});
```

or with raw JavaScript source

```js
// Print all of the news items on Hacker News
var jsdom = require("jsdom/lib/old-api.js");
var fs = require("fs");
var jquery = fs.readFileSync("./path/to/jquery.js", "utf-8");

jsdom.env({
  url: "http://news.ycombinator.com/",
  src: [jquery],
  done: function (err, window) {
    var $ = window.$;
    console.log("HN Links");
    $("td.title:not(:last) a").each(function () {
      console.log(" -", $(this).text());
    });
  }
});
```

### How it works

The do-what-I-mean API is used like so:

```js
jsdom.env(string, [scripts], [config], callback);
```

- `string`: may be a URL, file name, or HTML fragment
- `scripts`: a string or array of strings, containing file names or URLs that will be inserted as `<script>` tags
- `config`: see below
- `callback`: takes two arguments
  - `err`: either `null`, if nothing goes wrong, or an error, if the window could not be created
  - `window`: a brand new `window`, if there wasn't an error

_Example:_

```js
jsdom.env(html, function (err, window) {
  // free memory associated with the window
  window.close();
});
```

If you would like to specify a configuration object only:

```js
jsdom.env(config);
```

- `config.html`: a HTML fragment
- `config.file`: a file which jsdom will load HTML from; the resulting document's URL will be a `file://` URL.
- `config.url`: sets the resulting document's URL, which is reflected in various properties like `document.URL` and `location.href`, and is also used for cross-origin request restrictions. If `config.html` and `config.file` are not provided, jsdom will load HTML from this URL.
- `config.scripts`: see `scripts` above.
- `config.src`: an array of JavaScript strings that will be evaluated against the resulting document. Similar to `scripts`, but it accepts JavaScript instead of paths/URLs.
- `config.cookieJar`: cookie jar which will be used by document and related resource requests. Can be created by `jsdom.createCookieJar()` method. Useful to share cookie state among different documents as browsers does.
- `config.parsingMode`: either `"auto"`, `"html"`, or `"xml"`. The default is `"auto"`, which uses HTML behavior unless `config.url` responds with an XML `Content-Type`, or `config.file` contains a filename ending in `.xml` or `.xhtml`. Setting to `"xml"` will attempt to parse the document as an XHTML document. (jsdom is [currently only OK at doing that](https://github.com/tmpvar/jsdom/labels/x%28ht%29ml).)
- `config.referrer`: the new document will have this referrer.
- `config.cookie`: manually set a cookie value, e.g. `'key=value; expires=Wed, Sep 21 2011 12:00:00 GMT; path=/'`. Accepts cookie string or array of cookie strings.
- `config.headers`: an object giving any headers that will be used while loading the HTML from `config.url`, if applicable.
- `config.userAgent`: the user agent string used in requests; defaults to `Node.js (#process.platform#; U; rv:#process.version#)`
- `config.features`: see Flexibility section below. **Note**: the default feature set for `jsdom.env` does _not_ include fetching remote JavaScript and executing it. This is something that you will need to _carefully_ enable yourself.
- `config.resourceLoader`: a function that intercepts subresource requests and allows you to re-route them, modify, or outright replace them with your own content. More below.
- `config.done`, `config.onload`, `config.created`: see below.
- `config.concurrentNodeIterators`: the maximum amount of `NodeIterator`s that you can use at the same time. The default is `10`; setting this to a high value will hurt performance.
- `config.virtualConsole`: a virtual console instance that can capture the window’s console output; see the "Capturing Console Output" examples.
- `config.pool`: an object describing which agents to use for the requests; defaults to `{ maxSockets: 6 }`, see [request module](https://github.com/request/request#requestoptions-callback) for more details.
- `config.agent`: `http(s).Agent` instance to use
- `config.agentClass`: alternatively specify your agent's class name
- `config.agentOptions`: the agent options; defaults to `{ keepAlive: true, keepAliveMsecs: 115000 }`, see [http api](https://nodejs.org/api/http.html) for more details.
- `config.strictSSL`: if `true`, requires SSL certificates be valid; defaults to `true`, see [request module](https://github.com/request/request#requestoptions-callback) for more details.
- `config.proxy`: a URL for a HTTP proxy to use for the requests.


Note that at least one of the callbacks (`done`, `onload`, or `created`) is required, as is one of `html`, `file`, or `url`.

### Initialization lifecycle

If you just want to load the document and execute it, the `done` callback shown above is the simplest. If anything goes wrong while loading the document and creating the window, the problem will show up in the `error` passed as the first argument.

However, if you want more control over or insight into the initialization lifecycle, you'll want to use the `created` and/or `onload` callbacks:

#### `created(error, window)`

The `created` callback is called as soon as the window is created, or if that process fails. You may access all `window` properties here; however, `window.document` is not ready for use yet, as the HTML has not been parsed.

The primary use-case for `created` is to modify the window object (e.g. add new functions on built-in prototypes) before any scripts execute.

You can also set an event handler for `'load'` or other events on the window if you wish.

If the `error` argument is non-`null`, it will contain whatever loading or initialization error caused the window creation to fail; in that case `window` will not be passed.

#### `onload(window)`

The `onload` callback is called along with the window's `'load'` event. This means it will only be called if creation succeeds without error. Note that by the time it has called, any external resources will have been downloaded, and any `<script>`s will have finished executing.

#### `done(error, window)`

Now that you know about `created` and `onload`, you can see that `done` is essentially both of them smashed together:

- If window creation fails, then `error` will be the creation error.
- Otherwise, `window` will be a fully-loaded window, with all external resources downloaded and `<script>`s executed.

#### Dealing with asynchronous script loading

If you load scripts asynchronously, e.g. with a module loader like RequireJS, none of the above hooks will really give you what you want. There's nothing, either in jsdom or in browsers, to say "notify me after all asynchronous loads have completed." The solution is to use the mechanisms of the framework you are using to notify about this finishing up. E.g., with RequireJS, you could do

```js
// On the Node.js side:
var window = jsdom.jsdom(...).defaultView;
window.onModulesLoaded = function () {
  console.log("ready to roll!");
};
```

```html
<!-- Inside the HTML you supply to jsdom -->
<script>
requirejs(["entry-module"], function () {
  window.onModulesLoaded();
});
</script>
```

For more details, see the discussion in [#640](https://github.com/tmpvar/jsdom/issues/640), especially [@matthewkastor](https://github.com/matthewkastor)'s [insightful comment](https://github.com/tmpvar/jsdom/issues/640#issuecomment-22216965).

#### Listening for script errors during initialization

Although it is easy to listen for script errors after initialization, via code like

```js
var window = jsdom.jsdom(...).defaultView;
window.addEventListener("error", function (event) {
  console.error("script error!!", event.error);
});
```

it is often also desirable to listen for any script errors during initialization, or errors loading scripts passed to `jsdom.env`. To do this, use the virtual console feature, described in more detail later:

```js
var virtualConsole = jsdom.createVirtualConsole();
virtualConsole.on("jsdomError", function (error) {
  console.error(error.stack, error.detail);
});

var window = jsdom.jsdom(..., { virtualConsole }).defaultView;
```

You also get this functionality for free by default if you use `virtualConsole.sendTo`; again, see more below:

```js
var virtualConsole = jsdom.createVirtualConsole().sendTo(console);
var window = jsdom.jsdom(..., { virtualConsole }).defaultView;
```

### On running scripts and being safe

By default, `jsdom.env` will not process and run external JavaScript, since our sandbox is not foolproof. That is, code running inside the DOM's `<script>`s can, if it tries hard enough, get access to the Node environment, and thus to your machine. If you want to (carefully!) enable running JavaScript, you can use `jsdom.jsdom`, `jsdom.jQueryify`, or modify the defaults passed to `jsdom.env`.

### On timers and process lifetime

Timers in the page (set by `window.setTimeout` or `window.setInterval`) will, by definition, execute code in the future in the context of the `window`. Since there is no way to execute code in the future without keeping the process alive, note that outstanding jsdom timers will keep your Node.js process alive. Similarly, since there is no way to execute code in the context of an object without keeping that object alive, outstanding jsdom timers will prevent garbage collection of the `window` on which they are scheduled. If you want to be sure to shut down a jsdom window, use `window.close()`, which will terminate all running timers (and also remove any event listeners on the `window` and `document`).

## For the hardcore: `jsdom.jsdom`

The `jsdom.jsdom` method does fewer things automatically; it takes in only HTML source, and it does not allow you to separately supply scripts that it will inject and execute. It just gives you back a `document` object, with usable `document.defaultView`, and starts asynchronously executing any `<script>`s included in the HTML source. You can listen for the `'load'` event to wait until scripts are done loading and executing, just like you would in a normal HTML page.

Usage of the API generally looks like this:

```js
var jsdom = require("jsdom/lib/old-api.js").jsdom;
var doc = jsdom(markup, options);
var window = doc.defaultView;
```

- `markup` is a HTML document to be parsed. You can also pass `undefined` to get the basic document, equivalent to what a browser will give if you open up an empty `.html` file.

- `options`: see the explanation of the `config` object above.

### Flexibility

One of the goals of jsdom is to be as minimal and light as possible. This section details how someone can change the behavior of `Document`s before they are created. These features are baked into the `DOMImplementation` that every `Document` has, and may be tweaked in two ways:

1. When you create a new `Document`, by overriding the configuration:

  ```js
  var jsdom = require("jsdom/lib/old-api.js").jsdom;
  var doc = jsdom("<html><body></body></html>", {
      features: {
        FetchExternalResources : ["link"]
      }
  });
  ```

  Do note, that this will only affect the document that is currently being created. All other documents will use the defaults specified below (see: Default Features).

2. Before creating any documents, you can modify the defaults for all future documents:

  ```js
  require("jsdom/lib/old-api.js").defaultDocumentFeatures = {
      FetchExternalResources: ["script"],
      ProcessExternalResources: false
  };
  ```

#### External Resources

Default features are extremely important for jsdom as they lower the configuration requirement and present developers a set of consistent default behaviors. The following sections detail the available features, their defaults, and the values that jsdom uses.

`FetchExternalResources`

- _Default_: `["script", "link"]`
- _Allowed_: `["script", "frame", "iframe", "link", "img"]` or `false`
- _Default for `jsdom.env`_: `false`

Enables/disables fetching files over the file system/HTTP

`ProcessExternalResources`

- _Default_: `["script"]`
- _Allowed_: `["script"]` or `false`
- _Default for `jsdom.env`_: `false`

Enables/disables JavaScript execution

`SkipExternalResources`

- _Default_: `false` (allow all)
- _Allowed_: `/url to be skipped/` or `false`
- _Example_: `/http:\/\/example.org/js/bad\.js/`

Filters resource downloading and processing to disallow those matching the given regular expression

#### Custom External Resource Loader

jsdom lets you intercept subresource requests using `config.resourceLoader`. `config.resourceLoader` expects a function which is called for each subresource request with the following arguments:

- `resource`: a vanilla JavaScript object with the following properties
  - `element`: the element that requested the resource.
  - `url`: a parsed URL object.
  - `cookie`: the content of the HTTP cookie header (`key=value` pairs separated by semicolons).
  - `baseUrl`: the base URL used to resolve relative URLs.
  - `defaultFetch(callback)`: a convenience method to fetch the resource online.
- `callback`: a function to be called with two arguments
  - `error`: either `null`, if nothing goes wrong, or an `Error` object.
  - `body`: a string representing the body of the resource.

For example, fetching all JS files from a different directory and running them in strict mode:

```js
var jsdom = require("jsdom/lib/old-api.js");

jsdom.env({
  url: "http://example.com/",
  resourceLoader: function (resource, callback) {
    var pathname = resource.url.pathname;
    if (/\.js$/.test(pathname)) {
      resource.url.pathname = pathname.replace("/js/", "/js/raw/");
      return resource.defaultFetch(function (err, body) {
        if (err) return callback(err);
        callback(null, '"use strict";\n' + body);
      });
    } else {
      return resource.defaultFetch(callback);
    }
  },
  features: {
    FetchExternalResources: ["script"],
    ProcessExternalResources: ["script"],
    SkipExternalResources: false
  }
});
```

You can return an object containing an `abort()` function which will be called if the window is closed or stopped before the request ends.
The `abort()` function should stop the request and call the callback with an error.

For example, simulating a long request:

```js
var jsdom = require("jsdom/lib/old-api.js");

jsdom.env({
  url: "http://example.com/",
  resourceLoader: function (resource, callback) {
    var pathname = resource.url.pathname;
    if (/\.json$/.test(pathname)) {
      var timeout = setTimeout(function() {
        callback(null, "{\"test\":\"test\"}");
      }, 10000);
      return {
        abort: function() {
          clearTimeout(timeout);
          callback(new Error("request canceled by user"));
        }
      };
    } else {
      return resource.defaultFetch(callback);
    }
  },
  features: {
    FetchExternalResources: ["script"],
    ProcessExternalResources: ["script"],
    SkipExternalResources: false
  }
});
```

## Canvas

jsdom includes support for using the [canvas](https://npmjs.org/package/canvas) or [canvas-prebuilt](https://npmjs.org/package/canvas-prebuilt) package to extend any `<canvas>` elements with the canvas API. To make this work, you need to include canvas as a dependency in your project, as a peer of jsdom. If jsdom can find the canvas package, it will use it, but if it's not present, then `<canvas>` elements will behave like `<div>`s.

## More Examples

### Creating a browser-like window object

```js
var jsdom = require("jsdom/lib/old-api.js").jsdom;
var document = jsdom("hello world");
var window = document.defaultView;

console.log(window.document.documentElement.outerHTML);
// output: "<html><head></head><body>hello world</body></html>"

console.log(window.innerWidth);
// output: 1024

console.log(typeof window.document.getElementsByClassName);
// outputs: function
```

### jQueryify

```js
var jsdom = require("jsdom/lib/old-api.js");
var window = jsdom.jsdom().defaultView;

jsdom.jQueryify(window, "http://code.jquery.com/jquery-2.1.1.js", function () {
  window.$("body").append('<div class="testing">Hello World, It works</div>');

  console.log(window.$(".testing").text());
});
```

### Passing objects to scripts inside the page

```js
var jsdom = require("jsdom/lib/old-api.js").jsdom;
var window = jsdom().defaultView;

window.__myObject = { foo: "bar" };

var scriptEl = window.document.createElement("script");
scriptEl.src = "anotherScript.js";
window.document.body.appendChild(scriptEl);

// anotherScript.js will have the ability to read `window.__myObject`, even
// though it originated in Node.js!
```

### Shimming unimplemented APIs

```js
var jsdom = require("jsdom/lib/old-api.js");
var document = jsdom("", {
  created(err, window) {
    window.alert = () => {
      // Do something different than jsdom's default "not implemented" virtual console error
    };

    Object.defineProperty(window, "outerWidth", {
      get() { return 400; },
      enumerable: true,
      configurable: true
    });
  }
});
```

### Serializing a document

```js
var jsdom = require("jsdom/lib/old-api.js").jsdom;
var serializeDocument = require("jsdom/lib/old-api.js").serializeDocument;

var doc = jsdom("<!DOCTYPE html>hello");

serializeDocument(doc) === "<!DOCTYPE html><html><head></head><body>hello</body></html>";
doc.documentElement.outerHTML === "<html><head></head><body>hello</body></html>";
```

### Sharing cookie state among pages

```js
var jsdom = require("jsdom/lib/old-api.js");
var cookieJar = jsdom.createCookieJar();

jsdom.env({
    url: 'http://google.com',
    cookieJar: cookieJar,
    done: function (err1, window1) {
        //...

        jsdom.env({
            url: 'http://code.google.com',
            cookieJar: cookieJar,
            done: function (err2, window2) {
                //...
            }
        });
    }
});
```

### Capturing Console Output

#### Forward a window's console output to the Node.js console

```js
var jsdom = require("jsdom/lib/old-api.js");

var document = jsdom.jsdom(undefined, {
  virtualConsole: jsdom.createVirtualConsole().sendTo(console)
});
```

By default this will forward all `"jsdomError"` events to `console.error`. If you want to maintain only a strict one-to-one mapping of events to method calls, and perhaps handle `"jsdomErrors"` yourself, then you can do `sendTo(console, { omitJSDOMErrors: true })`.

#### Create an event emitter for a window's console

```js
var jsdom = require("jsdom/lib/old-api.js");

var virtualConsole = jsdom.createVirtualConsole();

virtualConsole.on("log", function (message) {
  console.log("console.log called ->", message);
});

var document = jsdom.jsdom(undefined, {
  virtualConsole: virtualConsole
});
```

Post-initialization, if you didn't pass in a `virtualConsole` or no longer have a reference to it, you can retrieve the `virtualConsole` by using:

```js
var virtualConsole = jsdom.getVirtualConsole(window);
```

#### Virtual console `jsdomError` error reporting

Besides the usual events, corresponding to `console` methods, the virtual console is also used for reporting errors from jsdom itself. This is similar to how error messages often show up in web browser consoles, even if they are not initiated by `console.error`. So far, the following errors are output this way:

- Errors loading or parsing external resources (scripts, stylesheets, frames, and iframes)
- Script execution errors that are not handled by a window `onerror` event handler that returns `true` or calls `event.preventDefault()`
- Calls to methods, like `window.alert`, which jsdom does not implement, but installs anyway for web compatibility

### Getting a node's location within the source

To find where a DOM node is within the source document, we provide the `jsdom.nodeLocation` function:

```js
var jsdom = require("jsdom/lib/old-api.js");

var document = jsdom.jsdom(`<p>Hello
    <img src="foo.jpg">
  </p>`);

var bodyEl = document.body; // implicitly created
var pEl = document.querySelector("p");
var textNode = pEl.firstChild;
var imgEl = document.querySelector("img");

console.log(jsdom.nodeLocation(bodyEl));   // null; it's not in the source
console.log(jsdom.nodeLocation(pEl));      // { startOffset: 0, endOffset: 39, startTag: ..., endTag: ... }
console.log(jsdom.nodeLocation(textNode)); // { startOffset: 3, endOffset: 13 }
console.log(jsdom.nodeLocation(imgEl));    // { startOffset: 13, endOffset: 32 }
```

This returns the [parse5 location info](https://www.npmjs.com/package/parse5#options-locationinfo) for the node.

#### Overriding `window.top`

The `top` property on `window` is marked `[Unforgeable]` in the spec, meaning it is a non-configurable own property and thus cannot be overridden or shadowed by normal code running inside the jsdom window, even using `Object.defineProperty`. However, if you're acting from outside the window, e.g. in some test framework that creates jsdom instances, you can override it using the special `jsdom.reconfigureWindow` function:

```js
jsdom.reconfigureWindow(window, { top: myFakeTopForTesting });
```

In the future we may expand `reconfigureWindow` to allow overriding other `[Unforgeable]` properties. Let us know if you need this capability.

#### Changing the URL of an existing jsdom `Window` instance

At present jsdom does not handle navigation (such as setting `window.location.href === "https://example.com/"`). However, if you'd like to change the URL of an existing `Window` instance (such as for testing purposes), you can use the `jsdom.changeURL` method:

```js
jsdom.changeURL(window, "https://example.com/");
```

#### Running vm scripts

Although in most cases it's simplest to just insert a `<script>` element or call `window.eval`, in some cases you want access to the raw [vm context](https://nodejs.org/api/vm.html) underlying jsdom to run scripts. You can do that like so:

```js
const script = new vm.Script("globalVariable = 5;", { filename: "test.js" });
jsdom.evalVMScript(window, script);
```

## jsdom vs. PhantomJS

If you're curious about the differences between jsdom and PhantomJS, we have [written those up on the wiki](https://github.com/tmpvar/jsdom/wiki/jsdom-vs.-PhantomJS).

## What Standards Does jsdom Support, Exactly?

Our mission is to get something very close to a headless browser, with emphasis more on the DOM/HTML side of things than the CSS side. As such, our primary goals are supporting [The DOM Standard](http://dom.spec.whatwg.org/) and [The HTML Standard](http://www.whatwg.org/specs/web-apps/current-work/multipage/). We only support some subset of these so far; in particular we have the subset covered by the outdated DOM 2 spec family down pretty well. We're slowly including more and more from the modern DOM and HTML specs, including some `Node` APIs, `querySelector(All)`, attribute semantics, the history and URL APIs, and the HTML parsing algorithm.

We also support some subset of the [CSSOM](http://dev.w3.org/csswg/cssom/), largely via [@chad3814](https://github.com/chad3814)'s excellent [cssstyle](https://www.npmjs.org/package/cssstyle) package. In general we want to make webpages run headlessly as best we can, and if there are other specs we should be incorporating, let us know.

### Supported encodings

The supported encodings are the ones listed [in the Encoding Standard](https://encoding.spec.whatwg.org/#names-and-labels) excluding these:

- ISO-8859-8-I
- x-mac-cyrillic
- ISO-2022-JP
- replacement
- x-user-defined

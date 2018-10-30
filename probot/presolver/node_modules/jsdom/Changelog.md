## 11.12.0

* Added `window.localStorage`, `window.sessionStorage`, and `StorageEvent` support. These are currently only stored in-memory; file an issue if you need persistent (on-disk) storage capability so we can discuss adding that. This feature includes the new `storageQuota` option for controlling how much can be stored.
* Added `element.closest()`. (caub)
* Changed `"hashchange"` and `"popstate"` events to no longer bubble, per a specification update.
* Fixed the old API in Node.js v10 to not throw, when given input that is not a valid file path (such as a typical HTML string).
* Upgraded `cssstyle` to v1.0.0, bringing along various fixes to our CSS parser and object model. (eddies)
* Upgraded `nwsapi` to v2.0.7, bringing along various fixes to our selector engine.

## 11.11.0

* Added `node.getRootNode()`. (FrecksterGIT)
* Added `label.control`. (FrecksterGIT)
* Added `el.labels` for form control elements. (FrecksterGIT)
* Fixed the `contentType` of `Document`s created through `<iframe>`s.
* Fixed the `contentType` and `origin` of `Document`s created through `document.implementation.createDocument()`.
* Fixed `sourceEl.srcset` to return the value of the `srcset=""` attribute, instead of the `cite=""` attribute.
* Fixed `node.normalize()` to not modify non-`Text` nodes. (lddubeau)
* Upgraded `cssstyle` to v0.3.1, bringing along various fixes to our CSS parser and object model. (jsakas)
* Upgraded `whatwg-url` to v6.4.1, fixing the interaction of `URL`'s `href` and `searchParams` properties.
* Upgraded our selector matching engine from `nwsmatcher` to `nwsapi`, bringing along extensive fixes, performance improvements, and additional selector support.

## 11.10.0

* Added `event.srcElement` and `event.returnValue`.
* Fixed `XMLHttpRequest` to correctly set the User-Agent header, and set it on CORS preflight requests. (BehindTheMath)

## 11.9.0

* Added `node.lookupPrefix()`, `node.lookupNamespaceURI()` and `node.isDefaultNamespace()`.
* Fixed the cloning of `Document`s; previously it would not clone all of the appropriate state, and would sometimes add an extra document type node.
* Fixed various edge cases in the `textContent` and `nodeValue` properties.
* Fixed `canvas.toBlob()` to properly pass through the JPEG quality argument, instead of always passing zero to `node-canvas`. (challakoushik)

## 11.8.0

* Added the full constraint validation API, i.e. `willValidate`, `validity`, `validationMessage`, `checkValidity()`, `reportValidity()`, and `setCustomValidity()`, on `HTMLButtonElement`, `HTMLFieldSetElement`, `HTMLFormElement`, `HTMLInputElement`, `HTMLObjectElement`, `HTMLOutputElement`, `HTMLSelectElement`, and `HTMLTextAreaElement`. (kontomondo)
* Added `getElementById()` to `DocumentFragment`.

## 11.7.0

* Added the boolean return value to `DOMTokenList`'s `replace()` method, per the recent spec addition.
* Added `FileReader`'s `readAsBinaryString()` method, as it has been added back to the specification.
* Fixed event handlers to be own properties of each `Window`, instead of on `Window.prototype`. (Fetz)
* Fixed an exception that would sometimes get raised when removing an `<img>` element's `src=""` attribute. (atsikov)
* Fixed `"abort"` events on `AbortSignal`s to have their `isTrusted` set to true.
* Fixed some argument conversions in `XMLHttpRequest`'s `open()` method.
* Improved MIME type and data: URL parsing throughout jsdom, by using the new [`whatwg-mimetype`](https://www.npmjs.com/package/whatwg-mimetype) and [`data-urls`](https://www.npmjs.com/package/data-urls) packages.
* Removed some unnecessary `.webidl` files that were included in the npm package.

## 11.6.2

* Fixed another regression (since v11.6.0) in `<style>` elements, where they would omit a series of parsing `"jsdomError"`s for any style sheet text containing spaces.
* Generally improved the spec-conformance of when `<style>` and `<script>` elements are evaluated; for example, `<script>` elements inserted by `innerHTML` are no longer evaluated.

## 11.6.1

* Fixed one regression (since v11.6.0) in `<style>` elements, where their `sheet` property would sometimes be `null` when it should not be.
* Fixed a case where a `<style>` element's `sheet` property would be left as a `CSSStyleSheet` despite it not being in the document.

Another regression remains where we are emitting spurious CSS-parsing `"jsdomError"` events; see [#2123](https://github.com/tmpvar/jsdom/issues/2123). We also discovered a large amount of preexisting brokenness around `<style>`, `<link>`, and `@import`; see [#2124](https://github.com/tmpvar/jsdom/issues/2124) for more details.

We'll try to fix these soon, especially the regression.

## 11.6.0

* Added a fully-functioning `WebSocket` implementation!
* Added a `window.performance` implementation, including the basics of the [High Resolution Time](https://w3c.github.io/hr-time/) specification: `performance.now()`, `performance.timeOrigin`, and `performance.toJSON()`.
* Added support for all of the public API of `HTMLMeterElement`, except for `meterEl.labels`.
* Added the `locationbar`, `menubar`, `personalbar`, `scrollbars`, `statusbar`, and `toolbar` properties to `Window`.
* Added more properties to `window.screen`: `availWidth`, `availHeight`, `colorDepth`, and `pixelDepth`. All of its properties are now getters as well.
* Added `window.devicePixelRatio`.
* Added `getModifierState()` to `MouseEvent` and `KeyboardEvent`.
* Added a setter for `HTMLInputElement`'s `files` property.
* Added support for the `endings` option to the `Blob` constructor.
* Fixed firing various event firings to have the correct default values, e.g. the properties of `MouseEvent` when using `element.click()`.
* Fixed the firing of `popstate` and `hashchange` events during fragment navigation to make them trusted events.
* Fixed `data:` URL parsing to not include the fragment portions.
* Fixed all URL-accepting properties to properly perform [scalar value string conversion](https://infra.spec.whatwg.org/#javascript-string-convert) and URL resolution.
* Fixed many other small edge-case conformance issues in the API surface of various web APIs; see [#2053](https://github.com/tmpvar/jsdom/pull/2053) and [#2081](https://github.com/tmpvar/jsdom/pull/2081) for more information.
* Fixed various APIs to use ASCII lowercasing, instead of Unicode lowercasing, for element and attribute names.
* Fixed the encoding of a document created via `new Document()` to be UTF-8.
* Fixed event handler properties behavior when given non-callable objects.
* Increased the performance of parsing HTML documents with large numbers of sibling elements.
* Removed `probablySupportsContext()` and `setContext()` from `HTMLCanvasElement`, per spec updates.
* Removed the nonstandard `window.scrollLeft` and `window.scrollTop` properties, and the `window.createPopup()` method.

## 11.5.1

(This should have been a minor release; oops.)

* Added `AbortSignal` and `AbortController`.
* Fixed validation for file `<input>`s and implemented validation for more input types.

## 11.4.0

For this release we'd like to welcome [@Zirro](https://github.com/tmpvar/jsdom/commits?author=Zirro) to the core team; his contributions over the course of this year have enhanced jsdom immensely.

* Added a rudimentary set of SVG element classes, namely `SVGElement`, `SVGGraphicsElement`, `SVGSVGElement`, `SVGTests`, `SVGAnimatedString`, `SVGNumber`, and `SVGStringList`. The main impact here is that SVG elements are now instances of `SVGElement`, instead of being simply `Element` (as they were in v11.3.0) or `HTMLUnknownElement` (as they were in v11.2.0 and previously). The only concrete subclass that is implemented is `SVGSVGElement`, for `<svg>` itself; other tags will not map to their correct classes, because those classes are not yet implemented.
* Added the new `pretendToBeVisual` option, which controls the presence of the new `requestAnimationFrame()` and `cancelAnimationFrame()` methods, and the new values of `document.hidden`/`document.visibilityState`. [See the README](https://github.com/tmpvar/jsdom#pretending-to-be-a-visual-browser) for more information. (SimenB)
* Added the `append()` and `prepend()` methods to `Document`, `DocumentFragment`, and `Element`. (caub)
* Added the `before()`, `after()`, and `replaceWith()` methods to `DocumentType`, `Element`, and `CharacterData`. (caub)
* Added `node.isConnected`.
* Added `node.isSameNode()`.
* Added support for parsing CDATA sections in XML documents, including in `domParser.parseFromString()`. (myabc)
* Added appropriate `input.value` getter/setter logic for `<input type="file">`.
* Significantly improved the spec-compliance of `NamedNodeMap`, i.e. of `element.attributes`, such that retrieving named or indexed properties will now always work properly.
* Fixed `domParser.parseFromString()` to not parse HTML character entities in XML documents. (myabc)
* Fixed `xhr.abort()` to clear any set headers.
* Fixed `XMLHttpRequest` to always decoded responses as UTF-8 when `responseType` is set to `"json"`.
* Fixed `XMLHttpRequest` CORS header handling, especially with regard to preflights and Access-Control-Allow-Headers. (ScottAlbertine)
* Fixed the behavior of `radioButton.click()` to fire appropriate `input` and `change` events. (liqwid)
* Fixed `querySelector()`/`querySelectorAll()` behavior for SVG elements inside `<template>` contents `DocumentFragment`s, including those created by `JSDOM.fragment()`. (caub)
* Fixed the line number reporting in exception stack traces when using `<script>` elements, when `includeNodeLocations` is set.
* Removed the `<applet>` element, [following the spec](https://github.com/whatwg/html/pull/1399).

## 11.3.0

For this release we'd like to formally welcome [@TimothyGu](https://github.com/tmpvar/jsdom/commits?author=TimothyGu) to the core team, as a prolific contributor. He will join the illustrious ranks of those who do so much work on jsdom that we no longer note their names in the changelog.

* Added `table.tHead`, `table.tFoot`, and `table.caption` setters, and the `table.createTBody()` method.
* Added `CompositionEvent` and `WheelEvent` classes.
* Added a `<details>` element implementation. (Zirro)
* Added stub `<marquee>` and `<picture>` element implementations. (Zirro)
* Updated `uiEvent.initUIEvent()`, `keyboardEvent.initKeyboardEvent()`, and `mouseEvent.initiMouseEvent()` to match the latest specifications.
* Converted `DOMTokenList` (used by, e.g., `element.classList`) to use proxies for improved specification compliance and "liveness".
* Fixed the `DOMException` class to be spec-compliant, including its constructor signature.
* Fixed some subtle interactions between inline event handlers and other event listeners.
* Fixed the element interface used when creating many of the more obscure elements.
* Fixed the behavior of the `table.rows` getter, and the `table.createCaption()` and `table.deleteRow()` methods.
* Fixed incorrect sharing of methods between interfaces that used mixins (e.g. previously `document.querySelector === documentFragment.querySelector`, incorrectly).
* Fixed `FocusEvent` creation, which regressed in v11.2.0.
* Fixed `UIEvent` to only allow initializing with `Window` objects for its `view` property.
* Fixed the behavior of `tr.rowIndex` and `tr.deleteCall()`.
* Fixed the element interface for `<td>` and `<th>` to be simply `HTMLTableCellElement`, and improved that class's spec compliance.
* Fixed calling `label.click()` to not trigger the labeled control's activation behavior when the control is disabled. (schreifels)
* Fixed `document.getElementsByName()` to return a `NodeList` instead of a `HTMLCollection`. (Zirro)
* Significantly sped up synchronous `XMLHttpRequest`. (Zirro)

## 11.2.0

This release brings with it a much-awaited infrastructure change, as part of [webidl2js v7.3.0](https://github.com/jsdom/webidl2js/releases/tag/v7.3.0) by the ever-amazing TimothyGu: jsdom can now generate spec-compliant versions of classes that have "`Proxy`-like" behavior, i.e. allow getting or setting keys in unusual ways. This enables a number of improvements, also by TimothyGu:

* Significantly improved the spec-compliance and "liveness" of both `NodeList` and `HTMLCollection`, such that retrieving properties via indices or (in `HTMLCollection`'s case) `id`/`name` values will always work correctly.
* Added `element.dataset` support.
* Added indexed and named access to `<select>` elements, as well as the corresponding `item()` and `namedItem()` methods.
* Added suport for `FileList` indexed properties, i.e. `fileList[i]`.
* Made `select.options` an instance of the newly-implemented `HTMLOptionsCollection`, instead of just a `HTMLCollection`.

This infrastructure will allow us to improve and implement many other similar behaviors; that work is being tracked in [#1129](https://github.com/tmpvar/jsdom/issues/1129).

In addition to these improvements to the object model, we have more work to share:

* Added no-op APIs `document.clear()`, `document.captureEvents()`, `document.releaseEvents()`, `window.external.AddSearchProvider()`, and `window.external.IsSearchProviderInstalled()`. (Zirro)
* Added active checks to prevent reentrancy in `TreeWalker` and `NodeIterator`.
* Updated the interaction between a `<textarea>`'s `value`, `defaultValue`, and `textContent` per [a recent spec change](https://github.com/whatwg/html/commit/5afbba1cf62ee01bc6af3fd220d01f3f7591a0fc)
* Fixed elements with `id="undefined"` shadowing the `undefined` property of the global object. (TimothyGu)
* Fixed matching in `getElementsByClassName()` to be ASCII case-insensitive, instead of using JavaScript's `toLowerCase()`.
* Improved some behaviors around navigating to fragments. (ForbesLindesay)
* Improved `XMLHttpRequest` and `FileReader` behavior, mainly around event handlers, `abort()`, and network errors.
* Improved edge-case spec compliance of `NodeIterator`.

## 11.1.0

* Added `javascript:` URL "navigation" via `window.location`, at least by evaluating the side effects. It still doesn't actually navigate anywhere. (ForbesLindesay)
* Updated `whatwg-url` to v6.1.0, bringing along origin serialization changes and `URLSearchParams` among various other fixes. (ForbesLindesay)
* Fixed `javascript:` URL loading for iframes to do proper percent-decoding and error reporting.
* Fixed corrupted `XMLHttpRequest` responses when they were over 1 MiB.
* Fixed timers to not start after a window is `close()`d, which could cause strange errors since most objects are unusable at that point. (Enverbalalic)

## 11.0.0

Breaking changes:

* Custom parsers, via the `parser` option to the old API, can no longer be specified. They were never tested, often broken, and a maintenance burden. The defaults, of [parse5](https://www.npmjs.com/package/parse5) for HTML and [sax](https://www.npmjs.com/package/sax) for XML, now always apply.
* Due to a parse5 upgrade, the location info objects returned by `dom.nodeLocation()` or the old API's `jsdom.nodeLocation()` now have a different structure.
* Fixed how `runScripts` applies to event handler attributes; now they will no longer be converted into event handler functions unless `runScripts: "dangerously"` is set. However, event handler _properties_ will now work with any `runScripts` option value, instead of being blocked.

Other changes:

* Overhauled how event handler properties and attributes work to follow the spec. In particular, this adds various `oneventname` properties to various prototypes, ensures the correct order when interleaving event handlers and other event listeners, and ensures that event handlers are evaluated with the correct values in scope.
* Upgraded parse5 from v1 to v3, bringing along several correctness improvements to HTML parsing. (Zirro)
* Updated `Location` properties to be on the instance, instead of the prototype, and to be non-configurable.
* Significantly improved the performance of `HTMLCollection`, and thus of parsing large documents. (Zirro)
* Significantly improved the performance of `getComputedStyle()` by removing unsupported selectors from the default style sheet. (flaviut)
* Fixed all web platform methods that accepted web platform objects to perform proper type checks on them, throwing a `TypeError` when given invalid values. (TimothyGu)
* Fixed the `Symbol.toStringTag` properties to be non-writable and non-enumerable. (TimothyGu)
* Fixed `tokenList.remove()` when the `DOMTokenList` corresponded to a non-existant attribute. (Zirro)
* Fixed `fileReader.abort()` to terminate ongoing reads properly.
* Fixed `xhr.send()` to support array buffer views, not just `ArrayBuffer`s. (ondras)
* Fixed non-`GET` requests to `data:` URLs using `XMLHttpRequest`. (Zirro)
* Fixed form submission to no longer happen for disconnected forms.
* Fixed body event handler attributes to be treated like all others in terms of how they interact with `runScripts`.
* Many updates per recent spec changes: (Zirro)
  * Updated `tokenList.replace()` edge-case behavior.
  * Invalid qualified names now throw `"InvalidCharacterError"` `DOMException`s, instead of `"NamespaceError"` `DOMException`s.
  * Changed `input.select()` to no longer throw on types where selection does not apply.
  * Updated `event.initEvent()` and various related methods to have additional defaults.
  * Stopped lowercasing headers in `XMLHttpRequest` responses.
  * Started lowercasing headers in `xhr.getAllResponseHeaders()`, and separating the header values with a comma-space (not just a comma).
  * Allow a redirect after a CORS preflight when using `XMLHttpRequest`.
  * Tweaked username/password CORS treatment when using `XMLHttpRequest`.
  * Changed `xhr.overrideMimeType()` to no longer throw for invalid input.
  * Removed `blob.close()` and `blob.isClosed()`.
* Removed some remaining not-per-spec `toString()` methods on various prototypes, which were made redundant in v10.1.0 but we forgot to remove.

## 10.1.0

* Added the value sanitization algorithm for password, search, tel, text, color, email, and url input types. (Zirro)
* Added `Symbol.toStringTag` to all web platform classes, so that now `Object.prototype.toString.call()` works as expected on jsdom objects.
* Added the `select.selectedOptions` property.
* Removed the `toString()` methods on various prototypes that returned `"[object ClassName]"` in an attempt to fake the `Symbol.toStringTag` behavior.
* Changed `XMLHttpRequest` to pre-allocate a 1 MiB buffer, which it grows exponentially as needed, in order to avoid frequent buffer allocation and concatenation. (skygon)
* Fixed a variety of properties that were meant to always return the same object, to actually do so. (Zirro)
* Fixed inheritance of the `runScripts` and `resources` options into iframes.
* Fixed an uncaught exception that occurred if you called `xhr.abort()` during a `"readystatechange"` event.

## 10.0.0

This release includes a complete overhaul of jsdom's API for creating and manipulating jsdoms. The new API is meant to be much more intuitive and have better defaults, with complete documentation in the newly-overhauled README. We hope you like it!

As discussed in the new README, the old API is still available and supported via `require("jsdom/lib/old-api.js")`, at least until we have ported all of its features over to the new API. It will, however, not be gaining any new features, and we suggest you try the new API unless you really need the customizable resource loading the old API provides.

Apart from the new API, the following changes were made, with breaking changes bolded:

* **Removed support for Node.js v4 and v5**, as we have started using new JavaScript features only supported in Node.js v6 onwards.
* **Changed the `omitJsdomErrors` option to `omitJSDOMErrors`**, for consistency [with web platform APIs](https://w3ctag.github.io/design-principles/#casing-rules).
* Added `document.dir`. (Zirro)
* Updated the `<a>` and `<area>` APIs to the latest specification, and fixed a few bugs with them. (makana)
* Fixed `<img>` elements to no longer fire `"load"` events unless their image data is actually loaded (which generally only occurs when the `canvas` package is installed).
* Fixed `XMLHttpRequest` preflights to forward approved preflight headers to the actual request. (mbroadst)
* Fixed `htmlElement.dir` to properly restrict its values to `"ltr"`, `"rtl"`, or `"auto"`. (Zirro)
* Fixed setting `innerHTML` to the empty string to no longer be a no-op. (Zirro)
* Fixed the origin-checking logic in `window.postMessage()`, so that now you don't always have to pass an origin of `"*"`. (jmlopez-rod)
* Improved the `xhr.open()` error message when there are not enough arguments. (lencioni)

## 9.12.0

* Added the `Option` named constructor. (NAlexPear)
* Added support for the `canvas-prebuilt` npm package as an alternative to `canvas`. (asturur)
* Fixed `setTimeout()` and `setInterval()` to always return a positive integer, instead of returning `0` the first time were called. (yefremov)
* Fixed `jsdom.env()` to preserve URL fragments across redirects. (josephfrazier)
* Fixed `optionEl.text` and `optionEl.value` to be more spec-compliant.
* Fixed `event.stopImmediatePropagation()` to actually stop immediate propagation, not just propagation.
* Fixed `clearTimeout()` and `clearInterval()` to work correctly when using jsdom browserified.

## 9.11.0

* Added dummy properties `offsetTop`, `offsetLeft`, `offsetWidth`, and `offsetHeight` that always return `0`, and `offsetParent` which always returns `null`, for all HTML elements. (yefremov)
* Fixed various edge cases in our type conversions applied to method arguments and setters throughout the web platform APIs implemented by jsdom.

## 9.10.0

* Added `forEach`, `keys`, `values`, and `entries` methods to `NodeList`.
* Added `event.cancelBubble`.
* Added dummy properties `scrollWidth`, `scrollHeight`, `clientTop`, `clientLeft`, `clientWidth`, and `clientHeight` that always return `0` to all elements. (alistairjcbrown)
* Updated many aspects of `Blob`, `File`, and `FileReader` to better match the File API specification. (TimothyGu)
* Fixed the progress and readystatechange events fired by `XMLHttpRequest` to match recent specification changes and test updates.
* Fixed `element.getClientRects()` to return an empty array, instead of an array containing a dummy bounding box. (alistairjcbrown)
* Changed `navigator.vendor` to return `"Apple Computer, Inc."` instead of `"Google Inc."`, since we have chosen the WebKit [navigator compatibility mode](https://html.spec.whatwg.org/multipage/webappapis.html#concept-navigator-compatibility-mode).

## 9.9.1

* Removed the use of `array.includes` to fix a compatibility issue with Node.js v4.

## 9.9.0

* Added `CDATASection` nodes, including `document.createCDATASection`. (snuggs)
* Added `node.wholeText`. (jdanyow)
* Added a setter for `document.body`.
* Added `document.embeds`, `document.plugsin`, and `document.scripts`. These were supposed to be added in 9.5.0 but were mistakenly omitted.
* Fixed `element.insertAdjacentHTML` to work when the element has null or the document as its parent node, as long as the insertion position is `"afterbegin"` or `"beforeend"`.
* Fixed form submission to only hit the "not implemented" virtual console message when form submission is _not_ canceled, instead of when it is.
* Fixed an issue where the event listener was not being correctly removed when using the `{ once: true }` option to `addEventListener`. (i8-pi)
* Fixed an error that was thrown when using `XHTMLHttpRequest` and POSTing JSON contents to an endpoint that requires CORS while using an `Authorization` header. (dunnock)
* Fixed `document.body` and `document.title` to act more correctly in various edge cases.
* Fixed `HTMLCollection` named access to return the first element encountered, not the last.

## 9.8.3

* Fixed syntax errors in Node.js v4.

## 9.8.2

* Fixed `DOMTokenList` and `getElementsByClassName` to only split on ASCII whitespace, not all Unicode whitespace.

## 9.8.1

* Fixed an error that occurred when passing no class names to `getElementsByClassName`, e.g. `getElementsByClassName("")` or `getElementsByClassName(" ")`.

## 9.8.0

* Added the `blob.isClosed` property. (TimothyGu)
* Fixed the `file.lastModified` property to be on `File` instead of on `Blob`. (TimothyGu)
* Fixed the `file.lastModified` property to default to the time of the `File` object's creation, not the time that the property is accessed. (TimothyGu)
* Fixed a minor edge-case regression where non-HTML elements with the name `"iframe"` became focusable in 9.7.0.

## 9.7.1

* Fixed a performance regression introduced in 9.5.0 for modifying the DOM. It was particularly noticable during initial parsing of a document with many elements; for example, one test showed parsing ten thousand elements taking 36.4 seconds, whereas after this fix it is back to a more reasonable 0.4 seconds.

## 9.7.0

* Added `EventListenerOptions` support to `addEventListener` and `removeEventListener`, including both the `once` and `capture` options. (GianlucaGuarini)
* Added `document.hasFocus()` (acusti)
* Fixed the focus management to ensure that focusing something inside an `iframe` will also focus the `iframe` itself. (acusti)

## 9.6.0

* Added `HTMLCollection.prototype[Symbol.iterator]`, so you can use `for`-`of` loops over `HTMLCollection`s now. (i8-pi)
* Fixed `file.lastModified` to return the current time as the default, instead of `0`.
* Fixed cloning of `Attr`s to properly clone the namespace prefix.
* Tweaked `XMLHttpRequest` progress event ordering slightly to better match the spec and browsers.
* Tweaked the behavior of calling `event.stopPropagation` and `event.stopImmediatePropagation` on already-dispatched events, per [the latest changes to the DOM Standard](https://github.com/whatwg/dom/commit/806d4aab584f6fc38c21f8e088b51b8ba3e27e20).

## 9.5.0

* Added `document.scripts`, `document.embeds`, and `document.plugins`.
* Fixed `document.getElementsByTagName` and `document.getElementsByTagNameNS` to return `HTMLCollection`s instead of `NodeList`s, and to follow the spec algorithms more exactly.
* Fixed various `HTMLCollection`-returning getters such as `document.applets` or `table.cells` to be more spec-compliant.
* Fixed the resource loader to respect the `agent` and `agentClass` options, not just the `agentOptions` one.
* Fixed `console.groupCollapse` to be `console.groupCollapsed` (and changed the virtual console accordingly).

## 9.4.5

* Fixed `"error"` events from failed resource loads going missing since 9.4.3. I really should have tested that release better.

## 9.4.4

* Fixed a leftover `console.log` introduced in the error handling path in 9.4.3.

## 9.4.3

* Fixed spurious `"jsdomError"`s occuring when closing a window, due to aborted resource loads.

## 9.4.2

* Fixed what would happen when inline event handlers (such as `element.onclick`) would return non-boolean values (such as `undefined`); it would previously erroneously cancel the event, in many cases. (dmethvin)
* Upgraded the minimum tough-cookie version to ensure all installations are protected against [a security advisory](https://nodesecurity.io/advisories/130).

## 9.4.1

* Implemented the cloning steps for `<input>` elements, so that cloned inputs properly copy over their value, checkedness, dirty value flag, and dirty checkedness flag. (matthewp)

## 9.4.0

* Added the `DOMParser` API. It is spec-compliant, including producing `<parsererror>` elements, except that the produced documents do not have the same URL as the creating document (they instead always have `"about:blank"`).
* Added strict XML parsing when using `parsingMode: "xml"`. Creating documents will now fail, just like in a browser, when ill-formed XHTML markup is used.
* Added some rudimentary application of XML `<!ENTITY` declarations.
* Added `window.frameElement`, although without appropriate cross-origin security checks.
* Added the `jsdom.evalVMScript` public API.
* Added more custom request agent support: you can now pass `agent` and `agentClass` in addition to `agentOptions`. (frarees)
* Updated our elements-being-disabled semantics to more closely match the spec, in particular with regard to being descendants of `<fieldset disabled>`.
* Updated `FormData` for [recent spec fixes](https://github.com/whatwg/xhr/commit/1a75845e67792418a7721d516266ad01a90f2062): blobs, files, and filenames should now all work like you'd expect.
* Updated the `FormData` constructor to use the proper, rather-complex, [constructing the form data set](https://html.spec.whatwg.org/multipage/forms.html#constructing-form-data-set) algorithm.
* Fixed all constructors that appears as globals on the jsdom `window` object to be non-enumerable.
* Fixed `<script>` elements to load when they gain a `src` attribute while in a document.
* Fixed `<link rel="stylesheet">` elements to load when their `href` attributes change while in a document.
* Fixed the loading of external `<img>`s (when the `canvas` npm package is installed) that were specified via relative URL; this regressed in 9.2.1.
* Fixed `<iframe>` documents to have the correct `referrer` value (viz. the URL of their parent).
* Fixed the value of `input.checked` inside `click` events on checkboxes.
* Fixed the window object's named properties to correctly return the `<iframe>` element or the `<iframe>`'s window in appropriate scenarios involving `name` vs. `id` attributes on the `<iframe>`. (matthewp)

## 9.3.0

* Added the `Audio` named constructor.
* Fixed the `Image` named constructor to follow the spec more closely (e.g. `Image.prototype` is now equal to `HTMLImageElement.prototype`).
* Fixed the `tabIndex` setter, which regressed in 9.1.0, to no longer cause errors.
* Made submit buttons and labels respond to click event cancelation correctly, preventing form submission and re-dispatching to the relevant form control. (marcandre)
* Fixed unhandled errors thrown in XHR event handlers being swallowed; they now properly are redirected to the virtual console.

## 9.2.1

* Fixed `<input>`'s `selectionStart`, `selectionEnd`, and `selectionDirection` getters to return null, instead of throwing, for elements that do not allow selection, per [a recent spec change](https://github.com/whatwg/html/pull/1006).
* Fixed `<base>`'s `href` getter logic to return the attribute value instead of the empty string for unparseable URLs, per [a recent spec change](https://github.com/whatwg/html/pull/1064).
* Fixed the referrer sent when retrieving external resources to be the document's URL, not the document's base URL.
* Fixed suppression of all `error` events on `window` beyond the first one.
* Fixed `new URL` to correctly throw for unparseable URLs, and all of `URL`'s setters to correctly ignore invalid input instead of throwing.
* Fixed `StyleSheetList.prototype.item` to return `null` instead of `undefined` for out-of-bounds indices. (Ginden)
* Updated `cssstyle` minimum version to ensure all jsdom installs (not just fresh ones) get the benefit of `cssstyle`'s recently-better `background` and `width` setters.

## 9.2.0

* Added `jsdom.changeURL(window, newURL)` for allowing you to override a window's existing URL. (mummybot)
* Fixed the `proxy` option to be applied to all requests; previously it was not always passed through. (nicolashenry)
* Fixed `XMLHttpRequest` response header filtering for cross-origin requests; this also fixes `ProgressEvent`s fired from such XHRs. (nicolashenry)

## 9.1.0

* Added a somewhat-reasonable implementation of focus and focus events. Although the full complexity of focus is not implemented, the following improvements have been made:
  - Only elements which are focusable can be focused.
  - Added the `FocusEvent` class, and now `focus` and `blur` events are fired appropriately.
  - `tabIndex` now returns `0` by default for focusable elements.
* Reimplemented `navigator` to be to-spec:
  - Added `appCodeName`, `product`, `productSub`, `vendor`, and `vendorSub`; also changes `userAgent`, `appName`, `platform`, and `version` to be more browser-like instead of based on various Node.js information.
  - Added `language` and `languages`.
  - Added `onLine`.
  - Added `javaEnabled()`.
  - Removed `noUI`.
* Fixed `formEl.action` to return a value resolved relative to the document URL, or to return the document URL if the corresponding attribute is missing or empty.
* Sped up XPath execution. (vsemozhetbyt)
* Fixed `window.close()` not correctly clearing event listeners on the document. (Ojek)
* Fixed a regression introduced in 9.0.0 where invalid CSS would cause a crash while attempting to parse it. Instead, a `"jsdomError"` will now be emitted to the virtual console.

## 9.0.0

This major release removes jsdom's support for mutation events. Mutation events were never well-specified, and the modern DOM Standard omits them in the hopes that they can be removed from browsers (although this has not yet happened in major browser engines). We had hoped to implement their modern alternative, mutation observers, before performing this removal, to give jsdom users the same capabilities.

However, recent performance investigations revealed that mutation events were the major bottleneck in most jsdom operations; tools like [ecmarkup](https://github.com/bterlson/ecmarkup) which make heavy use of jsdom had their running time halved by removing mutation events, which add serious overhead to every DOM mutation. As such, we are doing a major release with them removed, so that jsdom users can benefit from this massive performance gain.

Mutation observer support is [in progress](https://github.com/tmpvar/jsdom/issues/639); please use the GitHub reactions feature to vote on that issue if you are impacted by this removal and are hoping for mutation observer support to replace it.

Your normal change log follows:

* **Removed mutation events**, as discussed above.
* Added the `DOMTokenList.prototype.replace` method. (nicolashenry)
* Updated `DOMTokenList.prototype.contains` to no longer validate its arguments, as per the latest spec. (nicolashenry)
* Made various improvements to XMLHttpRequest (nicolashenry):
  - Added the `responseURL` property.
  - Updated methods, headers, and header values to use the `ByteString` algorithm.
  - Fixed the default `statusText` to be `""` instead of `"OK"`.
* Fixed the `Blob` constructor's `type` validation. (nicolashenry)

## 8.5.0

* Added encoding handling (nicolashenry)
  - `jsdom.env`, when given a URL or file, will decode the resulting bytes using signals like the `Content-Type` header, `<meta charset>` declaration, or presence of a BOM, in the same manner as web browsers.
  - Fetching external resources, via mechanisms such as XMLHttpRequest or `<script>`/`<link>`/`<iframe>` tags, will also account for such signals.
  - `jsdom.jsdom()`, which takes a string, still sets a "UTF-8" encoding by default, since there are no bytes or headers for it to sniff an encoding from.
* Removed `iframe.sandbox` property, since it was not implemented and simply crashed when used.
* Removed `element.sourceIndex` property, since it was nonstandard (Internet Explorer only).
* Fixed setting proxied inline event handlers, such as `doc.body`'s `onload=""` attribute, for documents that do not have a browsing context.

## 8.4.1

* Fixed an issue where setting `selected` on an multi-select would clear all other selectedness.

## 8.4.0

* Added an implementation of the `TreeWalker` class (and `document.createTreeWalker`). (garycourt)
* Fixed a few minor bugs in URL parsing and the `URL` API, by upgrading to `whatwg-url` 2.0.1.
* Fixed a few issues with generated files in the published package, which seem to have impacted webpack users.

## 8.3.1

* Fixed an issue where if you modified `Object.prototype`, spurious attributes would show up on your jsdom nodes. (deckar01)

## 8.3.0

* Added image loading and decoding, when the `canvas` npm package is installed (lehni). In practice, this means that if you enable fetching `"img"` external resources, then:
  * `img.naturalWidth`, `img.naturalHeight`, `img.width`, `img.height`, `img.complete`, and `img.currentSrc` will update themselves correctly as the image loads
  * `load` and `error` events will fire on the `<img>` element, according to how well image decoding goes.
  * You can draw images onto canvases, using the newly-enabled `canvasContext.drawImage` API.
* Added `canvasContext.createPattern` and `canvasContext.toBlob`, when the `canvas` npm package is installed. (lehni)
* Added a basic implementation of the [Page Visibility API](https://w3c.github.io/page-visibility/), in particular a `document.hidden` property that always returns `true`, and a `document.visibilityState` property that always returns `"prerender"`. This is a more standard alternative to our proprietary `navigator.noUI`, which will be removed whenever we release 9.0.0. (kapouer)

## 8.2.0

* Added correct click behavior for inputs (jeffcarp):
  - `change` and `input` events now fire appropriately
  - The "click in progress" flag is implemented, so you cannot click while a click is in progress
  - Canceling a click event appropriately resets radio buttons and checkboxes
* Updated our XMLHttpRequest implementation with a variety of fixes and features, including preliminary CORS support. (nicolashenry)
* Added a `strictSSL` top-level option to govern all requests jsdom makes. (nicolashenry)
* XHTML frames and iframes are now parsed as XML instead of HTML. (nicolashenry)
* Added `document.origin` and `document.lastModified`. (nicolashenry)
* Fixed the `scriptEl.text` getter and setter to follow the spec.
* Fixed script execution to check against the canonical list of JavaScript MIME types and only execute those scripts as JavaScript.

## 8.1.1

* Fixed input selection methods and properties to properly differentiate between inputs that can be selected outright vs. textual inputs which allow variable-length selection. (yaycmyk)

## 8.1.0

* Added `attr.nodeName`, which was [recently re-added to the spec](https://github.com/whatwg/dom/issues/171).
* Added click-proxying behavior from `<label>`s to their labeled form elements. (yaycmyk)
* Added a setter for `element.classList` per recent spec changes (it forwards to `element.classList.value`).
* Updated our attributes implementation in a few ways for recent spec changes and to fix discovered bugs:
  - Added `element.getAttributeNames()`. ([spec addition](https://github.com/whatwg/dom/issues/115))
  - `setAttributeNode` and `setAttributeNodeNS` can now replace an attribute node, instead of removing the old one and adding a new one; this avoids changing the order in the attribute list. ([spec change](https://github.com/whatwg/dom/issues/116))
  - `NamedNodeMap` named properties are now lowercase (except in edge cases involving XML documents or non-HTML elements). ([spec change](https://github.com/whatwg/dom/issues/141))
  - `NamedNodeMap` named properties are now non-enumerable.
  - The `"DOMAttrModified"` mutation event's `relatedNode` is now the new `Attr` object, not the `Node`, as per spec.
* Updated `DOMTokenList` to have a `value` property per [recent spec changes](https://github.com/whatwg/dom/issues/119); its `toString` serialization also changed slightly.
* Updated `tc.headers` to be a `DOMTokenList` that simply reflects the `headers` attribute; previously it was a string, with its computation doing some weird stuff.
* Fixed `document.implementation.createDocument()` to create a document with its parsing mode set to XML, which affects a variety of DOM APIs in small ways.
* Fixed `EventTarget.prototype.constructor` to be correct; it was previously `Window`.
* Fixed `option.index` for `<option>`s not inside a `<select>` to no longer error.
* Fixed `tc.cellIndex` for `<td>`s and `<th>`s not inside a `<tr>` to no longer error.
* Fixed `tr.sectionRowIndex` for `<tr>`s not inside a `<table>`, `<tbody>`, `<thead>`, or `<tfoot>` to no longer error.
* Removed the `"keyevents"` alias for `"keyboardevent"` when using `document.createEvent`, [per recent spec changes](https://github.com/whatwg/dom/issues/148).

## 8.0.4

* Fixed the `this` value when you pass a `{ handleEvent() { ... } }` object to `addEventListener`. (thetalecrafter)

## 8.0.3

* Fixed `HTMLOptionElement.prototype.label`; a typo was causing it to not work at all. (karlhorky)
* Updated `cssstyle` minimum version to ensure all jsdom installs (not just fresh ones) get the benefit of `cssstyle`'s recently-better `padding` and `margin` parsing/CSSOM.

## 8.0.2

* Fixed an issue where custom user agents would not propagate to `navigator.userAgent` in frames and iframes.
* Improved our `document.activeElement` implementation to be a bit smarter; we still don't have full focus/blur/active element semantics, but at least now it falls back to the `<body>` element when the active element is removed from the document or when no element has been focused yet.

## 8.0.1

* Fixed an issue where the `this` inside event handler callbacks was not equal to the event's current target. (Surprisingly there were no tests for this!)

## 8.0.0

This major release includes a large rewrite of most of the DOM and HTML classes exposed in jsdom. A lot of their behavior is generated from their specs' IDL syntax, taking care of many type conversions, attribute/property reflections, and much more. Many properties that were previously not present are now available, and almost everything behaves in a more spec-compliant way. Additionally, for these classes all of their implementation details are no longer available as underscore-prefixed properties, but instead are hidden behind a single symbol.

Although normally jsdom does not mark a new major release for changes that simply update us to the latest specs or hide internal implementation details better, the magnitude of the changes is so extensive that we want to bump the major version in order to ensure that consumers perform adequate testing before upgrading. But, you should definitely upgrade! The new stuff is really awesome!

* Reimplemented `Location`, `History`, and `HTMLHyperlinkElementUtils` (used by both `HTMLAnchorElement` and `HTMLAreaElement`) according to the latest specs, and using the latest [whatwg-url](https://github.com/jsdom/whatwg-url) package. This greatly improves our correctness on URL resolution and navigation (to the extent we support navigation, i.e. `pushState` and changing the hash). It should also improve parsing speed as we no longer parse and resolve URLs during parsing.
* Added `Element.prototype.insertAdjacentHTML`. (kasperisager)
* Added `Node.prototype.adoptNode`, and adopt nodes during insertion instead of throwing `"WrongDocumentError"`s. (dmethvin)
* Added a stub `Element.prototype.getClientRects` to match our stub `getBoundingClientRect`.
* Fixed `setTimeout` and `setInterval` to return numeric IDs, instead of objects. (alvarorahul)
* Fixed `setTimeout` and `setInterval` to accept string arguments to eval, and to pass along extra arguments after the first two.
* Fixed certain style shorthand properties not updating their component properties or parsing correctly. (dpvc)
* Fixed `Event` object creation to always initialize the event objects, unless using `document.createEvent`, even for events with name `""`.
* Fixed iframes to go through the custom resource loader. (chrmarti)
* Removed ["DOM Load and Save"](http://www.w3.org/TR/2003/CR-DOM-Level-3-LS-20031107/load-save.html) stub implementation. That spec was never implemented in browsers, and jsdom only contained stubs.
* Removed other minor unimplemented, stub, or no-longer-standard APIs from "DOM Level 3", like the user-data API, `DOMError`, `DOMConfiguration`, and `DOMStringList`.

## 7.2.2

* Fixed `canvasEl.toDataURL()`, with the `canvas` npm package installed; a recent update to the `canvas` package broke how we were passing arguments to do.
* Fixed `data:` URL parsing to allow empty contents, e.g. `data:text/css;base64,`. (sebmck)

## 7.2.1

* Fixed a regression in XML parsing of attributes with a namespace URL but no prefix (e.g. `<math xmlns="http://www.w3.org/1998/Math/MathML">`).

## 7.2.0

* Added support for text selection APIs on `<input>` and `<textarea>`! (sjelin and yaycmyk)
* Replaced our default XML parser with [sax](https://www.npmjs.com/package/sax), thus fixing many (but not all) issues with XML and XHTML parsing. To get a flavor of the issues fixed, check out these now-closed bugs: [#393](https://github.com/tmpvar/jsdom/issues/393), [#651](https://github.com/tmpvar/jsdom/issues/651), [#415](https://github.com/tmpvar/jsdom/issues/415), [#1276](https://github.com/tmpvar/jsdom/issues/1276).
* Fixed the `<canvas>` tag to reset its contents when its width or height changed, including the change from the default 300 × 150 canvas. (Applies only when using the `canvas` npm package.)
* Fixed an issue where `HTMLCollection`s would get confused when they contained elements with numeric `id`s or `name`s.
* Fixed an issue with doctype parsing confusing the system ID and public ID.
* Made the task posted by `postMessage` use the inside-jsdom timer queue, instead of the Node.js one. This allows easier mocking. (cpojer)

## 7.1.1

* When `<iframe>`s have unresolvable URLs, jsdom will no longer crash, but will instead just load `about:blank` into them. (This is the spec behavior.)
* Fixed `document.writeln` to correctly handle multiple arguments; previously it ignored all after the first.
* Fixed `FileList` objects to no longer have a property named `"undefined"`. (jfremy)

## 7.1.0

This is a rather large release bringing with it several important re-implementations of DOM and HTML APIs.

* Our `EventTarget` implementation has been rewritten from scratch to follow the spec exactly. This should improve any edge case misbehaviors.
* Our `Event` class hierarchy has been rewritten and fleshed out, fixing many gaps in functionality.
  - Previously missing classes `KeyboardEvent` and `TouchEvent` are now implemented.
  - Almost all supported `Event` subclasses now have constructors. (`TouchEvent` does not yet, and `MutationEvent` is specified to not have one.)
  - All classes now have correct public APIs, e.g. getters instead of data properties, missing properties added, and constructors that correctly allow setting all the supported properties.
  - `document.createEvent("customevent", ...)` now correctly creates a `CustomEvent` instead of an `Event`, and `CustomEvent.prototype.initProgressEvent` has been replaced with `CustomEvent.prototype.initCustomEvent`.
* The `Attr` class and related attribute-manipulating methods has been rewritten to follow the latest specification. In particular, `Attr` is no longer a subclass of `Node`, and no longer has child text nodes.
* The `<template>` element implementation has been greatly improved, now passing most web platform tests. Its `.content` property no longer has an extra intermediate document fragment; it no longer has child nodes; and related parts of the parser and serializer have been fixed, including `innerHTML` and `outerHTML`, to now work as specified.
* `querySelector`, `querySelectorAll`, and `matches` now correctly throw `"SyntaxError"` `DOMException`s for invalid selectors, instead of just `Error` instances.
* `Node.prototype`'s `insertBefore`, `replaceChild`, and `appendChild` methods now check their arguments more correctly.
* The browser builds now have regained the ability to fetch URLs for content and the like; this had been broken due to an issue with the browser-request package, which is no longer necessary anyway.

## 7.0.2

* Fixed an issue where inside jsdom `<script>` code, `/regexpliteral/ instanceof RegExp` would be `false`.

## 7.0.1

* Fixed two bugs with `Node.prototype.isEqualNode`:
  - It would previously always return `true` for comparing any two doctypes.
  - It would throw an error when trying to compare two elements that had attributes.
* Enforced that `document.implementation.createDocumentType` requires all three of its arguments.

## 7.0.0

This major release has as its headlining feature a completely re-written `XMLHttpRequest` implementation, in a heroic effort by [@nicolashenry](https://github.com/nicolashenry). It includes a number of other smaller improvements and fixes. The breaking changes are highlighted in bold below.

* **Node.js 4.0 onward is now required**, as we have begun using ES2015 features only present there.
* Completely re-implemented `XMLHttpRequest` and related classes (nicolashenry):
  - Includes support for `Blob`, `File`, `FileList`, `FileReader`, `FormData`, `ProgressEvent`, and the supporting `XMLHttpRequestUpload`, and `XMLHttpRequestEventTarget` interfaces.
  - Includes support for synchronous XHRs.
  - Adds some new request-management abilities, documented in the readme. In short, the `pool`, `agentOptions`, and `userAgent` options are new, and resource loads can now be aborted.
  - These implementations are extremely complete and standards-compliant, passing 136 newly-introduced web platform tests.
* Added `document.charset`, an alias for `document.characterSet`.
* Added `HTMLTemplateElement.prototype.content`, for getting the contents of a `<template>` element as a document fragment. (rickychien)
* Implemented "loose" cookie parsing, giving correct execution of code like `document.cookie = "foo"`.
* Several fixes related to event dispatching and creation, including the addition of `Event.prototype.stopImmediatePropagation` and the constants `NONE`, `CAPTURING_PHASE`, `AT_TARGET`, and `BUBBLING_PHASE`. This accounted for another 15 newly-passing web platform tests. (nicolashenry)
* Fixed `document.styleSheets` to correctly track the removal of stylesheets from the document. (AVGP)
* Fixed the `created` jsdom lifecycle callback receiving a different `window` object than the `loaded` or `done` callbacks when scripting was enabled.
* **Invalid URLs are no longer allowed when creating a jsdom document**; the URL must be parseable, or an error will be thrown.
* **The `{ omitJsdomErrors }` option of the virtual console has moved**; it is no longer provided when creating the virtual console, but instead when calling `sendTo`.

## 6.5.1

* Fixed an issue where with `jsdom.jsdom`, you had to pass `referrer` and `cookie` options as top-level, whereas with `jsdom.env`, you had to nest them under a `document` option. This was unnecessarily confusing. Now both possibilities are allowed for both functions. (The readme only documents the top-level version, though.)

## 6.5.0

* Added `NodeList.prototype[Symbol.iterator]`, so you can now use `for`-`of` loops with `NodeList`s.

## 6.4.0

* Added `jsdom.nodeLocation(node)` to get the location within the source text of a given node.
* Added `jsdom.reconfigureWindow(window, { top })` to allow changing the value of a window's `top` property.
* Added the `element` argument to the custom resource loader, so you can customize resource loads depending on which element loaded them.
* Updated `getElementsByClassName` to match the spec. It now correctly splits on whitespace to try to find elements with all the given classes; it returns a `HTMLCollection` instead of a `NodeList`; and it memoizes the result.
* Updated `NodeList` and `HTMLCollection` to match the spec. The most noticable change is that `HTMLCollection` no longer inherits from `NodeList`.

## 6.3.0

* Added a fully spec-compliant implementation of `window.atob` and `window.btoa`. (jeffcarp)
* Fixed many issues with our `<canvas>` implementation:
  - With the `canvas` npm package installed, `<canvas>` elements are now properly `instanceof HTMLCanvasElement` and `instanceof HTMLElement`.
  - `<canvas>` elements now present the same uniform spec-compliant API both with and without the `canvas` npm package installed. If the package is not installed, some of the methods will cause not-implemented `"jsdomError"` events to be emitted on the virtual console.
  - The `width` and `height` properties now correctly reflect the `width` and `height` attributes, and have the appropriate default values of `300` and `150`.
  - With the `canvas` npm package installed, `<canvas>` elements now generally play better with other parts of jsdom, e.g., `document.getElementById` actually works with them.
* Introduced and upated many of our element classes, so that at least every tag name/element class pair is now correct, even if some of the classes are stubs. In particular:
  - Complete implementations were added for `HTMLDataElement`, `HTMLSpanElement`, and `HTMLTimeElement`.
  - Stubs were added for `HTMLDataListElement`, `HTMLDialogElement`, `HTMLEmbedElement`, `HTMLMeterElement`, `HTMLOutputElement`, `HTMLProgressElement`, `HTMLSourceElement`, `HTMLTemplateElement`, and `HTMLTrackElement`.
  - `HTMLAudioElement` was implemented in full, although its `HTMLMediaElement` base, where most of its functionality is, is still largely a stub.
  - `HTMLTableSectionElement`, `HTMLTableRowElement`, `HTMLTableCellElement`, `HTMLTableDataCellElement`, and `HTMLTableHeaderCellElement` were updated to the latest spec.
  - `HTMLIsIndexElement` was removed; it has never been produced by the parser since 1.0.0-pre.1, and so it has been just a vestigial global property.
  - Appropriate constants were added to `HTMLMediaElement`.
* Updated everything having to do with base URLs to be per-spec:
  - Added `Node.prototype.baseURI` property to get the node's owner document's base URL.
  - `HTMLBaseElement`'s `href` getter now contains appropriate fallbacks and always returns an absolute URL, per spec.
  - If there are no `base` elements in an `"about:blank"` iframe document, the base URL correctly falls back to the parent window's base URL.
* When you provide a `url: ...` option to `jsdom.jsom()` or `jsdom.env()`, the given string is now attempted to be resolved as a URL before it is installed as `document.URL`.
  - So for example, providing `url: "http://example.com"` will mean `document.URL` returns `"http://example.com/"`, with a trailing slash.
  - In a future major release, we will start throwing if strings that cannot be parsed as valid absolute URL are provided for this option.

## 6.2.0

* Added a full-featured, spec-compliant `Element.prototype.classList`, closing out a three-year old issue! (wacii)
* Made `virtualConsole.sendTo(console)` forward `"jsdomError"`s to `console` by calling `console.error`. This can be turned off by doing `virtualConsole.sendTo(console, { omitJsdomErrors: true })`.
* Fixed errors when trying to parse invalid doctype declarations, like `<!DOCTYPE>`.
* Fixed spurious `"jsdomError"`s that were emitted after calling `window.close()`.
* Fixed the `"DOMSubtreeModified"` event to fire in more cases. Note that our mutation events implementation remains incomplete, and will eventually be removed (in a major release) once we implement mutation observers. (selam)

## 6.1.0

* Added basic implementations of `HTMLMediaElement` and `HTMLVideoElement`, back-ported from Facebook's Jest project. (cpojer)

## 6.0.1

* Fixed `XMLHttpRequest.prototype.getAllResponseHeaders` to not crash when used with `file:` URLs. (justinmchase)
* Fixed `XMLHttpRequest.prototype.response` to correctly return the response text even when `responseType` was unset. (justinmchase)

## 6.0.0

This major release is focused on massive improvements in speed, URL parsing, and error handling. The potential breaking changes are highlighted in bold below; the largest ones are around the `jsdom.env` error-handling paradigm.

This release also welcomes [long-time contributer](https://github.com/tmpvar/jsdom/commits/master?author=Joris-van-der-Wel) [@Joris-van-der-Wel](https://github.com/Joris-van-der-Wel/) to the core team. You may recognize him from earlier changelogs. We're very happy to have his help in making jsdom awesome!

* **io.js 2.0 onward is now required**, as we have begun using ES2015 features only present there.
* Improved performance dramatically, by ~10000x in some cases, due to the following changes:
  - Overhauled the named properties tracker to not walk the entire tree, thus greatly speeding up the setting of `id` and `name` attributes (including during parsing).
  - Overhauled everything dealing with tree traversal to use a new library, [symbol-tree](https://github.com/jsdom/js-symbol-tree), to turn many operations that were previously O(n^2) or O(n) into O(n) or O(1).
  - Sped up `node.compareDocumentPosition` and anything that used it (like `node.contains`) by doing more intelligent tree traversal instead of directly implementing the specced algorithm.
* Overhauled how error handling works in jsdom:
  - `window.onerror` (or `window.addEventListener("error", ...)`) now work, and will catch all script errors, similar to in browsers. This also introduces the `ErrorEvent` class, incidentally.
  - The virtual console is now the destination for several types of errors from jsdom, using [the new event `"jsdomError"`](https://github.com/tmpvar/jsdom#virtual-console-jsdomerror-error-reporting). This includes: errors loading external resources; script execution errors unhandled by `window.onerror`; and not-implemented warnings resulting from calling methods like `window.alert` which jsdom explicitly does not support.
  - Since script errors are now handled by `window.onerror` and the virtual console, they are no longer included in the initialization process. This results in two changes to `jsdom.env` and the initialization lifecycle:
    + **The `load(errors, window)` callback was changed to `onload(window)`**, to reflect that it is now just sugar for setting a `window.onload` handler.
    + **The `done(errors, window)` callback (i.e., the default callback for `jsdom.env`) has become `done(error, window)`**, and like every other io.js callback now simply gives you a single error object, instead of an array of them.
  - Nodes no longer have a nonstandard `errors` array, or a `raise` method used to put things in that array.
* URL parsing and resolution was entirely overhauled to follow [the URL standard](http://url.spec.whatwg.org/)!
  - This fixes several long-standing bugs and hacks in the jsdom URL parser, which already had a mess of gross patches on top of the built-in io.js parser to be more web-compatible.
  - The new [`URL` class](https://url.spec.whatwg.org/#url) has been added to `window`
  - The interfaces for `HTMLAnchorElement.prototype` and `document.location` (as well as `URL`, of course) are now uniformized to follow the [`URLUtils` API](https://url.spec.whatwg.org/#api) (minus `searchParams` for now).
  - **As part of this change, you may need to start passing in `file:` URLs to `jsdom.env` where previously you were able to get away with passing in filenames.**
* Added the `XMLHttpRequest.prototype.response` getter.
* Fixed `StyleSheetList.prototype.item` to actually work. (chad3814)
* Fixed the browser `vm` shim to properly add the built-in global properties (`Object`, `Array`, etc.) to the sandbox. If you were running jsdom inside a web worker and most of your scripts were broken, this should fix that.
* Fixed the `"hashchange"` event to correctly fire `HashChangeEvent` instances, with correct properties `newURL` and `oldURL` (instead of the incorrect `newUrl` and `oldUrl` used previously).
* Removed usage of the setimmediate library, as it required `eval` and thus did not work in CSP scenarios.

Finally, if you're a loyal jsdom fan whose made it this far into the changelog, I'd urge you to come join us in [#1139](https://github.com/tmpvar/jsdom/issues/1139), where we are brainstorming a modernized jsdom API that could get rid of many of the warts in the current one.

## 5.6.1

* Fixed an accidentally-created global `attribute` variable if you ever called `createAttributeNS`.
* Dependency upgrades fixed a couple of bugs, although you would have gotten these anyway with a clean jsdom 5.6.0 install:
  - Parsing of CSS properties that use `url("quoted string")` now works correctly, as of `cssstyle` 0.2.29.
  - Selectors for the empty string, like `div[title=""]`, now work correctly, as of `nwmatcher` 1.3.6.

## 5.6.0

* `virtualConsole.sendTo` now returns `this`, allowing for [a nice shorthand](https://github.com/tmpvar/jsdom/tree/60ccb9b318d0bae8fe37e19af5af444b9c98ddac#forward-a-windows-console-output-to-the-iojs-console). (jeffcarp)

## 5.5.0

* Added `postMessage` support, for communicating between parent windows, iframes, and combinations thereof. It's missing a few semantics, especially around origins, as well as MessageEvent source. Objects are not yet structured cloned, but instead passed by reference. But it's working, and awesome! (jeffcarp)
* Rewrote cloning code (underlying `cloneNode` and `importNode`), fixing a number of issues:
  - Elements with weird tag names, of the type that only the parser can normally create, can now be cloned ([#1142](https://github.com/tmpvar/jsdom/issues/1142))
  - Doctypes can now be cloned, per the latest spec.
  - Attrs cannot be cloned, per the latest spec (although they still have a `cloneNode` method for now due to legacy).
  - Document clones now correctly copy over the URL and content-type.
* Fixed any virtual console output from iframes to be proxied to the parent window's virtual console. (jeffcarp)
* Fixed the `type` property of `<button>` elements to correctly default to `submit`, and to stay within the allowed range.
* Fixed clicking on submit `<button>`s to submit their containing form; previously only `<input type="submit">` worked. (rxgx)
* Fixed `document.open()` to return `this`, per spec. (ryanseddon)

Additionally, Joris-van-der-Wel added [a benchmarking framework](https://github.com/tmpvar/jsdom/blob/master/Contributing.md#running-the-benchmarks), and a number of benchmarks, which should help us avoid performance regressions going forward, and also make targeted performance fixes. We're already investigating [some real-world issues](https://github.com/tmpvar/jsdom/issues/1156) using this framework. Very exciting!

## 5.4.3

* Incorporated upstream fix for setting `el.style.cssText` to an invalid value, which should be ignored instead of causing an error to be thrown. This same bug has also caused an error while setting the style attribute to an invalid value, ever since 5.4.0. (Joris-van-der-Wel; chad3814 upstream)

## 5.4.2

* Fixed license metadata to conform to latest npm standards.

## 5.4.1

* Fixed to work with browserify again (regression introduced in 5.4.0).

## 5.4.0

This is a pretty exciting release! It includes a couple features I never really anticipated jsdom being awesome enough to have, but our wonderful contributors powered through and made them happen anyway:

* Added support for the default HTML stylesheet when using `window.getComputedStyle`! (akhaku)
  - Notably, this makes jQuery's `show()` and `hide()` methods now work correctly; see [#994](https://github.com/tmpvar/jsdom/issues/994).
* Added support for named properties on `window`: any elements with an `id` attribute, or certain elements with a `name` attribute, will cause properties to show up on the `window`, and thus as global variables within the jsdom. (Joris-van-der-Wel)
  - Although this is fairly unfortunate browser behavior, it's standardized and supported everywhere, so the fact that jsdom now supports this too means we can run a lot of scripts that would previously fail.
  - Previously, we only supported this for `<iframe>`s, and our implementation was quite buggy: e.g., `<iframe name="addEventListener">` would override `window.addEventListener`.
  - Now that we have the infrastructure in place, we anticipate expanding our support so that this works on e.g. `HTMLFormElement`s as well in the future.

We also have a bunch more fixes and additions:

* Implemented the [`NonDocumentTypeChildNode`](https://dom.spec.whatwg.org/#nondocumenttypechildnode) mixin. Practically, this means adding `nextElementSibling` and `previousElementSibling` to `Element` and the various types of `CharacterData`. (brandon-bethke-neudesic)
* Updated `StyleSheetList` to inherit from `Array`, as per the latest CSSOM spec.
* Overhauled the handling of attributes throughout the DOM, to follow the spec more exactly.
  - Our `NamedNodeMap` implementation is up to date, as are the various `Element` methods; other places in the code that deal with attributes now all go through a spec-compliant set of helpers.
  - Some weirdnesses around the `style` attribute were fixed along the way; see e.g. [#1109](https://github.com/tmpvar/jsdom/issues/1109).
  - However, `Attr` objects themselves are not yet spec-compliant (e.g., they still inherit from `Node`). That's coming soon.
* Fixed an unfortunate bug where `getElementById` would fail to work correctly on `<img>` elements whose `id` attributes were modified. (Joris-van-der-Wel)
* Fixed the `virtualConsole` option to work with `jsdom.env`, not just `jsdom.jsdom`. (jeffcarp)
* Removed a few functions that were erroneously added to `window`: `mapper`, `mapDOMNodes`, and `visitTree`. (Joris-van-der-Wel)

## 5.3.0

* Added a `virtualConsole` option to the document creation methods, along with the `jsdom.createVirtualConsole` factory. (See [examples in the readme](https://github.com/tmpvar/jsdom/blob/dbf88666d1152576237ed1c741263f5516bb4005/README.md#capturing-console-output).) With this option you can install a virtual console before the document is even created, thus allowing you to catch any virtual console events that occur during initialization. (jeffcarp)

## 5.2.0

* Implemented much of the [`ParentNode`](https://dom.spec.whatwg.org/#interface-parentnode) mixin (Joris-van-der-Wel):
  - Moved `children` from `Node` to `ParentNode`, i.e., made it available on `Document`, `DocumentFragment`, and `Element`, but not other types of nodes.
  - Made `children` a `HTMLCollection` instead of a `NodeList`.
  - Implemented `firstElementChild`, `lastElementChild`, and `childElementCount`.
* Implemented the `outerHTML` setter. (Joris-van-der-Wel)
* Fixed the `outerHTML` getter for `<select>` and `<form>`. (Joris-van-der-Wel)
* Fixed various issues with window-less documents, so that they no longer give incorrect results or blow up in strange ways. You can create such documents with e.g. `document.implementation.createHTMLDocument()`. (Joris-van-der-Wel)
* Fixed relative stylesheet resolution when using `@import`. (dbo)

## 5.1.0

* Added support for the `NodeIterator` class from the DOM Standard. (Joris-van-der-Wel)
* Fixed an issue with the initial request where it was not sharing its cookie jar with the subsequent requests, sometimes leading to a "possible EventEmitter memory leak detected" warning. (inikulin)
* Updated tough-cookie to 0.13.0, bringing along many spec compliance fixes. (inikulin)
* Added a fast failure in Node.js™ with a clear error message, so that people don't get confused by syntax errors.

## 5.0.1

* Fixed `document.cookie` setter to no longer ignore `null`; instead it correctly sets a cookie of `"null"`. (Chrome is not compliant to the spec in this regard.)
* Fixed documents created with `parsingMode: "xml"` to no longer get `"<html><head></head><body></body></html>"` automatically inserted when calling `jsdom.jsdom()` with no arguments.
* Fixed the `innerHTML` setter to no longer ignore `undefined`; instead it correctly sets the innerHTML to `"undefined"`.
* Fixed `document.write` to throw for XML documents as per the spec.
* Fixed `document.write` to accept more than one argument (they get concatenated).
* Fixed `document.write("")` to no longer try to write `"<html><head></head><body></body></html>"`.

## 5.0.0

This release overhauls how cookies are handled in jsdom to be less fiddly and more like-a-browser. The work for this was done by [@inikulin](https://github.com/inikulin), who is also our beloved parse5 maintainer.

You should only need to worry about upgrading to this release if you use jsdom's cookie handling capabilities beyond the basics of reading and writing to `document.cookie`. If that describes you, here's what changed:

* Removed `options.jar` and `options.document.cookieDomain` from the configuration for creating jsdom documents.
* Instead, there is now a new option, `options.cookieJar`, which accepts cookie jars created by the new `jsdom.createCookieJar()` API. You should use this if you intend to share cookie jars among multiple jsdom documents.
* Within a given cookie jar, cookie access is now automatically handled on a domain basis, as the browser does, with the domain calculated from the document's URL (supplied as `options.url` when creating a document). This supplants the former `options.document.cookieDomain`.

In addition to these changes to the public API, the following new cookie-related features came along for the ride:

* Implemented automatic cookie-jar sharing with descendant `<iframe>`s. (So, if the iframe is same-domain, it can automatically access the appropriate cookies.)
* Let `options.document.cookie` accept arrays, instead of just strings, for if you want to set multiple cookies at once.

Finally, it's worth noting that we now delegate our cookie handling in general to the [tough-cookie](https://www.npmjs.com/package/tough-cookie) package, which should hopefully mean that it now captures many of the behaviors that were previously missing (for example [#1027](https://github.com/tmpvar/jsdom/issues/1027)). @inikulin is working on [a large pull request to fix tough-cookie to be more spec compliant](https://github.com/goinstant/tough-cookie/pull/30), which should automatically be picked up by jsdom installs once it is merged.

## 4.5.1

* Removed unnecessary browserify dependency that was erroneously included in 4.5.0.

## 4.5.0

* Added `document.currentScript`. (jeffcarp)

## 4.4.0

* All resources are now loaded with the [request](https://www.npmjs.com/package/request) package, which means that e.g. GZIPped resources will be properly uncompressed, redirects will be followed, and more. This was previously the case only for URLs passed directly to `jsdom.env`, and not for sub-resources inside the resulting page. (ssesha)

## 4.3.0

* Made the click behavior for radio buttons and checkboxes work when doing `el.dispatchEvent(clickEvent)`, not just when doing `el.click()`. (brandon-bethke-neudesic)
* Added `defaultPrevented` property to `Event` instances, reflecting whether `ev.preventDefault()` has been called. (brandon-bethke-neudesic)
* Moved the `click()` method from `HTMLInputElement.prototype` to `HTMLElement.prototype`, per the latest spec.
* Made the `click()` method trigger a `MouseEvent` instead of just an `Event`.

## 4.2.0

* Added a second parameter to `UIEvent`, `MouseEvent`, and `MutationEvent`, which for now just behaves the same as that for `Event`. (Rich-Harris)

## 4.1.0

* Added a second parameter to the `Event` constructor, which allows you to set the `bubbles` and `cancelable` properties. (brandon-bethke-neudesic)

## 4.0.5

* Added `HTMLUnknownElement` and fix the parser/`document.createElement` to create those instead of `HTMLElement` for unknown elements.
* Fixed issues with named and indexed properties on `window`, as well as `window.length`, with regard to `<frame>`s/`<iframe>`s being added and removed from the document.

_Note:_ this probably should have been a minor version number increment (i.e. 4.1.0 instead of 4.0.5), since it added `HTMLUnknownElement`. We apologize for the deviation from semver.

## 4.0.4

* Fixed parsing of doctypes by relying on the information provided by the html parser if possible.

## 4.0.3

* Fixed events fired from `EventTarget`s to execute their handlers in FIFO order, as per the spec.
* Fixed a case where `childNodes` would not be correctly up to date in some cases. (medikoo)
* Sped up window creation with `jsdom.env` by ~600%, for the special case when no scripts are to be executed.

## 4.0.2

* `EventTarget` is now correctly in the prototype chain of `Window`.
* `EventTarget` argument validation is now correct according to the DOM Standard.
* `DOMException` now behaves more like it should per Web IDL. In particular it has a more comprehensive set of constants, and instances now have `name` properties.
* `new Event("click")` can now be dispatched. (lovebear)
* `document.createEvent` now behaves more like it should according to the DOM Standard: it accepts a wider range of arguments, but will throw if an invalid one is given. (lovebear)
* Fixed a regression in our browser support that required Chrome 41 as of 4.0.1; now Chrome 40 will work, as well as (in theory, although less well-tested) the latest stable versions of Firefox and IE.

## 4.0.1

* Fixed: `Node.prototype.contains` to always return a boolean. This was a regression in 3.1.1. (Joris-van-der-Wel)
* Fixed: `Document.prototype` no longer contains its own `ownerDocument` getter, instead correctly delegating to `Node.prototype`.
* Fixed: some edge cases regarding running `<script>`s in browserified jsdom.
* A couple fixes from updated dependencies (although you would have gotten these anyway with a fresh install, due to floating version specifiers):
    - csstyle minimum version bumped from 0.2.21 to 0.2.23, fixing handling of `0` when setting numeric CSS properties and parsing of shorthand `font` declarations.
    - parse5 minimum version bumped from 1.3.1 to 1.3.2 to, fixing the parsing of `<form>` elements inside `<template>` elements.

## 4.0.0

This release relies on the newly-overhauled `vm` module of io.js to eliminate the Contextify native module dependency. jsdom should now be much easier to use and install, without requiring a C++ compiler toolchain!

Note that as of this release, jsdom no longer works with Node.js™, and instead requires io.js. You are still welcome to install a release in [the 3.x series](https://github.com/tmpvar/jsdom/tree/3.x) if you are stuck on legacy technology like Node.js™.

In the process of rewriting parts of jsdom to use `vm`, a number of related fixes were made regarding the `Window` object:

* In some cases, state was implicitly shared between `Window` instances—especially parser- and serializer-related state. This is no longer the case, thankfully.
* A number of properties of `Window` were updated for spec compliance: some data properties became accessors, and all methods moved from the prototype to the instance.
* The non-standard `document.parentWindow` was removed, in favor of the standard `document.defaultView`. Our apologies for encouraging use of `parentWindow` in our README, tests, and examples.

## 3.1.2

* Some fixes to the `NOT_IMPLEMENTED` internal helper, which should eliminate the cases where calling e.g. `window.alert` crashes your application.
* Fixed a global variable leak when triggering `NOT_IMPLEMENTED` methods, like `window.location.reload`.
* Fixed the URL resolution algorithm to handle `about:blank` properly on all systems (previously it only worked on Windows). This is especially important since as of 3.0.0 the default URL is `about:blank`.
* Fixed, at least partially, the ability to run `<script>`s inside a browserified jsdom instance. This is done by dynamically rewriting the source code so that global variable references become explicit references to `window.variableName`, so it is not foolproof.

## 3.1.1

* Updated `Node.prototype.isEqualNode` to the algorithm of the DOM Standard, fixing a bug where it would throw an error along the way.
* Removed `Node.prototype.isSameNode`, which is not present in the DOM Standard (and was just a verbose `===` check anyway).
* Fixed a couple small issues while browserifying, mainly around `jsdom.env`. However, while doing so discovered that `<script>`s in general don't work too well in a browserified jsdom; see [#1023](https://github.com/tmpvar/jsdom/issues/1023).

## 3.1.0

* Added support for [custom external resource loading](https://github.com/tmpvar/jsdom#custom-external-resource-loader). (tobie)

## 3.0.3

* Fixed some stray byte-order marks in a couple files, which incidentally [break Browserify](https://github.com/substack/node-browserify/issues/1095). (sterpe)

## 3.0.2

* Fixed another edge case where unchecking a radio button would incorrectly uncheck radio buttons outside the containing form. (zpao)

## 3.0.1

* Fixed errors when serializing text nodes (possibly only occurred when inside `<template>`).
* Handle null bytes being passed to `jsdom.env`'s autodetecting capabilities. (fluffybunnies)
* Handle empty HTML strings being passed to `jsdom.env`'s `html` option. (fluffybunnies)

## 3.0.0

This release updates large swathes of the DOM APIs to conform to the standard, mostly by removing old stuff. It also fixes a few bugs, introduces a couple new features, and changes some defaults.

3.0.x will be the last release of jsdom to support Node.js. All future releases (starting with 4.0.0) will require [io.js](https://iojs.org/), whose [new `vm` module](https://github.com/iojs/io.js/blob/v1.x/CHANGELOG.md#vm) will allow us to remove our contextify native-module dependency. (Given that I submitted the relevant patch to joyent/node [1.5 years ago](https://github.com/joyent/node/commit/7afdba6e0bc3b69c2bf5fdbd59f938ac8f7a64c5), I'm very excited that we can finally use it!)

* By default documents now use `about:blank` as their URL, instead of trying to infer some type of file URL from the call site (in Node.js) or using `location.href` (in browsers).
* Introduced a new "virtual console" abstraction for capturing console output from inside the page. [See the readme for more information.](https://github.com/tmpvar/jsdom#capturing-console-output) Note that `console.error` will no longer contribute to the (non-standard, and likely dying in the future) `window.errors` array. (jeffcarp)
* Added the named `new Image(width, height)` constructor. (vinothkr)
* Fixed an exception when using `querySelector` with selectors like `div:last-child > span[title]`.
* Removed all traces of entities, entity types, notations, default attributes, and CDATA sections.
* Differentiated between XML and HTML documents better, for example in how they handle the casing of tag names and attributes.
* Updated `DOMImplementation` to mostly work per-spec, including removing `addFeature` and `removeFeature` methods, the `ownerDocument` property, and making `hasFeature` always return `true`.
* Re-did the `CharacterData` implementation to follow the algorithms in the DOM Standard; this notably removes a few exceptions that were previously thrown.
* Re-did `Comment`, `Text`, and `ProcessingInstruction` to follow the DOM Standard and derive from `CharacterData`.
* Re-did `DocumentType` to follow the DOM Standard and be much simpler, notably removing notations, entities, and default attributes.
* Fixed a variety of accessors on `Node`, `Element`, `Attr`, and `Document`; some were removed that were nonstandard (especially setters); others were updated to reflect the spec; etc.
* Re-did name/qname validation, which is done by various APIs, to work with the xml-name-validator package and some centralized algorithms.
* Made the XML parser at least somewhat aware of processing instructions.
* Cleaned up doctype parsing and association between doctypes and documents. More exotic doctypes should parse better now.
* `document.contentType` now is generally inferred from the parsing mode of the document.
* Moved some properties to `Document.prototype` and `Window.prototype` instead of setting them as own properties during the document/window creation. This should improve memory usage (as well as spec compliance).

## 2.0.0

This release is largely a refactoring release to remove the defunct concept of "levels" from jsdom, in favor of the [living standard model](https://wiki.whatwg.org/wiki/FAQ#What_does_.22Living_Standard.22_mean.3F) that browsers follow. Although the code is still organized that way, that's now [noted as a historical artifact](https://github.com/tmpvar/jsdom/blob/2ff5747488ad4b518fcef97a026c82eab42a0a14/lib/README.md). The public API changes while doing so were fairly minimal, but this sets the stage for a cleaner jsdom code structure going forward.

* Removed: `jsdom.level`, and the `level` option from `jsdom.jsdom`.
* Change: the nonstandard `Element.prototype.matchesSelector` method was replaced with the standard `Element.prototype.matches`. (KenPowers)
* Fix: `querySelector` correctly coerces its argument to a string (1.2.2 previously fixed this for `querySelectorAll`).

## 1.5.0

* Add: missing `window.console` methods, viz. `assert`, `clear`, `count`, `debug`, `group`, `groupCollapse`, `groupEnd`, `table`, `time`, `timeEnd`, and `trace`. All except `assert` do nothing for now, but see [#979](https://github.com/tmpvar/jsdom/issues/979) for future plans. (jeffcarp)
* Tweak: make `childNodes`, and the many places in jsdom that use it, much faster. (Joris-van-der-Wel)

## 1.4.1

* Tweak: faster implementation of `NodeList.prototype.length`, which should speed up common operations like `appendChild` and similar. (Joris-van-der-Wel)

## 1.4.0

* Fix: `HTMLInputElement.prototype.checked` and `defaultChecked` now behave per the spec. (Joris-van-der-Wel)
* Fix: `HTMLOptionElement.prototype.selected` now behaves per the spec. (Joris-van-der-Wel)
* Fix: `HTMLInputElement.prototype.value` now behaves per the spec. (Joris-van-der-Wel)
* Fix: `HTMLTextAreaElement.prototype.value` and `defaultValue` now behave per the spec. (Joris-van-der-Wel)
* Add: `HTMLTextAreaElement.prototype.defaultValue` now has a setter, and `HTMLTextAreaElement.prototype.textLength` now exists. (Joris-van-der-Wel)
* Fix: resetting a `<form>` now behaves per spec for all different types of form elements. (Joris-van-der-Wel)
* Fix: radio buttons reset other radio buttons correctly now per the spec. (Joris-van-der-Wel)
* Fix: `document.cloneNode` now works. (AVGP)
* Fix: `hasAttribute` is now case-insensitive, as it should be. (AVGP)
* Fix: `div.toString()` now returns `[object HTMLDivElement]`. (AVGP)

## 1.3.2

* Fix: check if `module.parent` exists before using it to construct a document's initial URL. Apparently some testing frameworks like Jest do not correctly emulate the module environment; this compensates. (SegFaultx64)

## 1.3.1

* Fix: changing attributes on `<option>` elements will now have the correct consequences. For example changing the `id` attribute now interacts correctly with `document.getElementById`. (Joris-van-der-Wel)

## 1.3.0

* Add: moved `focus` and `blur` methods to `HTMLElement.prototype`, instead of having them only be present on certain element prototypes. Our focus story is still not very spec-compliant, but this is a step in the right direction. (vincentsiao)

## 1.2.3

* Tweak: improve performance of `Node.prototype.insertBefore`, `Node.prototype.removeChild`, and several `AttributeList` methods. (Joris-van-der-Wel)

## 1.2.2

* Fix: `querySelectorAll` correctly coerces its argument to a string; notably this allows you to pass arrays. (jeffcarp)
* Fix: the `data` setter on text nodes correctly coerces the new value to a string. (medikoo)
* Fix: `document.toString()` now returns `[object HTMLDocument]`. (jeffcarp)

## 1.2.1

* Fix: handling of `<template>` element parsing and serialization, now that it is supported by parse5. (inikulin)

## 1.2.0

* Add: `NodeFilter`, in particular its constants. (fhemberger)
* Fix: initial `history.length` should be `1`, not `0`. (rgrove)
* Fix: `history.pushState` and `history.replaceState` should not fire the `popstate` event. (rgrove)

## 1.1.0

* Add: `document.implementation.createHTMLDocument()`. (fhemberger)
* Fix: `localName` was sometimes `null` for elements when it should not be. (fhemberger)

## 1.0.3

* Update: no longer requiring separate `cssstyle` and `cssstyle-browserify` dependencies; now `cssstyle` can be used directly. This also un-pins the `cssstyle` dependency so that future fixes arrive as they appear upstream.

## 1.0.2

* Fix: temporarily pin `cssstyle` dependency to at most 0.2.18 until [chad3814/CSSStyleDeclaration#20](https://github.com/chad3814/CSSStyleDeclaration/issues/20) is fixed.
* Fix: browserifying jsdom should work better now that the required packages are included as `dependencies` instead of `devDependencies`. (Sebmaster)
* Fix: using `jsom.env` in a browser environment now correctly defaults `options.url` to `location.href` instead of trying to infer a reasonable `fil://` URL using techniques that fail in the browser. (rattrayalex)

## 1.0.1

* Fix: the return value of `EventTarget.prototype.dispatchEvent` should be `true` when the default is *not* prevented; previously it was the opposite. (eventualbuddha)

## 1.0.0

For a consolidated list of changes from 0.11.1 to 1.0.0, see [this wiki page](https://github.com/tmpvar/jsdom/wiki/Changes-from-0.11.1-to-1.0.0).

* Remove: nonstandard `EventTarget.getListeners`; `EventTarget.forwardIterator`; `EventTarget.backwardIterator`; `EventTarget.singleIterator`.
* Remove: nonstandard `document.innerHTML`. (jorendorff)
* Fix: `value` and `defaultValue` properties of a `HTMLInputElement` are now correctly synced to the `value=""` attribute. (Sebmaster)

## 1.0.0-pre.7

* Remove: support for old, untested HTML and XML parsers, namely davglass/node-htmlparser and isaacs/sax-js. In the future we plan to work toward a standardized parsing interface that other parsers can implement, instead of adding custom code to jsdom for various parsers. This interface still is being decided though, as it needs to support complex things like pausing the parse stream (for `document.write`) and parsing disconnected fragments (for `document.innerHTML`). (Sebmaster)
* Add: new `parsingMode` configuration, to allow you to manually specify XML or HTML. (Sebmaster)
* Change: jsdom will no longer use the presence of `<?xml` or similar to attempt to auto-detect XHTML documents. Instead, it will by default treat them the same as browsers do, with the `<?xml` declaration just being a bogus comment. If you need your document interpreted as XHTML instead of HTML, use the `parsingMode` option. (Sebmaster)
* Tweak: memoize various DOM-querying functions (e.g. `getElementsByTagName`, `querySelector`, etc.) to improve performance. (ccarpita)

## 1.0.0-pre.6

* Fix: another parsing issues with void elements and `innerHTML`, this time related to disconnected nodes. This was a regression between 0.11.1 and 1.0.0-pre.1. (paton)
* Fix: same-named radio inputs should not be mutually exclusive unless they are in the same form. (stof)

## 1.0.0-pre.5

* Fix: sometimes calling `window.close()` would cause a segfault. (paton)

## 1.0.0-pre.4

* Fix: attributes and elements now have their `prefix`, `localName`, and `namespaceURI` properties set correctly in all cases. (Excepting `application/xhtml+xml` mode, which jsdom does not support yet.) (Sebmaster)

## 1.0.0-pre.3

* Fix: void elements no longer parsed correctly when using `innerHTML`. This was a regression between 0.11.1 and 1.0.0-pre.1. (Sebmaster)

## 1.0.0-pre.2

* Fix: parsing and serialization of attributes in the form `x:y`, e.g. `xmlns:xlink` or `xlink:href`. This was a regression between 0.11.1 and 1.0.0-pre.1. (Sebmaster)

## 1.0.0-pre.1

This is a prerelease of jsdom's first major version. It incorporates several great additions, as well as a general cleanup of the API surface, which make it more backward-incompatible than usual. Starting with the 1.0.0 release, we will be following semantic versioning, so that you can depend on stability within major version ranges. But we still have [a few more issues](https://github.com/tmpvar/jsdom/issues?q=is%3Aopen+is%3Aissue+milestone%3A1.0) before we can get there, so I don't want to do 1.0.0 quite yet.

This release owes a special thanks to [@Sebmaster](https://github.com/Sebmaster), for his amazing work taking on some of the hardest problems in jsdom and solving them with gusto.

### Major changes

* jsdom now can be browserified into a bundle that works in web workers! This is highly experimental, but also highly exciting! (lawnsea)
* An overhaul of the [initialization lifecycle](https://github.com/tmpvar/jsdom#initialization-lifecycle), to bring more control and address common use cases. (Sebmaster)
* The excellent [parse5](https://npmjs.org/package/parse5) HTML parser is now the default parser, fixing many parsing bugs and giving us full, official-test-suite-passing HTML parsing support. This especially impacts documents that didn't include optional tags like `<html>`, `<head>`, or `<body>` in their source. We also use parse5 for serialization, fixing many bugs there. (Sebmaster)
* As part of the new parser story, we are not supporting XML for now. It might work if you switch to a different parser (e.g. htmlparser2), but in the end, HTML and XML are very different, and we are not attempting to be an XML DOM. That said, we eventually want to support XML to the same extent browsers do (i.e., support XHTML and SVG, with an appropriate MIME type switch); this is being planned in [#820](https://github.com/tmpvar/jsdom/issues/820).

### Removed jsdom APIs

* `jsdom.createWindow`: use `document.parentWindow` after creating a document
* `jsdom.html`: use `jsdom.jsdom`
* `jsdom.version`: use `require("jsdom/package.json").version`
* `jsdom.level`: levels are deprecated and will probably be removed in 2.0.0
* `jsdom.dom`
* `jsdom.browserAugmentation`
* `jsdom.windowAugmentation`

### Changed jsdom APIs

* `jsdom.jsdom` no longer takes a level as its second argument.
* `jsdom.jQueryify` now requires a jQuery URL, since [always picking the latest was a bad idea](http://blog.jquery.com/2014/07/03/dont-use-jquery-latest-js/).

### Removed non-standard DOM APIs

* `document.createWindow`: use `document.parentWindow`
* `document.innerHTML` and `document.outerHTML`: use the new `jsdom.serializeDocument` to include the DOCTYPE, or use `document.documentElement.outerHTML` to omit it.

### Other fixes

* Allow empty strings to be passed to `jsdom.env`. (michaelmior)
* Fix for a memory leak in `EventTarget.prototype.dispatchEvent`. (Joris-van-der-Wel)
* Make event listeners in the capture phase also fire on the event target. (Joris-van-der-Wel)
* Correctly reset `eventPhase` and `currentTarget` on events, before and after a dispatch. (Joris-van-der-Wel)
* Fix `document.cookie = null` to not throw, but instead just do nothing. (kapouer)

## 0.11.1

* Add: `Node.prototype.parentElement`. (lukasbuenger)
* Fix: attributes that are reflected as properties should be `''` when not present, instead of `null`. (Note that `getAttribute` still returns `null` for them). (thejameskyle)
* Fix: `textContent` now works for nodes that do not have children, like text nodes for example. (hayes)
* Fix: `jsdom.jQueryify` was using the wrong URL for jQuery by default. (lukasbuenger)

## 0.11.0

* Add: new default level, `living`, reflecting our focus on the [DOM Living Standard](http://dom.spec.whatwg.org/) and the [HTML Living Standard](http://www.whatwg.org/specs/web-apps/current-work/multipage/), which are what browsers actually implement. This should open the door for more features of the modern DOM and HTML specs to be implemented in jsdom. (robotlovesyou)
* Add: `Node.prototype.contains` now implemented. (robotlovesyou)
* Add: `navigator.cookieEnabled` now implemented; it always returns `true`. (Sebmaster)
* Change: DOCTYPEs no longer have their `name` property uppercased during parsing, and appear in the output of `document.innerHTML`.
* Fix: `Node.prototype.compareDocumentPosition` implemented correctly; various document position constants added to the `Node` constructor. (robotlovesyou)
* Fix: `DocumentType.prototype.parentNode` now returns the document node, not `null`. (robotlovesyou)
* Fix: various `navigator` properties are now getters, not data properties. (Sebmaster)
* Fix: a bug involving invalid script paths and `jsdom.jQueryify`. (Sebmaster)

## 0.10.6

* Add: remaining URL properties to `window.location` and `HTMLAnchorElement`.
* Fix: the presence of `String.prototype.normalize`, which is available by default in Node 0.11.13 onwards, caused reflected attributes to break. (brock8503)
* Fix: iframes now correctly load `about:blank` when the `src` attribute is empty or missing. (mcmathja)
* Fix: documents containing only whitespace now correctly generate wrapper documents, just like blank documents do. (nikolas)
* Tweak: lazy-load the request module, to improve overall jsdom loading time. (tantaman)

## 0.10.5

* Fix: the list of void elements has been updated to match the latest HTML spec.
* Fix: when serializing void elements, don't include a ` /`: i.e. the result is now `<br>` instead of `<br />`.

## 0.10.4

* Fix: another case was found where jQuery 1.11's `show()` method would cause errors.
* Add: `querySelector` and `querySelectorAll` methods to `DocumentFragment`s. (Joris-van-der-Wel)

## 0.10.3

* Fix: various defaults on `HTMLAnchorElement` and `window.location` should not be `null`; they should usually be the empty string.

## 0.10.2

* Fix: Using jQuery 1.11's `show()` method would cause an error to be thrown.
* Fix: `window.location` properties were not updating correctly after using `pushState` or `replaceState`. (toomanydaves)

## 0.10.1

* Fix: `window.location.port` should default to `""`, not `null`. (bpeacock)

## 0.10.0

* Add: a more complete `document.cookie` implementation, that supports multiple cookies. Note that options like `path`, `max-age`, etc. are still ignored. (dai-shi)

## 0.9.0

* Add: implement attribute ordering semantics from WHATWG DOM spec, and in general overhaul attribute storage implementation to be much more awesome and accurate. (lddubeau)
* Add: `port` and `protocol` to `HTMLAnchorElement`. (sporchia)
* Fix: make `HTMLInputElement` not have a `type` *attribute* by default. It still has a default value for the `type` *property*, viz. `"text"`. (aredridel)
* Fix: treat empty namespace URI as meaning "no namespace" with the `getAttributeNS`, `hasAttributeNS`, and `setAttributeNS` functions. (lddubeau)
* Fix: reference typed arrays in a way that doesn't immediately break on Node 0.6. Node 0.6 isn't supported in general, though. (kangax)

## 0.8.11

* Add: store and use cookies between requests; customizable cookie jars also possible. (stockholmux)
* Fix: attributes named the same as prototype properties of `NamedNodeMap` no longer break jsdom. (papandreou)
* Fix: `removeAttributeNS` should not throw on missing attributes. (lddubeau)
* Change: remove `__proto__`, `__defineGetter__`, and `__defineSetter__` usage, as part of a project to make jsdom work better across multiple environments. (lawnsea)

## 0.8.10

* Add: `hash` property to `HTMLAnchorElement`. (fr0z3nk0)

## 0.8.9

* Upgrade: `cssom` to 0.3.0, adding support for `@-moz-document` and fixing a few other issues.
* Upgrade: `cssstyle` to 0.2.6, adding support for many shorthand properties and better unit handling.

## 0.8.8

* Fix: avoid repeated `NodeList.prototype.length` calculation, for a speed improvement. (peller)

## 0.8.7

* Add: `host` property to `HTMLAnchorElement`. (sporchia)

## 0.8.6

* Fix: stop accidentally modifying `Error.prototype`. (mitar)
* Add: a dummy `getBoundingClientRect` method, that returns `0` for all properties of the rectangle, is now implemented. (F1LT3R)

## 0.8.5

* Add: `href` property on `CSSStyleSheet` instances for external CSS files. (FrozenCow)

## 0.8.4

 * Add: typed array constructors on the `window`. (nlacasse)
 * Fix: `querySelector` and `querySelectorAll` should be on the prototypes of `Element` and `Document`, not own-properties. (mbostock)

## 0.8.3

 * Fix: when auto-detecting whether the first parameter to `jsdom.env` is a HTML string or a filename, deal with long strings correctly instead of erroring. (baryshev)

## 0.8.2

 * Add: basic `window.history` support, including `back`, `forward`, `go`, `pushState`, and `replaceState`. (ralphholzmann)
 * Add: if an `<?xml?>` declaration starts the document, will try to parse as XML, e.g. not lowercasing the tags. (robdodson)
 * Fix: tag names passed to `createElement` are coerced to strings before evaluating.

## 0.8.1 (hotfix)

 * Fix: a casing issue that prevented jsdom from loading on Unix and Solaris systems. (dai-shi)
 * Fix: `window.location.replace` was broken. (dai-shi)
 * Fix: update minimum htmlparser2 version, to ensure you get the latest parsing-related bugfixes.

## 0.8.0

 * Add: working `XMLHttpRequest` support, including cookie passing! (dai-shi)
 * Add: there is now a `window.navigator.noUI` property that evaluates to true, if you want to specifically distinguish jsdom in your tests.

## 0.7.0

 * Change: the logic when passing `jsdom.env` a string is more accurate, and you can be explicit by using the `html`, `url`, or `file` properties. This is a breaking change in the behavior of `html`, which used to do the same auto-detection logic as the string-only version.
 * Fix: errors raised in scripts are now passed to `jsdom.env`'s callback. (airportyh)
 * Fix: set `window.location.href` correctly when using `jsdom.env` to construct a window from a URL, when that URL causes a redirect. (fegs)
 * Add: a more complete and accurate `window.location` object, which includes firing `hashchange` events when the hash is changed. (dai-shi)
 * Add: when using a non-implemented feature, mention exactly what it was that is not implemented in the error message. (papandreou)

## 0.6.5

 * Fix: custom attributes whose names were the same as properties of `Object.prototype`, e.g. `"constructor"`, would confuse jsdom massively.

## 0.6.4

 * Fix: CSS selectors which contain commas inside quotes are no longer misinterpreted. (chad3814)
 * Add: `<img>` elements now fire `"load"` events when their `src` attributes are changed. (kapouer)

## 0.6.3

 * Fix: better automatic detection of URLs vs. HTML fragments when using `jsdom.env`. (jden)

## 0.6.2

 * Fix: URL resolution to be amazing and extremely browser-compatible, including the interplay between the document's original URL, any `<base>` tags that were set, and any relative `href`s. This impacts many parts of jsdom having to do with external resources or accurate `href` and `src` attributes. (deitch)
 * Add: access to frames and iframes via named properties. (adrianlang)
 * Fix: node-canvas integration, which had been broken since 0.5.7.

## 0.6.1

 * Make the code parseable with Esprima. (squarooticus)
 * Use the correct `package.json` field `"repository"` instead of `"repositories"` to prevent npm warnings. (jonathanong)

## 0.6.0

Integrated a new HTML parser, [htmlparser2](https://npmjs.org/package/htmlparser2), from fb55. This is an actively maintained and much less buggy parser, fixing many of our parsing issues, including:

 * Parsing elements with optional closing tags, like `<p>` or `<td>`.
 * The `innerHTML` of `<script>` tags no longer cuts off the first character.
 * Empty attributes now have `""` as their value instead of the attribute name.
 * Multiline attributes no longer get horribly mangled.
 * Attribute names can now be any value allowed by HTML5, including crazy things like `^`.
 * Attribute values can now contain any value allowed by HTML5, including e.g. `>` and `<`.

## 0.5.7

 * Fix: make event handlers attached via `on<event>` more spec-compatible, supporting `return false` and passing the `event` argument. (adrianlang)
 * Fix: make the getter for `textContent` more accurate, e.g. in cases involving comment nodes or processing instruction nodes. (adrianlang)
 * Fix: make `<canvas>` behave like a `<div>` when the `node-canvas` package isn't available, instead of crashing. (stepheneb)

## 0.5.6

 * Fix: `on<event>` properties are correctly updated when using `setAttributeNode`, `attributeNode.value =`, `removeAttribute`, and `removeAttributeNode`; before it only worked with `setAttribute`. (adrianlang)
 * Fix: `HTMLCollection`s now have named properties based on their members' `id` and `name` attributes, e.g. `form.elements.inputId` is now present. (adrianlang)

## 0.5.5

 * Fix: `readOnly` and `selected` properties were not correct when their attribute values were falsy, e.g. `<option selected="">`. (adrianlang)

## 0.5.4

This release, and all future releases, require at least Node.js 0.8.

 * Add: parser can now be set via `jsdom.env` configuration. (xavi-)
 * Fix: accessing `rowIndex` for table rows that are not part of a table would throw. (medikoo)
 * Fix: several places in the code accidentally created global variables, or referenced nonexistant values. (xavi-)
 * Fix: `<img>` elements' `src` properties now evaluate relative to `location.href`, just like `<a>` elements' `href` properties. (brianmaissy)

## 0.5.3

This release is compatible with Node.js 0.6, whereas all future releases will require at least Node.js 0.8.

 * Fix: `getAttributeNS` now returns `null` for attributes that are not present, just like `getAttribute`. (mbostock)
 * Change: `"request"` dependency pinned to version 2.14 for Node.js 0.6 compatibility.

## 0.5.2

 * Fix: stylesheets with `@-webkit-keyframes` rules were crashing calls to `getComputedStyle`.
 * Fix: handling of `features` option to `jsdom.env`.
 * Change: retain the value of the `style` attribute until the element's `style` property is touched. (papandreou)

## 0.5.1

 * Fix: `selectedIndex` now changes correctly in response to `<option>` elements being selected. This makes `<select>` elements actually work like you would want, especially with jQuery. (xcoderzach)
 * Fix: `checked` works correctly on radio buttons, i.e. only one can be checked and clicking on one does not uncheck it. Previously they worked just like checkboxes. (xcoderzach)
 * Fix: `click()` on `<input>` elements now fires a click event. (xcoderzach)

## 0.5.0

 * Fix: Make `contextify` a non-optional dependency. jsdom never worked without it, really, so this just caused confusion.

## 0.4.2

 * Fix: `selected` now returns true for the first `<option>` in a `<select>` if nothing is explicitly set.
 * Fix: tweaks to accuracy and speed of the `querySelectorAll` implementation.

## 0.4.1 (hotfix)

 * Fix: crashes when loading HTML files with `<a>` tags with no `href` attribute. (eleith)

## 0.4.0

 * Fix: `getAttribute` now returns `null` for attributes that are not present, as per DOM4 (but in contradiction to DOM1 through DOM3).
 * Fix: static `NodeList`-returning methods (such as `querySelectorAll`) now return a real `NodeList` instance.
 * Change: `NodeList`s no longer expose nonstandard properties to the world, like `toArray`, without first prefixing them with an underscore.
 * Change: `NodeList`s no longer inconsistently have array methods. Previously, live node lists would have `indexOf`, while static node lists would have them all. Now, they have no array methods at all, as is correct per the specification.

## 0.3.4

 * Fix: stylesheets with `@media` rules were crashing calls to `getComputedStyle`, e.g. those in jQuery's initialization.

## 0.3.3

 * Fix: make `document.write` calls insert new elements correctly. (johanoverip, kblomquist).
 * Fix: `<input>` tags with no `type` attribute now return a default value of `"text"` when calling `inputEl.getAttribute("type")`.

## 0.3.2

 * Fix: stylesheets with "joining" rules (i.e. those containing comma-separated selectors) now apply when using `getComputedStyle`. (chad3814, godmar)
 * Add: support for running the tests using @aredridel's [html5](https://npmjs.org/package/html5) parser, as a prelude toward maybe eventually making this the default and fixing various parsing bugs.

## 0.3.1 (hotfix)

 * Fix: crashes when invalid selectors were present in stylesheets.

## 0.3.0

 * Fix: a real `querySelector` implementation, courtesy of the nwmatcher project, solves many outstanding `querySelector` bugs.
 * Add: `matchesSelector`, again via nwmatcher.
 * Add: support for styles coming from `<style>` and `<link rel="stylesheet">` elements being applied to the results of `window.getComputedStyle`. (chad3814)
 * Add: basic implementation of `focus()` and `blur()` methods on appropriate elements. More work remains.
 * Fix: script filenames containing spaces will now work when passed to `jsdom.env`. (TomNomNom)
 * Fix: elements with IDs `toString`, `hasOwnProperty`, etc. could cause lots of problems.
 * Change: A window's `load` event always fires asynchronously now, even if no external resources are necessary.
 * Change: turning off mutation events is not supported, since doing so breaks external-resource fetching.

## 0.2.19

 * Fix: URL resolution was broken on pages that included `href`-less `<base>` tags.
 * Fix: avoid putting `attr` in the global scope when using node-canvas. (starsquare)
 * Add: New `SkipExternalResources` feature accepts a regular expression. (fgalassi)

## 0.2.18

 * Un-revert: cssstyle has fixed its memory problems, so we get back accurate `cssText` and `style` properties again.

## 0.2.17 (hotfix)

 * Revert: had to revert the use of the cssstyle package. `cssText` and `style` properties are no longer as accurate.
 * Fix: cssstyle was causing out-of-memory errors on some larger real-world pages, e.g. reddit.com.

## 0.2.16
 * Update: Sizzle version updated to circa September 2012.
 * Fix: when setting a text node's value to a falsy value, convert it to a string instead of coercing it to `""`.
 * Fix: Use the cssstyle package for `CSSStyleDeclaration`, giving much more accurate `cssText` and `style` properties on all elements. (chad3814)
 * Fix: the `checked` property on checkboxes and radiobuttons now reflects the attribute correctly.
 * Fix: `HTMLOptionElement`'s `text` property should return the option's text, not its value.
 * Fix: make the `name` property only exist on certain specific tags, and accurately reflect the corresponding `name` attribute.
 * Fix: don't format `outerHTML` (especially important for `<pre>` elements).
 * Fix: remove the `value` property from `Text` instances (e.g. text nodes).
 * Fix: don't break in the presence of a `String.prototype.normalize` method, like that of sugar.js.
 * Fix: include level3/xpath correctly.
 * Fix: many more tests passing, especially related to file:/// URLs on Windows. Tests can now be run with `npm test`.

## 0.2.15
 * Fix: make sure that doctypes don't get set as the documentElement (Aria Stewart)
 * Add: HTTP proxy support for jsdom.env (Eugene Ware)
 * Add: .hostname and .pathname properties to Anchor elements to comply with WHATWG standard (Avi Deitcher)
 * Fix: Only decode HTML entities in text when not inside a `<script>` or `<style>` tag. (Andreas Lind Petersen)
 * Fix: HTMLSelectElement single selection implemented its type incorrectly as 'select' instead of 'select-one' (John Roberts)

## 0.2.14
 * Fix: when serializing single tags use ' />' instead of '/>' (kapouer)
 * Fix: support for contextify simulation using vm.runInContext (trodrigues)
 * Fix: allow jsdom.env's config.html to handle file paths which contain spaces (shinuza)
 * Fix: Isolate QuerySelector from prototype (Nao Iizuka)
 * Add: setting textContent to '' or clears children (Jason Davies)
 * Fix: jsdom.env swallows exceptions that occur in the callback (Xavi)

## 0.2.13
 * Fix: remove unused style property which was causing explosions in 0.2.12 and node 0.4.7

## 0.2.12
 * Fix: do not include gmon.out/v8.log/tests in npm distribution

## 0.2.11
 * Add: allow non-unique element ids (Avi Deitcher)
 * Fix: make contexify an optional dependency (Isaac Schlueter)
 * Add: scripts injected by jsdom are now marked with a 'jsdom' class for serialization's sake (Peter Lyons)
 * Fix: definition for ldquo entity (Andrew Morton)
 * Fix: access NamedNodeMap items via property (Brian McDaniel)
 * Add: upgrade sizzle from 1.0 to [fe2f6181](https://github.com/jquery/sizzle/commit/fe2f618106bb76857b229113d6d11653707d0b22) which is roughly 1.5.1
 * Add: documentation now includes `jsdom.level(x, 'feature')`
 * Fix: make `toArray` and `item` on `NodeList` objects non-enumerable properties
 * Add: a reference to `window.close` in the readme
 * Fix: Major performance boost (Felix Gnass)
 * Fix: Using querySelector `:not()` throws a `ReferenceError` (Felix Gnass)

## 0.2.10
 * Fix: problems with lax dependency versions
 * Fix: CSSOM constructors are hung off of the dom (Brian McDaniel)
 * Fix: move away from deprecated 'sys' module
 * Fix: attribute event handlers on bubbling path aren't called (Brian McDaniel)
 * Fix: setting textarea.value to markup should not be parsed (Andreas Lind Petersen)
 * Fix: content of script tags should not be escaped (Ken Sternberg)
 * Fix: DocumentFeatures for iframes with no src attribute. (Brian McDaniel) Closes #355
 * Fix: 'trigger' to 'raise' to be a bit more descriptive
 * Fix: When `ProcessExternalResources['script']` is disabled, do _not_ run inline event handlers. #355
 * Add: verbose flag to test runner (to show tests as they are running and finishing)

## 0.2.9
 * Fix: ensure features are properly reset after a jsdom.env invocation. Closes #239
 * Fix: ReferenceError in the scanForImportRules helper function
 * Fix: bug in appendHtmlToElement with HTML5 parser (Brian McDaniel)
 * Add: jsonp support (lheiskan)
 * Fix: for setting script element's text property (Brian McDaniel)
 * Fix: for jsdom.env src bug
 * Add: test for jsdom.env src bug (multiple done calls)
 * Fix: NodeList properties should enumerate like arrays (Felix Gnass)
 * Fix: when downloading a file, include the url.search in file path
 * Add: test for making a jsonp request with jquery from jsdom window
 * Add: test case for issue #338
 * Fix: double load behavior when mixing jsdom.env's `scripts` and `src` properties (cjroebuck)

## 0.2.8 (hotfix)
 * Fix: inline event handlers are ignored by everything except for the javascript context

## 0.2.7 (hotfix)
 * Fix stylesheet loading

## 0.2.6
 * Add: support for window.location.search and document.cookie (Derek Lindahl)
 * Add: jsdom.env now has a document configuation option which allows users to change the referer of the document (Derek Lindahl)
 * Fix: allow users to use different jsdom levels in the same process (sinegar)
 * Fix: removeAttributeNS no longer has a return value (Jason Davies)
 * Add: support for encoding/decoding all html entities from html4/5 (papandreou)
 * Add: jsdom.env() accepts the same features object seen in jsdom.jsdom and friends

## 0.2.5
 * Fix: serialize special characters in Element.innerHTML/Element.attributes like a grade A browser (Jason Priestley)
 * Fix: ensure Element.getElementById only returns elements that are attached to the document
 * Fix: ensure an Element's id is updated when changing the nodeValue of the 'id' attribute (Felix Gnass)
 * Add: stacktrace to error reporter (Josh Marshall)
 * Fix: events now bubble up to the window (Jason Davies)
 * Add: initial window.location.hash support (Josh Marshall)
 * Add: Node#insertBefore should do nothing when both params are the same node (Jason Davies)
 * Add: fixes for DOMAttrModified mutation events (Felix Gnass)

## 0.2.4
 * Fix: adding script to invalid/incomplete dom (document.documentElement) now catches the error and passes it in the `.env` callback (Gregory Tomlinson)
 * Cleanup: trigger and html tests
 * Add: support for inline event handlers (ie: `<div onclick='some.horrible.string()'>`) (Brian McDaniel)
 * Fix: script loading over https (Brian McDaniel) #280
 * Add: using style.setProperty updates the style attribute (Jimmy Mabey).
 * Add: invalid markup is reported as an error and attached to the associated element and document
 * Fix: crash when setChild() failes to create new DOM element (John Hurliman)
 * Added test for issue #287.
 * Added support for inline event handlers.
 * Moved frame tests to test/window/frame.js and cleaned up formatting.
 * Moved script execution tests to test/window/script.js.
 * Fix a crash when setChild() fails to create a new DOM element
 * Override CSSOM to update style attribute

## 0.2.3
 * Fix: segfault due to window being garbage collected prematurely
    NOTE: you must manually close the window to free memory (window.close())

## 0.2.2
 * Switch to Contextify to manage the window's script execution.
 * Fix: allow nodelists to have a length of 0 and toArray to return an empty array
 * Fix: style serialization; issues #230 and #259
 * Fix: Incomplete DOCTYPE causes JavaScript error
 * Fix: indentation, removed outdated debug code and trailing whitespace.
 * Prevent JavaScript error when parsing incomplete `<!DOCTYPE>`. Closes #259.
 * Adding a test from brianmcd that ensures that setTimeout callbacks execute in the context of the window
 * Fixes issue 250: make `document.parentWindow === window` work
 * Added test to ensure that timer callbacks execute in the window context.
 * Fixes 2 issues in ResourceQueue
 * Make frame/iframe load/process scripts if the parent has the features enabled

## 0.2.1
 * Javascript execution fixes [#248, #163, #179]
 * XPath (Yonathan and Daniel Cassidy)
 * Start of cssom integration (Yonathan)
 * Conversion of tests to nodeunit! (Martin Davis)
 * Added sizzle tests, only failing 3/15
 * Set the title node's textContent rather than its innerHTML #242.  (Andreas Lind Petersen)
 * The textContent getter now walks the DOM and extract the text properly. (Andreas Lind Petersen)
 * Empty scripts won't cause jsdom.env to hang #172 (Karuna Sagar)
 * Every document has either a body or a frameset #82. (Karuna Sagar)
 * Added the ability to grab a level by string + feature. ie: jsdom.level(2, 'html') (Aria Stewart)
 * Cleaned up htmlencoding and fixed character (de)entification #147, #177 (Andreas Lind Petersen)
 * htmlencoding.HTMLDecode: Fixed decoding of `&lt;`, `&gt;`, `&amp;`, and `&apos;`. Closes #147 and #177.
 * Require dom level as a string or object. (Aria Stewart)
 * JS errors ar triggered on the script element, not document. (Yonathan)
 * Added configuration property 'headers' for HTTP request headers. (antonj)
 * Attr.specified is readonly - Karuna Sagar
 * Removed return value from setAttributeNS() #207 (Karuna Sagar)
 * Pass the correct script filename to runInContext. (robin)
 * Add http referrer support for the download() function. (Robin)
 * First attempt at fixing the horrible memory leak via window.stopTimers() (d-ash)
 * Use vm instead of evals binding (d-ash)
 * Add a way to set the encoding of the jsdom.env html request.
 * Fixed various typos/lint problems (d-ash)
 * The first parameter download is now the object returned by URL.parse(). (Robin)
 * Fixed serialization of elements with a style attribute.
 * Added src config option to jsdom.env() (Jerry Sievert)
 * Removed dead code from getNamedItemNS() (Karuna Sagar)
 * Changes to language/javascript so jsdom would work on v0.5.0-pre (Gord Tanner)
 * Correct spelling of "Hierarchy request error" (Daniel Cassidy)
 * Node and Exception type constants are available in all levels. (Daniel Cassidy)
 * Use \n instead of \r\n during serialization
 * Fixed auto-insertion of body/html tags  (Adrian Makowski)
 * Adopt unowned nodes when added to the tree. (Aria Stewart)
 * Fix the selected and defaultSelected fields of `option` element. - Yonathan
 * Fix: EventTarget.getListeners() now returns a shallow copy so that listeners can be safely removed while an event is being dispatched. (Felix Gnass)
 * Added removeEventListener() to DOMWindow (Felix Gnass)
 * Added the ability to pre-load scripts for jsdom.env() (Jerry Sievert)
 * Mutation event tests/fixes (Felix Gnass)
 * Changed HTML serialization code to (optionally) pretty print while traversing the tree instead of doing a regexp-based postprocessing. (Andreas Lind Petersen)
 * Relative and absolute urls now work as expected
 * setNamedItem no longer sets Node.parentNode #153 (Karuna Sagar)
 * Added missing semicolon after entity name - Felix Gnass
 * Added NodeList#indexOf implementation/tests (Karuna Sagar)
 * resourceLoader.download now works correctly with https and redirects (waslogic)
 * Scheme-less URLs default to the current protocol #87 (Alexander Flatter)
 * Simplification the prevSibling(), appendChild(), insertBefore() and replaceChild() code (Karuna Sagar)
 * Javascript errors use core.Node.trigger (Alexander Flatter)
 * Add core.Document.trigger in level1/core and level2/events; Make DOMWindow.console use it (Alexander Flatter)
 * Resource resolver fixes (Alexander Flatter)
 * Fix serialization of doctypes with new lines #148 (Karuna Sagar)
 * Child nodes are calculated immediately instead of after .length is called #169, #171, #176 (Karuna Sagar)

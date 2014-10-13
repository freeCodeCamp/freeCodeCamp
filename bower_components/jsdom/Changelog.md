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

# dom-helpers

tiny modular DOM lib for ie9+

## Install

```sh
npm i -S dom-helpers
```

Mostly just naive wrappers around common DOM API inconsistencies, Cross browser work is minimal and mostly taken from jQuery. This library doesn't do a lot to normalize behavior across browsers, it mostly seeks to provide a common interface, and eliminate the need to write the same damn `if (ie9)` statements in every project.

For example `on()` works in all browsers ie9+ but it uses the native event system so actual event oddities will continue to exist. If you need **robust** cross-browser support, use jQuery. If you are just tired of rewriting:

```js
if (document.addEventListener)
  return (node, eventName, handler, capture) =>
    node.addEventListener(eventName, handler, capture || false)
else if (document.attachEvent)
  return (node, eventName, handler) =>
    node.attachEvent('on' + eventName, handler)
```

over and over again, or you need a ok `getComputedStyle` polyfill but don't want to include all of jQuery, use this.

dom-helpers does expect certain, polyfillable, es5 features to be present for which you can use `es5-shim` where needed

The real advantage to this collection is that any method can be required individually, meaning bundlers like webpack will only include the exact methods you use. This is great for environments where jQuery doesn't make sense, such as `React` where you only occasionally need to do direct DOM manipulation.

All methods are exported as a flat namesapce

```js
var helpers = require('dom-helpers')
var offset = require('dom-helpers/offset')

// style is a function
require('dom-helpers/css')(node, { width: '40px' })
```

- dom-helpers
  - `ownerDocument(element)`: returns the element's document owner
  - `ownerWindow(element)`: returns the element's document window
  - `activeElement`: return focused element safely
  - `querySelectorAll(element, selector)`: optimized qsa, uses `getElementBy{Id|TagName|ClassName}` if it can.
  - `contains(container, element)`
  - `height(element, useClientHeight)`
  - `width(element, useClientWidth)`
  - `matches(element, selector)`
  - `offset(element)` -> `{ top: Number, left: Number, height: Number, width: Number}`
  - `offsetParent(element)`: return the parent node that the element is offset from
  - `position(element, [offsetParent]`: return "offset" of the node to its offsetParent, optionally you can specify the offset parent if different than the "real" one
  - `scrollTop(element, [value])`
  - `scrollLeft(element, [value])`
  - `scrollParent(element)`
  - `addClass(element, className)`
  - `removeClass(element, className)`
  - `hasClass(element, className)`
  - `toggleClass(element, className)`
  - `style(element, propName)` or `style(element, objectOfPropValues)`
  - `getComputedStyle(element)` -> `getPropertyValue(name)`
  - `animate(node, properties, duration, easing, callback)` programmatically start css transitions
  - `transitionEnd(node, handler, [duration], [padding])` listens for transition end, and ensures that the handler if called even if the transition fails to fire its end event. Will attempt to read duration from the element, otherwise one can be provided
  - `addEventListener(node, eventName, handler, [options])`:
  - `removeEventListener(node, eventName, handler, [options])`:
  - `listen(node, eventName, handler, [options])`: wraps `addEventlistener` and returns a function that calls `removeEventListener` for you
  - `filter(selector, fn)`: returns a function handler that only fires when the target matches or is contained in the selector ex: `on(list, 'click', filter('li > a', handler))`
  - `requestAnimationFrame(cb)` returns an ID for canceling
  - `cancelAnimationFrame(id)`
  - `scrollbarSize([recalc])` returns the scrollbar's width size in pixels
  - `scrollTo(element, [scrollParent])`

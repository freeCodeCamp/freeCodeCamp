# next-tick
## Environment agnostic nextTick polyfill

To be used in environment agnostic modules that need nextTick functionality.

- When run in Node.js `process.nextTick` is used
- In modern browsers microtask resolution is guaranteed by `MutationObserver`
- In other engines `setImmediate` or `setTimeout(fn, 0)` is used as fallback.
- If none of the above is supported module resolves to `null`

## Installation
### NPM

In your project path:

	$ npm install next-tick

#### Browser

You can easily bundle `next-tick` for browser with any CJS bundler, e.g. [modules-webmake](https://github.com/medikoo/modules-webmake)

## Tests [![Build Status](https://api.travis-ci.org/medikoo/next-tick.png?branch=master)](https://travis-ci.org/medikoo/next-tick)

	$ npm test

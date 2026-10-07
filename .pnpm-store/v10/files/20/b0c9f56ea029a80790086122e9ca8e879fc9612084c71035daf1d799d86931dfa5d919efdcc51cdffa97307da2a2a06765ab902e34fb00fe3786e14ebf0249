
## 2.0.6

Version 2.0.4 adds support for React Native by clarifying in package.json that
the browser environment does not support Node.js domains.
Why this is necessary, we leave as an exercise for the user.

## 2.0.3

Version 2.0.3 fixes a bug when adjusting the capacity of the task queue.

## 2.0.1-2.02

Version 2.0.1 fixes a bug in the way redirects were expressed that affected the
function of Browserify, but which Mr would tolerate.

## 2.0.0

Version 2 of ASAP is a full rewrite with a few salient changes.
First, the ASAP source is CommonJS only and designed with [Browserify][] and
[Browserify-compatible][Mr] module loaders in mind.

[Browserify]: https://github.com/substack/node-browserify
[Mr]: https://github.com/montagejs/mr

The new version has been refactored in two dimensions.
Support for Node.js and browsers have been separated, using Browserify
redirects and ASAP has been divided into two modules.
The "raw" layer depends on the tasks to catch thrown exceptions and unravel
Node.js domains.

The full implementation of ASAP is loadable as `require("asap")` in both Node.js
and browsers.

The raw layer that lacks exception handling overhead is loadable as
`require("asap/raw")`.
The interface is the same for both layers.

Tasks are no longer required to be functions, but can rather be any object that
implements `task.call()`.
With this feature you can recycle task objects to avoid garbage collector churn
and avoid closures in general.

The implementation has been rigorously documented so that our successors can
understand the scope of the problem that this module solves and all of its
nuances, ensuring that the next generation of implementations know what details
are essential.

-   [asap.js](https://github.com/kriskowal/asap/blob/master/asap.js)
-   [raw.js](https://github.com/kriskowal/asap/blob/master/raw.js)
-   [browser-asap.js](https://github.com/kriskowal/asap/blob/master/browser-asap.js)
-   [browser-raw.js](https://github.com/kriskowal/asap/blob/master/browser-raw.js)

The new version has also been rigorously tested across a broad spectrum of
browsers, in both the window and worker context.
The following charts capture the browser test results for the most recent
release.
The first chart shows test results for ASAP running in the main window context.
The second chart shows test results for ASAP running in a web worker context.
Test results are inconclusive (grey) on browsers that do not support web
workers.
These data are captured automatically by [Continuous
Integration][].

![Browser Compatibility](http://kriskowal-asap.s3-website-us-west-2.amazonaws.com/train/integration-2/saucelabs-results-matrix.svg)

![Compatibility in Web Workers](http://kriskowal-asap.s3-website-us-west-2.amazonaws.com/train/integration-2/saucelabs-worker-results-matrix.svg)

[Continuous Integration]: https://github.com/kriskowal/asap/blob/master/CONTRIBUTING.md


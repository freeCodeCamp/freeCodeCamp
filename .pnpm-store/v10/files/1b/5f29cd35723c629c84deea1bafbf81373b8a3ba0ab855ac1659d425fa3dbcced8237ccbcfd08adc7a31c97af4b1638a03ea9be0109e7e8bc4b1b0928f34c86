## CHANGELOG

### 2.5.2

Default to global (possibly polyfilled) ResizeObserver if the local window does not have ResizeObserver #148

### 2.5.1

Use `ResizeObserver` of local `window` object #147

### 2.5.0

Set `innerRef` before observing [#140](https://github.com/souporserious/react-measure/pull/140)

### 2.4.0

Use the local `window` object of the observed node [#146](https://github.com/souporserious/react-measure/pull/146)

### 2.3.0

Fix regression with `contentRect.bounds` not getting called properly

Note that `onResize` will get called twice when first mounting now

### 2.2.6

Fix initial `onResize` delay caused by `requestAnimationFrame` [#135](https://github.com/souporserious/react-measure/pull/135)

### 2.2.5

Fix sporadic `ResizeObserver` loop limit exceeded error when using `onResize` [#133](https://github.com/souporserious/react-measure/pull/133)

### 2.2.4

Only observe one element, add tests [#130](https://github.com/souporserious/react-measure/pull/130)

### 2.2.3

Fix not passing `ResizeObserver` `entries` to `measure` method [#125](https://github.com/souporserious/react-measure/pull/125)

Add support for `createRef` [#126](https://github.com/souporserious/react-measure/pull/126)

### 2.2.2

Add `@babel/runtime` as a dependency

### 2.2.1

Fix `ResizeObserver` callback error

Fix `eslint` warnings

### 2.2.0

Remove `componentWillMount` for React >16 StrictMode compliance
[#121](https://github.com/souporserious/react-measure/pull/121)

Upgrade `get-node-dimensions` package to `1.2.1`

Upgrade `prop-types` package to `15.6.2`

Fixes `disconnect` being used instead of `unobserve` for `ResizeObserver`

### 2.1.3

Update `resize-observer-polyfill`
[#88](https://github.com/souporserious/react-measure/pull/88)

Added handling when `getComputedStyle` returns `null`
[#89](https://github.com/souporserious/react-measure/pull/89)

Call `setState` within `requestAnimationFrame` to prevent infinite loop
[#118](https://github.com/souporserious/react-measure/pull/118)

### 2.1.2

Move children propType from with-content-rect to Measure
[#117](https://github.com/souporserious/react-measure/pull/117)

### 2.1.1

Allow children to be any element
[#78](https://github.com/souporserious/react-measure/pull/78)

### 2.1.0

Disconnect and de-initialize resize observer on unmount
[#112](https://github.com/souporserious/react-measure/pull/112)

Remove `babel-plugin-add-module-exports`

### 2.0.2

Disconnect correct node within `handleRef`
[#51](https://github.com/souporserious/react-measure/pull/51)

### 2.0.1

Observe and disconnect ResizeObserver in ref callback

### 2.0.0

Complete rewrite. Check README for new docs.

Most transitions from the old API should be easy. You just need to pass a ref
callback down now. If you have any issues please feel free to file an issue.

### 1.4.7

Update to use separate prop-types package as per React 15.5 deprecation
[#43](https://github.com/souporserious/react-measure/pull/43#pullrequestreview-32216767)

### 1.4.6

Update to `resize-observer-polyfill` 1.4.1

### 1.4.5

Update to `resize-observer-polyfill` 1.3.1 to fix Webpack 2 issues
[#29](https://github.com/souporserious/react-measure/issues/29)

Remove monkey patch for importing `resize-observer-polyfill`

### 1.4.4

Use ResizeObserver.default if available. This fixes older browsers in the local
dev environment.

### 1.4.3

Requiring default export of `resize-observer-polyfill`
[#28](https://github.com/souporserious/react-measure/pull/28)

### 1.4.2

Only require ResizeObserver polyfill when window is available

### 1.4.1

Cleanup old element-resize-detector code
[#23](https://github.com/souporserious/react-measure/pull/23)

### 1.4.0

Moved away from element-resize-detector in favor of
[resize-observer-polyfill](https://github.com/que-etc/resize-observer-polyfill)
🎉

### 1.3.1

Fixes exception when changing key of rendered child
[#19](https://github.com/souporserious/react-measure/issues/19)

### 1.3.0

Update get-node-dimensions to 1.2.0

Use `includeMargin` to account for margins when calculating dimensions now

### 1.2.2

Fix dist build

### 1.2.1

Ensure `setState` is not called after unmounting
[#18](https://github.com/souporserious/react-measure/pull/18)

### 1.2.0

Provide dimension defaults

### 1.1.0

Update get-node-dimensions to 1.1.0

### 1.0.0

Update get-node-dimensions to 1.0.0

`accurate` renamed to `useClone`

Added `cloneOptions` prop that gets passed to `getNodeDimensions`

Fixed build to not include `get-node-dimensions` library

Removed bower support

### 0.5.1

Use properties instead of constructor

When unmounting, call uninstall in addition to removeAllListeners
[#15](https://github.com/souporserious/react-measure/pull/15)

### 0.5.0

Moved dimension calculations to its own library

Cleaned up build files for NPMCDN

### 0.4.2

Removed old code from `lib` folder

Make sure `package.json` cleans `lib` folder on each build

### 0.4.1

Fixed dist build

Updated to latest element-resize-detector

### 0.4.0

Moved away from MutationObserver's in favor of
[element-resize-detector](https://github.com/wnr/element-resize-detector)

Added a more convenient API by allowing child functions
[#11](https://github.com/souporserious/react-measure/issues/11)

`measure` is now a public method available on the Measure component

`accurate` prop now returns both cloned element width and height

`shouldMeasure` now accepts only a boolean

Removed `lodash.debounce` dependency

### 0.3.5

Fixed bug in IE with accurate height calculation when checking for children
nodes.

Fixed
[deprecation notice](https://www.chromestatus.com/features/5724912467574784)
when calculating SVG dimensions.

Removed `react-addons-shallow-compare` dependency.

Moved `react` and `react-dom` packages into peer dependencies.

### 0.3.4

Fix server-side rendering

### 0.3.3

Added public method `getDimensions`

Clone nodes without any children

Fixed calculating measurements on resize

### 0.3.2

Patch to fix `shallowCompare` so bower works.

Added a resize handler to measure component changes on window resize.

### 0.3.1

Renamed `onChange` prop to `onMeasure`

Added `shouldMeasure` prop, similar to componentShouldUpdate. It determines
whether or not the `onMeasure` callback will fire, useful for perf and not
performing measurements if you don't need to.

Fixed updating of `config` prop to disconnect and reconnect a new
MutationObserver with the new configuration

Fixed updaing of `whitelist` & `blacklist` props to use new values

### 0.3.0

Rebuilt from the ground up

No more cloning of elements!

Optimized to touch the DOM as least as possible

`clone`, `forceAutoHeight`, `collection` props removed

`config` prop added, accepts a
[MutationObserver](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver#MutationObserverInit)
configuration

`accurate` prop added, use to get an accurate measurement, only height supported
right now

### 0.2.0

Upgraded to React 0.14.0

### 0.1.3

Added `forceAutoHeight` prop to help with proper height calculation when
children heights are animating

### 0.1.2

Clone prop now exposed to allow optional cloning of component

Defaults to false which could potentially break components relying on cloned
calculations

### 0.1.1

Set width/height to auto on clone no matter what to get a true dimension

Append clone directly after original instead of the end of its parent

Portal now gets destroyed after measurements have been calculated

### 0.1.0

Rewritten to be more React friendly

Measure component no longer accepts a child function, instead get dimensions by
setting state in onChange callback

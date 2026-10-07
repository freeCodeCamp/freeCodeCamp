ResizeObserver Polyfill
=============

[![Build Status][travis-image]][travis-url]


A polyfill for the Resize Observer API.

Implementation is based on the MutationObserver and uses Mutation Events as a fall back if the first one is not supported, so there will be no polling unless DOM changes. Doesn't modify observed elements. Handles CSS transitions/animations and can possibly observe changes caused by dynamic CSS pseudo-classes, e.g. by `:hover`.

Follows the [spec](http://rawgit.com/WICG/ResizeObserver/master/index.html) and the native implementation. The size is _2.44 KiB_ when minified and gzipped.

[Live demo](http://que-etc.github.io/resize-observer-polyfill) (has style problems in IE10 and lower).

## Installation

From NPM:

```sh
npm install resize-observer-polyfill --save-dev
```

~~From Bower:~~ (will be removed with the next major release)

```sh
bower install resize-observer-polyfill --save-dev
```


## Browser Support

Polyfill has been tested in the following browsers:

[![Build Status](https://saucelabs.com/browser-matrix/que-etc.svg)](https://saucelabs.com/beta/builds/303f5344a7214ba5b62bc7079a15d376)

**NOTE:** Internet Explorer 8 and its earlier versions are not supported.

## Usage Example

It's recommended to use this library in the form of a [ponyfill](https://github.com/sindresorhus/ponyfill), which doesn't inflict modifications of the global object.

```javascript
import ResizeObserver from 'resize-observer-polyfill';

const ro = new ResizeObserver((entries, observer) => {
    for (const entry of entries) {
        const {left, top, width, height} = entry.contentRect;

        console.log('Element:', entry.target);
        console.log(`Element's size: ${ width }px x ${ height }px`);
        console.log(`Element's paddings: ${ top }px ; ${ left }px`);
    }
});

ro.observe(document.body);
```

Package's main file is a ES5 [UMD](https://github.com/umdjs/umd) bundle that will be swapped with the ES6 modules version for those bundlers that are aware of the [module](https://github.com/rollup/rollup/wiki/pkg.module) field, e.g. for [Rollup](https://github.com/rollup/rollup) or webpack 2+.

**Note**: global version of the polyfill (`dist/ResizeObserver.global`) is deprecated and will be removed in the next major release.

## Observation Strategy

As mentioned above, this implementation primarily (but not solely) relies on Mutation Observer with a fallback to Mutation Events for IE 9 and IE 10.

Speaking of Mutation Events as a fallback approach: they might not be as ugly as they are being rendered, particularly when their calls are batched, throttled and there is no need to analyze changes. Given that, they won't interrupt browser's reflow/repaint cycles (same for MutationObserver) and may even outperform Internet Explorer's implementation of MO causing little to no performance degradation. In contemporary browsers (Chrome, Firefox, etc.) Mutation Observer slows down [the suite](https://jsfiddle.net/que_etc/gaqLe8rn/) that includes 200 iterations of adding/removing elements, changing attributes and modifying text data by less than 1%. Internet Explorer gives different results with MO slowing down the same suite by 2-3% while Mutation Events show the difference of ~0.6%.

As for the reasons why other approaches, namely the iframe/object and `scroll` strategies, were ruled out:
* They require the observed element to be non-statically positioned.
* You can't apply them directly to quite a number of elements: `<img>`, `<input>`, `<textarea>`, `<canvas>`, `<tr>`, `<tbody>`, `<thead>`, `<table>`, etc. For most of them you would need to keep an extra `<div>` wrapper and almost all instances of the SVGGraphicsElement will be out of scope.
* The ResizeObserver spec requires to deliver notifications when a non-empty visible element becomes hidden, i.e. when either this element directly or one of its parent nodes receive the `display: none` state. Same goes for when it's being removed from or added to the DOM. It's not possible to handle these cases merely by using former approaches, so you'd still need to either subscribe for DOM mutations or to continuously check the element's state.

And though every approach has its own limitations, I reckon that it'd be too much of a trade-off to have those constraints when building a polyfill.

## Limitations

* Notifications are delivered ~20ms after actual changes happen.
* Changes caused by dynamic pseudo-classes, e.g. `:hover` and `:focus`, are not tracked. As a workaround you could add a short transition which would trigger the `transitionend` event when an element receives one of the former classes ([example](https://jsfiddle.net/que_etc/7fudzqng/)).
* Delayed transitions will receive only one notification with the latest dimensions of an element.

## Building and Testing

To build polyfill. Creates UMD bundle in the `dist` folder:

```sh
npm run build
```

To run a code style test:
```sh
npm run test:lint
```

Running unit tests:
```sh
npm run test:spec
```

To test in a browser that is not present in karma's config file:
```sh
npm run test:spec:custom
```

Testing against a native implementation:
```sh
npm run test:spec:native
```

**NOTE:** after you invoke `spec:native` and `spec:custom` commands head to the `http://localhost:9876/debug.html` page.

[travis-image]: https://travis-ci.org/que-etc/resize-observer-polyfill.svg?branch=master
[travis-url]: https://travis-ci.org/que-etc/resize-observer-polyfill

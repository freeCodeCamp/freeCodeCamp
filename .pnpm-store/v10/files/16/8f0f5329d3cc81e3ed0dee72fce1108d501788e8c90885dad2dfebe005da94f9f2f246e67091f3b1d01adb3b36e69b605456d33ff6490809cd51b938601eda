bezier-easing [![Build Status](https://travis-ci.org/gre/bezier-easing.png)](https://travis-ci.org/gre/bezier-easing)
===

BezierEasing provides **Cubic Bezier** Curve easing which generalizes easing functions (ease-in, ease-out, ease-in-out, ...any other custom curve) exactly like in CSS Transitions.

Implementing efficient lookup is not easy because it implies projecting
the X coordinate to a Bezier Curve.
This micro library uses fast heuristics (involving dichotomic search, newton-raphson, sampling) to focus on **performance** and **precision**.

> It is heavily based on implementations available in Firefox and Chrome (for the CSS transition-timing-function property).

Usage
-------

```javascript
var easing = BezierEasing(0, 0, 1, 0.5);
// easing allows to project x in [0.0,1.0] range onto the bezier-curve defined by the 4 points (see schema below).
console.log(easing(0.0)); // 0.0
console.log(easing(0.5)); // 0.3125
console.log(easing(1.0)); // 1.0
```

(this schema is from the CSS spec)

[![TimingFunction.png](https://www.w3.org/TR/css-timing-1/cubic-bezier-timing-curve.svg)](http://www.w3.org/TR/css3-transitions/#transition-timing-function-property)

> `BezierEasing(P1.x, P1.y, P2.x, P2.y)`

Install
-------

[![npm install bezier-easing](https://nodei.co/npm/bezier-easing.png)](http://npmjs.org/package/bezier-easing)

It is the equivalent to [CSS Transitions' `transition-timing-function`](http://www.w3.org/TR/css3-transitions/#transition-timing-function-property).


In the same way you can define in CSS `cubic-bezier(0.42, 0, 0.58, 1)`,
with BezierEasing, you can define it using `BezierEasing(0.42, 0, 0.58, 1)` which have the `` function taking an X and computing the Y interpolated easing value (see schema).

License
-------

MIT License.

Tests
---

[![Build Status](https://travis-ci.org/gre/bezier-easing.png)](https://travis-ci.org/gre/bezier-easing)

```
npm test
```

See also
===

- [https://github.com/gre/bezier-easing-editor/](https://github.com/gre/bezier-easing-editor/)

Who use it?
===

- [React Native](https://github.com/facebook/react-native/blob/master/Libraries/Animated/src/bezier.js)
- [Apple®](http://images.apple.com/v/mac-pro/home/b/scripts/overview.js) :)
- [Velocity.js](https://github.com/julianshapiro/velocity)
- [GLSL.io](http://glsl.io/) and [Diaporama Maker](https://github.com/gre/diaporama-maker)
- [ipo](https://github.com/gre/ipo)

More informations
-----------------

Implementation based on this [article](http://greweb.me/2012/02/bezier-curve-based-easing-functions-from-concept-to-implementation/).

Contributing
------------

You need a `node` installed.

Install the deps:

```
npm install
```

The library is in `index.js`.

Ensure any modication will:
- keep validating the tests (run `npm test`)
- not bring performance regression (compare with `npm run benchmark` – don't rely 100% on its precision but it still helps to notice big gaps)
- Run the visual example: `npm run visual`

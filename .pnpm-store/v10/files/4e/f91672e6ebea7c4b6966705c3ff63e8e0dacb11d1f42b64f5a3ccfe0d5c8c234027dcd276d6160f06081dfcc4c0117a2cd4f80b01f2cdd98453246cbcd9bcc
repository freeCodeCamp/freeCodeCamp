![logo](https://user-images.githubusercontent.com/2213682/146607186-8e13ddef-26a4-4ebf-befd-5aac9d77c090.png)

<div align="center">

[![fundraising](https://opencollective.com/core-js/all/badge.svg?label=fundraising)](https://opencollective.com/core-js) [![PRs welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/zloirock/core-js/blob/master/CONTRIBUTING.md) [![version](https://img.shields.io/npm/v/core-js-pure.svg)](https://www.npmjs.com/package/core-js-pure) [![core-js-pure downloads](https://img.shields.io/npm/dm/core-js-pure.svg?label=npm%20i%20core-js-pure)](https://npm-stat.com/charts.html?package=core-js&package=core-js-pure&package=core-js-compat&from=2014-11-18)

</div>

**I highly recommend reading this: [So, what's next?](https://github.com/zloirock/core-js/blob/master/docs/2023-02-14-so-whats-next.md)**
---

> Modular standard library for JavaScript. Includes polyfills for [ECMAScript up to 2025](https://github.com/zloirock/core-js#ecmascript): [promises](https://github.com/zloirock/core-js#ecmascript-promise), [symbols](https://github.com/zloirock/core-js#ecmascript-symbol), [collections](https://github.com/zloirock/core-js#ecmascript-collections), iterators, [typed arrays](https://github.com/zloirock/core-js#ecmascript-typed-arrays), many other features, [ECMAScript proposals](https://github.com/zloirock/core-js#ecmascript-proposals), [some cross-platform WHATWG / W3C features and proposals](#web-standards) like [`URL`](https://github.com/zloirock/core-js#url-and-urlsearchparams). You can load only required features or use it without global namespace pollution.

## Raising funds

`core-js` isn't backed by a company, so the future of this project depends on you. Become a sponsor or a backer if you are interested in `core-js`: [**Open Collective**](https://opencollective.com/core-js), [**Patreon**](https://patreon.com/zloirock), [**Boosty**](https://boosty.to/zloirock), **Bitcoin ( bc1qlea7544qtsmj2rayg0lthvza9fau63ux0fstcz )**, [**Alipay**](https://user-images.githubusercontent.com/2213682/219464783-c17ad329-17ce-4795-82a7-f609493345ed.png).

---

<a href="https://opencollective.com/core-js/sponsor/0/website" target="_blank"><img src="https://opencollective.com/core-js/sponsor/0/avatar.svg"></a><a href="https://opencollective.com/core-js/sponsor/1/website" target="_blank"><img src="https://opencollective.com/core-js/sponsor/1/avatar.svg"></a><a href="https://opencollective.com/core-js/sponsor/2/website" target="_blank"><img src="https://opencollective.com/core-js/sponsor/2/avatar.svg"></a><a href="https://opencollective.com/core-js/sponsor/3/website" target="_blank"><img src="https://opencollective.com/core-js/sponsor/3/avatar.svg"></a><a href="https://opencollective.com/core-js/sponsor/4/website" target="_blank"><img src="https://opencollective.com/core-js/sponsor/4/avatar.svg"></a><a href="https://opencollective.com/core-js/sponsor/5/website" target="_blank"><img src="https://opencollective.com/core-js/sponsor/5/avatar.svg"></a><a href="https://opencollective.com/core-js/sponsor/6/website" target="_blank"><img src="https://opencollective.com/core-js/sponsor/6/avatar.svg"></a><a href="https://opencollective.com/core-js/sponsor/7/website" target="_blank"><img src="https://opencollective.com/core-js/sponsor/7/avatar.svg"></a><a href="https://opencollective.com/core-js/sponsor/8/website" target="_blank"><img src="https://opencollective.com/core-js/sponsor/8/avatar.svg"></a><a href="https://opencollective.com/core-js/sponsor/9/website" target="_blank"><img src="https://opencollective.com/core-js/sponsor/9/avatar.svg"></a><a href="https://opencollective.com/core-js/sponsor/10/website" target="_blank"><img src="https://opencollective.com/core-js/sponsor/10/avatar.svg"></a><a href="https://opencollective.com/core-js/sponsor/11/website" target="_blank"><img src="https://opencollective.com/core-js/sponsor/11/avatar.svg"></a>

---

<a href="https://opencollective.com/core-js#backers" target="_blank"><img src="https://opencollective.com/core-js/backers.svg?width=890"></a>

---

[*Example of usage*](https://tinyurl.com/28zqjbun):
```js
import 'core-js/actual';

Promise.try(() => 42).then(it => console.log(it)); // => 42

Array.from(new Set([1, 2, 3]).union(new Set([3, 4, 5]))); // => [1, 2, 3, 4, 5]

[1, 2].flatMap(it => [it, it]); // => [1, 1, 2, 2]

Iterator.concat([1, 2], function * (i) { while (true) yield i++; }(3))
  .drop(1).take(5)
  .filter(it => it % 2)
  .map(it => it ** 2)
  .toArray(); // => [9, 25]

structuredClone(new Set([1, 2, 3])); // => new Set([1, 2, 3])
```

*You can load only required features*:
```js
import 'core-js/actual/promise';
import 'core-js/actual/set';
import 'core-js/actual/iterator';
import 'core-js/actual/array/from';
import 'core-js/actual/array/flat-map';
import 'core-js/actual/structured-clone';

Promise.try(() => 42).then(it => console.log(it)); // => 42

Array.from(new Set([1, 2, 3]).union(new Set([3, 4, 5]))); // => [1, 2, 3, 4, 5]

[1, 2].flatMap(it => [it, it]); // => [1, 1, 2, 2]

Iterator.concat([1, 2], function * (i) { while (true) yield i++; }(3))
  .drop(1).take(5)
  .filter(it => it % 2)
  .map(it => it ** 2)
  .toArray(); // => [9, 25]

structuredClone(new Set([1, 2, 3])); // => new Set([1, 2, 3])
```

*Or use it without global namespace pollution*:
```js
import Promise from 'core-js-pure/actual/promise';
import Set from 'core-js-pure/actual/set';
import Iterator from 'core-js-pure/actual/iterator';
import from from 'core-js-pure/actual/array/from';
import flatMap from 'core-js-pure/actual/array/flat-map';
import structuredClone from 'core-js-pure/actual/structured-clone';

Promise.try(() => 42).then(it => console.log(it)); // => 42

from(new Set([1, 2, 3]).union(new Set([3, 4, 5]))); // => [1, 2, 3, 4, 5]

flatMap([1, 2], it => [it, it]); // => [1, 1, 2, 2]

Iterator.concat([1, 2], function * (i) { while (true) yield i++; }(3))
  .drop(1).take(5)
  .filter(it => it % 2)
  .map(it => it ** 2)
  .toArray(); // => [9, 25]

structuredClone(new Set([1, 2, 3])); // => new Set([1, 2, 3])
```

**It's a version without global namespace pollution (the third example), for more info see [`core-js` documentation](https://github.com/zloirock/core-js/blob/master/README.md)**.

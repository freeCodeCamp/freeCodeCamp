# w3c-hr-time

This module implements the W3C [High Resolution Time Level 2][HR-TIME] specification. It provides exactly three exports:

- `Performance` class
- `getGlobalMonotonicClockMS(): number`
- `clockIsAccurate: boolean`

In all APIs, a "high-resolution timestamp" means a number in milliseconds that may have a fractional part, if the system clock is accurate enough (see "Clock accuracy" section below). It is identical to the [`DOMHighResTimeStamp`][] type in the High Resolution Time spec.

Portability is paramount to this module. It uses only APIs exposed from Node.js core like `Date.now()` and `process.hrtime()` and does not use or require any native modules. It also employs the [browser-process-hrtime][] module for graceful degrades for platforms that do not have `process.hrtime()` (such as browsers).

## `Performance` class

```js
const { Performance } = require("w3c-hr-time");
const performance = new Performance();

console.log(performance.timeOrigin);
// Prints a number close to Date.now() but that may have fractional parts, like
// 1514888563819.351.

console.log(new Date(performance.timeOrigin));
// Prints a date close to new Date(), like 2018-01-02T10:22:43.819Z.

setTimeout(() => {
  console.log(performance.now());
  // Prints a number close to 5000, like 5008.023059.
}, 5000);
```

Perhaps the most interesting export is the [`Performance`][] class. By constructing the class, you can get an instance quite similar to the `window.performance` object in browsers. Specifically, the following APIs are implemented:

* [`performance.now(): number`][`Performance#now()`] returns the high-resolution duration since the construction of the `Performance` object.
* [`performance.timeOrigin: number`][`Performance#timeOrigin`] is a high-resolution timestamp of the `Performance` object's construction, expressed in [Unix time][].
* [`performance.toJSON(): object`][`Performance#toJSON()`] returns an object with `timeOrigin` property set to the corresponding value of this object. This allows serializing the `Performance` object with `JSON.stringify()`. In browsers, the returned object may contain additional properties such as `navigation` and `timing`. However, those properties are specific to browser navigation and are unsuitable for a Node.js implementation. Furthermore, they are specified not in the High Resolution Time spec but in [Navigation Timing][NAVIGATION-TIMING], and are thereby outside the scope of this module.

### Limitations

This module does not aim for full [Web IDL][WEBIDL] conformance, so things like `performance.toJSON.call({})` will not throw `TypeError`s like it does in browsers. If you need full Web IDL conformance, you may be interested in the [webidl2js][] module.

The `Performance` class provided also does not have `mark()`, `measure()`, `getEntries()`, and such functions. They are specified in other specs than High Resolution Timing, such as [User Timing][USER-TIMING] (marks and measures) and [Performance Timeline][PERFORMANCE-TIMELINE] (entries management). Those specs extend the definition of the `Performance` class defined in High Resolution Timing, and to implement those specs you can extend the `Performance` class exported by this module.

Due to the limitations of the APIs exposed through Node.js, the construction of a `Performance` object may take up to 1 millisecond to gather information for high-resolution `timeOrigin`.

## Global monotonic clock

The High Resolution Time spec defines a [global monotonic clock][] that is "shared by time origin's *[sic]*, is monotonically increasing and not subject to system clock adjustments or system clock skew, and whose reference point is the Unix time."

This module exports a function `getGlobalMonotonicClockMS()` that is the basis of all timing functions used my this module when a monotonic time is required. It returns a high-resolution timestamp whose zero value is at some arbitrary point in the past. (For the current high-resolution timestamp based on the Unix epoch, use `new Performance().timeOrigin` instead.)

```js
const { getGlobalMonotonicClockMS } = require("w3c-hr-time");

const start = getGlobalMonotonicClockMS();
console.log(start);
// Prints a millisecond timestamp based on an arbitrary point in the past, like
// 280249733.012151.

setTimeout(() => {
  console.log(getGlobalMonotonicClockMS() - a);
  // Prints a number close to 5000, like 5006.156536.
}, 5000);
```

Unlike other functions that return only integer timestamps if the system clock does not provide enough resolution, this function may still return timestamps with fractional parts on those systems with less accurate clocks. See "Clock accuracy" section below for more information.

## Clock accuracy

The High Resolution Time spec [states][HR-TIME §4] that

> A [`DOMHighResTimeStamp`][] *SHOULD* represent a time in milliseconds accurate to 5 microseconds - see [8. Privacy and Security][HR-TIME §8].
>
> If the User Agent is unable to provide a time value accurate to 5 microseconds due to hardware or software constraints, the User Agent can represent a [`DOMHighResTimeStamp`][] as a time in milliseconds accurate to a millisecond.

This module implements this suggestion faithfully. It executes a test at `require()`-time to determine if the system clock (both `Date.now()` and `process.hrtime()`) is accurate enough to 5 microseconds. The result of this test can be accessed through the exported `clockIsAccurate` boolean value.

```js
const { Performance, clockIsAccurate } = require("w3c-hr-time");

const performance = new Performance();

if (!clockIsAccurate) {
  console.assert(Number.isInteger(performance.timeOrigin));
  console.assert(Number.isInteger(performance.now()));
}
```

If `clockIsAccurate` is false, `performance.timeOrigin` and `performance.now()` are always rounded to millisecond accuracy. `getGlobalMonotonicClockMS()` however is exempt from this requirement due to its best-effort nature, and the fact that it is not an API exposed by the High Resolution Time spec.

## Clock drift

[Clock drift][clock drift] can be observed through system or user clock adjustments -- that is, the speed at which `Date.now()` changes may be faster or slower than real time if there is a pending adjustment to the system clock, for example through NTP synchronizing.

In the spec, the [global monotonic clock][] is defined to be immune to such drifts. Correspondingly, the APIs exposed through this module that are defined using the global monotonic clock such as `performance.now()` and `getGlobalMonotonicClockMS()` are also guaranteed to reflect real time.

For example, if `performance.now()` returns 1000, it is guaranteed that the time of this call is exactly one second since the construction of the `Performance` object. But the difference in `Date.now()`'s value from the construction of the `Performance` object to when `performance.now()` returns 1000 may not be exactly 1000. You may also see `performance.now() - Date.now()` diverge over time as a result of clock drifts.

On the other hand, `performance.timeOrigin` returns the *[Unix time][]* at which the `Performance` object is constructed and relies on the current time exposed through `Date.now()`. That means that it is susceptible to clock drifts that has occurred before the `Performance` object was constructed.

## Supporting w3c-hr-time

The jsdom project (including w3c-hr-time) is a community-driven project maintained by a team of [volunteers](https://github.com/orgs/jsdom/people). You could support us by:

- [Getting professional support for w3c-hr-time](https://tidelift.com/subscription/pkg/npm-w3c-hr-time?utm_source=npm-w3c-hr-time&utm_medium=referral&utm_campaign=readme) as part of a Tidelift subscription. Tidelift helps making open source sustainable for us while giving teams assurances for maintenance, licensing, and security.
- Contributing directly to the project.

## License

This software is licensed under the MIT license. See LICENSE.md file for more detail.

[HR-TIME]: https://w3c.github.io/hr-time/
[NAVIGATION-TIMING]: https://w3c.github.io/navigation-timing/
[PERFORMANCE-TIMELINE]: https://w3c.github.io/performance-timeline/
[USER-TIMING]: https://w3c.github.io/user-timing/
[WEBIDL]: https://heycam.github.io/webidl/

[HR-TIME §4]: https://w3c.github.io/hr-time/#dom-domhighrestimestamp
[HR-TIME §8]: https://w3c.github.io/hr-time/#privacy-security

[`DOMHighResTimeStamp`]: https://w3c.github.io/hr-time/#dom-domhighrestimestamp
[`Performance`]: https://w3c.github.io/hr-time/#dfn-performance
[`Performance#now()`]: https://w3c.github.io/hr-time/#dom-performance-now
[`Performance#timeOrigin`]: https://w3c.github.io/hr-time/#dom-performance-timeorigin
[`Performance#toJSON()`]: https://w3c.github.io/hr-time/#dom-performance-tojson
[browser-process-hrtime]: https://www.npmjs.com/package/browser-process-hrtime
[clock drift]: https://en.wikipedia.org/wiki/Clock_drift
[global monotonic clock]: https://w3c.github.io/hr-time/#dfn-global-monotonic-clock
[Unix time]: https://en.wikipedia.org/wiki/Unix_time
[webidl2js]: https://github.com/jsdom/webidl2js

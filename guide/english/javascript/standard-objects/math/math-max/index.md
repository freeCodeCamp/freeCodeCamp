---
title: Math Max
---

## Math Max

`Math.max()` is a function that returns the largest value from a list of numeric values passed as parameters. If a non-numeric value is passed as a parameter, `Math.max()` will return `NaN`.

An array of numeric values can be passed as a single parameter to `Math.max()` using either `spread (...)` or `apply`. Either of these methods can, however, fail when the amount of array values gets too high.

### Syntax

```js
Math.max(value1, value2, value3, ...);
```

### Parameters

Numbers, or limited array of numbers.

### Return Value

The greatest of given numeric values, or `NaN` if any given value is non-numeric.

### Examples

_Numbers As Parameters_

```js
Math.max(4, 13, 27, 0, -5); // returns 27
```

_Invalid Parameter_

```js
Math.max(4, 13, 27, 'eight', -5); // returns NaN
```

_Array As Parameter, Using Spread(...)_

```js
let numbers = [4, 13, 27, 0, -5];

Math.max(...numbers); // returns 27
```

_Array As Parameter, Using Apply_

```js
let numbers = [4, 13, 27, 0, -5];

Math.max.apply(null, numbers); // returns 27
```

#### More Information:
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max">MDN</a>


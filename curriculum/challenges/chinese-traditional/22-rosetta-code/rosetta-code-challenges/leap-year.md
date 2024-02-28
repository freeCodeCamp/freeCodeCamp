---
id: 5a23c84252665b21eecc7ede
title: 閏年
challengeType: 1
forumTopicId: 302300
dashedName: leap-year
---

# --description--

Determine whether a given year is a leap year in the Gregorian calendar.

# --hints--

`isLeapYear` 應該是一個函數。

```js
assert(typeof isLeapYear == 'function');
```

`isLeapYear()` 應該返回一個布爾值。

```js
assert(typeof isLeapYear(2018) == 'boolean');
```

`isLeapYear(2018)` 應該返回 `false`。

```js
assert.equal(isLeapYear(2018), false);
```

`isLeapYear(2016)` 應該返回 `true`。

```js
assert.equal(isLeapYear(2016), true);
```

`isLeapYear(2000)` 應該返回 `true`。

```js
assert.equal(isLeapYear(2000), true);
```

`isLeapYear(1900)` 應該返回 `false`。

```js
assert.equal(isLeapYear(1900), false);
```

`isLeapYear(1996)` 應該返回 `true`。

```js
assert.equal(isLeapYear(1996), true);
```

`isLeapYear(1800)` 應該返回 `false`。

```js
assert.equal(isLeapYear(1800), false);
```

# --seed--

## --seed-contents--

```js
function isLeapYear(year) {

}
```

# --solutions--

```js
function isLeapYear(year) {
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}
```

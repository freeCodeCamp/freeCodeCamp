---
id: 5a23c84252665b21eecc7ede
title: Високосний рік
challengeType: 1
forumTopicId: 302300
dashedName: leap-year
---

# --description--

Визначте, чи даний рік є високосним роком в григоріанському календарі.

# --hints--

`isLeapYear` має бути функцією.

```js
assert(typeof isLeapYear == 'function');
```

`isLeapYear()` має повернути булеве значення.

```js
assert(typeof isLeapYear(2018) == 'boolean');
```

`isLeapYear(2018)` має повернути `false`.

```js
assert.equal(isLeapYear(2018), false);
```

`isLeapYear(2016)` має повернути `true`.

```js
assert.equal(isLeapYear(2016), true);
```

`isLeapYear(2000)` має повернути `true`.

```js
assert.equal(isLeapYear(2000), true);
```

`isLeapYear(1900)` має повернути `false`.

```js
assert.equal(isLeapYear(1900), false);
```

`isLeapYear(1996)` має повернути `true`.

```js
assert.equal(isLeapYear(1996), true);
```

`isLeapYear(1800)` має повернути `false`.

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

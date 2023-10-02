---
id: 5a23c84252665b21eecc7ede
title: Високосний рік
challengeType: 1
forumTopicId: 302300
dashedName: leap-year
---

# --description--

Визначте, чи конкретний рік є високосним роком у григоріанському календарі.

# --hints--

`isLeapYear` має бути функцією.

```js
assert(typeof isLeapYear == 'function');
```

`isLeapYear()` повинен повертати логічний тип.

```js
assert(typeof isLeapYear(2018) == 'boolean');
```

`isLeapYear(2018)` повинен повернути `false`.

```js
assert.equal(isLeapYear(2018), false);
```

`isLeapYear(2016)` повинен повернути `true`.

```js
assert.equal(isLeapYear(2016), true);
```

`isLeapYear(2000)` повинен повернути `true`.

```js
assert.equal(isLeapYear(2000), true);
```

`isLeapYear(1900)` повинен повернути `false`.

```js
assert.equal(isLeapYear(1900), false);
```

`isLeapYear(1996)` повинен повернути `true`.

```js
assert.equal(isLeapYear(1996), true);
```

`isLeapYear(1800)` повинен повернути `false`.

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

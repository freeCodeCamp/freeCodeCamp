---
id: 5a23c84252665b21eecc7ede
title: うるう年
challengeType: 1
forumTopicId: 302300
dashedName: leap-year
---

# --description--

指定された年がグレゴリオ暦のうるう年かどうかを判断します。

# --hints--

`isLeapYear` は関数とします。

```js
assert(typeof isLeapYear == 'function');
```

`isLeapYear()` はブール値を返す必要があります。

```js
assert(typeof isLeapYear(2018) == 'boolean');
```

`isLeapYear(2018)` は `false` を返す必要があります。

```js
assert.equal(isLeapYear(2018), false);
```

`isLeapYear(2016)` は `true` を返す必要があります。

```js
assert.equal(isLeapYear(2016), true);
```

`isLeapYear(2000)` は `true` を返す必要があります。

```js
assert.equal(isLeapYear(2000), true);
```

`isLeapYear(1900)` は `false` を返す必要があります。

```js
assert.equal(isLeapYear(1900), false);
```

`isLeapYear(1996)` は `true` を返す必要があります。

```js
assert.equal(isLeapYear(1996), true);
```

`isLeapYear(1800)` が `false` を返す必要があります。

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

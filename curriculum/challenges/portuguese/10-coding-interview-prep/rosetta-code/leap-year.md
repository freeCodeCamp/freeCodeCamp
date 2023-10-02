---
id: 5a23c84252665b21eecc7ede
title: Ano bissexto
challengeType: 1
forumTopicId: 302300
dashedName: leap-year
---

# --description--

Determine se o ano fornecido é um ano bissexto no calendário Gregoriano.

# --hints--

`isLeapYear` deve ser uma função.

```js
assert(typeof isLeapYear == 'function');
```

`isLeapYear()` deve retornar um booleano.

```js
assert(typeof isLeapYear(2018) == 'boolean');
```

`isLeapYear(2018)` deve retornar `false`.

```js
assert.equal(isLeapYear(2018), false);
```

`isLeapYear(2016)` deve retornar `true`.

```js
assert.equal(isLeapYear(2016), true);
```

`isLeapYear(2000)` deve retornar `true`.

```js
assert.equal(isLeapYear(2000), true);
```

`isLeapYear(1900)` deve retornar `false`.

```js
assert.equal(isLeapYear(1900), false);
```

`isLeapYear(1996)` deve retornar `true`.

```js
assert.equal(isLeapYear(1996), true);
```

`isLeapYear(1800)` deve retornar `false`.

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

---
id: 594810f028c0303b75339ad1
title: 快樂的數字
challengeType: 1
forumTopicId: 302280
dashedName: happy-numbers
---

# --description--

A happy number is defined by the following process:

從任何正整數開始，用其數字的平方和替換該數字，並重復該過程直到該數字等於 `1`（它將停留的位置），否則它會無限循環不包括 `1`。 此過程以 `1` 結尾的數字是快樂數字，而不以 `1` 結尾的數字是不快樂數字。

# --instructions--

實現一個函數，如果數字快樂則返回 true，否則返回 false。

# --hints--

`happy` 應該是一個函數。

```js
assert(typeof happy === 'function');
```

`happy(1)` 應該返回一個布爾值。

```js
assert(typeof happy(1) === 'boolean');
```

`happy(1)` 應該返回 `true`。

```js
assert(happy(1));
```

`happy(2)` 應該返回 `false`。

```js
assert(!happy(2));
```

`happy(7)` 應該返回 `true`。

```js
assert(happy(7));
```

`happy(10)` 應該返回 `true`。

```js
assert(happy(10));
```

`happy(13)` 應該返回 `true`。

```js
assert(happy(13));
```

`happy(19)` 應該返回 `true`。

```js
assert(happy(19));
```

`happy(23)` 應該返回 `true`。

```js
assert(happy(23));
```

`happy(28)` 應該返回 `true`。

```js
assert(happy(28));
```

`happy(31)` 應該返回 `true`。

```js
assert(happy(31));
```

`happy(32)` 應該返回 `true`。

```js
assert(happy(32));
```

`happy(33)` 應該返回 `false`。

```js
assert(!happy(33));
```

# --seed--

## --seed-contents--

```js
function happy(number) {

}
```

# --solutions--

```js
function happy (number) {
  let m;
  let digit;
  const cycle = [];

  while (number !== 1 && cycle[number] !== true) {
    cycle[number] = true;
    m = 0;
    while (number > 0) {
      digit = number % 10;
      m += Math.pow(digit, 2);
      number = (number - digit) / 10;
    }
    number = m;
  }
  return (number === 1);
}
```

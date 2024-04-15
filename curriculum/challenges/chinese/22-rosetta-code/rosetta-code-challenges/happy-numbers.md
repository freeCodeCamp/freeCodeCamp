---
id: 594810f028c0303b75339ad1
title: 快乐的数字
challengeType: 1
forumTopicId: 302280
dashedName: happy-numbers
---

# --description--

A happy number is defined by the following process:

从任何正整数开始，用其数字的平方和替换该数字，并重复该过程直到该数字等于 `1`（它将停留的位置），否则它会无限循环不包括 `1`。 此过程以 `1` 结尾的数字是快乐数字，而不以 `1` 结尾的数字是不快乐数字。

# --instructions--

实现一个函数，如果数字快乐则返回 true，否则返回 false。

# --hints--

`happy` 应该是一个函数。

```js
assert(typeof happy === 'function');
```

`happy(1)` 应该返回一个布尔值。

```js
assert(typeof happy(1) === 'boolean');
```

`happy(1)` 应该返回 `true`。

```js
assert(happy(1));
```

`happy(2)` 应该返回 `false`。

```js
assert(!happy(2));
```

`happy(7)` 应该返回 `true`。

```js
assert(happy(7));
```

`happy(10)` 应该返回 `true`。

```js
assert(happy(10));
```

`happy(13)` 应该返回 `true`。

```js
assert(happy(13));
```

`happy(19)` 应该返回 `true`。

```js
assert(happy(19));
```

`happy(23)` 应该返回 `true`。

```js
assert(happy(23));
```

`happy(28)` 应该返回 `true`。

```js
assert(happy(28));
```

`happy(31)` 应该返回 `true`。

```js
assert(happy(31));
```

`happy(32)` 应该返回 `true`。

```js
assert(happy(32));
```

`happy(33)` 应该返回 `false`。

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

---
id: 594810f028c0303b75339ad1
title: Happy numbers
challengeType: 1
forumTopicId: 302280
dashedName: happy-numbers
---

# --description--

A happy number is defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals `1` (where it will stay), or it loops endlessly in a cycle which does not include `1`. Those numbers for which this process ends in `1` are happy numbers, while those that do not end in `1` are unhappy numbers.

# --instructions--

Implement a function that returns true if the number is happy, or false if not.

# --hints--

`happy` should be a function.

```js
assert(typeof happy === 'function');
```

`happy(1)` should return a boolean.

```js
assert(typeof happy(1) === 'boolean');
```

`happy(1)` should return `true`.

```js
assert(happy(1));
```

`happy(2)` should return `false`.

```js
assert(!happy(2));
```

`happy(7)` should return `true`.

```js
assert(happy(7));
```

`happy(10)` should return `true`.

```js
assert(happy(10));
```

`happy(13)` should return `true`.

```js
assert(happy(13));
```

`happy(19)` should return `true`.

```js
assert(happy(19));
```

`happy(23)` should return `true`.

```js
assert(happy(23));
```

`happy(28)` should return `true`.

```js
assert(happy(28));
```

`happy(31)` should return `true`.

```js
assert(happy(31));
```

`happy(32)` should return `true`.

```js
assert(happy(32));
```

`happy(33)` should return `false`.

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

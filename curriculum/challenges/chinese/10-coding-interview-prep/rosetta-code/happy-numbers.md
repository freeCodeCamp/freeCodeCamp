---
id: 594810f028c0303b75339ad1
title: 快乐的数字
challengeType: 5
videoUrl: ''
dashedName: happy-numbers
---

# --description--

<p>幸福的数字由以下过程定义： </p><p>从任何正整数开始，将数字替换为其数字的平方和，并重复该过程直到数字等于1（它将保持不变），或者它在一个不包括1的循环中无休止地循环。这些数字这个过程在1结束的是幸福的数字，而那些不以1结尾的数字是不愉快的数字。 </p><p>实现一个函数，如果数字是满意的，则返回true，否则返回false。 </p>

# --hints--

`happy`是一种功能。

```js
assert(typeof happy === 'function');
```

`happy(1)`应该返回一个布尔值。

```js
assert(typeof happy(1) === 'boolean');
```

`happy(1)`应该回归真实。

```js
assert(happy(1));
```

`happy(2)`应该返回虚假。

```js
assert(!happy(2));
```

`happy(7)`应该回归真实。

```js
assert(happy(7));
```

`happy(10)`应该回归真实。

```js
assert(happy(10));
```

`happy(13)`应该回归真实。

```js
assert(happy(13));
```

`happy(19)`应该回归真实。

```js
assert(happy(19));
```

`happy(23)`应该回归真实。

```js
assert(happy(23));
```

`happy(28)`应该回归真实。

```js
assert(happy(28));
```

`happy(31)`应该回归真实。

```js
assert(happy(31));
```

`happy(32)`应该回归真实：

```js
assert(happy(32));
```

`happy(33)`应该返回虚假。

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

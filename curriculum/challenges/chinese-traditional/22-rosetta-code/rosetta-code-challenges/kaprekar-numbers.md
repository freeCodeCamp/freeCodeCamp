---
id: 5a23c84252665b21eecc7eca
title: Kaprekar 數字
challengeType: 1
forumTopicId: 302296
dashedName: kaprekar-numbers
---

# --description--

A positive integer is a Kaprekar number if:

<ul>
  <li>It is 1, or,</li>
  <li>The decimal representation of its square may be split once into two parts consisting of positive integers which sum to the original number. </li>
</ul>

請注意，導致部分完全由 0 組成的拆分是無效的，因爲 0 不被視爲正數。

Kaprekar 數字示例：

<ul>
  <li><code>2223</code> is a Kaprekar number, as <code>2223 * 2223 = 4941729</code>, <code>4941729</code> may be split to <code>494</code> and <code>1729</code>, and <code>494 + 1729 = 2223</code></li>
  <li>The series of Kaprekar numbers is known as A006886, and begins as <code>1, 9, 45, 55, ...</code></li>
</ul>

# --instructions--

編寫一個函數，它接受一個數字 $n$，一個基數 $bs$，如果該數字是給定基數的 Kaprekar 數，則返回 true。 否則，該函數返回 false。

# --hints--

`isKaprekar` 應該是一個函數。

```js
assert(typeof isKaprekar == 'function');
```

`isKaprekar(1, 10)` 應該返回一個布爾值。

```js
assert(typeof isKaprekar(1, 10) == 'boolean');
```

`isKaprekar(1, 10)` 應該返回 `true`。

```js
assert.equal(isKaprekar(1, 10), true);
```

`isKaprekar(9, 10)` 應該返回 `true`。

```js
assert.equal(isKaprekar(9, 10), true);
```

`isKaprekar(2223, 10)` 應該返回 `true`。

```js
assert.equal(isKaprekar(2223, 10), true);
```

`isKaprekar(22823, 10)` 應該返回 `false`。

```js
assert.equal(isKaprekar(22823, 10), false);
```

`isKaprekar(9, 17)` 應該返回 `false`。

```js
assert.equal(isKaprekar(9, 17), false);
```

`isKaprekar(225, 17)` 應該返回 `true`。

```js
assert.equal(isKaprekar(225, 17), true);
```

`isKaprekar(999, 17)` 應該返回 `false`。

```js
assert.equal(isKaprekar(999, 17), false);
```

# --seed--

## --seed-contents--

```js
function isKaprekar(n, bs) {

}
```

# --solutions--

```js
function isKaprekar(n, bs) {
  if (n < 1) return false;
  if (n == 1) return true;
  for (var a = n * n, b = 0, s = 1; a; s *= bs) {
    b += (a % bs) * s;
    a = Math.floor(a / bs);
    if (b && a + b == n) return true;
  }
  return false;
}
```

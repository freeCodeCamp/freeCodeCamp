---
id: 5a23c84252665b21eecc7eca
title: カプレカ数
challengeType: 1
forumTopicId: 302296
dashedName: kaprekar-numbers
---

# --description--

A positive integer is a Kaprekar number if:

<ul>
  <li>1 である、または</li>
  <li>その数字の2乗の10進数を正の整数の2つの部分に分け、その合計が元の数値に等しくなる </li>
</ul>

ただし、分割された部分が 0 のみであった場合は、0 は正とはみなされないため、無効となることに注意してください。

カプレカ数の例:

<ul>
  <li><code>2223</code> は以下のとおりカプレカ数です。<code>2223 * 2223 = 4941729</code> であり、<code>4941729</code> が <code>494</code> と <code>1729</code> に分割でき、かつ <code>494 + 1729 = 2223</code> となります。</li>
  <li>The series of Kaprekar numbers is known as A006886, and begins as <code>1, 9, 45, 55, ...</code></li>
</ul>

# --instructions--

数値 $n$、底 $bs$ を取り、数値が与えられた底に対するカプレカ数の場合は true を返す関数を記述してください。 それ以外の場合、関数は false を返します。

# --hints--

`isKaprekar` は関数とします。

```js
assert(typeof isKaprekar == 'function');
```

`isKaprekar(1, 10)` はブール値を返す必要があります。

```js
assert(typeof isKaprekar(1, 10) == 'boolean');
```

`isKaprekar(1, 10)` は `true` を返す必要があります。

```js
assert.equal(isKaprekar(1, 10), true);
```

`isKaprekar(9, 10)` は `true` を返す必要があります。

```js
assert.equal(isKaprekar(9, 10), true);
```

`isKaprekar(2223, 10)` は `true` を返す必要があります。

```js
assert.equal(isKaprekar(2223, 10), true);
```

`isKaprekar(22823, 10)` は `false` を返す必要があります。

```js
assert.equal(isKaprekar(22823, 10), false);
```

`isKaprekar(9, 17)` は `false` を返す必要があります。

```js
assert.equal(isKaprekar(9, 17), false);
```

`isKaprekar(225, 17)` は `true` を返す必要があります。

```js
assert.equal(isKaprekar(225, 17), true);
```

`isKaprekar(999, 17)` は `false` を返す必要があります。

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

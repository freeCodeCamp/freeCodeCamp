---
id: 597b2b2a2702b44414742771
title: 階乗
challengeType: 1
forumTopicId: 302263
dashedName: factorial
---

# --description--

Write a function to return the factorial of a number.

数値の階乗は次のようになります。

<pre><big>n! = n * (n-1) * (n-2) * ..... * 1</big>
</pre>

以下に例を示します。

<ul>
  <li><code>3! = 3 * 2 * 1 = 6</code></li>
  <li><code>4! = 4 * 3 * 2 * 1 = 24</code></li>
</ul>

**注記:** `0! = 1`

# --hints--

`factorial` という関数です。

```js
assert(typeof factorial === 'function');
```

`factorial(2)` は数字を返します。

```js
assert(typeof factorial(2) === 'number');
```

`factorial(3)` は 6 を返します。

```js
assert.equal(factorial(3), 6);
```

`factorial(5)` は 120 を返します。

```js
assert.equal(factorial(5), 120);
```

`factorial(10)` は 3,628,800 を返します。

```js
assert.equal(factorial(10), 3628800);
```

# --seed--

## --seed-contents--

```js
function factorial(n) {

}
```

# --solutions--

```js
function factorial(n) {
  let sum = 1;
  while (n > 1) {
    sum *= n;
    n--;
  }
  return sum;
}
```

---
id: 597b2b2a2702b44414742771
title: 阶乘
challengeType: 1
forumTopicId: 302263
dashedName: factorial
---

# --description--

Write a function to return the factorial of a number.

一个数字的阶乘是由以下公式给出：

<pre><big>n! = n * (n-1) * (n-2) * ..... * 1</big>
</pre>

例如：

<ul>
  <li><code>3! = 3 * 2 * 1 = 6</code></li>
  <li><code>4! = 4 * 3 * 2 * 1 = 24</code></li>
</ul>

**注意：** `0! = 1`

# --hints--

`factorial` 应该是一个函数。

```js
assert(typeof factorial === 'function');
```

`factorial(2)` 应该返回一个数字。

```js
assert(typeof factorial(2) === 'number');
```

`factorial(3)` 应该返回 6。

```js
assert.equal(factorial(3), 6);
```

`factorial(5)` 应该返回 120。

```js
assert.equal(factorial(5), 120);
```

`factorial(10)` 应该返回 3,628,800。

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

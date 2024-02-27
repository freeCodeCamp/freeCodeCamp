---
id: 5a23c84252665b21eecc7ee0
title: 左阶乘
challengeType: 1
forumTopicId: 302302
dashedName: left-factorials
---

# --description--

**Left factorials**, $ !n $, may refer to either *subfactorials* or to *factorial sums*. The same notation can be confusingly seen used for the two different definitions. Sometimes, *subfactorials* (also known as *derangements*) may use any of the notations:

<ul>
  <li>$!n`$</li>
  <li>$!n$</li>
  <li>$n¡$</li>
</ul>

（它在视觉上可能并不明显，但最后一个示例使用了倒置的感叹号。） 此任务将对**左阶乘**使用此公式：

$ !n = \\sum\_{k=0}^{n-1} k! $

其中 $!0 = 0$

# --instructions--

编写一个函数来计算给定数字的左阶乘。

# --hints--

`leftFactorial` 应该是一个函数。

```js
assert(typeof leftFactorial == 'function');
```

`leftFactorial(0)` 应该返回一个数字。

```js
assert(typeof leftFactorial(0) == 'number');
```

`leftFactorial(0)` 应该返回 `0`。

```js
assert.equal(leftFactorial(0), 0);
```

`leftFactorial(1)` 应该返回 `1`。

```js
assert.equal(leftFactorial(1), 1);
```

`leftFactorial(2)` 应该返回 `2`。

```js
assert.equal(leftFactorial(2), 2);
```

`leftFactorial(3)` 应该返回 `4`。

```js
assert.equal(leftFactorial(3), 4);
```

`leftFactorial(10)` 应该返回 `409114`。

```js
assert.equal(leftFactorial(10), 409114);
```

`leftFactorial(17)` 应该返回 `22324392524314`。

```js
assert.equal(leftFactorial(17), 22324392524314);
```

`leftFactorial(19)` 应该返回 `6780385526348314`。

```js
assert.equal(leftFactorial(19), 6780385526348314);
```

# --seed--

## --seed-contents--

```js
function leftFactorial(n) {

}
```

# --solutions--

```js
function leftFactorial(n) {
  if (n == 0) return 0;
  if (n == 1) return 1;

  // Note: for n>=20, the result may not be correct.
  // This is because JavaScript uses 53 bit integers and
  // for n>=20 result becomes too large.

  let res = 2,
    fact = 2;
  for (var i = 2; i < n; i++) {
    res += fact;
    fact *= i + 1;
  }

  return res;
}
```

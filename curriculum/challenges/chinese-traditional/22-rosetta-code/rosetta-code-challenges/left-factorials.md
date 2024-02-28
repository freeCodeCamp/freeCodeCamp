---
id: 5a23c84252665b21eecc7ee0
title: 左階乘
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

（它在視覺上可能並不明顯，但最後一個示例使用了倒置的感嘆號。） 此任務將對**左階乘**使用此公式：

$ !n = \\sum\_{k=0}^{n-1} k! $

其中 $!0 = 0$

# --instructions--

編寫一個函數來計算給定數字的左階乘。

# --hints--

`leftFactorial` 應該是一個函數。

```js
assert(typeof leftFactorial == 'function');
```

`leftFactorial(0)` 應該返回一個數字。

```js
assert(typeof leftFactorial(0) == 'number');
```

`leftFactorial(0)` 應該返回 `0`。

```js
assert.equal(leftFactorial(0), 0);
```

`leftFactorial(1)` 應該返回 `1`。

```js
assert.equal(leftFactorial(1), 1);
```

`leftFactorial(2)` 應該返回 `2`。

```js
assert.equal(leftFactorial(2), 2);
```

`leftFactorial(3)` 應該返回 `4`。

```js
assert.equal(leftFactorial(3), 4);
```

`leftFactorial(10)` 應該返回 `409114`。

```js
assert.equal(leftFactorial(10), 409114);
```

`leftFactorial(17)` 應該返回 `22324392524314`。

```js
assert.equal(leftFactorial(17), 22324392524314);
```

`leftFactorial(19)` 應該返回 `6780385526348314`。

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

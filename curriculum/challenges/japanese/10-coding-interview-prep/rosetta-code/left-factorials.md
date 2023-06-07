---
id: 5a23c84252665b21eecc7ee0
title: 左階乗
challengeType: 1
forumTopicId: 302302
dashedName: left-factorials
---

# --description--

**左階乗**, $ !n $, は *下位階乗* または *階乗和* のいずれかをいいます。 同じ表記が 2 つの別々の定義に使われているために、混乱を招く可能性があります。 *下位階乗* (*攪乱順列*とも呼ばれる) は、以下の表記を使用することもあります。

<ul>
  <li>$!n`$</li>
  <li>$!n$</li>
  <li>$n¡$</li>
</ul>

(視覚的に分かりづらいかもしれませんが、最後の例は逆感嘆符が使用されています)。 このタスクは、 以下の**左階乗** の公式を使用します。

$ !n = \\sum\_{k=0}^{n-1} k! $

where $!0 = 0$

# --instructions--

与えられた数値の左階乗を計算する関数を記述してください。

# --hints--

`leftFactorial` は関数とします。

```js
assert(typeof leftFactorial == 'function');
```

`leftFactorial(0)` は数値を返す必要があります。

```js
assert(typeof leftFactorial(0) == 'number');
```

`leftFactorial(0)` は `0` を返す必要があります。

```js
assert.equal(leftFactorial(0), 0);
```

`leftFactorial(1)` は `1` を返す必要があります。

```js
assert.equal(leftFactorial(1), 1);
```

`leftFactorial(2)` は `2` を返す必要があります。

```js
assert.equal(leftFactorial(2), 2);
```

`leftFactorial(3)` は `4` を返す必要があります。

```js
assert.equal(leftFactorial(3), 4);
```

`leftFactorial(10)` は `409114` を返す必要があります。

```js
assert.equal(leftFactorial(10), 409114);
```

`leftFactorial(17)` は `22324392524314` を返す必要があります。

```js
assert.equal(leftFactorial(17), 22324392524314);
```

`leftFactorial(19)` は `6780385526348314` を返す必要があります。

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

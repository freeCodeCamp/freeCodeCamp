---
id: 5a23c84252665b21eecc8041
title: 級数の和
challengeType: 1
forumTopicId: 302333
dashedName: sum-of-a-series
---

# --description--

Compute the **n**<sup>th</sup> term of a <em>series</em>, i.e. the sum of the **n** first terms of the corresponding <em>sequence</em>. この値、または**n**が無限となる傾向がある場合の極限を、非公式に、*級数の和*とも呼ぶため、このタスクのタイトルにしています。 このタスクでは以下を使用します: $S_n = \displaystyle\sum_{k=1}^n \frac{1}{k^2}$

# --instructions--

$a$ と $b$ をパラメータとして取り、数列の $a^{th}$ から $b^{th}$ までの項の和を返す関数を記述してください。

# --hints--

`sum` は関数とします。

```js
assert(typeof sum == 'function');
```

`sum(1, 100)` は数値を返す必要があります。

```js
assert(typeof sum(1, 100) == 'number');
```

`sum(1, 100)` は `1.6349839001848923` を返す必要があります。

```js
assert.equal(sum(1, 100), 1.6349839001848923);
```

`sum(33, 46)` は `0.009262256361481223` を返す必要があります。

```js
assert.equal(sum(33, 46), 0.009262256361481223);
```

`sum(21, 213)` は `0.044086990748706555` を返す必要があります。

```js
assert.equal(sum(21, 213), 0.044086990748706555);
```

`sum(11, 111)` は `0.08619778593108679` を返す必要があります。

```js
assert.equal(sum(11, 111), 0.08619778593108679);
```

`sum(1, 10)` は `1.5497677311665408` を返す必要があります。

```js
assert.equal(sum(1, 10), 1.5497677311665408);
```

# --seed--

## --seed-contents--

```js
function sum(a, b) {

}
```

# --solutions--

```js
function sum(a, b) {
  function fn(x) {
    return 1 / (x * x);
  }
  var s = 0;
  for (; a <= b; a++) s += fn(a);
  return s;
}
```

---
id: 5900f53c1000cf542c51004e
title: '問題 463: 風変わりな漸化式'
challengeType: 1
forumTopicId: 302138
dashedName: problem-463-a-weird-recurrence-relation
---

# --description--

すべての正の整数に対して関数 $f$ が次のように定義されます。

$$\begin{align}   & f(1) = 1 \\\\
  & f(3) = 3 \\\\   & f(2n) = f(n) \\\\
  & f(4n + 1) = 2f(2n + 1) - f(n) \\\\ & f(4n + 3) = 3f(2n + 1) - 2f(n) \end{align}$$

関数 $S(n)$ は $\sum_{i=1}^{n} f(i)$ と定義されます。

$S(8) = 22$, $S(100) = 3604$ です。

$S(3^{37})$ を求めなさい。 回答は、下位 9 桁とすること。

# --hints--

`weirdRecurrenceRelation()` は `808981553` を返す必要があります。

```js
assert.strictEqual(weirdRecurrenceRelation(), 808981553);
```

# --seed--

## --seed-contents--

```js
function weirdRecurrenceRelation() {

  return true;
}

weirdRecurrenceRelation();
```

# --solutions--

```js
// solution required
```

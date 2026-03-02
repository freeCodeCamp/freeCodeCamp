---
id: 5900f53c1000cf542c51004e
title: 'Problem 463: A weird recurrence relation'
challengeType: 1
forumTopicId: 302138
dashedName: problem-463-a-weird-recurrence-relation
---

# --description--

The function $f$ is defined for all positive integers as follows:

$$\begin{align}
  & f(1) = 1 \\\\
  & f(3) = 3 \\\\
  & f(2n) = f(n) \\\\
  & f(4n + 1) = 2f(2n + 1) - f(n) \\\\
  & f(4n + 3) = 3f(2n + 1) - 2f(n)
\end{align}$$

The function $S(n)$ is defined as $\sum_{i=1}^{n} f(i)$.

$S(8) = 22$ and $S(100) = 3604$.

Find $S(3^{37})$. Give the last 9 digits of your answer.

# --hints--

`weirdRecurrenceRelation()` should return `808981553`.

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

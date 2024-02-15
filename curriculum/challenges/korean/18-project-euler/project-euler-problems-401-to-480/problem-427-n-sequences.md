---
id: 5900f5181000cf542c51002a
title: 'Problem 427: n-sequences'
challengeType: 1
forumTopicId: 302097
dashedName: problem-427-n-sequences
---

# --description--

A sequence of integers $S = \\{s_i\\}$ is called an $n$-sequence if it has $n$ elements and each element $s_i$ satisfies $1 ≤ s_i ≤ n$. Thus there are $n^n$ distinct $n$-sequences in total.

For example, the sequence $S = \\{1, 5, 5, 10, 7, 7, 7, 2, 3, 7\\}$ is a 10-sequence.

For any sequence $S$, let $L(S)$ be the length of the longest contiguous subsequence of $S$ with the same value. For example, for the given sequence $S$ above, $L(S) = 3$, because of the three consecutive 7's.

Let $f(n) = \sum L(S)$ for all $n$-sequences $S$.

For example, $f(3) = 45$, $f(7) = 1\\,403\\,689$ and $f(11) = 481\\,496\\,895\\,121$.

Find $f(7\\,500\\,000)\bmod 1\\,000\\,000\\,009$.

# --hints--

`nSequences()` should return `97138867`.

```js
assert.strictEqual(nSequences(), 97138867);
```

# --seed--

## --seed-contents--

```js
function nSequences() {

  return true;
}

nSequences();
```

# --solutions--

```js
// solution required
```

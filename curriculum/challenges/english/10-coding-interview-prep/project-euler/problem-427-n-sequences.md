---
id: 5900f5181000cf542c51002a
title: 'Problem 427: n-sequences'
challengeType: 5
forumTopicId: 302097
dashedName: problem-427-n-sequences
---

# --description--

A sequence of integers S = {si} is called an n-sequence if it has n elements and each element si satisfies 1 ≤ si ≤ n. Thus there are nn distinct n-sequences in total.

For example, the sequence S = {1, 5, 5, 10, 7, 7, 7, 2, 3, 7} is a 10-sequence.

For any sequence S, let L(S) be the length of the longest contiguous subsequence of S with the same value. For example, for the given sequence S above, L(S) = 3, because of the three consecutive 7's.

Let f(n) = ∑ L(S) for all n-sequences S.

For example, f(3) = 45, f(7) = 1403689 and f(11) = 481496895121.

Find f(7 500 000) mod 1 000 000 009.

# --hints--

`euler427()` should return 97138867.

```js
assert.strictEqual(euler427(), 97138867);
```

# --seed--

## --seed-contents--

```js
function euler427() {

  return true;
}

euler427();
```

# --solutions--

```js
// solution required
```

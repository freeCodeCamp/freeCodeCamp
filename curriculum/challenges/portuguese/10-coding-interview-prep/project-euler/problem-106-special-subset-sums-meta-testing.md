---
id: 5900f3d71000cf542c50fee9
title: 'Problem 106: Special subset sums: meta-testing'
challengeType: 5
forumTopicId: 301730
dashedName: problem-106-special-subset-sums-meta-testing
---

# --description--

Let S(A) represent the sum of elements in set A of size n. We shall call it a special sum set if for any two non-empty disjoint subsets, B and C, the following properties are true:

S(B) ≠ S(C); that is, sums of subsets cannot be equal.

If B contains more elements than C then S(B) > S(C).

For this problem we shall assume that a given set contains n strictly increasing elements and it already satisfies the second rule.

Surprisingly, out of the 25 possible subset pairs that can be obtained from a set for which n = 4, only 1 of these pairs need to be tested for equality (first rule). Similarly, when n = 7, only 70 out of the 966 subset pairs need to be tested.

For n = 12, how many of the 261625 subset pairs that can be obtained need to be tested for equality?

NOTE: This problem is related to Problem 103 and Problem 105.

# --hints--

`euler106()` should return 21384.

```js
assert.strictEqual(euler106(), 21384);
```

# --seed--

## --seed-contents--

```js
function euler106() {

  return true;
}

euler106();
```

# --solutions--

```js
// solution required
```

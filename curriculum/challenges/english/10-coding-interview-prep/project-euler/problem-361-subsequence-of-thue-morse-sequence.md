---
id: 5900f4d51000cf542c50ffe8
title: 'Problem 361: Subsequence of Thue-Morse sequence'
challengeType: 5
forumTopicId: 302022
dashedName: problem-361-subsequence-of-thue-morse-sequence
---

# --description--

The Thue-Morse sequence {Tn} is a binary sequence satisfying:

T0 = 0

T2n = Tn

T2n+1 = 1 - Tn

The first several terms of {Tn} are given as follows: 01101001100101101001011001101001....

We define {An} as the sorted sequence of integers such that the binary expression of each element appears as a subsequence in {Tn}. For example, the decimal number 18 is expressed as 10010 in binary. 10010 appears in {Tn} (T8 to T12), so 18 is an element of {An}. The decimal number 14 is expressed as 1110 in binary. 1110 never appears in {Tn}, so 14 is not an element of {An}.

The first several terms of An are given as follows: n0123456789101112…An012345691011121318…

We can also verify that A100 = 3251 and A1000 = 80852364498.

Find the last 9 digits of .

# --hints--

`euler361()` should return 178476944.

```js
assert.strictEqual(euler361(), 178476944);
```

# --seed--

## --seed-contents--

```js
function euler361() {

  return true;
}

euler361();
```

# --solutions--

```js
// solution required
```

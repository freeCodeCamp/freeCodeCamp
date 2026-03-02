---
id: afd15382cdfb22c9efe8b7de
title: Implement a DNA Pair Generator
challengeType: 26
dashedName: implement-a-dna-pair-generator
---

# --description--

In the double helix of the DNA, the bases are always paired together: if on one strand there is an <em>A</em> base, on the other strand directly in front there is a <em>T</em> base, the other pair is <em>C</em> and <em>G</em>.

In this lab, you will write a function to match the missing base pairs for the provided DNA strand. For each character in the provided string, find the base pair character.

For example, for the input `ATCG`, return `[["A", "T"], ["T", "A"], ["C", "G"], ["G", "C"]]`

The <em>A</em> base gets paired with a <em>T</em> base, the <em>T</em> base is paired with a <em>A</em> base, the <em>C</em> is paired with the <em>G</em> base, and finally the <em>G</em> base is paired with a <em>C</em> base.

**Objective**: Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories:**

1. You should have a `pairElement` function that takes a string of any length as an argument.
1. The `pairElement` function should return a 2d array, where each inner array has two strings inside, the first string is one base from the input, and the second string the paired base.
1. When given `A`, the function should pair it with `T`.
1. When given `T`, the function should pair it with `A`.
1. When given `C`, the function should pair it with `G`.
1. When given `G`, the function should pair it with `C`.

# --hints--

You should create a function named `pairElement`.

```js
assert.isFunction(pairElement);
```

`pairElement` should take a single argument.

```js
assert.lengthOf(pairElement, 1);
```

`pairElement("ATCGA")` should return `[["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]`.

```js
assert.deepEqual(pairElement('ATCGA'), [
  ['A', 'T'],
  ['T', 'A'],
  ['C', 'G'],
  ['G', 'C'],
  ['A', 'T']
]);
```

`pairElement("TTGAG")` should return `[["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]`.

```js
assert.deepEqual(pairElement('TTGAG'), [
  ['T', 'A'],
  ['T', 'A'],
  ['G', 'C'],
  ['A', 'T'],
  ['G', 'C']
]);
```

`pairElement("CTCTA")` should return `[["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]`.

```js
assert.deepEqual(pairElement('CTCTA'), [
  ['C', 'G'],
  ['T', 'A'],
  ['C', 'G'],
  ['T', 'A'],
  ['A', 'T']
]);
```

# --seed--

## --seed-contents--

```js

```

# --solutions--

```js
var lookup = Object.create(null);
lookup.A = 'T';
lookup.T = 'A';
lookup.C = 'G';
lookup.G = 'C';

function pairElement(str) {
 return str.split('').map(function(p) {return [p, lookup[p]];});
}
```

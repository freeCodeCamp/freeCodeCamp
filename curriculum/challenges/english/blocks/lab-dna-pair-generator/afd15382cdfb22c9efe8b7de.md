---
id: afd15382cdfb22c9efe8b7de
title: Implement a DNA Pair Generator
challengeType: 26
dashedName: implement-a-dna-pair-generator
---

# --description--

Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters <em>AT</em> and <em>CG</em>, which form building blocks of the DNA double helix.

In this lab, you will write a function to match the missing base pairs for the provided DNA strand. For each character in the provided string, find the base pair character.

For example, for the input `GCG`, return `[["G", "C"], ["C", "G"], ["G", "C"]]`

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

**Objective**: Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories:**

1. You should have a `pairElement` function that takes a string as an argument.
1. The `pairElement` function should return a 2d array.
1. When given `A`, the function should pair it with `T`.
1. When given `T`, the function should pair it with `A`.
1. When given `C`, the function should pair it with `G`.
1. When given `G`, the function should pair it with `C`.
1. Each pair should be returned as an array with the original character first and its complement second.

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

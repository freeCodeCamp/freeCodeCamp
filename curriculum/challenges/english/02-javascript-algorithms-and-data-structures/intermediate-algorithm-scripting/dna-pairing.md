---
id: afd15382cdfb22c9efe8b7de
title: DNA Pairing
challengeType: 5
forumTopicId: 16009
dashedName: dna-pairing
---

# --description--

The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

[Base pairs](http://en.wikipedia.org/wiki/Base_pair) are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input `GCG`, return `[["G", "C"], ["C","G"], ["G", "C"]]`

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

# --hints--

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
function pairElement(str) {
  return str;
}

pairElement("GCG");
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

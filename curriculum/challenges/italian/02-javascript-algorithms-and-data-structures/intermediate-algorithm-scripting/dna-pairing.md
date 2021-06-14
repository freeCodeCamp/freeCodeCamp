---
id: afd15382cdfb22c9efe8b7de
title: Coppie del DNA
challengeType: 5
forumTopicId: 16009
dashedName: dna-pairing
---

# --description--

Al filamento di DNA manca l'elemento di accoppiamento. Prendi ogni carattere, ottieni la sua coppia e restituisci i risultati in un array 2d.

[Le coppie di basi del DNA](http://en.wikipedia.org/wiki/Base_pair) sono AT e CG. Abbina l'elemento mancante al carattere fornito.

Restituisci il carattere fornito come il primo elemento in ogni array.

Per esempio, per l'input `GCG`, restituisci `[["G", "C"], ["C","G"], ["G", "C"]]`

Il carattere e la sua coppia sono accoppiati in un array, e tutti gli array sono raggruppati in un array incapsulante.

# --hints--

`pairElement("ATCGA")` dovrebbe restituire `[["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]`.

```js
assert.deepEqual(pairElement('ATCGA'), [
  ['A', 'T'],
  ['T', 'A'],
  ['C', 'G'],
  ['G', 'C'],
  ['A', 'T']
]);
```

`pairElement("TTGAG")` dovrebbe restituire `[["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]`.

```js
assert.deepEqual(pairElement('TTGAG'), [
  ['T', 'A'],
  ['T', 'A'],
  ['G', 'C'],
  ['A', 'T'],
  ['G', 'C']
]);
```

`pairElement("CTCTA")` dovrebbe restituire `[["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]`.

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

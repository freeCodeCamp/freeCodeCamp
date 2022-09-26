---
id: afd15382cdfb22c9efe8b7de
title: Coppie del DNA
challengeType: 1
forumTopicId: 16009
dashedName: dna-pairing
---

# --description--

Le coppie di filamenti di DNA sono formate da coppie di basi azotate. Coppie di basi sono rappresentate dai caratteri <em>AT</em> e <em>CG</em>, che formano i mattoncini di base della doppia elica del DNA.

Al filamento di DNA manca l'elemento da accoppiare. Scrivi una funzione che crea le coppie mancanti per il filamento di DNA dato. Per ogni carattere nella stringa data, trova il carattere della base azotata da accoppiare. Restituisci il risultato in un array 2d.

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

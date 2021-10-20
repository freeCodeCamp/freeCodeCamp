---
id: afd15382cdfb22c9efe8b7de
title: Emparejamiento de ADN
challengeType: 5
forumTopicId: 16009
dashedName: dna-pairing
---

# --description--

A la cadena de ADN le falta el elemento de emparejamiento. Toma cada carácter, obtén su par y devuelve los resultados como un arreglo bidimensional.

[Par de bases](https://es.wikipedia.org/wiki/Par_de_bases) son un par de AT y CG. Haz coincidir el elemento que falta con el carácter proporcionado.

Devuelve el carácter proporcionado como primer elemento de cada arreglo.

Por ejemplo, la entrada `GCG`, devolverá `[["G", "C"], ["C","G"], ["G", "C"]]`

El carácter y su par se emparejan en un arreglo, y todos los arreglos se agrupan en un arreglo encapsulado.

# --hints--

`pairElement("ATCGA")` debe devolver `[["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]`.

```js
assert.deepEqual(pairElement('ATCGA'), [
  ['A', 'T'],
  ['T', 'A'],
  ['C', 'G'],
  ['G', 'C'],
  ['A', 'T']
]);
```

`pairElement("TTGAG")` debe devolver `[["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]`.

```js
assert.deepEqual(pairElement('TTGAG'), [
  ['T', 'A'],
  ['T', 'A'],
  ['G', 'C'],
  ['A', 'T'],
  ['G', 'C']
]);
```

`pairElement("CTCTA")` debe devolver `[["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]`.

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

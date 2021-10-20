---
id: afd15382cdfb22c9efe8b7de
title: Parear DNA
challengeType: 5
forumTopicId: 16009
dashedName: dna-pairing
---

# --description--

A faixa de DNA está faltando o elemento de pareamento. Pegue cada caractere, pegue seu par e retorne os resultados como um array de duas dimensões.

[Pares de base](http://en.wikipedia.org/wiki/Base_pair) são pares de AT e CG. Associe o elemento faltando para o caractere fornecido.

Retorne o caractere fornecido como o primeiro elemento em cada array.

Por exemplo, para a entrada `GCG`, retorne `[["G", "C"], ["C","G"], ["G", "C"]]`

O caractere e seu par estão emparelhados em um array, e todos os arrays estão agrupados em um array encapsulador.

# --hints--

`pairElement("ATCGA")` deve retornar `[["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]`.

```js
assert.deepEqual(pairElement('ATCGA'), [
  ['A', 'T'],
  ['T', 'A'],
  ['C', 'G'],
  ['G', 'C'],
  ['A', 'T']
]);
```

`pairElement("TTGAG")` deve retornar `[["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]`.

```js
assert.deepEqual(pairElement('TTGAG'), [
  ['T', 'A'],
  ['T', 'A'],
  ['G', 'C'],
  ['A', 'T'],
  ['G', 'C']
]);
```

`pairElement("CTCTA")` deve retornar `[["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]`.

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

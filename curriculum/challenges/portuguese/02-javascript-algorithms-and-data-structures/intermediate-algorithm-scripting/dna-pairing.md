---
id: afd15382cdfb22c9efe8b7de
title: Parear DNA
challengeType: 1
forumTopicId: 16009
dashedName: dna-pairing
---

# --description--

Os pares de fileiras de DNA são constituídos por pares de bases nitrogenadas. Os pares de bases são representados pelos caracteres <em>AT</em> e <em>CG</em>, que formam os blocos de construção da dupla hélice do DNA.

A fileira do DNA está sem o elemento de que faz par com ele. Escreva uma função que corresponda aos pares de base que faltam para a fileira de DNA fornecida. Para cada caractere na string fornecida, encontre o caractere de par de bases. Retorne os resultados em um array bidimensional.

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

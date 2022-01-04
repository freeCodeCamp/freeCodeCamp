---
id: afd15382cdfb22c9efe8b7de
title: Формування пар ДНК
challengeType: 5
forumTopicId: 16009
dashedName: dna-pairing
---

# --description--

В ланцюжку ДНК бракує парного елементу. Необхідно знайти пару для кожного символу і повернути результати як двовимірний масив.

[Пари основ](http://en.wikipedia.org/wiki/Base_pair) - це пари AT і CG. Встановіть відповідність між відсутнім елементом і зазначеним символом.

Повернути наданий символ як перший елемент у кожному масиві.

Наприклад, при введенні `GCG`, повернути `[["G", "C"], ["C","G"], ["G", "C"]]`

Символ і його пара об'єднуються в масив, а всі масиви згруповані в один інкапсульований масив.

# --hints--

`pairElement("ATCGA")` повинен повертатися як `[["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]`.

```js
assert.deepEqual(pairElement('ATCGA'), [
  ['A', 'T'],
  ['T', 'A'],
  ['C', 'G'],
  ['G', 'C'],
  ['A', 'T']
]);
```

`pairElement("TTGAG")` повинен повертатися як `[["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]`.

```js
assert.deepEqual(pairElement('TTGAG'), [
  ['T', 'A'],
  ['T', 'A'],
  ['G', 'C'],
  ['A', 'T'],
  ['G', 'C']
]);
```

`pairElement("CTCTA")` повинен повертатися як `[["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]`.

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

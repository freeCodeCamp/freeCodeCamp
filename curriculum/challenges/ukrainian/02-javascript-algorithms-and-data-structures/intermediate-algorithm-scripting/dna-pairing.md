---
id: afd15382cdfb22c9efe8b7de
title: Формування пар ДНК
challengeType: 1
forumTopicId: 16009
dashedName: dna-pairing
---

# --description--

Пари ланцюжків ДНК складаються з нуклеотидів. Базові пари позначаються символами <em>AT</em> та <em>CG</em>, які утворюють будівельні блоки подвійної спіралі ДНК.

В ланцюжку ДНК відсутній один елемент. Напишіть функцію для пошуку відсутніх базових пар для наданого ланцюжка ДНК. Знайдіть відповідний символ для кожного символу в наданому рядку. Поверніть результати як 2d-масив.

Наприклад, при введенні `GCG` поверніть `[["G", "C"], ["C","G"], ["G", "C"]]`

Символ та його пара об'єднуються в масив, і всі масиви згруповані в один інкапсульований масив.

# --hints--

`pairElement("ATCGA")` має повертати `[["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]`.

```js
assert.deepEqual(pairElement('ATCGA'), [
  ['A', 'T'],
  ['T', 'A'],
  ['C', 'G'],
  ['G', 'C'],
  ['A', 'T']
]);
```

`pairElement("TTGAG")` має повертати `[["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]`.

```js
assert.deepEqual(pairElement('TTGAG'), [
  ['T', 'A'],
  ['T', 'A'],
  ['G', 'C'],
  ['A', 'T'],
  ['G', 'C']
]);
```

`pairElement("CTCTA")` має повертати `[["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]`.

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

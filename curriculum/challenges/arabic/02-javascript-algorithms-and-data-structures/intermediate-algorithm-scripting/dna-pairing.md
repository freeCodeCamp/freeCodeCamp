---
id: afd15382cdfb22c9efe8b7de
title: DNA Pairing
challengeType: 1
forumTopicId: 16009
dashedName: dna-pairing
---

# --description--

تتكوّن مقاطع الحمض النووي من أزواج نووية. يتم تمثيل أزواج القاعدة بأحرف <em>AT</em> و <em>CG</em> التي تكون هيكل بناء الحمض النووي المزدوج.

خيط الحمض النووي يفتقد عنصر الاقتران. كتابة وظيفة لمطابقة أزواج القاعدة المفقودة لشريط الحمض النووي المقدم. لكل رمز في مقطع المقدمة، ابحث عن رمز زوج أساسي. إرجاع النتائج كقائمة 2d.

على سبيل المثال، للمدخل `GCG`، ينتج `[["G", "C"], ["C","G"], ["G", "C"]]`

يتم إقران الرمز مع مثيله الخاص به في قائمة، ويتم تجميع كل القوائم في قائمة مغلفة واحدة.

# --hints--

يجب أن ينتج `pairElement("ATCGA")` قائمة `[["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]`.

```js
assert.deepEqual(pairElement('ATCGA'), [
  ['A', 'T'],
  ['T', 'A'],
  ['C', 'G'],
  ['G', 'C'],
  ['A', 'T']
]);
```

يجب أن ينتج `pairElement("TTGAG")` قائمة `[["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]`.

```js
assert.deepEqual(pairElement('TTGAG'), [
  ['T', 'A'],
  ['T', 'A'],
  ['G', 'C'],
  ['A', 'T'],
  ['G', 'C']
]);
```

يجب أن ينتج `pairElement("CTCTA")` قائمة `[["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]`.

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

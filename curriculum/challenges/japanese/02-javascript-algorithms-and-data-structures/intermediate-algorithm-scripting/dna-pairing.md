---
id: afd15382cdfb22c9efe8b7de
title: DNA のペアを求める
challengeType: 5
forumTopicId: 16009
dashedName: dna-pairing
---

# --description--

DNA 鎖のペア要素が欠落しています。 それぞれの文字を受け取り、ペアを取得して、その結果を 2 次元配列として返してください。

[塩基対](http://en.wikipedia.org/wiki/Base_pair)は AT と CG のペアです。 欠落している要素を指定された文字に合わせてください。

指定された文字を、各配列の最初の要素として返してください。

たとええば、入力が `GCG` の場合は、`[["G", "C"], ["C","G"], ["G", "C"]]` を返してください。

文字とそのペアを組み合わせて配列にし、すべての配列を 1 つのカプセル化された配列にグループ化します。

# --hints--

`pairElement("ATCGA")` は `[["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]` を返す必要があります。

```js
assert.deepEqual(pairElement('ATCGA'), [
  ['A', 'T'],
  ['T', 'A'],
  ['C', 'G'],
  ['G', 'C'],
  ['A', 'T']
]);
```

`pairElement("TTGAG")` は `[["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]` を返す必要があります。

```js
assert.deepEqual(pairElement('TTGAG'), [
  ['T', 'A'],
  ['T', 'A'],
  ['G', 'C'],
  ['A', 'T'],
  ['G', 'C']
]);
```

`pairElement("CTCTA")` は `[["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]` を返す必要があります。

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

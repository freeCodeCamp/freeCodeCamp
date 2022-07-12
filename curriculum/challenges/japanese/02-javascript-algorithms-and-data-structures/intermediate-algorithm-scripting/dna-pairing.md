---
id: afd15382cdfb22c9efe8b7de
title: DNA のペアを求める
challengeType: 1
forumTopicId: 16009
dashedName: dna-pairing
---

# --description--

DNA 2 本鎖は核酸塩基対で構成されます。 塩基対は <em>AT</em> および <em>CG</em> という文字で表され、DNA 2 重らせんの基本構成要素を形成します。

DNA 鎖の対を成す要素が欠落しています。 与えられた DNA 鎖の欠落している塩基対を対応させる関数を記述してください。 与えられた文字列の各文字について、塩基対の文字を見つけ出してください。 結果は 2 次元配列で返してください。

たとえば、入力が `GCG` の場合は、`[["G", "C"], ["C","G"], ["G", "C"]]` を返してください。

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

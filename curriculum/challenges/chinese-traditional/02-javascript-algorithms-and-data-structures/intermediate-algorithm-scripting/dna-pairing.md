---
id: afd15382cdfb22c9efe8b7de
title: DNA 配對
challengeType: 1
forumTopicId: 16009
dashedName: dna-pairing
---

# --description--

脫氧核糖核酸組由核酸對組成。 基本配對的字符是 <em>AT</em> and <em>CG</em>，這些字符形成了 DNA 雙螺旋的構件。

DNA 鏈缺少配對元素。 寫一個函數來匹配缺失的 DNA 字符串。 對於提供的字符串中的每個字符，找出基本的配對字符。 返回二維數組的結果。

例如，傳入 `GCG` 時，應返回 `[["G", "C"], ["C","G"], ["G", "C"]]`。

字符和它的配對組成一個數組，所有配對數組放在一個數組裏。

# --hints--

`pairElement("ATCGA")` 應返回 `[["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]`。

```js
assert.deepEqual(pairElement('ATCGA'), [
  ['A', 'T'],
  ['T', 'A'],
  ['C', 'G'],
  ['G', 'C'],
  ['A', 'T']
]);
```

`pairElement("TTGAG")` 應返回 `[["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]`。

```js
assert.deepEqual(pairElement('TTGAG'), [
  ['T', 'A'],
  ['T', 'A'],
  ['G', 'C'],
  ['A', 'T'],
  ['G', 'C']
]);
```

`pairElement("CTCTA")` 應返回 `[["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]`。

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

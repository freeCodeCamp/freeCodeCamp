---
id: afd15382cdfb22c9efe8b7de
title: DNA 配对
challengeType: 1
forumTopicId: 16009
dashedName: dna-pairing
---

# --description--

脱氧核糖核酸组由核酸对组成。 基本配对的字符是 <em>AT</em> and <em>CG</em>，这些字符形成了 DNA 双螺旋的构件。

DNA 链缺少配对元素。 写一个函数来匹配缺失的 DNA 字符串。 对于提供的字符串中的每个字符，找出基本的配对字符。 返回二维数组的结果。

例如，传入 `GCG` 时，应返回 `[["G", "C"], ["C","G"], ["G", "C"]]`。

字符和它的配对组成一个数组，所有配对数组放在一个数组里。

# --hints--

`pairElement("ATCGA")` 应返回 `[["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]`。

```js
assert.deepEqual(pairElement('ATCGA'), [
  ['A', 'T'],
  ['T', 'A'],
  ['C', 'G'],
  ['G', 'C'],
  ['A', 'T']
]);
```

`pairElement("TTGAG")` 应返回 `[["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]`。

```js
assert.deepEqual(pairElement('TTGAG'), [
  ['T', 'A'],
  ['T', 'A'],
  ['G', 'C'],
  ['A', 'T'],
  ['G', 'C']
]);
```

`pairElement("CTCTA")` 应返回 `[["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]`。

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

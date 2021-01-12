---
id: afd15382cdfb22c9efe8b7de
title: DNA 配对
challengeType: 5
forumTopicId: 16009
dashedName: dna-pairing
---

# --description--

给出的 DNA 链上缺少配对元素。请基于每个字符，获取与其配对的元素，并将结果作为二维数组返回。

DNA 的[碱基对](http://en.wikipedia.org/wiki/Base_pair) 有两种形式：一种是 A 与 T，一种是 C 与 G。请为参数中给出的每个字符配对相应的碱基。

注意，参数中给出的字符应作为每个子数组中的第一个元素返回。

例如，传入 GCG 时，应返回 \[\["G", "C"], \["C", "G"], \["G", "C"]]。

参数中的字符及与其配对的碱基应存在于一个数组中，代表碱基对。再将每个配对完成的碱基对数组按顺序放到一个数组中，作为最终的返回结果。

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

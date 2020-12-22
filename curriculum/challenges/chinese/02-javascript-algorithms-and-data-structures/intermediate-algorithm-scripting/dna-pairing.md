---
id: afd15382cdfb22c9efe8b7de
title: DNA 配对
challengeType: 5
forumTopicId: 16009
---

# --description--

DNA 链缺少配对元素。对于每个字符，获取与其配对的元素，并将结果作为二维数组返回。

[碱基对](http://en.wikipedia.org/wiki/Base_pair) 是一对 AT 和 CG。将缺少的元素与提供的字符匹配。

将提供的字符作为每个数组中的第一个元素返回。

例如，对于输入 GCG，返回\[\[“G”, “C”]，\[“C”, “G”]，\[“G”, “C”]]。

字符及与其配对的元素在一个数组中。再将所有数组放到一个封装数组中。

# --hints--

`pairElement('ATCGA')`应该返回`[['A','T'],['T','A'],['C','G'],['G','C'],['A','T']]`。

```js
assert.deepEqual(pairElement('ATCGA'), [
  ['A', 'T'],
  ['T', 'A'],
  ['C', 'G'],
  ['G', 'C'],
  ['A', 'T']
]);
```

`pairElement('TTGAG')`应该返回`[['T','A'],['T','A'],['G','C'],['A','T'],['G','C']]`。

```js
assert.deepEqual(pairElement('TTGAG'), [
  ['T', 'A'],
  ['T', 'A'],
  ['G', 'C'],
  ['A', 'T'],
  ['G', 'C']
]);
```

`pairElement('CTCTA')`应该返回`[['C','G'],['T','A'],['C','G'],['T','A'],['A','T']]`。

```js
assert.deepEqual(pairElement('CTCTA'), [
  ['C', 'G'],
  ['T', 'A'],
  ['C', 'G'],
  ['T', 'A'],
  ['A', 'T']
]);
```

# --solutions--


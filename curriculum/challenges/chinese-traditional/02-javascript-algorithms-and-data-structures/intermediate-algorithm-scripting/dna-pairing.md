---
id: afd15382cdfb22c9efe8b7de
title: DNA 配對
challengeType: 5
forumTopicId: 16009
dashedName: dna-pairing
---

# --description--

給出的 DNA 鏈上缺少配對元素。 請基於每個字符，獲取與其配對的元素，並將結果作爲二維數組返回。

DNA 的[鹼基對](http://en.wikipedia.org/wiki/Base_pair) 有兩種形式：一種是 A 與 T，一種是 C 與 G。 請爲參數中給出的每個字符配對相應的鹼基。

注意，參數中給出的字符應作爲每個子數組中的第一個元素返回。

例如，傳入 `GCG` 時，應返回 `[["G", "C"], ["C","G"], ["G", "C"]]`。

字符和它的配對組成一個數組中，所有配對數組放在一個數組裏。

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

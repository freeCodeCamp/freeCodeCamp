---
id: 5900f3841000cf542c50fe97
title: 问题24：字典排列
challengeType: 5
videoUrl: ''
dashedName: problem-24-lexicographic-permutations
---

# --description--

置换是对象的有序排列。例如，3124是数字1,2,3和4的一种可能的排列。如果所有排列都以数字或字母顺序列出，我们称之为词典顺序。字典排列0,1和2是：

012 021 102 120 201 210

数字0,1,2,3,4,5,6,7,8和9的第`n`个词典排列是什么？

# --hints--

`lexicographicPermutations(699999)`应该返回1938246570。

```js
assert(lexicographicPermutations(699999) == 1938246570);
```

`lexicographicPermutations(899999)`应该返回2536987410。

```js
assert(lexicographicPermutations(899999) == 2536987410);
```

`lexicographicPermutations(900000)`应该返回2537014689。

```js
assert(lexicographicPermutations(900000) == 2537014689);
```

`lexicographicPermutations(999999)`应该返回2783915460。

```js
assert(lexicographicPermutations(999999) == 2783915460);
```

# --seed--

## --seed-contents--

```js
function lexicographicPermutations(n) {

  return n;
}

lexicographicPermutations(999999);
```

# --solutions--

```js
// solution required
```

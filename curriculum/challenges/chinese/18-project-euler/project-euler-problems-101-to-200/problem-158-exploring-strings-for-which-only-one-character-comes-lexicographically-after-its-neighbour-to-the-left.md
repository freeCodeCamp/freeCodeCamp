---
id: 5900f40a1000cf542c50ff1d
title: >-
  问题158：探究字符串满足只有一个字符会按照字母表顺序出现在其左侧相邻字符之后的问题
challengeType: 1
forumTopicId: 301789
dashedName: >-
  problem-158-exploring-strings-for-which-only-one-character-comes-lexicographically-after-its-neighbour-to-the-left
---

# --description--

Taking three different letters from the 26 letters of the alphabet, character strings of length three can be formed.

例如“abc”，“hat” 以及“zyx”。

当我们研究这三个例子时，我们会看到“abc”中有2个字符在左边相邻字符之后按照字母表顺序出现。

而对于“hat”，只有一个字符在其左侧相邻字母之后按字母表顺序出现。 对于“hat”，没有字符在其左侧相邻字母之后按字母表顺序出现。

设共有10400个长度为3的字符串，每个字符串中仅有一个字符在其左侧字符之后按字母表顺序出现。

我们现在考虑由 $n ≤ 26$ 的字母表中的不同字符组成的字符串。

对于每一个 $n$，$p(n)$ 是长度为 $n$ 的字符串的数量，其中正好有一个字符在左侧相邻字符之后按照字母表顺序出现。

求 $p(n)$ 的最大值是多少？

# --hints--

`lexicographicNeighbours()` 应该返回 `409511334375`。

```js
assert.strictEqual(lexicographicNeighbours(), 409511334375);
```

# --seed--

## --seed-contents--

```js
function lexicographicNeighbours() {

  return true;
}

lexicographicNeighbours();
```

# --solutions--

```js
// solution required
```

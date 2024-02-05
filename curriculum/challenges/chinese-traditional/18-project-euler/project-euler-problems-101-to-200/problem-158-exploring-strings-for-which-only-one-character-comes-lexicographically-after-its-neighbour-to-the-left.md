---
id: 5900f40a1000cf542c50ff1d
title: >-
  問題158：探究字符串滿足只有一個字符會按照字母表順序出現在其左側相鄰字符之後的問題
challengeType: 1
forumTopicId: 301789
dashedName: >-
  problem-158-exploring-strings-for-which-only-one-character-comes-lexicographically-after-its-neighbour-to-the-left
---

# --description--

Taking three different letters from the 26 letters of the alphabet, character strings of length three can be formed.

例如“abc”，“hat” 以及“zyx”。

當我們研究這三個例子時，我們會看到“abc”中有2個字符在左邊相鄰字符之後按照字母表順序出現。

而對於“hat”，只有一個字符在其左側相鄰字母之後按字母表順序出現。 對於“hat”，沒有字符在其左側相鄰字母之後按字母表順序出現。

設共有10400個長度爲3的字符串，每個字符串中僅有一個字符在其左側字符之後按字母表順序出現。

我們現在考慮由 $n ≤ 26$ 的字母表中的不同字符組成的字符串。

對於每一個 $n$，$p(n)$ 是長度爲 $n$ 的字符串的數量，其中正好有一個字符在左側相鄰字符之後按照字母表順序出現。

求 $p(n)$ 的最大值是多少？

# --hints--

`lexicographicNeighbours()` 應該返回 `409511334375`。

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

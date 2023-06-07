---
id: 5900f40a1000cf542c50ff1d
title: >-
  問題 158: 辞書順で左隣りの文字より後ろになる文字が 1 つだけ含まれる文字列を探す
challengeType: 1
forumTopicId: 301789
dashedName: >-
  problem-158-exploring-strings-for-which-only-one-character-comes-lexicographically-after-its-neighbour-to-the-left
---

# --description--

26 文字のアルファベットから 3 つの異なる文字を取り、長さ 3 の文字列を作ります。

例えば、'abc'、'hat'、'zyx' です。

これらの 3 例を調べると、'abc' については、辞書順で見た場合に、2 文字が左隣の文字より後ろの文字であることがわかります。

'hat' については、辞書順で見た場合に、ちょうど 1 文字が左隣の文字より後ろの文字です。 'zyx' については、辞書順で見た場合に、左隣の文字より後ろに位置する文字はありません。

辞書順で見た場合に、ちょうど 1 文字が左隣の文字より後ろの文字であるような長さ 3 の文字列は、全部で 10400 個あります。

ここで、$n (≤ 26)$ 個の異なるアルファベットからなる文字列について考えます。

すべての $n$ について、$p(n)$ は、辞書順で見た場合にちょうど 1 文字が左隣の文字より後ろの文字である、長さ $n$ の文字列の個数です。

$p(n)$ の最大値を求めなさい。

# --hints--

`lexicographicNeighbours()` は `409511334375` を返す必要があります。

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

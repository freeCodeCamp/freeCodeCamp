---
id: 5900f4481000cf542c50ff5b
title: '問題 220: ハイウェイドラゴン'
challengeType: 1
forumTopicId: 301863
dashedName: problem-220-heighway-dragon
---

# --description--

$D_0$ を 2 文字の文字列 "Fa" とします。 $n ≥ 1$ のとき、次の変換規則によって $D_{n - 1}$ から $D_n$ を得ます。

- "a" → "aRbFR"
- "b" → "LFaLb"

したがって、$D_0$ = "Fa", $D_1$ = "FaRbFR", $D_2$ = "FaRbFRRLFaLbFR" などとなります。

これらの文字列は、コンピュータグラフィックスプログラムに対する命令として解釈できます。"F" は「1単位、前へ描け」、"L" は「90 度左を向け」、"R" は「90 度右を向け」を意味し、"a" と "b" は無視されます。 コンピューターカーソルの最初の位置は (0,0) で、上の (0,1) を向いています。

$D_n$ は、$n$ 次のハイウェイドラゴンとして知られる風変わりな図です。 例えば、$D_{10}$ は下図のようになります。それぞれの "F" を 1 ステップと数え、(18,16) の色付きの点は 500 ステップで到達した位置です。

<img class="img-responsive center-block" alt="500 ステップ後のハイグウェイドラゴンの図" src="https://cdn.freecodecamp.org/curriculum/project-euler/heighway-dragon.gif" style="background-color: white; padding: 10px;" />

$D_{50} $ において、${10}^{12}$ ステップ後のカーソルの位置を求めなさい。 回答は、スペースなしの `x,y` 形式の文字列にすること。

# --hints--

`heighwayDragon()` は文字列を返す必要があります。

```js
assert(typeof heighwayDragon() === 'string');
```

`heighwayDragon()` は文字列 `139776,963904` を返す必要があります。

```js
assert.strictEqual(heighwayDragon(), '139776,963904');
```

# --seed--

## --seed-contents--

```js
function heighwayDragon() {

  return true;
}

heighwayDragon();
```

# --solutions--

```js
// solution required
```

---
id: 5900f4e81000cf542c50fffb
title: '問題 380: 驚くべき迷路！'
challengeType: 1
forumTopicId: 302044
dashedName: problem-380-amazing-mazes
---

# --description--

$m×n$ の長方形格子で作られた $m×n$ 迷路があります。格子の各マスの間に壁があり、左上のマスからスタートし、他のいずれのマスへ行くにも経路は 1 つしかありません。 下図は、9×12 迷路と15×20 迷路の例です。

<img class="img-responsive center-block" alt="9x12 迷路と15x20 迷路" src="https://cdn.freecodecamp.org/curriculum/project-euler/amazing-mazes.gif" style="background-color: white; padding: 10px;" />

相異なる $m×n$ 迷路の数を $C(m, n)$ とします。 別の迷路の回転や反転によって形成される迷路は、相異なる迷路とみなされます。

$C(1, 1) = 1$, $C(2, 2) = 4$, $C(3, 4) = 2415$, $C(9, 12) = 2.5720\mathrm{e}\\,46$ (有効数字 5 桁に四捨五入された科学的記数法) であることを確認できます。

$C(100, 500)$ を求め、有効数字 5 桁に四捨五入された科学的記数法の文字列で答えなさい。

回答の仮数部と指数部を小文字 e で区切ること。 例: 求めた値が1234567891011 の場合、回答は文字列 `1.2346e12` になります。

# --hints--

`amazingMazes()` は文字列を返す必要があります。

```js
assert(typeof amazingMazes() === 'string');
```

`amazingMazes()` は文字列 `6.3202e25093` を返す必要があります。

```js
assert.strictEqual(amazingMazes(), '6.3202e25093');
```

# --seed--

## --seed-contents--

```js
function amazingMazes() {

  return true;
}

amazingMazes();
```

# --solutions--

```js
// solution required
```

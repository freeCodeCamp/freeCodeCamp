---
id: 587d78a5367417b2b2512ad7
title: CSS の線形グラデーションでストライプを作成する
challengeType: 0
videoUrl: 'https://scrimba.com/c/c6bmQh2'
forumTopicId: 301072
dashedName: use-a-css-linear-gradient-to-create-a-striped-element
---

# --description--

`repeating-linear-gradient()` 関数は `linear-gradient()` とよく似ており、大きな違いは指定のグラデーションのパターンを繰り返すことです。 `repeating-linear-gradient()` は様々な値を受け付けますが、簡略化のために、このチャレンジでは角度の値と色経由点の値を扱います。

角度の値はグラデーションの方向です。 色経由点は、色が変化する場所を指定する幅の値のようなもので、パーセンテージまたはピクセルで与えられます。

コードエディタに表示されている例では、グラデーションは `yellow` の色で 0 ピクセルの位置からスタートし、溶け込んでスタートから 40 ピクセルの位置で 2 つ目の色 `blue` になります。 次の色経由点が同じ 40 ピクセルの位置にあるため、グラデーションはすぐに 3 つ目の色 `green` に変わり、溶け込んでグラデーションの開始位置から 80 ピクセルの場所で 4 つ目の色 `red` になります。

この例では、色経由点をペアとしてそれぞれ二つの色が混ざりあう場所と考えるのが役立つでしょう。

```css
0px [yellow -- blend -- blue] 40px [green -- blend -- red] 80px
```

2 個ごとの色経由点が同じ色ならば、色の混合は同じ色同士になるため目に見えず、次の色にすぐに変わることでストライプが作れます。

# --instructions--

`repeating-linear-gradient()` を変更して `45deg` のグラデーションの角度を設定し、最初の二つの色経由点を `yellow` に、 次の 2 つの色経由点を `black` に設定してストライプを作りましょう。

# --hints--

`repeating-linear-gradient()` の角度は 45deg である必要があります。

```js
assert(code.match(/background:\s*?repeating-linear-gradient\(\s*?45deg/gi));
```

`repeating-linear-gradient()` の角度が 90deg ではないようにしてください。

```js
assert(!code.match(/90deg/gi));
```

0 ピクセルの色経由点の色は `yellow` である必要があります。

```js
assert(code.match(/yellow\s+?0(px)?/gi));
```

40 ピクセルの 1 つめの色経由点の色は `yellow` である必要があります。

```js
assert(code.match(/yellow\s+?40px/gi));
```

40 ピクセルの 2 つめの色経由点の色は `black` である必要があります。

```js
assert(code.match(/yellow\s+?40px,\s*?black\s+?40px/gi));
```

最後の、80 ピクセルの色経由点の色は `black` である必要があります。

```js
assert(code.match(/black\s+?80px/gi));
```

# --seed--

## --seed-contents--

```html
<style>

  div{
    border-radius: 20px;
    width: 70%;
    height: 400px;
    margin:  50 auto;
    background: repeating-linear-gradient(
      90deg,
      yellow 0px,
      blue 40px,
      green 40px,
      red 80px
    );
  }

</style>

<div></div>
```

# --solutions--

```html
<style>
  div{
    border-radius: 20px;
    width: 70%;
    height: 400px;
    margin:  50 auto;
    background: repeating-linear-gradient(
      45deg,
      yellow 0px,
      yellow 40px,
      black 40px,
      black 80px
    );
  }
</style>
<div></div>
```

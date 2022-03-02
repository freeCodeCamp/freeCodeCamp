---
id: 587d78a5367417b2b2512ad6
title: CSS の線形グラデーションを作成する
challengeType: 0
videoUrl: 'https://scrimba.com/c/cg4dpt9'
forumTopicId: 301047
dashedName: create-a-gradual-css-linear-gradient
---

# --description--

HTML 要素に適用できる色は 1 色のフラットな色相だけではありません。 CSS では、グラデーションとも呼ばれる色の移り変わりを要素の色に使う機能を提供しています。 そのためには `background` プロパティの `linear-gradient()` 関数を使用します。 一般的な構文は次のとおりです:

```css
background: linear-gradient(gradient_direction, color 1, color 2, color 3, ...);
```

最初の引数は、色の遷移が始まる方向を指定します。角度で記述することができ、`90deg` なら水平方向のグラデーションを (左から右に) 作り、`45deg` なら斜めのグラデーションを (左下から右上に) 作ります。 その後に続く引数はグラデーションで使用される色の順序を指定します。

例:

```css
background: linear-gradient(90deg, red, yellow, rgb(204, 204, 255));
```

# --instructions--

`div` 要素の `background` に `linear-gradient()` を使用し、35 度の方向に色が `#CCFFFF` から `#FFCCCC` に変わるように設定してください。

# --hints--

`div` 要素は、指定の方向と色の `linear-gradient` の `background` を持つ必要があります。

```js
assert(
  $('div')
    .css('background-image')
    .match(
      /linear-gradient\(35deg, rgb\(204, 255, 255\), rgb\(255, 204, 204\)\)/gi
    )
);
```

# --seed--

## --seed-contents--

```html
<style>
  div {
    border-radius: 20px;
    width: 70%;
    height: 400px;
    margin: 50px auto;

  }

</style>

<div></div>
```

# --solutions--

```html
<style>
  div {
    border-radius: 20px;
    width: 70%;
    height: 400px;
    margin: 50px auto;
    background: linear-gradient(35deg, #CCFFFF, #FFCCCC);
  }
</style>
<div></div>
```

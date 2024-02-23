---
id: 587d78a5367417b2b2512ada
title: CSS の Transform scale プロパティを使用してホバー時に要素を拡大する
challengeType: 0
videoUrl: 'https://scrimba.com/c/cyLPJuM'
forumTopicId: 301077
dashedName: use-the-css-transform-scale-property-to-scale-an-element-on-hover
---

# --description--

`transform` プロパティは要素の拡大縮小、移動、回転、傾斜などができる様々な関数を備えています。 要素の特定の状態を指定する `:hover` のような疑似クラスと一緒に使えば、`transform` プロパティは簡単にあなたの要素にインタラクティブ性を追加することができます。

ユーザーがカーソルを合わせたとき、段落要素を元のサイズの 2.1 倍に拡大する例をこちらに示します:

```css
p:hover {
  transform: scale(2.1);
}
```

**注:** transform を `div` 要素に適用すると、その div 要素に含まれる子要素にも影響します。

# --instructions--

`div` の `hover` 状態用の CSS ルールを追加し、`transform` プロパティを使用して、ユーザーがカーソルを合わせたときに `div` 要素が 1.1 倍に拡大されるようにしてください。

# --hints--

`div` 要素のサイズは、ユーザーがその上にカーソルを置いた時に 1.1 倍になる必要があります。

```js
assert(code.match(/div:hover\s*?{\s*?transform:\s*?scale\(1\.1\);/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  div {
    width: 70%;
    height: 100px;
    margin:  50px auto;
    background: linear-gradient(
      53deg,
      #ccfffc,
      #ffcccf
    );
  }



</style>

<div></div>
```

# --solutions--

```html
<style>
  div {
    width: 70%;
    height: 100px;
    margin:  50px auto;
    background: linear-gradient(
      53deg,
      #ccfffc,
      #ffcccf
    );
  }
  div:hover {
    transform: scale(1.1);
  }
</style>
<div></div>
```

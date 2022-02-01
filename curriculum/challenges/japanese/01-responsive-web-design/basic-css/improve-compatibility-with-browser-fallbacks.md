---
id: 5b7d72c338cd7e35b63f3e14
title: ブラウザのフォールバックで互換性を向上させる
challengeType: 0
videoUrl: ''
forumTopicId: 301087
dashedName: improve-compatibility-with-browser-fallbacks
---

# --description--

CSS の作業をしているうちに、いつかブラウザの互換性の問題に遭遇するでしょう。 そのため、潜在的な問題を回避するためにブラウザのフォールバックを提供することが重要です。

ブラウザがウェブページの CSS を解析する際、認識できないプロパティやサポートされていないプロパティは無視されます。 例えば、CSS 変数を使用してサイトに背景色を割り当てている場合、Internet Explorer は CSS 変数をサポートしていないため、背景色を無視します。 その場合、ブラウザはそのプロパティに対して設定されている何らかの値を使用します。 そのプロパティに他の値の設定が見つからない場合はデフォルト値に戻ります。通常、これは理想的ではありません。

つまり、ブラウザのフォールバックを提供したい場合には、ある宣言の直前にもっと広くサポートされている値を提供することで簡単に実現できます。 そのようにすれば古いブラウザは何かフォールバックとして使用するものがある状態になり、同時に新しいブラウザはその後の宣言を解釈するようになります。

# --instructions--

`.red-box` クラスの背景色を設定するために変数が使用されているようです。 既存の宣言の直前にもう一つ `background` 宣言を追加し、その値を `red` に設定することで、ブラウザの互換性を改善しましょう。

# --hints--

`.red-box` のルール内において、既存の `background` 宣言の直前に、`background` が `red` に設定されたフォールバックを追加してください。

```js
assert(
  code
    .replace(/\s/g, '')
    .match(
      /\.red-box{background:(red|#ff0000|#f00|rgb\(255,0,0\)|rgb\(100%,0%,0%\)|hsl\(0,100%,50%\));background:var\(--red-color\);height:200px;width:200px;}/gi
    )
);
```

# --seed--

## --seed-contents--

```html
<style>
  :root {
    --red-color: red;
  }
  .red-box {

    background: var(--red-color);
    height: 200px;
    width:200px;
  }
</style>
<div class="red-box"></div>
```

# --solutions--

```html
<style>
  :root {
    --red-color: red;
  }
  .red-box {
    background: red;
    background: var(--red-color);
    height: 200px;
    width:200px;
  }
</style>
<div class="red-box"></div>
```

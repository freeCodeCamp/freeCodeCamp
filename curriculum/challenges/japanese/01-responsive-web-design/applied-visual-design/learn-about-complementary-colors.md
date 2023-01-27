---
id: 587d78a3367417b2b2512ad1
title: 補色について学ぶ
challengeType: 0
videoUrl: 'https://scrimba.com/c/c2MD3Tr'
forumTopicId: 301056
dashedName: learn-about-complementary-colors
---

# --description--

色彩理論とそのデザインへの影響は深い話であり、このチャレンジでは基礎のみを取り上げます。 ウェブサイトでは、色を使ってコンテンツに注意を引いたり、感情を呼び起こしたり、視覚的な調和を作ったりすることができます。 異なる色の組み合わせを使うとウェブサイトの外観を大きく変えることができるため、あなたのコンテンツに合うカラーパレットを選ぶには多くのことを考慮することになるでしょう。

色相環は、似たような色相を持つ色は近く、異なる色相を持つ色は遠くに配置された円で、色がお互いにどのような関係にあるかを視覚化するのに便利なツールです。 二つの色が円の反対側にあるとき、それらは補色と呼ばれます。 その二色は混合するとお互いを打ち消し灰色になるという特徴を持っています。 しかし、並べて配置するとより鮮やかに見え、強力な視覚的コントラストを作り出します。

いくつかの補色とその 16 進数コードの例:

<blockquote>赤 (#FF0000) とシアン (#00FFFF)<br>緑 (#00FF00) とマゼンタ (#FF00FF)<br>青 (#0000FF) と黄色 (#FFFF00)</blockquote>

これは、私達の多くが学校で教えられた旧式の RYB カラーモデルとは原色や補色が異なります。 現代の色彩理論では、加法混合の RGB モデル (コンピュータ画面など) や減法混合の CMY(K) モデル (印刷など) を使います。

補色を見つけるための機能を持ったカラーピッキングツールがオンラインでもたくさんあります。

**注:** 色を使うことはページに視覚的なおもしろさを加える強力な方法です。 しかし、色だけで重要な情報を伝えるような使い方をするべきではありません。視覚障害を持つユーザーが内容を理解できない可能性があるためです。 この問題は、応用アクセシビリティのチャレンジで詳しく取り上げます。

# --instructions--

`blue` と `yellow` のクラスの `background-color` プロパティを、それぞれ対応した色に変更してください。 これらの色を並べると、白い背景と比べた時と見え方が違うことに注目してください。

# --hints--

クラスが `blue` の `div` 要素の `background-color` は青である必要があります。

```js
assert($('.blue').css('background-color') == 'rgb(0, 0, 255)');
```

クラスが `yellow` の `div` 要素の `background-color` は黄色である必要があります。

```js
assert($('.yellow').css('background-color') == 'rgb(255, 255, 0)');
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    background-color: #FFFFFF;
  }
  .blue {
    background-color: #000000;
  }
  .yellow {
    background-color: #000000;
  }
  div {
    display: inline-block;
    height: 100px;
    width: 100px;
  }
</style>
<div class="blue"></div>
<div class="yellow"></div>
```

# --solutions--

```html
<style>
  body {
    background-color: #FFFFFF;
  }
  .blue {
    background-color: blue;
  }
  .yellow {
    background-color: yellow;
  }
  div {
    display: inline-block;
    height: 100px;
    width: 100px;
  }
</style>
<div class="blue"></div>
<div class="yellow"></div>
```

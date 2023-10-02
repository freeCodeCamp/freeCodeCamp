---
id: 587d78a5367417b2b2512ad8
title: 背景画像としてかすかなパターンを追加してテクスチャを作る
challengeType: 0
videoUrl: 'https://scrimba.com/c/cQdwJC8'
forumTopicId: 301052
dashedName: create-texture-by-adding-a-subtle-pattern-as-a-background-image
---

# --description--

背景に質感やおもしろさを加えて目立つようにする一つの方法は、かすかなパターンを追加することです。 鍵となるのはバランスです。背景が目立ちすぎて前面から注意がそれることは避けたいでしょう。 `background` プロパティは、テクスチャやパターンの画像にリンクするための `url()` 関数をサポートしています。 リンクアドレスは引用符で囲んで括弧内に入れます。

# --instructions--

`https://cdn-media-1.freecodecamp.org/imgr/MJAkxbh.png` の URL を使用して、ページ全体の `background` を `body` セレクターに設定してください。

# --hints--

`body` 要素の `background` プロパティを、与えられたリンクとともに `url()` で設定してください。

```js
assert(
  code.match(
    /background(-image)?:\s*?url\(\s*("|'|)https:\/\/cdn-media-1\.freecodecamp\.org\/imgr\/MJAkxbh\.png\2\s*\)/gi
  )
);
```

# --seed--

## --seed-contents--

```html
<style>
  body {

  }
</style>
```

# --solutions--

```html
<style>
  body {
    background: url("https://cdn-media-1.freecodecamp.org/imgr/MJAkxbh.png");
  }
</style>
```

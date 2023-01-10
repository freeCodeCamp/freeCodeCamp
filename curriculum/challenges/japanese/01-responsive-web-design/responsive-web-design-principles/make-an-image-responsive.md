---
id: 587d78b1367417b2b2512b09
title: 画像をレスポンシブにする
challengeType: 0
forumTopicId: 301140
dashedName: make-an-image-responsive
---

# --description--

CSS で画像をレスポンシブにするのは、実は非常に簡単です。 次のプロパティを画像に追加するだけです:

```css
img {
  max-width: 100%;
  height: auto;
}
```

`max-width` を `100%` にすることで画像が決してそれが入っているコンテナーより広がらないようにし、`height` を `auto` にすることで画像が元のアスペクト比を保つようにします。

# --instructions--

`responsive-img` クラスにスタイルルールを追加し、これをレスポンシブにします。 コンテナー (この場合はプレビューウィンドウ) の幅より広がらないようにし、かつ元のアスペクト比を維持する必要があります。 コードを追加したら、画像の動作を確認するためにプレビューのサイズを変更してみましょう。

# --hints--

`responsive-img` クラスは `max-width` を `100%` に設定する必要があります。

```js
assert(getComputedStyle($('.responsive-img')[0]).maxWidth === '100%');
```

`responsive-img` クラスは `height` を `auto` に設定する必要があります。

```js
assert(code.match(/height:\s*?auto;/g));
```

# --seed--

## --seed-contents--

```html
<style>
.responsive-img {


}

img {
  width: 600px;
}
</style>

<img class="responsive-img" src="https://s3.amazonaws.com/freecodecamp/FCCStickerPack.jpg" alt="freeCodeCamp stickers set">
<img src="https://s3.amazonaws.com/freecodecamp/FCCStickerPack.jpg" alt="freeCodeCamp stickers set">
```

# --solutions--

```html
<style>
.responsive-img {
  max-width: 100%;
  height: auto;
}

img {
  width: 600px;
}
</style>

<img class="responsive-img" src="https://s3.amazonaws.com/freecodecamp/FCCStickerPack.jpg" alt="freeCodeCamp stickers set">
<img src="https://s3.amazonaws.com/freecodecamp/FCCStickerPack.jpg" alt="freeCodeCamp stickers set">
```

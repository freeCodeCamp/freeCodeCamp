---
id: 587d78b1367417b2b2512b0a
title: 高解像度ディスプレイのために Retina 画像を使用する
challengeType: 0
videoUrl: 'https://scrimba.com/p/pzrPu4/cVZ4Rfp'
forumTopicId: 301142
dashedName: use-a-retina-image-for-higher-resolution-displays
---

# --description--

インターネット接続デバイスの増加に伴い、そのサイズや仕様は様々になり、使用されるディスプレイは外部的にも内部的にも異なる可能性があります。 ピクセル密度はデバイスによって異なる場合があり、この密度は Pixel Per Inch (PPI) もしくは Dots Per Inch (DPI) と呼ばれます。 最も有名なディスプレイは、最新の Apple MacBook Pro ノートブックや最近の iMac コンピューターに搭載された「Retina ディスプレイ」と呼ばれるものです。 Retina ディスプレイと非 Retina ディスプレイ間のピクセル密度の違いにより、高解像度ディスプレイを想定して作成されていない画像を高解像度ディスプレイで表示すると「ピクセル化」して見える場合があります。

MacBook Pro の「Retina ディスプレイ」のような高解像度ディスプレイで画像を適切に表示する最も簡単な方法は、`width` と `height` の値を元のファイルの半分だけと定義することです。 以下に、元の画像の高さと幅の半分を設定する例を示します。

```html
<style>
  img { height: 250px; width: 250px; }
</style>
<img src="coolPic500x500" alt="A most excellent picture">
```

# --instructions--

`img` タグの `width` と `height` を元の値の半分に設定してください。 今回の場合、オリジナルの `height` とオリジナルの `width` は両方とも `200px` です。

# --hints--

`img` タグは `width` が 100 ピクセルである必要があります。

```js
assert(document.querySelector('img').width === 100);
```

`img` タグは `height` が 100 ピクセルである必要があります。

```js
assert(document.querySelector('img').height === 100);
```

# --seed--

## --seed-contents--

```html
<style>

</style>

<img src="https://s3.amazonaws.com/freecodecamp/FCCStickers-CamperBot200x200.jpg" alt="freeCodeCamp sticker that says 'Because CamperBot Cares'">
```

# --solutions--

```html
<style>
  img { 
    height: 100px; 
    width: 100px; 
  }
</style>

<img src="https://s3.amazonaws.com/freecodecamp/FCCStickers-CamperBot200x200.jpg" alt="freeCodeCamp sticker that says 'Because CamperBot Cares'">
```

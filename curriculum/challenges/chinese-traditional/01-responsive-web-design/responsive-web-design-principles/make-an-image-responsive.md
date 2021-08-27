---
id: 587d78b1367417b2b2512b09
title: 使圖片自適應設備尺寸
challengeType: 0
forumTopicId: 301140
dashedName: make-an-image-responsive
---

# --description--

用 CSS 來讓圖片自適應其實很簡單。 你只需要給圖片添加這些屬性:

```css
img {
  max-width: 100%;
  height: auto;
}
```

設置 `max-width` 值爲 `100%` 可確保圖片不超出父容器的範圍；設置 `height` 屬性爲 `auto` 可以保持圖片的原始寬高比。

# --instructions--

給 `responsive-img` 添加樣式規則，使其成爲響應式的圖片。 它不應該超出父容器（在本例中，即預覽窗口）的範圍，並保持寬高比不變。 添加代碼後，拖動瀏覽器窗口，看看圖片發生什麼變化。

# --hints--

`responsive-img` 類應將 `max-width` 設置爲 `100%`。

```js
assert(getComputedStyle($('.responsive-img')[0]).maxWidth === '100%');
```

`responsive-img` 類應將 `height` 設置爲 `auto`。

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

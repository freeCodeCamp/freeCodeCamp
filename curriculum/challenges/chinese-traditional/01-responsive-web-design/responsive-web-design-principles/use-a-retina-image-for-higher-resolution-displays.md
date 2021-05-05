---
id: 587d78b1367417b2b2512b0a
title: 針對高分辨率屏幕應使用視網膜圖片
challengeType: 0
videoUrl: 'https://scrimba.com/p/pzrPu4/cVZ4Rfp'
forumTopicId: 301142
dashedName: use-a-retina-image-for-higher-resolution-displays
---

# --description--

隨着聯網設備的增加，設備間的區別不僅發生在尺寸和規格上，還發生在用於顯示的設備上。 像素密度就是區分不同顯示設備的一個指標，它一般會以 PPI（Pixel Per Inch，即每英寸像素）或 DPI（每英寸點數）爲計量單位。 最著名的顯示器就是 Apple MacBook Pro 筆記本電腦上的“視網膜顯示屏”（現亦用於 iMac）。 由於“視網膜顯示屏”和“非視網膜顯示屏”顯示器之間像素密度的不同，某些未考慮高分辨率顯示器的圖像在高分辨率顯示器上渲染時，可能因出現“像素化”而不夠清晰。

讓圖像正確出現在高分辨率顯示器（例如 MacBook Pros “Revistina display”）上的最簡單方式， 是定義它們的 `width` 和 `height` 值爲原始值的一半。 下面是一個僅使用原始高度和寬度一半的圖像示例：

```html
<style>
  img { height: 250px; width: 250px; }
</style>
<img src="coolPic500x500" alt="A most excellent picture">
```

# --instructions--

設置 `img` 標籤的 `width` 和 `height` 爲它們的原始值的一半。 在這個例子中，原始 `height` 和原始 `width` 的值都爲 `200px`。

# --hints--

`img` 標籤的 `width` 屬性值應爲 100px。

```js
assert(document.querySelector('img').width === 100);
```

`img` 標籤的 `height` 屬性值應爲 100px。

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

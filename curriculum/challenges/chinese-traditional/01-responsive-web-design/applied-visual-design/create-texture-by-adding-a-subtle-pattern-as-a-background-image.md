---
id: 587d78a5367417b2b2512ad8
title: 通過添加細微圖案作爲背景圖像來創建紋理
challengeType: 0
videoUrl: 'https://scrimba.com/c/cQdwJC8'
forumTopicId: 301052
dashedName: create-texture-by-adding-a-subtle-pattern-as-a-background-image
---

# --description--

爲了增加背景圖的質感，我們可以爲它添加一個不那麼明顯的紋理圖案，這樣可以讓頁面更討喜。 但關鍵在於，我們需要找到一個平衡點，因爲我們不希望背景圖搶佔了內容的風頭，造成喧賓奪主的結果。 `background` 屬性支持使用 `url()` 函數作爲屬性值，這讓我們可以通過鏈接的方式引入紋理或樣式的圖片。 圖片鏈接的地址應寫在括號內，一般會用引號包起來。

# --instructions--

選取 `body` 元素，並設置整個頁面的 `background` 爲 url `https://cdn-media-1.freecodecamp.org/imgr/MJAkxbh.png` 的圖片。

# --hints--

`body` 元素選擇器應包含 `background` 屬性，且屬性值應爲給定的 `url`。

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

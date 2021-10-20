---
id: 587d781e367417b2b2512ac9
title: 更改元素的相對位置
challengeType: 0
videoUrl: 'https://scrimba.com/c/czVmMtZ'
forumTopicId: 301044
dashedName: change-an-elements-relative-position
---

# --description--

在 CSS 裏一切 HTML 元素皆爲盒子，也就是通常所說的<dfn>盒模型</dfn>。 塊級元素自動從新的一行開始（比如標題、段落以及 div），行內元素排列在上一個元素後（比如圖片以及 span）。 元素默認按照這種方式佈局稱爲文檔的<dfn>普通流</dfn>，同時 CSS 提供了 position 屬性來覆蓋它。

當元素的定位設置爲 `relative` 時，它允許你通過 CSS 指定該元素在當前文檔流頁面下的*相對*偏移量。 CSS 裏控制各個方向偏移量的屬性是 `left`、`right`、`top` 和 `bottom`。 它們代表從原來位置向遠離該方向*偏移*指定的像素、百分比或者 em。 下面的例子展示了段落向上偏移 10px：

```css
p {
  position: relative;
  bottom: 10px;
}
```

把元素的位置設置成相對，並不會改變該元素在佈局中所佔的位置，也不會對其它元素的位置產生影響。

**注意：** 定位可以使頁面佈局更靈活、高效。 不管元素的定位是怎樣的，HTML 標記在從上到下閱讀起來時應該是整潔的、有意義的。 這樣可以讓視障人士（重度依賴輔助設備比如屏幕閱讀軟件的人們）也能夠無障礙地瀏覽你的網頁。

# --instructions--

把 `h2` 的 `position` 設置成 `relative`，使用相應的 CSS 屬性調整它的位置，使其相對 `top` 偏移 15px，同時還在文檔流中處於原來的位置。 這不會對 h1 和 p 元素的位置產生影響。

# --hints--

`h2` 元素應有一個值爲 `relative` 的 `position` 屬性。

```js
assert($('h2').css('position') == 'relative');
```

你應該使用 CSS 屬性調整 `h2` 的位置，使其從原來的位置相對 `top` 偏移 15px。

```js
assert($('h2').css('top') == '15px');
```

# --seed--

## --seed-contents--

```html
<style>
  h2 {


  }
</style>
<body>
  <h1>On Being Well-Positioned</h1>
  <h2>Move me!</h2>
  <p>I still think the h2 is where it normally sits.</p>
</body>
```

# --solutions--

```html
<style>
  h2 {
    position: relative;
    top: 15px;
  }
</style>
<body>
  <h1>On Being Well-Positioned</h1>
  <h2>Move me!</h2>
  <p>I still think the h2 is where it normally sits.</p>
</body>
```

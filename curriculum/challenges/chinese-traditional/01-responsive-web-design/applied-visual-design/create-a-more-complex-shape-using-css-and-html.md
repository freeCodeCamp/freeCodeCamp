---
id: 587d78a6367417b2b2512ade
title: 使用 CSS 和 HTML 創建更復雜的形狀
challengeType: 0
videoUrl: 'https://scrimba.com/c/cPpz4fr'
forumTopicId: 301050
dashedName: create-a-more-complex-shape-using-css-and-html
---

# --description--

世界上最流行的形狀非心形莫屬了，在本挑戰中我們將用純 CSS 創建一個心形。 但是首先你需要了解僞元素 `::before` 和 `::after`。 `::before` 創建一個僞元素，它是所選元素的第一個子元素； `::after` 創建一個僞元素，它是所選元素的最後一個子元素。 在下面的代碼中，`::before` 僞元素用來給 class 爲 `heart` 的元素添加一個正方形：

```css
.heart::before {
  content: "";
  background-color: yellow;
  border-radius: 25%;
  position: absolute;
  height: 50px;
  width: 70px;
  top: -50px;
  left: 5px;
}
```

`::before` 和 `::after` 必須配合 `content` 來使用。 這個屬性通常用來給元素添加內容諸如圖片或者文字。 儘管有時 `::before` 和 `::after` 是用來實現形狀而非文字，但 `content` 屬性仍然是必需的，此時它的值可以是空字符串。 在上面的例子裏，class 爲 `heart` 元素的 `::before` 僞類添加了一個黃色的長方形，長方形的高和寬分別爲 `50px` 和 `70px`。 這個矩形有圓角，因爲它的 `border-radius` 爲 25%，它的位置是絕對位置，位於離元素左邊和頂部分別是 `5px`、`50px` 的位置。

# --instructions--

把屏幕裏的元素變成心形。 在 `.heart::after` 選擇器裏，把 `background-color` 改成 `pink`，把 `border-radius` 改成 50%。

接下來，用類選擇器選取 class 爲 `heart`（只是 `heart`）的元素，爲它添加 `transform` 屬性。 使用 `rotate()` 函數並設置角度爲 -45 度。

最後，在 `,heart::before` 選擇器裏面，設置 `content` 屬性值爲空字符串。

# --hints--

`.heart::after` 選擇器的 `background-color` 屬性值應爲 `pink`。

```js
const heartAfter = code.match(/\.heart::after\s*{[\s\S]+?[^\}]}/g)[0];
assert(
  /({|;)\s*background-color\s*:\s*pink\s*(;|})/g.test(heartAfter)
);
```

`.heart::after` 僞元素的 `border-radius` 屬性值應爲 50%。

```js
assert(code.match(/border-radius\s*?:\s*?50%/gi).length == 2);
```

class 爲 `heart` 的元素的 `transform` 屬性應使用 `rotate()` 函數並傳入參數 -45 度。

```js
assert(code.match(/transform\s*?:\s*?rotate\(\s*?-45deg\s*?\)/gi));
```

`.heart::before` 僞元素的 `content` 應爲空字符串。

```js
assert(code.match(/\.heart::before\s*?{\s*?content\s*?:\s*?("|')\1\s*?;/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  .heart {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: pink;
    height: 50px;
    width: 50px;
    transform: ;
  }
  .heart::after {
    background-color: blue;
    content: "";
    border-radius: 25%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: 0px;
    left: 25px;
  }
  .heart::before {
    content: ;
    background-color: pink;
    border-radius: 50%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: -25px;
    left: 0px;
  }
</style>
<div class="heart"></div>
```

# --solutions--

```html
<style>
  .heart {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: pink;
    height: 50px;
    width: 50px;
    transform: rotate(-45deg);
  }
  .heart::after {
    background-color: pink;
    content: "";
    border-radius: 50%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: 0px;
    left: 25px;
  }
  .heart::before {
    content: "";
    background-color: pink;
    border-radius: 50%;
    position: absolute;
    width: 50px;
    height: 50px;
    top: -25px;
    left: 0px;
  }
</style>
<div class="heart"></div>
```

---
id: 587d78a6367417b2b2512ade
title: 使用 CSS 和 HTML 创建更复杂的形状
challengeType: 0
videoUrl: 'https://scrimba.com/c/cPpz4fr'
forumTopicId: 301050
dashedName: create-a-more-complex-shape-using-css-and-html
---

# --description--

世界上最流行的形状非心形莫属了，在本挑战中我们将用纯 CSS 创建一个心形。 但是首先你需要了解伪元素 `::before` 和 `::after`。 `::before` 创建一个伪元素，它是所选元素的第一个子元素； `::after` 创建一个伪元素，它是所选元素的最后一个子元素。 在下面的代码中，`::before` 伪元素用来给 class 为 `heart` 的元素添加一个正方形：

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

`::before` 和 `::after` 必须配合 `content` 来使用。 这个属性通常用来给元素添加内容诸如图片或者文字。 尽管有时 `::before` 和 `::after` 是用来实现形状而非文字，但 `content` 属性仍然是必需的，此时它的值可以是空字符串。 在上面的例子里，class 为 `heart` 元素的 `::before` 伪类添加了一个黄色的长方形，长方形的高和宽分别为 `50px` 和 `70px`。 这个矩形有圆角，因为它的 `border-radius` 为 25%，它的位置是绝对位置，位于离元素左边和顶部分别是 `5px`、`50px` 的位置。

# --instructions--

把屏幕里的元素变成心形。 在 `.heart::after` 选择器里，把 `background-color` 改成 `pink`，把 `border-radius` 改成 50%。

接下来，用类选择器选取 class 为 `heart`（只是 `heart`）的元素，为它添加 `transform` 属性。 使用 `rotate()` 函数并设置角度为 -45 度。

最后，在 `,heart::before` 选择器里面，设置 `content` 属性值为空字符串。

# --hints--

`.heart::after` 选择器的 `background-color` 属性值应为 `pink`。

```js
const heartAfter = code.match(/\.heart::after\s*{[\s\S]+?[^\}]}/g)[0];
assert(
  /({|;)\s*background-color\s*:\s*pink\s*(;|})/g.test(heartAfter)
);
```

`.heart::after` 伪元素的 `border-radius` 属性值应为 50%。

```js
assert(code.match(/border-radius\s*?:\s*?50%/gi).length == 2);
```

class 为 `heart` 的元素的 `transform` 属性应使用 `rotate()` 函数并传入参数 -45 度。

```js
assert(code.match(/transform\s*?:\s*?rotate\(\s*?-45deg\s*?\)/gi));
```

`.heart::before` 伪元素的 `content` 应为空字符串。

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

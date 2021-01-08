---
id: 587d78a6367417b2b2512ade
title: 使用 CSS 和 HTML 创建更复杂的形状
challengeType: 0
videoUrl: 'https://scrimba.com/c/cPpz4fr'
forumTopicId: 301050
---

# --description--

世界上最流行的形状非心形莫属了，在本挑战中我们将用纯 CSS 创建一个心形。但是首先你需要了解伪元素 `::before` 和 `::after`。伪元素可以在所选元素之前或之后添加一些内容。在下面的代码中，`::before` 伪元素用来给 class 为 `heart` 的元素添加一个正方形：

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

`::before` 和 `::after` 必须配合 `content` 来使用。这个属性通常用来给元素添加内容诸如图片或者文字。尽管有时 `::before` 和 `::after` 是用来实现形状而非文字，但 `content` 属性仍然是必需的，此时它的值可以是空字符串。在上面的例子里，我们用 `::before` 为 class 是 `heart` 的元素添加了一个黄色的矩形，矩形的 `height` 和 `width` 分别为 50px 和 70px。由于设置了其边框半径为 25%，所以它会呈现出圆角矩形的样子。同时其相对位置为向右偏移 5px、向上偏移 50px。

# --instructions--

把屏幕里的元素变成心形。在 `heart::after` 选择器里面，把 `background-color` 改成粉色（pink），把 `border-radius` 的属性值改成 50%。

接下来，用类选择器选取 class 为 `heart` 的元素，为它添加 `transform` 属性。使用 `rotate()` 函数并设置角度为 -45 度。

最后，在 `heart::before` 选择器里面，设置 `content` 属性值为空字符串。

# --hints--

`heart::after` 伪元素的 `background-color` 属性值应为粉色。

```js
assert(
  code.match(/\.heart::after\s*?{\s*?background-color\s*?:\s*?pink\s*?;/gi)
);
```

`heart::after` 伪元素的 `border-radius` 属性值应为 50%。

```js
assert(code.match(/border-radius\s*?:\s*?50%/gi).length == 2);
```

class 为 `heart` 的元素的 `transform` 属性应使用 `rotate()` 函数并传入参数 `-45deg`。

```js
assert(code.match(/transform\s*?:\s*?rotate\(\s*?-45deg\s*?\)/gi));
```

`heart::before` 伪元素的 `content` 应为空字符串。

```js
assert(code.match(/\.heart::before\s*?{\s*?content\s*?:\s*?("|')\1\s*?;/gi));
```

# --solutions--


---
id: 587d78a6367417b2b2512ade
title: 使用 CSS 和 HTML 创建更复杂的形状
challengeType: 0
videoUrl: 'https://scrimba.com/c/cPpz4fr'
forumTopicId: 301050
---

# --description--

世界上最流行的形状非心形莫属了，在本关里你将用纯 CSS 创建一个心形。但是首先你需要了解 `::before` 和 `::after` 伪类。这些伪类用来在选择元素之前和之后添加一些内容。在下面的例子里，`::before` 伪类元素用来给 class 为 `heart` 的元素添加一个正方形。

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

`::before` 和 `::after` 必须配合 `content` 来使用。这个属性通常用来给元素添加内容诸如图片或者文字。当 `::before` 和 `::after`伪类用来添加某些形状而不是图片或文字时，`content` 属性仍然是必需的，但是它的值可以是空字符串。 在上面的例子里，class 为 `heart` 元素的 `::before` 伪类添加了一个黄色的长方形，长方形的 `height` 和 `width` 分别为 50px 和 70px。由于设置了其边框半径为 25%，所以长方形为圆角长方形，同时其相对位置为距离 `left` 5px，以及向 `top` 偏移 50px。

# --instructions--

把屏幕里的元素变成心形。在 `heart::after` 选择器里面，把 `background-color` 改成粉色（pink），把 `border-radius` 改成 50%。

接下来，在 `heart` class 选择器（单纯的 `heart` 元素）里面，完善 `transform` 属性。使用 `rotate()` 函数并赋参 -45 度。（`rotate()`用法和 `skewX` 以及 `skewY` 类似）。

最后，在 `heart::before` 选择器里面，设置 `content` 属性为空字符串。

# --hints--

`heart::after` 选择器的 `background-color` 属性值应该为粉色。

```js
assert(
  code.match(/\.heart::after\s*?{\s*?background-color\s*?:\s*?pink\s*?;/gi)
);
```

`heart::after` 选择器的 `border-radius` 属性值应该为 50%。

```js
assert(code.match(/border-radius\s*?:\s*?50%/gi).length == 2);
```

`heart` class 的 `transform` 属性应该使用 `rotate()` 函数并赋参为 `-45deg`。

```js
assert(code.match(/transform\s*?:\s*?rotate\(\s*?-45deg\s*?\)/gi));
```

`heart::before`选择器的`content`应该为空字符串。

```js
assert(code.match(/\.heart::before\s*?{\s*?content\s*?:\s*?("|')\1\s*?;/gi));
```

# --solutions--


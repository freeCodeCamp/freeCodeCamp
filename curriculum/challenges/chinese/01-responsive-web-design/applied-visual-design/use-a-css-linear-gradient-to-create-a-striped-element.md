---
id: 587d78a5367417b2b2512ad7
title: 使用 CSS 线性渐变创建条纹元素
challengeType: 0
videoUrl: 'https://scrimba.com/c/c6bmQh2'
forumTopicId: 301072
dashedName: use-a-css-linear-gradient-to-create-a-striped-element
---

# --description--

`repeating-linear-gradient()` 函数和 `linear-gradient()` 很像，主要区别是前者会重复指定的渐变。 `repeating-linear-gradient()` 有很多参数，为了便于理解，本关只用到角度值和色标。

角度就是渐变的方向。 色标代表渐变颜色及发生渐变的位置，由百分比或者像素值表示。

在代码编辑器的例子里，渐变开始于 0 像素位置的 `yellow`，然后过渡到距离开始位置 40 像素的 `blue`。 由于下一个渐变颜色的起始位置也是 40 像素，所以颜色直接渐变成第三个颜色值 `green`，然后过渡到距离开始位置 80 像素的 `red`。

下面的代码可以帮助理解成对的起止渐变颜色值是如何过渡的。

`0px [yellow -- blend -- blue] 40px [green -- blend -- red] 80px`

如果有两个相邻色标的颜色值相同，那么过渡看起来就不会很明显。 由于是在两个相同的颜色间过渡，那么中间的过渡色也会是相同颜色，接着就是这个颜色直接过渡到下一个颜色，最终产生的效果就是条纹。

# --instructions--

修改 `repeating-linear-gradient()` 函数使其为渐变角度为 `45deg` 的条纹，第一个渐变颜色为 `yellow`, 第二个渐变颜色为 `black`。

# --hints--

`repeating-linear-gradient()` 的渐变角度应该为 45deg。

```js
assert(code.match(/background:\s*?repeating-linear-gradient\(\s*?45deg/gi));
```

`repeating-linear-gradient()` 的渐变角度不应为 90deg。

```js
assert(!code.match(/90deg/gi));
```

0px 处的渐变颜色应该为 `yellow`。

```js
assert(code.match(/yellow\s+?0(px)?/gi));
```

40px 处的第一个渐变颜色应该为 `yellow`。

```js
assert(code.match(/yellow\s+?40px/gi));
```

40px 处的第二个渐变颜色应该为 `black`。

```js
assert(code.match(/yellow\s+?40px,\s*?black\s+?40px/gi));
```

80px 处最后一个渐变颜色应该为 `black`。

```js
assert(code.match(/black\s+?80px/gi));
```

# --seed--

## --seed-contents--

```html
<style>

  div{
    border-radius: 20px;
    width: 70%;
    height: 400px;
    margin:  50 auto;
    background: repeating-linear-gradient(
      90deg,
      yellow 0px,
      blue 40px,
      green 40px,
      red 80px
    );
  }

</style>

<div></div>
```

# --solutions--

```html
<style>
  div{
    border-radius: 20px;
    width: 70%;
    height: 400px;
    margin:  50 auto;
    background: repeating-linear-gradient(
      45deg,
      yellow 0px,
      yellow 40px,
      black 40px,
      black 80px
    );
  }
</style>
<div></div>
```

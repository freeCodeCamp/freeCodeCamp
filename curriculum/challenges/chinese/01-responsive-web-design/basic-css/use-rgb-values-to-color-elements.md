---
id: bad87fee1348bd9aede08718
title: 使用 RGB 值为元素上色
challengeType: 0
videoUrl: 'https://scrimba.com/c/cRkp2fr'
forumTopicId: 18369
dashedName: use-rgb-values-to-color-elements
---

# --description--

`RGB` 值是在 CSS 中表示颜色的另一种方法。

黑色的 `RGB` 值：

```css
rgb(0, 0, 0)
```

白色的 `RGB` 值：

```css
rgb(255, 255, 255)
```

RGB 值与我们之前学到的十六进制编码不同。`RGB` 值不需要用到 6 位十六进制数字，而只需要指定每种颜色的亮度大小，数值范围从 0 到 255。

如果我们稍微计算一下，就不难发现这两种表示方式本质上是等价的。在十六进制编码中，我们用两个十六进制数表示一个颜色；这样，每种颜色都有 16 \* 16（即 256）种可能。 所以，`RGB` 从零开始计算，与十六进制代码的值的数量完全相同。

下面是通过使用 RGB 值设置背景颜色为橘色的例子：`body`。

```css
body {
  background-color: rgb(255, 165, 0);
}
```

# --instructions--

请用 RGB 值 `rgb(0, 0, 0)` 替换 `body` 元素背景颜色的十六进制编码。

# --hints--

`body` 元素的背景颜色应该是黑色。

```js
assert($('body').css('background-color') === 'rgb(0, 0, 0)');
```

您应该使用 `rgb` 给您的 `body` 元素黑色背景。

```js
assert(code.match(/rgb\s*\(\s*0\s*,\s*0\s*,\s*0\s*\)/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    background-color: #F00;
  }
</style>
```

# --solutions--

```html
<style>
  body {
    background-color: rgb(0, 0, 0);
  }
</style>
```

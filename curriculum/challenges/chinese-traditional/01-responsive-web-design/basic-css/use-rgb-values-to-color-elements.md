---
id: bad87fee1348bd9aede08718
title: 使用 RGB 值爲元素上色
challengeType: 0
videoUrl: 'https://scrimba.com/c/cRkp2fr'
forumTopicId: 18369
dashedName: use-rgb-values-to-color-elements
---

# --description--

`RGB` 值是在 CSS 中表示顏色的另一種方法。

黑色的 `RGB` 值：

```css
rgb(0, 0, 0)
```

白色的 `RGB` 值：

```css
rgb(255, 255, 255)
```

RGB 值與我們之前學到的十六進制編碼不同。`RGB` 值不需要用到 6 位十六進制數字，而只需要指定每種顏色的亮度大小，數值範圍從 0 到 255。

如果我們稍微計算一下，就不難發現這兩種表示方式本質上是等價的。在十六進制編碼中，我們用兩個十六進制數表示一個顏色；這樣，每種顏色都有 16 \* 16（即 256）種可能。 所以，`RGB` 從零開始計算，與十六進制代碼的值的數量完全相同。

下面是通過使用 RGB 值設置背景顏色爲橘色的例子：`body`。

```css
body {
  background-color: rgb(255, 165, 0);
}
```

# --instructions--

請用 RGB 值 `rgb(0, 0, 0)` 替換 `body` 元素背景顏色的十六進制編碼。

# --hints--

`body` 元素的背景顏色應該是黑色。

```js
assert($('body').css('background-color') === 'rgb(0, 0, 0)');
```

您應該使用 `rgb` 給您的 `body` 元素黑色背景。

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

---
id: 618a0b2befb143baefab632b
title: 步骤 37
challengeType: 0
dashedName: step-37
---

# --description--

注意红色和品红色是邻近的颜色，非常明亮。 如果在网站上使用不当，这样的颜色对比会使人分心，比如将文字背景色和文字颜色设置为互补色，这样文字会很难看清。

选择一种颜色作为主要颜色， 并使用其补充颜色作为强调来提醒访问者注意页面上的某些内容，是一种更好的方式。

首先，在 `h1` 规则中，使用 `rgb` 函数将其 `background-color` 设置为 cyan（蓝绿色）。

# --hints--

你不应该删除或修改 `text-align` 属性或它的值。

```js
assert(new __helpers.CSSHelp(document).getStyle('h1')?.textAlign === 'center');
```

你的 `h1` CSS 规则应该有一个 `background-color` 属性设置为 `rgb(0, 255, 255)`。

```js
assert(new __helpers.CSSHelp(document).getStyle('h1')?.backgroundColor === 'rgb(0, 255, 255)');
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Colored Markers</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h1>CSS Color Markers</h1>
    <div class="container">
      <div class="marker one">
      </div>
      <div class="marker two">
      </div>
      <div class="marker three">
      </div>
    </div>
  </body>
</html>
```

```css
--fcc-editable-region--
h1 {
  text-align: center;
}
--fcc-editable-region--

.container {
  background-color: rgb(255, 255, 255);
  padding: 10px 0;
}

.marker {
  width: 200px;
  height: 25px;
  margin: 10px auto;
}

.one {
  background-color: rgb(255, 0, 0);
}

.two {
  background-color: rgb(0, 255, 255);
}

.three {
  background-color: rgb(0, 0, 0);
}

```

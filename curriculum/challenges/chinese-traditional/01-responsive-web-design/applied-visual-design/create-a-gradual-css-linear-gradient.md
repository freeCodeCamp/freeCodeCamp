---
id: 587d78a5367417b2b2512ad6
title: 創建一個 CSS 線性漸變
challengeType: 0
videoUrl: 'https://scrimba.com/c/cg4dpt9'
forumTopicId: 301047
dashedName: create-a-gradual-css-linear-gradient
---

# --description--

HTML 元素的背景色並不侷限於單色。 CSS 還爲我們提供了顏色漸變。 可通過 `background` 裏的 `linear-gradient()` 實現線性漸變， 以下是它的語法：

```css
background: linear-gradient(gradient_direction, color 1, color 2, color 3, ...);
```

第一個參數指定了顏色過渡的方向——它的值是角度，`90deg` 表示垂直漸變（從左到右），`45deg` 表示沿對角線漸變（從左下方到右上方）。 其他參數指定了漸變顏色的順序：

例如：

```css
background: linear-gradient(90deg, red, yellow, rgb(204, 204, 255));
```

# --instructions--

使用 `linear-gradient()` 給 `div` 元素添加 `background` 漸變色，漸變角度爲 35 度，從 `#CCFFFF` 過渡到 `#FFCCCC`。

# --hints--

`div` 元素應有一個指定方向和顏色的 `linear-gradient` `background`。

```js
assert(
  $('div')
    .css('background-image')
    .match(
      /linear-gradient\(35deg, rgb\(204, 255, 255\), rgb\(255, 204, 204\)\)/gi
    )
);
```

# --seed--

## --seed-contents--

```html
<style>
  div {
    border-radius: 20px;
    width: 70%;
    height: 400px;
    margin: 50px auto;

  }

</style>

<div></div>
```

# --solutions--

```html
<style>
  div {
    border-radius: 20px;
    width: 70%;
    height: 400px;
    margin: 50px auto;
    background: linear-gradient(35deg, #CCFFFF, #FFCCCC);
  }
</style>
<div></div>
```

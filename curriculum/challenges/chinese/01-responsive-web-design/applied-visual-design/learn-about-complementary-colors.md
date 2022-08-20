---
id: 587d78a3367417b2b2512ad1
title: 了解互补色
challengeType: 0
videoUrl: 'https://scrimba.com/c/c2MD3Tr'
forumTopicId: 301056
dashedName: learn-about-complementary-colors
---

# --description--

色彩理论以及设计色彩学很复杂，这里将只涉及基础部分。 在网站设计里，颜色能让内容更醒目，能调动情绪，从而创造舒适的视觉体验。 不同的颜色组合对网站的视觉效果影响很大，精妙的设计都需要适宜的颜色来美化页面内容。

色环是我们认识颜色关系的好工具。它是一个近色相邻、异色相离的圆环。 当两个颜色恰好在色环的两端时，这两个颜色就互为补色。 两个互为补色的颜色会在混合后变成灰色。 然而，补色搭配能形成强烈的视觉对比效果。

下面是一些以 hex 形式表示的补色例子：

<blockquote>红色（#FF0000）和蓝绿色 (#00FFFF)<br>绿色（#00FF00）和品红色（#FF00FF）<br>蓝色（#0000FF）和黄色（#FFFF00）</blockquote>

这与我们许多人在学校学的过时的 RYB 色彩模式不同，RYB 有不同的原色和补色。 现代色彩理论使用 RGB 模型（如在计算机屏幕上）和 CMY（K）模型（如在印刷中）。

现在，很多在线选色工具也为我们提供了寻找补色的功能。

**注意：** 对于颜色相关的挑战：颜色搭配是提起用户兴趣或吸引用户注意的重要方式之一。 但我们不应让颜色作为传达重要信息的唯一方式，因为视觉障碍用户可能无法像其他人一样看出其中的含义。 我们将会在应用无障碍章节进行详细介绍。

# --instructions--

把 class 为 `blue` 和 `yellow` 的元素的 `background-color` 属性改成相应的颜色。 注意观察这两个颜色的搭配效果，以及对比白色背景的视觉效果。

# --hints--

class 为 `blue` 的 `div` 元素应有一个 `background-color`，颜色为蓝色。

```js
assert($('.blue').css('background-color') == 'rgb(0, 0, 255)');
```

class 为 `yellow` 的 `div` 元素的 `background-color` 属性，颜色为黄色。

```js
assert($('.yellow').css('background-color') == 'rgb(255, 255, 0)');
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    background-color: #FFFFFF;
  }
  .blue {
    background-color: #000000;
  }
  .yellow {
    background-color: #000000;
  }
  div {
    display: inline-block;
    height: 100px;
    width: 100px;
  }
</style>
<div class="blue"></div>
<div class="yellow"></div>
```

# --solutions--

```html
<style>
  body {
    background-color: #FFFFFF;
  }
  .blue {
    background-color: blue;
  }
  .yellow {
    background-color: yellow;
  }
  div {
    display: inline-block;
    height: 100px;
    width: 100px;
  }
</style>
<div class="blue"></div>
<div class="yellow"></div>
```

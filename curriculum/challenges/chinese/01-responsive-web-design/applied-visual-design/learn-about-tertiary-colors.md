---
id: 587d78a4367417b2b2512ad2
title: 了解三次色
challengeType: 0
forumTopicId: 301057
dashedName: learn-about-tertiary-colors
---

# --description--

电脑显示器和各类屏幕都是基于颜色叠加的模型：将红（R）、绿（G）、蓝（B）三原色的色光以不同的比例相加，就可以产生各种色彩光。 这在现代色彩理论中叫作三原色光模式（RGB Color Model）。 红色（R）、绿色（G）和蓝色（B）叫作三原色。 如果把两种原色相加，就可以产生二次色：蓝绿（G+B）、品红（R+B）和黄色（R+G）， 我们在上一个挑战里已经见过这些颜色了。 这些二次色恰好是在合成它们时未使用的原色的补色，即在色环中位于两端。 例如，品红色是红色和蓝色相加产生，它是绿色的补色。

三次色是由原色和二次色相加产生的颜色， 例如，在 RGB 颜色模型中，红色（原色）和黄色（二次色）相加产生橙色（三次色）。 将这六种颜色中相邻的颜色相加，便产生了十二色色环。

设计里面有很多种颜色搭配方法。 涉及到三次色的一种配色方法是分裂补色搭配法。 选定主色之后，在色环上选择与它的补色相邻的两种颜色与之搭配。 此种搭配既有对比，又不失和谐。

下面是使用分裂补色搭配法创建的三个颜色：

<table class='table table-striped'><thead><tr><th>颜色</th><th>HEX 颜色码</th></tr></thead><thead></thead><tbody><tr><td>橙色</td><td>#FF7F00</td></tr><tr><td>蓝绿色</td><td>#00FFFF</td></tr><tr><td>树莓红</td><td>#FF007F</td></tr></tbody></table>

# --instructions--

把 class 为 `orange`、`cyan` 和 `raspberry` 的 `background-color` 改成其对应的颜色。 在这个挑战中，请使用颜色的十六进制符号（即 hex code）来表示。

# --hints--

class 为 `orange` 的 `div` 的 `background-color` 属性值应为橙色。

```js
assert($('.orange').css('background-color') == 'rgb(255, 127, 0)');
```

class 为 `cyan` 的 `div` 的 `background-color` 属性值应为蓝绿色。

```js
assert($('.cyan').css('background-color') == 'rgb(0, 255, 255)');
```

class 为 `raspberry` 的 `div` 的 `background-color` 属性值应为树莓红色。

```js
assert($('.raspberry').css('background-color') == 'rgb(255, 0, 127)');
```

所有的 `background-color` 应使用十六进制颜色码，而不应使用颜色名称。

```js
assert(!/background-color:\s(orange|cyan|raspberry)/.test(code));
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    background-color: #FFFFFF;
  }

  .orange {
    background-color: #000000;
  }

  .cyan {
    background-color: #000000;
  }

  .raspberry {
    background-color: #000000;
  }

  div {
    height: 100px;
    width: 100px;
    margin-bottom: 5px;
  }
</style>

<div class="orange"></div>
<div class="cyan"></div>
<div class="raspberry"></div>
```

# --solutions--

```html
<style>
  body {
    background-color: #FFFFFF;
  }

  .orange {
    background-color: #FF7F00;
  }

  .cyan {
    background-color: #00FFFF;
  }

  .raspberry {
    background-color: #FF007F;
  }

  div {
    height: 100px;
    width: 100px;
    margin-bottom: 5px;
  }
</style>
<div class="orange"></div>
<div class="cyan"></div>
<div class="raspberry"></div>
```

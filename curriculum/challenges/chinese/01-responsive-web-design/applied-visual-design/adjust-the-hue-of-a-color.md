---
id: 587d78a4367417b2b2512ad4
title: 调整颜色的色相
challengeType: 0
videoUrl: 'https://scrimba.com/c/cPp38TZ'
forumTopicId: 301036
---

# --description--

HSL 色彩空间模型是一种将 RGB 色彩模型中的点放在圆柱坐标系中的表示法，描述了色相（hue）、饱和度（saturation）、亮度（lightness）。CSS3 引入了对应的 `hsl()` 属性做为对应的颜色描述方式。

**色相**是色彩的基本属性，就是平常所说的颜色名称，如红色、黄色等。以颜色光谱为例，光谱左边从红色开始，移动到中间的绿色，一直到右边的蓝色，色相值就是沿着这条线的取值。在 `hsl()` 里面，色相用色环来代替光谱，色相值就是色环里面的颜色对应的从 0 到 360 度的角度值。

**饱和度**是指色彩的纯度，也就是颜色里灰色的占比，越高色彩越纯，低则逐渐变灰，取0-100%的数值。

**亮度**决定颜色的明暗程度，也就是颜色里白色或者黑色的占比，100% 亮度是白色， 0% 亮度是黑色，而 50% 亮度是“一般的”。

下面是一些使用 `hsl()` 描述颜色的例子，颜色都为满饱和度，中等亮度:

<table class='table table-striped'><thead><tr><th>颜色</th><th>HSL</th></tr></thead><tbody><tr><td>红</td><td>hsl(0, 100%, 50%)</td></tr><tr><td>黄</td><td>hsl(60, 100%, 50%)</td></tr><tr><td>绿</td><td>hsl(120, 100%, 50%)</td></tr><tr><td>蓝绿</td><td>hsl(180, 100%, 50%)</td></tr><tr><td>蓝</td><td>hsl(240, 100%, 50%)</td></tr><tr><td>品红</td><td>hsl(300, 100%, 50%)</td></tr></tbody></table>

# --instructions--

把 class 为 `green`、`cyan` 和`blue` `div` 的 `background-color` 使用 `hsl()` 表示法描述相应的颜色。颜色都为满饱和度，亮度中等。

# --hints--

你应该使用 `hsl()` 属性来表示绿色。

```js
assert(code.match(/\.green\s*?{\s*?background-color:\s*?hsl/gi));
```

你应该使用 `hsl()` 属性来表示蓝绿色。

```js
assert(code.match(/\.cyan\s*?{\s*?background-color:\s*?hsl/gi));
```

你应该使用 `hsl()` 属性来表示蓝色。

```js
assert(code.match(/\.blue\s*?{\s*?background-color:\s*?hsl/gi));
```

class 为 `green` 的 `div` 应该有绿色的 `background-color` CSS 属性。

```js
assert($('.green').css('background-color') == 'rgb(0, 255, 0)');
```

class 为 `cyan` 的 `div` 应该有蓝绿色的 `background-color` CSS 属性。

```js
assert($('.cyan').css('background-color') == 'rgb(0, 255, 255)');
```

class 为 `blue` 的 `div` 应该有蓝色的 `background-color` CSS 属性。

```js
assert($('.blue').css('background-color') == 'rgb(0, 0, 255)');
```

# --solutions--


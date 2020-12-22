---
id: 587d7fab367417b2b2512bda
title: 用 D3 创建线性比例
challengeType: 6
forumTopicId: 301483
---

# --description--

条形图和散点图都直接在 SVG 画布上绘制数据。但是，如果一组的高或者其中一个数据点比 SVG 的高或宽更大，它将跑到 SVG 区域外。

D3 中，比例尺可帮助布局数据。 `Scales` 是告诉程序如何将一组原始数据点映射到 SVG 画布上像素的函数。

例如，假设你有一个 100x500 大小的 SVG 画布，你想为许多国家绘制国内生产总值(GDP)的图表。这组数据将在十亿美元或万亿美元的范围内。你给 D3 提供一种缩放方法告诉它如何将大的 GDP 值放置在 100x500 大小的区域。

你不太可能按原样绘制原始数据，在绘制之前，将整个数据集缩放，这样 `x` 和 `y` 值才适合你画布的宽高。

D3 有几种缩放类型。对于线性缩放（通常使用于定量数据），使用 D3 的 `scaleLinear()` 方法：

`const scale = d3.scaleLinear()`

默认情况下，比例尺使用一比一的比例，输出的值和输入的值相同。在后面的章节中将涉及如何改变默认比例。

# --instructions--

改变 `scale` 变量的值创建线性缩放，然后将 `output` 变量设置为 `scale` 函数（参数为 50）。

# --hints--

`h2` 的文本应该为 50。

```js
assert($('h2').text() == '50');
```

你应该使用 `scaleLinear` 方法。

```js
assert(code.match(/\.scaleLinear/g));
```

`output` 变量应该调用输入参数为 50 的 scale 的值。

```js
assert(output == 50 && code.match(/scale\(\s*?50\s*?\)/g));
```

# --solutions--


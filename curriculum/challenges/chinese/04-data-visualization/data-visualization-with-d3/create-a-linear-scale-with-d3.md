---
id: 587d7fab367417b2b2512bda
challengeType: 6
forumTopicId: 301483
title: 用 D3 创建线性比例
---

## Description
<section id='description'>
条形图和散点图都直接在 SVG 画布上绘制数据。但是，如果一组的高或者其中一个数据点比 SVG 的高或宽更大，它将跑到 SVG 区域外。
D3 中，比例尺可帮助布局数据。 <code>Scales</code> 是告诉程序如何将一组原始数据点映射到 SVG 画布上像素的函数。
例如，假设你有一个 100x500 大小的 SVG 画布，你想为许多国家绘制国内生产总值(GDP)的图表。这组数据将在十亿美元或万亿美元的范围内。你给 D3 提供一种缩放方法告诉它如何将大的 GDP 值放置在 100x500 大小的区域。
你不太可能按原样绘制原始数据，在绘制之前，将整个数据集缩放，这样 <code>x</code> 和 <code>y</code> 值才适合你画布的宽高。
D3 有几种缩放类型。对于线性缩放（通常使用于定量数据），使用 D3 的 <code>scaleLinear()</code> 方法：
<code> const scale = d3.scaleLinear()</code> 
默认情况下，比例尺使用一比一的比例，输出的值和输入的值相同。在后面的章节中将涉及如何改变默认比例。
</section>

## Instructions
<section id='instructions'>
改变 <code>scale</code> 变量的值创建线性缩放，然后将 <code>output</code> 变量设置为 <code>scale</code> 函数（参数为 50）。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>h2</code> 的文本应该为 50。
    testString: assert($('h2').text() == '50');
  - text: 你应该使用 <code>scaleLinear</code> 方法。
    testString: assert(code.match(/\.scaleLinear/g));
  - text: <code>output</code> 变量应该调用输入参数为 50 的 scale 的值。
    testString: assert(output == 50 && code.match(/scale\(\s*?50\s*?\)/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <script>
    // 在下面添加你的代码

    const scale = undefined; // 在这里创建 scale 
    const output = scale(); // 在这里用一个参数调用 scale 

    // 在上面添加你的代码

    d3.select("body")
      .append("h2")
      .text(output);

  </script>
</body>
```

</div>



</section>

## Solution
<section id='solution'>

```html
<body>
  <script>

    const scale = d3.scaleLinear();
    const output = scale(50); 

    d3.select("body")
      .append("h2")
      .text(output);

  </script>
</body>

```

</section>

---
id: 587d7fa8367417b2b2512bcc
challengeType: 6
forumTopicId: 301485
title: 用 SVG 显示形状
---

## Description
<section id='description'>
上个挑战用给定的宽和高创建了一个 <code>svg</code> 元素，因为在它的 <code>style</code> 标签中有 <code>background-color</code>，所以它是可见的。这一段代码为给定的宽和高腾出空间。
下一步是在 <code>svg</code> 区域中创建图形。SVG 支持多种图形，比如矩形和圆形，并用它们来显示数据。例如，在条形图中一个矩形（<code>&lt;rect&gt;</code>）SVG 图形可以创建一个组。
当把图形放入 <code>svg</code> 区域中时，你可以用 <code>x</code> 和 <code>y</code> 坐标来指定它的位置。起始点 (0,0) 是在左上角。<code>x</code> 正值将图形右移，<code>y</code> 正值将图形从原点下移
若要把一个图形放在上个挑战的 500（宽）x 100（高）的 <code>svg</code> 中心，可将 <code>x</code> 坐标设置为 250，<code>y</code> 坐标设置为 50。
SVG 的 <code>rect</code> 有四个属性。<code>x</code> 和 <code>y</code> 坐标指定图形放在 <code>svg</code> 区域的位置，<code>height</code> 和 <code>width</code> 指定图形大小。
</section>

## Instructions
<section id='instructions'>
用 <code>append()</code> 方法给 <code>svg</code> 添加一个 <code>rect</code> 图形。将它的 <code>width</code> 属性设置为 25，<code>height</code> 属性设置为 100，<code>x</code> 和 <code>y</code> 属性都设置为 0。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的文档应该有 1 个 <code>rect</code> 元素。
    testString: assert($('rect').length == 1);
  - text: <code>rect</code> 元素的 <code>width</code> 属性应该为 25。
    testString: assert($('rect').attr('width') == '25');
  - text: <code>rect</code> 元素的 <code>height</code> 属性应该为 100。
    testString: assert($('rect').attr('height') == '100');
  - text: <code>rect</code> 元素的 <code>x</code> 属性应该为 0。
    testString: assert($('rect').attr('x') == '0');
  - text: <code>rect</code> 元素的 <code>y</code> 属性应该为 0。
    testString: assert($('rect').attr('y') == '0');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h)
                  // 在下面添加你的代码



                  // 在上面添加你的代码
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
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h)
                  .append("rect")
                  .attr("width", 25)
                  .attr("height", 100)
                  .attr("x", 0)
                  .attr("y", 0);
  </script>
</body>

```

</section>

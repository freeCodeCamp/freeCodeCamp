---
id: 587d7fa9367417b2b2512bd0
challengeType: 6
forumTopicId: 301488
title: 反转 SVG 元素
---

## Description
<section id='description'>
你可能已经注意到了常见的条形图像是把这个翻转或者颠倒过来。这是因为 SVG 的 (x, y) 坐标有些特别。
在 SVG 中，坐标轴的原点在左上角。<code>x</code> 坐标为 0 将图形放在 SVG 区域的左边缘，<code>y</code> 坐标为 0 将图形放在 SVG 区域的上边缘。<code>x</code> 值增大矩形将向右移动，<code>y</code> 值增大矩形将向下移动。
为了使条形图向上，需要改变 <code>y</code> 坐标计算的方式。这需要计算组的高度和 SVG 区域的总高度。
SVG 区域的高度为 100。如果在集合中一个数据点的值为 0，这组将从 SVG 区域的最底端开始（而不是顶端）。为此，<code>y</code> 坐标的值应为 100。如果数据点的值为 1，你将从 <code>y</code> 坐标为 100 开始来将这组设置在底端，然后需要考虑该组的高度为 1，所以最终的 <code>y</code> 坐标将是 99。
<code>y</code> 坐标为 <code>y = heightOfSVG - heightOfBar</code> 会将条形图向上放置。
</section>

## Instructions
<section id='instructions'>
改变 <code>y</code> 属性的回调函数，让条形图向上放置。<code>height</code> 的值是 3 倍 <code>d</code> 的值。
<strong>提示</strong><br>通常，高度关系为 <code>y = h - m * d</code>，其中 <code>m</code> 是对数据点进行缩放的比例。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 第一个 <code>rect</code> 的 <code>y</code> 值应该为 64。
    testString: assert($('rect').eq(0).attr('y') == h - (dataset[0] * 3));
  - text: 第二个 <code>rect</code> 的 <code>y</code> 值应该为 7。
    testString: assert($('rect').eq(1).attr('y') == h - (dataset[1] * 3));
  - text: 第三个 <code>rect</code> 的 <code>y</code> 值应该为 34。
    testString: assert($('rect').eq(2).attr('y') == h - (dataset[2] * 3));
  - text: 第四个 <code>rect</code> 的 <code>y</code> 值应该为 49。
    testString: assert($('rect').eq(3).attr('y') == h - (dataset[3] * 3));
  - text: 第五个 <code>rect</code> 的 <code>y</code> 值应该为 25。
    testString: assert($('rect').eq(4).attr('y') == h - (dataset[4] * 3));
  - text: 第六个 <code>rect</code> 的 <code>y</code> 值应该为 46。
    testString: assert($('rect').eq(5).attr('y') == h - (dataset[5] * 3));
  - text: 第七个 <code>rect</code> 的 <code>y</code> 值应该为 13。
    testString: assert($('rect').eq(6).attr('y') == h - (dataset[6] * 3));
  - text: 第八个 <code>rect</code> 的 <code>y</code> 值应该为 58。
    testString: assert($('rect').eq(7).attr('y') == h - (dataset[7] * 3));
  - text: 第九个 <code>rect</code> 的 <code>y</code> 值应该为 73。
    testString: assert($('rect').eq(8).attr('y') == h - (dataset[8] * 3));

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
                  .attr("height", h);

    svg.selectAll("rect")
       .data(dataset)
       .enter()
       .append("rect")
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => {
         // 在下面添加你的代码



         // 在上面添加你的代码
       })
       .attr("width", 25)
       .attr("height", (d, i) => 3 * d);
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
                  .attr("height", h);

    svg.selectAll("rect")
       .data(dataset)
       .enter()
       .append("rect")
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - 3 * d)
       .attr("width", 25)
       .attr("height", (d, i) => 3 * d);
  </script>
</body>

```

</section>

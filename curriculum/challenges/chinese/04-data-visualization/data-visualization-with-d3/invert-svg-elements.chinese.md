---
id: 587d7fa9367417b2b2512bd0
title: Invert SVG Elements
challengeType: 6
videoUrl: ''
localeTitle: 反转SVG元素
---

## Description
<section id="description">
您可能已经注意到条形图看起来像是上下颠倒或倒置的。这是因为SVG如何使用（x，y）坐标。
在SVG中，坐标的原点位于左上角。 <code> x </code>坐标为0时，会在SVG区域的左边缘放置一个形状。 <code> y </code>坐标为0时，会在SVG区域的顶部边缘放置一个形状。较高的<code> x </code>值将矩形推向右侧。较高的<code> y </code>值将矩形向下推。
要使条形图正面朝上，您需要更改<code> y </code>坐标的计算方式。它需要考虑钢筋的高度和SVG区域的总高度。
SVG区域的高度为100。如果集合中的数据点为0，则希望条形图从SVG区域的底部开始（而不是顶部）。为此，<code> y </code>坐标需要值为100。如果数据点值为1，则应从100的<code> y </code>坐标开始，以将条形设置为底部。然后，您需要考虑钢筋的高度1，因此最终<code> y </code>坐标为99。
<code> y </code>坐标为<code> y = heightOfSVG-heightOfBar </code>会将条形图朝上放置。
</section>

## Instructions
<section id="instructions">更改<code>y</code>属性的回调函数以将栏设置为正面朝上。请记住，条形的<code>height</code>是数据值<code>d</code> 3倍。 <strong>注意</strong> <br>通常，关系是<code>y = h - m * d</code> ，其中<code>m</code>是缩放数据点的常数。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 第一个<code>rect</code>的<code>y</code>值应为64。
    testString: assert($('rect').eq(0).attr('y') == h - (dataset[0] * 3));
  - text: 第二个<code>rect</code>的<code>y</code>值应为7。
    testString: assert($('rect').eq(1).attr('y') == h - (dataset[1] * 3));
  - text: 第三个<code>rect</code>的<code>y</code>值应为34。
    testString: assert($('rect').eq(2).attr('y') == h - (dataset[2] * 3));
  - text: 第四个<code>rect</code>的<code>y</code>值应为49。
    testString: assert($('rect').eq(3).attr('y') == h - (dataset[3] * 3));
  - text: 第五个<code>rect</code>的<code>y</code>值应为25。
    testString: assert($('rect').eq(4).attr('y') == h - (dataset[4] * 3));
  - text: 第六个<code>rect</code>的<code>y</code>值应为46。
    testString: assert($('rect').eq(5).attr('y') == h - (dataset[5] * 3));
  - text: 第七个<code>rect</code>的<code>y</code>值应为13。
    testString: assert($('rect').eq(6).attr('y') == h - (dataset[6] * 3));
  - text: 第八个<code>rect</code>的<code>y</code>值应为58。
    testString: assert($('rect').eq(7).attr('y') == h - (dataset[7] * 3));
  - text: 第九个<code>rect</code>的<code>y</code>值应为73。
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
         // Add your code below this line



         // Add your code above this line
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

```js
// solution required
```

/section>

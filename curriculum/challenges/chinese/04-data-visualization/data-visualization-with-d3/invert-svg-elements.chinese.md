---
id: 587d7fa9367417b2b2512bd0
title: Invert SVG Elements
required:
  - src: 'https://cdnjs.cloudflare.com/ajax/libs/d3/4.3.0/d3.min.js'
challengeType: 6
videoUrl: ''
localeTitle: 反转SVG元素
---

## Description
undefined

## Instructions
<section id="instructions">更改<code>y</code>属性的回调函数以将栏设置为正面朝上。请记住，条形的<code>height</code>是数据值<code>d</code> 3倍。 <strong>注意</strong> <br>通常，关系是<code>y = h - m * d</code> ，其中<code>m</code>是缩放数据点的常数。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 第一个<code>rect</code>的<code>y</code>值应为64。
    testString: 'assert($("rect").eq(0).attr("y") == h - (dataset[0] * 3), "The first <code>rect</code> should have a <code>y</code> value of 64.");'
  - text: 第二个<code>rect</code>的<code>y</code>值应为7。
    testString: 'assert($("rect").eq(1).attr("y") == h - (dataset[1] * 3), "The second <code>rect</code> should have a <code>y</code> value of 7.");'
  - text: 第三个<code>rect</code>的<code>y</code>值应为34。
    testString: 'assert($("rect").eq(2).attr("y") == h - (dataset[2] * 3), "The third <code>rect</code> should have a <code>y</code> value of 34.");'
  - text: 第四个<code>rect</code>的<code>y</code>值应为49。
    testString: 'assert($("rect").eq(3).attr("y") == h - (dataset[3] * 3), "The fourth <code>rect</code> should have a <code>y</code> value of 49.");'
  - text: 第五个<code>rect</code>的<code>y</code>值应为25。
    testString: 'assert($("rect").eq(4).attr("y") == h - (dataset[4] * 3), "The fifth <code>rect</code> should have a <code>y</code> value of 25.");'
  - text: 第六个<code>rect</code>的<code>y</code>值应为46。
    testString: 'assert($("rect").eq(5).attr("y") == h - (dataset[5] * 3), "The sixth <code>rect</code> should have a <code>y</code> value of 46.");'
  - text: 第七个<code>rect</code>的<code>y</code>值应为13。
    testString: 'assert($("rect").eq(6).attr("y") == h - (dataset[6] * 3), "The seventh <code>rect</code> should have a <code>y</code> value of 13.");'
  - text: 第八个<code>rect</code>的<code>y</code>值应为58。
    testString: 'assert($("rect").eq(7).attr("y") == h - (dataset[7] * 3), "The eighth <code>rect</code> should have a <code>y</code> value of 58.");'
  - text: 第九个<code>rect</code>的<code>y</code>值应为73。
    testString: 'assert($("rect").eq(8).attr("y") == h - (dataset[8] * 3), "The ninth <code>rect</code> should have a <code>y</code> value of 73.");'

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
</section>

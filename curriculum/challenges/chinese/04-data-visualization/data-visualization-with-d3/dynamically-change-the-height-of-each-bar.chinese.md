---
id: 587d7fa9367417b2b2512bcf
title: Dynamically Change the Height of Each Bar
challengeType: 6
videoUrl: ''
localeTitle: 动态改变每个栏的高度
---

## Description
<section id="description">每个条的高度可以设置为数组中数据点的值，类似于动态设置<code>x</code>值的方式。 <blockquote> selection.attr（“property”，（d，i）=&gt; { <br> / * <br> * d是数据点值<br> * i是数组中数据点的索引<br> * / <br> }） </blockquote></section>

## Instructions
<section id="instructions">更改<code>height</code>属性的回调函数以返回数据值乘以3. <strong>注意</strong> <br>请记住，将所有数据点乘以相同的常量可以缩放数据（如放大）。在此示例中，有助于查看条形值之间的差异。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 測試文本
    testString: assert(true);

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
       .attr("y", 0)
       .attr("width", 25)
       .attr("height", (d, i) => {
         // Add your code below this line



         // Add your code above this line
       });
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

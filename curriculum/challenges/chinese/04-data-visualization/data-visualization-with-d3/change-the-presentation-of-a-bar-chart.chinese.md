---
id: 587d7fa8367417b2b2512bca
title: Change the Presentation of a Bar Chart
challengeType: 6
videoUrl: ''
localeTitle: 更改条形图的演示文稿
---

## Description
<section id="description">最后一个挑战创建了一个条形图，但有几个格式更改可以改善它：1）在每个条之间添加空格以在视觉上分隔它们，这是通过为<code>bar</code>类添加边距来完成的2）增加条形的高度可以更好地显示值的差异，这可以通过将值乘以数字来缩放高度来完成</section>

## Instructions
<section id="instructions">首先，在<code>style</code>标记的<code>bar</code>类中添加2px的<code>margin</code> 。接下来，更改<code>style()</code>方法中的回调函数，使其返回原始数据值的10倍（加上“px”）。 <strong>注意</strong> <br>将每个数据点乘以<em>相同的</em>常数只会改变比例。它就像放大一样，并没有改变底层数据的含义。 </section>

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
<style>
  .bar {
    width: 25px;
    height: 100px;
    /* Add your code below this line */

    /* Add your code above this line */
    display: inline-block;
    background-color: blue;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("div")
      .data(dataset)
      .enter()
      .append("div")
      .attr("class", "bar")
      // Add your code below this line
      .style("height", (d) => (d + "px"))

      // Add your code above this line
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

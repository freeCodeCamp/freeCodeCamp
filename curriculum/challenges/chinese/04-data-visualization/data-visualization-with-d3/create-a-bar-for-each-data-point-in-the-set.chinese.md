---
id: 587d7fa8367417b2b2512bcd
title: Create a Bar for Each Data Point in the Set
challengeType: 6
videoUrl: ''
localeTitle: 为集合中的每个数据点创建一个条
---

## Description
<section id="description">最后一个挑战只在<code>svg</code>元素中添加了一个矩形来表示一个条形。在这里，您将结合您迄今为止学习的有关<code>data()</code> ， <code>enter()</code>和SVG形状的内容，为数据<code>dataset</code>每个数据点创建和附加一个矩形。之前的挑战显示了如何为<code>dataset</code>每个项目创建和附加<code>div</code>的格式： <blockquote> d3.select（ “身体”）。全选（ “分区”） <br> 。数据（数据集） <br> 。输入（） <br> .append（ “分区”） </blockquote>使用<code>rect</code>元素而不是<code>divs</code>有一些差异。 <code>rects</code>必须附加到<code>svg</code>元素，而不是直接附加到<code>body</code> 。此外，您需要告诉D3在<code>svg</code>区域内放置每个<code>rect</code>位置。酒吧安置将在下一个挑战中涵盖。 </section>

## Instructions
<section id="instructions">使用<code>data()</code> ， <code>enter()</code>和<code>append()</code>方法为<code>dataset</code>每个项创建和附加<code>rect</code> 。条形图应该全部显示在一起，这将在下一个挑战中修复。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的文档应该有9个<code>rect</code>元素。
    testString: assert($('rect').length == 9);
  - text: 您的代码应该使用<code>data()</code>方法。
    testString: assert(code.match(/\.data/g));
  - text: 您的代码应使用<code>enter()</code>方法。
    testString: assert(code.match(/\.enter/g));
  - text: 您的代码应使用<code>append()</code>方法。
    testString: assert(code.match(/\.append/g));

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
       // Add your code below this line



       // Add your code above this line
       .attr("x", 0)
       .attr("y", 0)
       .attr("width", 25)
       .attr("height", 100);
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

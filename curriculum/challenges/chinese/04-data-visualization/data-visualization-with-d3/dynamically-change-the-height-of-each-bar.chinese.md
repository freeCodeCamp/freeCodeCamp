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
  - text: 第一个<code>rect</code>的<code>height</code>应为36。
    testString: assert($('rect').eq(0).attr('height') == '36');
  - text: 第二个<code>rect</code>的<code>height</code>应为93。
    testString: assert($('rect').eq(1).attr('height') == '93');
  - text: 第三个<code>rect</code>的<code>height</code>应为66。
    testString: assert($('rect').eq(2).attr('height') == '66');
  - text: 第四个<code>rect</code>的<code>height</code>应为51。
    testString: assert($('rect').eq(3).attr('height') == '51');
  - text: 第五个<code>rect</code>的<code>height</code>应为75。
    testString: assert($('rect').eq(4).attr('height') == '75');
  - text: 第六个<code>rect</code>的<code>height</code>应为54。
    testString: assert($('rect').eq(5).attr('height') == '54');
  - text: 第七个<code>rect</code>的<code>height</code>应为87。
    testString: assert($('rect').eq(6).attr('height') == '87');
  - text: 第八个<code>rect</code>应该有42的<code>height</code> 。
    testString: assert($('rect').eq(7).attr('height') == '42');
  - text: 第九个<code>rect</code>的<code>height</code>应为27。
    testString: assert($('rect').eq(8).attr('height') == '27');

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

/section>

---
id: 587d7faa367417b2b2512bd6
challengeType: 6
forumTopicId: 301470
title: 给 D3 元素添加工具提示
---

## Description
<section id='description'>
当用户在一个对象上悬停时，提示框可以显示关于这个对象更多的信息。在可视化中有多种方法添加提示框，这个挑战将使用 SVG 的 <code>title</code> 元素。
请使用 <code>tile</code> 和 <code>text()</code> 方法一起给每组动态添加数据。
</section>

## Instructions
<section id='instructions'>
在每个 <code>rect</code> 节点下面添加一个 <code>title</code> 元素，然后用回调函数调用 <code>text()</code> 方法使它的文本显示数据值。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你应该有 9 个 <code>title</code> 元素。
    testString: assert($('title').length == 9);
  - text: 第一个 <code>title</code> 元素的提示框文本应为 12。
    testString: assert($('title').eq(0).text() == '12');
  - text: 第二个 <code>title</code> 元素的提示框文本应为 31。
    testString: assert($('title').eq(1).text() == '31');
  - text: 第三个 <code>title</code> 元素的提示框文本应为 22。
    testString: assert($('title').eq(2).text() == '22');
  - text: 第四个 <code>title</code> 元素的提示框文本应为 17。
    testString: assert($('title').eq(3).text() == '17');
  - text: 第五个 <code>title</code> 元素的提示框文本应为 25。
    testString: assert($('title').eq(4).text() == '25');
  - text: 第六个 <code>title</code> 元素的提示框文本应为 18。
    testString: assert($('title').eq(5).text() == '18');
  - text: 第七个 <code>title</code> 元素的提示框文本应为 29。
    testString: assert($('title').eq(6).text() == '29');
  - text: 第八个 <code>title</code> 元素的提示框文本应为 14。
    testString: assert($('title').eq(7).text() == '14');
  - text: 第九个 <code>title</code> 元素的提示框文本应为 9。
    testString: assert($('title').eq(8).text() == '9');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .bar:hover {
    fill: brown;
  }
</style>
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
       .attr("height", (d, i) => d * 3)
       .attr("fill", "navy")
       .attr("class", "bar")
       // 在下面添加你的代码



       // 在上面添加你的代码

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) => d)
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - (d * 3 + 3))   

  </script>
</body>
```

</div>



</section>

## Solution
<section id='solution'>

```html
<style>
  .bar:hover {
    fill: brown;
  }
</style>
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
       .attr("height", (d, i) => d * 3)
       .attr("fill", "navy")
       .attr("class", "bar")
       .append("title")
       .text((d) => d)
       

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) => d)
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - (d * 3 + 3))

  </script>
</body>

```

</section>

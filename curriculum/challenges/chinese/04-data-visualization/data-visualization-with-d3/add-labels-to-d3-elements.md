---
id: 587d7faa367417b2b2512bd2
challengeType: 6
forumTopicId: 301476
title: 给 D3 元素添加标签
---

## Description
<section id='description'>
D3 允许使用 SVG 的 <code>text</code> 元素给图形元素贴标签，例如给条形图中的各组都贴上标签。
和 <code>rect</code> 元素类似，<code>text</code> 元素也需要 <code>x</code> 和 <code>y</code> 属性来指定其放置在 SVG 画布上的位置，它也需要能够获取数据来显示数据值。
关于如何给组贴标签，D3 给了你很高的控制权。 
</section>

## Instructions
<section id='instructions'>
编辑器中的代码已经将数据绑定到每个新的 <code>text</code> 元素。首先，在 <code>svg</code> 中添加 <code>text</code> 节点。然后，添加 <code>x</code> 和 <code>y</code> 坐标属性，除了 <code>text</code> 的 <code>y</code> 值应该使标签比组的高 <code>y</code> 3 个单位，其余值的计算方法应该和 <code>rect</code> 中计算方法一样。最后，用 D3 的 <code>text()</code> 方法将标签的文本设置为和数据点相等的值。
<strong>提示</strong><br>关于标签比组高，想一想 <code>text</code> 的 <code>y</code> 值应该比组的 <code>y</code> 值大 3 还是小 3。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 第一个 <code>text</code> 元素应该有一个值为 12 的标签并且 <code>y</code> 值为 61。
    testString: assert($('text').eq(0).text() == '12' && $('text').eq(0).attr('y') == '61');
  - text: 第二个 <code>text</code> 元素应该有一个值为 31 的标签并且 <code>y</code> 值为 4。
    testString: assert($('text').eq(1).text() == '31' && $('text').eq(1).attr('y') == '4');
  - text: 第三个 <code>text</code> 元素应该有一个值为 22 的标签并且 <code>y</code> 值为 31。
    testString: assert($('text').eq(2).text() == '22' && $('text').eq(2).attr('y') == '31');
  - text: 第四个 <code>text</code> 元素应该有一个值为 17 的标签并且 <code>y</code> 值为 46。
    testString: assert($('text').eq(3).text() == '17' && $('text').eq(3).attr('y') == '46');
  - text: 第五个 <code>text</code> 元素应该有一个值为 25 的标签并且 <code>y</code> 值为 22。
    testString: assert($('text').eq(4).text() == '25' && $('text').eq(4).attr('y') == '22');
  - text: 第六个 <code>text</code> 元素应该有一个值为 18 的标签并且 <code>y</code> 值为 43。
    testString: assert($('text').eq(5).text() == '18' && $('text').eq(5).attr('y') == '43');
  - text: 第七个 <code>text</code> 元素应该有一个值为 29 的标签并且 <code>y</code> 值为 10。
    testString: assert($('text').eq(6).text() == '29' && $('text').eq(6).attr('y') == '10');
  - text: 第八个 <code>text</code> 元素应该有一个值为 14 的标签并且 <code>y</code> 值为 55。
    testString: assert($('text').eq(7).text() == '14' && $('text').eq(7).attr('y') == '55');
  - text: 第九个 <code>text</code> 元素应该有一个值为 9 的标签并且 <code>y</code> 值为 70。
    testString: assert($('text').eq(8).text() == '9' && $('text').eq(8).attr('y') == '70');

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
       .attr("y", (d, i) => h - 3 * d)
       .attr("width", 25)
       .attr("height", (d, i) => 3 * d)
       .attr("fill", "navy");

    svg.selectAll("text")
       .data(dataset)
       .enter()
       // 在下面添加你的代码




       // 在上面添加你的代码
  </script>
<body>
```

</div>



</section>

## Solution
<section id='solution'>

```js
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
       .attr("height", (d, i) => 3 * d)
       .attr("fill", "navy");

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - (3 * d) - 3)
       .text((d) => d)
  </script>
<body>

```

</section>

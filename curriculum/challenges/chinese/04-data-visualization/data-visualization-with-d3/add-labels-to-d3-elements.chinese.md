---
id: 587d7faa367417b2b2512bd2
title: Add Labels to D3 Elements
challengeType: 6
videoUrl: ''
localeTitle: 将标签添加到D3元素
---

## Description
<section id="description"> D3允许您使用SVG <code>text</code>元素标记图形元素，例如条形图。与<code>rect</code>元素一样， <code>text</code>元素需要具有<code>x</code>和<code>y</code>属性，以将其放在SVG画布上。它还需要访问数据以显示这些值。 D3让您可以高度控制标杆的标注方式。 </section>

## Instructions
<section id="instructions">编辑器中的代码已将数据绑定到每个新<code>text</code>元素。首先，将<code>text</code>节点附加到<code>svg</code> 。接下来，添加<code>x</code>和<code>y</code>坐标的属性。应该以与<code>rect</code>相同的方式计算它们，除了<code>text</code>的<code>y</code>值应该使标签比条形高3个单位。最后，使用D3 <code>text()</code>方法将标签设置为等于数据点值。 <strong>注意</strong> <br>对于标签比坐吧较高，决定是否<code>y</code>为值<code>text</code>应比少3个或大或3 <code>y</code>了吧价值。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 第一个<code>text</code>元素的标签应为12， <code>y</code>值应为61。
    testString: assert($('text').eq(0).text() == '12' && $('text').eq(0).attr('y') == '61');
  - text: 第二个<code>text</code>元素的标签应为31， <code>y</code>值应为4。
    testString: assert($('text').eq(1).text() == '31' && $('text').eq(1).attr('y') == '4');
  - text: 第三个<code>text</code>元素的标签应为22， <code>y</code>值应为31。
    testString: assert($('text').eq(2).text() == '22' && $('text').eq(2).attr('y') == '31');
  - text: 第四个<code>text</code>元素的标签应为17， <code>y</code>值应为46。
    testString: assert($('text').eq(3).text() == '17' && $('text').eq(3).attr('y') == '46');
  - text: 第五个<code>text</code>元素的标签应为25， <code>y</code>值应为22。
    testString: assert($('text').eq(4).text() == '25' && $('text').eq(4).attr('y') == '22');
  - text: 第六个<code>text</code>元素的标签应为18， <code>y</code>值应为43。
    testString: assert($('text').eq(5).text() == '18' && $('text').eq(5).attr('y') == '43');
  - text: 第七个<code>text</code>元素的标签应为29， <code>y</code>值应为10。
    testString: assert($('text').eq(6).text() == '29' && $('text').eq(6).attr('y') == '10');
  - text: 第八个<code>text</code>元素的标签应为14， <code>y</code>值应为55。
    testString: assert($('text').eq(7).text() == '14' && $('text').eq(7).attr('y') == '55');
  - text: 第九个<code>text</code>元素的标签应为9， <code>y</code>值应为70。
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
       // Add your code below this line




       // Add your code above this line
  </script>
<body>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>

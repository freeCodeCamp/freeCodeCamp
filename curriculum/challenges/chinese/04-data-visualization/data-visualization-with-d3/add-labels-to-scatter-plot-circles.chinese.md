---
id: 587d7fab367417b2b2512bd9
title: Add Labels to Scatter Plot Circles
challengeType: 6
videoUrl: ''
localeTitle: 添加标签以分散绘图圆圈
---

## Description
<section id="description">您可以添加文本以在散点图中为点创建标签。目标是显示<code>dataset</code>每个项目的第一个（ <code>x</code> ）和第二个（ <code>y</code> ）字段的逗号分隔值。 <code>text</code>节点需要<code>x</code>和<code>y</code>属性才能将其放置在SVG画布上。在此挑战中， <code>y</code>值（确定高度）可以使用<code>circle</code>用于其<code>cy</code>属性的相同值。 <code>x</code>值可能略大于<code>circle</code>的<code>cx</code>值，因此标签可见。这会将标签推到绘图点的右侧。 </section>

## Instructions
<section id="instructions">使用<code>text</code>元素标记散点图上的每个点。标签的文本应该是用逗号和空格分隔的两个值。例如，第一个点的标签是“34,78”。设置<code>x</code>属性，使其比<code>circle</code>上<code>cx</code>属性使用的值多5个单位。设置<code>y</code>属性的方式与<code>circle</code>上的<code>cy</code>值相同。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的代码应该有10个<code>text</code>元素。
    testString: assert($('text').length == 10);
  - text: '第一个标签的文本应为“34,78”， <code>x</code>值为39， <code>y</code>值为422。'
    testString: assert($('text').eq(0).text() == '34, 78' && $('text').eq(0).attr('x') == '39' && $('text').eq(0).attr('y') == '422');
  - text: '第二个标签的文本应为“109,280”， <code>x</code>值为114， <code>y</code>值为220。'
    testString: assert($('text').eq(1).text() == '109, 280' && $('text').eq(1).attr('x') == '114' && $('text').eq(1).attr('y') == '220');
  - text: '第三个标签的文本应为“310,120”， <code>x</code>值为315， <code>y</code>值为380。'
    testString: assert($('text').eq(2).text() == '310, 120' && $('text').eq(2).attr('x') == '315' && $('text').eq(2).attr('y') == '380');
  - text: '第四个标签的文本应为“79,411”， <code>x</code>值为84， <code>y</code>值为89。'
    testString: assert($('text').eq(3).text() == '79, 411' && $('text').eq(3).attr('x') == '84' && $('text').eq(3).attr('y') == '89');
  - text: '第五个标签的文本应为“420,220”， <code>x</code>值为425， <code>y</code>值为280。'
    testString: assert($('text').eq(4).text() == '420, 220' && $('text').eq(4).attr('x') == '425' && $('text').eq(4).attr('y') == '280');
  - text: '第六个标签的文本应为“233,145”， <code>x</code>值为238， <code>y</code>值为355。'
    testString: assert($('text').eq(5).text() == '233, 145' && $('text').eq(5).attr('x') == '238' && $('text').eq(5).attr('y') == '355');
  - text: '第七个标签的文本应为“333,96”， <code>x</code>值为338， <code>y</code>值为404。'
    testString: assert($('text').eq(6).text() == '333, 96' && $('text').eq(6).attr('x') == '338' && $('text').eq(6).attr('y') == '404');
  - text: '第八个标签的文本应为“222,333”， <code>x</code>值为227， <code>y</code>值为167。'
    testString: assert($('text').eq(7).text() == '222, 333' && $('text').eq(7).attr('x') == '227' && $('text').eq(7).attr('y') == '167');
  - text: '第九个标签的文本应为“78,320”， <code>x</code>值为83， <code>y</code>值为180。'
    testString: assert($('text').eq(8).text() == '78, 320' && $('text').eq(8).attr('x') == '83' && $('text').eq(8).attr('y') == '180');
  - text: '第十个标签的文本应为“21,123”， <code>x</code>值为26， <code>y</code>值为377。'
    testString: assert($('text').eq(9).text() == '21, 123' && $('text').eq(9).attr('x') == '26' && $('text').eq(9).attr('y') == '377');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <script>
    const dataset = [
                  [ 34,    78 ],
                  [ 109,   280 ],
                  [ 310,   120 ],
                  [ 79,    411 ],
                  [ 420,   220 ],
                  [ 233,   145 ],
                  [ 333,   96 ],
                  [ 222,   333 ],
                  [ 78,    320 ],
                  [ 21,    123 ]
                ];


    const w = 500;
    const h = 500;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("circle")
       .data(dataset)
       .enter()
       .append("circle")
       .attr("cx", (d, i) => d[0])
       .attr("cy", (d, i) => h - d[1])
       .attr("r", 5);

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       // Add your code below this line



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

/section>

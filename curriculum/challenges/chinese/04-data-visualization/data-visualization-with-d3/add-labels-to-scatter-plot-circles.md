---
id: 587d7fab367417b2b2512bd9
challengeType: 6
forumTopicId: 301477
title: 向散点图的 Circles 添加标签
---

## Description
<section id='description'>
你可以添加文本为散点图中的点创建标签。
目标是显示以逗号分隔的值，分别为 <code>dataset</code> 中每个对象的第一个(<code>x</code>)和第二个(<code>y</code>)字段
<code>text</code> 节点需要 <code>x</code> 和 <code>y</code> 属性来指定放置在 SVG 画布中的位置。在这个挑战中，<code>y</code> 值（决定高度）可以用和 <code>circle</code> 的 <code>cy</code> 属性相同的值，<code>x</code> 值可以比 <code>circle</code> 的 <code>cx</code> 值稍微大一些，这样标签才是可见的并且被放置在散点的右边。
</section>

## Instructions
<section id='instructions'>
用 <code>text</code> 元素为散点图中的每个点创建标签。标签的文本应该为用一个逗号和一个空格分隔开的两个值，例如，第一个点的标签为 "34, 78"。设置 <code>x</code> 属性比 <code>circle</code> 的 <code>cx</code> 属性大 5 个单位，设置 <code>y</code> 属性和 <code>circle</code> 的 <code>cy</code> 属性相同。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你应该有 10 个 <code>text</code> 元素。
    testString: assert($('text').length == 10);
  - text: "第一个标签的文本应该为 '34, 78'， <code>x</code> 值应该为 39， <code>y</code> 应该为 422。"
    testString: assert($('text').eq(0).text() == '34, 78' && $('text').eq(0).attr('x') == '39' && $('text').eq(0).attr('y') == '422');
  - text: "第二个标签的文本应该为 '109, 280'， <code>x</code> 值应该为 114， <code>y</code> 应该为 220。"
    testString: assert($('text').eq(1).text() == '109, 280' && $('text').eq(1).attr('x') == '114' && $('text').eq(1).attr('y') == '220');
  - text: "第三个标签的文本应该为 '310, 120'， <code>x</code> 值应该为 315， <code>y</code> 应该为 380。"
    testString: assert($('text').eq(2).text() == '310, 120' && $('text').eq(2).attr('x') == '315' && $('text').eq(2).attr('y') == '380');
  - text: "第四个标签的文本应该为 '79, 411'， <code>x</code> 值应该为 84， <code>y</code> 应该为 89。"
    testString: assert($('text').eq(3).text() == '79, 411' && $('text').eq(3).attr('x') == '84' && $('text').eq(3).attr('y') == '89');
  - text: "第五个标签的文本应该为 '420, 220'， <code>x</code> 值应该为 425， <code>y</code> 应该为 280。"
    testString: assert($('text').eq(4).text() == '420, 220' && $('text').eq(4).attr('x') == '425' && $('text').eq(4).attr('y') == '280');
  - text: "第六个标签的文本应该为 '233, 145'， <code>x</code> 值应该为 238， <code>y</code> 应该为 355。"
    testString: assert($('text').eq(5).text() == '233, 145' && $('text').eq(5).attr('x') == '238' && $('text').eq(5).attr('y') == '355');
  - text: "第七个标签的文本应该为 '333, 96'， <code>x</code> 值应该为 338， <code>y</code> 应该为 404。"
    testString: assert($('text').eq(6).text() == '333, 96' && $('text').eq(6).attr('x') == '338' && $('text').eq(6).attr('y') == '404');
  - text: "第八个标签的文本应该为 '222, 333'， <code>x</code> 值应该为 227， <code>y</code> 应该为 167。"
    testString: assert($('text').eq(7).text() == '222, 333' && $('text').eq(7).attr('x') == '227' && $('text').eq(7).attr('y') == '167');
  - text: "第九个标签的文本应该为 '78, 320'， <code>x</code> 值应该为 83， <code>y</code> 应该为 180。"
    testString: assert($('text').eq(8).text() == '78, 320' && $('text').eq(8).attr('x') == '83' && $('text').eq(8).attr('y') == '180');
  - text: "第十个标签的文本应该为 '21, 123'， <code>x</code> 值应该为 26， <code>y</code> 应该为 377。"
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
       // 在下面添加你的代码



       // 在上面添加你的代码
  </script>
</body>
```

</div>



</section>

## Solution
<section id='solution'>

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
       .attr("x", (d) => d[0] + 5)
       .attr("y", (d) => h - d[1])
       .text((d) => (d[0] + ", " + d[1]))
       
  </script>
</body>

```

</section>

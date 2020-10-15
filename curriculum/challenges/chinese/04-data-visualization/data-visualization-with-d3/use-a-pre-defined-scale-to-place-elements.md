---
id: 587d7fac367417b2b2512bde
challengeType: 6
forumTopicId: 301494
title: 使用预定义的比例放置元素
---

## Description
<section id='description'>
当比例尺建立好后，是时候重新映射散点图了。比例尺就像操作函数一样，将 x 和 y 的原数据值变为适合并可在 SVG 画布上正确渲染的值。它们使数据在屏幕的布局区域内部。
用比例尺函数为 SVG 图形设置坐标属性值。这包括 <code>rect</code> 或者 <code>text</code> 元素的 <code>x</code> 和 <code>y</code> 属性，或者 <code>circles</code> 的 <code>cx</code> 和 <code>cy</code>。以下是一个例子：

```js
shape
  .attr("x", (d) => xScale(d[0]))
```

比例尺设置图形坐标属性来将数据点放置在 SVG 画布上。当你显示实际数据值时，不用使用比例尺，例如，在提示框或标签中的 <code>text()</code> 方法。
</section>

## Instructions
<section id='instructions'>
使用 <code>xScale</code> 和 <code>yScale</code> 将 <code>circle</code> 和 <code>text</code> 图形放置在 SVG 画布上。对于 <code>circles</code>，使用比例尺设置 <code>cx</code> 和 <code>cy</code> 属性，半径为 5 个单位。
对于 <code>text</code> 元素，使用比例尺设置 <code>x</code> 和 <code>y</code> 属性。标签应该标注在点的右边，为此，在将 x 数据值传递给 <code>xScale</code> 之前要将它加上 10 个单位。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你应该有 10 个 <code>circle</code> 元素。
    testString: assert($('circle').length == 10);
  - text: 在使用比例尺后第一个 <code>circle</code> 元素的 <code>cx</code> 值应该大约为 91，<code>cy</code> 值应该大约为 368。它的 <code>r</code> 值应该为 5。
    testString: assert(Math.round($('circle').eq(0).attr('cx')) == '91' && Math.round($('circle').eq(0).attr('cy')) == '368' && $('circle').eq(0).attr('r') == '5');
  - text: 在使用比例尺后第二个 <code>circle</code> 元素的 <code>cx</code> 值应该大约为 159，<code>cy</code> 值应该大约为 181。它的 <code>r</code> 值也应该为 5。
    testString: assert(Math.round($('circle').eq(1).attr('cx')) == '159' && Math.round($('circle').eq(1).attr('cy')) == '181' && $('circle').eq(1).attr('r') == '5');
  - text: 在使用比例尺后第三个 <code>circle</code> 元素的 <code>cx</code> 值应该大约为 340，<code>cy</code> 值应该大约为 329。它的 <code>r</code> 值也应该为 5。
    testString: assert(Math.round($('circle').eq(2).attr('cx')) == '340' && Math.round($('circle').eq(2).attr('cy')) == '329' && $('circle').eq(2).attr('r') == '5');
  - text: 在使用比例尺后第四个 <code>circle</code> 元素的 <code>cx</code> 值应该大约为 131，<code>cy</code> 值应该大约为 60。它的 <code>r</code> 值也应该为 5。
    testString: assert(Math.round($('circle').eq(3).attr('cx')) == '131' && Math.round($('circle').eq(3).attr('cy')) == '60' && $('circle').eq(3).attr('r') == '5');
  - text: 在使用比例尺后第五个 <code>circle</code> 元素的 <code>cx</code> 值应该大约为 440，<code>cy</code> 值应该大约为 237。它的 <code>r</code> 值也应该为 5。
    testString: assert(Math.round($('circle').eq(4).attr('cx')) == '440' && Math.round($('circle').eq(4).attr('cy')) == '237' && $('circle').eq(4).attr('r') == '5');
  - text: 在使用比例尺后第六个 <code>circle</code> 元素的 <code>cx</code> 值应该大约为 271，<code>cy</code> 值应该大约为 306。它的 <code>r</code> 值也应该为 5。
    testString: assert(Math.round($('circle').eq(5).attr('cx')) == '271' && Math.round($('circle').eq(5).attr('cy')) == '306' && $('circle').eq(5).attr('r') == '5');
  - text: 在使用比例尺后第七个 <code>circle</code> 元素的 <code>cx</code> 值应该大约为 361，<code>cy</code> 值应该大约为 351。它的 <code>r</code> 值也应该为 5。
    testString: assert(Math.round($('circle').eq(6).attr('cx')) == '361' && Math.round($('circle').eq(6).attr('cy')) == '351' && $('circle').eq(6).attr('r') == '5');
  - text: 在使用比例尺后第八个 <code>circle</code> 元素的 <code>cx</code> 值应该大约为 261，<code>cy</code> 值应该大约为 132。它的 <code>r</code> 值也应该为 5。
    testString: assert(Math.round($('circle').eq(7).attr('cx')) == '261' && Math.round($('circle').eq(7).attr('cy')) == '132' && $('circle').eq(7).attr('r') == '5');
  - text: 在使用比例尺后第九个 <code>circle</code> 元素的 <code>cx</code> 值应该大约为 131，<code>cy</code> 值应该大约为 144。它的 <code>r</code> 值也应该为 5。
    testString: assert(Math.round($('circle').eq(8).attr('cx')) == '131' && Math.round($('circle').eq(8).attr('cy')) == '144' && $('circle').eq(8).attr('r') == '5');
  - text: 在使用比例尺后第十个 <code>circle</code> 元素的 <code>cx</code> 值应该大约为 79，<code>cy</code> 值应该大约为 326。它的 <code>r</code> 值也应该为 5。
    testString: assert(Math.round($('circle').eq(9).attr('cx')) == '79' && Math.round($('circle').eq(9).attr('cy')) == '326' && $('circle').eq(9).attr('r') == '5');
  - text: 你应该有 10 个 <code>text</code> 元素。
    testString: assert($('text').length == 10);
  - text: 在使用比例尺后第一个标签的 <code>x</code> 值应该大约为 100，<code>y</code> 值应该大约为 368。
    testString: assert(Math.round($('text').eq(0).attr('x')) == '100' && Math.round($('text').eq(0).attr('y')) == '368');
  - text: 在使用比例尺后第二个标签的 <code>x</code> 值应该大约为 168，<code>y</code> 值应该大约为 181。
    testString: assert(Math.round($('text').eq(1).attr('x')) == '168' && Math.round($('text').eq(1).attr('y')) == '181');
  - text: 在使用比例尺后第三个标签的 <code>x</code> 值应该大约为 350，<code>y</code> 值应该大约为 329。
    testString: assert(Math.round($('text').eq(2).attr('x')) == '350' && Math.round($('text').eq(2).attr('y')) == '329');
  - text: 在使用比例尺后第四个标签的 <code>x</code> 值应该大约为 141，<code>y</code> 值应该大约为 60。
    testString: assert(Math.round($('text').eq(3).attr('x')) == '141' && Math.round($('text').eq(3).attr('y')) == '60');
  - text: 在使用比例尺后第五个标签的 <code>x</code> 值应该大约为 449，<code>y</code> 值应该大约为 237。
    testString: assert(Math.round($('text').eq(4).attr('x')) == '449' && Math.round($('text').eq(4).attr('y')) == '237');
  - text: 在使用比例尺后第六个标签的 <code>x</code> 值应该大约为 280，<code>y</code> 值应该大约为 306。
    testString: assert(Math.round($('text').eq(5).attr('x')) == '280' && Math.round($('text').eq(5).attr('y')) == '306');
  - text: 在使用比例尺后第七个标签的 <code>x</code> 值应该大约为 370，<code>y</code> 值应该大约为 351。
    testString: assert(Math.round($('text').eq(6).attr('x')) == '370' && Math.round($('text').eq(6).attr('y')) == '351');
  - text: 在使用比例尺后第八个标签的 <code>x</code> 值应该大约为 270，<code>y</code> 值应该大约为 132。
    testString: assert(Math.round($('text').eq(7).attr('x')) == '270' && Math.round($('text').eq(7).attr('y')) == '132');
  - text: 在使用比例尺后第九个标签的 <code>x</code> 值应该大约为 140，<code>y</code> 值应该大约为 144。
    testString: assert(Math.round($('text').eq(8).attr('x')) == '140' && Math.round($('text').eq(8).attr('y')) == '144');
  - text: 在使用比例尺后第十个标签的 <code>x</code> 值应该大约为 88，<code>y</code> 值应该大约为 326。
    testString: assert(Math.round($('text').eq(9).attr('x')) == '88' && Math.round($('text').eq(9).attr('y')) == '326');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <script>
    const dataset = [
                  [ 34,     78 ],
                  [ 109,   280 ],
                  [ 310,   120 ],
                  [ 79,   411 ],
                  [ 420,   220 ],
                  [ 233,   145 ],
                  [ 333,   96 ],
                  [ 222,    333 ],
                  [ 78,    320 ],
                  [ 21,   123 ]
                ];

    const w = 500;
    const h = 500;
    const padding = 60;

    const xScale = d3.scaleLinear()
                     .domain([0, d3.max(dataset, (d) => d[0])])
                     .range([padding, w - padding]);

    const yScale = d3.scaleLinear()
                     .domain([0, d3.max(dataset, (d) => d[1])])
                     .range([h - padding, padding]);

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("circle")
       .data(dataset)
       .enter()
       .append("circle")
       // 在下面添加你的代码



       // 在上面添加你的代码
       
    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) =>  (d[0] + ", "
 + d[1]))
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
                  [ 34,     78 ],
                  [ 109,   280 ],
                  [ 310,   120 ],
                  [ 79,   411 ],
                  [ 420,   220 ],
                  [ 233,   145 ],
                  [ 333,   96 ],
                  [ 222,    333 ],
                  [ 78,    320 ],
                  [ 21,   123 ]
                ];

    const w = 500;
    const h = 500;
    const padding = 60;

    const xScale = d3.scaleLinear()
                     .domain([0, d3.max(dataset, (d) => d[0])])
                     .range([padding, w - padding]);

    const yScale = d3.scaleLinear()
                     .domain([0, d3.max(dataset, (d) => d[1])])
                     .range([h - padding, padding]);

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("circle")
       .data(dataset)
       .enter()
       .append("circle")
       .attr("cx", (d) => xScale(d[0]))
       .attr("cy", (d) => yScale(d[1]))
       .attr("r", 5)

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) =>  (d[0] + ", "
 + d[1]))
       .attr("x", (d) => xScale(d[0] + 10))
       .attr("y", (d) => yScale(d[1]))
  </script>
</body>

```

</section>

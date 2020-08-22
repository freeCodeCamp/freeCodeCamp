---
id: 587d7fac367417b2b2512bde
title: Use a Pre-Defined Scale to Place Elements
challengeType: 6
videoUrl: ''
localeTitle: 使用预定义比例放置元素
---

## Description
<section id="description">设置了比例后，就可以再次绘制散点图。比例就像处理函数一样，可以将x和y原始数据转换为适合SVG画布上正确渲染的值。他们将数据保存在屏幕的绘图区域内。使用缩放功能设置SVG形状的坐标属性值。这包括<code>rect</code>或<code>text</code>元素的<code>x</code>和<code>y</code>属性，或者<code>circles</code> <code>cx</code>和<code>cy</code> 。这是一个例子： <blockquote>形状<br> .attr（“x”，（d）=&gt; xScale（d [0]）） </blockquote> Scales设置形状坐标属性以将数据点放置到SVG画布上。显示实际数据值时不需要应用比例，例如，在工具提示或标签的<code>text()</code>方法中。 </section>

## Instructions
<section id="instructions">使用<code>xScale</code>和<code>yScale</code>将<code>circle</code>和<code>text</code>形状定位到SVG画布上。对于<code>circles</code> ，应用比例来设置<code>cx</code>和<code>cy</code>属性。给它们半径5个单位。对于<code>text</code>元素，应用比例来设置<code>x</code>和<code>y</code>属性。标签应偏移到点的右侧。要执行此操作，请在将x数据传递给<code>xScale</code>之前将其添加10个单位。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的代码应该有10个<code>circle</code>元素。
    testString: assert($('circle').length == 10);
  - text: 应用刻度后，第一个<code>circle</code>元素应具有大约91的<code>cx</code>值和大约368的<code>cy</code>值。它的<code>r</code>值也应为5。
    testString: assert(Math.round($('circle').eq(0).attr('cx')) == '91' && Math.round($('circle').eq(0).attr('cy')) == '368' && $('circle').eq(0).attr('r') == '5');
  - text: 应用刻度后，第二个<code>circle</code>元素的<code>cx</code>值应约为159， <code>cy</code>值应约为181。它的<code>r</code>值也应为5。
    testString: assert(Math.round($('circle').eq(1).attr('cx')) == '159' && Math.round($('circle').eq(1).attr('cy')) == '181' && $('circle').eq(1).attr('r') == '5');
  - text: 应用刻度后，第三个<code>circle</code>元素应具有约340的<code>cx</code>值和约329的<code>cy</code>值。它的<code>r</code>值也应为5。
    testString: assert(Math.round($('circle').eq(2).attr('cx')) == '340' && Math.round($('circle').eq(2).attr('cy')) == '329' && $('circle').eq(2).attr('r') == '5');
  - text: 应用刻度后，第四个<code>circle</code>元素应具有大约131的<code>cx</code>值和大约60的<code>cy</code>值。它的<code>r</code>值也应为5。
    testString: assert(Math.round($('circle').eq(3).attr('cx')) == '131' && Math.round($('circle').eq(3).attr('cy')) == '60' && $('circle').eq(3).attr('r') == '5');
  - text: 应用刻度后，第五个<code>circle</code>元素应具有大约440的<code>cx</code>值和大约237的<code>cy</code>值。它的<code>r</code>值也应为5。
    testString: assert(Math.round($('circle').eq(4).attr('cx')) == '440' && Math.round($('circle').eq(4).attr('cy')) == '237' && $('circle').eq(4).attr('r') == '5');
  - text: 应用刻度后，第六个<code>circle</code>元素应具有约271的<code>cx</code>值和约306的<code>cy</code>值。它的<code>r</code>值也应为5。
    testString: assert(Math.round($('circle').eq(5).attr('cx')) == '271' && Math.round($('circle').eq(5).attr('cy')) == '306' && $('circle').eq(5).attr('r') == '5');
  - text: 应用刻度后，第七个<code>circle</code>元素的<code>cx</code>值约为361， <code>cy</code>值约为351。它的<code>r</code>值也应为5。
    testString: assert(Math.round($('circle').eq(6).attr('cx')) == '361' && Math.round($('circle').eq(6).attr('cy')) == '351' && $('circle').eq(6).attr('r') == '5');
  - text: 应用刻度后，第八个<code>circle</code>元素应具有约261的<code>cx</code>值和约132的<code>cy</code>值。它的<code>r</code>值也应为5。
    testString: assert(Math.round($('circle').eq(7).attr('cx')) == '261' && Math.round($('circle').eq(7).attr('cy')) == '132' && $('circle').eq(7).attr('r') == '5');
  - text: 应用刻度后，第九个<code>circle</code>元素应具有大约131的<code>cx</code>值和大约144的<code>cy</code>值。它的<code>r</code>值也应为5。
    testString: assert(Math.round($('circle').eq(8).attr('cx')) == '131' && Math.round($('circle').eq(8).attr('cy')) == '144' && $('circle').eq(8).attr('r') == '5');
  - text: 应用刻度后，第十个<code>circle</code>元素应具有大约79的<code>cx</code>值和大约326的<code>cy</code>值。它的<code>r</code>值也应为5。
    testString: assert(Math.round($('circle').eq(9).attr('cx')) == '79' && Math.round($('circle').eq(9).attr('cy')) == '326' && $('circle').eq(9).attr('r') == '5');
  - text: 您的代码应该有10个<code>text</code>元素。
    testString: assert($('text').length == 10);
  - text: 应用刻度后，第一个标签的<code>x</code>值约为100， <code>y</code>值约为368。
    testString: assert(Math.round($('text').eq(0).attr('x')) == '100' && Math.round($('text').eq(0).attr('y')) == '368');
  - text: 第二标签应该有一个<code>x</code>的大约168值和<code>y</code>施加鳞后的约181的值。
    testString: assert(Math.round($('text').eq(1).attr('x')) == '168' && Math.round($('text').eq(1).attr('y')) == '181');
  - text: 应用刻度后，第三个标签的<code>x</code>值约为350， <code>y</code>值约为329。
    testString: assert(Math.round($('text').eq(2).attr('x')) == '350' && Math.round($('text').eq(2).attr('y')) == '329');
  - text: 第四标签应该有一个<code>x</code>的大约141值和<code>y</code>施加鳞后的约60的值。
    testString: assert(Math.round($('text').eq(3).attr('x')) == '141' && Math.round($('text').eq(3).attr('y')) == '60');
  - text: 应用刻度后，第五个标签的<code>x</code>值约为449， <code>y</code>值约为237。
    testString: assert(Math.round($('text').eq(4).attr('x')) == '449' && Math.round($('text').eq(4).attr('y')) == '237');
  - text: 应用刻度后，第六个标签的<code>x</code>值约为280， <code>y</code>值约为306。
    testString: assert(Math.round($('text').eq(5).attr('x')) == '280' && Math.round($('text').eq(5).attr('y')) == '306');
  - text: 应用刻度后，第七个标签的<code>x</code>值约为370， <code>y</code>值约为351。
    testString: assert(Math.round($('text').eq(6).attr('x')) == '370' && Math.round($('text').eq(6).attr('y')) == '351');
  - text: 应用刻度后，第八个标签的<code>x</code>值约为270， <code>y</code>值约为132。
    testString: assert(Math.round($('text').eq(7).attr('x')) == '270' && Math.round($('text').eq(7).attr('y')) == '132');
  - text: 应用刻度后，第九个标签的<code>x</code>值约为140， <code>y</code>值约为144。
    testString: assert(Math.round($('text').eq(8).attr('x')) == '140' && Math.round($('text').eq(8).attr('y')) == '144');
  - text: 应用刻度后，第十个标签的<code>x</code>值约为88， <code>y</code>值约为326。
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
       // Add your code below this line



       // Add your code above this line

    svg.selectAll("text")
       .data(dataset)
       .enter()
       .append("text")
       .text((d) =>  (d[0] + ", "
 + d[1]))
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

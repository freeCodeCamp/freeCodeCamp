---
id: 587d7fac367417b2b2512bdd
title: Use Dynamic Scales
challengeType: 6
videoUrl: ''
localeTitle: 使用动态比例
---

## Description
<section id="description"> D3 <code>min()</code>和<code>max()</code>方法可用于帮助设置比例。给定复杂的数据集，一个优先级是设置比例，以便可视化符合SVG容器的宽度和高度。您希望在SVG画布内绘制所有数据，以便在网页上显示。下面的示例设置散点图数据的x轴刻度。 <code>domain()</code>方法将信息传递给关于绘图的原始数据值的比例。 <code>range()</code>方法为其提供有关可视化的网页上的实际空间的信息。在该示例中，域从0变为集合中的最大值。它使用<code>max()</code>方法和基于数组中x值的回调函数。该范围使用SVG画布的宽度（ <code>w</code> ），但它也包含一些填充。这会在散点图点和SVG画布边缘之间留出空间。 <blockquote> const dataset = [ <br> [34,78]， <br> [109,280]， <br> [310,120]， <br> [79,411]， <br> [420,220]， <br> [233,145]， <br> [333,96]， <br> [222,333]， <br> [78,320]， <br> [21,123] <br> ]。 <br> const w = 500; <br> const h = 500; <br><br> //在SVG画布边界和绘图之间填充<br> const padding = 30; <br> const xScale = d3.scaleLinear（） <br> .domain（[0，d3.max（dataset，（d）=&gt; d [0]）]） <br> .range（[padding，w  -  padding]）; </blockquote>填充可能首先令人困惑。将x轴描绘为0到500的水平线（SVG画布的宽度值）。在<code>range()</code>方法中包含填充会强制绘图沿着该行（而不是0）从30开始，并以470（而不是500）结束。 </section>

## Instructions
<section id="instructions">使用<code>yScale</code>变量创建线性y轴刻度。域应该从零开始并转到集合中的最大y值。范围应使用SVG高度（ <code>h</code> ）并包括填充。 <strong>注意</strong> <br>记得保持情节正面朝上。设置y坐标的范围时，较高的值（高度减去填充）是第一个参数，较低的值是第二个参数。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>h2</code>的文本应为30。
    testString: assert(output == 30 && $('h2').text() == '30');
  - text: 'yScale的<code>domain()</code>应该等于<code>[0, 411]</code> 0,411 <code>[0, 411]</code> 。'
    testString: assert(JSON.stringify(yScale.domain()) == JSON.stringify([0, 411]));
  - text: 'yScale的<code>range()</code>应相当于<code>[470, 30]</code> 470,30 <code>[470, 30]</code> 。'
    testString: assert(JSON.stringify(yScale.range()) == JSON.stringify([470, 30]));

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

    // Padding between the SVG canvas boundary and the plot
    const padding = 30;

    // Create an x and y scale

    const xScale = d3.scaleLinear()
                    .domain([0, d3.max(dataset, (d) => d[0])])
                    .range([padding, w - padding]);

    // Add your code below this line

    const yScale = undefined;


    // Add your code above this line

    const output = yScale(411); // Returns 30
    d3.select("body")
      .append("h2")
      .text(output)
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

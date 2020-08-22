---
id: 587d7fa9367417b2b2512bce
title: Dynamically Set the Coordinates for Each Bar
challengeType: 6
videoUrl: ''
localeTitle: 动态设置每个条形的坐标
---

## Description
<section id="description">最后一个挑战是为<code>dataset</code>每个点创建一个矩形并将其附加到<code>svg</code>元素以表示一个条形。不幸的是，它们都堆叠在一起。矩形的放置由<code>x</code>和<code>y</code>属性处理。他们告诉D3从哪里开始在<code>svg</code>区域中绘制形状。最后一个挑战将它们设置为0，因此每个栏都放在左上角。对于条形图，所有条形应位于相同的垂直水平，这意味着所有条形的<code>y</code>值保持不变（为0）。但是，在添加新柱时， <code>x</code>值需要更改。请记住，较大的<code>x</code>值会将项目推向更远的位置。当您浏览<code>dataset</code>的数组元素时，x值应该会增加。 D3中的<code>attr()</code>方法接受回调函数来动态设置该属性。回调函数有两个参数，一个用于数据点本身（通常为<code>d</code> ），另一个用于数组中数据点的索引。索引的第二个参数是可选的。这是格式： <blockquote> selection.attr（“property”，（d，i）=&gt; { <br> / * <br> * d是数据点值<br> * i是数组中数据点的索引<br> * / <br> }） </blockquote>重要的是要注意，您不需要编写<code>for</code>循环或使用<code>forEach()</code>来迭代数据集中的项。回想一下， <code>data()</code>方法解析数据集，并且<code>data()</code>之后链接的任何方法对数据集中的每个项目运行一次。 </section>

## Instructions
<section id="instructions">更改<code>x</code>属性回调函数，使其返回索引时间30. <strong>注意</strong> <br>每个条的宽度为25，因此将每个<code>x</code>值增加30会在条之间增加一些空间。任何大于25的值都可以在此示例中使用。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 第一个<code>rect</code>的<code>x</code>值应为0。
    testString: assert($('rect').eq(0).attr('x') == '0');
  - text: 第二个<code>rect</code>的<code>x</code>值应为30。
    testString: assert($('rect').eq(1).attr('x') == '30');
  - text: 第三个<code>rect</code>的<code>x</code>值应为60。
    testString: assert($('rect').eq(2).attr('x') == '60');
  - text: 第四个<code>rect</code>的<code>x</code>值应为90。
    testString: assert($('rect').eq(3).attr('x') == '90');
  - text: 第五个<code>rect</code>的<code>x</code>值应为120。
    testString: assert($('rect').eq(4).attr('x') == '120');
  - text: 第六个<code>rect</code>的<code>x</code>值应为150。
    testString: assert($('rect').eq(5).attr('x') == '150');
  - text: 第七个<code>rect</code>的<code>x</code>值应为180。
    testString: assert($('rect').eq(6).attr('x') == '180');
  - text: 第八个<code>rect</code>的<code>x</code>值应为210。
    testString: assert($('rect').eq(7).attr('x') == '210');
  - text: 第九个<code>rect</code>的<code>x</code>值应为240。
    testString: assert($('rect').eq(8).attr('x') == '240');

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
       .attr("x", (d, i) => {
         // Add your code below this line



         // Add your code above this line
       })
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

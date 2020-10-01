---
id: 587d7fa8367417b2b2512bca
challengeType: 6
forumTopicId: 301481
title: 更改条形图的显示方式
---

## Description
<section id='description'>
这里有一些格式的改变可以美化上个挑战中创建的条形图：
1) 通过在 CSS 中为 <code>bar</code> 的类添加 margin 属性，为每一组之间添加空格以直观的将它们分开
2) 通过给每个值乘以一个数来缩放高度，增加高度以更好地显示值的差异
</section>

## Instructions
<section id='instructions'>
首先，在 <code>style</code> 标签中为 <code>bar</code> 类添加 2px 的 <code>margin</code> 属性。然后，在 <code>style()</code> 方法中修改回调函数，使它返回 10 倍原数值的值（在后面加上 "px"）。
<strong>提示</strong><br>通过给每一个数值点乘以<em>相同的</em>常量值仅仅改变比例。这就像放大，它不会改变底层数据的含义。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 第一个 <code>div</code> 的 <code>height</code> 应该为 120 个像素，<code>margin</code> 应该为 2 个像素。
    testString: assert($('div').eq(0).css('height') == '120px' && $('div').eq(0).css('margin-right') == '2px');
  - text: 第二个 <code>div</code> 的 <code>height</code> 应该为 310 个像素，<code>margin</code> 应该为 2 个像素。
    testString: assert($('div').eq(1).css('height') == '310px' && $('div').eq(1).css('margin-right') == '2px');
  - text: 第三个 <code>div</code> 的 <code>height</code> 应该为 220 个像素，<code>margin</code> 应该为 2 个像素。
    testString: assert($('div').eq(2).css('height') == '220px' && $('div').eq(2).css('margin-right') == '2px');
  - text: 第四个 <code>div</code> 的 <code>height</code> 应该为 170 个像素，<code>margin</code> 应该为 2 个像素。
    testString: assert($('div').eq(3).css('height') == '170px' && $('div').eq(3).css('margin-right') == '2px');
  - text: 第五个 <code>div</code> 的 <code>height</code> 应该为 250 个像素，<code>margin</code> 应该为 2 个像素。
    testString: assert($('div').eq(4).css('height') == '250px' && $('div').eq(4).css('margin-right') == '2px');
  - text: 第六个 <code>div</code> 的 <code>height</code> 应该为 180 个像素，<code>margin</code> 应该为 2 个像素。
    testString: assert($('div').eq(5).css('height') == '180px' && $('div').eq(5).css('margin-right') == '2px');
  - text: 第七个 <code>div</code> 的 <code>height</code> 应该为 290 个像素，<code>margin</code> 应该为 2 个像素。
    testString: assert($('div').eq(6).css('height') == '290px' && $('div').eq(6).css('margin-right') == '2px');
  - text: 第八个 <code>div</code> 的 <code>height</code> 应该为 140 个像素，<code>margin</code> 应该为 2 个像素。
    testString: assert($('div').eq(7).css('height') == '140px' && $('div').eq(7).css('margin-right') == '2px');
  - text: 第九个 <code>div</code> 的 <code>height</code> 应该为 90 个像素，<code>margin</code> 应该为 2 个像素。
    testString: assert($('div').eq(8).css('height') == '90px' && $('div').eq(8).css('margin-right') == '2px');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .bar {
    width: 25px;
    height: 100px;
    /* 在下面添加你的代码 */

    /* 在上面添加你的代码 */
    display: inline-block;
    background-color: blue;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("div")
      .data(dataset)
      .enter()
      .append("div")
      .attr("class", "bar")
      .style("height", (d) => (d + "px"))
  </script>
</body>
```

</div>



</section>

## Solution
<section id='solution'>

```html
<style>
  .bar {
    width: 25px;
    height: 100px;
    margin: 2px;
    display: inline-block;
    background-color: blue;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("div")
      .data(dataset)
      .enter()
      .append("div")
      .attr("class", "bar")
      .style("height", (d) => (d * 10 + "px"))
  </script>
</body>

```

</section>

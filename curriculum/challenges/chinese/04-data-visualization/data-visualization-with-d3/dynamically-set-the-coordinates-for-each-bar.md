---
id: 587d7fa9367417b2b2512bce
challengeType: 6
forumTopicId: 301487
title: 动态设置每个 Bar 的坐标
---

## Description
<section id='description'>
上个挑战在 <code>svg</code> 元素中为 <code>dataset</code> 的每一个数据点创建并且添加了一个矩形。其中一个矩形表示一组，但是它们相互重叠。
矩形的摆放是由 <code>x</code> 和 <code>y</code> 属性处理的，它们告诉 D3 在 <code>svg</code> 区域的哪个位置开始绘制图形。上个挑战将它们都设置为 0，所以所有组都摆放在左上角。
对于条形图，所有组应该处于相同的垂直水平上，也就是说所有组的 <code>y</code> 值相同（为 0），但是 <code>x</code> 值需要随着增添新的组而变化。注意 <code>x</code> 值越大图形就越靠近右边，所以当遍历 <code>dataset</code> 中的元素时，<code>x</code> 的值应该递增。
D3 的 <code>attr()</code> 方法可接收一个回调函数来动态设置属性。这个回调函数有两个参数，一个是数据点本身（通常是 <code>d</code>），另一个是该数据点在数组中的下标，这个参数是可选的。下面是其格式：

```js
selection.attr("property", (d, i) => {
  /* 
  * d 是数据点的值
  * i 是数据点在数组中的下标
  */
})
```

值得注意的是，你不需要写 <code>for</code> 循环或者用 <code>forEach</code> 迭代数据集中的对象。<code>data()</code> 方法会解析数据集，任何链接在它后面的方法都会为数据集中的每个对象运行一次。
</section>

## Instructions
<section id='instructions'>
改变 <code>x</code> 属性的回调函数，让它返回下标乘以 30 的值。
<strong>提示</strong><br>每组的宽为 25，所以每次 <code>x</code> 增加 30 可在每组之间留出一些空隙。在这个例子中任何比 25 大的数也同样适用。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 第一个 <code>rect</code> 的 <code>x</code> 应该为 0。
    testString: assert($('rect').eq(0).attr('x') == '0');
  - text: 第二个 <code>rect</code> 的 <code>x</code> 应该为 30。
    testString: assert($('rect').eq(1).attr('x') == '30');
  - text: 第三个 <code>rect</code> 的 <code>x</code> 应该为 60。
    testString: assert($('rect').eq(2).attr('x') == '60');
  - text: 第四个 <code>rect</code> 的 <code>x</code> 应该为 90。
    testString: assert($('rect').eq(3).attr('x') == '90');
  - text: 第五个 <code>rect</code> 的 <code>x</code> 应该为 120。
    testString: assert($('rect').eq(4).attr('x') == '120');
  - text: 第六个 <code>rect</code> 的 <code>x</code> 应该为 150。
    testString: assert($('rect').eq(5).attr('x') == '150');
  - text: 第七个 <code>rect</code> 的 <code>x</code> 应该为 180。
    testString: assert($('rect').eq(6).attr('x') == '180');
  - text: 第八个 <code>rect</code> 的 <code>x</code> 应该为 210。
    testString: assert($('rect').eq(7).attr('x') == '210');
  - text: 第九个 <code>rect</code> 的 <code>x</code> 应该为 240。
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
         // 在下面添加你的代码



         // 在上面添加你的代码
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
         return i * 30
       })
       .attr("y", 0)
       .attr("width", 25)
       .attr("height", 100);
  </script>
</body>

```

</section

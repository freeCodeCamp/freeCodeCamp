---
id: 587d7fa9367417b2b2512bcf
challengeType: 6
forumTopicId: 301486
title: 动态更改每个条的高度
---

## Description
<section id='description'>
和动态设置 <code>x</code> 值一样，每组的高也可以被设置成数组中数据点的值。

```js
selection.attr("property", (d, i) => {
  /* 
  * d is the data point value
  * i is the index of the data point in the array
  */
})
```

</section>

## Instructions
<section id='instructions'>
改变 <code>height</code> 属性的回调函数，让它返回数据值乘以 3 的值。
<strong>提示</strong><br>记住，把所有数据点乘以相同的常数来对数据进行缩放（就像放大）。这有利于看清例子中每组之间的差异。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 第一个 <code>rect</code> 的 <code>height</code> 应该为 36。
    testString: assert($('rect').eq(0).attr('height') == '36');
  - text: 第二个 <code>rect</code> 的 <code>height</code> 应该为 93。
    testString: assert($('rect').eq(1).attr('height') == '93');
  - text: 第三个 <code>rect</code> 的 <code>height</code> 应该为 66。
    testString: assert($('rect').eq(2).attr('height') == '66');
  - text: 第四个 <code>rect</code> 的 <code>height</code> 应该为 51。
    testString: assert($('rect').eq(3).attr('height') == '51');
  - text: 第五个 <code>rect</code> 的 <code>height</code> 应该为 75。
    testString: assert($('rect').eq(4).attr('height') == '75');
  - text: 第六个 <code>rect</code> 的 <code>height</code> 应该为 54。
    testString: assert($('rect').eq(5).attr('height') == '54');
  - text: 第七个 <code>rect</code> 的 <code>height</code> 应该为 87。
    testString: assert($('rect').eq(6).attr('height') == '87');
  - text: 第八个 <code>rect</code> 的 <code>height</code> 应该为 42。
    testString: assert($('rect').eq(7).attr('height') == '42');
  - text: 第九个 <code>rect</code> 的 <code>height</code> 应该为 27。
    testString: assert($('rect').eq(8).attr('height') == '27');

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
       .attr("y", 0)
       .attr("width", 25)
       .attr("height", (d, i) => {
         // 在下面添加你的代码



         // 在上面添加你的代码
       });
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
       .attr("x", (d, i) => i * 30)
       .attr("y", 0)
       .attr("width", 25)
       .attr("height", (d, i) => {
         return d * 3
       });
  </script>
</body>

```

</section>

---
id: 587d7fac367417b2b2512bdc
challengeType: 6
forumTopicId: 301496
title: 使用 d3.max 和 d3.min 函数在数据集中查找最小值和最大值
---

## Description
<section id='description'>
D3 的方法 <code>domain()</code> 和 <code>range()</code> 根据数据设置比例尺的信息。下面有几种更简单的方法。
通常当你设置域的时候，你会想用数据集中的最小值和最大值。尤其是在很大的数据集中，尝试手动的找到这些值可能会出错。
D3 有两个方法——<code>min()</code> 和 <code>max()</code> 来返回这些值。下面是一个例子：

```js
const exampleData = [34, 234, 73, 90, 6, 52];
d3.min(exampleData) // 返回 6
d3.max(exampleData) // 返回 234
```

像在散点图的例子中的 [x, y] 坐标对一样，数据集有可能嵌套数组。在这种情况下，你需要告诉 D3 怎么计算最大值和最小值。
辛运的是，<code>min()</code> 和 <code>max()</code> 都可以使用回调函数。
在下面这个例子中，回调函数的参数 <code>d</code> 是当前的内数组。回调函数需要从内数组中返回你想比较大小的元素（x 还是 y 值）。下面是一个如何找到二维数组的最大值和最小值的例子：

```js
const locationData = [[1, 7],[6, 3],[8, 3]];
// 返回第一个元素中的最小值s
const minX = d3.min(locationData, (d) => d[0]);
// 在 1，6，8 中 minX 为 1
```

</section>

## Instructions
<section id='instructions'>
在 <code>positionData</code> 变量中保存一个三维数组。用 D3 的方法去找到数组中 z 坐标（第三个值）的最大值并将它保存在 <code>output</code> 变量中。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>h2</code> 的文本应该为 8。
    testString: assert(output == 8 && $('h2').text() == '8');
  - text: 你应该使用 <code>max()</code> 方法。
    testString: assert(code.match(/\.max/g), 'Your code should use the  <code>max()</code>  method.')

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <script>
    const positionData = [[1, 7, -4],[6, 3, 8],[2, 8, 3]]
    // 在下面添加你的代码

    const output = undefined; // 修改这一行

    // 在上面添加你的代码

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

```html
<body>
  <script>
    const positionData = [[1, 7, -4],[6, 3, 8],[2, 9, 3]]

    const output = d3.max(positionData, (d) => d[2])

    d3.select("body")
      .append("h2")
      .text(output)
  </script>
</body>

```

</section>

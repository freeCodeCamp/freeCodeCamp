---
id: 587d7fa7367417b2b2512bc7
challengeType: 6
forumTopicId: 301479
title: 根据数据更改样式
---

## Description
<section id='description'>
D3 是关于可视化和展示数据的。如果你期望基于数据来改变元素的样式，你可以在 <code>style()</code> 方法中使用回调函数为不同元素改变样式。
例如，你想将值小于 20 的数据点设置为蓝色，其余设置为红色。你可以在 <code>style()</code> 方法中使用包含条件逻辑的回调函数。回调函数以 <code>d</code> 作为参数来表示一个数据点：

```js
selection.style("color", (d) => {
  /* Logic that returns the color based on a condition */
});
```

<code>style()</code> 方法不仅仅可以设置 <code>color</code>——它也适用于其他 CSS 属性。
</section>

## Instructions
<section id='instructions'>
在编辑器中添加 <code>style()</code> 方法，根据条件设置 <code>h2</code> 元素的 <code>color</code> 属性。写一个回调函数，如果值小于 20 返回 "red"，否则返回 "green"。
<strong>提示</strong><br>你可以使用 if-else 语句或者三目操作符。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 第一个 <code>h2</code> 的 <code>color</code> 应该为 red。
    testString: assert($('h2').eq(0).css('color') == "rgb(255, 0, 0)");
  - text: 第二个 <code>h2</code> 的 <code>color</code> 应该为 green。
    testString: assert($('h2').eq(1).css('color') == "rgb(0, 128, 0)");
  - text: 第三个 <code>h2</code> 的 <code>color</code> 应该为 green。
    testString: assert($('h2').eq(2).css('color') == "rgb(0, 128, 0)");
  - text: 第四个 <code>h2</code> 的 <code>color</code> 应该为 red。
    testString: assert($('h2').eq(3).css('color') == "rgb(255, 0, 0)");
  - text: 第五个 <code>h2</code> 的 <code>color</code> 应该为 green。
    testString: assert($('h2').eq(4).css('color') == "rgb(0, 128, 0)");
  - text: 第六个 <code>h2</code> 的 <code>color</code> 应该为 red。
    testString: assert($('h2').eq(5).css('color') == "rgb(255, 0, 0)");
  - text: 第七个 <code>h2</code> 的 <code>color</code> 应该为 green。
    testString: assert($('h2').eq(6).css('color') == "rgb(0, 128, 0)");
  - text: 第八个 <code>h2</code> 的 <code>color</code> 应该为 red。
    testString: assert($('h2').eq(7).css('color') == "rgb(255, 0, 0)");
  - text: 第九个 <code>h2</code> 的 <code>color</code> 应该为 red。
    testString: assert($('h2').eq(8).css('color') == "rgb(255, 0, 0)");

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("h2")
      .data(dataset)
      .enter()
      .append("h2")
      .text((d) => (d + " USD"))
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
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("h2")
      .data(dataset)
      .enter()
      .append("h2")
      .text((d) => (d + " USD"))
      .style("color", (d) => d < 20 ? "red" : "green")
  </script>
</body>

```

</section>

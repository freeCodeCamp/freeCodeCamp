---
id: 587d7fa7367417b2b2512bc4
challengeType: 6
forumTopicId: 301497
title: 使用 D3 中的数据
---

## Description
<section id='description'>
D3 是数据驱动的库,可以使用 D3 的方法将数组形式的数据显示在页面上。
第一步是让 D3 知道数据。<code>data</code> 方法选择连接着数据的 DOM 元素,数据集作为参数传递给该方法。
常见的方法是在文档中为数据集中的每一个数据创建一个元素，为此，你可以使用 D3 的 <code>enter()</code> 方法
当 <code>enter()</code> 和 <code>data()</code> 方法一起使用时，它把从页面中选择的元素和数据集中的元素作比较。如果页面中选择的元素较少则创建缺少的元素。
以下是一个选择 <code>ul</code> 元素并根据添加的数组创建新的列表项的例子。

```html
<body>
  <ul></ul>
  <script>
    const dataset = ["a", "b", "c"];
    d3.select("ul").selectAll("li")
      .data(dataset)
      .enter()
      .append("li")
      .text("New item");
  </script>
</body>
```

选择不存在的 li 元素似乎有些难以理解。事实上，这段代码先选择页面上的 ul 元素，再选择所有的列表项——li，它将返回空。然后data()方法接收数组作为参数，并运行三次后面的代码，每次对应数组中的一个对象。enter()方法发现页面中没有 li 元素，但是需要 3 个（每个对应dataset中的一个对象）。它将在 ul 中添加带有文本 "New item" 的 li 元素。
</section>

## Instructions
<section id='instructions'>
选择 <code>body</code> 节点，然后选择所有的 <code>h2</code> 元素。让 D3 为 <code>dataset</code> 数组中的每一个对象创建并添加文本为 "New Title" 的 <code>h2</code> 标签。你应该使用 <code>data()</code> 和 <code>enter()</code> 方法。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的文档应该有 9 个 <code>h2</code> 元素。
    testString: assert($('h2').length == 9);
  - text: "<code>h2</code> 元素中的文本应为 'New Title'。大小写和空格必须一致。"
    testString: assert($('h2').text().match(/New Title/g).length == 9);
  - text: 你应该使用 <code>data()</code> 方法。
    testString: assert(code.match(/\.data/g));
  - text: 你应该使用 <code>enter()</code> 方法。
    testString: assert(code.match(/\.enter/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

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

    d3.select("body")
      .selectAll("h2")
      .data(dataset)
      .enter()
      .append("h2")
      .text("New Title")

  </script>
</body>

```

</section>

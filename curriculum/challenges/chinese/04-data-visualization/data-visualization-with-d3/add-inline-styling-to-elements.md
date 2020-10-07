---
id: 587d7fa7367417b2b2512bc6
challengeType: 6
forumTopicId: 301475
title: 给元素添加内联样式
---

## Description
<section id='description'>
D3 可以使用 <code>style()</code> 方法为动态元素添加内联 CSS 样式表。
<code>style()</code> 方法以用逗号分隔的键值对作为参数。这里是一个将选中文本的颜色设为蓝色的例子：
<code>selection.style("color","blue");</code> 
</section>

## Instructions
<section id='instructions'>
在编辑器中添加 <code>style()</code> 方法，使所有显示的文本的 <code>font-family</code> 为 <code>verdana</code>。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的 <code>h2</code> 元素的 <code>font-family</code> 应该为 verdana。
    testString: assert($('h2').css('font-family') == 'verdana');
  - text: 你应该使用 <code>style()</code> 方法。
    testString: assert(code.match(/\.style/g));

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
      .style("font-family", "verdana")

  </script>
</body>

```

</section>

---
id: 587d7fa6367417b2b2512bc3
title: Select a Group of Elements with D3
challengeType: 0

videoUrl: ''
localeTitle: Select a Group of Elements with D3
---

## Description
<section id='description'>
<code>selectAll()</code>方法选择一组元素。它以 HTML 节点数组的形式返回该文本中所有匹配所输入字符串的对象。以下是一个选择文本中所有锚标签的例子：
<code>const anchors = d3.selectAll("a");</code>
像<code>select()</code>方法一样，<code>selectAll()</code>也支持链式调用，你可以在它之后调用其他方法。
</section>

## Instructions
<section id='instructions'>
选择所有的<code>li</code>标签，通过<code>.text()</code>方法将它的文本改为 "list item" 。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "页面上应该有 3 个<code>li</code>元素，每个元素的文本内容应为 'list item'。大小写和空格必须一致。"
    testString: assert($('li').text().match(/list item/g).length == 3, '页面上应该有3个<code>li</code>元素，每个元素的文本内容应为 "list item"。大小写和空格必须一致。');
  - text: 你应该能访问<code>d3</code>的对象。
    testString: assert(code.match(/d3/g), '你应该能访问<code>d3</code>的对象。');
  - text: 你应该使用<code>selectAll</code>方法。
    testString: assert(code.match(/\.selectAll/g), '你应该使用<code>selectAll</code>方法。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

    <div id='html-seed'>
```html
<body>,  <ul>,    <li>Example</li>,    <li>Example</li>,    <li>Example</li>,  </ul>,  <script>,    // 在下面添加你的代码,    ,    ,    ,    // 在上面添加你的代码,  </script>,</body>
```





</div>





</section>

              
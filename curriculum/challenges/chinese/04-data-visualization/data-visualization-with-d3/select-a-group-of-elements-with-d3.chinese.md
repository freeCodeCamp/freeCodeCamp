---
id: 587d7fa6367417b2b2512bc3
title: Select a Group of Elements with D3
challengeType: 6
videoUrl: ''
localeTitle: 使用D3选择一组元素
---

## Description
<section id="description"> D3还有<code>selectAll()</code>方法来选择一组元素。它返回文档中与输入字符串匹配的所有项目的HTML节点数组。这是一个选择文档中所有锚标记的示例： <code>const anchors = d3.selectAll(&quot;a&quot;);</code>与<code>select()</code>方法一样， <code>selectAll()</code>支持方法链接，您可以将其与其他方法一起使用。 </section>

## Instructions
<section id="instructions">选择文档中的所有<code>li</code>标签，并通过链接<code>.text()</code>方法将其文本更改为“list item”。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 页面上应该有3个<code>li</code>元素，每个元素中的文本应该是“list item”。大写和间距应完全匹配。
    testString: assert($('li').text().match(/list item/g).length == 3);
  - text: 您的代码应该访问<code>d3</code>对象。
    testString: assert(code.match(/d3/g));
  - text: 您的代码应该使用<code>selectAll</code>方法。
    testString: assert(code.match(/\.selectAll/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <ul>
    <li>Example</li>
    <li>Example</li>
    <li>Example</li>
  </ul>
  <script>
    // Add your code below this line



    // Add your code above this line
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

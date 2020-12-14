---
id: 587d7fa6367417b2b2512bc2
challengeType: 6
forumTopicId: 301474
title: 用 D3 给文档添加元素
---

## Description
<section id='description'>
D3 有多种方法可以用来在文档中增加元素、修改元素。
<code>select()</code> 方法用来从文档中选择元素，它以你查询的元素名称作为参数，返回第一个符合条件的 HTML 节点。以下是一个例子：
<code>const anchor = d3.select("a");</code> 
上面这个例子找到页面上的第一个 a 标签（锚标签），将它作为一个 HTML 节点保存在变量 <code>anchor</code> 中。你也可以用其他的方法选择页面上的元素。例子中的 "d3" 是对 D3 对象的引用，可以通过它来访问 D3 的方法。
还可以用 <code>append()</code> 和 <code>text()</code> 方法。
<code>append()</code> 方法以你想添加到文档中的元素作为参数，给选中的元素添加一个 HTML 节点，返回那个节点的句柄。
<code>text()</code> 方法既可以给节点设置新的文本，也可以获取节点的当前文本。 如果要设置文字内容，需要在圆括号中传入一个 string（字符串）类型的参数。
下面是一个选择无序列表、添加列表项和文字的例子：

```js
d3.select("ul")
  .append("li")
  .text("Very important item");
```

在 D3 中可以使用英文句号将多个方法串联在一起执行多个操作。
</section>

## Instructions
<section id='instructions'>
使用 <code>select</code> 方法选择文本中的 <code>body</code> 标签。然后用 <code>append</code> 方法为它添加一个 <code>h1</code> 标签，同时在 <code>h1</code> 中添加文本 "Learning D3"。
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的 <code>body</code> 元素应该包含元素 <code>h1</code>。
    testString: assert($('body').children('h1').length == 1);
  - text: "你的 <code>h1</code> 元素应该包含文本 'Learning D3'。"
    testString: assert($('h1').text() == "Learning D3");
  - text: 你应该能访问 <code>d3</code> 的对象。
    testString: assert(code.match(/d3/g));
  - text: 你应该使用 <code>select</code> 方法。
    testString: assert(code.match(/\.select/g));
  - text: 你应该使用 <code>append</code> 方法。
    testString: assert(code.match(/\.append/g));
  - text: 你应该使用 <code>text</code> 方法。
    testString: assert(code.match(/\.text/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <script>
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
    d3.select("body")
      .append("h1")
      .text("Learning D3")
  </script>
</body>
```

</section>

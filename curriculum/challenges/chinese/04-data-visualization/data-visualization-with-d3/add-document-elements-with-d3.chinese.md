---
id: 587d7fa6367417b2b2512bc2
title: Add Document Elements with D3
challengeType: 6
videoUrl: ''
localeTitle: 使用D3添加文档元素
---

## Description
<section id="description"> D3有几种方法可以让您在文档中添加和更改元素。 <code>select()</code>方法从文档中选择一个元素。它接受所需元素名称的参数，并返回文档中与名称匹配的第一个元素的HTML节点。这是一个例子： <code>const anchor = d3.select(&quot;a&quot;);</code>上面的示例在页面上查找第一个锚标记，并在变量<code>anchor</code>为其保存HTML节点。您可以使用其他方法进行选择。示例的“d3”部分是对D3对象的引用，这是您访问D3方法的方式。另外两个有用的方法是<code>append()</code>和<code>text()</code> 。 <code>append()</code>方法为要添加到文档的元素接受参数。它将HTML节点附加到选定项目，并返回该节点的句柄。 <code>text()</code>方法可以设置所选节点的文本，也可以获取当前文本。要设置该值，请在方法的括号内传递一个字符串作为参数。这是一个选择无序列表，附加列表项和添加文本的示例： <blockquote> d3.select（ “UL”） <br> .append（ “里”） <br> .text（“非常重要的项目”）; </blockquote> D3允许您将多个方法与句点链接在一起以连续执行多个操作。 </section>

## Instructions
<section id="instructions">使用<code>select</code>方法选择文档中的<code>body</code>标签。然后为其<code>append</code>一个<code>h1</code>标签，并将文本“Learning D3”添加到<code>h1</code>元素中。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>body</code>应该有一个<code>h1</code>元素。
    testString: assert($('body').children('h1').length == 1);
  - text: <code>h1</code>元素应该包含文本“Learning D3”。
    testString: assert($('h1').text() == "Learning D3");
  - text: 您的代码应该访问<code>d3</code>对象。
    testString: assert(code.match(/d3/g));
  - text: 您的代码应该使用<code>select</code>方法。
    testString: assert(code.match(/\.select/g));
  - text: 您的代码应该使用<code>append</code>方法。
    testString: assert(code.match(/\.append/g));
  - text: 您的代码应该使用<code>text</code>方法。
    testString: assert(code.match(/\.text/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
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

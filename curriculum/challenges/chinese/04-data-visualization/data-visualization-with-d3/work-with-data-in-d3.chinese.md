---
id: 587d7fa7367417b2b2512bc4
title: Work with Data in D3
challengeType: 6
videoUrl: ''
localeTitle: 在D3中使用数据
---

## Description
<section id="description"> D3库专注于数据驱动的方法。当您拥有一组数据时，可以应用D3方法在页面上显示它。数据有多种格式，但这一挑战使用了一组简单的数字。第一步是让D3知道数据。 <code>data()</code>方法用于选择DOM元素以将数据附加到这些元素。数据集作为参数传递给方法。常见的工作流模式是在文档中为集合中的每个数据创建一个新元素。 D3为此目的使用了<code>enter()</code>方法。当<code>enter()</code>与<code>data()</code>方法结合使用时，它会查看页面中的选定元素，并将它们与集合中的数据项数量进行比较。如果元素少于数据项，则会创建缺少的元素。下面是一个示例，它选择一个<code>ul</code>元素并根据数组中的条目数创建一个新的列表项： <blockquote> &lt;BODY&gt; <br> &lt;UL&gt; &lt;/ UL&gt; <br> &lt;SCRIPT&gt; <br> const dataset = [“a”，“b”，“c”]; <br> d3.select（ “UL”）。全选（ “礼”） <br> 。数据（数据集） <br> 。输入（） <br> .append（ “里”） <br> .text（“新项目”）; <br> &lt;/ SCRIPT&gt; <br> &lt;/ BODY&gt; </blockquote>选择尚不存在的元素似乎令人困惑。此代码告诉D3首先选择页面上的<code>ul</code> 。接下来，选择所有列表项，返回空选择。然后<code>data()</code>方法检查数据集并运行以下代码三次，对于数组中的每个项目运行一次。 <code>enter()</code>方法看到页面上没有<code>li</code>元素，但它需要3（数据<code>dataset</code>每个数据对应一个）。新的<code>li</code>元素被附加到<code>ul</code>并具有文本“New item”。 </section>

## Instructions
<section id="instructions">选择<code>body</code>节点，然后选择所有<code>h2</code>元素。让D3为<code>dataset</code>数组中的每个项创建并附加<code>h2</code>标记。 <code>h2</code>的文字应该说“新标题”。您的代码应使用<code>data()</code>和<code>enter()</code>方法。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的文档应该有9个<code>h2</code>元素。
    testString: assert($('h2').length == 9);
  - text: <code>h2</code>元素中的文本应该是“New Title”。大写和间距应完全匹配。
    testString: assert($('h2').text().match(/New Title/g).length == 9);
  - text: 您的代码应该使用<code>data()</code>方法。
    testString: assert(code.match(/\.data/g));
  - text: 您的代码应使用<code>enter()</code>方法。
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

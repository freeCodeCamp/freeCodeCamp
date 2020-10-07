---
id: bd7123c8c441eddfaeb5bdef
originalTitle: Say Hello to HTML Elements
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cE8Gpt2'
forumTopicId: 18276
title: 向HTML Elements说你好
---

## Description
<section id="description">
欢迎来到freeCodeCamp的HTML编码挑战。这些将逐步引导您完成Web开发。首先，您将首先使用HTML构建一个简单的网页。您可以在<code>code editor</code>编辑<code>code</code> ，该<code>code editor</code>嵌入到此网页中。您是否在代码编辑器中看到<code>&lt;h1&gt;Hello&lt;/h1&gt;</code> ？这是一个HTML <code>element</code> 。大多数HTML元素都有一个<code>opening tag</code>和一个<code>closing tag</code> 。打开标记如下所示： <code>&lt;h1&gt;</code>结束标记如下所示： <code>&lt;/h1&gt;</code>开始标记和结束标记之间的唯一区别是结束标记的左括号后面的正斜杠。每个挑战都有可以随时单击“运行测试”按钮运行的测试。当您通过所有测试时，系统会提示您提交解决方案并转到下一个编码挑战。 
</section>

## Instructions
<section id="instructions">
要通过此挑战的测试，请将<code>h1</code>元素的文本更改为“Hello World”。 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的<code>h1</code>元素应该有“Hello World”文本。
    testString: assert.isTrue((/hello(\s)+world/gi).test($('h1').text()));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h1>Hello</h1>
<!-- (Chinese) Add your code below this line (Chinese) -->
<!-- (Chinese) Add your code above this line (Chinese) -->
<style>
  /* (Chinese) change code below this line (Chinese) */
  /* (Chinese) change code above this line (Chinese) */
</style>
```

</div>



</section>

## Solution
<section id='solution'>

```html
<h1>Hello World</h1>
```

</section>

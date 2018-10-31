---
id: bad87fee1348bd9aedf0887a
title: Headline with the h2 Element
challengeType: 0
videoUrl: ''
localeTitle: 标题与h2元素
---

## Description
<section id="description">在接下来的几节课中，我们将逐个构建一个HTML5猫照片网络应用程序。您将在此步骤中添加的<code>h2</code>元素将向网页添加第二级标题。此元素告诉浏览器您的网站结构。 <code>h1</code>元素通常用于主标题，而<code>h2</code>元素通常用于子标题。还有<code>h3</code> ， <code>h4</code> ， <code>h5</code>和<code>h6</code>元素表示不同级别的副标题。 </section>

## Instructions
<section id="instructions">添加<code>h2</code>标签，上面写着“CatPhotoApp”创建第二个HTML <code>element</code>你的“Hello World”的<code>h1</code>元素。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 创建一个<code>h2</code>元素。
    testString: 'assert(($("h2").length > 0), "Create an <code>h2</code> element.");'
  - text: 确保您的<code>h2</code>元素具有结束标记。
    testString: 'assert(code.match(/<\/h2>/g) && code.match(/<\/h2>/g).length === code.match(/<h2>/g).length, "Make sure your <code>h2</code> element has a closing tag.");'
  - text: 您的<code>h2</code>元素应该包含文本“CatPhotoApp”。
    testString: 'assert.isTrue((/cat(\s)?photo(\s)?app/gi).test($("h2").text()), "Your <code>h2</code> element should have the text "CatPhotoApp".");'
  - text: 你的<code>h1</code>元素应该有“Hello World”文本。
    testString: 'assert.isTrue((/hello(\s)+world/gi).test($("h1").text()), "Your <code>h1</code> element should have the text "Hello World".");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h1>Hello World</h1>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

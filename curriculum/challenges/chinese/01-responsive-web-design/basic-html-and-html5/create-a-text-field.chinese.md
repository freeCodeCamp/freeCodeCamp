---
id: bad87fee1348bd9aedf08829
title: Create a Text Field
challengeType: 0
videoUrl: ''
localeTitle: 创建文本字段
---

## Description
<section id="description">现在让我们创建一个Web表单。输入元素是从用户获取输入的便捷方式。您可以创建如下文本输入： <code>&lt;input type=&quot;text&quot;&gt;</code>请注意， <code>input</code>元素是自动关闭的。 </section>

## Instructions
<section id="instructions">在列表下创建<code>text</code>类型的<code>input</code>元素。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的应用应具有<code>text</code>类型的<code>input</code>元素。
    testString: 'assert($("input[type=text]").length > 0, "Your app should have an <code>input</code> element of type <code>text</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h2>CatPhotoApp</h2>
<main>
  <p>Click here to view more <a href="#">cat photos</a>.</p>

  <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>

  <p>Things cats love:</p>
  <ul>
    <li>cat nip</li>
    <li>laser pointers</li>
    <li>lasagna</li>
  </ul>
  <p>Top 3 things cats hate:</p>
  <ol>
    <li>flea treatment</li>
    <li>thunder</li>
    <li>other cats</li>
  </ol>


</main>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

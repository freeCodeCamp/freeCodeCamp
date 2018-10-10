---
id: bad87fee1348bd9aede08830
title: Create a Form Element
challengeType: 0
videoUrl: ''
localeTitle: 创建表单元素
---

## Description
<section id="description">您可以使用纯HTML来构建实际将数据提交到服务器的Web表单。您可以通过在<code>form</code>元素上指定操作来执行此操作。例如： <code>&lt;form action=&quot;/url-where-you-want-to-submit-form-data&quot;&gt;&lt;/form&gt;</code> </section>

## Instructions
<section id="instructions">将文本字段嵌套在<code>form</code>元素中，并将<code>action=&quot;/submit-cat-photo&quot;</code>属性添加到表单元素中。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 将文本输入元素嵌套在<code>form</code>元素中。
    testString: 'assert($("form") && $("form").children("input") && $("form").children("input").length > 0, "Nest your text input element within a <code>form</code> element.");'
  - text: 确保您的<code>form</code>具有设置为<code>/submit-cat-photo</code>的<code>action</code>属性
    testString: 'assert($("form").attr("action") === "/submit-cat-photo", "Make sure your <code>form</code> has an <code>action</code> attribute which is set to <code>/submit-cat-photo</code>");'
  - text: 确保您的<code>form</code>元素具有格式良好的打开和关闭标记。
    testString: 'assert(code.match(/<\/form>/g) && code.match(/<form [^<]*>/g) && code.match(/<\/form>/g).length === code.match(/<form [^<]*>/g).length, "Make sure your <code>form</code> element has well-formed open and close tags.");'

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
  <input type="text" placeholder="cat photo URL">
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

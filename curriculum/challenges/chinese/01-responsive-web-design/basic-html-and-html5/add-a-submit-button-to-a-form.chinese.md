---
id: bad87fee1348bd9aedd08830
title: Add a Submit Button to a Form
challengeType: 0
guideUrl: 'https://chinese.freecodecamp.org/guide/certificates/add-a-submit-button-to-a-form'
videoUrl: ''
localeTitle: 向表单添加提交按钮
---

## Description
<section id="description">我们在表单中添加一个<code>submit</code>按钮。单击此按钮会将表单中的数据发送到您使用表单的<code>action</code>属性指定的URL。这是一个示例提交按钮： <code>&lt;button type=&quot;submit&quot;&gt;this button submits the form&lt;/button&gt;</code> </section>

## Instructions
<section id="instructions">添加一个按钮作为<code>form</code>元素的最后一个元素，其类型为<code>submit</code> ，并且“Submit”作为其文本。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 你的表单里面应该有一个按钮。
    testString: 'assert($("form").children("button").length > 0, "Your form should have a button inside it.");'
  - text: 您的提交按钮应该具有要<code>submit</code>的属性<code>type</code> 。
    testString: 'assert($("button").attr("type") === "submit", "Your submit button should have the attribute <code>type</code> set to <code>submit</code>.");'
  - text: 您的提交按钮应该只有“提交”文本。
    testString: 'assert($("button").text().match(/^\s*submit\s*$/gi), "Your submit button should only have the text "Submit".");'
  - text: 确保您的<code>button</code>元素有一个结束标记。
    testString: 'assert(code.match(/<\/button>/g) && code.match(/<button/g) && code.match(/<\/button>/g).length === code.match(/<button/g).length, "Make sure your <code>button</code> element has a closing tag.");'

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
  <form action="/submit-cat-photo">
    <input type="text" placeholder="cat photo URL">
  </form>
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

---
id: bad87fee1348bd9aedf08830
title: Add Placeholder Text to a Text Field
challengeType: 0
guideUrl: 'https://chinese.freecodecamp.org/guide/certificates/add-placeholder-text-to-a-text-field'
videoUrl: ''
localeTitle: 将占位符文本添加到文本字段
---

## Description
<section id="description">占位符文本是在用户输入任何内容之前在<code>input</code>元素中显示的内容。您可以像这样创建占位符文本： <code>&lt;input type=&quot;text&quot; placeholder=&quot;this is placeholder text&quot;&gt;</code> </section>

## Instructions
<section id="instructions">将文本<code>input</code>的<code>placeholder</code>值设置为“cat photo URL”。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 将<code>placeholder</code>属性添加到现有文本<code>input</code>元素。
    testString: 'assert($("input[placeholder]").length > 0, "Add a <code>placeholder</code> attribute to the existing text <code>input</code> element.");'
  - text: 将占位符属性的值设置为“cat photo URL”。
    testString: 'assert($("input") && $("input").attr("placeholder") && $("input").attr("placeholder").match(/cat\s+photo\s+URL/gi), "Set the value of your placeholder attribute to "cat photo URL".");'
  - text: 完成的<code>input</code>元素应该具有有效的语法。
    testString: 'assert($("input[type=text]").length > 0 && code.match(/<input((\s+\w+(\s*=\s*(?:".*?"|".*?"|[\^"">\s]+))?)+\s*|\s*)\/?>/gi), "The finished <code>input</code> element should have valid syntax.");'

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
  <input type="text">
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

---
id: bad87fee1348bd9aedc08830
title: Use HTML5 to Require a Field
challengeType: 0
videoUrl: ''
localeTitle: 使用HTML5需要字段
---

## Description
<section id="description">您可以要求特定的表单字段，以便您的用户在填写表单之前无法提交表单。例如，如果要创建所需的文本输入字段，只需在<code>input</code>元素中添加<code>required</code>的属性，如下所示： <code>&lt;input type=&quot;text&quot; required&gt;</code> </section>

## Instructions
<section id="instructions">使您的文本<code>input</code> <code>required</code>字段，以便您的用户无法在不填写此字段的情况下提交表单。然后尝试提交表单而不输入任何文本。了解您的HTML5表单如何通知您该字段是必需的？ </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 您的文本<code>input</code>元素应具有<code>required</code>属性。
    testString: 'assert($("input").prop("required"), "Your text <code>input</code> element should have the <code>required</code> attribute.");'

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
    <button type="submit">Submit</button>
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

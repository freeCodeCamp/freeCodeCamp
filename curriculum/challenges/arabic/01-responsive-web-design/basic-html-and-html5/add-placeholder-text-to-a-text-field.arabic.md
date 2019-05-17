---
id: bad87fee1348bd9aedf08830
title: Add Placeholder Text to a Text Field
challengeType: 0
videoUrl: ''
localeTitle: إضافة نص العنصر النائب إلى حقل نص
---

## Description
<section id="description"> نص العنصر النائب هو ما يتم عرضه في عنصر <code>input</code> قبل قيام المستخدم <code>input</code> أي شيء. يمكنك إنشاء نص عنصر نائب مثل: <code>&lt;input type=&quot;text&quot; placeholder=&quot;this is placeholder text&quot;&gt;</code> </section>

## Instructions
<section id="instructions"> <code>placeholder</code> قيمة <code>placeholder</code> <code>input</code> النص إلى &quot;عنوان URL لصورة القط&quot;. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: أضف سمة <code>placeholder</code> لعنصر <code>input</code> النص الحالي.
    testString: 'assert($("input[placeholder]").length > 0, "Add a <code>placeholder</code> attribute to the existing text <code>input</code> element.");'
  - text: عيّن قيمة سمة العنصر النائب الخاصة بك إلى "عنوان URL لصورة القط".
    testString: 'assert($("input") && $("input").attr("placeholder") && $("input").attr("placeholder").match(/cat\s+photo\s+URL/gi), "Set the value of your placeholder attribute to "cat photo URL".");'
  - text: يجب أن يحتوي عنصر <code>input</code> النهائي على صيغة صحيحة.
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

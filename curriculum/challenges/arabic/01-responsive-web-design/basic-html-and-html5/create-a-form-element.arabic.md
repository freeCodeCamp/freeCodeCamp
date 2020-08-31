---
id: bad87fee1348bd9aede08830
title: Create a Form Element
challengeType: 0
videoUrl: ''
localeTitle: إنشاء عنصر النموذج
---

## Description
<section id="description"> يمكنك إنشاء نماذج ويب تقوم بالفعل بإرسال البيانات إلى خادم لا يستخدم أكثر من HTML خالص. يمكنك القيام بذلك عن طريق تحديد إجراء على عنصر <code>form</code> الخاص بك. على سبيل المثال: <code>&lt;form action=&quot;/url-where-you-want-to-submit-form-data&quot;&gt;&lt;/form&gt;</code> </section>

## Instructions
<section id="instructions"> ضع حقل النص داخل عنصر <code>form</code> ، وأضف السمة <code>action=&quot;https://freecatphotoapp.com/submit-cat-photo&quot;</code> إلى عنصر النموذج. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: ضع عنصر إدخال النص داخل عنصر <code>form</code> .
    testString: 'assert($("form") && $("form").children("input") && $("form").children("input").length > 0, "Nest your text input element within a <code>form</code> element.");'
  - text: تأكد من احتواء <code>form</code> على سمة <code>action</code> تم تعيينها على <code>https://freecatphotoapp.com/submit-cat-photo</code>
    testString: 'assert($("form").attr("action") === "https://freecatphotoapp.com/submit-cat-photo", "Make sure your <code>form</code> has an <code>action</code> attribute which is set to <code>https://freecatphotoapp.com/submit-cat-photo</code>");'
  - text: تأكد من أن عنصر <code>form</code> يحتوي على علامات فتح وغلق جيدة الإنشاء.
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

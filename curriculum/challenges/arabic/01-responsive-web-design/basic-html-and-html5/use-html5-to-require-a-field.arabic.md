---
id: bad87fee1348bd9aedc08830
title: Use HTML5 to Require a Field
challengeType: 0
videoUrl: ''
localeTitle: استخدم HTML5 لطلب حقل
---

## Description
<section id="description"> يمكنك طلب حقول نموذج محددة بحيث لا يتمكن المستخدم من إرسال النموذج الخاص بك حتى يقوم بملئها. على سبيل المثال ، إذا أردت إنشاء حقل إدخال نص مطلوب ، فيمكنك فقط إضافة السمة <code>required</code> داخل عنصر <code>input</code> ، مثل: <code>&lt;input type=&quot;text&quot; required&gt;</code> </section>

## Instructions
<section id="instructions"> اجعل <code>input</code> النص الخاص بك حقلًا <code>required</code> ، بحيث لا يمكن للمستخدم إرسال النموذج بدون إكمال هذا الحقل. ثم حاول إرسال النموذج دون إدخال أي نص. انظر كيف يعلمك نموذج HTML5 أن هذا الحقل مطلوب؟ </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يحتوي عنصر <code>input</code> النص على السمة <code>required</code> .
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
  <form action="https://freecatphotoapp.com/submit-cat-photo">
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

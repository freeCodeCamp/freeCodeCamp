---
id: bad87fee1348bd9aedd08830
title: Add a Submit Button to a Form
challengeType: 0
videoUrl: ''
localeTitle: إضافة زر إرسال إلى نموذج
---

## Description
<section id="description"> دعنا نضيف زر <code>submit</code> إلى النموذج الخاص بك. يؤدي النقر على هذا الزر إلى إرسال البيانات من النموذج إلى عنوان URL الذي حددته باستخدام سمة <code>action</code> للنموذج. في ما يلي مثال زر الإرسال: <code>&lt;button type=&quot;submit&quot;&gt;this button submits the form&lt;/button&gt;</code> </section>

## Instructions
<section id="instructions"> أضف زرًا باعتباره العنصر الأخير في عنصر <code>form</code> الخاص بك مع نوع <code>submit</code> ، و &quot;إرسال&quot; كنصه. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يحتوي النموذج الخاص بك على زر بداخله.
    testString: 'assert($("form").children("button").length > 0, "Your form should have a button inside it.");'
  - text: يجب أن يحتوي زر الإرسال على <code>type</code> السمة الذي تم تعيينه <code>submit</code> .
    testString: 'assert($("button").attr("type") === "submit", "Your submit button should have the attribute <code>type</code> set to <code>submit</code>.");'
  - text: يجب أن يحتوي زر الإرسال فقط على النص "إرسال".
    testString: 'assert($("button").text().match(/^\s*submit\s*$/gi), "Your submit button should only have the text "Submit".");'
  - text: تأكد من أن عنصر <code>button</code> يحتوي على علامة إغلاق.
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
  <form action="https://freecatphotoapp.com/submit-cat-photo">
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

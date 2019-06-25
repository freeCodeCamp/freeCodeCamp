---
id: 587d7dbf367417b2b2512bbc
title: Split Your Styles into Smaller Chunks with Partials
challengeType: 0
videoUrl: ''
localeTitle: ''
---

## Description
<section id="description"> <code>Partials</code> في Sass هي ملفات منفصلة تحتوي على أجزاء من شفرة CSS. يتم استيرادها واستخدامها في ملفات ساس أخرى. هذه طريقة رائعة لتجميع التعليمات البرمجية المشابهة في وحدة نمطية للحفاظ على تنظيمها. تبدأ الأسماء الخاصة <code>partials</code> بحرف تسطير أسفل السطر ( <code>_</code> ) ، الذي يخبر Sass أنه جزء صغير من CSS وليس لتحويله إلى ملف CSS. أيضًا ، تنتهي ملفات Sass <code>.scss</code> الملف <code>.scss</code> . لإحضار الرمز في الجزء <code>partial</code> إلى ملف Sass آخر ، استخدم <code>@import</code> التوجيه. على سبيل المثال ، إذا تم حفظ جميع <code>mixins</code> الخاص بك في <code>partial</code> باسم &quot;_mixins.scss&quot; ، وكانت مطلوبة في ملف &quot;main.scss&quot; ، فهذا هو كيفية استخدامها في الملف الرئيسي: <blockquote style=";text-align:right;direction:rtl"> // في الملف main.scss <br><br> @ mixport &quot;mixins&quot; </blockquote> لاحظ أن شرطة سفلية لا تكون مطلوبة في كشف <code>import</code> - يفهم Sass أنها <code>partial</code> . مرة واحدة في <code>partial</code> يتم استيرادها إلى ملف، كل المتغيرات، <code>mixins</code> متاحة للاستخدام، وقانون آخر. </section>

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert(code.match(/@import\s+?("|")variables\1/gi), "Your code should use the <code>@import</code> directive, and should not include the underscore in the file name.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
// The main.scss file

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

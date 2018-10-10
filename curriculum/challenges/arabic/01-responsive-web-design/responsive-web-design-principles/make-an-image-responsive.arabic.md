---
id: 587d78b1367417b2b2512b09
title: Make an Image Responsive
challengeType: 0
videoUrl: ''
localeTitle: جعل صورة مستجيبة
---

## Description
<section id="description"> جعل الصور متجاوبة مع CSS بسيط للغاية. بدلاً من تطبيق عرض مطلق لعنصر: <code>img { width: 720px; }</code> يمكنك استخدام: <blockquote style=";text-align:right;direction:rtl"> img { <br> أقصى عرض: 100 ٪. <br> العرض محجوب؛ <br> الارتفاع: auto؛ <br> } </blockquote> تحدد الخاصية <code>max-width</code> ٪ 100 الصورة لتناسب عرض الحاوية الخاصة بها ، ولكن الصورة لن تمتد على نطاق أوسع من عرضها الأصلي. يؤدي تعيين خاصية <code>display</code> لحظر التغييرات على الصورة من عنصر مضمّن (الافتراضي الخاص بها) إلى عنصر كتلة على السطر الخاص بها. تحافظ خاصية <code>height</code> تلقائي على نسبة العرض إلى الارتفاع الأصلية للصورة. </section>

## Instructions
<section id="instructions"> أضف قواعد النمط لعلامة <code>img</code> لجعلها تستجيب لحجم الحاوية الخاصة بها. يجب أن يتم عرضه كعنصر على مستوى الكتلة ، يجب أن يلائم العرض الكامل للحاوية دون تمديد ، ويجب أن يحتفظ بنسبة العرض إلى الارتفاع الأصلية. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يكون لعلامة <code>img</code> الخاصة بك مجموعة <code>max-width</code> لتصل إلى 100٪.
    testString: 'assert(code.match(/max-width:\s*?100%;/g), "Your <code>img</code> tag should have a <code>max-width</code> set to 100%.");'
  - text: يجب أن يكون لديك علامة <code>img</code> مجموعة <code>display</code> للحظر.
    testString: 'assert($("img").css("display") == "block", "Your <code>img</code> tag should have a <code>display</code> set to block.");'
  - text: يجب أن يكون لعلامة <code>img</code> الخاصة بك مجموعة من <code>height</code> إلى تلقائي.
    testString: 'assert(code.match(/height:\s*?auto;/g), "Your <code>img</code> tag should have a <code>height</code> set to auto.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>

</style>

<img src="https://s3.amazonaws.com/freecodecamp/FCCStickerPack.jpg" alt="freeCodeCamp stickers set">

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

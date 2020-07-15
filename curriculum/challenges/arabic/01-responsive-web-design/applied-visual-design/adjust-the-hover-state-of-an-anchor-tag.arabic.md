---
id: 587d781d367417b2b2512ac8
title: Adjust the Hover State of an Anchor Tag
challengeType: 0
videoUrl: ''
localeTitle: ضبط حالة التحويم لعلامة الارتساء
---

## Description
<section id="description"> سوف يلمس هذا التحدي على استخدام الطبقات الزائفة. الفئة الزائفة هي كلمة رئيسية يمكن إضافتها إلى المحددات ، من أجل تحديد حالة معينة للعنصر. على سبيل المثال، تحت غطاء من علامة مرساة يمكن تغيير لدولة تحوم لها باستخدام <code>:hover</code> فئة مزيفة محدد. إليك CSS لتغيير <code>color</code> علامة الربط إلى اللون الأحمر أثناء حالة التمرير الخاصة بها: <blockquote style=";text-align:right;direction:rtl"> a: hover { <br> لون احمر؛ <br> } </blockquote></section>

## Instructions
<section id="instructions"> محرر التعليمات البرمجية لديها قاعدة CSS أسلوب كل <code>a</code> علامات سوداء. إضافة قاعدة بحيث عند مرور المستخدم على <code>a</code> العلامة، و <code>color</code> الأزرق. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'يجب أن يظل <code>color</code> علامة الربط أسودًا ، مع إضافة قواعد CSS فقط لحالة <code>:hover</code> .'
    testString: 'assert($("a").css("color") == "rgb(0, 0, 0)", "The anchor tag <code>color</code> should remain black, only add CSS rules for the <code>:hover</code> state.");'
  - text: يجب أن يكون لعلامة الارتساء <code>color</code> أزرق عند التمرير.
    testString: 'assert(code.match(/a:hover\s*?{\s*?color:\s*?blue;\s*?}/gi), "The anchor tag should have a <code>color</code> of blue on hover.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  a {
    color: #000;
  }



</style>
<a href="https://freecatphotoapp.com/" target="_blank">CatPhotoApp</a>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>

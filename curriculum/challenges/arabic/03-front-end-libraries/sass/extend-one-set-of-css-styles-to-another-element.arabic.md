---
id: 587d7fa5367417b2b2512bbd
title: Extend One Set of CSS Styles to Another Element
challengeType: 0
videoUrl: ''
localeTitle: ''
---

## Description
<section id="description"> لدى Sass ميزة تسمى <code>extend</code> تجعل من السهل استعارة قواعد CSS من عنصر واحد والبناء عليها في عنصر آخر. على سبيل المثال ، تقوم الكتلة أدناه من قواعد CSS بنمط طبقة <code>.panel</code> . له <code>background-color</code> <code>height</code> <code>border</code> . <blockquote style=";text-align:right;direction:rtl"> .فريق{ <br> لون الخلفية: أحمر. <br> الارتفاع: 70 بكسل ؛ <br> border: 2px solid green؛ <br> } </blockquote> أنت الآن تريد لوحة أخرى تسمى <code>.big-panel</code> . يحتوي على نفس الخصائص الأساسية مثل <code>.panel</code> ، ولكنه يحتاج أيضًا إلى <code>width</code> وحجم <code>font-size</code> . من الممكن نسخ قواعد CSS الأولية ولصقها من <code>.panel</code> ، ولكن يصبح الرمز متكررًا عند إضافة المزيد من أنواع اللوحات. على <code>extend</code> التوجيه هو وسيلة بسيطة لإعادة استخدام قواعد مكتوبة لعنصر واحد، ثم أضيف أكثر لآخر: <blockquote style=";text-align:right;direction:rtl"> . كبير لوحة { <br> extend .panel؛ <br> العرض: 150 بكسل ؛ <br> حجم الخط: 2em ؛ <br> } </blockquote> سيكون <code>.big-panel</code> نفس الخصائص مثل <code>.panel</code> بالإضافة إلى الأنماط الجديدة. </section>

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert(code.match(/\.info-important\s*?{[\s\S]*background-color\s*?:\s*?magenta\s*?;[\s\S]*}/gi), "Your <code>info-important</code> class should have a <code>background-color</code> set to <code>magenta</code>.");'
  - text: يجب أن تستخدم فئة <code>info-important</code> الخاصة بك <code>@extend</code> ليرث التصميم من فئة <code>info</code> .
    testString: 'assert(code.match(/\.info-important\s*?{[\s\S]*@extend\s*?.info\s*?;[\s\S]*/gi), "Your <code>info-important</code> class should use <code>@extend</code> to inherit the styling from the <code>info</code> class.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style type='text/sass'>
  h3{
    text-align: center;
  }
  .info{
    width: 200px;
    border: 1px solid black;
    margin: 0 auto;
  }




</style>
<h3>Posts</h3>
<div class="info-important">
  <p>This is an important post. It should extend the class ".info" and have its own CSS styles.</p>
</div>

<div class="info">
  <p>This is a simple post. It has basic styling and can be extended for other uses.</p>
</div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

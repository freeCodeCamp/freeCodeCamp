---
id: 587d78a6367417b2b2512add
title: Create a Graphic Using CSS
challengeType: 0
videoUrl: ''
localeTitle: قم بإنشاء رسم باستخدام CSS
---

## Description
<section id="description"> من خلال التلاعب بمختصرات وخصائص مختلفة ، يمكنك عمل أشكال مثيرة للاهتمام. واحدة من أسهل في محاولة هو شكل هلال القمر. لهذا التحدي ، تحتاج إلى العمل مع خاصية <code>box-shadow</code> التي تقوم بتعيين ظل عنصر ، مع خاصية <code>border-radius</code> التي تتحكم في استدارة زوايا العنصر. سوف تقوم بإنشاء كائن مستدير وشفافة مع ظل هش يعوض قليلاً إلى الجانب - الظل سيكون في الواقع شكل القمر الذي تراه. لإنشاء كائن مستدير ، يجب تعيين الخاصية <code>border-radius</code> إلى قيمة 50٪. قد تتذكر من تحدي سابق أن خاصية <code>box-shadow</code> تأخذ قيمًا <code>offset-x</code> ، <code>offset-y</code> ، <code>blur-radius</code> ، و <code>blur-radius</code> <code>spread-radius</code> وقيمة اللون بهذا الترتيب. تعد قيم <code>spread-radius</code> <code>blur-radius</code> و <code>blur-radius</code> <code>spread-radius</code> اختيارية. </section>

## Instructions
<section id="instructions"> التعامل مع عنصر مربع في المحرر لإنشاء شكل القمر. أولاً ، قم بتغيير <code>background-color</code> إلى شفاف ، ثم قم بتعيين الخاصية <code>border-radius</code> إلى 50٪ لجعل الشكل الدائري. وأخيرًا ، قم بتغيير الخاصية <code>box-shadow</code> لتعيين <code>offset-x</code> إلى 25px ، و <code>offset-y</code> إلى 10px ، و <code>blur-radius</code> إلى 0 ، <code>spread-radius</code> إلى 0 ، و color to blue. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب تعيين قيمة الخاصية <code>background-color</code> إلى <code>transparent</code> .
    testString: 'assert(code.match(/background-color:\s*?transparent;/gi), "The value of the <code>background-color</code> property should be set to <code>transparent</code>.");'
  - text: يجب تعيين قيمة خاصية <code>border-radius</code> إلى <code>50%</code> .
    testString: 'assert(code.match(/border-radius:\s*?50%;/gi), "The value of the <code>border-radius</code> property should be set to <code>50%</code>.");'
  - text: يجب تعيين قيمة الخاصية <code>box-shadow</code> إلى 25px للإزاحة <code>offset-x</code> ، و <code>offset-x</code> بكسل لـ <code>offset-x</code> <code>offset-y</code> ، و 0 لـ <code>blur-radius</code> ، و 0 لـ <code>spread-radius</code> ، وأخيراً اللون الأزرق للون.
    testString: 'assert(code.match(/box-shadow:\s*?25px\s+?10px\s+?0(px)?\s+?0(px)?\s+?blue\s*?;/gi), "The value of the <code>box-shadow</code> property should be set to 25px for <code>offset-x</code>, 10px for <code>offset-y</code>, 0 for <code>blur-radius</code>, 0 for <code>spread-radius</code>, and finally blue for the color.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
.center
{
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100px;
  height: 100px;
  background-color: blue;
  border-radius: 0px;
  box-shadow: 25px 10px 10px 10px green;
}

</style>
<div class="center"></div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

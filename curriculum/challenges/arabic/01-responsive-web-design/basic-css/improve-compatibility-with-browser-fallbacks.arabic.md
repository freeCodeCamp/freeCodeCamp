---
id: 5b7d72c338cd7e35b63f3e14
title: Improve Compatibility with Browser Fallbacks
challengeType: 0
videoUrl: ''
localeTitle: تحسين التوافق مع Fallbacks المستعرض
---

## Description
<section id="description"> عند العمل مع CSS ، من المحتمل أن تصل إلى مشكلات توافق المستعرض في مرحلة ما. هذا هو السبب في أنه من المهم توفير fallbacks المتصفح لتجنب المشاكل المحتملة. عندما يقوم المتصفح بتوزيع CSS لصفحة ويب ، فإنه يتجاهل أي خصائص لا يتعرف عليها أو يدعمها. على سبيل المثال ، إذا كنت تستخدم متغير CSS لتعيين لون خلفية على أحد المواقع ، فسيتجاهل Internet Explorer لون الخلفية لأنه لا يدعم متغيرات CSS. في هذه الحالة ، سيستخدم المتصفح أي قيمة لديه لهذا الموقع. إذا لم يعثر على أي قيمة أخرى لهذه الخاصية ، فسيتم إرجاعها إلى القيمة الافتراضية ، والتي عادةً ما تكون غير مثالية. وهذا يعني أنه إذا كنت تريد توفير احتياطي للمتصفح ، فسيكون الأمر سهلاً مثل توفير قيمة أخرى مدعومة بشكل أوسع فورًا قبل الإعلان. وبهذه الطريقة ، سيكون للمتصفح القديم شيئًا ما يتراجع عنه ، في حين أن المتصفح الأحدث سوف يفسر أي إعلان يأتي لاحقًا في السلسلة. </section>

## Instructions
<section id="instructions"> يبدو أنه يتم استخدام متغير لضبط لون خلفية فئة <code>.red-box</code> . دعونا نحسن من توافق المتصفح الخاص بنا عن طريق إضافة إعلان <code>background</code> آخر قبل الإعلان الحالي وتعيين قيمته إلى اللون الأحمر. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن تتضمن قاعدة <code>.red-box</code> الخاصة بك احتياطيًا مع تعيين <code>background</code> إلى اللون الأحمر مباشرةً قبل بيان <code>background</code> الموجود.
    testString: 'assert(code.match(/.red-box\s*{[^}]*background:\s*(red|#ff0000|#f00|rgb\(\s*255\s*,\s*0\s*,\s*0\s*\)|rgb\(\s*100%\s*,\s*0%\s*,\s*0%\s*\)|hsl\(\s*0\s*,\s*100%\s*,\s*50%\s*\))\s*;\s*background:\s*var\(\s*--red-color\s*\);/gi), "Your <code>.red-box</code> rule should include a fallback with the <code>background</code> set to red immediately before the existing <code>background</code> declaration.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  :root {
    --red-color: red;
  }
  .red-box {

    background: var(--red-color);
    height: 200px;
    width:200px;
  }
</style>
<div class="red-box"></div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

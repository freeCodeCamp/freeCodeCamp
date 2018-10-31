---
id: 587d7791367417b2b2512ab3
title: Create Visual Balance Using the text-align Property
challengeType: 0
videoUrl: ''
localeTitle: إنشاء توازن مرئي باستخدام خاصية محاذاة النص
---

## Description
<section id="description"> يركز هذا القسم من المنهج على التصميم المرئي التطبيقي. تعتمد المجموعة الأولى من التحديات على تصميم البطاقة المعينة لإظهار عدد من المبادئ الأساسية. غالبًا ما يكون النص جزءًا كبيرًا من محتوى الويب. يحتوي CSS على عدة خيارات لكيفية محاذاةه مع خاصية <code>text-align</code> . <code>text-align: justify;</code> يتسبب في كافة أسطر النص باستثناء السطر الأخير لمقابلة الحواف اليمنى واليسرى لمربع السطر. <code>text-align: center;</code> مراكز النص <code>text-align: right;</code> محاذاة إلى اليمين <code>text-align: left;</code> (الافتراضي) يسار النص. </section>

## Instructions
<section id="instructions"> قم بمحاذاة نص علامة <code>h4</code> ، والذي يشير إلى &quot;Google&quot; ، إلى المركز. ثم قم بتبرير علامة الفقرة التي تحتوي على معلومات حول كيفية تأسيس Google. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن تستخدم التعليمات البرمجية الخاصة بك الخاصية محاذاة النص على علامة <code>h4</code> إلى الوسط.
    testString: 'assert($("h4").css("text-align") == "center", "Your code should use the text-align property on the <code>h4</code> tag to set it to center.");'
  - text: يجب أن تستخدم شفرتك خاصية محاذاة النص على علامة <code>p</code> لتعيينها لتبريرها.
    testString: 'assert($("p").css("text-align") == "justify", "Your code should use the text-align property on the <code>p</code> tag to set it to justify.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  h4 {

  }
  p {

  }
  .links {
    margin-right: 20px;

  }
  .fullCard {
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
</style>
<div class="fullCard">
  <div class="cardContent">
    <div class="cardText">
      <h4>Google</h4>
      <p>Google was founded by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University.</p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
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

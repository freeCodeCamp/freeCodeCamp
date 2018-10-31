---
id: 587d78ab367417b2b2512af2
title: Use the flex-direction Property to Make a Row
challengeType: 0
videoUrl: ''
localeTitle: استخدم خاصية الاتجاه المرن لإجراء صف
---

## Description
<section id="description"> إضافة <code>display: flex</code> لعنصر يحولها إلى حاوية مرنة. هذا يجعل من الممكن محاذاة أي أطفال من هذا العنصر إلى صفوف أو أعمدة. يمكنك القيام بذلك عن طريق إضافة الخاصية <code>flex-direction</code> إلى العنصر الأصل وتعيينه إلى الصف أو العمود. يؤدي إنشاء صف إلى محاذاة الأطفال أفقيًا ، وسيؤدي إنشاء عمود إلى محاذاة الأطفال رأسيًا. الخيارات الأخرى <code>flex-direction</code> هي عكس الصفوف وعكس الأعمدة. <strong>ملحوظة</strong> <br> القيمة الافتراضية لخاصية <code>flex-direction</code> هي صف. </section>

## Instructions
<section id="instructions"> أضف خاصية <code>flex-direction</code> لعنصر <code>#box-container</code> ، وأعطها قيمة عكس صف. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'يجب أن <code>#box-container</code> عنصر <code>#box-container</code> خاصية <code>flex-direction</code> مضبوطة على عكس الصف.'
    testString: 'assert($("#box-container").css("flex-direction") == "row-reverse", "The <code>#box-container</code> element should have a <code>flex-direction</code> property set to row-reverse.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  #box-container {
    display: flex;
    height: 500px;

  }
  #box-1 {
    background-color: dodgerblue;
    width: 50%;
    height: 50%;
  }

  #box-2 {
    background-color: orangered;
    width: 50%;
    height: 50%;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
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

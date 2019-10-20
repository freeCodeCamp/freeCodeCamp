---
id: 587d78a8367417b2b2512ae3
title: Animate Elements Continually Using an Infinite Animation Count
challengeType: 0
videoUrl: ''
localeTitle: تنشيط عناصر باستمرار باستخدام عدد الرسوم المتحركة اللانهائي
---

## Description
<section id="description"> تغطي التحديات السابقة كيفية استخدام بعض خصائص الحركة وقاعدة <code>@keyframes</code> . خاصية الرسوم المتحركة الأخرى هي <code>animation-iteration-count</code> ، والذي يسمح لك بالتحكم في عدد المرات التي ترغب في تكرارها من خلال الرسوم المتحركة. في ما يلي مثال على ذلك: عدد مرات <code>animation-iteration-count: 3;</code> في هذه الحالة ، ستتوقف الرسوم المتحركة بعد تشغيلها 3 مرات ، ولكن من الممكن جعل الرسم المتحرك يعمل بشكل مستمر عن طريق تعيين هذه القيمة إلى غير محدود. </section>

## Instructions
<section id="instructions"> للحفاظ على الكرة ترتد على اليمين في حلقة مستمرة ، قم بتغيير خاصية <code>animation-iteration-count</code> إلى بلا حدود. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يكون لخاصية <code>animation-iteration-count</code> قيمة لانهائية.
    testString: 'assert($("#ball").css("animation-iteration-count") == "infinite", "The <code>animation-iteration-count</code> property should have a value of infinite.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>

  #ball {
    width: 100px;
    height: 100px;
    margin: 50px auto;
    position: relative;
    border-radius: 50%;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    animation-name: bounce;
    animation-duration: 1s;
    animation-iteration-count: 3;
  }

  @keyframes bounce{
    0% {
      top: 0px;
    }
    50% {
      top: 249px;
      width: 130px;
      height: 70px;
    }
    100% {
      top: 0px;
    }
  }
</style>
<div id="ball"></div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

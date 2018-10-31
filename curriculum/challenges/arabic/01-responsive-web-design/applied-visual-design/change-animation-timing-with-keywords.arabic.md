---
id: 587d78a8367417b2b2512ae7
title: Change Animation Timing with Keywords
challengeType: 0
videoUrl: ''
localeTitle: تغيير الرسوم المتحركة التوقيت مع الكلمات الرئيسية
---

## Description
<section id="description"> في الرسوم المتحركة في CSS ، تتحكم الخاصية <code>animation-timing-function</code> سرعة تغير عنصر متحرك خلال مدة الرسم المتحرك. إذا كانت الرسوم المتحركة عبارة عن سيارة تتحرك من النقطة A إلى النقطة B في وقت معين ( <code>animation-duration</code> ) ، فإن <code>animation-timing-function</code> توضح كيفية تسارع السيارة وتبطئها على مدار محرك الأقراص. هناك عدد من الكلمات الرئيسية المحددة مسبقًا المتاحة للخيارات الشائعة. على سبيل المثال ، القيمة الافتراضية هي <code>ease</code> ، والتي تبدأ بطيئة ، وتسرع في الوسط ، ثم تتباطأ مرة أخرى في النهاية. تتضمن الخيارات الأخرى <code>ease-out</code> ، وهو سريع في البداية ثم يبطئ ، <code>ease-in</code> ، وهو بطيء في البداية ، ثم يسرع في النهاية ، أو <code>linear</code> ، والذي يطبق سرعة حركة ثابتة طوال الوقت. </section>

## Instructions
<section id="instructions"> بالنسبة إلى العناصر ذات المعرف <code>ball1</code> و <code>ball2</code> ، أضف خاصية كل من <code>animation-timing-function</code> ، واضبط <code>#ball1</code> على <code>linear</code> ، و <code>#ball2</code> <code>ease-out</code> . لاحظ الفرق بين كيفية تحرك العناصر أثناء الرسم المتحرك ولكن معًا ، لأنهم يشتركون في نفس <code>animation-duration</code> تبلغ ثانيتين. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن تكون قيمة خاصية <code>animation-timing-function</code> العنصر مع معرف <code>ball1</code> خطية.
    testString: 'assert($("#ball1").css("animation-timing-function") == "linear", "The value of the <code>animation-timing-function</code> property for the element with the id <code>ball1</code> should be linear.");'
  - text: يجب أن تكون قيمة خاصية <code>animation-timing-function</code> للعنصر مع معرف <code>ball2</code> سهلة التخفيف.
    testString: 'assert($("#ball2").css("animation-timing-function") == "ease-out", "The value of the <code>animation-timing-function</code> property for the element with the id <code>ball2</code> should be ease-out.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>

  .balls {
    border-radius: 50%;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    position: fixed;
    width: 50px;
    height: 50px;
    margin-top: 50px;
    animation-name: bounce;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  #ball1 {
    left:27%;

  }
  #ball2 {
    left:56%;

  }

@keyframes bounce {
  0% {
    top: 0px;
  }
  100% {
    top: 249px;
  }
}

</style>

<div class="balls" id="ball1"></div>
<div class="balls" id="ball2"></div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

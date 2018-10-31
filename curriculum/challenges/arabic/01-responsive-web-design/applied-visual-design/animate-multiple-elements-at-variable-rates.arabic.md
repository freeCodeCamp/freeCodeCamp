---
id: 587d78a8367417b2b2512ae6
title: Animate Multiple Elements at Variable Rates
challengeType: 0
videoUrl: ''
localeTitle: تحريك عناصر متعددة بأسعار متغيرة
---

## Description
<section id="description"> في التحدي السابق ، قمت بتغيير معدلات الرسوم المتحركة <code>@keyframes</code> عن طريق تغيير قواعد <code>@keyframes</code> الخاصة بهم. يمكنك تحقيق الهدف نفسه عن طريق معالجة <code>animation-duration</code> لعناصر متعددة. في الرسم المتحرك الذي يتم تشغيله في محرر الشفرات ، هناك ثلاثة &quot;نجوم&quot; في السماء تتألق في نفس المعدل في حلقة مستمرة. لجعلها تومض بمعدلات مختلفة ، يمكنك تعيين خاصية <code>animation-duration</code> إلى قيم مختلفة لكل عنصر. </section>

## Instructions
<section id="instructions"> عيّن <code>animation-duration</code> للعناصر مع الفئات <code>star-1</code> ، و <code>star-2</code> ، و <code>star-3</code> to 1s ، و 0.9s ، و 1.1s ، على التوالي. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن تظل خاصية <code>animation-duration</code> للنجمة مع الفئة class <code>star-1</code> على 1s.
    testString: 'assert($(".star-1").css("animation-duration") == "1s", "The <code>animation-duration</code> property for the star with class <code>star-1</code> should remain at 1s.");'
  - text: يجب أن تكون خاصية <code>animation-duration</code> للنجمة ذات الفئة <code>star-2</code> 0.9.
    testString: 'assert($(".star-2").css("animation-duration") == "0.9s", "The <code>animation-duration</code> property for the star with class <code>star-2</code> should be 0.9s.");'
  - text: يجب أن تكون <code>animation-duration</code> للنجمة مع الفئة class <code>star-3</code> هي 1.1s.
    testString: 'assert($(".star-3").css("animation-duration") == "1.1s", "The <code>animation-duration</code> property for the star with class <code>star-3</code> should be 1.1s.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .stars {
    background-color: white;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    animation-iteration-count: infinite;
  }

  .star-1 {
    margin-top: 15%;
    margin-left: 60%;
    animation-duration: 1s;
    animation-name: twinkle;
  }

  .star-2 {
    margin-top: 25%;
    margin-left: 25%;
    animation-duration: 1s;
    animation-name: twinkle;
  }

  .star-3 {
    margin-top: 10%;
    margin-left: 50%;
    animation-duration: 1s;
    animation-name: twinkle;
  }

  @keyframes twinkle {
    20% {
      transform: scale(0.5);
      opacity: 0.5;
    }
  }

  #back {
    position: fixed;
    padding: 0;
    margin: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(black, #000099, #66c2ff, #ffcccc, #ffeee6);
  }
</style>

<div id="back"></div>
<div class="star-1 stars"></div>
<div class="star-2 stars"></div>
<div class="star-3 stars"></div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

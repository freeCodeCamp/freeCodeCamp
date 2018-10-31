---
id: 587d78a8367417b2b2512ae5
title: Animate Elements at Variable Rates
challengeType: 0
videoUrl: ''
localeTitle: عناصر متحركة بمعدلات متغيرة
---

## Description
<section id="description"> هناك مجموعة متنوعة من الطرق لتغيير معدلات الرسوم المتحركة لعناصر متحركة مشابهة. حتى الآن ، تم تحقيق ذلك من خلال تطبيق خاصية <code>animation-iteration-count</code> <code>@keyframes</code> ووضع قواعد <code>@keyframes</code> . ولتوضيح ذلك ، يتكون الرسم المتحرك على اليمين من &quot;نجمين&quot; يتناقص كل منهما في الحجم والتعتيم عند علامة 20٪ في قاعدة <code>@keyframes</code> ، مما يؤدي إلى إنشاء رسوم متحركة وميض. يمكنك تغيير القاعدة <code>@keyframes</code> لأحد العناصر بحيث <code>@keyframes</code> النجوم بمعدلات مختلفة. </section>

## Instructions
<section id="instructions"> عدّل معدل الرسوم المتحركة للعنصر الذي يحمل اسم فئة <code>star-1</code> عن طريق تغيير القاعدة <code>@keyframes</code> إلى 50٪. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن <code>@keyframes</code> قاعدة <code>@keyframes</code> <code>star-1</code> 50٪.
    testString: 'assert(code.match(/twinkle-1\s*?{\s*?50%/g), "The <code>@keyframes</code> rule for the <code>star-1</code> class should be 50%.");'

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
    animation-name: twinkle-1;
    animation-duration: 1s;
  }

  .star-2 {
    margin-top: 25%;
    margin-left: 25%;
    animation-name: twinkle-2;
    animation-duration: 1s;
  }

  @keyframes twinkle-1 {
    20% {
      transform: scale(0.5);
      opacity: 0.5;
    }
  }

  @keyframes twinkle-2 {
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

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

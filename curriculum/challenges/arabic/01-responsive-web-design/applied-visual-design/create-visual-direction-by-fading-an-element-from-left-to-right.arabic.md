---
id: 587d78a7367417b2b2512ae2
title: Create Visual Direction by Fading an Element from Left to Right
challengeType: 0
videoUrl: ''
localeTitle: إنشاء اتجاه مرئي بواسطة Fading عنصر من اليسار إلى اليمين
---

## Description
<section id="description"> لهذا التحدي ، ستقوم بتغيير <code>opacity</code> عنصر متحرك بحيث يتلاشى تدريجياً عندما يصل إلى الجانب الأيمن من الشاشة. في الصورة المتحركة المعروضة ، يتحرك العنصر المستدير بخلفية التدرج إلى اليمين بواسطة علامة 50٪ للرسوم المتحركة في قاعدة <code>@keyframes</code> . </section>

## Instructions
<section id="instructions"> استهدف العنصر بمعرّف <code>ball</code> وأضف خاصية <code>opacity</code> إلى 0.1 عند <code>50%</code> ، بحيث يتلاشى العنصر أثناء انتقاله إلى اليمين. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن تحدد قاعدة <code>keyframes</code> <code>opacity</code> خاصية <code>opacity</code> إلى 0.1٪ عند 50٪.
    testString: 'assert(code.match(/@keyframes fade\s*?{\s*?50%\s*?{\s*?(?:left:\s*?60%;\s*?opacity:\s*?0?\.1;|opacity:\s*?0?\.1;\s*?left:\s*?60%;)/gi), "The <code>keyframes</code> rule for fade should set the <code>opacity</code> property to 0.1 at 50%.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>

  #ball {
    width: 70px;
    height: 70px;
    margin: 50px auto;
    position: fixed;
    left: 20%;
    border-radius: 50%;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    animation-name: fade;
    animation-duration: 3s;
  }

  @keyframes fade {
    50% {
      left: 60%;

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

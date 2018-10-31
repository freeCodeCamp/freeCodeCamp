---
id: 58a7a6ebf9a6318348e2d5aa
title: Modify Fill Mode of an Animation
challengeType: 0
videoUrl: ''
localeTitle: تعديل وضع التعبئة من الرسوم المتحركة
---

## Description
<section id="description"> هذا رائع ، لكنه لا يعمل على الفور. لاحظ كيف تمت إعادة الرسوم المتحركة بعد مرور <code>500ms</code> ثانية ، مما يتسبب في عودة الزر إلى اللون الأصلي. تريد أن يظل الزر مظللاً. يمكن القيام بذلك عن طريق تعيين خاصية <code>animation-fill-mode</code> إلى <code>forwards</code> . يحدد <code>animation-fill-mode</code> النمط المطبق على عنصر عندما ينتهي الرسم المتحرك. يمكنك تعيينه على النحو التالي: <code>animation-fill-mode: forwards;</code> </section>

## Instructions
<section id="instructions"> عيّن خاصية <code>animation-fill-mode</code> <code>button:hover</code> إلى <code>forwards</code> حتى يظل الزر مظللاً عندما يمرر المستخدم فوقه. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>button:hover</code> should have a <code>animation-fill-mode</code> with a <code>forwards</code> .'
    testString: 'assert(code.match(/button\s*?:\s*?hover\s*?{[\s\S]*animation-fill-mode\s*?:\s*?forwards\s*?;[\s\S]*}/gi) && code.match(/button\s*?:\s*?hover\s*?{[\s\S]*animation-name\s*?:\s*?background-color\s*?;[\s\S]*}/gi) && code.match(/button\s*?:\s*?hover\s*?{[\s\S]*animation-duration\s*?:\s*?500ms\s*?;[\s\S]*}/gi), "<code>button:hover</code> should have a <code>animation-fill-mode</code> property with a value of <code>forwards</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  button {
    border-radius: 5px;
    color: white;
    background-color: #0F5897;
    padding: 5px 10px 8px 10px;
  }
  button:hover {
    animation-name: background-color;
    animation-duration: 500ms;
    /* add your code below this line */

    /* add your code above this line */
  }
  @keyframes background-color {
    100% {
      background-color: #4791d0;
    }
  }
</style>
<button>Register</button>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

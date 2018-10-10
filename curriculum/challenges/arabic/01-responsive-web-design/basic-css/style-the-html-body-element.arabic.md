---
id: bad87fee1348bd9aedf08736
title: Style the HTML Body Element
challengeType: 0
videoUrl: ''
localeTitle: قم بتهيئة عنصر نص HTML
---

## Description
<section id="description"> الآن دعونا نبدأ الحديث والتحدث عن الميراث CSS. كل صفحة HTML لديها <code>body</code> عنصر. </section>

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert($("body").css("background-color") === "rgb(0, 0, 0)", "Give your <code>body</code> element the <code>background-color</code> of black.");'
  - text: ''
    testString: 'assert(code.match(/<style>\s*body\s*\{\s*background.*\s*:\s*.*;\s*\}\s*<\/style>/i), "Make sure your CSS rule is properly formatted with both opening and closing curly brackets.");'
  - text: تأكد من انتهاء قاعدة CSS بفاصلة منقوطة.
    testString: 'assert(code.match(/<style>\s*body\s*\{\s*background.*\s*:\s*.*;\s*\}\s*<\/style>/i), "Make sure your CSS rule ends with a semi-colon.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>

</style>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

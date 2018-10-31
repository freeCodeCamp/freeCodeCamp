---
id: bad87fee1348bd9aedf06756
title: Override Class Declarations with Inline Styles
challengeType: 0
videoUrl: ''
localeTitle: تجاوز التعريفات فئة باستخدام الأنماط المضمّنة
---

## Description
<section id="description"> لذلك قمنا ثبت أن الإعلانات معرف تجاوز الإعلانات الطبقة، بغض النظر عن مكان يتم الإعلان عنها في حياتك <code>style</code> CSS عنصر. هناك طرق أخرى يمكنك من خلالها تجاوز CSS. هل تتذكر الأنماط المضمنة؟ </section>

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يحتوي عنصر <code>h1</code> <code>pink-text</code> .
    testString: 'assert($("h1").hasClass("pink-text"), "Your <code>h1</code> element should have the class <code>pink-text</code>.");'
  - text: ''
    testString: 'assert($("h1").hasClass("blue-text"), "Your <code>h1</code> element should have the class <code>blue-text</code>.");'
  - text: يجب أن يحتوي عنصر <code>h1</code> على معرف <code>orange-text</code> .
    testString: 'assert($("h1").attr("id") === "orange-text", "Your <code>h1</code> element should have the id of <code>orange-text</code>.");'
  - text: ''
    testString: 'assert(document.querySelector("h1[style]"), "Give your <code>h1</code> element an inline style.");'
  - text: يجب أن يكون عنصر <code>h1</code> أبيض.
    testString: 'assert($("h1").css("color") === "rgb(255, 255, 255)", "Your <code>h1</code> element should be white.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  #orange-text {
    color: orange;
  }
  .pink-text {
    color: pink;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 id="orange-text" class="pink-text blue-text">Hello World!</h1>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

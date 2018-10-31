---
id: 587d78a5367417b2b2512ad9
title: Use the CSS Transform scale Property to Change the Size of an Element
challengeType: 0
videoUrl: ''
localeTitle: استخدم خاصية مقياس تحويل CSS لتغيير حجم عنصر
---

## Description
<section id="description"> لتغيير مقياس عنصر ما ، يحتوي CSS على خاصية <code>transform</code> ، إلى جانب الدالة <code>scale()</code> . مثال الكود التالي يضاعف حجم جميع عناصر الفقرة في الصفحة: <blockquote style=";text-align:right;direction:rtl"> ص { <br> تحويل: مقياس (2)؛ <br> } </blockquote></section>

## Instructions
<section id="instructions"> زيادة حجم العنصر مع معرف <code>ball2</code> إلى 1.5 مرة حجمها الأصلي. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>#ball2</code> خاصية <code>transform</code> لـ <code>#ball2</code> حجمها 1.5 مرة حجمها.'
    testString: 'assert(code.match(/#ball2\s*?{\s*?left:\s*?65%;\s*?transform:\s*?scale\(1\.5\);\s*?}|#ball2\s*?{\s*?transform:\s*?scale\(1\.5\);\s*?left:\s*?65%;\s*?}/gi), "Set the <code>transform</code> property for <code>#ball2</code> to scale it 1.5 times its size.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .ball {
    width: 40px;
    height: 40px;
    margin: 50 auto;
    position: fixed;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    border-radius: 50%;
  }
  #ball1 {
    left: 20%;
  }
  #ball2 {
    left: 65%;

  }


</style>

<div class="ball" id= "ball1"></div>
<div class="ball" id= "ball2"></div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

---
id: bad87fee1348bd9aedf07756
title: Override All Other Styles by using Important
challengeType: 0
videoUrl: ''
localeTitle: تجاوز كافة الأنماط الأخرى باستخدام هام
---

## Description
<section id="description"> ياي! لقد أثبتنا فقط أن الأنماط المضمنة ستتجاوز جميع إعلانات CSS في عنصر <code>style</code> . لكن انتظر. هناك طريقة أخيرة لتجاوز CSS. هذه هي أقوى طريقة للجميع. ولكن قبل القيام بذلك ، دعنا نتحدث عن سبب رغبتك في تجاوز CSS. في العديد من المواقف ، ستستخدم مكتبات CSS. قد تتجاوز هذه بطريق الخطأ CSS الخاص بك. لذلك عندما تحتاج بالتأكيد إلى التأكد من أن عنصر ما يحتوي على CSS خاص ، يمكنك استخدامه <code>!important</code> دعنا نرجع إلى إعلان الفصل <code>pink-text</code> . تذكر أنه تم تجاوز فئة <code>pink-text</code> لدينا بواسطة تعريفات فئة لاحقة ، وإعلانات معرف ، وأنماط مضمنة. </section>

## Instructions
<section id="instructions"> دعنا نضيف الكلمة الأساسية <code>!important</code> لإعلان اللون الخاص بعنصر النص الوردي الخاص بك للتأكد 100٪ من أن عنصر <code>h1</code> سيكون لونه ورديًا. مثال على كيفية القيام بذلك هو: <code>color: red !important;</code> </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يحتوي عنصر <code>h1</code> <code>pink-text</code> .
    testString: 'assert($("h1").hasClass("pink-text"), "Your <code>h1</code> element should have the class <code>pink-text</code>.");'
  - text: يجب أن يحتوي عنصر <code>h1</code> على الفصل <code>blue-text</code> .
    testString: 'assert($("h1").hasClass("blue-text"), "Your <code>h1</code> element should have the class <code>blue-text</code>.");'
  - text: يجب أن يحتوي عنصر <code>h1</code> على معرف <code>orange-text</code> .
    testString: 'assert($("h1").attr("id") === "orange-text", "Your <code>h1</code> element should have the id of <code>orange-text</code>.");'
  - text: 'يجب أن يكون عنصر <code>h1</code> بنمط <code>color: white</code> المضمن <code>color: white</code> .'
    testString: 'assert(code.match(/<h1.*style/gi) && code.match(/<h1.*style.*color\s*?:/gi), "Your <code>h1</code> element should have the inline style of <code>color&#58; white</code>.");'
  - text: يجب أن يكون لديك تعريف فئة <code>pink-text</code> الكلمة الأساسية <code>!important</code> لتجاوز كافة التعريفات الأخرى.
    testString: 'assert(code.match(/\.pink-text\s*?\{[\s\S]*?color:.*pink.*!important\s*;?[^\.]*\}/g), "Your <code>pink-text</code> class declaration should have the <code>!important</code> keyword to override all other declarations.");'
  - text: يجب أن يكون عنصر <code>h1</code> باللون الوردي.
    testString: 'assert($("h1").css("color") === "rgb(255, 192, 203)", "Your <code>h1</code> element should be pink.");'

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
<h1 id="orange-text" class="pink-text blue-text" style="color: white">Hello World!</h1>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

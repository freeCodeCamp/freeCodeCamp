---
id: bad87fee1348bd8aedf06756
title: Override Class Declarations by Styling ID Attributes
challengeType: 0
videoUrl: ''
localeTitle: تجاوز تعريفات الطبقة عن طريق تحديد سمات المعرف
---

## Description
<section id="description"> لقد أثبتنا فقط أن المتصفحات تقرأ CSS من الأعلى إلى الأسفل. ويعني هذا أنه في حالة وجود تعارض ، سيستخدم المتصفح أي إعلان من لغة CSS يظهر في النهاية. لكننا لم ننتهي بعد. هناك طرق أخرى يمكنك من خلالها تجاوز CSS. هل تتذكر سمات معرف؟ لنقم بتجاوز فصول <code>blue-text</code> <code>pink-text</code> <code>blue-text</code> ، وجعل عنصر <code>h1</code> برتقاليًا ، من خلال إعطاء عنصر <code>h1</code> ثم تصميم ذلك المعرف. </section>

## Instructions
<section id="instructions"> امنح عنصر <code>h1</code> سمة <code>id</code> <code>orange-text</code> . تذكر أن أنماط المعرّف تبدو كالتالي: <code>&lt;h1 id=&quot;orange-text&quot;&gt;</code> ترك فصول <code>pink-text</code> <code>blue-text</code> <code>pink-text</code> في عنصر <code>h1</code> . قم بإنشاء تعريف CSS لمعرف <code>orange-text</code> الخاص بك في عنصر <code>style</code> الخاص بك. إليك مثال على ما يبدو عليه هذا: <blockquote style=";text-align:right;direction:rtl"> # brown-text { <br> اللون: بني؛ <br> } </blockquote> ملاحظة: لا يهم ما إذا كنت قد أعلنت CSS هذا أعلى أو أسفل فئة النص الوردي ، نظرًا لأن سمة المعرّف ستحظى دائمًا بالأسبقية. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يحتوي عنصر <code>h1</code> <code>pink-text</code> .
    testString: 'assert($("h1").hasClass("pink-text"), "Your <code>h1</code> element should have the class <code>pink-text</code>.");'
  - text: يجب أن يحتوي عنصر <code>h1</code> على الفصل <code>blue-text</code> .
    testString: 'assert($("h1").hasClass("blue-text"), "Your <code>h1</code> element should have the class <code>blue-text</code>.");'
  - text: امنح عنصر <code>h1</code> معرف <code>orange-text</code> .
    testString: 'assert($("h1").attr("id") === "orange-text", "Give your <code>h1</code> element the id of <code>orange-text</code>.");'
  - text: يجب أن يكون هناك عنصر <code>h1</code> واحد فقط.
    testString: 'assert(($("h1").length === 1), "There should be only one <code>h1</code> element.");'
  - text: قم بإنشاء إعلان CSS لمعرف <code>orange-text</code> الخاص بك
    testString: 'assert(code.match(/#orange-text\s*{/gi), "Create a CSS declaration for your <code>orange-text</code> id");'
  - text: لا تعطي <code>h1</code> الخاص بك أي سمات <code>style</code> .
    testString: 'assert(!code.match(/<h1.*style.*>/gi), "Do not give your <code>h1</code> any <code>style</code> attributes.");'
  - text: يجب أن يكون عنصر <code>h1</code> باللون البرتقالي.
    testString: 'assert($("h1").css("color") === "rgb(255, 165, 0)", "Your <code>h1</code> element should be orange.");'

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
  .pink-text {
    color: pink;
  }
  .blue-text {
    color: blue;
  }
</style>
<h1 class="pink-text blue-text">Hello World!</h1>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

---
id: 587d7dbf367417b2b2512bbb
title: Apply a Style Until a Condition is Met with @while
challengeType: 0
videoUrl: ''
localeTitle: تطبيق نمط حتى يتم استيفاء الشرط معwhile
---

## Description
<section id="description"> إن التوجيه <code>@while</code> هو خيار له وظيفة مشابهة لجافا سكريبت <code>while</code> التكرار. يقوم بإنشاء قواعد CSS حتى يتم استيفاء الشرط. قدم تحدي <code>@for</code> مثالاً لإنشاء نظام شبكة بسيط. هذا يمكن أن تعمل أيضا مع <code>@while</code> . <blockquote style=";text-align:right;direction:rtl"> $ x: 1؛ <br> while $ x &lt;13 { <br> .col - # {$ x} {width: 100٪ / 12 * $ x؛} <br> $ x: $ x + 1؛ <br> } </blockquote> أولاً ، قم بتعريف متغير <code>$x</code> وقم بتعيينه على 1. التالي ، استخدم التوجيه <code>@while</code> لإنشاء نظام الشبكة <i>بينما</i> يكون <code>$x</code> أقل من 13. بعد تعيين قاعدة CSS <code>width</code> ، يتم زيادة <code>$x</code> بمقدار 1 لتجنب حلقة لا نهائية. </section>

## Instructions
<section id="instructions"> استخدم <code>@while</code> لإنشاء سلسلة من الفصول <code>font-sizes</code> مختلفة من <code>font-sizes</code> . يجب أن يكون هناك 10 فصول مختلفة من <code>text-1</code> إلى <code>text-10</code> . ثم قم بتعيين <code>font-size</code> إلى 5 بكسل مضروبًا في رقم الفهرس الحالي. تأكد من تجنب حلقة لا نهائية! </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن تستخدم <code>@while</code> توجيه <code>@while</code> في الوقت <code>@while</code> .
    testString: 'assert(code.match(/@while /g), "Your code should use the <code>@while</code> directive.");'
  - text: يجب أن تحدد التعليمات البرمجية متغير فهرس إلى 1 لبدء.
    testString: 'assert(code.match(/\$.*:\s*?1;/gi), "Your code should set an index variable to 1 to start.");'
  - text: يجب أن تزيد التعليمات البرمجية الخاصة بك متغير عداد.
    testString: 'assert(code.match(/\$(.*):\s*?\$\1\s*?\+\s*?1;/gi), "Your code should increment the counter variable.");'
  - text: يجب أن يكون للفئة <code>.text-1</code> <code>font-size</code> يبلغ 5 بكسل.
    testString: 'assert($(".text-1").css("font-size") == "5px", "Your <code>.text-1</code> class should have a <code>font-size</code> of 5px.");'
  - text: يجب أن يكون لفئة <code>.text-2</code> <code>font-size</code> بيكسل.
    testString: 'assert($(".text-2").css("font-size") == "10px", "Your <code>.text-2</code> class should have a <code>font-size</code> of 10px.");'
  - text: يجب أن يكون للفئة <code>.text-3</code> <code>font-size</code> يبلغ 15 بكسل.
    testString: 'assert($(".text-3").css("font-size") == "15px", "Your <code>.text-3</code> class should have a <code>font-size</code> of 15px.");'
  - text: يجب أن يكون لفئة <code>.text-4</code> <code>font-size</code> بكسل.
    testString: 'assert($(".text-4").css("font-size") == "20px", "Your <code>.text-4</code> class should have a <code>font-size</code> of 20px.");'
  - text: يجب أن يكون لفئة .text <code>.text-5</code> حجمًا <code>font-size</code> 25 بكسل.
    testString: 'assert($(".text-5").css("font-size") == "25px", "Your <code>.text-5</code> class should have a <code>font-size</code> of 25px.");'
  - text: ''
    testString: 'assert($(".text-6").css("font-size") == "30px", "Your <code>.text-6</code> class should have a <code>font-size</code> of 30px.");'
  - text: ''
    testString: 'assert($(".text-7").css("font-size") == "35px", "Your <code>.text-7</code> class should have a <code>font-size</code> of 35px.");'
  - text: ''
    testString: 'assert($(".text-8").css("font-size") == "40px", "Your <code>.text-8</code> class should have a <code>font-size</code> of 40px.");'
  - text: ''
    testString: 'assert($(".text-9").css("font-size") == "45px", "Your <code>.text-9</code> class should have a <code>font-size</code> of 45px.");'
  - text: ''
    testString: 'assert($(".text-10").css("font-size") == "50px", "Your <code>.text-10</code> class should have a <code>font-size</code> of 50px.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style type='text/sass'>



</style>

<p class="text-1">Hello</p>
<p class="text-2">Hello</p>
<p class="text-3">Hello</p>
<p class="text-4">Hello</p>
<p class="text-5">Hello</p>
<p class="text-6">Hello</p>
<p class="text-7">Hello</p>
<p class="text-8">Hello</p>
<p class="text-9">Hello</p>
<p class="text-10">Hello</p>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

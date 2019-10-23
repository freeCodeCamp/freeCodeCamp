---
id: 587d7dbe367417b2b2512bb9
title: Use @for to Create a Sass Loop
challengeType: 0
videoUrl: ''
localeTitle: ''
---

## Description
<section id="description"> يضيف الأمر <code>@for</code> الأنماط في حلقة ، تشبه إلى حد كبير حلقة <code>for</code> في JavaScript. يتم استخدام <code>@for</code> بطريقتين: &quot;البدء من خلال النهاية&quot; أو &quot;البدء حتى النهاية&quot;. والفرق الرئيسي هو أن &quot;البداية إلى النهاية&quot; <em>تستثني</em> الرقم النهائي ، و &quot;البدء من خلال النهاية&quot; <em>يتضمن</em> الرقم النهائي. إليك مثال البدء من <b>خلال</b> النهاية: <blockquote style=";text-align:right;direction:rtl"> for $ i من 1 إلى 12 { <br> .col - # {$ i} {width: 100٪ / 12 * $ i؛ } <br> } </blockquote> الجزء <code>#{$i}</code> هو بناء الجملة لدمج متغير ( <code>i</code> ) مع النص لإنشاء سلسلة. عندما يتم تحويل ملف Sass إلى CSS ، يبدو كالتالي: <blockquote style=";text-align:right;direction:rtl"> .col-1 { <br> العرض: 8.33333٪ ؛ <br> } <br><br> .col-2 { <br> العرض: 16.66667٪ ؛ <br> } <br><br> ... <br><br> .col-12 { <br> العرض: 100 ٪. <br> } </blockquote> هذه طريقة قوية لإنشاء تخطيط شبكة. لديك الآن اثني عشر خيارًا لعروض الأعمدة المتاحة كفئات CSS. </section>

## Instructions
<section id="instructions"> اكتب <code>@for</code> directive الذي يأخذ متغير <code>$j</code> من 1 <b>إلى</b> 6. يجب أن ينشئ 5 فئات تسمى <code>.text-1</code> إلى <code>.text-5</code> حيث يكون لكل مجموعة <code>font-size</code> إلى 10px مضروبًا في الفهرس. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert(code.match(/@for /g), "Your code should use the <code>@for</code> directive.");'
  - text: ''
    testString: 'assert($(".text-1").css("font-size") == "10px", "Your <code>.text-1</code> class should have a <code>font-size</code> of 10px.");'
  - text: ''
    testString: 'assert($(".text-2").css("font-size") == "20px", "Your <code>.text-2</code> class should have a <code>font-size</code> of 20px.");'
  - text: يجب أن يكون للفئة <code>.text-3</code> <code>font-size</code> يبلغ 30 بكسل.
    testString: 'assert($(".text-3").css("font-size") == "30px", "Your <code>.text-3</code> class should have a <code>font-size</code> of 30px.");'
  - text: ''
    testString: 'assert($(".text-4").css("font-size") == "40px", "Your <code>.text-4</code> class should have a <code>font-size</code> of 40px.");'
  - text: يجب أن يكون للفئة <code>.text-5</code> <code>font-size</code> يبلغ 50 بكسل.
    testString: 'assert($(".text-5").css("font-size") == "50px", "Your <code>.text-5</code> class should have a <code>font-size</code> of 50px.");'

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

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

---
id: 5a90376038fddaf9a66b5d3c
title: Align All Items Horizontally using justify-items
challengeType: 0
videoUrl: ''
localeTitle: محاذاة جميع العناصر أفقيا باستخدام تبرير البنود
---

## Description
<section id="description"> في بعض الأحيان تريد أن تشترك جميع العناصر في CSS الخاص بك في نفس المحاذاة. يمكنك استخدام الخصائص التي تم تعلُّمها مسبقًا ومحاذاؤها بشكل فردي ، أو يمكنك محاذاةها كلها مرة واحدة أفقيًا باستخدام <code>justify-items</code> ضبط في حاوية الشبكة. يمكن أن تقبل هذه الخاصية جميع القيم نفسها التي تعلمتها في التحديين السابقين ، والفرق بينهما هو أنه سينقل <b>كل</b> العناصر في شبكتنا إلى المحاذاة المطلوبة. </section>

## Instructions
<section id="instructions"> استخدم هذه الخاصية لتوسيط جميع العناصر أفقيا. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن <code>container</code> فئة <code>container</code> على خاصية <code>justify-items</code> لها قيمة <code>center</code> .
    testString: 'assert(code.match(/.container\s*?{[\s\S]*justify-items\s*?:\s*?center\s*?;[\s\S]*}/gi), "<code>container</code> class should have a <code>justify-items</code> property that has the value of <code>center</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .item1{background:LightSkyBlue;}
  .item2{background:LightSalmon;}
  .item3{background:PaleTurquoise;}
  .item4{background:LightPink;}
  .item5{background:PaleGreen;}

  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
    /* add your code below this line */


    /* add your code above this line */
  }
</style>

<div class="container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

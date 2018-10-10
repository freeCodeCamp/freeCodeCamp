---
id: 587d78ae367417b2b2512aff
title: Use the order Property to Rearrange Items
challengeType: 0
videoUrl: ''
localeTitle: استخدم خاصية الطلب لإعادة ترتيب العناصر
---

## Description
<section id="description"> يتم استخدام خاصية <code>order</code> لإخبار CSS بترتيب ظهور العناصر المرنة في الحاوية المرنة. بشكل افتراضي ، ستظهر العناصر بنفس الترتيب الوارد في مصدر HTML. يأخذ الخاصية الأرقام كقيم ، ويمكن استخدام الأرقام السالبة. </section>

## Instructions
<section id="instructions"> قم بإضافة <code>order</code> الخاصية CSS إلى كل من <code>#box-1</code> و <code>#box-2</code> . أعط <code>#box-1</code> قيمة 2 وأعطي <code>#box-2</code> قيمة 1. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'يجب أن يحتوي عنصر <code>#box-1</code> على خاصية <code>order</code> تعيينها على قيمة 2.'
    testString: 'assert($("#box-1").css("order") == "2", "The <code>#box-1</code> element should have the <code>order</code> property set to a value of 2.");'
  - text: 'يجب أن يحتوي عنصر <code>#box-2</code> على خاصية <code>order</code> تعيينها إلى قيمة 1.'
    testString: 'assert($("#box-2").css("order") == "1", "The <code>#box-2</code> element should have the <code>order</code> property set to a value of 1.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  #box-container {
    display: flex;
    height: 500px;
  }
  #box-1 {
    background-color: dodgerblue;

    height: 200px;
    width: 200px;
  }

  #box-2 {
    background-color: orangered;

    height: 200px;
    width: 200px;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
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

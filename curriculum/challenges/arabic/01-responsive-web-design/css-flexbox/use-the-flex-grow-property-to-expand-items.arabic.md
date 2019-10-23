---
id: 587d78ae367417b2b2512afc
title: Use the flex-grow Property to Expand Items
challengeType: 0
videoUrl: ''
localeTitle: استخدم خاصية Flex-grow لتوسيع العناصر
---

## Description
<section id="description"> عكس <code>flex-shrink</code> هو خاصية <code>flex-grow</code> . أذكر أن <code>flex-shrink</code> في حجم العناصر عندما تنكمش الحاوية. تتحكم الخاصية <code>flex-grow</code> حجم العناصر عندما يتم توسيع الحاوية الأصل. باستخدام مثال مماثل من التحدي الأخير ، إذا كان أحد العناصر يحتوي على قيمة <code>flex-grow</code> من 1 ، والآخر له قيمة <code>flex-grow</code> 3 ، فإن القيمة ذات القيمة 3 ستنمو بثلاثة أضعاف. </section>

## Instructions
<section id="instructions"> قم بإضافة الخاصية CSS <code>flex-grow</code> إلى كلا <code>#box-1</code> و <code>#box-2</code> . Give <code>#box-1</code> a value of 1 and <code>#box-2</code> a value of 2. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'يجب أن يحتوي عنصر <code>#box-1</code> على الخاصية <code>flex-grow</code> set إلى قيمة 1.'
    testString: 'assert($("#box-1").css("flex-grow") == "1", "The <code>#box-1</code> element should have the <code>flex-grow</code> property set to a value of 1.");'
  - text: 'يجب أن يحتوي عنصر <code>#box-2</code> على الخاصية <code>flex-grow</code> set to a value of 2.'
    testString: 'assert($("#box-2").css("flex-grow") == "2", "The <code>#box-2</code> element should have the <code>flex-grow</code> property set to a value of 2.");'

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

  }

  #box-2 {
    background-color: orangered;
    height: 200px;

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

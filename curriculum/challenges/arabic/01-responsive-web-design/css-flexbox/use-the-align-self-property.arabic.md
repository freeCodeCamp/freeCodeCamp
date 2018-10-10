---
id: 587d78af367417b2b2512b00
title: Use the align-self Property
challengeType: 0
videoUrl: ''
localeTitle: استخدم خاصية self-align
---

## Description
<section id="description"> الخاصية النهائية للعناصر المرنة هي <code>align-self</code> . تتيح لك هذه الخاصية ضبط محاذاة كل عنصر على حدة ، بدلاً من ضبطها كلها مرة واحدة. وهذا مفيد لأن تقنيات التعديل الشائعة الأخرى التي تستخدم خصائص CSS <code>float</code> و <code>clear</code> و <code>vertical-align</code> لا تعمل على العناصر المرنة. <code>align-self</code> يقبل نفس القيم كعناصر <code>align-items</code> وسيتجاوز أي قيمة تم تعيينها بواسطة الخاصية <code>align-items</code> . </section>

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: 'يجب أن يحتوي عنصر <code>#box-1</code> على خاصية <code>align-self</code> set to a value of center.'
    testString: 'assert($("#box-1").css("align-self") == "center", "The <code>#box-1</code> element should have the <code>align-self</code> property set to a value of center.");'
  - text: 'يجب أن يحتوي عنصر <code>#box-2</code> على الخاصية <code>align-self</code> set to a value of flex-end.'
    testString: 'assert($("#box-2").css("align-self") == "flex-end", "The <code>#box-2</code> element should have the <code>align-self</code> property set to a value of flex-end.");'

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

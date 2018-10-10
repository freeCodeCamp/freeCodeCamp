---
id: 587d78ac367417b2b2512af4
title: Use the flex-direction Property to Make a Column
challengeType: 0
videoUrl: ''
localeTitle: استخدم خاصية الاتجاه المرن لعمل عمود
---

## Description
<section id="description"> استخدم آخر تحديين خاصية <code>flex-direction</code> المضبوطة في الصف. يمكن لهذه الخاصية أيضًا إنشاء عمود عن طريق تكديس أطفال حاوية مرنة رأسيًا. </section>

## Instructions
<section id="instructions"> أضف خاصية <code>flex-direction</code> لعنصر <code>#box-container</code> ، واعطها قيمة للعمود. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'يجب أن <code>#box-container</code> عنصر <code>#box-container</code> خاصية <code>flex-direction</code> مضبوطة على العمود.'
    testString: 'assert($("#box-container").css("flex-direction") == "column", "The <code>#box-container</code> element should have a <code>flex-direction</code> property set to column.");'

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
    width: 50%;
    height: 50%;
  }

  #box-2 {
    background-color: orangered;
    width: 50%;
    height: 50%;
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

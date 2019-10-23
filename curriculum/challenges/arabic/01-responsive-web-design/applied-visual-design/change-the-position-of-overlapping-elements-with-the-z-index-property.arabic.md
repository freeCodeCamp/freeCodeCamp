---
id: 587d78a3367417b2b2512acf
title: Change the Position of Overlapping Elements with the z-index Property
challengeType: 0
videoUrl: ''
localeTitle: تغيير موضع تراكب العناصر مع خاصية فهرس z
---

## Description
<section id="description"> عندما يتم وضع العناصر للتراكب ، سيظهر العنصر الذي سيأتي لاحقًا في ترميز HTML ، بشكل افتراضي ، في أعلى العناصر الأخرى. ومع ذلك ، يمكن أن تحدد خاصية <code>z-index</code> ترتيب كيفية تكديس العناصر فوق بعضها البعض. يجب أن يكون عددًا صحيحًا (أي عددًا كاملاً وليس عشريًا) ، والقيم الأعلى لخاصية <code>z-index</code> لعنصر ما ، تحركه أعلى في المكدس من تلك ذات القيم الأقل. </section>

## Instructions
<section id="instructions"> إضافة خاصية <code>z-index</code> إلى العنصر مع اسم الفئة <code>first</code> (المستطيل الأحمر) وتعيينه إلى قيمة 2 بحيث يغطي العنصر الآخر (المستطيل الأزرق). </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يحتوي العنصر ذو الصنف <code>first</code> على قيمة <code>z-index</code> 2.
    testString: 'assert($(".first").css("z-index") == "2", "The element with class <code>first</code> should have a <code>z-index</code> value of 2.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  div {
    width: 60%;
    height: 200px;
    margin-top: 20px;
  }

  .first {
    background-color: red;
    position: absolute;

  }
  .second {
    background-color: blue;
    position: absolute;
    left: 40px;
    top: 50px;
    z-index: 1;
  }
</style>

<div class="first"></div>
<div class="second"></div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

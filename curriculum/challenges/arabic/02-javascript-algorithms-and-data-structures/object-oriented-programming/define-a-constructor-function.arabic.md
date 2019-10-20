---
id: 587d7dad367417b2b2512b77
title: Define a Constructor Function
challengeType: 1
videoUrl: ''
localeTitle: تحديد وظيفة منشئ
---

## Description
<section id="description"> <code>Constructors</code> هي وظائف تقوم بإنشاء كائنات جديدة. أنها تحدد الخصائص والسلوكيات التي تنتمي إلى الكائن الجديد. فكر فيها كمخطط لإنشاء كائنات جديدة. هنا مثال <code>constructor</code> : <blockquote style=";text-align:right;direction:rtl"> وظيفة الطيور () { <br> this.name = &quot;Albert&quot;؛ <br> this.color = &quot;blue&quot;؛ <br> this.numLegs = 2 ، <br> } </blockquote> يعرّف هذا <code>constructor</code> كائن <code>Bird</code> <code>name</code> الخاصية ، <code>color</code> ، ومجموعة <code>numLegs</code> إلى Albert ، و blue ، و 2 ، على التوالي. <code>Constructors</code> متابعة بعض الاتفاقيات: <ul style=";text-align:right;direction:rtl"><li style=";text-align:right;direction:rtl"> يتم تعريف <code>Constructors</code> بالاسم الكبير لتمييزهم عن الوظائف الأخرى غير <code>constructors</code> . </li><li style=";text-align:right;direction:rtl"> <code>Constructors</code> استخدام الكلمة <code>this</code> لتعيين خصائص الكائن فإنها ستخلق. داخل <code>constructor</code> ، يشير <code>this</code> إلى الكائن الجديد الذي سيقوم بإنشائه. </li><li style=";text-align:right;direction:rtl"> <code>Constructors</code> تحديد الخصائص والسلوكيات بدلا من إرجاع قيمة وظائف أخرى القوة. </li></ul></section>

## Instructions
<section id="instructions"> إنشاء <code>constructor</code> ، <code>Dog</code> ، مع <code>name</code> الخصائص ، <code>color</code> ، و <code>numLegs</code> التي تم تعيينها إلى سلسلة ، وسلسلة ، ورقم ، على التوالي. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يكون <code>Dog</code> خاصية <code>name</code> معيّنة إلى سلسلة.
    testString: 'assert(typeof (new Dog()).name === "string", "<code>Dog</code> should have a <code>name</code> property set to a string.");'
  - text: يجب أن يكون <code>Dog</code> خاصية <code>color</code> مضبوطة على سلسلة.
    testString: 'assert(typeof (new Dog()).color === "string", "<code>Dog</code> should have a <code>color</code> property set to a string.");'
  - text: يجب أن يكون لدى <code>Dog</code> خاصية <code>numLegs</code> معيّنة إلى رقم.
    testString: 'assert(typeof (new Dog()).numLegs === "number", "<code>Dog</code> should have a <code>numLegs</code> property set to a number.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

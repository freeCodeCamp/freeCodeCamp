---
id: 587d7dae367417b2b2512b7c
title: Use Prototype Properties to Reduce Duplicate Code
challengeType: 1
videoUrl: ''
localeTitle: استخدم خصائص النموذج لتخفيض قانون مكرر
---

## Description
<section id="description"> بما أن <code>numLegs</code> المحتمل أن يكون لها نفس القيمة لجميع حالات <code>Bird</code> ، فأنت تمتلك <code>numLegs</code> متغيرة <code>numLegs</code> داخل كل <code>Bird</code> . قد لا يكون هذا مشكلة عند وجود حالتين فقط ، ولكن تخيل ما إذا كان هناك الملايين من الحالات. من شأنه أن يكون هناك الكثير من المتغيرات المتكررة. أفضل طريقة هي استخدام <code>prototype</code> <code>Bird&#39;s</code> . <code>prototype</code> هو كائن مشترك بين كافة مثيلات <code>Bird</code> . فيما يلي كيفية إضافة <code>numLegs</code> إلى <code>Bird prototype</code> : <blockquote style=";text-align:right;direction:rtl"> Bird.prototype.numLegs = 2؛ </blockquote> الآن جميع الحالات من <code>Bird</code> لديها خاصية <code>numLegs</code> . <blockquote style=";text-align:right;direction:rtl"> console.log (duck.numLegs)؛ // يطبع 2 <br> console.log (canary.numLegs)؛ // يطبع 2 </blockquote> نظرًا لأن جميع المثيلات تحتوي تلقائيًا على الخصائص في <code>prototype</code> ، <code>prototype</code> في <code>prototype</code> <code>prototype</code> أنه &quot;وصفة&quot; لإنشاء الكائنات. لاحظ أن <code>prototype</code> <code>duck</code> و <code>canary</code> هو جزء من منشئ <code>Bird</code> كنوع <code>Bird.prototype</code> . يحتوي كل كائن في JavaScript تقريبًا على خاصية <code>prototype</code> تمثل جزءًا من دالة المُنشئ التي أنشأها. </section>

## Instructions
<section id="instructions"> إضافة خاصية <code>numLegs</code> إلى <code>prototype</code> لـ <code>Dog</code> </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>beagle</code> ينبغي أن يكون لها <code>numLegs</code> الممتلكات.
    testString: 'assert(beagle.numLegs !== undefined, "<code>beagle</code> should have a <code>numLegs</code> property.");'
  - text: يجب أن يكون <code>beagle.numLegs</code> رقمًا.
    testString: 'assert(typeof(beagle.numLegs) === "number" , "<code>beagle.numLegs</code> should be a number.");'
  - text: يجب أن يكون <code>numLegs</code> خاصية <code>prototype</code> وليست خاصية <code>own</code> .
    testString: 'assert(beagle.hasOwnProperty("numLegs") === false, "<code>numLegs</code> should be a <code>prototype</code> property not an <code>own</code> property.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Dog(name) {
  this.name = name;
}



// Add your code above this line
let beagle = new Dog("Snoopy");

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

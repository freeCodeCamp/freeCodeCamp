---
id: 587d7db0367417b2b2512b82
title: Understand the Prototype Chain
challengeType: 1
videoUrl: ''
localeTitle: فهم سلسلة النموذج
---

## Description
<section id="description"> جميع الكائنات في JavaScript (مع بعض الاستثناءات) لديها <code>prototype</code> . أيضا ، فإن <code>prototype</code> للكائن هو كائن. <blockquote style=";text-align:right;direction:rtl"> وظيفة الطيور (الاسم) { <br> this.name = name؛ <br> } <br><br> typeof Bird.prototype ، // =&gt; كائن </blockquote> لأن <code>prototype</code> هو كائن، وهو <code>prototype</code> يمكن أن يكون الخاص <code>prototype</code> ! في هذه الحالة ، يكون <code>prototype</code> <code>Bird.prototype</code> هو <code>Object.prototype</code> : <blockquote style=";text-align:right;direction:rtl"> Object.prototype.isPrototypeOf (Bird.prototype)؛ <br> // يعود صحيح </blockquote> كيف هذا مفيد؟ قد تتذكر أسلوب <code>hasOwnProperty</code> من التحدي السابق: <blockquote style=";text-align:right;direction:rtl"> السماح بطة = الطيور الجديدة (&quot;دونالد&quot;) ؛ <br> duck.hasOwnProperty ( &quot;اسم&quot;)؛ // =&gt; صحيح </blockquote> يتم تعريف أسلوب <code>hasOwnProperty</code> في <code>Object.prototype</code> ، والذي يمكن الوصول إليه بواسطة <code>Bird.prototype</code> ، والذي يمكن الوصول إليه بواسطة <code>duck</code> . هذا مثال على سلسلة <code>prototype</code> . في هذا <code>prototype</code> سلسلة، <code>Bird</code> هو <code>supertype</code> ل <code>duck</code> ، في حين أن <code>duck</code> هو <code>subtype</code> . <code>Object</code> هو نوع <code>supertype</code> لكل من <code>Bird</code> و <code>duck</code> . <code>Object</code> هو نوع <code>supertype</code> لجميع الكائنات في JavaScript. لذلك ، يمكن استخدام أي كائن أسلوب <code>hasOwnProperty</code> . </section>

## Instructions
<section id="instructions"> تعديل الرمز لإظهار سلسلة النموذج الأولي الصحيح. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن تُظهر الكود الخاص بك أن <code>Object.prototype</code> هو النموذج الأولي لـ <code>Dog.prototype</code>)
    testString: 'assert(/Object\.prototype\.isPrototypeOf/.test(code), "Your code should show that <code>Object.prototype</code> is the prototype of <code>Dog.prototype</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // => true

// Fix the code below so that it evaluates to true
???.isPrototypeOf(Dog.prototype);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

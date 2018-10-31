---
id: 587d7db0367417b2b2512b81
title: Understand Where an Object’s Prototype Comes From
challengeType: 1
videoUrl: ''
localeTitle: فهم أين يأتي النموذج الأولي للكائن من
---

## Description
<section id="description"> مثلما يرث الناس جيناتهم من آبائهم ، يرث الكائن <code>prototype</code> مباشرةً من دالة المُنشئ التي أنشأته. على سبيل المثال ، هنا ينشئ منشئ <code>Bird</code> كائن <code>duck</code> : <blockquote style=";text-align:right;direction:rtl"> وظيفة الطيور (الاسم) { <br> this.name = name؛ <br> } <br><br> السماح بطة = الطيور الجديدة (&quot;دونالد&quot;) ؛ </blockquote> يرث <code>duck</code> نموذجها <code>prototype</code> من وظيفة منشئ <code>Bird</code> . يمكنك إظهار هذه العلاقة مع طريقة <code>isPrototypeOf</code> : <blockquote style=";text-align:right;direction:rtl"> Bird.prototype.isPrototypeOf (بطة)؛ <br> // يعود صحيح </blockquote></section>

## Instructions
<section id="instructions"> استخدم <code>isPrototypeOf</code> للتحقق من <code>prototype</code> <code>beagle</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: تبين أن <code>Dog.prototype</code> هو <code>prototype</code> من <code>beagle</code>
    testString: 'assert(/Dog\.prototype\.isPrototypeOf\(beagle\)/.test(code), "Show that <code>Dog.prototype</code> is the <code>prototype</code> of <code>beagle</code>");'

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

// Add your code below this line

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

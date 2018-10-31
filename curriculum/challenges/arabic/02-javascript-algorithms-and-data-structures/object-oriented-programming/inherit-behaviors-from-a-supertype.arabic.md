---
id: 587d7db0367417b2b2512b84
title: Inherit Behaviors from a Supertype
challengeType: 1
videoUrl: ''
localeTitle: وراثة السلوكيات من Supertype
---

## Description
<section id="description"> في التحدي السابق ، أنشأت نوعًا من النوع <code>supertype</code> يُطلق عليه اسم <code>Animal</code> والذي حدد السلوكيات التي تتقاسمها جميع الحيوانات: <blockquote style=";text-align:right;direction:rtl"> وظيفة الحيوان () {} <br> Animal.prototype.eat = function () { <br> console.log (&quot;nom nom nom&quot;)؛ <br> }؛ </blockquote> سيغطي هذا التحدي التالي كيفية إعادة استخدام أساليب <code>Animal&#39;s</code> داخل <code>Bird</code> and <code>Dog</code> بدون تعريفهم مرة أخرى. ويستخدم تقنية تسمى <code>inheritance</code> . يغطي هذا التحدي الخطوة الأولى: تقديم مثال على النوع <code>supertype</code> (أو الأصل). أنت تعرف بالفعل طريقة واحدة لإنشاء مثيل <code>Animal</code> باستخدام المشغل <code>new</code> : <blockquote style=";text-align:right;direction:rtl"> السماح للحيوان = حيوان جديد () ؛ </blockquote> هناك بعض العيوب عند استخدام هذه الصيغة <code>inheritance</code> ، والتي تكون معقدة للغاية بالنسبة لنطاق هذا التحدي. بدلاً من ذلك ، إليك طريقة بديلة بدون هذه العيوب: <blockquote style=";text-align:right;direction:rtl"> السماح للحيوان = Object.create (Animal.prototype) ؛ </blockquote> <code>Object.create(obj)</code> بإنشاء كائن جديد ويقوم بتعيين <code>obj</code> كـ <code>prototype</code> للكائن الجديد. أذكر أن <code>prototype</code> هو مثل &quot;وصفة&quot; لإنشاء كائن. من خلال وضع <code>prototype</code> <code>animal</code> ليكون <code>prototype</code> <code>Animal&#39;s</code> ، فأنت تعطي مثال <code>animal</code> على نحو فعال نفس &quot;الوصفة&quot; كأي مثيل آخر <code>Animal</code> . <blockquote style=";text-align:right;direction:rtl"> animal.eat ()؛ // prints &quot;nom nom nom&quot; <br> الحيوان المسبب للحيوان؛ // =&gt; صحيح </blockquote></section>

## Instructions
<section id="instructions"> استخدم <code>Object.create</code> لعمل حالتين من <code>Animal</code> المسمى <code>duck</code> <code>beagle</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب تعريف متغير <code>duck</code> .
    testString: 'assert(typeof duck !== "undefined", "The <code>duck</code> variable should be defined.");'
  - text: يجب تعريف متغير <code>beagle</code> .
    testString: 'assert(typeof beagle !== "undefined", "The <code>beagle</code> variable should be defined.");'
  - text: يجب أن يكون <code>duck</code> <code>prototype</code> <code>Animal</code> .
    testString: 'assert(duck instanceof Animal, "<code>duck</code> should have a <code>prototype</code> of <code>Animal</code>.");'
  - text: ينبغي أن يكون <code>beagle</code> <code>prototype</code> <code>Animal</code> .
    testString: 'assert(beagle instanceof Animal, "<code>beagle</code> should have a <code>prototype</code> of <code>Animal</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Add your code below this line

let duck; // Change this line
let beagle; // Change this line

duck.eat(); // Should print "nom nom nom"
beagle.eat(); // Should print "nom nom nom"

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

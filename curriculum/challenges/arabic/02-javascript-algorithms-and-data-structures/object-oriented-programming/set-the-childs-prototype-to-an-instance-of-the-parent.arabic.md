---
id: 587d7db1367417b2b2512b85
title: Set the Child's Prototype to an Instance of the Parent
challengeType: 1
videoUrl: ''
localeTitle: قم بتعيين Prototype الخاص بالطفل إلى مثيل من أصل
---

## Description
<section id="description"> في التحدي السابق ، شاهدت الخطوة الأولى لوراثة السلوك من <code>Animal</code> <code>supertype</code> (أو الوالد): صنع نسخة جديدة من <code>Animal</code> . يغطي هذا التحدي الخطوة التالية: تعيين <code>prototype</code> <code>subtype</code> (أو الطفل) - في هذه الحالة ، <code>Bird</code> - لتكون مثالًا <code>Animal</code> . <blockquote style=";text-align:right;direction:rtl"> Bird.prototype = Object.create (Animal.prototype)؛ </blockquote> تذكر أن <code>prototype</code> هو مثل &quot;وصفة&quot; لإنشاء كائن. بطريقة ما ، تتضمن وصفة <code>Bird</code> الآن جميع &quot;المكونات&quot; الأساسية من <code>Animal</code> . <blockquote style=";text-align:right;direction:rtl"> السماح بطة = الطيور الجديدة (&quot;دونالد&quot;) ؛ <br> duck.eat ()؛ // prints &quot;nom nom nom&quot; </blockquote> يرث <code>duck</code> جميع خصائص <code>Animal</code> ، بما في ذلك طريقة <code>eat</code> . </section>

## Instructions
<section id="instructions"> تعديل التعليمات البرمجية بحيث ترث حالات <code>Dog</code> من <code>Animal</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يكون <code>Dog.prototype</code> مثالا <code>Animal</code> .
    testString: 'assert(Animal.prototype.isPrototypeOf(Dog.prototype), "<code>Dog.prototype</code> should be an instance of <code>Animal</code>.");'

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

function Dog() { }

// Add your code below this line


let beagle = new Dog();
beagle.eat();  // Should print "nom nom nom"

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

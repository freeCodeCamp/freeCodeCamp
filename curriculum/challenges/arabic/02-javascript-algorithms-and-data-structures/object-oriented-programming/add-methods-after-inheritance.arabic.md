---
id: 587d7db1367417b2b2512b87
title: Add Methods After Inheritance
challengeType: 1
videoUrl: ''
localeTitle: إضافة طرق بعد الوراثة
---

## Description
<section id="description"> لا تزال دالة منشئ ترث كائن نموذجها <code>prototype</code> من دالة منشئ <code>supertype</code> قادرة على استخدام أساليبها الخاصة بالإضافة إلى الأساليب الموروثة. على سبيل المثال ، <code>Bird</code> هو مُنشئ يرث <code>prototype</code> من <code>Animal</code> : <blockquote style=";text-align:right;direction:rtl"> وظيفة الحيوان () {} <br> Animal.prototype.eat = function () { <br> console.log (&quot;nom nom nom&quot;)؛ <br> }؛ <br> وظيفة الطيور () {} <br> Bird.prototype = Object.create (Animal.prototype)؛ <br> Bird.prototype.constructor = Bird؛ </blockquote> بالإضافة إلى ما هو موروث من <code>Animal</code> ، فأنت تريد إضافة سلوك فريد لكائنات <code>Bird</code> . هنا ، سوف تحصل <code>Bird</code> على وظيفة <code>fly()</code> . يتم إضافة وظائف إلى <code>Bird&#39;s</code> <code>prototype</code> بنفس الطريقة مثل أي وظيفة المنشئ: <blockquote style=";text-align:right;direction:rtl"> Bird.prototype.fly = function () { <br> console.log (&quot;أنا أطير!&quot;) ؛ <br> }؛ </blockquote> الآن سوف يكون لديك <code>Bird</code> من <code>Bird</code> على كلا أساليب <code>eat()</code> و <code>fly()</code> : <blockquote style=";text-align:right;direction:rtl"> السماح بطة = الطيور الجديدة () ؛ <br> duck.eat ()؛ // prints &quot;nom nom nom&quot; <br> duck.fly ()؛ // prints &quot;أنا أطير!&quot; </blockquote></section>

## Instructions
<section id="instructions"> إضافة كافة التعليمات البرمجية الضرورية لذلك <code>Dog</code> يرث الكائن من <code>Animal</code> و <code>Dog&#39;s</code> <code>prototype</code> يتم تعيين المنشئ إلى الكلب. ثم أضف طريقة <code>bark()</code> إلى جسم <code>Dog</code> حتى يستطيع <code>beagle</code> أن <code>eat()</code> <code>bark()</code> . يجب أن تطبع طريقة <code>bark()</code> &quot;Woof!&quot; إلى وحدة التحكم. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: لا ينبغي أن يستجيب <code>Animal</code> لطريقة <code>bark()</code> .
    testString: 'assert(typeof Animal.prototype.bark == "undefined", "<code>Animal</code> should not respond to the <code>bark()</code> method.");'
  - text: يجب أن يرث <code>Dog</code> طريقة <code>eat()</code> من <code>Animal</code> .
    testString: 'assert(typeof Dog.prototype.eat == "function", "<code>Dog</code> should inherit the <code>eat()</code> method from <code>Animal</code>.");'
  - text: يجب أن يكون <code>Dog</code> أسلوب <code>bark()</code> كخاصية <code>own</code> .
    testString: 'assert(Dog.prototype.hasOwnProperty("bark"), "<code>Dog</code> should have the <code>bark()</code> method as an <code>own</code> property.");'
  - text: <code>beagle</code> يجب أن يكون <code>instanceof</code> <code>Animal</code> .
    testString: 'assert(beagle instanceof Animal, "<code>beagle</code> should be an <code>instanceof</code> <code>Animal</code>.");'
  - text: يجب تعيين منشئ <code>beagle</code> <code>Dog</code> .
    testString: 'assert(beagle.constructor === Dog, "The constructor for <code>beagle</code> should be set to <code>Dog</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Add your code below this line




// Add your code above this line

let beagle = new Dog();

beagle.eat(); // Should print "nom nom nom"
beagle.bark(); // Should print "Woof!"

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

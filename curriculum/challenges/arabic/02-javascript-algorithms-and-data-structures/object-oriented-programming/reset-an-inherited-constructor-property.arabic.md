---
id: 587d7db1367417b2b2512b86
title: Reset an Inherited Constructor Property
challengeType: 1
videoUrl: ''
localeTitle: إعادة تعيين منشئ Conherrated الخاصية
---

## Description
<section id="description"> عندما يرث كائن <code>prototype</code> الخاص به من كائن آخر ، فإنه يرث أيضًا خاصية مُنشئ <code>supertype</code> . إليك مثال على ذلك: <blockquote style=";text-align:right;direction:rtl"> وظيفة الطيور () {} <br> Bird.prototype = Object.create (Animal.prototype)؛ <br> السماح بطة = الطيور الجديدة () ؛ <br> duck.constructor // وظيفة الحيوان () {...} </blockquote> ولكن يجب أن تظهر <code>duck</code> وجميع حالات <code>Bird</code> التي شيدت من قبل <code>Bird</code> وليس <code>Animal</code> . للقيام بذلك، يمكنك تعيين يدويا <code>Bird&#39;s</code> الملكية منشئ إلى <code>Bird</code> وجوه: <blockquote style=";text-align:right;direction:rtl"> Bird.prototype.constructor = Bird؛ <br> duck.constructor // function Bird () {...} </blockquote></section>

## Instructions
<section id="instructions"> إصلاح التعليمات البرمجية بحيث <code>duck.constructor</code> و <code>beagle.constructor</code> إرجاع <code>beagle.constructor</code> الخاصة بهم. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يكون <code>Bird.prototype</code> مثالًا <code>Animal</code> .
    testString: 'assert(Animal.prototype.isPrototypeOf(Bird.prototype), "<code>Bird.prototype</code> should be an instance of <code>Animal</code>.");'
  - text: يجب أن يعود <code>duck.constructor</code> <code>Bird</code> .
    testString: 'assert(duck.constructor === Bird, "<code>duck.constructor</code> should return <code>Bird</code>.");'
  - text: يجب أن يكون <code>Dog.prototype</code> مثالا <code>Animal</code> .
    testString: 'assert(Animal.prototype.isPrototypeOf(Dog.prototype), "<code>Dog.prototype</code> should be an instance of <code>Animal</code>.");'
  - text: يجب أن يعود <code>beagle.constructor</code> <code>Dog</code> .
    testString: 'assert(beagle.constructor === Dog, "<code>beagle.constructor</code> should return <code>Dog</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Add your code below this line



let duck = new Bird();
let beagle = new Dog();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

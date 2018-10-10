---
id: 587d7daf367417b2b2512b7f
title: Change the Prototype to a New Object
challengeType: 1
videoUrl: ''
localeTitle: تغيير النموذج إلى كائن جديد
---

## Description
<section id="description"> حتى الآن ، كنت تضيف خصائص إلى <code>prototype</code> فردي: <blockquote style=";text-align:right;direction:rtl"> Bird.prototype.numLegs = 2؛ </blockquote> هذا يصبح مملا بعد أكثر من بعض الخصائص. <blockquote style=";text-align:right;direction:rtl"> Bird.prototype.eat = function () { <br> console.log (&quot;nom nom nom&quot;)؛ <br> } <br><br> Bird.prototype.describe = function () { <br> console.log (&quot;اسمي هو&quot; + this.name)؛ <br> } </blockquote> الطريقة الأكثر فعالية هي تعيين <code>prototype</code> على كائن جديد يحتوي بالفعل على الخصائص. بهذه الطريقة ، تتم إضافة الخصائص كلها مرة واحدة: <blockquote style=";text-align:right;direction:rtl"> Bird.prototype = { <br> numLegs: 2 ، <br> أكل: وظيفة () { <br> console.log (&quot;nom nom nom&quot;)؛ <br> }، <br> وصف: الوظيفة () { <br> console.log (&quot;اسمي هو&quot; + this.name)؛ <br> } <br> }؛ </blockquote></section>

## Instructions
<section id="instructions"> إضافة الخاصية <code>numLegs</code> <code>eat()</code> <code>describe()</code> إلى <code>prototype</code> <code>Dog</code> عن طريق وضع <code>prototype</code> على كائن جديد. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب تعيين <code>Dog.prototype</code> إلى كائن جديد.
    testString: 'assert((/Dog\.prototype\s*?=\s*?{/).test(code), "<code>Dog.prototype</code> should be set to a new object.");'
  - text: <code>Dog.prototype</code> يجب أن يكون الممتلكات <code>numLegs</code> .
    testString: 'assert(Dog.prototype.numLegs !== undefined, "<code>Dog.prototype</code> should have the property <code>numLegs</code>.");'
  - text: يجب أن يكون <code>Dog.prototype</code> الأسلوب <code>eat()</code> .
    testString: 'assert(typeof Dog.prototype.eat === "function", "<code>Dog.prototype</code> should have the method <code>eat()</code>."); '
  - text: يجب أن يكون <code>Dog.prototype</code> الأسلوب <code>describe()</code> .
    testString: 'assert(typeof Dog.prototype.describe === "function", "<code>Dog.prototype</code> should have the method <code>describe()</code>."); '

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Add your code below this line

};

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

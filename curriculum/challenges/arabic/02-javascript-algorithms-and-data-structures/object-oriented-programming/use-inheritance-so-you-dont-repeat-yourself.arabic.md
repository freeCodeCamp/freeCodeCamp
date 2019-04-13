---
id: 587d7db0367417b2b2512b83
title: Use Inheritance So You Don't Repeat Yourself
challengeType: 1
videoUrl: ''
localeTitle: استخدام الوراثة حتى لا تكرر نفسك
---

## Description
<section id="description"> هناك مبدأ في البرمجة يسمى <code>Don&#39;t Repeat Yourself (DRY)</code> . السبب في تكرار التعليمات البرمجية هو مشكلة لأن أي تغيير يتطلب إصلاح الكود في أماكن متعددة. هذا عادة ما يعني المزيد من العمل للمبرمجين ومجالاً أكبر للأخطاء. لاحظ في المثال أدناه أن طريقة <code>describe</code> تتم مشاركتها بواسطة <code>Bird</code> and <code>Dog</code> : <blockquote style=";text-align:right;direction:rtl"> Bird.prototype = { <br> منشئ: الطيور ، <br> وصف: الوظيفة () { <br> console.log (&quot;اسمي هو&quot; + this.name)؛ <br> } <br> }؛ <br><br> Dog.prototype = { <br> منشئ: كلب ، <br> وصف: الوظيفة () { <br> console.log (&quot;اسمي هو&quot; + this.name)؛ <br> } <br> }؛ </blockquote> تكرر طريقة <code>describe</code> في مكانين. يمكن تحرير الرمز ليتبع مبدأ <code>DRY</code> عن طريق إنشاء نوع <code>supertype</code> (أو الأصل) يسمى <code>Animal</code> : <blockquote style=";text-align:right;direction:rtl"> وظيفة الحيوان () {}؛ <br><br> Animal.prototype = { <br> منشئ: الحيوان ، <br> وصف: الوظيفة () { <br> console.log (&quot;اسمي هو&quot; + this.name)؛ <br> } <br> }؛ </blockquote> بما أن <code>Animal</code> يشتمل على طريقة <code>describe</code> ، فيمكنك إزالتها من <code>Bird</code> and <code>Dog</code> : <blockquote style=";text-align:right;direction:rtl"> Bird.prototype = { <br> منشئ: الطيور <br> }؛ <br><br> Dog.prototype = { <br> منشئ: كلب <br> }؛ </blockquote></section>

## Instructions
<section id="instructions"> تتكرر طريقة <code>eat</code> في كل من <code>Cat</code> and <code>Bear</code> . قم بتحرير الكود بروح <code>DRY</code> بتحريك طريقة <code>eat</code> إلى نوع <code>supertype</code> <code>Animal</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يكون <code>Animal.prototype</code> خاصية <code>eat</code> .
    testString: 'assert(Animal.prototype.hasOwnProperty("eat"), "<code>Animal.prototype</code> should have the <code>eat</code> property.");'
  - text: يجب أن لا يكون <code>Bear.prototype</code> خاصية <code>eat</code> .
    testString: 'assert(!(Bear.prototype.hasOwnProperty("eat")), "<code>Bear.prototype</code> should not have the <code>eat</code> property.");'
  - text: يجب ألا يكون لدى <code>Cat.prototype</code> خاصية <code>eat</code> .
    testString: 'assert(!(Cat.prototype.hasOwnProperty("eat")), "<code>Cat.prototype</code> should not have the <code>eat</code> property.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Animal() { }

Animal.prototype = {
  constructor: Animal,

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

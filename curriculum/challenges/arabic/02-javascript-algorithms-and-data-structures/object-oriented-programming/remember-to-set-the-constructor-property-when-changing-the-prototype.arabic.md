---
id: 587d7daf367417b2b2512b80
title: Remember to Set the Constructor Property when Changing the Prototype
challengeType: 1
videoUrl: ''
localeTitle: تذكر تعيين الخاصية منشئ عند تغيير "النموذج الأولي"
---

## Description
<section id="description"> هناك أحد الآثار الجانبية الحاسمة لإعداد <code>prototype</code> لكائن جديد. انها تمحو الملكية <code>constructor</code> ! الشفرة في التحدي السابق ستطبع ما يلي <code>duck</code> : <blockquote style=";text-align:right;direction:rtl"> console.log (duck.constructor) <br> // prints &#39;undefined&#39; - عفوًا! </blockquote> لإصلاح ذلك ، عند تعيين نموذج أولي يدويًا لكائن جديد ، تذكر تحديد خاصية <code>constructor</code> : <blockquote style=";text-align:right;direction:rtl"> Bird.prototype = { <br> constructor: Bird، // define الخاصية منشئ <br> numLegs: 2 ، <br> أكل: وظيفة () { <br> console.log (&quot;nom nom nom&quot;)؛ <br> }، <br> وصف: الوظيفة () { <br> console.log (&quot;اسمي هو&quot; + this.name)؛ <br> } <br> }؛ </blockquote></section>

## Instructions
<section id="instructions"> تحديد خاصية <code>constructor</code> على <code>prototype</code> <code>Dog</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Dog.prototype</code> يجب تعيين الخاصية <code>constructor</code> .
    testString: 'assert(Dog.prototype.constructor === Dog, "<code>Dog.prototype</code> should set the <code>constructor</code> property.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Dog(name) {
  this.name = name;
}

// Modify the code below this line
Dog.prototype = {

  numLegs: 2,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
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

---
id: 587d7daf367417b2b2512b7d
title: Iterate Over All Properties
challengeType: 1
videoUrl: ''
localeTitle: تكرار جميع الممتلكات
---

## Description
<section id="description"> لقد رأيت الآن نوعين من الخصائص: الخصائص <code>own</code> وخواص <code>prototype</code> . يتم تعريف الخصائص <code>Own</code> مباشرة على مثيل الكائن نفسه. يتم تعريف خصائص <code>prototype</code> على <code>prototype</code> . <blockquote style=";text-align:right;direction:rtl"> وظيفة الطيور (الاسم) { <br> this.name = name؛ //الملكية الخاصة <br> } <br><br> Bird.prototype.numLegs = 2؛ // الملكية النموذج <br><br> السماح بطة = الطيور الجديدة (&quot;دونالد&quot;) ؛ </blockquote> هنا هو كيف يمكنك إضافة <code>duck</code> الصورة <code>own</code> خصائص لمجموعة <code>ownProps</code> و <code>prototype</code> خصائص لمجموعة <code>prototypeProps</code> : <blockquote style=";text-align:right;direction:rtl"> let ownProps = []؛ <br> السماح لـ prototypeProps = []؛ <br><br> ل (دع الممتلكات في البط) { <br> if (duck.hasOwProProty (property)) { <br> ownProps.push (الملكية)؛ <br> } آخر { <br> prototypeProps.push (الملكية)؛ <br> } <br> } <br><br> console.log (ownProps)؛ // printts [&quot;name&quot;] <br> console.log (prototypeProps)؛ // prints [&quot;numLegs&quot;] </blockquote></section>

## Instructions
<section id="instructions"> إضافة جميع الخصائص <code>own</code> <code>beagle</code> إلى مجموعة <code>ownProps</code> . إضافة كل خصائص <code>prototype</code> <code>Dog</code> إلى مجموعة <code>prototypeProps</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن تتضمن صفيف <code>ownProps</code> <code>&quot;name&quot;</code> .
    testString: 'assert(ownProps.indexOf("name") !== -1, "The <code>ownProps</code> array should include <code>"name"</code>.");'
  - text: يجب أن تتضمن صفيف <code>prototypeProps</code> <code>&quot;numLegs&quot;</code> .
    testString: 'assert(prototypeProps.indexOf("numLegs") !== -1, "The <code>prototypeProps</code> array should include <code>"numLegs"</code>.");'
  - text: حل هذا التحدي دون استخدام الأسلوب <code>Object.keys()</code> .
    testString: 'assert(!/\Object.keys/.test(code), "Solve this challenge without using the built in method <code>Object.keys()</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

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

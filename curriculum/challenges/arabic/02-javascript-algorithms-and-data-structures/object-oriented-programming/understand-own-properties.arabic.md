---
id: 587d7dae367417b2b2512b7b
title: Understand Own Properties
challengeType: 1
videoUrl: ''
localeTitle: فهم خصائص خاصة
---

## Description
<section id="description"> في المثال التالي ، يعرف منشئ <code>Bird</code> خاصيتين: <code>name</code> و <code>numLegs</code> : <blockquote style=";text-align:right;direction:rtl"> وظيفة الطيور (الاسم) { <br> this.name = name؛ <br> this.numLegs = 2 ، <br> } <br><br> السماح بطة = الطيور الجديدة (&quot;دونالد&quot;) ؛ <br> السماح الكناري = الطيور الجديدة (&quot;تويتي&quot;) ؛ </blockquote> <code>name</code> و <code>numLegs</code> تسمى الخصائص <code>own</code> ، لأنها محددة مباشرة على كائن مثيل. وهذا يعني أن كل من <code>duck</code> <code>canary</code> له نسخة منفصلة خاصة به من هذه الخصائص. في الواقع ، سيكون لكل نسخة من <code>Bird</code> نسخة خاصة بها من هذه الخصائص. التعليمة البرمجية التالية يضيف كل من <code>own</code> خصائص <code>duck</code> لمجموعة <code>ownProps</code> : <blockquote style=";text-align:right;direction:rtl"> let ownProps = []؛ <br><br> ل (دع الممتلكات في البط) { <br> if (duck.hasOwProProty (property)) { <br> ownProps.push (الملكية)؛ <br> } <br> } <br><br> console.log (ownProps)؛ // prints [&quot;name&quot;، &quot;numLegs&quot;] </blockquote></section>

## Instructions
<section id="instructions"> إضافة الخصائص <code>own</code> <code>canary</code> إلى مجموعة <code>ownProps</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن تتضمن <code>ownProps</code> القيم <code>&quot;numLegs&quot;</code> و <code>&quot;name&quot;</code> .
    testString: 'assert(ownProps.indexOf("name") !== -1 && ownProps.indexOf("numLegs") !== -1, "<code>ownProps</code> should include the values <code>"numLegs"</code> and <code>"name"</code>.");'
  - text: حل هذا التحدي دون استخدام الأسلوب <code>Object.keys()</code> .
    testString: 'assert(!/\Object.keys/.test(code), "Solve this challenge without using the built in method <code>Object.keys()</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
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

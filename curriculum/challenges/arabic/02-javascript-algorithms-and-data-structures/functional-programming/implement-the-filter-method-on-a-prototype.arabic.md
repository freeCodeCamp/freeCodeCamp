---
id: 587d7b8f367417b2b2512b64
title: Implement the filter Method on a Prototype
challengeType: 1
videoUrl: ''
localeTitle: تنفيذ مرشح طريقة على النموذج
---

## Description
<section id="description"> من شأنه أن يعلمنا الكثير عن طريقة <code>filter</code> إذا حاولنا تنفيذ إصدار منه يتصرف تمامًا مثل <code>Array.prototype.filter()</code> . يمكن استخدام حلقة <code>for</code> أو <code>Array.prototype.forEach()</code> . ملاحظة: يسمح للوظيفة النقية بتغيير المتغيرات المحلية المحددة في نطاقها ، على الرغم من أنه من الأفضل تجنب ذلك أيضًا. </section>

## Instructions
<section id="instructions"> اكتب <code>Array.prototype.myFilter()</code> الخاص بك ، والتي يجب أن تتصرف تمامًا مثل <code>Array.prototype.filter()</code> . يمكنك استخدام حلقة <code>for</code> أو الأسلوب <code>Array.prototype.forEach()</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'يجب أن تساوي <code>new_s</code> <code>[23, 65, 5]</code> .'
    testString: 'assert(JSON.stringify(new_s) === JSON.stringify([23, 65, 5]), "<code>new_s</code> should equal <code>[23, 65, 5]</code>.");'
  - text: يجب ألا تستخدم الشفرة طريقة <code>filter</code> .
    testString: 'assert(!code.match(/\.filter/g), "Your code should not use the <code>filter</code> method.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback){
  var newArray = [];
  // Add your code below this line

  // Add your code above this line
  return newArray;

};

var new_s = s.myFilter(function(item){
  return item % 2 === 1;
});

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

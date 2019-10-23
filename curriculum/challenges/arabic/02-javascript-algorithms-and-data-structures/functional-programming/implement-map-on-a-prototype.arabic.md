---
id: 587d7b8f367417b2b2512b62
title: Implement map on a Prototype
challengeType: 1
videoUrl: ''
localeTitle: تنفيذ الخريطة على نموذج أولي
---

## Description
<section id="description"> كما رأيت من تطبيق <code>Array.prototype.map()</code> ، أو ببساطة <code>map()</code> وقت سابق ، فإن طريقة <code>map</code> ترجع مصفوفة بنفس الطول <code>Array.prototype.map()</code> تم الاتصال به. كما أنه لا يغير الصفيف الأصلي ، طالما أن وظيفة رد الاتصال لا. بعبارة أخرى ، <code>map</code> هي وظيفة نقية ، ويعتمد ناتجها فقط على مدخلاته. بالإضافة إلى ذلك ، فإنه يأخذ وظيفة أخرى كحجة لها. فإنه يعلمنا الكثير عن <code>map</code> لمحاولة تنفيذ نسخة منه أن يتصرف تماما مثل <code>Array.prototype.map()</code> مع <code>for</code> حلقة أو <code>Array.prototype.forEach()</code> . ملاحظة: يسمح للوظيفة النقية بتغيير المتغيرات المحلية المحددة في نطاقها ، على الرغم من أنه من الأفضل تجنب ذلك أيضًا. </section>

## Instructions
<section id="instructions"> اكتب <code>Array.prototype.myMap()</code> الخاص بك ، والتي يجب أن تتصرف تمامًا مثل <code>Array.prototype.map()</code> . يمكنك استخدام حلقة <code>for</code> أو طريقة <code>forEach</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'يجب أن تساوي <code>new_s</code> <code>[46, 130, 196, 10]</code> .'
    testString: 'assert(JSON.stringify(new_s) === JSON.stringify([46, 130, 196, 10]), "<code>new_s</code> should equal <code>[46, 130, 196, 10]</code>.");'
  - text: يجب ألا تستخدم شفرتك طريقة <code>map</code> .
    testString: 'assert(!code.match(/\.map/g), "Your code should not use the <code>map</code> method.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback){
  var newArray = [];
  // Add your code below this line

  // Add your code above this line
  return newArray;

};

var new_s = s.myMap(function(item){
  return item * 2;
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

---
id: 587d7da9367417b2b2512b67
title: Add Elements to the End of an Array Using concat Instead of push
challengeType: 1
videoUrl: ''
localeTitle: إضافة عناصر إلى نهاية صفيف باستخدام concat بدلاً من الضغط
---

## Description
<section id="description"> البرمجة الوظيفية هي كل شيء عن إنشاء واستخدام وظائف غير متحولة. قدم التحدي الأخير طريقة <code>concat</code> كطريقة لدمج المصفوفات في صف جديد دون تحوير المصفوفات الأصلية. قارن <code>concat</code> إلى طريقة <code>push</code> . يضيف <code>Push</code> عنصرًا إلى نهاية الصفيف نفسه الذي يطلق عليه ، والذي يحول ذلك الصفيف. إليك مثال على ذلك: <blockquote style=";text-align:right;direction:rtl"> var arr = [1، 2، 3]؛ <br> arr.push ([4، 5، 6])؛ <br> // arr يتم تغييرها إلى [1 ، 2 ، 3 ، [4 ، 5 ، 6]] <br> // ليس طريقة البرمجة الوظيفية </blockquote> يوفر <code>Concat</code> طريقة لإضافة عناصر جديدة إلى نهاية صفيف بدون أي تأثيرات جانبية متحولة. </section>

## Instructions
<section id="instructions"> تغيير الدالة <code>nonMutatingPush</code> بحيث يستخدم <code>concat</code> لإضافة <code>newItem</code> إلى نهاية <code>original</code> بدلاً من <code>push</code> . يجب على الدالة إرجاع صفيف. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن تستخدم التعليمات البرمجية الخاصة بك طريقة <code>concat</code> .
    testString: 'assert(code.match(/\.concat/g), "Your code should use the <code>concat</code> method.");'
  - text: يجب ألا تستخدم شفرتك طريقة <code>push</code> .
    testString: 'assert(!code.match(/\.push/g), "Your code should not use the <code>push</code> method.");'
  - text: يجب أن لا تتغير الصفيف <code>first</code> .
    testString: 'assert(JSON.stringify(first) === JSON.stringify([1, 2, 3]), "The <code>first</code> array should not change.");'
  - text: لا يجب تغيير الصفيف <code>second</code> .
    testString: 'assert(JSON.stringify(second) === JSON.stringify([4, 5]), "The <code>second</code> array should not change.");'
  - text: '<code>nonMutatingPush([1, 2, 3], [4, 5])</code> <code>[1, 2, 3, 4, 5]</code> .'
    testString: 'assert(JSON.stringify(nonMutatingPush([1, 2, 3], [4, 5])) === JSON.stringify([1, 2, 3, 4, 5]), "<code>nonMutatingPush([1, 2, 3], [4, 5])</code> should return <code>[1, 2, 3, 4, 5]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function nonMutatingPush(original, newItem) {
  // Add your code below this line
  return original.push(newItem);

  // Add your code above this line
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingPush(first, second);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

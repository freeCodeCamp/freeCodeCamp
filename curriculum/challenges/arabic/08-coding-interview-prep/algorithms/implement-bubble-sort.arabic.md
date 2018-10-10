---
id: 8d5123c8c441eddfaeb5bdef
title: Implement Bubble Sort
challengeType: 1
videoUrl: ''
localeTitle: ''
---

## Description
<section id="description"> هذا هو الأول من عدة تحديات على فرز الخوارزميات. بالنظر إلى مجموعة من العناصر التي لم يتم فرزها ، نريد أن نتمكن من إرجاع مصفوفة تم فرزها. سنرى عدة طرق مختلفة للقيام بذلك وتعلم بعض المفاضلات بين هذه الأساليب المختلفة. بينما تحتوي معظم اللغات الحديثة على طرق فرز مدمجة لعمليات مثل هذه ، إلا أنه من المهم فهم بعض المقاربات الأساسية الشائعة ومعرفة كيفية تنفيذها. هنا سوف نرى نوع الفقاعة. تبدأ طريقة فرز الفقاعات في بداية صفيف غير مُفرَط وقيم &quot;غير فقرات&quot; غير مجزأة نحو النهاية ، وتتكرر خلال الصفيف حتى يتم فرزها بالكامل. ويقوم بذلك بمقارنة العناصر المتجاورة وتبديلها إذا كانت خارج الترتيب. تستمر الطريقة في التكرار خلال الصفيف حتى لا تحدث أي مقايضات عندها يتم فرز المصفوفة. تتطلب هذه الطريقة تكرارات متعددة من خلال الصفيف ولأغلب الحالات المتوسطة والأسوأ تعقيدًا زمنيًا. في حين أنه بسيط ، فإنه عادة ما يكون غير عملي في معظم الحالات. <strong>التعليمات:</strong> كتابة <code>bubbleSort</code> الدالة التي تأخذ مجموعة من الأعداد الصحيحة كمدخلات وترجع مصفوفة من هذه الأعداد الصحيحة في ترتيب <code>bubbleSort</code> من الأقل إلى الأكبر. <strong>ملحوظة:</strong> <br> نحن نسمي هذه الوظيفة من وراء الكواليس. يتم التعليق على مجموعة الاختبار التي نستخدمها في المحرر. جرب تسجيل <code>array</code> لترى خوارزمية الفرز في العمل! </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert(typeof bubbleSort == "function", "<code>bubbleSort</code> is a function.");'
  - text: ''
    testString: 'assert(isSorted(bubbleSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])), "<code>bubbleSort</code> returns a sorted array (least to greatest).");'
  - text: ''
    testString: 'assert.sameMembers(bubbleSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]), [1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92], "<code>bubbleSort</code> returns an array that is unchanged except for order.");'
  - text: ''
    testString: 'assert.strictEqual(code.search(/\.sort\(/), -1, "<code>bubbleSort</code> should not use the built-in <code>.sort()</code> method.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function bubbleSort(array) {
  // change code below this line

  // change code above this line
  return array;
}

// test array:
// [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

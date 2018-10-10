---
id: 587d7b7b367417b2b2512b13
title: Copy an Array with the Spread Operator
challengeType: 1
videoUrl: ''
localeTitle: نسخ صفيف مع المشغل انتشار
---

## Description
<section id="description"> بينما تسمح لنا <code>slice()</code> بأن نكون انتقائيين حول عناصر المصفوفة المراد نسخها ، من بين العديد من المهام المفيدة الأخرى ، يتيح لنا <dfn>مشغل</dfn> التوزيع الجديد لـ ES6 نسخ <em>جميع</em> عناصر الصفيف بسهولة ، بالترتيب ، مع بناء بسيط وقابل للقراءة للغاية. تبدو صيغة الانتشار بهذا الشكل: <code>...</code> الناحية العملية ، يمكننا استخدام عامل الانتشار لنسخ مصفوفة مثل: <blockquote style=";text-align:right;direction:rtl"> السماح لهذاالصورة = [true، true، undefined، false، null]؛ <br> السماح أن AArray = [... thisArray]؛ <br> // thatArray يساوي [true ، true ، غير محدد ، false ، فارغ] <br> / / هذا لا يزال يظل بدون تغيير ، وهو مطابق لذلك </blockquote></section>

## Instructions
<section id="instructions"> قمنا بتعريف وظيفة ، <code>copyMachine</code> والتي تأخذ <code>arr</code> (صفيف) و <code>num</code> (a number) كوسيطة. من المفترض أن تقوم الدالة بإرجاع صفيف جديد يتكون من نسخ <code>num</code> من <code>arr</code> . لقد قمنا بمعظم العمل لك ، لكنه لا يعمل بشكل صحيح بعد. قم بتعديل الوظيفة باستخدام صيغة الانتشار بحيث تعمل بشكل صحيح (تلميح: قد تكون طريقة أخرى قمنا بتغطيتها بالفعل مفيدة هنا!). </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>copyMachine([true, false, true], 2)</code> <code>[[true, false, true], [true, false, true]]</code>'
    testString: 'assert.deepEqual(copyMachine([true, false, true], 2), [[true, false, true], [true, false, true]], "<code>copyMachine([true, false, true], 2)</code> should return <code>[[true, false, true], [true, false, true]]</code>");'
  - text: '<code>copyMachine([1, 2, 3], 5)</code> <code>[[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]</code>'
    testString: 'assert.deepEqual(copyMachine([1, 2, 3], 5), [[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]], "<code>copyMachine([1, 2, 3], 5)</code> should return <code>[[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]</code>");'
  - text: '<code>copyMachine([true, true, null], 1)</code> يجب أن يعيد <code>[[true, true, null]]</code>'
    testString: 'assert.deepEqual(copyMachine([true, true, null], 1), [[true, true, null]], "<code>copyMachine([true, true, null], 1)</code> should return <code>[[true, true, null]]</code>");'
  - text: '<code>copyMachine([&quot;it works&quot;], 3)</code> <code>[[&quot;it works&quot;], [&quot;it works&quot;], [&quot;it works&quot;]]</code>'
    testString: 'assert.deepEqual(copyMachine(["it works"], 3), [["it works"], ["it works"], ["it works"]], "<code>copyMachine(["it works"], 3)</code> should return <code>[["it works"], ["it works"], ["it works"]]</code>");'
  - text: و <code>copyMachine</code> وظيفة يجب الاستفادة من <code>spread operator</code> مع مجموعة <code>arr</code>
    testString: 'assert.notStrictEqual(copyMachine.toString().indexOf(".concat(_toConsumableArray(arr))"), -1, "The <code>copyMachine</code> function should utilize the <code>spread operator</code> with array <code>arr</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // change code below this line

    // change code above this line
    num--;
  }
  return newArr;
}

// change code here to test different cases:
console.log(copyMachine([true, false, true], 2));

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

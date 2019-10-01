---
id: 56bbb991ad1ed5201cd392ca
title: Access Array Data with Indexes
challengeType: 1
videoUrl: ''
localeTitle: 'الوصول إلى مجموعة البيانات مع الانديكس'
---

## Description
يمكننا الوصول إلى البيانات داخل المصفوفات باستخدام الفهارس.

تتم كتابة فهرس المصفوفة في نفس تدرج القوس الذي تستخدمه السلاسل ، إلا أنه بدلاً من تحديد حرف ، يتم تحديد إدخال في الصفيف. مثل السلاسل ، تستخدم المصفوفات فهرسة مستندة إلى الصفر ، لذلك فإن العنصر الأول في المصفوفة هو العنصر 0.

## Instructions
قم بإنشاء variable يسمي myData وتعيينه ليساوي القيمة الأولى من myArray باستخدام bracket notation.

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert((function(){if(typeof myArray !== "undefined" && typeof myData !== "undefined" && myArray[0] === myData){return true;}else{return false;}})(), "The variable <code>myData</code> should equal the first value of <code>myArray</code>.");'
  - text: يجب الوصول إلى البيانات في متغير <code>myArray</code> باستخدام تدوين قوس.
    testString: 'assert((function(){if(code.match(/\s*=\s*myArray\[0\]/g)){return true;}else{return false;}})(), "The data in variable <code>myArray</code> should be accessed using bracket notation.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourArray = [50,60,70];
var ourData = ourArray[0]; // equals 50

// Setup
var myArray = [50,60,70];

// Only change code below this line.

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

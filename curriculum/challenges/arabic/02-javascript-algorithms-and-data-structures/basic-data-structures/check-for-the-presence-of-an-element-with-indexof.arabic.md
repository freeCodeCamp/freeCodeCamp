---
id: 587d7b7b367417b2b2512b14
title: Check For The Presence of an Element With indexOf()
challengeType: 1
videoUrl: ''
localeTitle: التحقق من وجود عنصر مع indexOf ()
---

## Description
<section id="description"> بما أن الصفائف يمكن تغييرها أو <em>تحورها</em> في أي وقت ، فلا يوجد ضمان حول مكان وجود بيانات معينة في صفيف معين ، أو حتى إذا كان هذا العنصر موجودًا حتى. لحسن الحظ ، توفر لنا جافا سكريبت طريقة أخرى مضمنة ، <code>indexOf()</code> ، تسمح لنا بالتحقق بسرعة وسهولة من وجود عنصر في صفيف. تأخذ <code>indexOf()</code> عنصرًا كمعلمة ، وعندما يتم استدعاؤها ، فإنها ترجع الموضع ، أو الفهرس ، لهذا العنصر ، أو <code>-1</code> إذا كان العنصر غير موجود في الصفيف. فمثلا: <blockquote style=";text-align:right;direction:rtl"> السماح للفواكه = [التفاح ، &#39;الكمثرى&#39; ، &#39;البرتقال&#39; ، &#39;الخوخ&#39; ، &#39;الكمثرى&#39;] ؛ <br><br> fruits.indexOf (&quot;التواريخ&quot;) // returns -1 <br> fruit.indexOf (&#39;oranges&#39;) // تُرجع 2 <br> fruits.indexOf (&#39;pears&#39;) // تُرجع 1 ، أول مؤشر موجود فيه العنصر </blockquote></section>

## Instructions
<section id="instructions"> يمكن أن يكون <code>indexOf()</code> مفيدا بشكل لا يصدق للتحقق بسرعة من وجود عنصر في صفيف. لقد حددنا وظيفة ، <code>quickCheck</code> ، والتي تأخذ مصفوفة وعنصر <code>quickCheck</code> . تعديل الدالة باستخدام <code>indexOf()</code> بحيث تقوم بإرجاع <code>true</code> إذا كان العنصر الذي تم تمريره موجودًا على الصفيف ، و <code>false</code> إذا لم يكن موجودًا. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>quickCheck([&quot;squash&quot;, &quot;onions&quot;, &quot;shallots&quot;], &quot;mushrooms&quot;)</code> يجب أن تعود <code>false</code>'
    testString: 'assert.strictEqual(quickCheck(["squash", "onions", "shallots"], "mushrooms"), false, "<code>quickCheck(["squash", "onions", "shallots"], "mushrooms")</code> should return <code>false</code>");'
  - text: '<code>quickCheck([&quot;squash&quot;, &quot;onions&quot;, &quot;shallots&quot;], &quot;onions&quot;)</code> يجب أن تعود <code>true</code>'
    testString: 'assert.strictEqual(quickCheck(["squash", "onions", "shallots"], "onions"), true, "<code>quickCheck(["squash", "onions", "shallots"], "onions")</code> should return <code>true</code>");'
  - text: '<code>quickCheck([3, 5, 9, 125, 45, 2], 125)</code> يجب أن <code>quickCheck([3, 5, 9, 125, 45, 2], 125)</code> <code>true</code>'
    testString: 'assert.strictEqual(quickCheck([3, 5, 9, 125, 45, 2], 125), true, "<code>quickCheck([3, 5, 9, 125, 45, 2], 125)</code> should return <code>true</code>");'
  - text: '<code>quickCheck([true, false, false], undefined)</code> <code>false</code>'
    testString: 'assert.strictEqual(quickCheck([true, false, false], undefined), false, "<code>quickCheck([true, false, false], undefined)</code> should return <code>false</code>");'
  - text: يجب أن تستخدم الدالة <code>quickCheck</code> الأسلوب <code>indexOf()</code>
    testString: 'assert.notStrictEqual(quickCheck.toString().search(/\.indexOf\(/), -1, "The <code>quickCheck</code> function should utilize the <code>indexOf()</code> method");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function quickCheck(arr, elem) {
  // change code below this line

  // change code above this line
}

// change code here to test different cases:
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

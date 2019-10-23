---
id: 587d7db3367417b2b2512b8e
title: Using the Test Method
challengeType: 1
videoUrl: ''
localeTitle: باستخدام طريقة الاختبار
---

## Description
<section id="description"> يتم استخدام التعبيرات العادية في لغات البرمجة لمطابقة أجزاء من السلاسل. يمكنك إنشاء أنماط لمساعدتك في إجراء ذلك المطابقة. إذا كنت تريد العثور على الكلمة <code>&quot;the&quot;</code> في السلسلة <code>&quot;The dog chased the cat&quot;</code> ، يمكنك استخدام التعبير العادي التالي: <code>/the/</code> . لاحظ أن علامات الاقتباس ليست مطلوبة في التعبير العادي. جافا سكريبت لديها طرق متعددة لاستخدام regexes. طريقة واحدة لاختبار regex تستخدم طريقة <code>.test()</code> . و <code>.test()</code> يأخذ طريقة التعبير المعتاد، وينطبق ذلك إلى سلسلة (التي يتم وضعها داخل قوسين)، وإرجاع <code>true</code> أو <code>false</code> إذا وجد النمط الخاص بك شيئا أم لا. <blockquote style=";text-align:right;direction:rtl"> السماح testStr = &quot;freeCodeCamp&quot; ؛ <br> let testRegex = / Code /؛ <br> testRegex.test (testStr)؛ <br> // يعود صحيح </blockquote></section>

## Instructions
<section id="instructions"> قم <code>myRegex</code> regex على السلسلة <code>myString</code> باستخدام طريقة <code>.test()</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب عليك استخدام <code>.test()</code> لاختبار regex.
    testString: 'assert(code.match(/myRegex.test\(\s*myString\s*\)/), "You should use <code>.test()</code> to test the regex.");'
  - text: نتيجة الخاص بك يجب أن تعود <code>true</code> .
    testString: 'assert(result === true, "Your result should return <code>true</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex; // Change this line

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

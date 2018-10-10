---
id: 587d7db7367417b2b2512b9d
title: Match Beginning String Patterns
challengeType: 1
videoUrl: ''
localeTitle: مباراة بداية أنماط سلسلة
---

## Description
<section id="description"> أظهرت التحديات السابقة أنه يمكن استخدام التعبيرات العادية للبحث عن عدد من التطابقات. كما يتم استخدامها للبحث عن أنماط في مواضع محددة في السلاسل. في تحدي سابق ، استخدمت <code>caret</code> ( <code>^</code> ) داخل مجموعة <code>character set</code> لإنشاء مجموعة <code>negated character set</code> <code>[^thingsThatWillNotBeMatched]</code> في النموذج <code>[^thingsThatWillNotBeMatched]</code> . خارج مجموعة <code>character set</code> ، يتم استخدام <code>caret</code> للبحث عن الأنماط في بداية السلاسل. <blockquote style=";text-align:right;direction:rtl"> let firstString = &quot;Ricky is first and can be found.&quot;؛ <br> let firstRegex = / ^ Ricky /؛ <br> firstRegex.test (firstString)؛ <br> // يعود صحيح <br> let notFirst = &quot;لا يمكنك العثور على Ricky الآن.&quot;؛ <br> firstRegex.test (notFirst)؛ <br> // إرجاع خاطئة </blockquote></section>

## Instructions
<section id="instructions"> استخدم <code>caret</code> في تعبير منطقي للبحث عن <code>&quot;Cal&quot;</code> فقط في بداية السلسلة <code>rickyAndCal</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يبحث التعبير المعتاد عن <code>&quot;Cal&quot;</code> بحرف كبير.
    testString: 'assert(calRegex.source == "^Cal", "Your regex should search for <code>"Cal"</code> with a capital letter.");'
  - text: يجب ألا يستخدم تعبيرك المعتاد أي أعلام.
    testString: 'assert(calRegex.flags == "", "Your regex should not use any flags.");'
  - text: يجب أن يتطابق تعبيرك العادي مع كلمة <code>&quot;Cal&quot;</code> في بداية السلسلة.
    testString: 'assert(calRegex.test("Cal and Ricky both like racing."), "Your regex should match <code>"Cal"</code> at the beginning of the string.");'
  - text: يجب ألا يتطابق التعبير العادي مع <code>&quot;Cal&quot;</code> في وسط سلسلة.
    testString: 'assert(!calRegex.test("Ricky and Cal both like racing."), "Your regex should not match <code>"Cal"</code> in the middle of a string.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /change/; // Change this line
let result = calRegex.test(rickyAndCal);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

---
id: 587d7db5367417b2b2512b94
title: Match Anything with Wildcard Period
challengeType: 1
videoUrl: ''
localeTitle: تطابق أي شيء مع فترة أحرف البدل
---

## Description
<section id="description"> في بعض الأحيان ، لن (أو لا تحتاج إلى) معرفة الأحرف الدقيقة في أنماطك. التفكير في كل الكلمات التي تتطابق مع ، على سبيل المثال ، خطأ إملائي سيستغرق وقتًا طويلاً. لحسن الحظ، يمكنك توفير الوقت باستخدام حرف بدل: <code>.</code> حرف البدل <code>.</code> سوف تطابق أي حرف واحد. ويطلق على حرف البدل أيضا <code>dot</code> <code>period</code> . يمكنك استخدام حرف البدل تمامًا مثل أي حرف آخر في regex. على سبيل المثال ، إذا أردت مطابقة <code>&quot;hug&quot;</code> و <code>&quot;huh&quot;</code> و <code>&quot;hut&quot;</code> و <code>&quot;hum&quot;</code> ، فيمكنك استخدام regex <code>/hu./</code> لمطابقة كل الكلمات الأربع. <blockquote style=";text-align:right;direction:rtl"> لندع humStr = &quot;سوف ألعب أغنية&quot; ؛ <br> let hugStr = &quot;Bear hug&quot;؛ <br> let huRegex = /hu./؛ <br> humStr.match (huRegex)؛ // Returns [&quot;hum&quot;] <br> hugStr.match (huRegex)؛ // Returns [&quot;hug&quot;] </blockquote></section>

## Instructions
<section id="instructions"> أكمل regex <code>unRegex</code> بحيث يتطابق مع السلاسل <code>&quot;run&quot;</code> و <code>&quot;sun&quot;</code> و <code>&quot;fun&quot;</code> و <code>&quot;pun&quot;</code> و <code>&quot;nun&quot;</code> و <code>&quot;bun&quot;</code> . يجب أن يستخدم تعبيرك العادي حرف حرف البدل. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب عليك استخدام طريقة <code>.test()</code> .
    testString: 'assert(code.match(/\.test\(.*\)/), "You should use the <code>.test()</code> method.");'
  - text: يجب عليك استخدام حرف البدل في regex <code>unRegex</code>
    testString: 'assert(/\./.test(unRegex.source), "You should use the wildcard character in your regex <code>unRegex</code>");'
  - text: يجب أن يطابق regex <code>unRegex</code> <code>&quot;run&quot;</code> في <code>&quot;Let us go on a run.&quot;</code>
    testString: 'assert(unRegex.test("Let us go on a run."), "Your regex <code>unRegex</code> should match <code>"run"</code> in <code>"Let us go on a run."</code>");'
  - text: يجب أن يتطابق <code>unRegex</code> regex <code>unRegex</code> مع كلمة <code>&quot;sun&quot;</code> في <code>&quot;The sun is out today.&quot;</code>
    testString: 'assert(unRegex.test("The sun is out today."), "Your regex <code>unRegex</code> should match <code>"sun"</code> in <code>"The sun is out today."</code>");'
  - text: يجب أن يطابق regex <code>unRegex</code> <code>&quot;fun&quot;</code> في <code>&quot;Coding is a lot of fun.&quot;</code>
    testString: 'assert(unRegex.test("Coding is a lot of fun."), "Your regex <code>unRegex</code> should match <code>"fun"</code> in <code>"Coding is a lot of fun."</code>");'
  - text: يجب أن يتطابق <code>&quot;pun&quot;</code> regex <code>unRegex</code> مع <code>&quot;pun&quot;</code> في <code>&quot;Seven days without a pun makes one weak.&quot;</code>
    testString: 'assert(unRegex.test("Seven days without a pun makes one weak."), "Your regex <code>unRegex</code> should match <code>"pun"</code> in <code>"Seven days without a pun makes one weak."</code>");'
  - text: يجب أن يتطابق <code>unRegex</code> regex <code>unRegex</code> مع <code>&quot;nun&quot;</code> في <code>&quot;One takes a vow to be a nun.&quot;</code> <code>unRegex</code> <code>&quot;One takes a vow to be a nun.&quot;</code>
    testString: 'assert(unRegex.test("One takes a vow to be a nun."), "Your regex <code>unRegex</code> should match <code>"nun"</code> in <code>"One takes a vow to be a nun."</code>");'
  - text: يجب أن تتطابق مع regex <code>unRegex</code> <code>&quot;bun&quot;</code> في <code>&quot;She got fired from the hot dog stand for putting her hair in a bun.&quot;</code> <code>unRegex</code> <code>&quot;She got fired from the hot dog stand for putting her hair in a bun.&quot;</code>
    testString: 'assert(unRegex.test("She got fired from the hot dog stand for putting her hair in a bun."), "Your regex <code>unRegex</code> should match <code>"bun"</code> in <code>"She got fired from the hot dog stand for putting her hair in a bun."</code>");'
  - text: يجب ألا يطابق regex <code>unRegex</code> <code>&quot;There is a bug in my code.&quot;</code>
    testString: 'assert(!unRegex.test("There is a bug in my code."), "Your regex <code>unRegex</code> should not match <code>"There is a bug in my code."</code>");'
  - text: يجب ألا يتطابق التعبير <code>unRegex</code> regex <code>unRegex</code> مع <code>&quot;Catch me if you can.&quot;</code>
    testString: 'assert(!unRegex.test("Can me if you can."), "Your regex <code>unRegex</code> should not match <code>"Catch me if you can."</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /change/; // Change this line
let result = unRegex.test(exampleStr);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

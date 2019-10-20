---
id: 587d7db7367417b2b2512b9e
title: Match Ending String Patterns
challengeType: 1
videoUrl: ''
localeTitle: تطابق نهاية أنماط سلسلة
---

## Description
<section id="description"> في التحدي الأخير ، تعلمت استخدام <code>caret</code> للبحث عن الأنماط في بداية السلاسل. هناك أيضًا طريقة للبحث عن الأنماط في نهاية السلاسل. يمكنك البحث في نهاية السلاسل باستخدام حرف <code>dollar sign</code> <code>$</code> في نهاية التعليمة regex. <blockquote style=";text-align:right;direction:rtl"> دع theEnding = &quot;هذه قصة لا تنتهي أبدا&quot;؛ <br> let storyRegex = / story $ /؛ <br> storyRegex.test (theEnding)؛ <br> // يعود صحيح <br> let noEnding = &quot;في بعض الأحيان يجب أن تنتهي القصة&quot; ؛ <br> storyRegex.test (noEnding)؛ <br> // إرجاع خاطئة <br></blockquote></section>

## Instructions
<section id="instructions"> استخدم حرف الربط ( <code>$</code> ) لمطابقة السلسلة <code>&quot;caboose&quot;</code> في نهاية سلسلة <code>caboose</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب عليك البحث عن <code>&quot;caboose&quot;</code> باستخدام علامة الدولار <code>$</code> anchor في تعبيرك المعتاد.
    testString: 'assert(lastRegex.source == "caboose$", "You should search for <code>"caboose"</code> with the dollar sign <code>$</code> anchor in your regex.");'
  - text: يجب ألا يستخدم تعبيرك المعتاد أي أعلام.
    testString: 'assert(lastRegex.flags == "", "Your regex should not use any flags.");'
  - text: يجب أن تتطابق مع <code>&quot;caboose&quot;</code> في نهاية السلسلة <code>&quot;The last car on a train is the caboose&quot;</code>
    testString: 'assert(lastRegex.test("The last car on a train is the caboose"), "You should match <code>"caboose"</code> at the end of the string <code>"The last car on a train is the caboose"</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let caboose = "The last car on a train is the caboose";
let lastRegex = /change/; // Change this line
let result = lastRegex.test(caboose);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

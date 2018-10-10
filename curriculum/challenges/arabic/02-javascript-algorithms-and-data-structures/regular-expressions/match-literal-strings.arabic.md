---
id: 587d7db3367417b2b2512b8f
title: Match Literal Strings
challengeType: 1
videoUrl: ''
localeTitle: المباراة الحرفيه الاوتار
---

## Description
<section id="description"> في التحدي الأخير ، قمت بالبحث عن كلمة <code>&quot;Hello&quot;</code> باستخدام التعبير العادي <code>/Hello/</code> . بحث هذا التعبير المنطقي عن تطابق حرفي لسلسلة <code>&quot;Hello&quot;</code> . إليك مثال آخر يبحث عن مطابقة حرفية لسلسلة <code>&quot;Kevin&quot;</code> : <blockquote style=";text-align:right;direction:rtl"> let testStr = &quot;مرحبًا ، اسمي كيفن.&quot;؛ <br> let testRegex = / Kevin /؛ <br> testRegex.test (testStr)؛ <br> // يعود صحيح </blockquote> أي أشكال أخرى من <code>&quot;Kevin&quot;</code> لن تتطابق. على سبيل المثال ، لن يتطابق regex <code>/Kevin/</code> مع <code>&quot;kevin&quot;</code> أو <code>&quot;KEVIN&quot;</code> . <blockquote style=";text-align:right;direction:rtl"> let wrongRegex = / kevin /؛ <br> wrongRegex.test (testStr)؛ <br> // إرجاع خاطئة </blockquote> سيظهر تحدٍّ مستقبلي كيفية مضاهاة هذه الأشكال الأخرى أيضًا. </section>

## Instructions
<section id="instructions"> أكمل <code>waldoRegex</code> regex للعثور على <code>&quot;Waldo&quot;</code> في السلسلة <code>waldoIsHiding</code> مع مطابقة حرفية. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يجد <code>waldoRegex</code> regex الخاص بك <code>&quot;Waldo&quot;</code>
    testString: 'assert(waldoRegex.test(waldoIsHiding), "Your regex <code>waldoRegex</code> should find <code>"Waldo"</code>");'
  - text: يجب ألا يبحث regex <code>waldoRegex</code> عن أي شيء آخر.
    testString: 'assert(!waldoRegex.test("Somewhere is hiding in this text."), "Your regex <code>waldoRegex</code> should not search for anything else.");'
  - text: يجب إجراء مطابقة سلسلة حرفية مع تعبيرك المعتاد.
    testString: 'assert(!/\/.*\/i/.test(code), "You should perform a literal string match with your regex.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /search/; // Change this line
let result = waldoRegex.test(waldoIsHiding);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

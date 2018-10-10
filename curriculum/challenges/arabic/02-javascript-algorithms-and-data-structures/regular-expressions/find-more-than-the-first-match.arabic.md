---
id: 587d7db4367417b2b2512b93
title: Find More Than the First Match
challengeType: 1
videoUrl: ''
localeTitle: العثور على أكثر من المباراة الأولى
---

## Description
<section id="description"> حتى الآن ، كنت قادرًا على استخراج نمط أو البحث عنه مرة واحدة فقط. <blockquote style=";text-align:right;direction:rtl"> let testStr = &quot;Repeat، Repeat، Repeat&quot;؛ <br> دع ourRegex = / كرر /؛ <br> testStr.match (ourRegex)؛ <br> // Returns [&quot;Repeat&quot;] </blockquote> للبحث أو استخراج نمط أكثر من مرة ، يمكنك استخدام علم <code>g</code> . <blockquote style=";text-align:right;direction:rtl"> اترك repeatRegex = / Repeat / g؛ <br> testStr.match (repeatRegex)؛ <br> // Returns [&quot;Repeat&quot;، &quot;Repeat&quot;، &quot;Repeat&quot;] </blockquote></section>

## Instructions
<section id="instructions"> باستخدام regex <code>starRegex</code> ، ابحث <code>starRegex</code> الكلمات <code>&quot;Twinkle&quot;</code> من سلسلة <code>twinkleStar</code> . <strong>ملحوظة</strong> <br> يمكنك الحصول على العديد من العلامات على تعديلك مثل <code>/search/gi</code> </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يستخدم <code>starRegex</code> regex الخاص بك العلم العالمي <code>g</code>
    testString: 'assert(starRegex.flags.match(/g/).length == 1, "Your regex <code>starRegex</code> should use the global flag <code>g</code>");'
  - text: يجب أن يستخدم <code>starRegex</code> الخاص بك regex <code>starRegex</code> الحالة غير الحساسة <code>i</code>
    testString: 'assert(starRegex.flags.match(/i/).length == 1, "Your regex <code>starRegex</code> should use the case insensitive flag <code>i</code>");'
  - text: يجب أن تتطابق المطابقة مع كلمتين لكلمة <code>&quot;Twinkle&quot;</code>
    testString: 'assert(result.sort().join() == twinkleStar.match(/twinkle/gi).sort().join(), "Your match should match both occurrences of the word <code>"Twinkle"</code>");'
  - text: يجب أن تحتوي <code>result</code> المطابقة الخاصة بك على عنصرين.
    testString: 'assert(result.length == 2, "Your match <code>result</code> should have two elements in it.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /change/; // Change this line
let result = twinkleStar; // Change this line

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

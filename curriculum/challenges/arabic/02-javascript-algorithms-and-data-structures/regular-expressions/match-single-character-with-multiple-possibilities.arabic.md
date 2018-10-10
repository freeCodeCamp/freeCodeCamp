---
id: 587d7db5367417b2b2512b95
title: Match Single Character with Multiple Possibilities
challengeType: 1
videoUrl: ''
localeTitle: تطابق شخصية واحدة مع إمكانيات متعددة
---

## Description
<section id="description"> تعلمت كيف تتطابق مع الأنماط الحرفية ( <code>/literal/</code> ) وحرف البدل ( <code>/./</code> ). هذه هي الحدود القصوى للتعبيرات العادية ، حيث يجد المرء مباريات متطابقة ويطابق الآخر كل شيء. هناك خيارات توازن بين النقيضين. يمكنك البحث عن نمط حرفية مع بعض المرونة مع <code>character classes</code> . تتيح لك فئات الأحرف تعريف مجموعة من الأحرف التي ترغب في مطابقتها بوضعها داخل أقواس مربعة ( <code>[</code> و <code>]</code> ). على سبيل المثال ، تريد مطابقة <code>&quot;bag&quot;</code> و <code>&quot;big&quot;</code> و <code>&quot;bug&quot;</code> وليس <code>&quot;bog&quot;</code> . يمكنك إنشاء regex <code>/b[aiu]g/</code> للقيام بذلك. إن <code>[aiu]</code> هو فئة الشخصية التي تتطابق فقط مع الأحرف <code>&quot;a&quot;</code> أو <code>&quot;i&quot;</code> أو <code>&quot;u&quot;</code> . <blockquote style=";text-align:right;direction:rtl"> let bigStr = &quot;big&quot;؛ <br> اسمحوا bagStr = &quot;حقيبة&quot; ؛ <br> let bugStr = &quot;bug&quot;؛ <br> let bogStr = &quot;bog&quot;؛ <br> let bgRegex = / b [aiu] g /؛ <br> bigStr.match (bgRegex)؛ // Returns [&quot;big&quot;] <br> bagStr.match (bgRegex)؛ // Returns [&quot;bag&quot;] <br> bugStr.match (bgRegex)؛ // Returns [&quot;bug&quot;] <br> bogStr.match (bgRegex)؛ // يعود لاغيا </blockquote></section>

## Instructions
<section id="instructions"> استخدم فئة أحرف مع أحرف العلة ( <code>a</code> ، <code>e</code> ، <code>i</code> ، <code>o</code> ، <code>u</code> ) في your regex <code>vowelRegex</code> للعثور على جميع حروف العلة في سلسلة <code>quoteSample</code> . <strong>ملحوظة</strong> <br> تأكد من مطابقة حروف العلة العلوية والصغيرة. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن تجد كل الحروف المتحركة 25.
    testString: 'assert(result.length == 25, "You should find all 25 vowels.");'
  - text: يجب أن يستخدم regex <code>vowelRegex</code> فئة شخصية.
    testString: 'assert(/\[.*\]/.test(vowelRegex.source), "Your regex <code>vowelRegex</code> should use a character class.");'
  - text: يجب أن يستخدم regex <code>vowelRegex</code> العلم العام.
    testString: 'assert(vowelRegex.flags.match(/g/).length == 1, "Your regex <code>vowelRegex</code> should use the global flag.");'
  - text: يجب أن يستخدم <code>vowelRegex</code> regex <code>vowelRegex</code> علم حالة الأحرف.
    testString: 'assert(vowelRegex.flags.match(/i/).length == 1, "Your regex <code>vowelRegex</code> should use the case insensitive flag.");'
  - text: يجب ألا يطابق تعبيرك المعتاد أي أحرف ساكنة.
    testString: 'assert(!/[b-df-hj-np-tv-z]/gi.test(result.join()), "Your regex should not match any consonants.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /change/; // Change this line
let result = vowelRegex; // Change this line

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

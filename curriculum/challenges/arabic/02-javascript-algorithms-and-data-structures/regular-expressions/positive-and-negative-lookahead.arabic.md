---
id: 587d7dba367417b2b2512ba9
title: Positive and Negative Lookahead
challengeType: 1
videoUrl: ''
localeTitle: الإيجابية و السلبية Lookahead
---

## Description
<section id="description"> <code>Lookaheads</code> هي الأنماط التي تخبر جافا سكريبت أن ننظر إلى الأمام في السلسلة الخاصة بك للتحقق من وجود أنماط أخرى على طول. يمكن أن يكون ذلك مفيدًا عندما تريد البحث عن أنماط متعددة عبر نفس السلسلة. هناك نوعان من <code>lookaheads</code> : <code>positive lookahead</code> و <code>negative lookahead</code> . سوف ننظر <code>positive lookahead</code> للتأكد من وجود عنصر في نمط البحث ، ولكن لن تتطابق في الواقع. يتم استخدام lookahead إيجابية كما <code>(?=...)</code> حيث <code>...</code> هو الجزء المطلوب غير متطابق. من ناحية أخرى ، سوف ننظر <code>negative lookahead</code> للتأكد من عدم وجود عنصر في نمط البحث. يتم استخدام lookahead سلبي كما <code>(?!...)</code> حيث <code>...</code> هو النمط الذي لا تريد أن تكون هناك. يتم إرجاع بقية النمط إذا كان جزء lookahead السلبي غير موجود. Lookaheads مربكة بعض الشيء ولكن بعض الأمثلة سوف تساعد. <blockquote style=";text-align:right;direction:rtl"> ترك quit = &quot;qu&quot;؛ <br> let noquit = &quot;qt&quot;؛ <br> let quRegex = / q (؟ = u) /؛ <br> اترك qRegex = / q (؟! u) /؛ <br> quit.match (quRegex)؛ // Returns [&quot;q&quot;] <br> noquit.match (qRegex)؛ // Returns [&quot;q&quot;] </blockquote> استخدام أكثر عملية من <code>lookaheads</code> هو التحقق من اثنين أو أكثر من الأنماط في سلسلة واحدة. هنا مدقق كلمات مرور بسيط (بسذاجة) يبحث عن 3 إلى 6 أحرف ورقم واحد على الأقل: <blockquote style=";text-align:right;direction:rtl"> السماح بكلمة المرور = &quot;abc123&quot; ؛ <br> let checkPass = / (؟ = \ w {3،6}) (؟ = \ D * \ d) /؛ <br> checkPass.test (كلمة السر)؛ // يعود صحيح </blockquote></section>

## Instructions
<section id="instructions"> استخدم <code>lookaheads</code> في <code>pwRegex</code> لمطابقة كلمات المرور التي يزيد طولها عن 5 أحرف ولها رقمين متتاليين. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يستخدم <code>lookaheads</code> إيجابية.
    testString: 'assert(pwRegex.source.match(/\(\?=.*?\)\(\?=.*?\)/) !== null, "Your regex should use two positive <code>lookaheads</code>.");'
  - text: يجب ألا يتطابق تعبيرك العادي مع <code>&quot;astronaut&quot;</code>
    testString: 'assert(!pwRegex.test("astronaut"), "Your regex should not match <code>"astronaut"</code>");'
  - text: يجب ألا يتطابق تعبيرك العادي مع <code>&quot;airplanes&quot;</code>
    testString: 'assert(!pwRegex.test("airplanes"), "Your regex should not match <code>"airplanes"</code>");'
  - text: يجب ألا يتطابق التعبير العادي مع <code>&quot;banan1&quot;</code>
    testString: 'assert(!pwRegex.test("banan1"), "Your regex should not match <code>"banan1"</code>");'
  - text: يجب أن يتطابق <code>&quot;bana12&quot;</code> العادي مع <code>&quot;bana12&quot;</code>
    testString: 'assert(pwRegex.test("bana12"), "Your regex should match <code>"bana12"</code>");'
  - text: يجب أن يتطابق التعبير العادي مع <code>&quot;abc123&quot;</code>
    testString: 'assert(pwRegex.test("abc123"), "Your regex should match <code>"abc123"</code>");'
  - text: يجب ألا يتطابق التعبير العادي مع <code>&quot;123&quot;</code>
    testString: 'assert(!pwRegex.test("123"), "Your regex should not match <code>"123"</code>");'
  - text: يجب ألا يتطابق التعبير العادي مع <code>&quot;1234&quot;</code>
    testString: 'assert(!pwRegex.test("1234"), "Your regex should not match <code>"1234"</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let sampleWord = "astronaut";
let pwRegex = /change/; // Change this line
let result = pwRegex.test(sampleWord);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

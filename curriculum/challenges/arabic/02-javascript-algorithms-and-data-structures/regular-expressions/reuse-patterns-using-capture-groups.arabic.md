---
id: 587d7dbb367417b2b2512baa
title: Reuse Patterns Using Capture Groups
challengeType: 1
videoUrl: ''
localeTitle: إعادة استخدام الأنماط باستخدام مجموعات الالتقاط
---

## Description
<section id="description"> ستحدث بعض الأنماط التي تبحث عنها عدة مرات في سلسلة. من المبدد أن نكرر هذا التعبير المعتاد يدويًا. توجد طريقة أفضل لتحديد عندما يكون لديك سلاسل فرعية متعددة مكررة في السلسلة الخاصة بك. يمكنك البحث عن سلاسل فرعية مكررة باستخدام <code>capture groups</code> . يتم استخدام الأقواس ، <code>(</code> و <code>)</code> ، للعثور على أجزاء فرعية متكررة. يمكنك وضع تعبير النمط الذي سيتكرر بين الأقواس. لتحديد مكان ظهور سلسلة التكرار ، استخدم خط مائل عكسي ( <code>\</code> ) ثم رقمًا. يبدأ هذا الرقم من 1 ويزيد مع كل مجموعة التقاط إضافية تستخدمها. على سبيل المثال سيكون <code>\1</code> لمطابقة المجموعة الأولى. يتطابق المثال أدناه مع أي كلمة تحدث مرتين مفصولة بمسافة: <blockquote style=";text-align:right;direction:rtl"> let repeatStr = &quot;regex regex&quot;؛ <br> اترك repeatRegex = / (\ w +) \ s \ 1 /؛ <br> repeatRegex.test (repeatStr)؛ // يعود صحيح <br> repeatStr.match (repeatRegex)؛ // Returns [&quot;regex regex&quot;، &quot;regex&quot;] </blockquote> باستخدام أسلوب <code>.match()</code> على سلسلة سيعود مصفوفة مع السلسلة يطابق ، جنبا إلى جنب مع مجموعة الالتقاط الخاصة به. </section>

## Instructions
<section id="instructions"> استخدم <code>capture groups</code> في <code>reRegex</code> لمطابقة الأرقام التي يتم تكرارها ثلاث مرات فقط في سلسلة ، كل منها مفصولة بمسافة. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يستخدم تعبيرك المنطقي فئة الأحرف المختصرة للأرقام.
    testString: 'assert(reRegex.source.match(/\\d/), "Your regex should use the shorthand character class for digits.");'
  - text: يجب أن يعيد التعبير المعتاد مجموعة الالتقاط مرتين.
    testString: 'assert(reRegex.source.match(/\\\d/g).length === 2, "Your regex should reuse the capture group twice.");'
  - text: يجب أن يكون للتعبير العادي منطقتين تفصلان الأرقام الثلاثة.
    testString: 'assert(reRegex.source.match(/\\s/g).length === 2, "Your regex should have two spaces separating the three numbers.");'
  - text: يجب أن يتطابق تعبيرك العادي مع <code>&quot;42 42 42&quot;</code> .
    testString: 'assert(reRegex.test("42 42 42"), "Your regex should match <code>"42 42 42"</code>.");'
  - text: يجب أن يتطابق تعبيرك العادي مع <code>&quot;100 100 100&quot;</code> .
    testString: 'assert(reRegex.test("100 100 100"), "Your regex should match <code>"100 100 100"</code>.");'
  - text: يجب ألا يتطابق تعبيرك العادي مع <code>&quot;42 42 42 42&quot;</code> .
    testString: 'assert.equal(("42 42 42 42").match(reRegex.source), null, "Your regex should not match <code>"42 42 42 42"</code>.");'
  - text: يجب ألا يتطابق تعبيرك العادي مع <code>&quot;42 42&quot;</code> .
    testString: 'assert.equal(("42 42").match(reRegex.source), null, "Your regex should not match <code>"42 42"</code>.");'
  - text: يجب ألا يتطابق تعبيرك العادي مع <code>&quot;101 102 103&quot;</code> .
    testString: 'assert(!reRegex.test("101 102 103"), "Your regex should not match <code>"101 102 103"</code>.");'
  - text: يجب ألا يتطابق تعبيرك العادي مع <code>&quot;1 2 3&quot;</code> .
    testString: 'assert(!reRegex.test("1 2 3"), "Your regex should not match <code>"1 2 3"</code>.");'
  - text: يجب أن يتطابق تعبيرك العادي مع <code>&quot;10 10 10&quot;</code> .
    testString: 'assert(reRegex.test("10 10 10"), "Your regex should match <code>"10 10 10"</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let repeatNum = "42 42 42";
let reRegex = /change/; // Change this line
let result = reRegex.test(repeatNum);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

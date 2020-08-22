---
id: acda2fb1324d9b0fa741e6b5
title: Confirm the Ending
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: تأكيد الانتهاء
---

## Description
<section id="description"> تحقق مما إذا كانت سلسلة (الوسيطة الأولى ، <code>str</code> ) تنتهي بسلسلة الهدف المحددة (الوسيطة الثانية ، <code>target</code> ). <em>يمكن</em> حل هذا التحدي باستخدام طريقة <code>.endsWith()</code> ، التي تم تقديمها في ES2015. ولكن لغرض هذا التحدي ، نود منك استخدام إحدى طرق السلسلة الفرعية JavaScript بدلاً من ذلك. تذكر استخدام <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> إذا واجهتك مشكلة. اكتب الكود الخاص بك. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>confirmEnding(&quot;Bastian&quot;, &quot;n&quot;)</code> يجب أن ترجع true.'
    testString: 'assert(confirmEnding("Bastian", "n") === true, "<code>confirmEnding("Bastian", "n")</code> should return true.");'
  - text: '<code>confirmEnding(&quot;Congratulation&quot;, &quot;on&quot;)</code> يجب أن تعود إلى true.'
    testString: 'assert(confirmEnding("Congratulation", "on") === true, "<code>confirmEnding("Congratulation", "on")</code> should return true.");'
  - text: '<code>confirmEnding(&quot;Connor&quot;, &quot;n&quot;)</code> يجب أن ترجع false.'
    testString: 'assert(confirmEnding("Connor", "n") === false, "<code>confirmEnding("Connor", "n")</code> should return false.");'
  - text: '<code>confirmEnding(&quot;Walking on water and developing software from a specification are easy if both are frozen&quot;, &quot;specification&quot;)</code> يجب أن تعود خاطئة.'
    testString: 'assert(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") === false, "<code>confirmEnding("Walking on water and developing software from a specification are easy if both are frozen"&#44; "specification"&#41;</code> should return false.");'
  - text: '<code>confirmEnding(&quot;He has to give me a new name&quot;, &quot;name&quot;)</code> يجب أن <code>confirmEnding(&quot;He has to give me a new name&quot;, &quot;name&quot;)</code> .'
    testString: 'assert(confirmEnding("He has to give me a new name", "name") === true, "<code>confirmEnding("He has to give me a new name", "name")</code> should return true.");'
  - text: '<code>confirmEnding(&quot;Open sesame&quot;, &quot;same&quot;)</code> يجب أن ترجع true.'
    testString: 'assert(confirmEnding("Open sesame", "same") === true, "<code>confirmEnding("Open sesame", "same")</code> should return true.");'
  - text: '<code>confirmEnding(&quot;Open sesame&quot;, &quot;pen&quot;)</code> يجب أن يقوم بإرجاع false.'
    testString: 'assert(confirmEnding("Open sesame", "pen") === false, "<code>confirmEnding("Open sesame", "pen")</code> should return false.");'
  - text: '<code>confirmEnding(&quot;Open sesame&quot;, &quot;game&quot;)</code> يجب أن ترجع false.'
    testString: 'assert(confirmEnding("Open sesame", "game") === false, "<code>confirmEnding("Open sesame", "game")</code> should return false.");'
  - text: '<code>confirmEnding(&quot;If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing&quot;, &quot;mountain&quot;)</code> يجب أن تعود كاذبة.'
    testString: 'assert(confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") === false, "<code>confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain")</code> should return false.");'
  - text: '<code>confirmEnding(&quot;Abstraction&quot;, &quot;action&quot;)</code> يجب أن <code>confirmEnding(&quot;Abstraction&quot;, &quot;action&quot;)</code> true.'
    testString: 'assert(confirmEnding("Abstraction", "action") === true, "<code>confirmEnding("Abstraction", "action")</code> should return true.");'
  - text: لا تستخدم الأسلوب <code>.endsWith()</code> لحل التحدي.
    testString: 'assert(!(/\.endsWith\(.*?\)\s*?;?/.test(code)) && !(/\["endsWith"\]/.test(code)), "Do not use the built-in method <code>.endsWith()</code> to solve the challenge.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  return str;
}

confirmEnding("Bastian", "n");

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

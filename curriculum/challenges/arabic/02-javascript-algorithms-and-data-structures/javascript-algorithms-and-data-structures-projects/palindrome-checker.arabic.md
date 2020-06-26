---
id: aaa48de84e1ecc7c742e1124
title: Palindrome Checker
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: ''
---

## Description
<section id="description"> قم بإرجاع <code>true</code> إذا كانت السلسلة المحددة متناظرة. خلاف ذلك ، تعود <code>false</code> . النص <dfn>المتناظر</dfn> هو كلمة أو جملة مكتوبة بنفس الطريقة إلى الأمام والخلف ، وتتجاهل علامات الترقيم والحالة والتباعد. <strong>ملحوظة</strong> <br> ستحتاج إلى إزالة <strong>جميع الأحرف غير الأبجدية الرقمية</strong> (علامات الترقيم والمسافات والرموز) وتحويل كل شيء إلى الحالة نفسها (الحالة السفلية أو العلوية) من أجل التحقق من التباين. سنقوم بتمرير سلاسل بأشكال مختلفة ، مثل <code>&quot;racecar&quot;</code> و <code>&quot;RaceCar&quot;</code> و <code>&quot;race CAR&quot;</code> وغيرها. سنقوم أيضًا بتمرير سلاسل مع رموز خاصة ، مثل <code>&quot;2A3*3a2&quot;</code> و <code>&quot;2A3 3a2&quot;</code> و <code>&quot;2_A3*3#A2&quot;</code> . تذكر استخدام <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> إذا واجهتك مشكلة. اكتب الكود الخاص بك. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: يجب أن يعيد <code>palindrome(&quot;eye&quot;)</code> قيمة منطقية.
    testString: 'assert(typeof palindrome("eye") === "boolean", "<code>palindrome("eye")</code> should return a boolean.");'
  - text: <code>palindrome(&quot;eye&quot;)</code> يجب أن تعود حقيقية.
    testString: 'assert(palindrome("eye") === true, "<code>palindrome("eye")</code> should return true.");'
  - text: <code>palindrome(&quot;_eye&quot;)</code> يجب أن ترجع true.
    testString: 'assert(palindrome("_eye") === true, "<code>palindrome("_eye")</code> should return true.");'
  - text: <code>palindrome(&quot;race car&quot;)</code> يجب أن تعود حقيقية.
    testString: 'assert(palindrome("race car") === true, "<code>palindrome("race car")</code> should return true.");'
  - text: <code>palindrome(&quot;not a palindrome&quot;)</code> يجب أن يقوم بإرجاع false.
    testString: 'assert(palindrome("not a palindrome") === false, "<code>palindrome("not a palindrome")</code> should return false.");'
  - text: '<code>palindrome(&quot;A man, a plan, a canal. Panama&quot;)</code> يجب أن تعود حقيقية.'
    testString: 'assert(palindrome("A man, a plan, a canal. Panama") === true, "<code>palindrome("A man, a plan, a canal. Panama")</code> should return true.");'
  - text: <code>palindrome(&quot;never odd or even&quot;)</code> يجب أن يُرجع صحيحًا.
    testString: 'assert(palindrome("never odd or even") === true, "<code>palindrome("never odd or even")</code> should return true.");'
  - text: يجب أن ترجع <code>palindrome(&quot;nope&quot;)</code> false.
    testString: 'assert(palindrome("nope") === false, "<code>palindrome("nope")</code> should return false.");'
  - text: <code>palindrome(&quot;almostomla&quot;)</code> يجب أن يقوم بإرجاع false.
    testString: 'assert(palindrome("almostomla") === false, "<code>palindrome("almostomla")</code> should return false.");'
  - text: '<code>palindrome(&quot;My age is 0, 0 si ega ym.&quot;)</code> يجب أن <code>palindrome(&quot;My age is 0, 0 si ega ym.&quot;)</code> true.'
    testString: 'assert(palindrome("My age is 0, 0 si ega ym.") === true, "<code>palindrome("My age is 0, 0 si ega ym.")</code> should return true.");'
  - text: <code>palindrome(&quot;1 eye for of 1 eye.&quot;)</code> يجب أن تعود خاطئة.
    testString: 'assert(palindrome("1 eye for of 1 eye.") === false, "<code>palindrome("1 eye for of 1 eye.")</code> should return false.");'
  - text: '<code>palindrome(&quot;0_0 (: /-\ :) 0-0&quot;)</code> يجب أن ترجع true.'
    testString: 'assert(palindrome("0_0 (: /-\ :) 0-0") === true, "<code>palindrome("0_0 (: /-\ :) 0-0")</code> should return true.");'
  - text: <code>palindrome(&quot;five|\_/|four&quot;)</code> يجب أن يقوم بإرجاع false.
    testString: 'assert(palindrome("five|\_/|four") === false, "<code>palindrome("five|\_/|four")</code> should return false.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function palindrome(str) {
  // Good luck!
  return true;
}



palindrome("eye");

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

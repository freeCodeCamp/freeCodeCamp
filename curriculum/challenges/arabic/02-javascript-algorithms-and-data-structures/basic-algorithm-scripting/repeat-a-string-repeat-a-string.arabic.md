---
id: afcc8d540bea9ea2669306b6
title: Repeat a String Repeat a String
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: كرر سلسلة يكرر سلسلة
---

## Description
<section id="description"> كرر <code>str</code> سلسلة معينة (الوسيطة الأولى) لـ <code>num</code> times (الوسيطة الثانية). إرجاع سلسلة فارغة إذا لم تكن <code>num</code> رقم موجب. تذكر استخدام <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> إذا واجهتك مشكلة. اكتب الكود الخاص بك. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'يجب أن ترجع <code>repeatStringNumTimes(&quot;*&quot;, 3)</code> <code>&quot;***&quot;</code> .'
    testString: 'assert(repeatStringNumTimes("*", 3) === "***", "<code>repeatStringNumTimes("*", 3)</code> should return <code>"***"</code>.");'
  - text: 'يجب أن ترجع <code>repeatStringNumTimes(&quot;abc&quot;, 3)</code> <code>&quot;abcabcabc&quot;</code> .'
    testString: 'assert(repeatStringNumTimes("abc", 3) === "abcabcabc", "<code>repeatStringNumTimes("abc", 3)</code> should return <code>"abcabcabc"</code>.");'
  - text: 'يجب أن ترجع <code>repeatStringNumTimes(&quot;abc&quot;, 4)</code> <code>&quot;abcabcabcabc&quot;</code> .'
    testString: 'assert(repeatStringNumTimes("abc", 4) === "abcabcabcabc", "<code>repeatStringNumTimes("abc", 4)</code> should return <code>"abcabcabcabc"</code>.");'
  - text: 'يجب أن ترجع <code>repeatStringNumTimes(&quot;abc&quot;, 1)</code> <code>&quot;abc&quot;</code> .'
    testString: 'assert(repeatStringNumTimes("abc", 1) === "abc", "<code>repeatStringNumTimes("abc", 1)</code> should return <code>"abc"</code>.");'
  - text: 'يجب أن ترجع <code>repeatStringNumTimes(&quot;*&quot;, 8)</code> <code>&quot;********&quot;</code> .'
    testString: 'assert(repeatStringNumTimes("*", 8) === "********", "<code>repeatStringNumTimes("*", 8)</code> should return <code>"********"</code>.");'
  - text: 'يجب أن ترجع <code>repeatStringNumTimes(&quot;abc&quot;, -2)</code> <code>&quot;&quot;</code> .'
    testString: 'assert(repeatStringNumTimes("abc", -2) === "", "<code>repeatStringNumTimes("abc", -2)</code> should return <code>""</code>.");'
  - text: لا يجب استخدام <code>repeat()</code> المدمج <code>repeat()</code> -method
    testString: 'assert(!/\.repeat/g.test(code), "The built-in <code>repeat()</code>-method should not be used");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function repeatStringNumTimes(str, num) {
  // repeat after me
  return str;
}

repeatStringNumTimes("abc", 3);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>

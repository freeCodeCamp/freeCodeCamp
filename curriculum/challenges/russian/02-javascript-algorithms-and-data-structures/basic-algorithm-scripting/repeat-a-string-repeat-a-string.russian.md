---
id: afcc8d540bea9ea2669306b6
title: Repeat a String Repeat a String
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: Повторить строку Повторить строку
---

## Description
<section id="description"> Повторите заданную строку <code>str</code> (первый аргумент) для <code>num</code> times (второй аргумент). Верните пустую строку, если <code>num</code> не является положительным числом. Не забудьте использовать <a href="http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514" target="_blank">Read-Search-Ask,</a> если вы застряли. Напишите свой собственный код. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>repeatStringNumTimes(&quot;*&quot;, 3)</code> должен возвращать <code>&quot;***&quot;</code> .'
    testString: 'assert(repeatStringNumTimes("*", 3) === "***", "<code>repeatStringNumTimes("*", 3)</code> should return <code>"***"</code>.");'
  - text: ''
    testString: 'assert(repeatStringNumTimes("abc", 3) === "abcabcabc", "<code>repeatStringNumTimes("abc", 3)</code> should return <code>"abcabcabc"</code>.");'
  - text: '<code>repeatStringNumTimes(&quot;abc&quot;, 4)</code> должен возвращать <code>&quot;abcabcabcabc&quot;</code> .'
    testString: 'assert(repeatStringNumTimes("abc", 4) === "abcabcabcabc", "<code>repeatStringNumTimes("abc", 4)</code> should return <code>"abcabcabcabc"</code>.");'
  - text: '<code>repeatStringNumTimes(&quot;abc&quot;, 1)</code> должен возвращать <code>&quot;abc&quot;</code> .'
    testString: 'assert(repeatStringNumTimes("abc", 1) === "abc", "<code>repeatStringNumTimes("abc", 1)</code> should return <code>"abc"</code>.");'
  - text: '<code>repeatStringNumTimes(&quot;*&quot;, 8)</code> должен возвращать <code>&quot;********&quot;</code> .'
    testString: 'assert(repeatStringNumTimes("*", 8) === "********", "<code>repeatStringNumTimes("*", 8)</code> should return <code>"********"</code>.");'
  - text: '<code>repeatStringNumTimes(&quot;abc&quot;, -2)</code> должен возвращать <code>&quot;&quot;</code> .'
    testString: 'assert(repeatStringNumTimes("abc", -2) === "", "<code>repeatStringNumTimes("abc", -2)</code> should return <code>""</code>.");'
  - text: Нельзя использовать встроенный метод <code>repeat()</code>
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

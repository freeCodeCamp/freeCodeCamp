---
id: afcc8d540bea9ea2669306b6
title: Repeat a String Repeat a String
isRequired: true
challengeType: 5
forumTopicId: 16041
localeTitle: Повторить строку Повторить строку
---

## Description
<section id='description'>
Повторите заданную строку <code>str</code> (первый аргумент) для <code>num</code> times (второй аргумент). Верните пустую строку, если <code>num</code> не является положительным числом. Не забудьте использовать <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask,</a> если вы застряли. Напишите свой собственный код.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>repeatStringNumTimes("*", 3)</code> should return <code>"***"</code>.
    testString: assert(repeatStringNumTimes("*", 3) === "***");
  - text: <code>repeatStringNumTimes("abc", 3)</code> should return <code>"abcabcabc"</code>.
    testString: assert(repeatStringNumTimes("abc", 3) === "abcabcabc");
  - text: <code>repeatStringNumTimes("abc", 4)</code> should return <code>"abcabcabcabc"</code>.
    testString: assert(repeatStringNumTimes("abc", 4) === "abcabcabcabc");
  - text: <code>repeatStringNumTimes("abc", 1)</code> should return <code>"abc"</code>.
    testString: assert(repeatStringNumTimes("abc", 1) === "abc");
  - text: <code>repeatStringNumTimes("*", 8)</code> should return <code>"********"</code>.
    testString: assert(repeatStringNumTimes("*", 8) === "********");
  - text: <code>repeatStringNumTimes("abc", -2)</code> should return <code>""</code>.
    testString: assert(repeatStringNumTimes("abc", -2) === "");
  - text: The built-in <code>repeat()</code> method should not be used.
    testString: assert(!/\.repeat/g.test(code));
  - text: <code>repeatStringNumTimes("abc", 0)</code> should return <code>""</code>.
    testString: assert(repeatStringNumTimes("abc", 0) === "");

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
function repeatStringNumTimes(str, num) {
  if (num < 1) return '';
  return num === 1 ? str : str + repeatStringNumTimes(str, num-1);
}

repeatStringNumTimes("abc", 3);
```

</section>

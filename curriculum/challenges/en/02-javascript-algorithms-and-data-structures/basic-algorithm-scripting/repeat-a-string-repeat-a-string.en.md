---
id: afcc8d540bea9ea2669306b6
title: Repeat a String Repeat a String
isRequired: true
challengeType: 5
---

## Description
<section id='description'>
Repeat a given string <code>str</code> (first argument) for <code>num</code> times (second argument). Return an empty string if <code>num</code> is not a positive number.
Remember to use <a href="http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514" target="_blank">Read-Search-Ask</a> if you get stuck. Write your own code.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
- text: '<code>repeatStringNumTimes("*", 3)</code> should return <code>"***"</code>.'
  testString: 'assert(repeatStringNumTimes("*", 3) === "***", ''<code>repeatStringNumTimes("*", 3)</code> should return <code>"***"</code>.'');'
- text: '<code>repeatStringNumTimes("abc", 3)</code> should return <code>"abcabcabc"</code>.'
  testString: 'assert(repeatStringNumTimes("abc", 3) === "abcabcabc", ''<code>repeatStringNumTimes("abc", 3)</code> should return <code>"abcabcabc"</code>.'');'
- text: '<code>repeatStringNumTimes("abc", 4)</code> should return <code>"abcabcabcabc"</code>.'
  testString: 'assert(repeatStringNumTimes("abc", 4) === "abcabcabcabc", ''<code>repeatStringNumTimes("abc", 4)</code> should return <code>"abcabcabcabc"</code>.'');'
- text: '<code>repeatStringNumTimes("abc", 1)</code> should return <code>"abc"</code>.'
  testString: 'assert(repeatStringNumTimes("abc", 1) === "abc", ''<code>repeatStringNumTimes("abc", 1)</code> should return <code>"abc"</code>.'');'
- text: '<code>repeatStringNumTimes("*", 8)</code> should return <code>"********"</code>.'
  testString: 'assert(repeatStringNumTimes("*", 8) === "********", ''<code>repeatStringNumTimes("*", 8)</code> should return <code>"********"</code>.'');'
- text: '<code>repeatStringNumTimes("abc", -2)</code> should return <code>""</code>.'
  testString: 'assert(repeatStringNumTimes("abc", -2) === "", ''<code>repeatStringNumTimes("abc", -2)</code> should return <code>""</code>.'');'
- text: The built-in <code>repeat()</code>-method should not be used
  testString: 'assert(!/\.repeat/g.test(code), ''The built-in <code>repeat()</code>-method should not be used'');'

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
  if (num < 0) return '';
  return num === 1 ? str : str + repeatStringNumTimes(str, num-1);
}

repeatStringNumTimes("abc", 3);

```

</section>

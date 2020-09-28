---
id: afcc8d540bea9ea2669306b6
title: Repeat a String Repeat a String
challengeType: 5
forumTopicId: 16041
---

## Description
<section id='description'>
Repeat a given string <code>str</code> (first argument) for <code>num</code> times (second argument). Return an empty string if <code>num</code> is not a positive number.
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
  - text:  <code>repeatStringNumTimes("abc", 0)</code> should return <code>""</code>.
    testString: assert(repeatStringNumTimes("abc", 0) === "");
    
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function repeatStringNumTimes(str, num) {
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

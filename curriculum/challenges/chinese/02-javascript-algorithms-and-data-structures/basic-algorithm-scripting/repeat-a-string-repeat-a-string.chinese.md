---
id: afcc8d540bea9ea2669306b6
title: Repeat a String Repeat a String
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: 重复一个字符串重复字符串
---

## Description
<section id="description">为<code>num</code> times（第二个参数）重复给定的字符串<code>str</code> （第一个参数）。如果<code>num</code>不是正数，则返回空字符串。如果卡住，请记得使用<a href="https://www.freecodecamp.org/forum/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> 。编写自己的代码。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>repeatStringNumTimes(&quot;*&quot;, 3)</code>应该返回<code>&quot;***&quot;</code> 。'
    testString: 'assert(repeatStringNumTimes("*", 3) === "***", "<code>repeatStringNumTimes("*", 3)</code> should return <code>"***"</code>.");'
  - text: '<code>repeatStringNumTimes(&quot;abc&quot;, 3)</code>应该返回<code>&quot;abcabcabc&quot;</code> 。'
    testString: 'assert(repeatStringNumTimes("abc", 3) === "abcabcabc", "<code>repeatStringNumTimes("abc", 3)</code> should return <code>"abcabcabc"</code>.");'
  - text: '<code>repeatStringNumTimes(&quot;abc&quot;, 4)</code>应返回<code>&quot;abcabcabcabc&quot;</code> 。'
    testString: 'assert(repeatStringNumTimes("abc", 4) === "abcabcabcabc", "<code>repeatStringNumTimes("abc", 4)</code> should return <code>"abcabcabcabc"</code>.");'
  - text: '<code>repeatStringNumTimes(&quot;abc&quot;, 1)</code>应该返回<code>&quot;abc&quot;</code> 。'
    testString: 'assert(repeatStringNumTimes("abc", 1) === "abc", "<code>repeatStringNumTimes("abc", 1)</code> should return <code>"abc"</code>.");'
  - text: '<code>repeatStringNumTimes(&quot;*&quot;, 8)</code>应该返回<code>&quot;********&quot;</code> 。'
    testString: 'assert(repeatStringNumTimes("*", 8) === "********", "<code>repeatStringNumTimes("*", 8)</code> should return <code>"********"</code>.");'
  - text: '<code>repeatStringNumTimes(&quot;abc&quot;, -2)</code>应返回<code>&quot;&quot;</code> 。'
    testString: 'assert(repeatStringNumTimes("abc", -2) === "", "<code>repeatStringNumTimes("abc", -2)</code> should return <code>""</code>.");'
  - text: 不应使用内置的<code>repeat()</code>方法
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

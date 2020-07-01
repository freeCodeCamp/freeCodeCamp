---
id: afcc8d540bea9ea2669306b6
title: Repeat a String Repeat a String
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: Repetir una cadena Repetir una cadena
---

## Description
<section id="description"> Repetir una determinada cadena <code>str</code> (primer argumento) para <code>num</code> veces (segundo argumento). Devuelve una cadena vacía si <code>num</code> no es un número positivo. Recuerda usar <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> si te atascas. Escribe tu propio código. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>repeatStringNumTimes(&quot;*&quot;, 3)</code> debe devolver <code>&quot;***&quot;</code> .'
    testString: 'assert(repeatStringNumTimes("*", 3) === "***", "<code>repeatStringNumTimes("*", 3)</code> should return <code>"***"</code>.");'
  - text: '<code>repeatStringNumTimes(&quot;abc&quot;, 3)</code> debe devolver <code>&quot;abcabcabc&quot;</code> .'
    testString: 'assert(repeatStringNumTimes("abc", 3) === "abcabcabc", "<code>repeatStringNumTimes("abc", 3)</code> should return <code>"abcabcabc"</code>.");'
  - text: '<code>repeatStringNumTimes(&quot;abc&quot;, 4)</code> debe devolver <code>&quot;abcabcabcabc&quot;</code> .'
    testString: 'assert(repeatStringNumTimes("abc", 4) === "abcabcabcabc", "<code>repeatStringNumTimes("abc", 4)</code> should return <code>"abcabcabcabc"</code>.");'
  - text: '<code>repeatStringNumTimes(&quot;abc&quot;, 1)</code> debe devolver <code>&quot;abc&quot;</code> .'
    testString: 'assert(repeatStringNumTimes("abc", 1) === "abc", "<code>repeatStringNumTimes("abc", 1)</code> should return <code>"abc"</code>.");'
  - text: '<code>repeatStringNumTimes(&quot;*&quot;, 8)</code> debe devolver <code>&quot;********&quot;</code> .'
    testString: 'assert(repeatStringNumTimes("*", 8) === "********", "<code>repeatStringNumTimes("*", 8)</code> should return <code>"********"</code>.");'
  - text: '<code>repeatStringNumTimes(&quot;abc&quot;, -2)</code> debe devolver <code>&quot;&quot;</code> .'
    testString: 'assert(repeatStringNumTimes("abc", -2) === "", "<code>repeatStringNumTimes("abc", -2)</code> should return <code>""</code>.");'
  - text: El método <code>repeat()</code> incorporado no debe utilizarse
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

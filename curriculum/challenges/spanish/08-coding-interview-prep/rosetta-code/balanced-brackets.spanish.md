---
title: Balanced brackets
id: 594dc6c729e5700999302b45
localeTitle: 594dc6c729e5700999302b45
challengeType: 5
---

## Description
<section id='description'> 
<p> Determine si una cadena generada de corchetes está equilibrada; es decir, si consiste completamente en pares de paréntesis de apertura / cierre (en ese orden), ninguno de los cuales se equivoca. </p> 
Ejemplos: 
<p class='rosetta__paragraph'> (vacío) verdadero </p> 
<p class='rosetta__paragraph'> <code>[]</code> verdadero </p> 
<p class='rosetta__paragraph'> <code>][</code> falso </p> 
<p class='rosetta__paragraph'> <code>[][]</code> verdadero </p> 
<p class='rosetta__paragraph'> <code>][][</code> falso </p> 
<p class='rosetta__paragraph'> <code>[]][[]</code> falso </p> 
<p class='rosetta__paragraph'> <code>[[[[]]]]</code> verdadero </p> 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>isBalanced</code> es una función.
    testString: 'assert(typeof isBalanced === "function", "<code>isBalanced</code> is a function.");'
  - text: &#39; <code>isBalanced(&quot;[]&quot;)</code> debe devolver verdadero.&#39;
    testString: 'assert(isBalanced(testCases[0]), "<code>isBalanced("[]")</code> should return true.");'
  - text: &#39; <code>isBalanced(&quot;]][[[][][][]][&quot;)</code> debe devolver falso.&#39;
    testString: 'assert(!isBalanced(testCases[1]), "<code>isBalanced("]][[[][][][]][")</code> should return false.");'
  - text: &#39; <code>isBalanced(&quot;[][[[[][][[[]]]]]]&quot;)</code> debe devolver verdadero).
    testString: 'assert(isBalanced(testCases[2]), "<code>isBalanced("[][[[[][][[[]]]]]]")</code> should return true.");'
  - text: &#39; <code>isBalanced(&quot;][&quot;)</code> debe devolver verdadero.&#39;
    testString: 'assert(!isBalanced(testCases[3]), "<code>isBalanced("][")</code> should return true.");'
  - text: &#39; <code>isBalanced(&quot;[[[]]]][[]&quot;)</code> debe devolver verdadero.&#39;
    testString: 'assert(!isBalanced(testCases[4]), "<code>isBalanced("[[[]]]][[]")</code> should return true.");'
  - text: &#39; <code>isBalanced(&quot;][[]&quot;)</code> debe devolver verdadero.&#39;
    testString: 'assert(!isBalanced(testCases[5]), "<code>isBalanced("][[]")</code> should return true.");'
  - text: &#39; <code>isBalanced(&quot;][[][]][[[]]&quot;)</code> debe devolver verdadero.&#39;
    testString: 'assert(!isBalanced(testCases[6]), "<code>isBalanced("][[][]][[[]]")</code> should return true.");'
  - text: &#39; <code>isBalanced(&quot;[[][]]][&quot;)</code> debe devolver verdadero.&#39;
    testString: 'assert(!isBalanced(testCases[7]), "<code>isBalanced("[[][]]][")</code> should return true.");'
  - text: &#39; <code>isBalanced(&quot;[[[]]][[]]]][][[&quot;)</code> debería devolver true.&#39;
    testString: 'assert(!isBalanced(testCases[8]), "<code>isBalanced("[[[]]][[]]]][][[")</code> should return true.");'
  - text: &#39; <code>isBalanced(&quot;[]][[]]][[[[][]]&quot;)</code> debe devolver verdadero.&#39;
    testString: 'assert(!isBalanced(testCases[9]), "<code>isBalanced("[]][[]]][[[[][]]")</code> should return true.");'
  - text: &#39; <code>isBalanced(&quot;][]][[][&quot;)</code> debe devolver verdadero.&#39;
    testString: 'assert(!isBalanced(testCases[10]), "<code>isBalanced("][]][[][")</code> should return true.");'
  - text: &#39; <code>isBalanced(&quot;[[]][[][]]&quot;)</code> debe devolver verdadero.&#39;
    testString: 'assert(isBalanced(testCases[11]), "<code>isBalanced("[[]][[][]]")</code> should return true.");'
  - text: &#39; <code>isBalanced(&quot;[[]]&quot;)</code> debe devolver verdadero.&#39;
    testString: 'assert(isBalanced(testCases[12]), "<code>isBalanced("[[]]")</code> should return true.");'
  - text: &#39; <code>isBalanced(&quot;]][]][[]][[[&quot;)</code> debe devolver verdadero &quot;.
    testString: 'assert(!isBalanced(testCases[13]), "<code>isBalanced("]][]][[]][[[")</code> should return true.");'
  - text: &#39; <code>isBalanced(&quot;][]][][[&quot;)</code> debería devolver verdadero.&#39;
    testString: 'assert(!isBalanced(testCases[14]), "<code>isBalanced("][]][][[")</code> should return true.");'
  - text: &#39; <code>isBalanced(&quot;][][&quot;)</code> debe devolver verdadero.&#39;
    testString: 'assert(!isBalanced(testCases[15]), "<code>isBalanced("][][")</code> should return true.");'
  - text: &#39; <code>isBalanced(&quot;[[]]][][][[]][&quot;)</code> debe devolver verdadero.&#39;
    testString: 'assert(!isBalanced(testCases[16]), "<code>isBalanced("[[]]][][][[]][")</code> should return true.");'
  - text: <code>isBalanced(&quot;&quot;)</code> debe devolver true.
    testString: 'assert(isBalanced(testCases[17]), "<code>isBalanced("")</code> should return true.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function isBalanced (str) {
  // Good luck!
  return true;
}
```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>


```js
function isBalanced (str) {
  if (str === ") return true;
  let a = str;
  let b;
  do {
    b = a;
    a = a.replace(/\[\]/g, ");
  } while (a !== b);
  return !a;
}

```

</section>

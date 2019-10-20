---
title: Balanced brackets
id: 594dc6c729e5700999302b45
challengeType: 5
videoUrl: ''
localeTitle: Suportes equilibrados
---

## Description
<section id="description"><p> Determine se uma string gerada de colchetes é balanceada; isto é, se consiste inteiramente de pares de parênteses de abertura / fechamento (nessa ordem), nenhum dos quais errar. </p> Exemplos: <p class="rosetta__paragraph"> (vazio) verdadeiro </p><p class="rosetta__paragraph"> <code>[]</code> verdadeiro </p><p class="rosetta__paragraph"> <code>][</code> falso </p><p class="rosetta__paragraph"> <code>[][]</code> verdadeiro </p><p class="rosetta__paragraph"> <code>][][</code> falso </p><p class="rosetta__paragraph"> <code>[]][[]</code> falso </p><p class="rosetta__paragraph"> <code>[[[[]]]]</code> verdadeiro </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>isBalanced</code> é uma função.
    testString: 'assert(typeof isBalanced === "function", "<code>isBalanced</code> is a function.");'
  - text: '<code>isBalanced(&quot;[]&quot;)</code> deve retornar true.'
    testString: 'assert(isBalanced(testCases[0]), "<code>isBalanced("[]")</code> should return true.");'
  - text: '<code>isBalanced(&quot;]][[[][][][]][&quot;)</code> deve retornar false.'
    testString: 'assert(!isBalanced(testCases[1]), "<code>isBalanced("]][[[][][][]][")</code> should return false.");'
  - text: '<code>isBalanced(&quot;[][[[[][][[[]]]]]]&quot;)</code> deve retornar true.'
    testString: 'assert(isBalanced(testCases[2]), "<code>isBalanced("[][[[[][][[[]]]]]]")</code> should return true.");'
  - text: '<code>isBalanced(&quot;][&quot;)</code> deve retornar true.'
    testString: 'assert(!isBalanced(testCases[3]), "<code>isBalanced("][")</code> should return true.");'
  - text: '<code>isBalanced(&quot;[[[]]]][[]&quot;)</code> deve retornar true.'
    testString: 'assert(!isBalanced(testCases[4]), "<code>isBalanced("[[[]]]][[]")</code> should return true.");'
  - text: '<code>isBalanced(&quot;][[]&quot;)</code> deve retornar true.'
    testString: 'assert(!isBalanced(testCases[5]), "<code>isBalanced("][[]")</code> should return true.");'
  - text: '<code>isBalanced(&quot;][[][]][[[]]&quot;)</code> deve retornar true.'
    testString: 'assert(!isBalanced(testCases[6]), "<code>isBalanced("][[][]][[[]]")</code> should return true.");'
  - text: '<code>isBalanced(&quot;[[][]]][&quot;)</code> deve retornar true.'
    testString: 'assert(!isBalanced(testCases[7]), "<code>isBalanced("[[][]]][")</code> should return true.");'
  - text: '<code>isBalanced(&quot;[[[]]][[]]]][][[&quot;)</code> deve retornar true.'
    testString: 'assert(!isBalanced(testCases[8]), "<code>isBalanced("[[[]]][[]]]][][[")</code> should return true.");'
  - text: '<code>isBalanced(&quot;[]][[]]][[[[][]]&quot;)</code> deve retornar true.'
    testString: 'assert(!isBalanced(testCases[9]), "<code>isBalanced("[]][[]]][[[[][]]")</code> should return true.");'
  - text: '<code>isBalanced(&quot;][]][[][&quot;)</code> deve retornar true.'
    testString: 'assert(!isBalanced(testCases[10]), "<code>isBalanced("][]][[][")</code> should return true.");'
  - text: '<code>isBalanced(&quot;[[]][[][]]&quot;)</code> deve retornar true.'
    testString: 'assert(isBalanced(testCases[11]), "<code>isBalanced("[[]][[][]]")</code> should return true.");'
  - text: '<code>isBalanced(&quot;[[]]&quot;)</code> deve retornar true.'
    testString: 'assert(isBalanced(testCases[12]), "<code>isBalanced("[[]]")</code> should return true.");'
  - text: '<code>isBalanced(&quot;]][]][[]][[[&quot;)</code> deve retornar true.'
    testString: 'assert(!isBalanced(testCases[13]), "<code>isBalanced("]][]][[]][[[")</code> should return true.");'
  - text: '<code>isBalanced(&quot;][]][][[&quot;)</code> deve retornar true.'
    testString: 'assert(!isBalanced(testCases[14]), "<code>isBalanced("][]][][[")</code> should return true.");'
  - text: '<code>isBalanced(&quot;][][&quot;)</code> deve retornar true.'
    testString: 'assert(!isBalanced(testCases[15]), "<code>isBalanced("][][")</code> should return true.");'
  - text: '<code>isBalanced(&quot;[[]]][][][[]][&quot;)</code> deve retornar true.'
    testString: 'assert(!isBalanced(testCases[16]), "<code>isBalanced("[[]]][][][[]][")</code> should return true.");'
  - text: <code>isBalanced(&quot;&quot;)</code> deve retornar true.
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
// solution required
```
</section>

---
title: Hofstadter Q sequence
id: 59637c4d89f6786115efd814
challengeType: 5
videoUrl: ''
localeTitle: Последовательность Хофстадтера Q
---

## Description
<section id="description"><p> Последовательность <a href="https://en.wikipedia.org/wiki/Hofstadter_sequence#Hofstadter_Q_sequence" title="wp: Hofstadter_sequence # Hofstadter_Q_sequence">Hofstadter Q</a> определяется как: </p><p> $ Q (1) = Q (2) = 1, \\ Q (n) = Q \ big (nQ (n-1) \ big) + Q \ big (nQ (n-2)), \ quad n&gt; 2. $ </p><p> Он определен как <a href="http://rosettacode.org/wiki/Fibonacci sequence" title="Последовательность Фибоначчи">последовательность Фибоначчи</a> , но в то время как следующий член в последовательности Фибоначчи представляет собой сумму двух предыдущих членов, в последовательности Q предыдущие два члена говорят вам, как далеко вернуться в последовательность Q, чтобы найти два числа суммировать, чтобы сделать следующий член последовательности. </p> Задача: Внедрить уравнение Хоффстадтера Q Sequence в JavaScript </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>hofstadterQ</code> является функцией.
    testString: 'assert(typeof hofstadterQ === "function", "<code>hofstadterQ</code> is a function.");'
  - text: <code>hofstadterQ()</code> должен возвращать <code>integer</code>
    testString: 'assert(Number.isInteger(hofstadterQ(1000)), "<code>hofstadterQ()</code> should return <code>integer</code>");'
  - text: <code>hofstadterQ(1000)</code> должен вернуть <code>502</code>
    testString: 'assert.equal(hofstadterQ(testCase[0]), res[0], "<code>hofstadterQ(1000)</code> should return <code>502</code>");'
  - text: <code>hofstadterQ(1500)</code> должен вернуть <code>755</code>
    testString: 'assert.equal(hofstadterQ(testCase[1]), res[1], "<code>hofstadterQ(1500)</code> should return <code>755</code>");'
  - text: <code>hofstadterQ(2000)</code> должен вернуть <code>1005</code>
    testString: 'assert.equal(hofstadterQ(testCase[2]), res[2], "<code>hofstadterQ(2000)</code> should return <code>1005</code>");'
  - text: <code>hofstadterQ(2500)</code> должен вернуть <code>1261</code>
    testString: 'assert.equal(hofstadterQ(testCase[3]), res[3], "<code>hofstadterQ(2500)</code> should return <code>1261</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function hofstadterQ (n) {
  // Good luck!
  return n;
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

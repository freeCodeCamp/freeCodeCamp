---
title: Hofstadter Q sequence
id: 59637c4d89f6786115efd814
challengeType: 5
forumTopicId: 302287
---

## Description
<section id='description'>
The <a href="https://en.wikipedia.org/wiki/Hofstadter_sequence#Hofstadter_Q_sequence" title="wp: Hofstadter_sequence#Hofstadter_Q_sequence" target="_blank">Hofstadter Q sequence</a> is defined as:
<span style="left-margin: 2em;">$Q(1)=Q(2)=1, \\ Q(n)=Q\big(n-Q(n-1)\big)+Q\big(n-Q(n-2)), \quad n>2.$</span>
It is defined like the <a href="https://rosettacode.org/wiki/Fibonacci sequence" title="Fibonacci sequence" target="_blank">Fibonacci sequence</a>, but whereas the next term in the Fibonacci sequence is the sum of the previous two terms, in the Q sequence the previous two terms tell you how far to go back in the Q sequence to find the two numbers to sum to make the next term of the sequence.
</section>

## Instructions
<section id='instructions'>
Implement the Hofstadter Q Sequence equation as a function. The function should accept number, <code>n</code>, and return an integer.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>hofstadterQ</code> should be a function.
    testString: assert(typeof hofstadterQ === 'function');
  - text: <code>hofstadterQ()</code> should return <code>integer</code>
    testString: assert(Number.isInteger(hofstadterQ(1000)));
  - text: <code>hofstadterQ(1000)</code> should return <code>502</code>
    testString: assert.equal(hofstadterQ(testCase[0]), res[0]);
  - text: <code>hofstadterQ(1500)</code> should return <code>755</code>
    testString: assert.equal(hofstadterQ(testCase[1]), res[1]);
  - text: <code>hofstadterQ(2000)</code> should return <code>1005</code>
    testString: assert.equal(hofstadterQ(testCase[2]), res[2]);
  - text: <code>hofstadterQ(2500)</code> should return <code>1261</code>
    testString: assert.equal(hofstadterQ(testCase[3]), res[3]);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function hofstadterQ(n) {

  return n;
}
```

</div>


### After Test
<div id='js-teardown'>

```js
const testCase = [1000, 1500, 2000, 2500];
const res = [502, 755, 1005, 1261];
```

</div>

</section>

## Solution
<section id='solution'>


```js
function hofstadterQ (n) {
  const memo = [1, 1, 1];
  const Q = function (i) {
    let result = memo[i];
    if (typeof result !== 'number') {
      result = Q(i - Q(i - 1)) + Q(i - Q(i - 2));
      memo[i] = result;
    }
    return result;
  };
  return Q(n);
}

```

</section>

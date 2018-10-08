---
title: 24 game
id: 5951e88f64ebf159166a1176
challengeType: 5
---

## Description
<section id='description'>
<p>Implement a function that takes a string of four digits as its argument, with each digit from 1 ──► 9 (inclusive) with repetitions allowed, and returns an arithmetic expression that evaluates to the number 24. If no such solution exists, return "no solution exists."</p>
<p>Rules:</p>
 Only the following operators/functions are allowed: multiplication, division, addition, subtraction
 Division should use floating point or rational arithmetic, etc, to preserve remainders.
 Forming multiple digit numbers from the supplied digits is disallowed. (So an answer of 12+12 when given 1, 2, 2, and 1 is wrong).
 The order of the digits when given does not have to be preserved.
<p>Example inputs:</p>
<code>solve24("4878");</code>
<code>solve24("1234");</code>
<code>solve24("6789");</code>
<code>solve24("1127");</code>
<p>Example outputs (strings):</p>
<code>(7-8/8)*4</code>
<code>3*1*4*2</code>
<code>(6*8)/(9-7)</code>
<code>(1+7)*(2+1)</code>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>solve24</code> is a function.
    testString: 'assert(typeof solve24 === "function", "<code>solve24</code> is a function.");'
  - text: <code>solve24("4878")</code> should return <code>(7-8/8)*4</code> or <code>4*(7-8/8)</code>
    testString: 'assert(include(answers[0], solve24(testCases[0])), "<code>solve24("4878")</code> should return <code>(7-8/8)*4</code> or <code>4*(7-8/8)</code>");'
  - text: <code>solve24("1234")</code> should return any arrangement of <code>1*2*3*4</code>
    testString: 'assert(include(answers[1], solve24(testCases[1])), "<code>solve24("1234")</code> should return any arrangement of <code>1*2*3*4</code>");'
  - text: <code>solve24("6789")</code> should return <code>(6*8)/(9-7)</code> or <code>(8*6)/(9-7)</code>
    testString: 'assert(include(answers[2], solve24(testCases[2])), "<code>solve24("6789")</code> should return <code>(6*8)/(9-7)</code> or <code>(8*6)/(9-7)</code>");'
  - text: <code>solve24("1127")</code> should return a permutation of <code>(1+7)*(1*2)</code>
    testString: 'assert(include(answers[3], solve24(testCases[3])), "<code>solve24("1127")</code> should return a permutation of <code>(1+7)*(1*2)</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function solve24 (numStr) {
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
// noprotect

function solve24 (numStr) {
  const digitsArr = numStr.split('');
  const answers = [];

  const digitPermutations = [];
  const operatorPermutations = [];

  function generateDigitPermutations (digits, permutations = []) {
    if (digits.length === 0) {
      digitPermutations.push(permutations);
    }
    else {
      for (let i = 0; i < digits.length; i++) {
        const curr = digits.slice();
        const next = curr.splice(i, 1);
        generateDigitPermutations(curr.slice(), permutations.concat(next));
      }
    }
  }

  function generateOperatorPermutations (permutations = []) {
    const operators = ['+', '-', '*', '/'];
    if (permutations.length === 3) {
      operatorPermutations.push(permutations);
    }
    else {
      for (let i = 0; i < operators.length; i++) {
        const curr = permutations.slice();
        curr.push(operators[i]);
        generateOperatorPermutations(curr);
      }
    }
  }

  generateDigitPermutations(digitsArr);
  generateOperatorPermutations();

  interleave();

  return answers[0];

  function interleave () {
    for (let i = 0; i < digitPermutations.length; i++) {
      for (let j = 0; j < operatorPermutations.length; j++) {
        const d = digitPermutations[i];
        const o = operatorPermutations[j];
        const perm = [
          `${d[0]}${o[0]}${d[1]}${o[1]}${d[2]}${o[2]}${d[3]}`,
          `(${d[0]}${o[0]}${d[1]})${o[1]}${d[2]}${o[2]}${d[3]}`,
          `${d[0]}${o[0]}(${d[1]}${o[1]}${d[2]})${o[2]}${d[3]}`,
          `${d[0]}${o[0]}${d[1]}${o[1]}(${d[2]}${o[2]}${d[3]})`,
          `${d[0]}${o[0]}(${d[1]}${o[1]}${d[2]}${o[2]}${d[3]})`,
          `(${d[0]}${o[0]}${d[1]}${o[1]}${d[2]})${o[2]}${d[3]}`,
          `(${d[0]}${o[0]}${d[1]})${o[1]}(${d[2]}${o[2]}${d[3]})`
        ];

        perm.forEach(combination => {
          const res = eval(combination);

          if (res === 24) {
            return answers.push(combination);
          }
        });
      }
    }
  }
}

```

</section>

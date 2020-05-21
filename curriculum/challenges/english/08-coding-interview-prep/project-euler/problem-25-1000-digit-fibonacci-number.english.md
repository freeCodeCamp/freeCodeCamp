---
id: 5900f3851000cf542c50fe98
challengeType: 5
isHidden: false
title: 'Problem 25: 1000-digit Fibonacci number'
forumTopicId: 301897
---

## Description
<section id='description'>

The Fibonacci sequence is defined by the recurrence relation:

<div style='padding-left: 4em;'>F<sub>n</sub> = F<sub>n−1</sub> + F<sub>n−2</sub>, where F<sub>1</sub> = 1 and F<sub>2</sub> = 1.</div>

Hence the first 12 terms will be:

<div style='padding-left: 4em; display: inline-grid; grid-template-rows: auto; row-gap: 7px;'><div>F<sub>1</sub> = 1</div><div>F<sub>2</sub> = 1</div><div>F<sub>3</sub> = 2</div><div>F<sub>4</sub> = 3</div><div>F<sub>5</sub> = 5</div><div>F<sub>6</sub> = 8</div><div>F<sub>7</sub> = 13</div><div>F<sub>8</sub> = 21</div><div>F<sub>9</sub> = 34</div><div>F<sub>10</sub> = 55</div><div>F<sub>11</sub> = 89</div><div>F<sub>12</sub> = 144</div></div>

The 12th term, F<sub>12</sub>, is the first term to contain three digits.

What is the index of the first term in the Fibonacci sequence to contain `n` digits?

</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>digitFibonacci(5)</code> should return a number.
    testString: assert(typeof digitFibonacci(5) === 'number');
  - text: <code>digitFibonacci(5)</code> should return 21.
    testString: assert.strictEqual(digitFibonacci(5), 21);
  - text: <code>digitFibonacci(10)</code> should return 45.
    testString: assert.strictEqual(digitFibonacci(10), 45);
  - text: <code>digitFibonacci(15)</code> should return 69.
    testString: assert.strictEqual(digitFibonacci(15), 69);
  - text: <code>digitFibonacci(20)</code> should return 93.
    testString: assert.strictEqual(digitFibonacci(20), 93);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function digitFibonacci(n) {
  // Good luck!
  return n;
}

digitFibonacci(20);
```

</div>



</section>

## Solution
<section id='solution'>


```js
const digitFibonacci = (n) => {
  const digits = (num) => {
    return num.toString().length;
  };
  let f1 = 1;
  let f2 = 1;
  let index = 3;
  while (true) {
    let fn = f1 + f2;
    if (digits(fn) === n) return index;
    [f1, f2] = [f2, fn];
    index++;
  }
};
```

</section>

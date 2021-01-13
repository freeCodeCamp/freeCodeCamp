---
id: 5951e88f64ebf159166a1176
title: 24 game
challengeType: 5
forumTopicId: 302218
dashedName: 24-game
---

# --description--

The [24 Game](https://en.wikipedia.org/wiki/24_Game) tests a person's mental arithmetic.

The aim of the game is to arrange four numbers in a way that when evaluated, the result is 24

# --instructions--

Implement a function that takes a string of four digits as its argument, with each digit from 1 to 9 (inclusive) with repetitions allowed, and returns an arithmetic expression that evaluates to the number 24. If no such solution exists, return "no solution exists".

<h4><strong>Rules:</strong></h4>
<ul>
  <li> Only the following operators/functions are allowed: multiplication, division, addition, subtraction. </li>
  <li> Division should use floating point or rational arithmetic, etc, to preserve remainders. </li>
  <li> Forming multiple digit numbers from the supplied digits is disallowed. (So an answer of 12+12 when given 1, 2, 2, and 1 is wrong). </li>
  <li> The order of the digits when given does not have to be preserved. </li>
</ul>

| Example input                 | Example output            |
| ----------------------------- | ------------------------- |
| <code>solve24("4878");</code> | <code>(7-8/8)\*4</code>   |
| <code>solve24("1234");</code> | <code>3\*1\*4\*2</code>   |
| <code>solve24("6789");</code> | <code>(6\*8)/(9-7)</code> |
| <code>solve24("1127");</code> | <code>(1+7)\*(2+1)</code> |

# --hints--

`solve24` should be a function.

```js
assert(typeof solve24 === 'function');
```

`solve24("4878")` should return `(7-8/8)*4` or `4*(7-8/8)`

```js
assert(include(answers[0], removeParentheses(solve24(testCases[0]))));
```

`solve24("1234")` should return any arrangement of `1*2*3*4`

```js
assert(include(answers[1], removeParentheses(solve24(testCases[1]))));
```

`solve24("6789")` should return `(6*8)/(9-7)` or `(8*6)/(9-7)`

```js
assert(include(answers[2], removeParentheses(solve24(testCases[2]))));
```

`solve24("1127")` should return a permutation of `(1+7)*(1+2)`

```js
assert(include(answers[3], removeParentheses(solve24(testCases[3]))));
```

# --seed--

## --after-user-code--

```js
const testCases = [
  '4878',
  '1234',
  '6789',
  '1127'
];

const answers = [
  ['(7-8/8)*4', '4*(7-8/8)', '(4-8+7)*8', '(4+7-8)*8', '(7+4-8)*8', '(7-8+4)*8', '8*(4-8+7)', '8*(4+7-8)', '8*(7+4-8)', '8*(7-8+4)'],
  ['1*2*3*4', '1*2*4*3', '1*3*2*4', '1*3*4*2', '1*4*2*3', '1*4*3*2', '2*1*3*4', '2*1*4*3', '2*3*1*4', '2*3*4*1', '2*4*3*1', '2*4*1*3', '3*1*2*4', '3*1*4*2', '3*2*1*4', '3*2*4*1', '3*4*1*2', '3*4*2*1', '4*1*2*3', '4*1*3*2', '4*2*1*3', '4*2*3*1', '4*3*1*2', '4*3*2*1', '(1+2+3)*4', '(1+3+2)*4', '(2+1+3)*4', '(2+3+1)*4', '(3+1+2)*4', '(3+2+1)*4', '4*(1+2+3)', '4*(2+1+3)', '4*(2+3+1)', '4*(3+1+2)', '4*(3+2+1)'],
  ['(6*8)/(9-7)', '(8*6)/(9-7)', '6*8/(9-7)', '8*6/(9-7)'],
  ['(1+7)*(2+1)', '(1+7)*(1+2)', '(1+2)*(1+7)', '(1+2)*(7+1)', '(2+1)*(1+7)', '(7+1)*(2+1)']
];

function include(ansArr, res) {
  const index = ansArr.indexOf(res);
  return index >= 0;
}

//The main method for detecting single parentheses
function removeParentheses(ans) {
  for (let i = 0; i < ans.length; i++) {
    if (!isNaN(ans[i])) {
      ans = removeParenthesesHelper(ans, i);
    }
  }
  return ans;
}

//Helper to remove left and right parantheses
function removeParenthesesHelper(ans, i) {
  while (i > 0 && i < ans.length - 1) {
    if (ans[i - 1] === '(' && ans[i + 1] === ')') {
      //Paranthesis detected. Remove them.
      ans = replaceChar(ans, '', i - 1);
      ans = replaceChar(ans, '', i);
      i--;
    } else {
      return ans;
    }
  }
  return ans;
}

//Replace a character at a given index for the provided character
function replaceChar(origString, replaceChar, index) {
  let firstPart = origString.substr(0, index);
  let lastPart = origString.substr(index + 1);
  let newString = firstPart + replaceChar + lastPart;
  return newString;
}
```

## --seed-contents--

```js
function solve24 (numStr) {

  return true;
}
```

# --solutions--

```js
function solve24(numStr) {
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

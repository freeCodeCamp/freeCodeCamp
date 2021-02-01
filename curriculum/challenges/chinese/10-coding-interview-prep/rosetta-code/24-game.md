---
id: 5951e88f64ebf159166a1176
title: 24场比赛
challengeType: 5
videoUrl: ''
dashedName: 24-game
---

# --description--

<p>实现一个以四位数字串为参数的函数，每个数字从1──►9（含），允许重复，并返回一个算术表达式，其值为24。如果不存在这样的解，则返回“没有解决方案。“ </p><p>规则： </p>只允许以下运算符/函数：乘法，除法，加法，减法除法应使用浮点或有理算术等来保留余数。不允许从提供的数字中形成多位数字。 （所以当给出1,2,2和1时，12 + 12的答案是错误的）。给定的数字顺序不必保留。 <p>示例输入： </p>  <code>solve24("4878");</code>  <code>solve24("1234");</code>  <code>solve24("6789");</code>  <code>solve24("1127");</code>  <p>示例输出（字符串）： </p>  <code>(7-8/8)\*4</code>  <code>3\*1\*4\*2</code>  <code>(6\*8)/(9-7)</code>  <code>(1+7)\*(2+1)</code>

# --hints--

`solve24`是一个函数。

```js
assert(typeof solve24 === 'function');
```

`solve24("4878")`应返回`(7-8/8)*4`或`4*(7-8/8)`

```js
assert(include(answers[0], solve24(testCases[0])));
```

`solve24("1234")`应返回`1*2*3*4`任何排列

```js
assert(include(answers[1], solve24(testCases[1])));
```

`solve24("6789")`应返回`(6*8)/(9-7)`或`(8*6)/(9-7)`

```js
assert(include(answers[2], solve24(testCases[2])));
```

`solve24("1127")`应该返回`(1+7)*(1*2)`的排列

```js
assert(include(answers[3], solve24(testCases[3])));
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

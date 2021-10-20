---
id: 5951e88f64ebf159166a1176
title: 24 點遊戲
challengeType: 5
forumTopicId: 302218
dashedName: 24-game
---

# --description--

[24 點遊戲](https://en.wikipedia.org/wiki/24_Game)測試一個人的心算能力。

遊戲的目標是使四個數字的計算結果是 24。

# --instructions--

實現一個函數，該函數將一個四位數的字符串作爲其參數，每個數字從 1 到 9（含）並允許重複，並返回一個計算結果爲數字 24 的算術表達式。 如果不存在這樣的解，則返回“沒有解決方案”。

**規則：**
<ul>
  <li> 只允許以下運算符/函數：乘法、除法、加法、減法。 </li>
  <li> 除法應使用浮點或有理算術等來保留餘數。 </li>
  <li> 不允許從提供的數字中形成多位數字。 （所以當給出 1、2、2 和 1 時，12 + 12 的答案是錯誤的）。 </li>
  <li> 不必依照給定的數字順序。 </li>
</ul>

| 示例輸入                      | 示例輸出                      |
| ------------------------- | ------------------------- |
| <code>solve24("4878");</code> | <code>(7-8/8)\*4</code> |
| <code>solve24("1234");</code> | <code>3\*1\*4\*2</code> |
| <code>solve24("6789");</code> | <code>(6\*8)/(9-7)</code> |
| <code>solve24("1127");</code> | <code>(1+7)\*(2+1)</code> |

# --hints--

`solve24` 應該是一個函數。

```js
assert(typeof solve24 === 'function');
```

`solve24("4878")` 應該返回 `(7-8/8)*4` 或 `4*(7-8/8)`。

```js
assert(include(answers[0], removeParentheses(solve24(testCases[0]))));
```

`solve24("1234")` 應該返回 `1*2*3*4`。

```js
assert(include(answers[1], removeParentheses(solve24(testCases[1]))));
```

`solve24("6789")` 應該返回 `(6*8)/(9-7)` 或 `(8*6)/(9-7)`。

```js
assert(include(answers[2], removeParentheses(solve24(testCases[2]))));
```

`solve24("1127")` 應該返回 `(1+7)*(1+2)`。

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

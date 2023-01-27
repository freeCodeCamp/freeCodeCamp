---
id: 5951e88f64ebf159166a1176
title: 24 game
challengeType: 1
forumTopicId: 302218
dashedName: 24-game
---

# --description--

The 24 Game tests a person's mental arithmetic.

ゲームの目的は、算出結果が24になるように4つの数字を配置することです。

# --instructions--

4桁の文字列を引数とする関数を作成します。 各桁は、1 から 9 までの数字で、繰り返しも可能です。この関数は、算出結果が数値 24 になる算術式を返します。 そのような解が存在しない場合は、「解が存在しません」を返します。

**ルール:**
<ul>
  <li> 以下の演算子/関数のみが使用できます: 乗算、除算、加算、減算。 </li>
  <li> 除算では、余りを保持するために浮動小数点や有理数演算などを使用します。 </li>
  <li> 与えられた数字から複数の桁数を作成することはできません。 (つまり、1、2、2、1が与えられた場合、12+12という答えは間違っています)。 </li>
  <li> 与えられた数字の順序は保持する必要がありません。 </li>
</ul>

| 入力例                       | 出力例                       |
| ------------------------- | ------------------------- |
| <code>solve24("4878");</code> | <code>(7-8/8)\*4</code> |
| <code>solve24("1234");</code> | <code>3\*1\*4\*2</code> |
| <code>solve24("6789");</code> | <code>(6\*8)/(9-7)</code> |
| <code>solve24("1127");</code> | <code>(1+7)\*(2+1)</code> |

# --hints--

`solve24` という関数です。

```js
assert(typeof solve24 === 'function');
```

`solve24("4878")` should return `(7-8/8)*4`, `4*(7-8/8)`, or a similar valid string

```js
assert(isValidSolution_(solve24(testCases_[0])));
```

`solve24("1234")` should return `1*2*3*4` or a similar valid string

```js
assert(isValidSolution_(solve24(testCases_[1])));
```

`solve24("6789")` should return `(6*8)/(9-7)`, `(8*6)/(9-7)`, or a similar valid string

```js
assert(isValidSolution_(solve24(testCases_[2])));
```

`solve24("1127")` should return `(1+7)*(1+2)` or a similar valid string

```js
assert(isValidSolution_(solve24(testCases_[3])));
```

# --seed--

## --after-user-code--

```js
const testCases_ = [
  '4878',
  '1234',
  '6789',
  '1127'
];

const OPERATORS_ = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
}

const PRECIDENCE_ = {
  "+": 1,
  "-": 1,
  "*": 2,
  "/": 2,
}

function evaluate_(expression) {
  expression = expression.replace('/\s+/g', '');
  const stack = [];
  let postfix = "";

  // Convert from infix to postfix
  let head = 0;
  while (head < expression.length) {
    let c = expression[head];
    switch (c) {
      case "(":
        stack.push(c);
        break;
      case ")":
        let last = stack.pop();
        while (last !== "(") {
          postfix += last;
          last = stack.pop();
        }
        break;
      case "+":
      case "-":
      case "*":
      case "/":
        while (stack.length &&
               PRECIDENCE_[c] <= PRECIDENCE_[stack[stack.length-1]]) {
          postfix += stack.pop();
        }
        stack.push(c);
        break;
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        postfix += c;
        break;
      default:
        return false;
    }
    head++;
  }

  // Clear out stack
  while (stack.length) {
    postfix += stack.pop();
  }

  // Evaluate postfix
  for (let c of postfix) {
    switch (c) {
      case "+":
      case "-":
      case "*":
      case "/":
        const b = +stack.pop();
        const a = +stack.pop();
        stack.push(OPERATORS_[c](a, b));
        break;
      default:
        stack.push(c);
    }
  }
  return stack.pop();
}

// Check solution validity
function isValidSolution_(userSolution) {
  return evaluate_(userSolution) === 24;
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

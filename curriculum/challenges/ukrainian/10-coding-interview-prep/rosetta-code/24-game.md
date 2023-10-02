---
id: 5951e88f64ebf159166a1176
title: Гра 24
challengeType: 1
forumTopicId: 302218
dashedName: 24-game
---

# --description--

The 24 Game tests a person's mental arithmetic.

Мета гри - впорядкувати чотири числа так, щоб при обчислюванні, результат дорівнював 24

# --instructions--

Реалізуйте функцію, яка бере за аргумент рядок з чотирьох цифр, причому кожна цифра від 1 до 9 (включно) з дозволеними повторами, що повертає арифметичний вираз, що буде дорівнювати 24. Якщо ж такого рішення не існує, то поверніть "рішення не існує".

**Правила:**
<ul>
  <li> Дозволені тільки такі оператори/функції: множення, ділення, додавання, віднімання. </li>
  <li> Для збереження остачі при діленні, слід використовувати арифметику з плаваючою комою, раціональну арифметику тощо. </li>
  <li> Формування багаторозрядних чисел з даних чисел не допускається. (Отже, відповідь 12 + 12 з даними 1, 2, 2 і 1 неправильна). </li>
  <li> Порядок цифр, коли він даний, не має зберігатися. </li>
</ul>

| Приклад вхідний           | Приклад вихідний          |
| ------------------------- | ------------------------- |
| <code>solve24("4878");</code> | <code>(7-8/8)\*4</code> |
| <code>solve24("1234");</code> | <code>3\*1\*4\*2</code> |
| <code>solve24("6789");</code> | <code>(6\*8)/(9-7)</code> |
| <code>solve24("1127");</code> | <code>(1+7)\*(2+1)</code> |

# --hints--

`solve24` має бути функцією.

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

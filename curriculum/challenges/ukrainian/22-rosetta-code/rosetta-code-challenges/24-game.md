---
id: 5951e88f64ebf159166a1176
title: Гра 24
challengeType: 1
forumTopicId: 302218
dashedName: 24-game
---

# --description--

«Гра 24» перевіряє здатність людини виконувати усні обчислення.

Мета гри — впорядкувати чотири цифри так, щоб при обчислюванні результат дорівнював 24.

# --instructions--

Реалізуйте функцію, яка приймає рядок з чотирьох цифр (від 1 до 9 включно; дозволено повторення) як аргумент та повертає арифметичний вираз, що дорівнює 24. Якщо такого розв’язку не існує, то поверніть «no solution exists».

**Правила:**
<ul>
  <li> Дозволено тільки такі оператори/функції: множення, ділення, додавання, віднімання. </li>
  <li> При діленні потрібно використати кому або раціональний підхід, щоб зберегти остачу. </li>
  <li> Заборонено змінювати формат наданих цифр. (Тобто, якщо надано 1, 2, 2 та 1, то відповідь 12+12 буде неправильною). </li>
  <li> Необов’язково дотримуватись наданого порядку цифр. </li>
</ul>

| Приклад вводу             | Приклад виводу            |
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

`solve24("4878")` має повернути `(7-8/8)*4`, `4*(7-8/8)` або схожий дійсний рядок

```js
assert(isValidSolution_(solve24(testCases_[0])));
```

`solve24("1234")` має повернути `1*2*3*4` або схожий дійсний рядок

```js
assert(isValidSolution_(solve24(testCases_[1])));
```

`solve24("6789")` має повернути `(6*8)/(9-7)`, `(8*6)/(9-7)` або схожий дійсний рядок

```js
assert(isValidSolution_(solve24(testCases_[2])));
```

`solve24("1127")` має повернути `(1+7)*(1+2)` або схожий дійсний рядок

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

const PRECEDENCE_ = {
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
               PRECEDENCE_[c] <= PRECEDENCE_[stack[stack.length-1]]) {
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

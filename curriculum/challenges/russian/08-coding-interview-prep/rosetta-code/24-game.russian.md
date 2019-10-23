---
title: 24 game
id: 5951e88f64ebf159166a1176
challengeType: 5
forumTopicId: 302218
localeTitle: 24 игра
---

## Description
<section id='description'>
<p> Реализуйте функцию, которая принимает в качестве аргумента строку из четырех цифр: каждая цифра от 1 ──► 9 (включительно) с разрешенными повторениями и возвращает арифметическое выражение, которое оценивается с номером 24. Если такого решения не существует, не существует никакого решения ». </p><p> Правила: </p> Допускаются только следующие операторы / функции: умножение, деление, сложение, вычитание. Отдел должен использовать с плавающей точкой или рациональную арифметику и т. Д. Для сохранения остатков. Формирование нескольких цифр из предоставленных цифр не разрешено. (Таким образом, ответ 12 + 12 при наличии 1, 2, 2 и 1 неверен). Порядок цифр, когда они указаны, не обязательно сохраняется. <p> Пример ввода: </p> <code>solve24(&quot;4878&quot;);</code> <code>solve24(&quot;1234&quot;);</code> <code>solve24(&quot;6789&quot;);</code> <code>solve24(&quot;1127&quot;);</code> <p> Пример выходов (строк): </p> <code>(7-8/8)*4</code> <code>3*1*4*2</code> <code>(6*8)/(9-7)</code> <code>(1+7)*(2+1)</code>
</section>

## Instructions
<section id='instructions'>
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
| <code>solve24("1234");</code> | <code>3_1_4\*2</code>     |
| <code>solve24("6789");</code> | <code>(6\*8)/(9-7)</code> |
| <code>solve24("1127");</code> | <code>(1+7)\*(2+1)</code> |
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>solve24</code> is a function.
    testString: assert(typeof solve24 === 'function');
  - text: <code>solve24("4878")</code> should return <code>(7-8/8)*4</code> or <code>4*(7-8/8)</code>
    testString: assert(include(answers[0], solve24(testCases[0])));
  - text: <code>solve24("1234")</code> should return any arrangement of <code>1*2*3*4</code>
    testString: assert(include(answers[1], solve24(testCases[1])));
  - text: <code>solve24("6789")</code> should return <code>(6*8)/(9-7)</code> or <code>(8*6)/(9-7)</code>
    testString: assert(include(answers[2], solve24(testCases[2])));
  - text: <code>solve24("1127")</code> should return a permutation of <code>(1+7)*(1*2)</code>
    testString: assert(include(answers[3], solve24(testCases[3])));

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

### After Tests
<div id='js-teardown'>

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

```

</div>

</section>

## Solution
<section id='solution'>

```js
// noprotect

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

</section>

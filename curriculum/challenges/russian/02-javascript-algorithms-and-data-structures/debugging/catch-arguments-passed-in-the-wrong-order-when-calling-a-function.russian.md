---
id: 587d7b85367417b2b2512b3a
title: Catch Arguments Passed in the Wrong Order When Calling a Function
challengeType: 1
forumTopicId: 301184
localeTitle: Аргументы улова, пропущенные в неправильном порядке при вызове функции
---

## Description
<section id='description'>
Продолжая обсуждение функций вызова, следующая ошибка, на которую следует обратить внимание, - это когда аргументы функции поставляются в неправильном порядке. Если аргументы представляют собой разные типы, такие как функция, ожидающая массив и целое число, это скорее всего вызовет ошибку времени выполнения. Если аргументы одного типа (все целые числа, например), то логика кода не имеет смысла. Обязательно укажите все необходимые аргументы в правильном порядке, чтобы избежать этих проблем.
</section>

## Instructions
<section id='instructions'>
Функция <code>raiseToPower</code> повышает базу до экспоненты. К сожалению, он не называется правильно - исправьте код, так что значение <code>power</code> будет ожидаемым 8.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should fix the variable <code>power</code> so it equals 2 raised to the 3rd power, not 3 raised to the 2nd power.
    testString: assert(power == 8);
  - text: Your code should use the correct order of the arguments for the <code>raiseToPower</code> function call.
    testString: assert(code.match(/raiseToPower\(\s*?base\s*?,\s*?exp\s*?\);/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function raiseToPower(b, e) {
  return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower(exp, base);
console.log(power);

```

</div>

</section>

## Solution
<section id='solution'>

```js
function raiseToPower(b, e) {
 return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower(base, exp);
console.log(power);
```

</section>

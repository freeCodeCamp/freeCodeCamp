---
id: 587d7b85367417b2b2512b3a
title: Знаходження переданих у неправильному порядку аргументів під час виклику функції
challengeType: 1
forumTopicId: 301184
dashedName: catch-arguments-passed-in-the-wrong-order-when-calling-a-function
---

# --description--

Продовжуючи обговорення виклику функцій, наступною помилкою може бути пошук аргументів функції, переданих у неправильному порядку. Якщо аргументи відносяться до різних типів, наприклад, функцій з масивами та цілими числами, то це, ймовірно, призведе до помилок в коді. Якщо аргументи відносяться до одного типу (наприклад, усі з них - цілі числа), тоді послідовність коду не матиме сенсу. Переконайтеся, що усі необхідні аргументи розташовано у правильному порядку, щоб уникнути цих проблем.

# --instructions--

Функція `raiseToPower` підносить основу до ступеня. На жаль, його не викликано належним чином - виправіть код так, щоб значення `power` дорівнювало 8.

# --hints--

Ваш код має виправити змінну `power`, щоб вона дорівнювала 2-ом піднесеним до 3 ступеня, а не 3-ом піднесеним до 2 ступеня.

```js
assert(power == 8);
```

Ваш код має використовувати правильний порядок аргументів для виклику функції `raiseToPower`.

```js
assert(code.match(/raiseToPower\(\s*?base\s*?,\s*?exp\s*?\);/g));
```

# --seed--

## --seed-contents--

```js
function raiseToPower(b, e) {
  return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower(exp, base);
console.log(power);
```

# --solutions--

```js
function raiseToPower(b, e) {
 return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower(base, exp);
console.log(power);
```

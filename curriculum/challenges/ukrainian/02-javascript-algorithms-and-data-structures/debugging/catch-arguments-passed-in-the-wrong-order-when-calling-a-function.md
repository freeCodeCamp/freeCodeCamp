---
id: 587d7b85367417b2b2512b3a
title: Аргументи, передані у неправильному порядку
challengeType: 1
forumTopicId: 301184
dashedName: catch-arguments-passed-in-the-wrong-order-when-calling-a-function
---

# --description--

Продовжуючи обговорення виклику функцій: наступною помилкою можуть бути аргументи функції, передані у неправильному порядку. Якщо аргументи належать до різних типів, (наприклад, функція очікує масив та ціле число), то це, ймовірно, призведе до помилки виконання. Якщо аргументи належать до одного типу (наприклад, усі є цілими числами), то логіка коду не матиме сенсу. Переконайтеся, що усі необхідні аргументи розташовано у правильному порядку, щоб уникнути цих проблем.

# --instructions--

Функція `raiseToPower` підносить основу до степеня. На жаль, її не викликано належним чином. Виправте код так, щоб значенням `power` було 8.

# --hints--

Ваш код повинен виправити змінну `power` так, щоб вона дорівнювала 2 у 3 степені, а не 3 у 2 степені.

```js
assert(power == 8);
```

Ваш код повинен використовувати правильний порядок аргументів для виклику функції `raiseToPower`.

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

---
id: 587d7b84367417b2b2512b34
title: Використання typeof для перевірки типу змінної
challengeType: 1
forumTopicId: 18374
dashedName: use-typeof-to-check-the-type-of-a-variable
---

# --description--

Ви можете використати `typeof`, щоб перевірити структуру даних (або тип) змінної. Це може бути корисно, якщо ви працюєте з різними типами даних. Якщо ви думаєте, що додаєте два числа, але одне з них насправді є рядком, результати можуть бути непередбачуваними. Помилки типів можуть ховатися у розрахунках або викликах функцій. Будьте особливо обережні, коли отримуєте доступ та працюєте із зовнішніми даними у вигляді об’єктів JSON.

Ось декілька прикладів використання `typeof`:

```js
console.log(typeof "");
console.log(typeof 0);
console.log(typeof []);
console.log(typeof {});
```

Консоль по порядку відображатиме рядки `string`, `number`, `object` та `object`.

JavaScript розпізнає сім примітивних (незмінних) типів даних: `Boolean`, `Null`, `Undefined`, `Number`, `String`, `Symbol` (новий з ES6) та `BigInt` (новий з ES2020), та один тип для змінних елементів: `Object`. Зверніть увагу, що масиви у JavaScript технічно є типом об’єкту.

# --instructions--

Додайте дві інструкції `console.log()`, щоб перевірити тип (`typeof`) двох змінних: `seven` та `three`.

# --hints--

Ваш код повинен використати оператор `typeof` у двох інструкціях `console.log()`, щоб перевірити тип змінних.

```js
assert(code.match(/console\.log\s*\(typeof[\( ].*\)?\)/g).length == 2);
```

Ваш код повинен використати оператор `typeof`, щоб перевірити тип змінної `seven`.

```js
assert(code.match(/typeof[\( ]seven\)?/g));
```

Ваш код повинен використати оператор `typeof`, щоб перевірити тип змінної `three`.

```js
assert(code.match(/typeof[\( ]three\)?/g));
```

# --seed--

## --seed-contents--

```js
let seven = 7;
let three = "3";
console.log(seven + three);
// Only change code below this line
```

# --solutions--

```js
let seven = 7;let three = "3";console.log(typeof seven);
console.log(typeof three);
```

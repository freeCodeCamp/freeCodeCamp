---
id: 587d7b84367417b2b2512b34
title: Використання typeof для перевірки типу змінної
challengeType: 1
forumTopicId: 18374
dashedName: use-typeof-to-check-the-type-of-a-variable
---

# --description--

Ви можете використовувати оператор `typeof` для перевірки структури даних або типу змінної. Це може бути корисним для налагодження програм у випадку, коли ви працюєте з різними типами даних. Якщо ви думаєте, що додаєте два числа, але одне з них насправді є рядком, результати можуть бути непередбачуваними. Помилки в типах даних можуть ховатися у розрахунках або ж викликах функцій. Будьте особливо обережні, отримуючи доступ та працюючи із зовнішніми даними у вигляді запису об'єктів JavaScript (JSON).

Ось кілька прикладів використання оператора `typeof`:

```js
console.log(typeof "");
console.log(typeof 0);
console.log(typeof []);
console.log(typeof {});
```

Консоль по порядку відображатиме рядки `string`, `number`, `object` та `object`.

JavaScript розпізнає шість примітивних (незмінних) типів даних `Boolean`, `Null`, `Undefined`, `Number`, `String` та `Symbol` (новий з ES6) і один тип для змінних елементів: `Object`. Візьміть до уваги, що у JavaScript масиви технічно є типом об'єкту.

# --instructions--

Додайте дві команди `console.log()` для перевірки оператором `typeof` кожної з двох змінних, `seven` та `three`, у коді.

# --hints--

Ваш код повинен використати оператор `typeof` у двох командах `console.log()` для перевірки типів змінних.

```js
assert(code.match(/console\.log\(typeof[\( ].*\)?\)/g).length == 2);
```

Ваш код повинен використати оператор `typeof` для перевірки типу змінної `seven`.

```js
assert(code.match(/typeof[\( ]seven\)?/g));
```

Ваш код повинен використати оператор `typeof` для перевірки типу змінної `three`.

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

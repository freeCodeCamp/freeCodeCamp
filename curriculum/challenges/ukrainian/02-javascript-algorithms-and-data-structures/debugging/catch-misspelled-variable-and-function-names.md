---
id: 587d7b84367417b2b2512b35
title: Неправильно написані назви змінних та функцій
challengeType: 1
forumTopicId: 301186
dashedName: catch-misspelled-variable-and-function-names
---

# --description--

Методи `console.log()` та `typeof` є двома основними способами перевірки проміжних значень та типів виводу програми. Тепер час заглибитися у найпоширеніші помилки. Однією помилкою на синтаксичному рівні, яку можна допустити при швидкому друці, є звичайна орфографічна помилка.

Якщо символ у змінній чи назві функції буде перенесений, відсутній, або ж матиме неправильний регістр, браузер виконуватиме пошук неіснуючого об’єкта та надсилатиме скарги у формі посилання на помилку. Назви змінних та функцій у JavaScript чутливі до регістру.

# --instructions--

Виправте дві помилки правопису в коді, щоб розрахунок `netWorkingCapital` працював.

# --hints--

Перевірте правопис двох змінних, використаних у розрахунку netWorkingCapital, щоб вихідні дані консолі показували «Net working capital is: 2».

```js
assert(netWorkingCapital === 2);
```

У коді не повинно бути змінних з орфографічними помилками.

```js
assert(!code.match(/recievables/g));
```

Змінна `receivables` повинна бути правильно оголошеною та використаною.

```js
assert(code.match(/receivables/g).length == 2);
```

У коді не повинно бути змінних з орфографічними помилками.

```js
assert(!code.match(/payable;/g));
```

Змінна `payables` повинна бути правильно оголошеною та використаною.

```js
assert(code.match(/payables/g).length == 2);
```

# --seed--

## --seed-contents--

```js
let receivables = 10;
let payables = 8;
let netWorkingCapital = recievables - payable;
console.log(`Net working capital is: ${netWorkingCapital}`);
```

# --solutions--

```js
let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`);
```

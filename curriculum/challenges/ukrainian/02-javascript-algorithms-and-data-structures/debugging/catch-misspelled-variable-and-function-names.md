---
id: 587d7b84367417b2b2512b35
title: Знаходження неправильно написаних змінних та назв функцій
challengeType: 1
forumTopicId: 301186
dashedName: catch-misspelled-variable-and-function-names
---

# --description--

Методи `console.log()` та `typeof` є двома основними способами перевірки допоміжних значень та типів вихідних програм. Тепер час заглибитися у найпоширеніші різновиди форм, які можуть приймати помилки. Одна помилка на синтаксичному рівні, яку можна допустити при швидкому друці, є звичайною помилкою правопису.

Якщо символ у змінній чи назві функції буде перенесений, відсутній, або ж матиме неправильний регістр, браузер виконуватиме пошук неіснуючого об'єкта та надсилатиме скарги у формі посилання на помилку. Змінні та назви функцій JavaScript є чутливим до регістру літер.

# --instructions--

Виправте дві помилки правопису в коді, щоб розрахунок `netWorkingCapital` працював.

# --hints--

Перевірте правопис двох змінних, використаних у розрахунку netWorkingCapital, щоб вихідні дані консолі показували "Чистий робочий капітал: 2".

```js
assert(netWorkingCapital === 2);
```

There should be no instances of misspelled variables in the code.

```js
assert(!code.match(/recievables/g));
```

Змінна `receivables` коду має бути правильно об'явлена і використана.

```js
assert(code.match(/receivables/g).length == 2);
```

There should be no instances of misspelled variables in the code.

```js
assert(!code.match(/payable;/g));
```

Змінна `payables` коду має бути правильно об'явлена і використана.

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

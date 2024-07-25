---
id: 66581a7eb1eb228115949300
title: Навчіться розв’язувати проблеми та розуміти помилки. Запитання G
challengeType: 15
dashedName: learn-to-solve-problems-and-understand-errors-question-g
---

# --description--

Припустимо, ви маєте два рядки, які б хотіли об’єднати в одне повідомлення:

```js
const str1 = "Hello";
const str2 = "World!";
const message = str1.push(str2);
```

<img src="https://cdn.statically.io/gh/TheOdinProject/curriculum/4ed59981b4ce2c60b5b83bf7415d3127b61821f5/foundations/javascript_basics/understanding_errors/imgs/03.png" style="width:100%" alt="приклад type error на консолі розробника Chrome" />

Ви отримаєте `TypeError` з повідомленням `str1.push is not a function`. Це поширене повідомлення про помилку, яке заплутує новачків, оскільки ви можете знати, що `.push()` точно є функцією (наприклад, ви вже використовували її раніше, щоб додати елементи до масивів).

У цьому і справа: `.push()` є методом масиву, а не методом рядка. Отже, це «не функція», яку ви можете знайти як метод рядка. Якщо змінити `.push()` на `.concat()` (правильний метод рядка), код працюватиме як задумано!

Хороша порада, яку варто пам’ятати при роботі з `TypeError`: враховуйте тип даних, до якого намагаєтеся застосувати метод або операцію. Можливо, ви дізнаєтесь, що це інший тип даних, або операція чи метод не сумісні з цим типом.

# --question--

## --text--

Чому наданий код JavaScript призводить до `TypeError`?

```js
const str1 = "Hello";
const str2 = "World!";
const message = str1.push(str2);
```

## --answers--

Метод `.push()` можна використовувати лише на об’єктах, а не рядках.

---

Метод `.push()` не доступний для рядків, бо це метод масивів.

---

Метод `.push()` написано неправильно, має бути .pusch().

---

`TypeError` є результатом помилки синтаксису в коді JavaScript.

## --video-solution--

2
